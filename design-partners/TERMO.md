# Termo de design partner

Minuta de trabalho. Preencher um por empresa: um para a Conta Simples, um para a Enter.

**Aviso, uma vez só:** isso não é peça jurídica pronta. A cláusula 4 é o que separa teste autorizado de invasão de dispositivo informático, tipificada no artigo 154-A do Código Penal. Advogado passa o olho antes da primeira assinatura. Depois disso o documento vira template e não precisa de advogado a cada cliente.

---

## Para que este documento existe

Dois trabalhos, nessa ordem de importância:

1. **Escudo jurídico.** Sem escopo autorizado por escrito, o produto não pode rodar. É condição de operação, não burocracia.
2. **Prova para o investidor.** Transforma logo em compromisso. Design partner sem contrato, champion e preço acordado é slide bonito que morre na diligência.

A cláusula que mais gente esquece e que o deck mais precisa é a 8, direito de citar o nome. Sem ela, o slide 2 do deck não pode nomear a Conta Simples nem a Enter, e volta a ser afirmação sem prova.

---

## 1. Partes

**Contratada:** hify.ai, [PREENCHER: razão social e CNPJ].

**Contratante:** [PREENCHER: razão social e CNPJ].

## 2. Champion e responsáveis

| Papel | Nome | Cargo | E-mail | Telefone |
|---|---|---|---|---|
| Champion na contratante | | | | |
| Contato técnico | | | | |
| Contato de emergência, 24h | | | | |
| Responsável hify.ai | | | | |

O champion é quem responde pela decisão de conversão. Se não tiver nome e cargo aqui, não existe design partner, existe conversa.

## 3. Escopo do ambiente

Sistemas de IA incluídos no teste:

| Sistema | Ambiente | Integrações e ferramentas acessíveis | Dado que trafega |
|---|---|---|---|
| [PREENCHER: nome do agente ou aplicação] | produção / homologação | | |

Explicitamente fora de escopo: [PREENCHER: sistemas, faixas de IP, integrações de terceiro, qualquer coisa que a contratante não controla].

Regra: integração de terceiro só entra com autorização do terceiro. Testar o fornecedor do cliente sem autorização dele é problema jurídico do cliente, e ele vai descobrir isso depois de você.

## 4. Autorização de teste

A contratante autoriza a hify.ai a executar, contra os sistemas listados na cláusula 3, técnicas de ataque contra a superfície de IA, incluindo injeção de prompt direta e indireta, tentativa de exfiltração de dado via recuperação de contexto, abuso de ferramenta e de agente, escalada de privilégio por integração e identificação de credencial exposta em contexto.

A autorização é limitada ao escopo da cláusula 3, ao período da cláusula 6 e aos limites da cláusula 5.

Assinatura desta cláusula por quem tem poder de representação da contratante. Autorização dada por quem não pode autorizar não protege ninguém.

## 5. Limites operacionais

- **Janela de execução:** [PREENCHER: dias e horários].
- **Severidade máxima sem aprovação prévia:** [PREENCHER]. Acima disso, a hify.ai para e pede aprovação ao contato técnico antes de prosseguir.
- **Gate de escalada:** nenhuma escalada de privilégio, movimentação lateral ou acesso a dado real de cliente final sem aprovação por escrito, registrada.
- **Kill switch:** o contato técnico da contratante pode interromper qualquer execução a qualquer momento por [PREENCHER: canal], com efeito imediato.
- **Sem impacto de disponibilidade:** nenhuma técnica de negação de serviço ou de degradação de desempenho.
- **Dado real:** [PREENCHER: proibido / permitido com mascaramento / permitido]. Se o ambiente for produção com dado de cliente final, definir aqui e não deixar para depois.
- **Log:** a hify.ai mantém registro completo do que executou, disponível para a contratante a qualquer momento.

## 6. Prazo e critério de sucesso

- **Início:** [PREENCHER].
- **Duração do piloto:** [PREENCHER: sugerido 8 semanas, para o faturamento fechar em dois meses redondos].
- **Esforço pedido ao time da contratante:** [PREENCHER: sugerido até 4 horas totais, sendo 1 hora de setup e o resto de revisão de achado].
- **Entregas:** [PREENCHER: N] ciclos de execução, relatório por ciclo com achado reproduzível, e um relatório final no formato que o compliance entrega ao auditor.
- **Critério de sucesso, acordado pelas duas partes:** [PREENCHER]. Exemplo utilizável: pelo menos um achado de severidade média ou superior que o processo atual de segurança da contratante não teria encontrado.

Critério de sucesso definido antes é o que permite pedir a conversão sem negociar de novo. Sem ele, a conversa de renovação começa do zero.

## 7. Preço

- **Preço de tabela:** R$ [PREENCHER: sugerido 30.000] por mês, por ambiente.
- **Preço de design partner, piloto e conversão:** R$ 20.000 por mês, por ambiente. Travado por 12 meses a partir da conversão.
- **Faturamento do piloto:** mensal, a partir do início da cláusula 6.
- **Data de decisão da conversão:** até [PREENCHER: data], o champion responde por escrito se converte. Sem resposta na data, o contrato segue no preço de design partner por inércia, cancelável com [PREENCHER: 30] dias.
- **Contrapartida do desconto:** acesso antecipado, uso do nome na cláusula 8 e chamada de referência.

O preço de tabela precisa existir no papel mesmo que ninguém pague ele hoje. Sem tabela, R$ 20.000 não é desconto de design partner, é o seu preço, e você perdeu a alavanca de aumentar depois.

**Nota sobre o número.** R$ 20.000 por mês são R$ 240 mil por ano por ambiente. Isso é preço de categoria estabelecida, não de pré-produto. Duas consequências:

1. Dois pilotos pagos nesse valor dão R$ 40 mil de MRR contratado, que é tração de verdade e muda o slide 2 do deck. Ver `deck/ESTRUTURA.md`.
2. É o número que pode travar a Enter, que é justamente o design partner que vale mais. Se travar, encurte o escopo, nunca o valor mensal. Ver a objeção de preço em `ROTEIRO-CONVERSAO.md`.

## 8. Uso do nome e dos achados

A contratante autoriza a hify.ai a:

- Citar seu nome e logo como design partner em material de captação e comercial: **[x] sim, livremente.**
- Usar achados técnicos anonimizados, sem identificar a contratante, em material de captação e comercial: **[x] sim.**
- Atender uma chamada de referência com investidor, sob NDA: **[x] sim.**

As três autorizações são condição do preço de design partner da cláusula 7. Quem não autoriza paga tabela.

Essa cláusula é o que sustenta o slide 2 do deck. Sem ela, nome de cliente vira "uma fintech brasileira" e perde a metade do valor probatório.

## 9. Confidencialidade

Mútua. A hify.ai não divulga achado, dado ou informação técnica da contratante fora do disposto na cláusula 8. A contratante não divulga a metodologia, a biblioteca de ataque nem o funcionamento do produto da hify.ai.

Prazo: [PREENCHER: sugerido 3 anos após o término].

## 10. Sem exclusividade

Nenhuma das partes tem exclusividade. A hify.ai pode atender concorrentes da contratante. A contratante pode contratar concorrentes da hify.ai.

Recusar essa cláusula é sinal de alerta. Design partner pedindo exclusividade em pré-produto está pedindo opção gratuita sobre a empresa de vocês.

## 11. Propriedade intelectual

Achados, relatórios e evidências produzidos sobre o ambiente da contratante pertencem à contratante.

Produto, metodologia, biblioteca de ataque, automações e qualquer melhoria derivada pertencem à hify.ai, inclusive quando a melhoria tiver origem em achado no ambiente da contratante, desde que incorporada sem dado, identificador, configuração ou informação que permita identificar a contratante ou seus clientes.

A contratante não adquire direito, licença ou exclusividade sobre a biblioteca de ataque, e reconhece que técnicas derivadas do trabalho no seu ambiente serão aplicadas a outros clientes na forma despersonalizada acima.

Essa cláusula é o efeito de corpus do slide 7 do deck: ataque encontrado em um cliente vira teste para todos. É o único ativo da hify.ai que melhora sozinho com escala. Negociar essa cláusula para baixo custa mais que o contrato vale, e um investidor que ler o termo vai olhar exatamente para ela.

## 12. Responsabilidade

[PREENCHER: com advogado. Limite de responsabilidade da hify.ai, tratamento de dano não intencional durante teste autorizado, e se há necessidade de seguro.]

Investidor com fintech no portfólio pergunta isso. Empresa pré-produto rodando ataque em ambiente com dado financeiro sem limite de responsabilidade definido é risco que aparece na diligência.

---

## Assinaturas

Data: [PREENCHER]

Pela contratante: [PREENCHER: nome, cargo, poder de representação]

Pela hify.ai: [PREENCHER]

---

## Checklist de preenchimento

Antes de mandar para assinatura, confirmar que não sobrou placeholder em:

- [ ] Cláusula 2, champion com nome e cargo
- [ ] Cláusula 3, sistema e ambiente específicos, e o que está fora
- [ ] Cláusula 5, todos os limites, principalmente dado real
- [ ] Cláusula 6, critério de sucesso acordado, e duração de 8 semanas para o faturamento fechar em dois meses redondos
- [ ] Cláusula 7, preço de tabela e data de decisão
- [ ] Cláusula 12, passada pelo advogado

Já resolvido e não precisa de decisão: cláusula 7, preço de design partner de R$ 20.000 por mês. Cláusula 8, as três autorizações. Cláusula 11, propriedade intelectual.

Assinado sem a cláusula 7 completa, o deck não pode dizer "preço travado por 12 meses", só "preço do piloto".
