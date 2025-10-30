import axios from 'axios';

const INSTAGRAM_GRAPH_API = 'https://graph.facebook.com/v18.0';

export class InstagramAPI {
  private accessToken: string;
  private userId: string;

  constructor(accessToken: string, userId: string) {
    this.accessToken = accessToken;
    this.userId = userId;
  }

  /**
   * Publica um reel no Instagram
   */
  async publishReel(
    videoUrl: string,
    caption: string,
    coverUrl?: string
  ): Promise<string> {
    try {
      // Passo 1: Criar container de mídia
      const containerResponse = await axios.post(
        `${INSTAGRAM_GRAPH_API}/${this.userId}/media`,
        {
          media_type: 'REELS',
          video_url: videoUrl,
          caption: caption,
          cover_url: coverUrl,
          share_to_feed: true,
        },
        {
          params: {
            access_token: this.accessToken,
          },
        }
      );

      const containerId = containerResponse.data.id;

      // Passo 2: Aguardar processamento
      await this.waitForMediaProcessing(containerId);

      // Passo 3: Publicar o reel
      const publishResponse = await axios.post(
        `${INSTAGRAM_GRAPH_API}/${this.userId}/media_publish`,
        {
          creation_id: containerId,
        },
        {
          params: {
            access_token: this.accessToken,
          },
        }
      );

      return publishResponse.data.id;
    } catch (error: any) {
      console.error('Erro ao publicar reel:', error.response?.data || error);
      throw error;
    }
  }

  /**
   * Aguarda o processamento da mídia
   */
  private async waitForMediaProcessing(containerId: string): Promise<void> {
    let attempts = 0;
    const maxAttempts = 30;

    while (attempts < maxAttempts) {
      try {
        const response = await axios.get(
          `${INSTAGRAM_GRAPH_API}/${containerId}`,
          {
            params: {
              fields: 'status_code',
              access_token: this.accessToken,
            },
          }
        );

        const statusCode = response.data.status_code;

        if (statusCode === 'FINISHED') {
          return;
        }

        if (statusCode === 'ERROR') {
          throw new Error('Erro no processamento da mídia');
        }

        // Aguardar 3 segundos antes de verificar novamente
        await new Promise((resolve) => setTimeout(resolve, 3000));
        attempts++;
      } catch (error) {
        console.error('Erro ao verificar status da mídia:', error);
        throw error;
      }
    }

    throw new Error('Timeout ao aguardar processamento da mídia');
  }

  /**
   * Obtém informações da conta do Instagram
   */
  async getAccountInfo() {
    try {
      const response = await axios.get(
        `${INSTAGRAM_GRAPH_API}/${this.userId}`,
        {
          params: {
            fields: 'id,username,account_type,media_count',
            access_token: this.accessToken,
          },
        }
      );

      return response.data;
    } catch (error) {
      console.error('Erro ao obter informações da conta:', error);
      throw error;
    }
  }

  /**
   * Obtém insights de um reel publicado
   */
  async getReelInsights(mediaId: string) {
    try {
      const response = await axios.get(
        `${INSTAGRAM_GRAPH_API}/${mediaId}/insights`,
        {
          params: {
            metric: 'plays,reach,total_interactions,likes,comments,saves,shares',
            access_token: this.accessToken,
          },
        }
      );

      return response.data.data;
    } catch (error) {
      console.error('Erro ao obter insights:', error);
      throw error;
    }
  }
}

/**
 * Inicializa a autenticação OAuth com o Instagram
 */
export function initInstagramAuth() {
  const appId = process.env.NEXT_PUBLIC_INSTAGRAM_APP_ID;
  const redirectUri = `${process.env.NEXT_PUBLIC_API_URL}/auth/instagram/callback`;
  const scope = 'instagram_basic,instagram_content_publish';

  const authUrl = `https://api.instagram.com/oauth/authorize?client_id=${appId}&redirect_uri=${encodeURIComponent(
    redirectUri
  )}&scope=${scope}&response_type=code`;

  return authUrl;
}

/**
 * Troca o código de autorização por um access token
 */
export async function exchangeCodeForToken(code: string) {
  try {
    const response = await axios.post(
      'https://api.instagram.com/oauth/access_token',
      {
        client_id: process.env.NEXT_PUBLIC_INSTAGRAM_APP_ID,
        client_secret: process.env.INSTAGRAM_APP_SECRET,
        grant_type: 'authorization_code',
        redirect_uri: `${process.env.NEXT_PUBLIC_API_URL}/auth/instagram/callback`,
        code,
      },
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );

    return {
      accessToken: response.data.access_token,
      userId: response.data.user_id,
    };
  } catch (error) {
    console.error('Erro ao trocar código por token:', error);
    throw error;
  }
}
