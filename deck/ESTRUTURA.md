# Deck hify.ai

Versão de trabalho. Nada aqui é público.

## Premissa

Rota B, com recorte fechado: **red team contínuo para IA em produção**.

Ofensiva, não defesa. Lakera, Zenity, Prompt Security e Protect AI são todos camada defensiva ou de governança. Nenhum deles testa se a defesa aguenta um atacante real.

Por que esse recorte e não outro:

1. Mapeia direto no bug bounty ativo do Lucas. Founder-market fit vira verificável em vez de narrativo.
2. Preserva o instinto original do Igor ("hackeia 24/7 e explora vulnerabilidades") sem cair em pentest de infra, onde XBOW e Horizon3 já queimaram US$ 370M somados.
3. Vende ao lado dos defensivos, não contra. Quem comprou Lakera precisa provar que a Lakera está funcionando.
4. Os dois design partners são empresas com IA em produção sobre dado financeiro. Encaixe natural, não forçado.

Se o Igor recusar esse recorte, o deck inteiro muda. Decidir antes de investir em visual.

## Formato

13 slides. Cada slide tem um trabalho. Se não tem, sai.

Ordem seguindo o padrão observado em rodadas fechadas entre 2024 e 2026: prova no slide 2, inimigo nomeado no meio, ask no fim. A adaptação para o caso sem tração é que o slide 2 não é número de receita, é prova de pessoa mais compromisso de cliente.

Todo `[PREENCHER: ...]` tem entrada em `LACUNAS.md`.

---

## Slide 1. Capa

**Objetivo:** o investidor tem que saber o que vocês fazem antes de passar do primeiro slide.

**Copy:**

> **hify.ai**
>
> Red team contínuo para IA em produção.
>
> Descobrimos o que um atacante consegue fazer com seus agentes, antes que ele faça.

Rodapé: Igor Gontijo, Lucas Faria. [PREENCHER: mês e ano do pitch].

**Nota:** a frase de posicionamento é o slide. Sem tagline vaga tipo "segurança para a era da IA".

---

## Slide 2. A prova

**Objetivo:** é aqui que o investidor decide se continua lendo. Com os dois pilotos pagos, esse slide deixa de ser prova de pessoa e passa a ter número na frente, que é exatamente o padrão dos decks que fecharam rodada entre 2024 e 2026.

**Copy:**

> Três provas. Nenhuma é promessa.
>
> **R$ 40 mil de MRR contratado.** Conta Simples e Enter pagam R$ 20 mil por mês cada, em contrato assinado, com escopo de produção e preço travado por 12 meses na conversão. [PREENCHER: data de início].
>
> **Quem quebra.** [PREENCHER: @handle público do Lucas] está entre os top [PREENCHER: posição] do [PREENCHER: HackerOne / Bugcrowd / programa]. [PREENCHER: N] vulnerabilidades aceitas, [PREENCHER: N] CVEs, US$ [PREENCHER: valor] em recompensas. Perfil público, verificável agora.
>
> **Quem confirmou a dor.** [PREENCHER: N] entrevistas com times de segurança e compliance de fintechs brasileiras. [PREENCHER: N] já têm IA em produção sem nenhuma validação de segurança específica para isso.

Rodapé, em corpo menor: a Conta Simples adquiriu a empresa anterior do Igor em 2022. Relação preexistente, declarada. A Enter é independente.

**Notas:**

O número vem primeiro porque agora existe. R$ 40 mil de MRR converte para dentro da banda de US$ 5K a US$ 50K que investidor usa como referência de tração em seed. Confirmar a conversão na taxa do dia do pitch antes de citar o número em dólar, e nunca citar os dois se a taxa deixar o número em dólar feio.

O contrato assinado é o que sustenta a palavra "contratado". Piloto de oito semanas pago não é MRR recorrente ainda, e um investidor experiente vai apertar nesse ponto. A resposta honesta, preparada para o Q&A e não para o slide: são dois contratos de piloto pago com preço de conversão travado e data de decisão, e a conversão é o marco do slide 13. Chamar de ARR é o tipo de esticada que queima o deck.

O rodapé sobre a Conta Simples não é humildade, é blindagem. O investidor descobre a relação em cinco minutos de diligência. Declarar antes tira a arma dele e compra credibilidade no resto do deck.

Se os contratos não estiverem assinados na data do pitch, esse slide inteiro volta para a versão sem número e a ordem muda: credencial do Lucas primeiro. Ver `LACUNAS.md`.

---
## Slide 3. O problema

**Objetivo:** mostrar que existe uma superfície nova e que ninguém está olhando para ela.

**Copy:**

> Empresas colocaram IA em produção em 18 meses. A validação de segurança delas continua anual e não olha para IA.
>
> Um agente com acesso a ferramenta interna é um usuário com privilégio, sem crachá e sem log de intenção.
>
> O pentest anual testa rede, aplicação e infra. Não testa injeção de prompt, exfiltração de dado via RAG, abuso de ferramenta, nem escalada por integração.
>
> A superfície que mais cresceu é a única que ninguém audita.

**Nota:** sem estatística de relatório aqui. A frase do agente como usuário sem crachá é o que fica na cabeça. Se entrar número, tem que ser das entrevistas de cliente de vocês, não de Gartner.

---

## Slide 4. Por que agora

**Objetivo:** responder "por que isso não existia em 2023 e por que não espera até 2028".

**Copy:**

> Três curvas cruzando.
>
> **Adoção.** Agentes saíram de piloto para produção entre 2025 e 2026. O acesso a ferramenta e a dado interno veio junto.
>
> **Regulação.** [PREENCHER: exigências confirmadas de BACEN, ANPD e PCI DSS 4.0 aplicáveis a IA]. O auditor já pergunta. Ninguém tem resposta documentada.
>
> **Consolidação.** A Check Point comprou a Lakera em setembro de 2025. A Palo Alto comprou a Protect AI. Incumbente de segurança está comprando entrada na categoria, não construindo.

**Nota:** a linha de consolidação faz dois trabalhos: prova que a categoria tem saída e mostra ao investidor quem são os compradores naturais. Não transformar isso em slide de exit, uma linha basta.

O bloco de regulação é o mais frágil do deck. Citar regra que não se aplica exatamente à IA é o tipo de erro que um investidor com fintech no portfólio pega na hora. Ver `LACUNAS.md`.

---

## Slide 5. O produto

**Objetivo:** mostrar que existe produto e que vocês pensaram no problema jurídico antes de serem perguntados.

**Copy:**

> **Como funciona**
>
> 1. Você conecta o ambiente onde a IA roda. Escopo autorizado por escrito.
> 2. Rodamos ataque contínuo contra a superfície de IA: injeção de prompt direta e indireta, exfiltração de dado via RAG, abuso de ferramenta e de agente, escalada por integração, vazamento de credencial em contexto.
> 3. Cada achado sai com prova reproduzível: o passo a passo, o dado que saiu, o privilégio obtido.
> 4. O relatório sai no formato que o compliance entrega para o auditor.
>
> **Controles, no produto desde o primeiro dia**
>
> Kill switch. Gate de aprovação antes de escalada de privilégio. Limite de severidade por escopo. Log completo de tudo que foi executado.

**Nota:** o bloco de controles fica no slide de produto de propósito. Escopo, kill switch e limite de severidade viram objeção jurídica na diligência se aparecerem só quando perguntados. Colocar na frente transforma risco em maturidade.

---

## Slide 6. Demo

**Objetivo:** provar que existe, não descrever.

**Estrutura:** 3 a 5 frames do achado mais forte em ambiente real de design partner, anonimizado e com autorização por escrito.

Sequência sugerida:

1. Entrada que parece benigna.
2. O agente executa.
3. O dado sensível sai.
4. A prova reproduzível no formato de relatório.

**Nota:** deck que fechou rodada entre 2024 e 2026 tem demo dentro do deck, não link para vídeo. Se o achado real ainda não existir, esse slide não pode ser mockup bonito. Mockup apresentado como achado real é fraude na diligência. Sem achado real, o slide vira "o que rodamos hoje" com captura da ferramenta.

---

## Slide 7. Por que não é wrapper

**Objetivo:** matar a objeção mais provável antes que ela seja feita.

**Copy:**

> Rodar a OWASP LLM Top 10 não é moat. É lista pública, qualquer um roda.
>
> **Biblioteca de ataque própria.** [PREENCHER: N] técnicas saídas de bug bounty ativo, que não estão em lista pública.
>
> **Efeito de corpus.** Ataque que funciona em um cliente vira teste para todos no dia seguinte. O cliente número 50 recebe um produto que o cliente número 1 não teve.
>
> **Prova independente.** [PREENCHER: meta pública e data, no modelo do que a XBOW fez no leaderboard do HackerOne].

**Nota:** esse é o slide que decide se vocês são empresa ou projeto. O efeito de corpus é o argumento de composição que o investidor quer ouvir, porque é a única coisa aqui que melhora sozinha com escala.

A prova independente não precisa existir hoje, mas precisa ter data. Meta sem data é intenção.

---

## Slide 8. Concorrência

**Objetivo:** mostrar que vocês conhecem o mercado e que não estão de frente com ninguém capitalizado.

**Copy:** quatro nomes, uma linha cada. Sem matriz de dez logos.

> **Lakera** (Check Point). Firewall de runtime. Bloqueia. Não diz o que passa.
>
> **Zenity.** Governança de agente em plataforma corporativa. Inventário e política. Não ataca.
>
> **Prompt Security.** Controle do uso de GenAI pelo funcionário. Outro problema.
>
> **Protect AI** (Palo Alto). Cadeia de suprimento de modelo. Atua antes da produção.
>
> **hify.ai.** Ataque contínuo contra o que já está em produção.
>
> Todos eles são defesa. Ninguém testa se a defesa aguenta. Vendemos ao lado deles, não contra. Quem comprou Lakera precisa provar que a Lakera está funcionando.

**Nota:** a última linha é a mais valiosa do deck. Transforma quatro concorrentes em quatro canais. Não diluir.

Objeção a preparar para o Q&A, não para o slide: "e se a Lakera lançar isso?". Resposta: ferramenta defensiva que audita a si mesma não tem credibilidade com auditor, pelo mesmo motivo que empresa não contrata o próprio time de dev para assinar o pentest.

---

## Slide 9. Wedge

**Objetivo:** mostrar que vocês têm um comprador específico com prazo, não um mercado abstrato.

**Copy:**

> Não começamos pelo CISO curioso. Começamos pelo compliance com prazo.
>
> Fintech e adquirente brasileira: PCI, exigência do BACEN, LGPD. A auditoria hoje é uma vez por ano, com laudo caro, e não cobre IA.
>
> O ticket da categoria global exclui o Brasil inteiro fora de banco grande. A Pentera roda perto de US$ 100 mil por ano.
>
> Entramos por aí, provamos em ambiente com dado financeiro e obrigação regulatória, e subimos a partir da prova.

**Nota:** "compliance com prazo" contra "CISO curioso" é a diferença entre ciclo de venda de 45 dias e de 9 meses. É o argumento de go-to-market inteiro em uma frase, e por isso não precisa de slide de GTM separado.

---

## Slide 10. Mercado, de baixo para cima

**Objetivo:** mostrar conta real. TAM de relatório queima credibilidade em 2026.

**Estrutura da conta, não o número:**

> [PREENCHER: N] instituições de pagamento, adquirentes e fintechs autorizadas pelo BACEN.
> × [PREENCHER: %] com IA em produção hoje, medido nas nossas entrevistas.
> × R$ 240 mil por ambiente por ano, que é o preço que dois clientes já pagam.
> = R$ [PREENCHER: resultado] de mercado acessível só nesse recorte, só no Brasil.
>
> Expansão: [PREENCHER: segmento 2], depois LatAm.

**Nota:** o multiplicador do meio tem que sair das entrevistas de vocês. É o único número do deck que nenhum concorrente tem, e é o que prova que vocês falaram com o mercado. Número de fonte pública nesse lugar desperdiça o slide.

A força desse slide é que o preço não é estimativa. R$ 240 mil por ano por ambiente é o que a Conta Simples e a Enter estão pagando, não o que vocês esperam cobrar. Diga isso em voz alta na apresentação, porque é a diferença entre mercado bottom-up e TAM disfarçado.

---

## Slide 11. Modelo e margem

**Objetivo:** responder margem antes de ser perguntado.

**Copy:**

> Assinatura por ambiente. Tabela de R$ [PREENCHER: tabela] por mês. R$ 20 mil por mês no preço de design partner, travado por 12 meses.
>
> Margem bruta hoje: [PREENCHER: %]. O custo é inferência e compute de execução.
>
> Onde chega: [PREENCHER: %] em [PREENCHER: prazo]. A biblioteca de ataque é custo fixo amortizado, não custo por cliente.

**Nota:** produto de IA roda perto de 52% de margem bruta contra 75% a 85% de SaaS. Série A cobra acima de 60%. Chegar com o número e com o caminho fecha a pergunta. Chegar sem ele entrega a condução da conversa para o investidor.

Mostrar tabela e preço de design partner juntos faz um trabalho extra: prova que R$ 20 mil é desconto com contrapartida, não o teto do que o mercado paga. Se o deck só mostrar R$ 20 mil, o investidor assume que esse é o preço máximo e recalcula o mercado do slide 10 para baixo.

---

## Slide 12. Time

**Objetivo:** mapear as duas pessoas ao problema específico. Não é slide de pedigree.

**Copy:**

> **Lucas Faria**, [PREENCHER: cargo]. [PREENCHER: dedicação].
> Bug bounty ativo. Red teaming de sistemas de IA, guardrails, avaliação de confiabilidade, análise de risco em produção. Consultoria para Fortune 500 e empresas de tecnologia do Vale do Silício, sob NDA. Fundou a GrowDoc, hoje no conselho. Criou o Builders.
>
> **Igor Gontijo**, CEO.
> Cofundou a Hackr Ads, SaaS B2B vendido para a Conta Simples em 2022, e ficou depois da aquisição escalando a operação. Fundou o Full Sales e o Full Capital. Estruturação comercial B2B no mercado brasileiro.
>
> O Lucas quebra. O Igor vende. O primeiro design partner veio de quem comprou a empresa anterior do Igor.

**Nota:** a consultoria sob NDA não prova nada em deck, porque não dá para verificar. Ela fica como contexto. O que sustenta o slide é o bug bounty público do slide 2.

`[PREENCHER: dedicação]` é onde esse deck morre. Cofundador técnico part-time derruba seed, sem exceção. Ver `LACUNAS.md`.

---

## Slide 13. Rodada

**Objetivo:** pedir e mostrar o que o dinheiro compra em marco, não em categoria de despesa.

**Copy:**

> US$ [PREENCHER: valor] para [PREENCHER: N] meses.
>
> O que compra: [PREENCHER: N] engenheiros de segurança ofensiva, [PREENCHER: N] de produto, o motor de execução contínua, [PREENCHER: N] clientes pagantes.
>
> O que destrava a Série A: US$ [PREENCHER: ARR] de receita recorrente, [PREENCHER: N] clientes, [PREENCHER: prova independente publicada].

**Nota:** vários decks acima de US$ 5M entre 2024 e 2026 não têm slide de ask nem de uso de recursos. Aqui vale ter, porque o time não tem exit em segurança e o investidor vai querer ver que o plano é de operador.

Com R$ 40 mil de MRR contratado, o marco de Série A fica concreto em vez de abstrato: a conta é quantos clientes a R$ 240 mil por ano faltam para chegar no número. Fazer essa conta no slide, com o número de clientes explícito, vale mais que qualquer projeção de receita em curva.

Se o alvo continuar sendo US$ 5M, esse deck precisa de um slide 14: "por que Brasil e não EUA". US$ 5M sem tração é captação fora do Brasil, e essa é a primeira pergunta de um fundo americano. Ver `LACUNAS.md`.

---

## O que este deck deliberadamente não tem

- **Slide de go-to-market.** Está resolvido no slide 9. Comprador nomeado com prazo é go-to-market.
- **Matriz de competidores.** Quatro nomes com uma linha cada dizem mais que dez logos em dois eixos.
- **Slide de visão de dez anos.** Sem tração, visão longa lê como desvio do assunto.
- **Roadmap.** Vira compromisso cobrado na diligência sem comprar nada no pitch.
