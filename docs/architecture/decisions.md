## 1. TypeScript fixado em ~6.0.3 

- Decisão: Fixar a versão do TypeScript em ~6.0.3 para evitar problemas de compatibilidade com dependências que ainda não suportam versões mais recentes.

- Motivo: Algumas bibliotecas e ferramentas do ecossistema ainda não são compatíveis com versões mais recentes do TypeScript, o que pode causar erros de compilação ou comportamento inesperado.

- Alternativas consideradas: Atualizar para a versão mais recente do TypeScript, mas isso poderia introduzir problemas de compatibilidade com dependências existentes.

- Data: 04/11/2026.


## 2. ESLint em vez de Oxlint 

- Decisão: Adotar o ESLint como ferramenta de linting para o projeto, em vez do Oxlint.

- Motivo: O ESLint é amplamente utilizado na comunidade JavaScript/TypeScript, possui uma grande variedade de plugins e regras configuráveis, e é mais fácil de integrar com outras ferramentas de desenvolvimento.

- Alternativas consideradas: Continuar usando o Oxlint, mas isso poderia limitar a capacidade de personalização e integração com outras ferramentas.

- Data: 04/11/2026.


## 3. Não rodar npm audit fix --force

- Decisão: Evitar o uso do comando `npm audit fix --force` para corrigir vulnerabilidades de segurança.

- Motivo: O uso do `--force` pode atualizar dependências de forma agressiva, o que pode quebrar a compatibilidade com o código existente e introduzir novos bugs.

- Alternativas consideradas: Rodar apenas `npm audit fix` sem o `--force`, ou revisar manualmente as vulnerabilidades e atualizar as dependências de forma controlada.

- Data: 05/11/2026.


## 4. Fonte Inter via @fontsource-variable/inter

- Decisão: Utilizar a fonte Inter através do pacote `@fontsource-variable/inter` para garantir uma tipografia consistente e de alta qualidade no projeto.

- Motivo: A fonte Inter é amplamente reconhecida por sua legibilidade e estética moderna, e o pacote `@fontsource-variable/inter` permite fácil integração com projetos web, oferecendo suporte a variações de peso e estilo.

- Alternativas consideradas: Utilizar outras fontes como Roboto ou Open Sans, mas a Inter foi escolhida por sua popularidade e legibilidade.

- Data: 09/11/2026.


## 5. Tema único claro

- Decisão: Adotar um tema único claro para a interface do usuário, evitando a implementação de múltiplos temas (claro e escuro).

- Motivo: A escolha de um tema único claro simplifica o design e a manutenção do projeto, além de garantir uma experiência de usuário consistente.

- Alternativas consideradas: Implementar suporte a múltiplos temas, mas isso aumentaria a complexidade do desenvolvimento e manutenção do projeto.

- Data: 10/11/2026.

## 6. Express como framework HTTP

- Decisão: Utilizar o Express como framework HTTP para o backend do projeto.

- Motivo: O Express é um framework minimalista e flexível para Node.js, amplamente utilizado na comunidade, com uma grande quantidade de recursos e middleware disponíveis, facilitando o desenvolvimento de APIs RESTful.

- Alternativas consideradas: Utilizar outros frameworks como Koa ou Fastify, mas o Express foi escolhido por sua popularidade, documentação e comunidade ativa.

- Data: 11/11/2026.