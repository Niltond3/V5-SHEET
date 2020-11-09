
<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/Niltond3/V5-SHEET?color=%2304D361">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/Niltond3/V5-SHEET">

  <a href="https://github.com/Niltond3/V5-SHEET/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/Niltond3/V5-SHEET">
  </a>

  <a href="https://github.com/niltond3">
    <img alt="Feito por Nilton Neto" src="https://img.shields.io/badge/Feito%20por%20Nilton%20Neto-NiltonNeto-blue">
  </a>


</p>
<h1 align="center">
    <img alt="V5-SHEET" title="#V5-SHEET" src="./assets/logo-simplified.svg" />
</h1>

<h4 align="center">
	🚧  V5 SHEET | Em andamento 🚧
</h4>

<p align="center">
 <a href="#-sobre-o-projeto">Sobre</a> •
 <a href="#-funcionalidades">Funcionalidades</a> •
 <a href="#-como-executar-o-projeto">Como executar</a> •
 <a href="#-tecnologias">Tecnologias</a> •
 <a href="#-autor">Autor</a> •
 <a href="#user-content--licença">Licença</a>
</p>


## 💻 Sobre o projeto

V5 Sheet - É uma alternativa de criação e gerenciamento de fichas de personagens para o sistema storyteller, expecificamente, vampiro 5ª edição. 
Projeto desenvolvido principalmente para estudo e autocapacitação.

---

## ⚙️ Funcionalidades

- [ ] Narradores poderão ter acesso as fichas de seus jogadores apenas:
  - [ ] adicionando o bot no canal do discord que usarão para jogar
  - [ ] além de gerenciar as fichas dos jogadores será possível
    - editar informações de quais quer uma
    - observar alterações em tempo real

- [ ] Os jogadores terão acesso ao aplicativo móvel e a versão web apenas por digitar em um canal do discord com o bot o comando "!create", e assim poderão:
  - [ ] gerenciar seus próprios personagens
  - [ ] adicionar foto nos mesmos que serão convertidas em um padrão com moldura
- [ ] O narrador e jogadores poderão:
  - exportar as fichas em um arquivo json
  - importar as fichas de um arquivo json
  - o json será de um formato aceito pelo vtt enhancement suite

---

## 🚀 Como executar o projeto

Este projeto é divido em quatro partes:
1. Backend (pasta server)
2. Frontend (pasta web)
3. Mobile (pasta mobile)
4. bot (pasta bot)

💡Tanto o Frontend quanto o Mobile precisam que o Backend e o bot esteja sendo executado para funcionar.

---

## 🛠 Tecnologias

As seguintes ferramentas foram ou estão sendo usadas na construção do projeto:

#### **Website**  ([React](https://reactjs.org/)  +  [TypeScript](https://www.typescriptlang.org/))

-   **[React Router Dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom)**
-   **[React Icons](https://react-icons.github.io/react-icons/)**
-   **[Axios](https://github.com/axios/axios)**
-   **[React Dropzone](https://github.com/react-dropzone/react-dropzone)**

> Veja o arquivo  [package.json](https://github.com/niltond3/v5-sheet/blob/master/web/package.json)

#### **Server**  ([NodeJS](https://nodejs.org/en/)  +  [TypeScript](https://www.typescriptlang.org/))

-   **[Express](https://expressjs.com/)**
-   **[ts-node](https://github.com/TypeStrong/ts-node)**
-   **[typeorm](https://github.com/typeorm/typeorm)**
-   **[postgres](https://github.com/postgres/postgres)**
-   **[Multer](https://github.com/expressjs/multer)**
-   **[Celebrate](https://github.com/arb/celebrate)**
-   **[Joi](https://github.com/hapijs/joi)**

> Veja o arquivo  [package.json](https://github.com/niltond3/v5-sheet/blob/master/server/package.json)

#### **Mobile**  ([React Native](http://www.reactnative.com/)  +  [TypeScript](https://www.typescriptlang.org/))

-   **[Em desenvolvimento](/https://github.com/niltond3)**

> Veja o arquivo  [package.json](https://github.com/niltond3)

#### [](https://https://github.com/niltond3/bot)**Discord Bot**  ([NodeJS](https://nodejs.org/en/)  +  [TypeScript](https://www.typescriptlang.org/))

-   **[discordjs](https://github.com/discordjs/discord.js)** 
-   **[Axios](https://github.com/axios/axios)**

> Veja o arquivo  [package.json](https://github.com/niltond3)

#### [](https://github.com/niltond3)**Utilitários**

-   Protótipo:  **[Figma](https://www.figma.com/)**  →  **[Protótipo (V5 Sheet)](https://www.figma.com)**
-   API:  **[Discord API](https://discord.com/developers/docs/intro)**  →  **[discord.js](https://discord.js.org/#/)**
-   Editor:  **[Visual Studio Code](https://code.visualstudio.com/)**
-   Markdown:  **[StackEdit](https://stackedit.io/)**,  **[Markdown Emoji](https://gist.github.com/rxaviers/7360908)**
-   Teste de API:  **[Insomnia](https://insomnia.rest/)**
-   Fontes:  **[Ubuntu](https://fonts.google.com/specimen/Ubuntu)**,  **[Roboto](https://fonts.google.com/specimen/Roboto)**

---

## Autor

<a href="https://www.linkedin.com/in/nilton-neto-9b5a9919a/">
 <img style="border-radius: 50%;" src="https://avatars0.githubusercontent.com/u/37527572?s=400&u=ef265fadb58693d772314220518345254fcfc824&v=4" width="100px;" alt=""/>
 <br />
 <sub><b>Nilton Ferreira</b></sub></a> <a href="https://www.linkedin.com/in/nilton-neto-9b5a9919a/" title="linkedin"></a>
 <br />

[![Linkedin Badge](https://img.shields.io/badge/-Nilton-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://https://www.linkedin.com/in/nilton-neto-9b5a9919a/)](https://www.linkedin.com/in/nilton-neto-9b5a9919a/)
[![Gmail Badge](https://img.shields.io/badge/-Niltond83@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:Niltond83@gmail.com)](mailto:Niltond83@gmail.com)

---

## 📝 Licença

Este projeto esta sobe a licença [MIT](./LICENSE).

Feito com ❤️ por Nilton Ferreira Diniz Neto. [Entre em contato!](https://www.linkedin.com/in/nilton-neto-9b5a9919a/)
