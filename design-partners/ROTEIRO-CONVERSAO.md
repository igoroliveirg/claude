# Roteiro de conversão de design partner

Para as duas conversas: Conta Simples e Enter. O objetivo não é conseguir um sim, é conseguir um documento.

---

## A diferença entre os dois casos

**Conta Simples.** O sim é fácil e o documento é difícil. A relação preexistente faz o champion responder "claro, manda" e nunca assinar, porque assinar exige envolver jurídico e segurança, e ninguém quer dar trabalho ao jurídico por um favor a um amigo. É justamente por ser amigo que você precisa do papel: o investidor já desconta a Conta Simples como relacionamento, e o desconto só sai com contrato, champion e preço. Um sim informal aqui vale zero no deck.

**Enter.** O sim é difícil e vale mais. É o design partner independente, então é ele que carrega o peso probatório. Se você só conseguir um dos dois assinados, priorize a Enter.

Consequência prática: são duas conversas diferentes. Na Conta Simples você negocia formalidade. Na Enter você negocia risco.

---

## O que você tem que sair com

Quatro coisas. Se sair com três, não terminou.

1. Champion com nome e cargo, comprometido por escrito.
2. Escopo definido: qual sistema de IA, qual ambiente.
3. Preço de conversão acordado, com data de decisão.
4. Autorização de uso do nome, ou a chamada de referência como alternativa.

Reunião que termina em "vou ver internamente e te falo" não entregou nenhuma das quatro. Ver a seção de fechamento.

---

## Enquadramento

Não peça piloto. Ofereça escopo limitado com contrapartida clara.

A diferença é real, não retórica. "Posso testar a IA de vocês?" é pedido de favor, e favor vira fila. "Tenho seis semanas de acesso antecipado com desconto travado, em troca de nome e referência" é troca entre pares, e troca tem prazo.

A frase de abertura que carrega o enquadramento:

> Vocês colocaram IA em produção. O pentest anual de vocês não olha para isso, e o auditor vai perguntar antes do fim do ano. Quero seis semanas no ambiente de [sistema], com escopo assinado e kill switch, para mostrar o que um atacante consegue fazer com aquele agente. Em troca, vocês travam preço de design partner e me deixam citar o nome.

---

## Sequência da conversa

**1. Confirmar a dor antes de vender.** Três perguntas, nessa ordem:

- Que sistema de IA de vocês já está em produção com acesso a dado ou ferramenta interna?
- Quem hoje valida a segurança desse sistema específico, e com que frequência?
- O que vocês responderiam se o auditor pedisse evidência de que aquele agente não vaza dado?

A terceira é a que abre o orçamento. Ela não pergunta sobre segurança, pergunta sobre prazo. Se o champion não souber responder, você achou o comprador. Se ele responder que já tem processo, pergunte se o processo testa injeção de prompt e exfiltração via RAG. Quase sempre não testa.

Não passe para o passo 2 antes de ouvir a resposta da terceira. O resto do roteiro depende dela.

**2. Nomear o escopo na hora.** Pegue o sistema que ele citou na primeira pergunta e proponha aquele, específico. Escopo genérico ("a stack de IA de vocês") assusta segurança e trava. Escopo de um sistema passa.

**3. Entregar os limites antes de serem pedidos.** Escopo por escrito, janela definida, kill switch no canal dele, gate de aprovação antes de qualquer escalada, sem teste de disponibilidade, log completo. Isso desarma 80% da objeção de segurança e é o que faz o jurídico dizer sim em uma semana em vez de três.

**4. Pedir as quatro coisas, uma por uma, com o termo aberto na tela.** Não mande o termo depois. Abra na reunião e preencha a cláusula 2 com ele olhando. Campo preenchido na frente da pessoa é compromisso. Campo prometido por e-mail é fila.

**5. Fechar com data, não com intenção.** Ver abaixo.

---

## Objeções

**"Não posso autorizar teste em produção."**

Aceite e reduza: começa em homologação com dado sintético, e a gente reavalia produção depois do primeiro ciclo. Você não precisa de produção na semana 1, precisa da assinatura.

A pergunta que reenquadra, se ele resistir a tudo: se você não pode autorizar a gente com escopo, kill switch e log, você também não pode autorizar um atacante. E ele não pede autorização.

Usar uma vez e seguir. Repetir soa como pressão.

**"Preciso passar pelo jurídico e pelo time de segurança."**

Resposta certa é "ótimo", não contorno. Peça o contato dos dois ainda na reunião, ofereça o termo já preenchido e proponha uma chamada de 20 minutos com os três juntos. O erro comum é sair da reunião com "ele vai falar com o jurídico", porque aí você perdeu o controle do processo e o assunto morre na caixa de entrada de terceiros.

**"Não tenho orçamento agora, é só um piloto."**

Separe as duas coisas: o piloto pode ser R$ 0, mas o preço de conversão tem que estar no papel com data de decisão. O que eu preciso hoje é o número, não o dinheiro.

Se der para cobrar qualquer coisa pelo piloto, cobre. Piloto pago é orçamento aprovado, piloto gratuito é favor, e investidor sabe distinguir.

**"Não quero aparecer em material de captação."**

Três níveis, ofereça de cima para baixo: nome livre, nome com aprovação de cada peça, ou nada de nome mais chamada de referência com investidor sob NDA. Aceite o terceiro sem demonstrar perda. Referência por telefone vale quase tanto em diligência e é muito mais fácil de aprovar internamente.

Nunca aceite os três "não". Design partner que não deixa citar, não dá referência e não paga não é design partner.

**"Vamos retomar no próximo trimestre."**

O custo de esperar não é seu, é dele: a IA continua em produção sem validação, e o auditor não muda de calendário. Proponha escopo de seis semanas com até quatro horas do time dele e marque a data de início agora, mesmo que seja em 30 dias. Data marcada com escopo assinado é design partner. Trimestre que vem sem data é não.

---

## Fechamento

Não termine a reunião sem uma destas três, em ordem de preferência:

1. Termo preenchido nas cláusulas 2, 3, 6, 7 e 8, indo para assinatura com data.
2. Chamada agendada com jurídico e segurança, na agenda, com o termo anexado.
3. Um "não" claro, com o motivo. É mais útil que um "talvez", porque libera você para procurar o próximo.

"Vou ver e te falo" não é nenhuma das três. Quando aparecer, devolva: "entendo, só me ajuda a entender o que falta para ser sim, e quem além de você decide isso".

---

## Mensagem para reabrir a conversa

Para mandar antes de pedir a reunião. Curta, sem anexo e sem pitch:

> [Nome], vocês têm IA em produção com acesso a dado interno. Estou fechando dois design partners para validar segurança de agente em ambiente real, com escopo assinado e kill switch. Seis semanas, até quatro horas do seu time, preço de design partner travado. Faz sentido 20 minutos essa semana para eu te mostrar o escopo?

Por que funciona: afirma o contexto em vez de perguntar, dá o custo real em tempo, mostra escassez verdadeira (dois) e pede um compromisso pequeno.

Não mande o termo antes da reunião. Termo antes de conversa vira documento no jurídico sem ninguém defendendo internamente.

---

## Follow-up no mesmo dia

Sempre por e-mail, nunca só WhatsApp, porque e-mail é o que vale em diligência.

> [Nome], obrigado pelo tempo. Registrando o que combinamos:
>
> Escopo: [sistema], em [ambiente].
> Início: [data]. Duração: 6 semanas.
> Esforço do time de vocês: até 4 horas.
> Champion: você.
> Preço de conversão: R$ [valor] por mês, decisão até [data].
> Uso do nome: [o que ficou combinado].
>
> Termo em anexo com esses campos preenchidos. Próximo passo: [chamada com jurídico em data / assinatura até data].
>
> Se eu registrei algo errado, me corrige.

Essa mensagem faz dois trabalhos. Trava o combinado por escrito, e "me corrige" transforma silêncio em concordância.

---

## Ordem de execução

1. Mandar a mensagem de reabertura para a Enter primeiro. É o que vale mais e é a conversa mais difícil, então precisa de mais tempo de ciclo.
2. Mandar para a Conta Simples no mesmo dia, com um ajuste: lá o pedido é explicitamente o documento. Vale dizer a verdade, que você precisa do contrato porque investidor desconta relacionamento sem papel. Champion que é amigo entende esse argumento melhor que qualquer pitch.
3. Passar a cláusula 12 do termo pelo advogado em paralelo, sem esperar resposta de nenhum dos dois.
4. Enquanto isso, rodar as entrevistas de cliente da lacuna 5. As duas coisas usam a mesma lista de contatos, e entrevista boa vira design partner número 3.
