import axios from 'axios';
import { CanvaTemplate, CanvaDesignResponse } from '@/types';

const CANVA_API_BASE_URL = 'https://api.canva.com/v1';

export class CanvaAPI {
  private accessToken: string;

  constructor(accessToken: string) {
    this.accessToken = accessToken;
  }

  /**
   * Busca templates do Canva
   */
  async getTemplates(query?: string): Promise<CanvaTemplate[]> {
    try {
      const response = await axios.get(`${CANVA_API_BASE_URL}/designs`, {
        headers: {
          Authorization: `Bearer ${this.accessToken}`,
        },
        params: {
          query,
          design_type: 'InstagramStory', // Formato similar a Reels
        },
      });

      return response.data.items.map((item: any) => ({
        id: item.id,
        name: item.name,
        thumbnail: item.thumbnail?.url || '',
        width: item.width,
        height: item.height,
        type: 'video' as const,
      }));
    } catch (error) {
      console.error('Erro ao buscar templates do Canva:', error);
      throw error;
    }
  }

  /**
   * Cria um novo design a partir de um template
   */
  async createDesignFromTemplate(
    templateId: string,
    title: string
  ): Promise<CanvaDesignResponse> {
    try {
      const response = await axios.post(
        `${CANVA_API_BASE_URL}/designs`,
        {
          design_type: 'InstagramStory',
          asset_id: templateId,
          title,
        },
        {
          headers: {
            Authorization: `Bearer ${this.accessToken}`,
            'Content-Type': 'application/json',
          },
        }
      );

      return {
        id: response.data.design.id,
        url: response.data.design.url,
      };
    } catch (error) {
      console.error('Erro ao criar design no Canva:', error);
      throw error;
    }
  }

  /**
   * Exporta um design como vídeo
   */
  async exportDesignAsVideo(designId: string): Promise<string> {
    try {
      const response = await axios.post(
        `${CANVA_API_BASE_URL}/exports`,
        {
          design_id: designId,
          format: 'mp4',
          quality: 'high',
        },
        {
          headers: {
            Authorization: `Bearer ${this.accessToken}`,
            'Content-Type': 'application/json',
          },
        }
      );

      // Aguardar o processamento do export
      const exportId = response.data.export.id;
      return await this.waitForExport(exportId);
    } catch (error) {
      console.error('Erro ao exportar design:', error);
      throw error;
    }
  }

  /**
   * Aguarda o processamento de um export
   */
  private async waitForExport(exportId: string): Promise<string> {
    let attempts = 0;
    const maxAttempts = 30;

    while (attempts < maxAttempts) {
      try {
        const response = await axios.get(
          `${CANVA_API_BASE_URL}/exports/${exportId}`,
          {
            headers: {
              Authorization: `Bearer ${this.accessToken}`,
            },
          }
        );

        if (response.data.export.status === 'success') {
          return response.data.export.url;
        }

        if (response.data.export.status === 'failed') {
          throw new Error('Export falhou');
        }

        // Aguardar 2 segundos antes de tentar novamente
        await new Promise((resolve) => setTimeout(resolve, 2000));
        attempts++;
      } catch (error) {
        console.error('Erro ao verificar status do export:', error);
        throw error;
      }
    }

    throw new Error('Timeout ao aguardar export');
  }

  /**
   * Obtém a URL de edição de um design
   */
  getEditUrl(designId: string): string {
    return `https://www.canva.com/design/${designId}/edit`;
  }
}

/**
 * Inicializa a autenticação OAuth com o Canva
 */
export function initCanvaAuth() {
  const clientId = process.env.NEXT_PUBLIC_CANVA_CLIENT_ID;
  const redirectUri = `${process.env.NEXT_PUBLIC_API_URL}/auth/canva/callback`;
  const scope = 'design:content:read design:content:write';

  const authUrl = `https://www.canva.com/api/oauth/authorize?client_id=${clientId}&redirect_uri=${encodeURIComponent(
    redirectUri
  )}&scope=${encodeURIComponent(scope)}&response_type=code`;

  return authUrl;
}

/**
 * Troca o código de autorização por um access token
 */
export async function exchangeCodeForToken(code: string): Promise<string> {
  try {
    const response = await axios.post(
      'https://api.canva.com/oauth/token',
      {
        grant_type: 'authorization_code',
        code,
        client_id: process.env.NEXT_PUBLIC_CANVA_CLIENT_ID,
        client_secret: process.env.CANVA_CLIENT_SECRET,
        redirect_uri: `${process.env.NEXT_PUBLIC_API_URL}/auth/canva/callback`,
      },
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );

    return response.data.access_token;
  } catch (error) {
    console.error('Erro ao trocar código por token:', error);
    throw error;
  }
}
