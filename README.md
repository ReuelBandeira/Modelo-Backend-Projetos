# Backend GIGA Melhoria

# Tecnologias

- [NodeJS](https://nodejs.org/en/docs/)
- [Typeorm](https://typeorm.io/)
- [Typescript](https://www.typescriptlang.org/)
- [Mysql](https://dev.mysql.com/doc/)

## Estrutura de pastas Backend

Seguindo um pouco do conceito de DDD e SOLID

- src
  - config: Arquivos de configuração
  - modules: Camada das Entidades da aplicação
    - NOME_DA_ENTIDADE: Tudo que estiver
      - dtos: Modelos do projeto
      - infra: Camada da aplicação em que usa diretamente alguma Tecnologia ou Protocolo
        - http: Camada responsável pelo protocolo HTTP
          - controllers: Camada responsável pelo Controller da entidade usando as funções definidas pelo REST
          - routes: Camada responsável por definir as rotas da entidade
        - typeorm: Camada responsável pelo TypeOrm
          - entities: Camada responsável por definir a entidade com
          - respositories: Camada reponsável por implementar
      - repositories: Camada reponsável por definir a estrutura do repositório
        - fakes: Camada responsável por implementar de forma 'fake', sem conexão com qualquer tecnologia, apenas usado para testes (TDD)
      - providers(opcional): Camada responsável por definir um serviço próprio da entidade
        - fakes: Camada responsável por implementar de forma 'fake', sem conexão com qualquer tecnologia, apenas usado para testes (TDD)
        - implementations: Camada responsável por implementar através da tecnologia/serviço
        - model: Camada responsável por definir o modelo da implementação
      - services: Camada responsável por aplicar as regras de negócio da aplicação e das funcionaidades. Exemplo: Service para criar usuário
  - shared: Camada referente a tudo aquilo que for compartilhável por toda a aplicação
    - container: Camada responsável por definir/unir todas as injeções de dependência
      - providers(opcional): Camada responsável pelos serviços
        - NOME_SERVICO: Camada responsável pelo serviço em específico
          - fakes: Camada responsável por implementar de forma 'fake', sem conexão com qualquer tecnologia, apenas usado para testes (TDD)
          - implementations: Camada responsável por implementar através da tecnologia/serviço
          - model: Camada responsável por definir o modelo da implementação
    - erros: Camada responsável por definir o tratamento de exceções
    - infra: Camada da aplicação em que usa diretamente alguma Tecnologia ou Protocolo
      - http: Camada responsável pelo protocolo HTTP e pela definição do servidor(ex: server.js)
        - routes: Camada responsável por unir todas as rotas da aplicação
      - typeorm: Camada responsável pelo TypeOrm
        - database: Camada responsável pelo banco de dados


# Estrutura base dos commits

****Tipos:****

- **feat:**     Uma nova feature.

- ****fix:****      Um bug fix.

- ****docs:****     Apenas mudanças na documentação.

- ****style:****   Mudanças que não afetam o significado do codigo  (white-space, formatting, missing semi-colons, etc).

- ****refactor:****  Uma mudança no codigo de refatoração.

- ****test:****     Adicionando testes esquecidos ou corrigir testes já existentes.

- ****chore:****   Mudança na contrução do processo or auxxiliando ferramentas tal como gearação de documentação

- ****perf:****     Uma mudança no codigo que melhora a peformace.

- ****ci:****       Mudanças nos arquivos ou scripts do CI.

- ****build:****    Mudança que afeta a contrução do sistema ou de dependencias externas (example scopes: gulp, broccoli, npm).

- ****temp:****     Mudanças que não serão incluidas no CHANGELOG.

****Exemplos:****

$ git commit -m "feat: creating a new UserController"

$ git commit -m "refactor: remove code duplicate on UserController"

$ git commit -m "docs: adding doc of new route of creating a new user"



para estartar corretamente:

npx ts-node index.ts;
npm install express;
npm install tsyringe; (tyscript)
npm install typeorm pg reflect-metadata; (migrations)
yarn add dotenv;


