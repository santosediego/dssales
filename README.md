# DSSales

[![NPM](https://img.shields.io/npm/l/react)](https://github.com/santosediego/dssales/blob/main/LICENSE) 
<!--[![Netlify Status](https://api.netlify.com/api/v1/badges/9f87d883-07f7-4086-bc85-c1a54500918f/deploy-status)](INSERIR URL DO NETLIFY)-->

## Sobre o projeto

DSSales é uma aplicação web construída durante o evento Semana Spring React da [Devsuperior](https://github.com/devsuperior). A aplicação
consiste em uma dashboard e listagem de vendas com filtragem de período e gênero. Possuí como foco de estudo a utilização de componentes de gráficos e toalizadores como em um relatório.

## Layout
<section align="center">
  <img src="https://raw.githubusercontent.com/santosediego/assets/main/dssales/dssales001.png" width="625" alt="Página principal">
  <img src="https://raw.githubusercontent.com/santosediego/assets/main/dssales/dssales002.png" width="625" alt="Página principal">
</section>

## Tecnologias utilizadas
### Back end
- Java
- Spring Boot
- JPA / Hibernate
- Maven
- Postgres
### Front end
- HTML / CSS / TypeScript / Bootstrap
- ReactJS
- Axios
- FlatPicker
- Apexcharts

## Como executar o projeto

### Back end
Pré-requisito: Java 11

```bash
# clonar repositório
git clone https://github.com/santosediego/dssales.git

# entrar na pasta do projeto back end
cd dssales/backend/

# executar o projeto (por padrão será executado com perfil de teste)
./mvnw spring-boot:run
```

### Front end
Pré-requisitos: 
- npm / yarn
- Back end em execução

```bash
# clonar repositório
git clone https://github.com/santosediego/dssales.git

# entrar na pasta do projeto front end web
cd dssales/frontend/

# instalar dependências
yarn

# executar o projeto
yarn start
```

## Autor

[Diego Santos](https://www.linkedin.com/in/santosediego/ "Perfil Linkedin Diego Santos")

