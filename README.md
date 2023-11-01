# Documento de instalação Basys

## Configuração do Backend

------------------------------------------------
<br></br>
### 1. Tecnologias
### 2. Estrutura de pastas Backend
### 3. Estrutura base dos commits
### 4. Pré-requisitos
### 5. Clonar o Projeto para o ambiente local
### 6. Instalação e configurações de pacotes
### 7. Rodar migrations
### 8. Inicializar com npm e yarn
<br></br>

------------------------------------------------
## 1. Tecnologias

- [NodeJS](https://nodejs.org/en/docs/)
- [Typeorm](https://typeorm.io/)
- [Typescript](https://www.typescriptlang.org/)
- [Mysql](https://dev.mysql.com/doc/)

## 2. Estrutura de pastas Backend

Seguindo um pouco do conceito de DDD e SOLID

- 📦 src
  - 📂 config: Arquivos de configuração
  - 📂 modules: Camada das Entidades da aplicação
    - 📂 NOME_DA_ENTIDADE: Tudo que estiver
      - 📂 dtos: Modelos do projeto
      - 📂 infra: Camada da aplicação em que usa diretamente alguma Tecnologia ou Protocolo
        - 📂 http: Camada responsável pelo protocolo HTTP
          - 📂 controllers: Camada responsável pelo Controller da entidade usando as funções definidas pelo REST
          - 📂 routes: Camada responsável por definir as rotas da entidade
        - 📂 typeorm: Camada responsável pelo TypeOrm
          - 📂 entities: Camada responsável por definir a entidade com
          - 📂 respositories: Camada reponsável por implementar
      - 📂 repositories: Camada reponsável por definir a estrutura do repositório
        - 📂fakes: Camada responsável por implementar de forma 'fake', sem conexão com qualquer tecnologia, apenas usado para testes (TDD)
      - 📂 providers(opcional): Camada responsável por definir um serviço próprio da entidade
        - 📂 fakes: Camada responsável por implementar de forma 'fake', sem conexão com qualquer tecnologia, apenas usado para testes (TDD)
        - 📂 implementations: Camada responsável por implementar através da tecnologia/serviço
        - model: Camada responsável por definir o modelo da implementação
      - 📂 services: Camada responsável por aplicar as regras de negócio da aplicação e das funcionaidades. Exemplo: Service para criar usuário
  - 📂 shared: Camada referente a tudo aquilo que for compartilhável por toda a aplicação
    - 📂 container: Camada responsável por definir/unir todas as injeções de dependência
      - 📂 providers(opcional): Camada responsável pelos serviços
        - 📂 NOME_SERVICO: Camada responsável pelo serviço em específico
          - 📂 fakes: Camada responsável por implementar de forma 'fake', sem conexão com qualquer tecnologia, apenas usado para testes (TDD)
          - 📂 implementations: Camada responsável por implementar através da tecnologia/serviço
          - 📂 model: Camada responsável por definir o modelo da implementação
    - 📂 erros: Camada responsável por definir o tratamento de exceções
    - 📂 infra: Camada da aplicação em que usa diretamente alguma Tecnologia ou Protocolo
      - 📂 http: Camada responsável pelo protocolo HTTP e pela definição do servidor(ex: server.js)
        - 📂 routes: Camada responsável por unir todas as rotas da aplicação
      - 📂 typeorm: Camada responsável pelo TypeOrm
        - 📂 database: Camada responsável pelo banco de dados


## 3. Estrutura base dos commits

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

--------------------------------------------

## 4. Pré-requisitos <br></br>

* Sistema operacional Linux instalado - Ubuntu 20.04
  * https://ubuntu.com/download/desktop <br/><br/>

* Instalar VS CODE para visualizar os projetos
  * https://code.visualstudio.com/Download <br/><br/>

* Instalar Node versão 16.13.1 LTS (ou versão superior LTS)
  * https://nodejs.org/en/download/ <br/><br/>
    * Obs: Existe várias formas de instalação do node, uma delas é via package manager. Se optar por essa forma de instalação, é necessário da instalação do <b>CURL</b>.<br/><br/>
          *Para instalar o <b>CURL</b> acesse o link abaixo
        ```sh
       https://curl.se/
        ```
        ou instale via linha de comando no terminal de Ubuntu

        ```sh
        sudo apt  install curl  # version 7.68.0-1ubuntu2.7
        ```

  * Verificar se o Node.js e NPM estão instalados.<br/>
  Quando instalamos o Node.js o gerenciador de pacotes NPM também é instalado, para confirmar a instalação do Node.js e NPM abra o terminal de comando do Ubuntu e execute os comandos abaixo <br/><br/>
      ```sh
      node --version
      ```
      ou

     ```sh
    npm --version
     ```
     se a instalação estiver correta a resposta do terminal deve conter algo assim.
      ```sh
      $ node --version
      v16.13.1

      $ npm --version
      8.1.2
     ```


* Instalar Yarn versão 1.22.17 LTS (ou versão superior LTS)
  * https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable

    ```sh
    $ sudo npm install --global yarn
    ```

* Instalar a versão Git 2.25.1 LTS (ou superior LTS)
  * https://git-scm.com/download/linux


     ou instale via linha de comando no terminal de Ubuntu

    ```sh
    $ sudo apt update
    $ sudo apt install git-all
    ```

    Após a instalação, você pode acessar o Git a partir do Terminal.
    Para verificar se a instalação foi bem-sucedida, abra um novo terminal e digite:
    ```sh
    git --version
    ```

    Você deverá ver a versão do Git instalada no seu sistema.

* Instalar o Banco de Dados do MySQL Server
    - recomendado o MySql Workbench baixado na loja do ubuntu

* Instalar Docker versão 24.0.2 LTS (ou versão superior LTS)
  * https://docs.docker.com/engine/install/ubuntu/
  * Dar privilégios para o Docker não pedir o “Sudo” durante a execução dos seus comandos.
  * https://docs.docker.com/engine/install/linux-postinstall/ <br/><br />


* Instalar Docker-compose versão 1.29.2 LTS (ou versão superior LTS)
  * https://docs.docker.com/compose/install/ <br /><br />

-------------------------------------

## 5. Clonar o Projeto para o ambiente local <br></br>

Vá até o diretório que deseja colocar o projeto e execute o seguinte comando para clonar:

```sh
git clone URL_DO_REPOSITORIO
```

Substitua URL_DO_REPOSITORIO pela URL do repositório que você deseja clonar. Você pode encontrar a URL no canto superior direito da página do repositório no GitLab.

seu comando é pra ficar parecido com este:

```sh
git clone https://git.grupoicts.com.br/giga/melhoria_smd/backend.git
```

Adicione usuário e senha do git para clonar o repositório.

------------------------------------------------

## 6. Instalação e configurações de pacotes <br></br>

No diretório do projeto execute os seguintes comandos para instalar os pacotes

```sh
npm install
```
ou
```sh
yarn install
```

Se aparecer algum erro de permissão tente rodar com sudo:

```sh
sudo npm install
```
ou
```sh
sudo yarn install
```

dentro de backend/ execute os seguintes comandos para verificar as ultimas atualizações na branch:

```sh
git pull
```
isso irá manter sua branch atualizada com as ultimas modificações feitas.

Antes de inicializar é preciso configurar o arquivo .env na raiz do projeto

### Configure o .env <br></br>
 - Crie um novo arquivo na raiz do seu backend com o nome '.env'

    ```sh
    DB_HOST=
    DB_POR=
    DB_USERNAME=
    DB_PASS=
    DB_NAME=
    PORT=

    SERVER=

    SMTP_HOST=
    SMTP_PORT=
    SMTP_USER=
    SMTP_PASS=

    SLACK_WEBHOOK=
    ```

    Onde em REACT_APP_BASE_URL é adicionado o localhost do backend,
    e em REACT_APP_MANAGER_RASP_IP é adicionado onde será estartado o backend

    seu arquivo .env deve parecer com este:

    ```sh
    DB_HOST=localhost
    DB_POR=3306
    DB_USERNAME=username
    DB_PASS=P@ssw0rd
    DB_NAME=basys
    PORT=3334

    SERVER=

    SMTP_HOST="smtp.gmail.com"
    SMTP_PORT=465
    SMTP_USER="basys@grupoicts.com.br"
    SMTP_PASS="fetxvmnykjsdykbo"

    SLACK_WEBHOOK=
    ```

    Salve o arquivo criado.

------------------------------------------------
## 7. Rodar migrations <br></br>

Antes de inicializar o projeto você precisará rodar as migrations, elas irão configurar as tabelas do seu banco.

execute o comando abaixo para rodar as migrations ainda no seu diretório backend/

```sh
npm run typeorm migration:run
```
ou
```sh
yarn typeorm migration:run
```

------------------------------------------------

## 8. Inicializar com npm ou yarn <br></br>

Após instalar os pacotes você estará pronto para executar o projeto

No backend voçê deve startar o projeto com dev:

```sh
npm run dev
```
ou
```sh
yarn dev
```

----------------------------------

# Comandos git commit
- git add --all
- git commit -m "feat: commit"
- git push

# Comando git para atualizar projeto
- git pull

# Comandos git

- git commit -m "feat: creating a new UserController"

- git commit -m "refactor: remove code duplicate on UserController"

- git commit -m "docs: adding doc of new route of creating a new user"
