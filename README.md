# Sistema de Ordens de Serviço de Manutenção

Este projeto é um sistema para gerenciamento de ordens de serviço de manutenção, permitindo o cadastro de usuários, técnicos, clientes e ordens de serviço, além de autenticação e autorização.

---

## Funcionalidades

### Autenticação e Autorização
- Login, logout e geração de tokens JWT.
- Middleware para autenticação e autorização de usuários com base em papéis (cliente, técnico, etc.).

### Gerenciamento de Usuários
- Cadastro de usuários com criptografia de senha.

### Gerenciamento de Clientes
- Cadastro de clientes.
- Visualização do perfil do cliente.

### Gerenciamento de Técnicos
- Cadastro de técnicos.
- Visualização do perfil do técnico.

### Gerenciamento de Ordens de Serviço
- Criação, edição, listagem, exclusão e atribuição de técnicos às ordens de serviço.
- Atualização do status das ordens de serviço.

---

## Estrutura do Projeto

> Em construção. Será adicionada conforme o projeto evoluir.

---

## Configuração

### 1. Clone o repositório
```bash
git clone <URL_DO_REPOSITORIO>
cd 2024.10.115-UC8-ordens-servico-manutencao
```

### 2. Instale as dependências
```bash
npm install
```

### 3. Configure o arquivo `.env`
Copie o arquivo `.env.example` para `.env` e preencha as variáveis de ambiente com os valores apropriados:
```env
DB_DATABASE=seu_banco_de_dados
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
DB_HOST=localhost
DB_PORT=5432
PORT=3000
SECRET_KEY=sua_chave_secreta_super_segura
JWT_REFRESH_SECRET=sua_chave_secreta_super_segura
TEMPO_ACESS_TOKEN=2m
TEMPO_REFRESH_TOKEN=1d
```

### 4. Inicie o servidor
```bash
npm start
```

### 5. Acesse o servidor
O servidor estará disponível em:  
`http://localhost:<PORT>`

---

## Rotas

### Autenticação
- **POST** `/auth/login`: Login de usuários.
- **POST** `/auth/refresh-token`: Geração de novo token de acesso.
- **POST** `/auth/logout`: Logout de usuários.

### Usuários
- **POST** `/usuarios/`: Cadastro de usuários.
- **GET** `/usuarios/me`: Visualização do perfil do usuario (autenticado).

### Clientes
- **POST** `/clientes/`: Cadastro de clientes.

### Técnicos
- **POST** `/tecnicos/`: Cadastro de técnicos.

### Ordens de Serviço
- **POST** `/ordens-servico/`: Criação de ordens de serviço.
- **PUT** `/ordens-servico/:id`: Edição de ordens de serviço.
- **GET** `/ordens-servico/`: Listagem de todas as ordens de serviço.
- **GET** `/ordens-servico/:id`: Visualização de uma ordem de serviço por ID.
- **DELETE** `/ordens-servico/:id`: Exclusão de ordens de serviço.
- **PUT** `/ordens-servico/:id/status`: Atualização do status de uma ordem de serviço.
- **PUT** `/ordens-servico/:id/atribuir`: Atribuição de técnico a uma ordem de serviço.

---

## Tecnologias Utilizadas
- **Node.js**: Ambiente de execução.
- **Express**: Framework para criação de APIs.
- **Sequelize**: ORM para interação com o banco de dados PostgreSQL.
- **JWT**: Autenticação baseada em tokens.
- **Bcrypt**: Criptografia de senhas.
- **PostgreSQL**: Banco de dados relacional.

---

## Licença

Este projeto está licenciado sob a licença MIT. Consulte o arquivo [LICENSE](./LICENSE) para mais detalhes.
