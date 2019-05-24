# SearchUsers

Esse projeto foi gerado com [Angular CLI](https://github.com/angular/angular-cli) versão 7.3.9.

## Dependências
Rode `yarn install` ou `npm install` para instalar as depêndencias do projeto.

## Servidor de desenvolvimento

Rode `yarn dev` ou `npm run dev` para levantar o servidor de desenvolvimento. Automaticamente será aberta uma aba do navegador com o endereço `http://localhost:4200/`. 
A aplicação será recarregada automaticamente, se você mudar algum arquivo(hot-reloading).

## Linter

Foram adicionadas regras extras de lint como:
* no-irregular-whitespace
* ordered-imports
* trailing-comma

Rode `yarn lint` ou `npm run lint`, para fazer a verificação.

## Build

Rode `yarn build` ou `npm run build` para buildar o projeto.
Os artefatos do build serão salvos na pasta `dist/`. Por padrão esses comandos já rodam com a variável de ambiente `production`.

## Testes unitários

Rode `yarn test` ou `npm run test` para executar os testes unitários através do [Karma](https://karma-runner.github.io).

Testes custom encontram em
* auth.service.spec.ts
* fields.creator.spec.ts
* userLogin.factory.spec

## Server Side Rendering

Esse projeto tem suporte ao Server Side Rendering, basta rodar o comando `yarn ssr` ou `npm run ssr`. 


### Rotas
* `/` - progida(se não estiver logada), referente ao login
* `cadastrar`- protegida(se é admin e usuário logado), referente ao cadastro de usuários
* `usuarios` - protegida(se usuário logado), refere a visualização do usuário, exclusão e edição(se for admin)

### Storage
A aplicação não consome endpoints, existe um pattern DAO que cuida dos acessos ao localStorage(escolhido como sistema de armazenmento do desafio).

### Bônus
Desenvolvi um mini CLI para rodar esse projeto mais rapidamente.
Este cli é dependente de Git e Node apenas.
Com 2 comandos, você já terá o projeto rodando sozinho(poderia ter criado um Dockerfile mas eu gosto mais de Javascript :))

Basta fazer a instalação global do pacote [search-users](https://www.npmjs.com/package/search-users). 
Você precisará de permissão de administrador.

Instale o pacote em sua máquina com `sudo npm install search-users -g`.
Após sucesso, rode o comando `search-users -i`.

O que é feito com esse comando ?

- Clonamos o projeto numa pasta temporária
- Instalamos as depedências
- Levantamos o servidor de desenvolvimento.
