import { NextRequest, NextResponse } from 'next/server';
import { InstagramAPI } from '@/lib/instagram';

export async function GET(request: NextRequest) {
  try {
    const accessToken = request.headers.get('authorization')?.replace('Bearer ', '');
    const userId = request.nextUrl.searchParams.get('userId');

    if (!accessToken || !userId) {
      return NextResponse.json(
        { error: 'Token de acesso e user ID são obrigatórios' },
        { status: 401 }
      );
    }

    const instagram = new InstagramAPI(accessToken, userId);
    const accountInfo = await instagram.getAccountInfo();

    return NextResponse.json({ account: accountInfo });
  } catch (error: any) {
    console.error('Erro ao obter informações da conta:', error);
    return NextResponse.json(
      { error: error.message || 'Erro ao obter informações da conta' },
      { status: 500 }
    );
  }
}
