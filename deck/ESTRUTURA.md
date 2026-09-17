# Deck hify.ai

Versão de trabalho. Nada aqui é público.

## Premissa

**Revisada em 17 de setembro de 2026 depois da pesquisa. Ver `PESQUISA.md`.**

O recorte anterior, "red team contínuo para IA em produção", está ocupado. A Gray Swan levantou US$ 40 milhões em junho de 2026 a um valuation de US$ 200 milhões fazendo exatamente isso, com 15 mil hackers no Arena como moat. A Lakera opera o Gandalf e o Agent Breaker. A Protect AI tem o RECON. A Mindgard trata red teaming como pipeline contínuo. A afirmação de que ninguém ataca era falsa.

**Recorte atual: teste de intrusão em sistemas de IA com laudo que satisfaz a CMN 5.274 e a BCB 538.**

O produto continua sendo ataque. O que muda é a entrega. Os concorrentes citados entregam achado técnico em inglês para laboratório de fronteira e enterprise americana. Nenhum entrega laudo com evidência de exploração por achado, mapeamento regulatório para norma brasileira, laudo de reteste e retenção de cinco anos, que é o que a resolução exige.

Por que esse recorte se defende:

1. **A norma exige profissional independente.** Requisito regulatório, não argumento de marketing, e encaixa no perfil de bug bounty do Lucas melhor do que em ferramenta SaaS.
2. **O agente já é sistema crítico.** A Febraban documentou que instituições brasileiras concedem credencial de acesso elevado para robô executar transação na infraestrutura central. O pentest anual obrigatório não testa injeção de prompt.
3. **O comprador tem prazo vencido.** A adequação à CMN 5.274 e à BCB 538 encerrou em 1º de março de 2026.
4. **A Conta Simples é a prova viva.** O "Faça Seu Agente" deixa o cliente final construir agentes que executam tarefas financeiras numa plataforma que movimentou R$ 90 bilhões no primeiro semestre.

Frase de posicionamento: **o agente de IA virou sistema crítico, o laudo de pentest que o BACEN exige não cobre ele, e a gente cobre.**

Se o Igor recusar esse recorte, o deck muda de novo. Mas o recorte anterior não sobrevive a um investidor que conheça a categoria.

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

**Objetivo:** mostrar que existe uma superfície nova, que ela já está em produção com dinheiro do outro lado, e que a validação obrigatória não olha para ela.

**Copy:**

> Bancos brasileiros já dão credencial de acesso elevado para agentes de IA tomarem decisão operacional e executarem transação na infraestrutura central.
> Pesquisa Febraban de Tecnologia Bancária 2026
>
> Pela CMN 5.274 e pela BCB 538, isso é sistema crítico, e sistema crítico exige teste de intrusão anual por profissional independente.
>
> O pentest que essas instituições contratam testa rede, aplicação, cloud e Active Directory. Não testa injeção de prompt, exfiltração via RAG, abuso de ferramenta nem escalada por integração.
>
> O sistema mais novo e mais perigoso do banco é o único que o laudo não cobre.

**Nota:** a citação da Febraban carrega o slide inteiro e é verificável. Não diluir com estatística de relatório internacional. Cibersegurança é prioridade de 100% das instituições na mesma pesquisa, e IA generativa de 84%, mas esses dois números só entram se sobrar espaço, porque o achado da credencial elevada é mais forte que os dois juntos.

---
## Slide 4. Por que agora

**Objetivo:** responder "por que isso não existia em 2023 e por que não espera até 2028". Com a norma na mão, esse slide deixa de ser tese e passa a ser calendário.

**Copy:**

> **A obrigação já venceu.** CMN 5.274/2025 e BCB 538/2025: teste de intrusão anual por profissional independente em todos os sistemas críticos, evidência técnica de exploração por achado, mapeamento regulatório explícito, laudo de reteste e retenção de cinco anos. Prazo de adequação encerrado em 1º de março de 2026.
>
> **A próxima vence em dezembro.** Resolução Conjunta nº 18, em vigor desde 1º de janeiro de 2026: Política de Qualidade das Informações em 12 dimensões, com rastreabilidade e integridade entre elas. Conformidade auditável até 31 de dezembro de 2026.
>
> **A adoção chegou junto.** R$ 3 bilhões em IA no orçamento dos bancos em 2026, dentro de R$ 50,4 bilhões de tecnologia. Agentes saíram de piloto para execução de transação.
>
> **Os incumbentes estão comprando entrada.** Check Point comprou a Lakera. Palo Alto comprou a Protect AI. SentinelOne comprou a Prompt Security. Cato comprou a Aim Security. Em dois anos, dos cinco nomes da categoria, sobrou a Zenity independente.

**Nota:** não citar o PL 2338 como obrigação. Foi aprovado no Senado em dezembro de 2024, está parado na Câmara e a votação foi adiada para 2026. Ainda não é lei. É o erro que um investidor com fintech no portfólio pega na hora.

A linha de consolidação faz dois trabalhos: prova que a categoria tem saída e mostra quem são os compradores naturais. Uma linha basta, não virar slide de exit.

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

**Objetivo:** mostrar que vocês conhecem a categoria de verdade, inclusive quem faz ataque. Tentar dizer que ninguém ataca é o caminho mais rápido para perder a sala.

**Copy:** quatro nomes, uma linha cada. Sem matriz.

> **Gray Swan.** US$ 40 milhões de Série A, valuation de US$ 200 milhões. Teste adversarial contínuo com 15 mil pesquisadores no Arena. Cliente é laboratório de fronteira.
>
> **Lakera** (Check Point). Gandalf e Agent Breaker, o maior corpus público de injeção de prompt. Guarda e testa, em inglês, para enterprise global.
>
> **Protect AI** (Palo Alto). RECON, red teaming de aplicação de IA, dentro de uma suíte de plataforma.
>
> **Zenity.** Governança e detecção por intenção em plataforma corporativa. Inventário e política.
>
> **hify.ai.** Ataque contínuo com laudo que satisfaz a CMN 5.274 e a BCB 538.
>
> Todos eles entregam achado técnico. Nenhum entrega evidência de exploração por achado com mapeamento regulatório brasileiro, laudo de reteste e retenção de cinco anos. E a norma exige profissional independente, não ferramenta.

**Notas:**

A diferenciação não é ataque contra defesa, é entrega técnica contra entrega regulatória. Quem tentar vender a primeira versão vai ouvir "e a Gray Swan?" e não vai ter resposta.

Objeção para o Q&A, não para o slide: "e se a Gray Swan entrar no Brasil?". Resposta: o cheque médio deles é laboratório de fronteira e enterprise americana, o laudo teria que ser refeito para norma brasileira e a exigência de profissional independente não se resolve com licença de software. Nenhuma dessas barreiras é permanente. A resposta honesta é que a janela existe e é por isso que a rodada é agora.

Segunda objeção provável: "a Conviso não faz isso?". A Conviso é referência nacional em AppSec e DevSecOps e é quem está mais perto de virar a chave. Vale ter a resposta pronta antes de alguém perguntar.

---
## Slide 9. Wedge

**Objetivo:** mostrar um comprador específico com obrigação vencida, não um mercado abstrato.

**Copy:**

> Não começamos pelo CISO curioso. Começamos por quem tem norma vencida e auditor marcado.
>
> Instituição de pagamento e financeira sob CMN 5.274 e BCB 538: teste de intrusão anual por profissional independente em todo sistema crítico, com evidência retida por cinco anos. Prazo encerrado em março de 2026.
>
> Elas cumpriram a norma no que sabiam testar. O agente de IA ficou de fora, porque nenhum fornecedor de pentest brasileiro sabe testar isso e nenhum fornecedor global entrega o laudo no formato que o BC exige.
>
> É esse buraco que a gente ocupa.

**Nota:** "norma vencida com auditor marcado" contra "CISO curioso" é a diferença entre ciclo de venda de 45 dias e de 9 meses. É o go-to-market inteiro em uma frase, e por isso não precisa de slide de GTM separado.

Esse slide ficou mais forte que a versão anterior porque deixou de ser tese sobre compliance e passou a citar número de resolução e data vencida. Confirmar com alguém de compliance de fintech antes do primeiro pitch, porque errar interpretação de norma na frente de um investidor com fintech no portfólio custa a reunião.

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

**Ressalva que precisa estar na conta, não escondida.** Existem mais de 200 instituições de pagamento autorizadas pelo BC, contra 26 no início da década. Multiplicar 200 por R$ 240 mil dá um número bonito e falso, porque 80% das contratações de pentest no Brasil ficam entre R$ 8 mil e R$ 18 mil pelo ano inteiro. O mercado a R$ 240 mil é a faixa de cima. A conta honesta corta duas vezes: quantas instituições têm IA em produção com credencial de execução, e dessas, quantas têm orçamento nessa faixa. O segundo corte sai das entrevistas de vocês, e é ele que prova que vocês falaram com o mercado.

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
