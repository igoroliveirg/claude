import { NextRequest, NextResponse } from 'next/server';
import { CanvaAPI } from '@/lib/canva';

export async function GET(request: NextRequest) {
  try {
    // Em produção, obter o token da sessão do usuário
    const accessToken = request.headers.get('authorization')?.replace('Bearer ', '');

    if (!accessToken) {
      return NextResponse.json(
        { error: 'Token de acesso não fornecido' },
        { status: 401 }
      );
    }

    const canva = new CanvaAPI(accessToken);
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get('query') || undefined;

    const templates = await canva.getTemplates(query);

    return NextResponse.json({ templates });
  } catch (error: any) {
    console.error('Erro ao buscar templates:', error);
    return NextResponse.json(
      { error: error.message || 'Erro ao buscar templates' },
      { status: 500 }
    );
  }
}
