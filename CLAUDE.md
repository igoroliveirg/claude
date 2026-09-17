# Contexto do projeto: hify.ai

Este arquivo existe para dar contexto a qualquer agente que trabalhe neste repositório.
Status: pré-produto, pré-captação. Nada aqui é público.

---

## 1. Quem é o time

**Igor Gontijo** (CEO / comercial)
- Empreendedor em São Paulo.
- Cofundou a Hackr Ads (SaaS B2B), vendida para a Conta Simples em 2022. Ficou pós-aquisição ajudando a escalar operação.
- Fundador do Full Sales (estruturação comercial B2B) e do Full Capital.
- Força: estruturação comercial B2B, growth e automação no mercado brasileiro.
- Lacuna conhecida: o exit é em adtech/martech, não em segurança. Founder-market fit em cyber precisa ser sustentado pelo Lucas, não pelo Igor.

**Lucas Faria** (técnico)
- Atua com IA, segurança de sistemas de IA e agentes.
- Escopo real: sistemas agênticos, aplicações com LLM, RAG com rastreabilidade de fontes, avaliações de confiabilidade, guardrails, red teaming, prompt injection, exposição de dados, análise de risco em produção.
- Consultoria para Fortune 500 e empresas de tecnologia do Vale do Silício (nomes sob NDA, logo inverificável em deck).
- Vive de bug bounty hoje. Essa é a credencial mais forte e mais verificável dele.
- Fundou e escalou a GrowDoc (marketing e tecnologia para o setor médico), hoje no conselho.
- Criou o Builders, programa de formação prática em desenvolvimento com IA.
- Trajetória começou na Medicina, passou por marketing e estratégia, chegou em tecnologia.

**Pendências abertas sobre o time (resolver antes de captar)**
- Dedicação do Lucas não está definida. Hoje ele divide entre conselho da GrowDoc, Builders, consultoria e bug bounty. Investidor lê isso como cofundador part-time e isso derruba seed.
- Equity entre Igor e Lucas não está definido.
- Handle público de bug bounty, ranking e CVEs do Lucas ainda não foram levantados. São o que substitui a consultoria sob NDA no slide de time.

---

## 2. Design partners

- **Conta Simples** (fintech B2B brasileira). Foi a adquirente da Hackr Ads. Investidor vai descontar como relacionamento, não como demanda de mercado. Tratar com transparência no deck, não esconder.
- **Enter** (empresa brasileira). É o design partner independente e por isso carrega mais peso probatório.

Ambos são empresas colocando IA em produção com dado financeiro sensível e obrigação regulatória, o que os torna coerentes com a tese de AI security.

**Status a confirmar:** não está claro se estão assinados com escopo e acesso a ambiente, ou se são conversa avançada. Sem champion nomeado, acesso assinado e preço comprometido na conversão, são logo, não prova.

---

## 3. O produto

**Descrição dada pelo Igor:** solução que hackeia as empresas 24/7 e explora vulnerabilidades.

**Problema de posicionamento identificado, ainda não resolvido:**
Essa descrição é pentest autônomo contínuo (infra, rede, Active Directory, cloud). O perfil do Lucas é AI security (segurança de agentes e aplicações de LLM). São disciplinas diferentes.

Duas rotas possíveis, e a decisão ainda está aberta:

| | Rota A: pentest autônomo | Rota B: segurança de agentes e apps de IA |
|---|---|---|
| Competidores | XBOW, Horizon3.ai (NodeZero), Pentera, BreachLock, Astra, Synack, Hadrian | Lakera, Zenity, Prompt Security, Protect AI |
| Founder-market fit do Lucas | fraco | forte |
| Maturidade do mercado | consolidado e muito capitalizado | em formação, já com M&A |

**Recomendação registrada:** Rota B. É onde o Lucas é o founder-market fit real e onde os design partners fazem sentido natural.

---

## 4. Cenário competitivo (levantado em setembro de 2026)

**Pentest autônomo (Rota A)**
- XBOW: US$ 120M de Série C em março de 2026, liderada por DFJ Growth e Northzone, valuation acima de US$ 1B. Antes: US$ 75M de Série B e US$ 20M de seed da Sequoia. Fundador Oege de Moor criou o GitHub Copilot e fundou a Semmle, comprada pelo GitHub em 2019. Prova independente no leaderboard do HackerOne.
- Horizon3.ai: US$ 250M levantados em agosto de 2026. Agentless, foco em ambiente de produção, governo e Fortune 10.
- Pentera: cerca de US$ 250M captados. Ticket médio perto de US$ 100K.
- Escape: US$ 18M de Série A em março de 2026.
- Mercado de pentest: US$ 2.72B em 2026, projeção de US$ 5.54B em 2031 (CAGR 15.29%, Mordor Intelligence).
- Gartner projeta que pentest agêntico contínuo substitui mais de 50% das avaliações manuais pontuais até 2030.
- Preço da categoria: tiers públicos a partir de US$ 4.000 por engajamento (XBOW, Simbian); modelos por assinatura começam em cinco dígitos altos por ano.

**AI security (Rota B)**
- Lakera: fundada em Zurique em 2021, US$ 30M captados no total, Série A de US$ 20M liderada pela Atomico em julho de 2024 com Citi Ventures e Dropbox Ventures. Adquirida pela Check Point em setembro de 2025.
- Protect AI: adquirida pela Palo Alto.
- Zenity e Prompt Security seguem independentes.
- Leitura: categoria com caminho de saída comprovado, e incumbentes de segurança comprando entrada.

**Ponto comum às duas rotas:** nenhum desses players atende o mid-market brasileiro. Ticket deles exclui praticamente todo o Brasil fora de banco grande.

---

## 5. Tese de wedge em avaliação

Validação contínua amarrada a obrigação regulatória local, não a segurança genérica.
Fintech e adquirente brasileira com PCI, exigência do BACEN, LGPD e auditoria hoje feita uma vez por ano com laudo caro.
Comprador não é o CISO curioso, é o compliance com prazo.

Risco a não ignorar: ser wrapper. Se o produto for um LLM orquestrando ferramenta de exploit conhecida, não sobrevive a comparativo com quem tem prova independente.

Requisito operacional que vira objeção jurídica na diligência se não estiver definido: escopo autorizado por escrito, kill switch, gate de aprovação antes de escalada de privilégio, limites de severidade.

---

## 6. Situação de captação

- Alvo mencionado: US$ 5M. Sem tração prévia.
- Benchmark 2025: seed típico de US$ 2.5M a US$ 5M, com US$ 6M a US$ 10M reservado para IA e deep tech aquecidos. Valuation post-money mediano perto de US$ 24M. Diluição de 18% a 25%.
- O que investidor espera em seed: produto funcionando, 5 a 15 clientes pagantes em enterprise ou US$ 5K a US$ 50K de MRR.
- Sem tração, os substitutos aceitos são: pré-venda ou depósito, LOI com valor e prazo, design partners nomeados com champion e acesso assinado, 20 a 50 entrevistas de cliente com padrão de dor repetido, waitlist qualificada.
- Volume de deals de seed caiu cerca de 30% no primeiro semestre de 2026.
- Recomendação registrada, ainda não aceita pelo Igor: considerar pré-seed de US$ 500K a US$ 1.5M para construir a prova, em vez de seed inflado sem caminho para métrica de Série A.
- Se o alvo for mesmo US$ 5M, provavelmente é captação fora do Brasil, e o deck precisa responder "por que Brasil e não EUA".

---

## 7. Padrões de deck que fecharam rodada em 2024 a 2026

- 12 a 16 slides. Guia de seed da YC fecha em 10 a 12.
- Tração no slide 2, não no slide 9. Ordem observada: número de tração, inimigo nomeado, moat como infraestrutura, time mapeado ao problema, ask no fim.
- Três a seis competidores nomeados, não matriz de dez logos.
- Margem bruta respondida antes de perguntada. Produto de IA roda perto de 52% contra 75% a 85% de SaaS. Série A espera acima de 60%.
- Time mapeado ao problema específico, não pedigree solto.
- Demo dentro do deck.
- Mercado bottom-up a partir de preço real, não TAM de relatório.
- Vários decks que fecharam acima de US$ 5M não têm slide de ask, uso de recursos, go-to-market ou modelo de negócio.

**Adaptação para o caso hify.ai:** sem tração, o slide 2 não é número. É a prova de que o Lucas é a pessoa certa para esse problema, com bug bounty verificável, mais os design partners convertidos de logo em compromisso.

---

## 8. Acervo de decks de referência

Decks públicos completos de rodadas acima de US$ 5M, levantados em setembro de 2026.
Cada link abre a apresentação original embedada.

**Ressalva:** deck completo e público acima de US$ 5M é raro. O que circula em massa é seed e Série A. Onde aparece "deck da Mistral" ou "deck da xAI", quase sempre é reconstrução editorial, não o arquivo original. A maioria dos agregadores também mistura décadas (Airbnb 2008, Uber 2008, Coinbase 2012). A lista abaixo já está filtrada para 2024 a 2026.

**Seed 2026**
- Gushwork, US$ 9M, AI agêntica para geração de lead em busca por IA, B2B. Liderado por Susquehanna (SIG Asia), com Lightspeed, B Capital, BEENEXT. https://bestpitchdeck.com/gushwork
- Ditto, US$ 9.2M, B2C. https://bestpitchdeck.com/ditto
- Sazabi, US$ 8M, observabilidade conversacional, B2B. https://bestpitchdeck.com/sazabi
- Flick, US$ 6M, criação de vídeo com IA, B2C. https://bestpitchdeck.com/flick

**2025**
- Scribe, US$ 75M, Série C. https://bestpitchdeck.com/scribe
- Pacaso, US$ 72.5M, Série D. https://bestpitchdeck.com/pacaso
- Vibe, US$ 50M, Série B. https://bestpitchdeck.com/vibe
- Fluency, US$ 42M, Série A. https://bestpitchdeck.com/fluency
- Artisan, US$ 25M, Série A. https://bestpitchdeck.com/artisan-series-a
- MAI, US$ 25M, Seed. https://bestpitchdeck.com/mai
- Tracksuit, US$ 25M, Série B. https://bestpitchdeck.com/tracksuit
- Profound, US$ 20M, Série A. https://bestpitchdeck.com/profound
- Vybe, US$ 10M, Seed. https://bestpitchdeck.com/vybe
- RoboForce, US$ 10M, Seed. https://bestpitchdeck.com/roboforce
- Axle Health, US$ 10M, Série A. https://bestpitchdeck.com/axle-health
- Charta Health, US$ 8.1M, Seed. https://bestpitchdeck.com/charta-health
- Epiminds, US$ 6.6M, Seed, com teardown slide a slide. https://startupfundraising.com/library/articles/epiminds-pitch-deck-teardown

**2024**
- Creatio, US$ 200M, Série B. https://bestpitchdeck.com/creatio
- Rippling, US$ 200M, Série F. https://bestpitchdeck.com/rippling-series-f
- Perplexity, US$ 73.6M, Série B. https://bestpitchdeck.com/perplexity-ai
- TensorWave, US$ 43M, Seed. https://bestpitchdeck.com/tensorwave
- XPANCEO, US$ 40M, Seed. https://bestpitchdeck.com/xpanceo
- Knime, US$ 30M, Série B. https://bestpitchdeck.com/knime
- Nanonets, US$ 29M, Série B. https://bestpitchdeck.com/nanonets-series-b
- Vizit, US$ 25M, Série B. https://bestpitchdeck.com/vizit
- Vapi, US$ 20M, Série A. https://bestpitchdeck.com/vapi
- Cloudsmith, US$ 15M, Série A. https://bestpitchdeck.com/cloudsmith
- Lago, US$ 15M, Série A. https://bestpitchdeck.com/lago-series-a
- Artisan, US$ 11.5M, Seed. https://bestpitchdeck.com/artisan
- Recraft, EUR 11M, Série A. https://bestpitchdeck.com/recraft
- Rogo, US$ 7M, Seed. https://bestpitchdeck.com/rogo
- Pruna AI, US$ 6.5M, Seed. https://bestpitchdeck.com/pruna-ai
- Goodcarbon, US$ 5.5M, Seed. https://bestpitchdeck.com/goodcarbon

**Acervos**
- 94 decks com filtro por valor e rodada, mediana de seed em US$ 6.2M e de Série A em US$ 15M. Orientação: ler os três decks mais próximos do seu número, não o de US$ 200M da Rippling. https://climateinsiders.substack.com/p/94-pitch-decks-that-raised-21-billion
- bestpitchdeck.com, base geral com filtro por estágio, ano e valor.
- startupfundraising.com/library, teardowns slide a slide.

**Referências mais próximas do caso hify.ai**
- Gushwork: seed de US$ 9M, B2B, IA agêntica, fundadores não americanos. Estrutura mais próxima do alvo.
- Epiminds: 7 slides, US$ 6.6M, sem slide de competição, go-to-market ou ask. Tração é velocidade (16 agências pagantes e 200 marcas em 12 semanas). Serve como referência de deck mínimo quando a prova é concentrada.
- Charta Health: US$ 8.1M seed, B2B vertical com componente regulatório. Formato útil para o wedge de compliance.

---

## 9. Identidade visual

Igor tem os arquivos de identidade visual da hify.ai localmente. Ainda não foram compartilhados. Qualquer material gerado deve respeitar essa identidade quando ela for anexada.

---

## 10. Preferências de trabalho do Igor

- Português brasileiro.
- Direto e seco. Conciso e acionável, sem explicação longa.
- Não usa travessão em copy.
- Não gosta de linguagem que soa como IA.
- Prefere honestidade intelectual e discordância direta a formalidade ou elogio.

---

## 11. Estado do repositório

Este repositório também carrega um app Next.js de Instagram Reels com integração Canva, de uma sessão anterior sem relação com a hify.ai. Ignorar `app/`, `components/`, `lib/`, `types/` e o `README.md` ao trabalhar no material de captação.

Material da hify.ai:

- `deck/ESTRUTURA.md`: deck slide a slide, com objetivo, copy e nota de decisão por slide. Premissa assumida: Rota B, recorte de red team contínuo para IA em produção.
- `deck/LACUNAS.md`: o que falta para o deck parar de pé, com dono e consequência. Todo `[PREENCHER: ...]` no ESTRUTURA tem entrada aqui.

Regra: nenhum número entra no deck sem fonte citável ou dado próprio verificável. Placeholder é melhor que número inventado, porque placeholder some na revisão e número inventado morre na diligência.
