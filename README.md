# 📸 Instalike – Back-end
 
Back-end do **Instalike**, um projeto de estudo de uma aplicação no estilo rede social de fotos. Este repositório contém a **base do servidor** em **Node.js + Express**, pronta para ser evoluída com novas rotas e integrações.
 
> 🚧 **Status:** projeto em fase inicial. Por enquanto, o servidor expõe apenas uma rota de boas-vindas (`/api`).
 
---
 
## ✨ O que existe hoje
 
- Servidor HTTP com **Express**, executando na porta **3000**.
- Rota `GET /api` que retorna a mensagem `Boas vindas à imersão!` com status `200`.
- Projeto configurado como **ES Modules** (`"type": "module"`), usando `import`/`export`.
## 🧰 Tecnologias
 
| Tecnologia | Uso |
|---|---|
| [Node.js](https://nodejs.org/) (>= 14) | Ambiente de execução |
| [Express](https://expressjs.com/) 4.21 | Framework web para a API |
 
## 📁 Estrutura do projeto
 
```
Instalike-back/
├── server.js          # Servidor Express e rotas
├── package.json       # Dependências e metadados
├── package-lock.json
└── .gitignore         # Ignora node_modules e chave-api.txt
```
 
## ✅ Pré-requisitos
 
- [Node.js](https://nodejs.org/) 14 ou superior (recomendado usar uma versão LTS)
- npm (instalado junto com o Node.js)
## 🚀 Como executar
 
```bash
# 1. Clone o repositório
git clone https://github.com/<seu-usuario>/Instalike-back.git
cd Instalike-back
 
# 2. Instale as dependências
npm install
 
# 3. Inicie o servidor
node server.js
```
 
Você deverá ver no terminal:
 
```
Server is running on port 3000
```
 
Teste a rota no navegador ou via terminal:
 
```bash
curl http://localhost:3000/api
# Boas vindas à imersão!
```
 
> 💡 Os scripts `dev` e `test` do `package.json` ainda estão vazios. Se quiser, configure `"dev": "node --watch server.js"` (Node 18.11 ou superior) para reiniciar o servidor automaticamente a cada alteração.
 
## 📡 Endpoints
 
| Método | Rota | Descrição | Resposta |
|---|---|---|---|
| `GET` | `/api` | Mensagem de boas-vindas | `200 OK` – `Boas vindas à imersão!` |
 
## 🔐 Segurança
 
O `.gitignore` já ignora o arquivo `chave-api.txt`. Se for usar chaves de API ou outros segredos, mantenha-os fora do repositório (nesse arquivo ou em variáveis de ambiente) e **nunca faça commit de credenciais**.
 
## 📄 Licença
 
O `package.json` indica a licença **AGPL-3.0**. Confirme essa escolha e, se desejar, adicione o arquivo `LICENSE` ao repositório.
 
---
 
Feito com 💙 durante os estudos de **Node.js e Express**.
 
