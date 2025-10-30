import { NextRequest, NextResponse } from 'next/server';
import { CanvaAPI } from '@/lib/canva';

export async function POST(request: NextRequest) {
  try {
    const accessToken = request.headers.get('authorization')?.replace('Bearer ', '');

    if (!accessToken) {
      return NextResponse.json(
        { error: 'Token de acesso não fornecido' },
        { status: 401 }
      );
    }

    const { designId } = await request.json();

    if (!designId) {
      return NextResponse.json(
        { error: 'Design ID é obrigatório' },
        { status: 400 }
      );
    }

    const canva = new CanvaAPI(accessToken);
    const videoUrl = await canva.exportDesignAsVideo(designId);

    return NextResponse.json({ videoUrl });
  } catch (error: any) {
    console.error('Erro ao exportar vídeo:', error);
    return NextResponse.json(
      { error: error.message || 'Erro ao exportar vídeo' },
      { status: 500 }
    );
  }
}
