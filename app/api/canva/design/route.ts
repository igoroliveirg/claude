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

    const { templateId, title } = await request.json();

    if (!templateId || !title) {
      return NextResponse.json(
        { error: 'Template ID e título são obrigatórios' },
        { status: 400 }
      );
    }

    const canva = new CanvaAPI(accessToken);
    const design = await canva.createDesignFromTemplate(templateId, title);

    return NextResponse.json({ design });
  } catch (error: any) {
    console.error('Erro ao criar design:', error);
    return NextResponse.json(
      { error: error.message || 'Erro ao criar design' },
      { status: 500 }
    );
  }
}
