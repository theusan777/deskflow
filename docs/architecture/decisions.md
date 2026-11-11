# Arquitetura e Decisões de Design

## 1. TypeScript fixado em ~6.0.3 

- Decisão: Fixar a versão do TypeScript em ~6.0.3 para evitar problemas de compatibilidade com dependências que ainda não suportam versões mais recentes.

- Motivo: Algumas bibliotecas e ferramentas do ecossistema ainda não são compatíveis com versões mais recentes do TypeScript, o que pode causar erros de compilação ou comportamento inesperado. O principal motivo foi que o `typescript-eslint@8.72.1` declara suporte a TypeScript `>=4.8.4 <6.1.0`, enquanto o gerador instalou a versão 7.0.2, causando o erro `ERESOLVE`.

- Alternativas consideradas: Atualizar para a versão mais recente do TypeScript, mas isso poderia introduzir problemas de compatibilidade com dependências existentes.

- Data: 04/11/2026.


## 2. ESLint em vez de Oxlint 

- Decisão: Adotar o ESLint como ferramenta de linting para o projeto, em vez do Oxlint.

- Motivo: O ESLint é amplamente utilizado na comunidade JavaScript/TypeScript, possui uma grande variedade de plugins e regras configuráveis, e é mais fácil de integrar com outras ferramentas de desenvolvimento.

- Alternativas consideradas: Aceitar o Oxlint que o gerador oferece como padrão, mas seu ecossistema de regras e plugins é menor e há menos material de estudo disponível.

- Data: 04/11/2026.


## 3. Não rodar npm audit fix --force

- Decisão: Evitar o uso do comando `npm audit fix --force` para corrigir vulnerabilidades de segurança.

- Motivo: O uso do `--force` pode atualizar dependências de forma agressiva, quebrar a compatibilidade com o código existente e introduzir novos bugs. As 10 vulnerabilidades moderadas vinham apenas de ferramentas de desenvolvimento (cadeia do `minimatch` dentro do ESLint), e `npm audit --omit=dev` retornou 0. Além disso, o `--force` rebaixaria o ESLint 10 para o 9, uma mudança incompatível.

- Alternativas consideradas: Rodar apenas `npm audit fix` sem o `--force`, ou revisar manualmente as vulnerabilidades e atualizar as dependências de forma controlada.

- Data: 05/11/2026.


## 4. Fonte Inter via @fontsource-variable/inter

- Decisão: Utilizar a fonte Inter através do pacote `@fontsource-variable/inter` para garantir uma tipografia consistente e de alta qualidade no projeto.

- Motivo: Como o DeskFlow é um sistema interno, carregar a fonte de um serviço externo como o Google Fonts criaria uma dependência de rede desnecessária. Com o pacote `@fontsource-variable/inter`, a fonte vai junto com o build.

- Alternativas consideradas: Usar um link do Google Fonts no `index.html`, descartado pelo acoplamento externo.

- Data: 10/11/2026.


## 5. Tema único claro

- Decisão: Adotar um tema único claro para a interface do usuário, evitando a implementação de múltiplos temas (claro e escuro).

- Motivo: A escolha de um tema único claro simplifica o design e a manutenção do projeto, além de garantir uma experiência de usuário consistente.

- Alternativas consideradas: Implementar suporte a múltiplos temas, mas isso aumentaria a complexidade do desenvolvimento e manutenção do projeto.

- Data: 10/11/2026.


## 6. Express como framework HTTP

- Decisão: Utilizar o Express como framework HTTP para o backend do projeto.

- Motivo: Vagas de júnior e estágio costumam pedir Express. Além disso, é um framework minimalista e flexível para Node.js, amplamente utilizado na comunidade, com muitos recursos e middlewares disponíveis, facilitando o desenvolvimento de APIs RESTful.

- Alternativas consideradas: Utilizar outros frameworks como o Fastify, mas o Express foi escolhido por sua popularidade, documentação e comunidade ativa.

- Data: 11/11/2026.