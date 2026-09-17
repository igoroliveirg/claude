# Lacunas do deck

Tudo que está como `[PREENCHER: ...]` em `ESTRUTURA.md`, com dono e consequência.

Não dá para montar o visual antes de fechar os quatro itens do bloco "Bloqueia o deck". Os outros dá para preencher em paralelo.

---

## Bloqueia o deck

Sem esses quatro, o deck não pode ser mostrado para investidor.

### 1. Recorte de posicionamento

**Onde:** premissa de todo o documento.
**Dono:** Igor, com o Lucas.
**O que falta:** aceitar ou recusar "red team contínuo para IA em produção" como o recorte da Rota B.
**Se não resolver:** cada slide muda. Investir em identidade visual antes disso é jogar dinheiro fora.

### 2. Credencial pública do Lucas

**Onde:** slide 2, item 1. Slide 12.
**Dono:** Lucas.
**O que falta:** handle público, plataforma, posição em ranking, número de vulnerabilidades aceitas, CVEs com número, total de recompensas, programas que dá para nomear sem quebrar NDA.
**Se não resolver:** o slide 2 não existe. Sem tração e sem credencial verificável, não sobra prova nenhuma, só afirmação. A consultoria sob NDA não substitui, porque o investidor não consegue checar.

### 3. Dedicação do Lucas

**Onde:** slide 12.
**Dono:** Igor e Lucas, juntos.
**O que falta:** definir se é integral e a partir de quando. Hoje ele divide entre conselho da GrowDoc, Builders, consultoria e bug bounty.
**Se não resolver:** investidor lê cofundador técnico part-time e não segue. Não tem como maquiar no deck, porque a pergunta vem na primeira reunião.

Nota: bug bounty continuado não é conflito se estiver enquadrado como alimentação da biblioteca de ataque. Conselho, Builders e consultoria são. Vale separar os quatro na resposta em vez de tratar como um bloco só.

### 4. Status real dos design partners

**Onde:** slide 2. Slide 6. Slide 10. Slide 11.
**Dono:** Igor.

**Já decidido, não voltar atrás:** preço de R$ 20 mil por mês por ambiente, as três autorizações da cláusula 8 (nome, achado anonimizado, referência) e a propriedade intelectual da cláusula 11. Estão aplicados em `design-partners/TERMO.md`.

**O que ainda falta, para cada um dos dois:** contrato assinado, escopo do ambiente definido, acesso concedido, champion nomeado com cargo, data de início e data de decisão da conversão. Falta também o preço de tabela, que é o item 7 aqui.

**Se não resolver:** o slide 2 perde o número e volta a abrir com a credencial do Lucas. A diferença entre as duas versões do slide 2 é a diferença entre um deck com tração e um deck sem, e é o único bloqueador dos quatro que ainda depende de execução em vez de decisão.

**Prioridade entre os dois:** se só der para fechar um, feche a Enter. É o independente, e é o que carrega peso probatório. A Conta Simples sozinha, com a relação preexistente declarada, o investidor desconta.

**Material pronto:** `design-partners/TERMO.md` e `design-partners/ROTEIRO-CONVERSAO.md`. Falta executar as duas conversas e passar a cláusula 12 pelo advogado.

---

## Preenchimento em paralelo

### 5. Entrevistas de cliente

**Onde:** slide 2, item 3. Slide 10, o multiplicador.
**Dono:** Igor.
**O que falta:** 20 a 50 entrevistas com segurança e compliance de fintechs, adquirentes e instituições de pagamento. Registrar quantas já têm IA em produção e quantas têm alguma validação específica.
**Por que importa:** é o único número do deck que nenhum concorrente tem. Também é o substituto de tração mais barato e mais rápido de produzir dos que o investidor aceita.

### 6. Base regulatória

**Onde:** slide 4, bloco de regulação. Slide 9.
**Dono:** Igor, com alguém de compliance de fintech.
**O que falta:** confirmar quais exigências de BACEN, ANPD e PCI DSS 4.0 realmente alcançam sistema de IA hoje, e o que é interpretação. Separar o que já é obrigação do que está em tramitação, como o PL 2338.
**Se não resolver:** citar regra que não se aplica exatamente é o erro que um investidor com fintech no portfólio pega na hora, e contamina a credibilidade do resto do deck.

### 7. Preço de tabela

**Onde:** slide 10. Slide 11. Cláusula 7 do termo.
**Dono:** Igor.

**Já decidido:** R$ 20 mil por mês por ambiente, preço de design partner, travado por 12 meses na conversão.

**O que falta:** o preço de tabela, sugerido em R$ 30 mil. Precisa existir no papel mesmo que ninguém pague hoje.

**Por que não é detalhe:** sem tabela, R$ 20 mil não é desconto de design partner, é o preço da hify.ai. Isso tira a alavanca de aumentar depois, faz o slide 10 recalcular o mercado para baixo e transforma as três autorizações da cláusula 8 em favor em vez de contrapartida.

**Referência:** a Pentera roda perto de US$ 100 mil por ano. R$ 240 mil por ano por ambiente fica bem abaixo disso e continua sendo o topo do que o mid-market brasileiro paga. A tabela de R$ 30 mil mantém a distância do concorrente global e ainda dá espaço de desconto.

### 8. Margem bruta

**Onde:** slide 11.
**Dono:** Lucas.
**O que falta:** custo de inferência e compute por ambiente por mês, e a projeção conforme a biblioteca de ataque amortiza.
**Referência:** produto de IA roda perto de 52%. Série A cobra acima de 60%.

### 9. Achado de demo

**Onde:** slide 6.
**Dono:** Lucas, com autorização por escrito do design partner.
**O que falta:** um achado real, anonimizado, em ambiente de design partner.
**Regra:** mockup apresentado como achado real é fraude na diligência. Se não houver achado real na data do pitch, o slide vira "o que rodamos hoje", com captura da ferramenta e sem alegar cliente.

### 10. Meta de prova independente

**Onde:** slide 7.
**Dono:** Lucas.
**O que falta:** qual leaderboard ou benchmark público, qual posição, até que data.
**Referência:** a XBOW usou o leaderboard do HackerOne. Meta sem data é intenção, não moat.

### 11. Tamanho da rodada

**Onde:** slide 13, e possível slide 14.
**Dono:** Igor.
**O que falta:** bater o martelo entre US$ 5M e pré-seed de US$ 500K a US$ 1.5M.

**Mudou com o preço de R$ 20 mil.** O argumento pré-seed era construído sobre "sem tração nenhuma". Dois pilotos pagos a R$ 20 mil dão R$ 40 mil de MRR contratado, que converte para dentro da banda de US$ 5K a US$ 50K que investidor usa como referência de tração em seed. Isso não torna US$ 5M automático, mas tira vocês da faixa onde seed era inviável.

**O que ainda pesa contra US$ 5M:**

- Dois clientes, não cinco a quinze. A banda de MRR foi atingida por preço alto, não por volume, e investidor sabe ler a diferença.
- Um dos dois é relação preexistente declarada.
- Piloto de oito semanas pago não é receita recorrente provada. Só vira depois da conversão.
- O volume de deals de seed caiu perto de 30% no primeiro semestre de 2026.

**Leitura atualizada:** a decisão razoável agora é seed entre US$ 2M e US$ 3M, não US$ 5M nem pré-seed de US$ 500K. Com a conversão dos dois pilotos confirmada e um terceiro cliente independente pagando, US$ 5M volta para a mesa.

Se o alvo continuar sendo US$ 5M, entra o slide 14, "por que Brasil e não EUA", porque esse número sem volume de clientes é captação fora do Brasil.

**Nota:** essa decisão muda o slide 13 inteiro e a lista de fundos. Não é detalhe de acabamento.

### 12. Equity entre Igor e Lucas

**Onde:** não aparece no deck.
**Dono:** os dois.
**Por que está aqui:** não é slide, é bloqueio de term sheet. Investidor não fecha com cap table indefinido entre fundadores. Resolver antes de começar a conversar, não durante.

### 13. Identidade visual

**Onde:** todos os slides.
**Dono:** Igor.
**O que falta:** anexar os arquivos da identidade da hify.ai, que hoje estão só na máquina dele.
**Quando:** depois dos itens 1 a 4. Visual antes de conteúdo fechado é retrabalho garantido.
