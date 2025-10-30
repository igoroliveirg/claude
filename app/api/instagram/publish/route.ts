import { NextRequest, NextResponse } from 'next/server';
import { InstagramAPI } from '@/lib/instagram';

export async function POST(request: NextRequest) {
  try {
    const accessToken = request.headers.get('authorization')?.replace('Bearer ', '');

    if (!accessToken) {
      return NextResponse.json(
        { error: 'Token de acesso não fornecido' },
        { status: 401 }
      );
    }

    const { videoUrl, caption, coverUrl, userId } = await request.json();

    if (!videoUrl || !caption || !userId) {
      return NextResponse.json(
        { error: 'Video URL, caption e user ID são obrigatórios' },
        { status: 400 }
      );
    }

    const instagram = new InstagramAPI(accessToken, userId);
    const mediaId = await instagram.publishReel(videoUrl, caption, coverUrl);

    return NextResponse.json({
      success: true,
      mediaId,
      message: 'Reel publicado com sucesso!'
    });
  } catch (error: any) {
    console.error('Erro ao publicar reel:', error);
    return NextResponse.json(
      { error: error.message || 'Erro ao publicar reel' },
      { status: 500 }
    );
  }
}
