# Instagram Reels Creator - Integração com Canva

Uma aplicação moderna e intuitiva para criar e publicar Reels no Instagram usando templates personalizados do Canva.

## 🚀 Recursos

- ✨ Interface moderna e responsiva com gradientes do Instagram
- 🎨 Integração completa com a API do Canva
- 📱 Publicação direta de Reels no Instagram
- 🖼️ Galeria de templates personalizáveis
- 📊 Dashboard com estatísticas de projetos
- 🎬 Preview de vídeos antes da publicação
- 💾 Gerenciamento de projetos salvos

## 📋 Pré-requisitos

- Node.js 18+ instalado
- Conta de desenvolvedor do Canva
- Conta de desenvolvedor do Facebook/Instagram
- Conta business do Instagram

## 🔧 Configuração

### 1. Instalação das dependências

```bash
npm install
```

### 2. Configuração das variáveis de ambiente

Crie um arquivo `.env.local` na raiz do projeto com as seguintes variáveis:

```env
# Canva API
NEXT_PUBLIC_CANVA_CLIENT_ID=seu_client_id_do_canva
CANVA_CLIENT_SECRET=seu_client_secret_do_canva

# Instagram API
NEXT_PUBLIC_INSTAGRAM_APP_ID=seu_app_id_do_instagram
INSTAGRAM_APP_SECRET=seu_app_secret_do_instagram

# API URL
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

### 3. Configuração do Canva

1. Acesse [Canva Developers](https://www.canva.com/developers)
2. Crie uma nova aplicação
3. Obtenha suas credenciais (Client ID e Secret)
4. Configure a URL de redirecionamento: `http://localhost:3000/api/auth/canva/callback`

### 4. Configuração do Instagram

1. Acesse [Facebook Developers](https://developers.facebook.com)
2. Crie uma nova aplicação
3. Adicione o produto "Instagram Basic Display" ou "Instagram Graph API"
4. Configure uma conta business do Instagram
5. Obtenha suas credenciais
6. Configure a URL de redirecionamento: `http://localhost:3000/api/auth/instagram/callback`

## 🚀 Executando o projeto

### Modo de desenvolvimento

```bash
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) no seu navegador.

### Build de produção

```bash
npm run build
npm start
```

## 📂 Estrutura do Projeto

```
├── app/
│   ├── api/              # Rotas da API
│   │   ├── canva/        # Endpoints do Canva
│   │   └── instagram/    # Endpoints do Instagram
│   ├── globals.css       # Estilos globais
│   ├── layout.tsx        # Layout principal
│   └── page.tsx          # Página principal
├── components/
│   ├── TemplateGallery.tsx   # Galeria de templates
│   ├── ReelPreview.tsx       # Preview de reels
│   └── ProjectList.tsx       # Lista de projetos
├── lib/
│   ├── canva.ts          # Cliente da API do Canva
│   └── instagram.ts      # Cliente da API do Instagram
└── types/
    └── index.ts          # Definições de tipos TypeScript
```

## 🎨 Funcionalidades

### 1. Galeria de Templates

- Busca de templates do Canva
- Filtros por categoria
- Preview de templates
- Visualização de duração dos vídeos

### 2. Criação de Reels

- Seleção de template
- Personalização no Canva
- Export automático para vídeo
- Preview antes da publicação

### 3. Publicação no Instagram

- Autenticação OAuth
- Upload de vídeo
- Adição de legenda e hashtags
- Publicação automática

### 4. Gerenciamento de Projetos

- Lista de projetos salvos
- Status de processamento
- Edição e exclusão de projetos
- Estatísticas básicas

## 🔐 Segurança

- Tokens de acesso são armazenados de forma segura
- Autenticação OAuth2 para Canva e Instagram
- Validação de requisições
- Proteção de rotas sensíveis

## 📱 Design Responsivo

A interface é totalmente responsiva e funciona perfeitamente em:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (< 768px)

## 🎯 Próximos Passos

- [ ] Implementar autenticação de usuários
- [ ] Adicionar suporte a agendamento de posts
- [ ] Criar sistema de analytics
- [ ] Implementar editor de vídeo integrado
- [ ] Adicionar templates personalizados
- [ ] Suporte para múltiplas contas do Instagram

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

## 📄 Licença

Este projeto está sob a licença MIT.

## 📞 Suporte

Para dúvidas e suporte:
- Documentação do Canva: https://www.canva.com/developers/docs
- Documentação do Instagram: https://developers.facebook.com/docs/instagram-api

---

Desenvolvido com ❤️ usando Next.js, React e Tailwind CSS
