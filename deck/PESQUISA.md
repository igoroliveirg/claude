# Pesquisa de base para o deck

Levantado em 17 de setembro de 2026. Tudo aqui tem fonte. O que não tem fonte não entrou.

Duas fontes do acervo original ficaram inacessíveis: `bestpitchdeck.com` e `startupfundraising.com` estão bloqueados pelo proxy de rede deste ambiente. Os decks de referência da seção 8 do CLAUDE.md não puderam ser abertos aqui. Se você abrir na sua máquina e colar a estrutura, eu incorporo.

---

## 1. A norma que muda o wedge

Este é o achado mais importante da pesquisa. O wedge deixa de ser "compliance com prazo" genérico e passa a ter número de resolução, escopo e prazo vencido.

**Resolução CMN nº 5.274/2025** (instituições financeiras: bancos, cooperativas de crédito) e **Resolução BCB nº 538/2025** (instituições de pagamento, corretoras e distribuidoras).

O que exigem:

- Teste de intrusão anual **por profissional independente** em todos os sistemas críticos.
- Retenção de evidências por 5 anos, à disposição do Banco Central.
- Ativos de terceiros dentro do escopo.
- O relatório precisa conter evidência técnica de exploração por achado, mapeamento regulatório explícito e laudo de reteste.

**O prazo de adequação encerrou em 1º de março de 2026.** Já passou. Não é "vai passar a valer", é obrigação corrente.

**Resolução Conjunta nº 18** (CMN e BCB), publicada em 28 de novembro de 2025, em vigor desde 1º de janeiro de 2026. Obriga Política de Qualidade das Informações prestadas ao BC, em 12 dimensões, entre elas rastreabilidade, integridade, confiabilidade e acurácia. Exige responsabilidade indelegável do conselho, diretor estatutário designado, dicionário de dados e relatório semestral de qualidade. **Prazo de conformidade auditável: 31 de dezembro de 2026.** Faltam pouco mais de três meses.

**PL 2338/2023, marco legal da IA: não citar como obrigação.** Foi aprovado no Senado em dezembro de 2024, está na Câmara em comissão especial e a votação foi adiada para 2026. Ainda não é lei. Citar como exigência é o erro que um investidor com fintech no portfólio pega na hora.

Fontes: [Vantico sobre BCB 538 e CMN 5274](https://vantico.com.br/resolucoes-bcb538-e-cmn5274-o-que-muda/), [Blaze Infosec](https://www.blazeinfosec.com/pt-br/post/cmn-5-274-e-bcb-538-alteracoes/), [Grant Thornton sobre CMN 5.274](https://www.grantthornton.com.br/insights/artigos-e-publicacoes/seguranca-cibernetica-o-que-muda-com-a-cmn-5.2742025/), [Deloitte sobre a Resolução Conjunta 18](https://www.deloitte.com/br/pt/Industries/financial-services/perspectives/resolucao-conjunta-numero-dezoito.html), [PwC sobre a RC 18](https://www.pwc.com.br/pt/estudos/setores-atividade/financeiro/2026/resolucao-conjunta-n-18-2025.html), [Senado, PL 2338/2023](https://www25.senado.leg.br/web/atividade/materias/-/materia/157233).

---

## 2. O problema, com número de fonte citável

Pesquisa Febraban de Tecnologia Bancária 2026, feita com a Deloitte, divulgada no Febraban Tech 2026:

- Orçamento de tecnologia dos bancos: **R$ 50,4 bilhões em 2026**, alta de 8% sobre 2025, e crescimento de 58% em cinco anos.
- **Cibersegurança é prioridade para 100% das instituições pesquisadas.** IA generativa aparece em 84%.
- **R$ 3 bilhões** previstos em IA, analytics e big data em 2026.
- Tema central do evento: "Agentes Inteligentes, Liderança Humana".
- O achado que vale mais que todos: **as instituições financeiras brasileiras começaram a conceder credenciais de acesso elevado para que robôs tomem decisões operacionais, analisem dados proprietários e executem transações diretamente na infraestrutura central dos bancos.**

Essa última frase é o slide de problema inteiro. Agente com credencial elevada executando transação na infraestrutura central é, pela definição das próprias resoluções, sistema crítico. E o pentest anual que a norma exige não testa injeção de prompt.

Fontes: [Febraban, R$ 3 bi em IA](https://portal.febraban.org.br/noticia/4490/pt-br/), [Deloitte, Pesquisa Febraban 2026](https://www.deloitte.com/br/pt/Industries/financial-services/research/pesquisa-febraban-tecnologia-bancaria.html), [Brasil Inovador sobre o Febraban Tech 2026](https://brasilinovador.com.br/febraban-tech-2026-consagra-a-inteligencia-agentica-e-impoe-nova-governanca-de-seguranca-para-o-mercado-financeiro/), [Febraban, agentes inteligentes](https://portal.febraban.org.br/noticia/4485/pt-br/).

---

## 3. Conta Simples: o design partner é melhor do que estava no papel

A Conta Simples não é "uma fintech que usa IA". Ela está construindo um banco agêntico, publicamente, com calendário divulgado.

- Julho de 2026: lançou a Conferência Automatizada de Despesas, agente de IA rodando dentro da plataforma bancária. Foi anunciada como a primeira entrega concreta da estratégia **"Banco Agêntico B2B"**.
- Anunciou no Web Summit Rio o **"Faça Seu Agente"**: o cliente cria os próprios agentes de IA para executar tarefas financeiras de forma autônoma, sem programação.
- Calendário público: novos agentes mês a mês até a consolidação do modo bancário completo no **último trimestre de 2026**.
- Escala no primeiro semestre de 2026: **R$ 90 bilhões movimentados**, mais de **45 mil empresas**, mais de **2,3 milhões de cartões corporativos** emitidos até junho.
- Direciona 10% do investimento anual para IA.

Por que isso muda o deck: "Faça Seu Agente" significa que terceiros, os clientes da Conta Simples, constroem agentes que executam tarefas financeiras dentro de uma plataforma que movimenta R$ 90 bilhões. Superfície de ataque criada por usuário final, sem programação, com dinheiro do outro lado. É o caso de uso mais forte de segurança de agente que existe no Brasil hoje, e vocês têm acesso a ele.

Fontes: [Startups, banco agêntico B2B](https://startups.com.br/negocios/fintech/conta-simples-lanca-banco-agentico-b2b-para-financas-corporativas/), [TI Inside](https://tiinside.com.br/27/07/2026/agente-de-ia-da-conta-simples-confere-despesas-corporativas/), [Fincatch, R$ 90 bilhões](https://www.fincatch.com.br/post/conta-simples-atinge-r-90-bilhoes-movimentados-e-lan%C3%A7a-agente-de-ia-para-ser-o-melhor-amigo-do-fin), [Business Moment](https://businessmoment.com.br/conta-simples-banco-agentico-ia-financeiro/).

---

## 4. Onde eu estava errado sobre a concorrência

A estrutura anterior do deck dizia, no slide 8: "todos eles são defesa, ninguém testa se a defesa aguenta". **Isso é falso.** Um investidor que conhece a categoria derruba isso na primeira pergunta.

O que existe hoje em ataque contínuo a IA:

- **Gray Swan.** Série A de **US$ 40 milhões em junho de 2026**, co-liderada por Wing Venture Capital e Madrona, com Snowflake Ventures, Samsung Next, Hudson River Trading e Obvious Ventures. Valuation de **US$ 200 milhões**. Produtos: Cygnal (proteção em tempo real), **Shade (teste adversarial contínuo)** e **Arena, competição global permanente com mais de 15 mil pesquisadores atacando modelos**. Atende os principais laboratórios de fronteira.
- **Lakera** (Check Point). Opera o **Gandalf**, o maior experimento público de red team de IA do mundo, e o **Agent Breaker**, ambiente adversarial controlado para agentes. Tem um dos maiores corpora reais de injeção de prompt da categoria. Vende Lakera Red além do Guard.
- **Protect AI** (Palo Alto). O **RECON** é plataforma de red teaming para testar aplicações de IA em cenários de ameaça.
- **Mindgard.** Trata red teaming como pipeline contínuo, não engajamento pontual. Engajamento mínimo perto de **US$ 16 mil** para um único modelo.
- **Zenity.** Segue independente. Detecção baseada em intenção, examinando o caminho de execução completo, incluindo chamada de ferramenta, acesso a memória e uso de dado.

Correções ao cenário competitivo que estava no CLAUDE.md:

- A aquisição da Lakera pela Check Point foi **concluída em novembro de 2025**, não setembro.
- A **Prompt Security foi adquirida pela SentinelOne**. Não segue independente.
- A **Aim Security foi adquirida pela Cato Networks**.
- Dos quatro nomes da Rota B no documento original, **só a Zenity segue independente**.

Fontes: [FinSMEs, Série A da Gray Swan](https://www.finsmes.com/2026/06/gray-swan-raises-40m-in-series-a-funding.html), [Gray Swan, anúncio da Série A](https://www.grayswan.ai/news/gray-swan-announces-series-a), [Forbes sobre o Arena](https://www.forbes.com/sites/rashishrivastava/2026/05/28/this-ai-startups-army-of-15000-hackers-pressure-test-claude-gpt-5-and-gemini/), [Lakera Guard](https://www.lakera.ai/lakera-guard), [Arthur, plataformas de segurança de agente 2026](https://www.arthur.ai/column/best-ai-agent-security-platforms-2026), [Mindgard, ferramentas de red teaming](https://mindgard.ai/blog/best-tools-for-red-teaming).

---

## 5. Consequência: o recorte tem que mudar

"Red team contínuo para IA em produção", como recorte puro, está ocupado. A Gray Swan vale US$ 200 milhões fazendo exatamente isso, com 15 mil hackers como moat. A hify.ai não ganha essa comparação e não deveria tentar.

O que sobra, e que ninguém dos citados acima faz:

**Teste de intrusão em sistemas de IA com laudo que satisfaz a CMN 5.274 e a BCB 538.**

O produto continua sendo ataque. O que muda é qual é a entrega. Gray Swan, Lakera, Mindgard e Protect AI entregam achado técnico, em inglês, para laboratório de fronteira e enterprise americana. Nenhum deles entrega laudo com evidência de exploração por achado, mapeamento regulatório explícito para norma brasileira, laudo de reteste e retenção de 5 anos, que é literalmente o que a resolução pede.

Três razões pelas quais esse recorte é mais defensável que o anterior:

1. **A norma exige profissional independente.** Isso encaixa no perfil de bug bounty do Lucas melhor do que encaixa em ferramenta SaaS americana. É requisito regulatório, não argumento de marketing.
2. **O agente virou sistema crítico por definição.** A Febraban documentou que bancos já dão credencial elevada para robô executar transação na infraestrutura central. Quem faz o pentest anual da instituição não testa esse sistema, porque a metodologia de pentest de rede e aplicação não cobre injeção de prompt.
3. **O comprador existe, tem prazo vencido e tem orçamento.** Não é CISO curioso.

Frase de posicionamento sugerida: **o agente de IA virou sistema crítico, o laudo de pentest que o BACEN exige não cobre ele, e a gente cobre.**

---

## 6. Preço: contra o que comparar

O erro seria comparar R$ 20 mil por mês com pentest brasileiro genérico. Perde.

Pentest no Brasil em 2026:

- Faixa geral: R$ 15 mil a mais de R$ 100 mil. **80% das contratações ficam entre R$ 8 mil e R$ 18 mil.**
- Pentest básico: R$ 8 mil a R$ 25 mil.
- Aplicação web de médio porte com PCI DSS: R$ 30 mil a R$ 80 mil.
- Teste de CDE conforme PCI DSS: US$ 12 mil a US$ 25 mil.
- PCI DSS 4.0 adiciona cerca de 30% de custo.

Red teaming de IA, que é a categoria certa:

- Faixa da categoria: **US$ 8 mil a US$ 150 mil** por tipo de sistema.
- Contratos anuais enterprise: **US$ 10 mil a mais de US$ 100 mil**.
- Mindgard, engajamento mínimo: perto de US$ 16 mil para um único modelo.

**R$ 20 mil por mês são R$ 240 mil por ano. Ao câmbio de 5,15 de setembro de 2026, isso é cerca de US$ 46,6 mil por ano.** Fica no meio da banda global de red teaming de IA. O preço se defende, desde que a comparação seja com a categoria certa e nunca com o laudo anual de R$ 12 mil.

**R$ 40 mil de MRR são cerca de US$ 7,8 mil de MRR**, o que entra na banda de US$ 5K a US$ 50K que investidor usa como referência em seed, na borda de baixo.

Fontes: [Vantico, quanto custa um pentest](https://vantico.com.br/quanto-custa-um-pentest-precos-e-fatores/), [No Vuln, preço de pentest no Brasil 2026](https://novuln.com.br/blog/quanto-custa-pentest-brasil-2026), [AI Vyuh, preço de red teaming de IA 2026](https://security.aivyuh.com/blog/ai-red-teaming-pricing-2026/), [Wise, histórico USD para BRL](https://wise.com/us/currency-converter/usd-to-brl-rate/history).

---

## 7. Mercado, de baixo para cima

Números para a conta do slide de mercado:

- **Mais de 200 instituições de pagamento** com autorização do Banco Central. No início da década eram 26. O diretor de Fiscalização do BC estima mais 100 a 200 pedindo autorização.
- Mercado brasileiro de cibersegurança: **US$ 4,05 bilhões em 2026**, projeção de US$ 6,56 bilhões em 2031.
- Orçamento de tecnologia bancária: R$ 50,4 bilhões, com cibersegurança em 100% das prioridades.

**Ressalva que precisa entrar na conta, não ser escondida:** multiplicar 200 instituições por R$ 240 mil por ano dá um número bonito e falso. A maior parte dessas instituições paga R$ 8 mil a R$ 18 mil pelo pentest anual inteiro. O mercado a R$ 240 mil por ambiente é a faixa de cima, não a base toda. A conta honesta segmenta: quantas instituições têm IA em produção com credencial de execução, e dessas, quantas têm orçamento na faixa de R$ 240 mil. Esse segundo número sai das entrevistas, não de fonte pública.

Fontes: [Transfeera, instituições de pagamento no SPB](https://transfeera.com/blog/instituicao-de-pagamento-participante-do-spb/), [Revista Oeste, autorizações negadas em 2026](https://revistaoeste.com/economia/banco-central-negou-autorizacao-para-8-instituicoes-de-pagamento-em-2026-ate-abril/), [Mind Group, cibersegurança com IA no Brasil 2026](https://mindconsulting.com.br/2026/08/empresas-ciberseguranca-ia-brasil-2026/).

---

## 8. Concorrência brasileira

Ninguém faz o que a hify.ai faria. Mas existem empresas que poderiam se mover para cá, e vale conhecer os nomes antes que um investidor os cite:

- **Conviso**, Curitiba. Referência nacional em segurança de aplicações e DevSecOps. É a que está mais perto de conseguir virar a chave, porque já vende AppSec para o mesmo comprador.
- **Evolutia.** SOC com agentes de IA investigando alertas, SIEM próprio. Defesa, não ataque.
- **Comp AI.** Segurança e conformidade na era agêntica.
- **Freedom.** Agentes de IA para média e grande empresa, captou R$ 14,5 milhões. Não é segurança.

Fontes: [Startupi, cibersegurança 2026](https://startupi.com.br/ciberseguranca-em-2026-brasil-mundo-startups/), [Mind Group](https://mindconsulting.com.br/2026/08/empresas-ciberseguranca-ia-brasil-2026/), [Nidde Digital sobre a Evolutia](https://niddedigital.com/empresa-brasileira-cria-plataforma-de-seguranca-que-investiga-alertas-com-agentes-de-ia/).

---

## 9. Ambiente de captação na categoria

- Mais de **US$ 392 milhões** em captações de segurança de IA agêntica nas duas semanas em torno do RSAC 2026. Rodada média de US$ 28 milhões, **mediana de US$ 12 milhões**.
- **Seed foi 58% do número de deals de 2026** na categoria, somando US$ 65,8 milhões.
- Red teaming especificamente: três captações, US$ 77 milhões no total, **mediana de US$ 30 milhões**.
- Os 10 maiores deals capturaram cerca de 84% do capital. A metade de baixo ficou com 12%.

Leitura: a categoria está quente e o cheque de seed existe. Mas a concentração diz que ou você está entre os poucos que o mercado enxerga como líder, ou pega cheque pequeno. Sem prova independente, a hify.ai está na metade de baixo.

Fontes: [Software Strategies Blog, RSAC 2026](https://softwarestrategiesblog.com/2026/03/28/agentic-ai-security-startups-funding-mna-rsac-2026/), [Help Net Security, seed em segurança com agentes](https://www.helpnetsecurity.com/2026/07/31/ai-agents-cybersecurity-seed-funding/).

---

## 10. O que não achei

- **Nada sobre o Lucas Faria em bug bounty.** Busquei por nome em HackerOne, Bugcrowd e BugHunt. Sem handle, não tem como levantar. É a pergunta número um.
- **Não consegui identificar a Enter.** O nome é genérico demais para buscar sem mais contexto.
- **Preço fechado de Gray Swan e Lakera.** Os dois trabalham com cotação sob consulta. Só a faixa da categoria é pública.
- **Os decks de referência.** `bestpitchdeck.com` e `startupfundraising.com` estão bloqueados pelo proxy deste ambiente.
