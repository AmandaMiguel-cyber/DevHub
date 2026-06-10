# MÓDULO 11: PROJETO FINAL - HISTÓRIAS DE USUÁRIO

## 📌 PROJETO ESCOLHIDO: DevHub - Plataforma de Portfólios para Desenvolvedores

Uma plataforma onde desenvolvedores podem criar e compartilhar seus portfólios, com projetos, skills e contatos.

**Público-alvo:** Desenvolvedores iniciantes a intermediários
**Tecnologias:** React, TypeScript, React Router, Context API, Styled Components, localStorage

---

# 📅 PLANEJAMENTO - Histórias de Usuário Epics

## EPIC 1: Sistema de Autenticação e Perfil do Usuário

### US-1.1: Usuário cria conta
**Como** desenvolvedor
**Eu quero** criar uma conta na plataforma
**Para que** eu possa guardar meu portfólio e compartilhá-lo com outros

**Critérios de Aceitação:**
- [ ] Página de registro com campos: nome completo, email, senha, confirmação de senha
- [ ] Validação de email (deve conter @)
- [ ] Senha com mínimo 8 caracteres
- [ ] Campos obrigatórios mostram erro se vazios
- [ ] Ao registrar com sucesso, redireciona para página de login
- [ ] Se email já existe, mostra erro "Email já cadastrado"
- [ ] Dados salvos em localStorage com estrutura:
```json
{
  "users": [
    {
      "id": 1,
      "name": "João Silva",
      "email": "joao@example.com",
      "password": "hasheada",
      "createdAt": "2025-05-26"
    }
  ]
}
```

**Tarefas Técnicas:**
- Criar página `pages/Register.tsx`
- Componente formulário com validação
- Serviço `services/authService.ts`
- Context para gerenciar auth
- Armazenar dados em localStorage

**Exemplo de Dados:**
```
Nome: João Silva
Email: joao@example.com
Senha: SecurePass123
```

**Estimativa:** 🟡 Médio (2-3 horas)

---

### US-1.2: Usuário faz login
**Como** desenvolvedor registrado
**Eu quero** fazer login com meu email e senha
**Para que** eu possa acessar meu portfólio

**Critérios de Aceitação:**
- [ ] Página de login com campos: email e senha
- [ ] Validação de email e senha obrigatórios
- [ ] Se credenciais estiverem incorretas, mostra "Email ou senha incorretos"
- [ ] Ao fazer login, salva token em localStorage com expiração de 24h
- [ ] Redireciona para dashboard após login bem-sucedido
- [ ] Usuário logado vê seu nome no header
- [ ] Botão "Sair" faz logout e limpa localStorage
- [ ] Se tentar acessar rota protegida sem autenticação, redireciona para login

**Tarefas Técnicas:**
- Criar página `pages/Login.tsx`
- PrivateRoute para proteger rotas
- Atualizar Context de auth com token
- Header com nome do usuário logado
- Função logout

**Estrutura do Token:**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIs...",
  "userId": 1,
  "email": "joao@example.com",
  "expiresAt": "2025-05-27T10:30:00Z"
}
```

**Estimativa:** 🟡 Médio (2-3 horas)

---

### US-1.3: Usuário edita seu perfil
**Como** desenvolvedor
**Eu quero** editar minhas informações de perfil
**Para que** meu portfólio tenha informações atualizadas

**Critérios de Aceitação:**
- [ ] Página de edição de perfil com campos editáveis:
  - Nome completo
  - Bio/Descrição (até 500 caracteres)
  - Título profissional (Dev Full Stack, Frontend, etc)
  - Foto de perfil (URL)
  - Link do GitHub
  - Link do LinkedIn
  - Email (somente leitura)
- [ ] Botão "Salvar" persiste mudanças em localStorage
- [ ] Botão "Cancelar" volta sem salvar
- [ ] Mensagem de sucesso "Perfil atualizado com sucesso"
- [ ] Validação: foto deve ser URL válida
- [ ] Validação: GitHub e LinkedIn devem ser URLs completas (começar com http)

**Tarefas Técnicas:**
- Criar página `pages/EditProfile.tsx`
- Componente de formulário com validação
- Função para atualizar dados no localStorage
- Exibir foto de perfil se URL válida

**Estrutura de Dados do Perfil:**
```json
{
  "id": 1,
  "name": "João Silva",
  "email": "joao@example.com",
  "bio": "Desenvolvedor Full Stack apaixonado por React",
  "title": "Full Stack Developer",
  "photo": "https://example.com/photo.jpg",
  "github": "https://github.com/joaosilva",
  "linkedin": "https://linkedin.com/in/joaosilva",
  "createdAt": "2025-05-26"
}
```

**Estimativa:** 🟡 Médio (2-3 horas)

---

## EPIC 2: Gerenciamento de Projetos do Portfólio

### US-2.1: Usuário cria um novo projeto
**Como** desenvolvedor
**Eu quero** adicionar um projeto ao meu portfólio
**Para que** eu possa mostrar meu trabalho e experiência

**Critérios de Aceitação:**
- [ ] Página com formulário para criar projeto com campos:
  - Título do projeto (obrigatório, máx 100 caracteres)
  - Descrição (obrigatório, máx 500 caracteres)
  - Tecnologias usadas (tags: React, TypeScript, etc)
  - URL do GitHub (opcional, deve ser URL válida)
  - URL do projeto live (opcional, deve ser URL válida)
  - Imagem/print do projeto (URL, obrigatório)
  - Data de conclusão (opcional)
  - Status (Em Progresso, Concluído, Planejado)
- [ ] Ao salvar, projeto aparece na lista do portfólio
- [ ] Ordem por data (mais recentes primeiro)
- [ ] Cada projeto tem ID único (timestamp ou UUID)
- [ ] Mensagem de sucesso "Projeto adicionado"

**Tarefas Técnicas:**
- Criar página `pages/Projects.tsx`
- Componente `ProjectForm.tsx`
- Serviço `services/projectService.ts`
- Adicionar projeto ao Context
- Armazenar em localStorage

**Estrutura de Dados:**
```json
{
  "id": "proj-1-1716729600000",
  "userId": 1,
  "title": "Task Manager App",
  "description": "Aplicativo de gerenciamento de tarefas com React e localStorage",
  "technologies": ["React", "TypeScript", "Styled Components"],
  "githubUrl": "https://github.com/joaosilva/task-manager",
  "liveUrl": "https://task-manager-demo.vercel.app",
  "imageUrl": "https://example.com/project.png",
  "completedDate": "2025-05-20",
  "status": "Concluído",
  "createdAt": "2025-05-20"
}
```

**Exemplo Visual:**
```
[Formulário em cards/sections]
Título: Task Manager App
Descrição: Aplicativo de...
Tecnologias: [React] [TypeScript] [Styled Components]
GitHub: https://github.com/...
Live Demo: https://task-manager...
Imagem: [Preview]
Status: [Concluído]
[Botão Salvar] [Botão Cancelar]
```

**Estimativa:** 🟡 Médio (2-3 horas)

---

### US-2.2: Usuário visualiza seus projetos
**Como** desenvolvedor
**Eu quero** ver todos os meus projetos em uma lista
**Para que** eu possa gerenciá-los e compartilhá-los

**Critérios de Aceitação:**
- [ ] Dashboard mostra lista de projetos do usuário logado
- [ ] Cada projeto exibe:
  - Imagem em destaque (thumbnail)
  - Título
  - Descrição (primeiras 150 caracteres com "...")
  - Tecnologias (tags coloridas)
  - Status (badge com cor diferente)
  - Data de conclusão
  - Botão "Editar"
  - Botão "Deletar"
  - Botão "Visualizar" (vai para página pública do projeto)
- [ ] Se não há projetos, mostra mensagem "Você não tem projetos ainda. Crie seu primeiro!"
- [ ] Layout em grid (3 colunas no desktop, 1 coluna no mobile)
- [ ] Ordenação por data de criação (mais recentes primeiro)

**Tarefas Técnicas:**
- Criar componente `ProjectCard.tsx`
- Criar página `pages/Dashboard.tsx`
- Filtrar apenas projetos do usuário logado
- Usar grid CSS ou Styled Components
- Implementar responsividade

**Layout Esperado:**
```
┌─────────────────────────────────────────────────┐
│ Dashboard - Meus Projetos                       │
├──────────────┬──────────────┬──────────────────┤
│ Projeto 1    │ Projeto 2    │ Projeto 3        │
│ [Imagem]     │ [Imagem]     │ [Imagem]         │
│ Título       │ Título       │ Título           │
│ Descrição... │ Descrição... │ Descrição...     │
│ [Tags]       │ [Tags]       │ [Tags]           │
│ [Botões]     │ [Botões]     │ [Botões]         │
└──────────────┴──────────────┴──────────────────┘
```

**Estimativa:** 🟢 Pequeno (1-2 horas)

---

### US-2.3: Usuário edita um projeto
**Como** desenvolvedor
**Eu quero** editar as informações de um projeto existente
**Para que** eu possa manter meu portfólio atualizado

**Critérios de Aceitação:**
- [ ] Ao clicar em "Editar", abre formulário com dados do projeto preenchidos
- [ ] Todos os campos podem ser editados
- [ ] Botão "Salvar" atualiza o projeto em localStorage
- [ ] Botão "Cancelar" volta para dashboard sem salvar
- [ ] Validações iguais ao formulário de criar projeto
- [ ] Mensagem de sucesso "Projeto atualizado com sucesso"
- [ ] Projeto atualizado aparece na lista com mudanças

**Tarefas Técnicas:**
- Reutilizar componente `ProjectForm.tsx`
- Usar parâmetro `:projectId` na rota
- Carregar dados do projeto específico
- Diferenciar entre criar e editar

**Rota:**
```
/projects/:projectId/edit
```

**Estimativa:** 🟢 Pequeno (1-2 horas)

---

### US-2.4: Usuário deleta um projeto
**Como** desenvolvedor
**Eu quero** deletar um projeto do meu portfólio
**Para que** eu possa remover projetos desatualizado ou cancelados

**Critérios de Aceitação:**
- [ ] Botão "Deletar" em cada projeto
- [ ] Modal de confirmação: "Tem certeza que deseja deletar 'Nome do Projeto'?"
- [ ] Opções: "Cancelar" e "Deletar Permanentemente"
- [ ] Se confirmar, projeto é removido do localStorage
- [ ] Projeto é removido da lista imediatamente
- [ ] Mensagem de sucesso "Projeto deletado"

**Tarefas Técnicas:**
- Criar modal de confirmação
- Função para deletar projeto by ID
- Atualizar Context após deletar

**Estimativa:** 🟢 Pequeno (1 hora)

---

## EPIC 3: Portfólio Público

### US-3.1: Usuário visualiza seu portfólio público
**Como** desenvolvedor
**Eu quero** acessar meu portfólio público
**Para que** eu possa compartilhar com outras pessoas

**Critérios de Aceitação:**
- [ ] URL pública: `/portfolio/:userId`
- [ ] Página mostra:
  - Foto de perfil
  - Nome completo
  - Título profissional
  - Bio/Descrição
  - Links GitHub e LinkedIn (botões com ícones)
  - Todos os projetos (grid de cards)
  - Contato (email ou formulário)
- [ ] Aparência profissional, diferente do dashboard
- [ ] Projetos mostram imagem, título, descrição, tecnologias
- [ ] Botões para acessar GitHub e Live Demo dos projetos
- [ ] Não precisa estar autenticado para ver
- [ ] URL é compartilhável

**Tarefas Técnicas:**
- Criar página `pages/PublicPortfolio.tsx`
- Buscar usuário por ID
- Exibir apenas projetos concluídos ou em progresso
- Design limpo e profissional
- Sem botões de editar/deletar

**Layout Esperado:**
```
┌──────────────────────────────────────┐
│        DevHub - Portfólio Público    │
├──────────────────────────────────────┤
│  [Foto]  João Silva                  │
│          Full Stack Developer        │
│          Desenvolvedor apaixonado... │
│  [GitHub] [LinkedIn]                 │
├──────────────────────────────────────┤
│  MEUS PROJETOS                       │
│  ┌────┐  ┌────┐  ┌────┐             │
│  │Proj│  │Proj│  │Proj│             │
│  └────┘  └────┘  └────┘             │
└──────────────────────────────────────┘
```

**Estimativa:** 🟡 Médio (2-3 horas)

---

### US-3.2: Usuário busca portfólios de outros desenvolvedores
**Como** visitante
**Eu quero** buscar e descobrir portfólios de outros desenvolvedores
**Para que** eu possa encontrar talentos ou inspiração

**Critérios de Aceitação:**
- [ ] Página de descoberta com busca
- [ ] Buscar por: nome de desenvolvedor, tecnologia, título
- [ ] Resultados mostram cards com:
  - Foto
  - Nome
  - Título profissional
  - Tecnologias
  - Botão "Ver Portfólio"
- [ ] Filtros por tecnologia (React, TypeScript, etc)
- [ ] Paginação (10 resultados por página)
- [ ] Caso não haja resultados, mostrar "Nenhum portfólio encontrado"

**Tarefas Técnicas:**
- Criar página `pages/Discover.tsx`
- Função de busca/filtro em localStorage
- Componente de resultado da busca
- Paginação

**Exemplo de Busca:**
```
Buscar por: "React"
Resultados:
- João Silva (Full Stack, React, TypeScript)
- Maria Santos (Frontend, React, Vue)
```

**Estimativa:** 🟡 Médio (2-3 horas)

---

## EPIC 4: Funcionalidades Sociais

### US-4.1: Usuário marca projetos como favoritos
**Como** visitante
**Eu quero** favoritatar projetos que gosto
**Para que** eu possa salvar para ver depois

**Critérios de Aceitação:**
- [ ] Ícone de coração em cada projeto (vazio ou cheio)
- [ ] Ao clicar, project é adicionado aos favoritos
- [ ] Favoritos são salvos em localStorage
- [ ] Página de favoritos mostra projetos salvos
- [ ] Número de favoritos é exibido em cada projeto
- [ ] Se não autenticado, mostra mensagem "Faça login para favoritar"

**Tarefas Técnicas:**
- Adicionar favorites ao Context
- Página `pages/Favorites.tsx`
- Ícone em ProjectCard

**Estimativa:** 🟢 Pequeno (1-2 horas)

---

### US-4.2: Usuário deixa comentário em um projeto
**Como** visitante
**Eu quero** deixar um comentário em um projeto
**Para que** eu possa dar feedback ao desenvolvedor

**Critérios de Aceitação:**
- [ ] Seção de comentários na página do projeto
- [ ] Campo para escrever comentário (máx 300 caracteres)
- [ ] Botão "Enviar"
- [ ] Comentários mostram:
  - Nome de quem comentou (ou "Anônimo")
  - Data
  - Texto do comentário
  - Botão "Deletar" (apenas para autor)
- [ ] Comentários ordenados por mais recentes
- [ ] Se não há comentários, mostra "Sem comentários ainda"
- [ ] Comentários são salvos em localStorage

**Tarefas Técnicas:**
- Criar componente `CommentsSection.tsx`
- Estrutura de dados para comentários
- Função para adicionar/deletar comentário

**Estrutura de Dados:**
```json
{
  "id": "comment-1",
  "projectId": "proj-1",
  "author": "Maria Santos",
  "text": "Adorei seu projeto! Muito criativo.",
  "createdAt": "2025-05-26T10:30:00Z"
}
```

**Estimativa:** 🟡 Médio (2-3 horas)

---

## Dados do Planejamento - Aula 47

**Resumo de User Stories:**
- Total: 9 user stories
- Épics: 4
- Pequenas (🟢): 4 - ~5-8 horas
- Médias (🟡): 5 - ~10-15 horas
- **Total estimado: 15-23 horas (dividir em 4 aulas de 4-6 horas cada)**

**Wireframe básico:**
```
HOME
└── Login / Register
    └── Dashboard (Autenticado)
        ├── Editar Perfil
        ├── Meus Projetos
        │   ├── Criar Projeto
        │   ├── Editar Projeto
        │   └── Deletar Projeto
        └── Meus Favoritos

PÚBLICO
├── Discover (Buscar Portfólios)
└── Portfolio/:userId
    └── Comentários
```

**Tecnologias:**
- React 18
- TypeScript
- React Router v6
- Context API (Auth, Projects, Favorites)
- Styled Components
- localStorage

---

# 📅 DESENVOLVIMENTO - PARTE 2 (Setup e Estrutura)

## US-SETUP-1: Configurar projeto Vite + React + TypeScript

**Como** desenvolvedor
**Eu quero** ter um projeto React configurado e pronto
**Para que** eu possa começar a desenvolver as features

**Critérios de Aceitação:**
- [ ] Projeto criado com Vite: `npm create vite@latest devhub -- --template react-ts`
- [ ] Dependências instaladas: `npm install`
- [ ] Estrutura de pasta criada corretamente
- [ ] Servidor roda sem erros: `npm run dev`
- [ ] TypeScript está configurado
- [ ] .gitignore pronto
- [ ] package.json com scripts: dev, build, preview

**Estrutura de Pastas Esperada:**
```
devhub/
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── Modal.tsx
│   │   └── ProtectedRoute.tsx
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── Register.tsx
│   │   ├── Login.tsx
│   │   ├── Dashboard.tsx
│   │   ├── EditProfile.tsx
│   │   ├── Projects.tsx
│   │   ├── PublicPortfolio.tsx
│   │   ├── Discover.tsx
│   │   └── Favorites.tsx
│   ├── contexts/
│   │   ├── AuthContext.tsx
│   │   └── ProjectContext.tsx
│   ├── services/
│   │   ├── authService.ts
│   │   ├── projectService.ts
│   │   └── storageService.ts
│   ├── styles/
│   │   ├── GlobalStyle.tsx
│   │   └── theme.ts
│   ├── types/
│   │   ├── User.ts
│   │   └── Project.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── App.css
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── .gitignore
```

**Tarefas Técnicas:**
- [ ] Criar projeto com Vite
- [ ] Instalar react-router-dom: `npm install react-router-dom`
- [ ] Instalar styled-components: `npm install styled-components @types/styled-components`
- [ ] Criar todas as pastas acima
- [ ] Criar arquivo types para User e Project
- [ ] Fazer commit inicial no GitHub

**Estimativa:** 🟢 Pequeno (30min)

---

## US-SETUP-2: Configurar Rotas e Layout Base

**Como** desenvolvedor
**Eu quero** ter as rotas principais configuradas
**Para que** eu possa navegar entre páginas

**Critérios de Aceitação:**
- [ ] Componente `Header.tsx` com navegação
- [ ] Componente `Footer.tsx`
- [ ] Componente `ProtectedRoute.tsx` para rotas autenticadas
- [ ] App.tsx com todas as rotas:
  - `/` - Home (pública)
  - `/register` - Registro (pública)
  - `/login` - Login (pública)
  - `/dashboard` - Dashboard (protegida)
  - `/profile/edit` - Editar Perfil (protegida)
  - `/projects` - Gerenciar Projetos (protegida)
  - `/projects/:id/edit` - Editar Projeto (protegida)
  - `/discover` - Descobrir Portfólios (pública)
  - `/portfolio/:userId` - Portfólio Público (pública)
  - `/favorites` - Favoritos (protegida)
- [ ] Header exibe "Login | Registro" se não autenticado
- [ ] Header exibe "Nome do Usuário | Sair" se autenticado
- [ ] Layout consiste em Header + Conteúdo + Footer

**Rotas Esperadas:**
```tsx
<BrowserRouter>
  <Header />
  <main>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile/edit" element={<EditProfile />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id/edit" element={<EditProject />} />
        <Route path="/favorites" element={<Favorites />} />
      </Route>
      <Route path="/discover" element={<Discover />} />
      <Route path="/portfolio/:userId" element={<PublicPortfolio />} />
    </Routes>
  </main>
  <Footer />
</BrowserRouter>
```

**Header Esperado:**
```
┌────────────────────────────────────────┐
│ DevHub  [Home] [Discover]   [Login]    │
└────────────────────────────────────────┘

ou (autenticado):

┌────────────────────────────────────────┐
│ DevHub  [Home] [Dashboard] [Discover]  │
│                          João | Sair   │
└────────────────────────────────────────┘
```

**Tarefas Técnicas:**
- [ ] Criar componente Header com navegação condicional
- [ ] Criar componente Footer
- [ ] Criar ProtectedRoute que verifica autenticação
- [ ] Configurar BrowserRouter em App.tsx
- [ ] Adicionar Links para navegação
- [ ] Estilizar Header e Footer básico

**Estimativa:** 🟡 Médio (2-3 horas)

---

## US-SETUP-3: Criar Contexts de Auth e Projects

**Como** desenvolvedor
**Eu quero** ter contextos globais para autenticação e projetos
**Para que** eu possa compartilhar estado entre componentes

**Critérios de Aceitação:**
- [ ] `AuthContext.tsx` com:
  - user (User | null)
  - isAuthenticated (boolean)
  - login(email, password) - Promise<void>
  - register(name, email, password) - Promise<void>
  - logout() - void
  - updateProfile(updates) - Promise<void>
- [ ] `ProjectContext.tsx` com:
  - projects (Project[])
  - addProject(project) - void
  - updateProject(id, updates) - void
  - deleteProject(id) - void
  - getProjectsByUser(userId) - Project[]
- [ ] Ambos salvam estado em localStorage
- [ ] AuthContext valida tokens ao inicializar
- [ ] Contextos são consumidos via hooks (useAuth, useProjects)

**Tipos TypeScript Esperados:**
```typescript
// types/User.ts
export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  bio?: string;
  title?: string;
  photo?: string;
  github?: string;
  linkedin?: string;
  createdAt: string;
}

// types/Project.ts
export interface Project {
  id: string;
  userId: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl: string;
  completedDate?: string;
  status: 'Em Progresso' | 'Concluído' | 'Planejado';
  createdAt: string;
}

// types/Comment.ts
export interface Comment {
  id: string;
  projectId: string;
  author: string;
  text: string;
  createdAt: string;
}
```

**Estrutura localStorage Esperada:**
```json
{
  "users": [...],
  "projects": [...],
  "comments": [...],
  "favorites": [...],
  "currentUser": null ou { id, token, expiresAt }
}
```

**Tarefas Técnicas:**
- [ ] Criar type User.ts e Project.ts
- [ ] Criar AuthContext com todas funções
- [ ] Criar ProjectContext com todas funções
- [ ] Criar hooks useAuth() e useProjects()
- [ ] Implementar localStorage em cada contexto
- [ ] Validar autenticação ao carregar app

**Estimativa:** 🟡 Médio (2-3 horas)

---

## US-SETUP-4: Implementar Autenticação (Login e Registro)

**Como** desenvolvedor
**Eu quero** que usuários possam se registrar e fazer login
**Para que** eles acessem funcionalidades protegidas

**Critérios de Aceitação:**
- [ ] Página Register com:
  - Campo Nome (obrigatório)
  - Campo Email (obrigatório, validação)
  - Campo Senha (obrigatório, min 8 caracteres)
  - Campo Confirmar Senha (deve ser igual a Senha)
  - Validação em tempo real
  - Botão "Criar Conta"
  - Link "Já tem conta? Faça login"
  - Erro se email já existe
  - Sucesso redireciona para Login
- [ ] Página Login com:
  - Campo Email (obrigatório)
  - Campo Senha (obrigatório)
  - Checkbox "Lembrar-me"
  - Botão "Entrar"
  - Link "Não tem conta? Registre-se"
  - Erro se credenciais inválidas
  - Sucesso redireciona para Dashboard
- [ ] Token salvo em localStorage com expiração
- [ ] Usuário logado vê seu nome no Header

**Validações Esperadas:**
```
Email: deve conter @ e ter domínio válido
Senha: mínimo 8 caracteres
Confirmar Senha: deve ser igual a Senha
Nome: não pode ficar vazio
```

**Exemplo de Fluxo:**
```
1. Usuário acessa /register
2. Preenche: João Silva | joao@example.com | SecurePass123 | SecurePass123
3. Clica "Criar Conta"
4. Validação passa, usuário criado em localStorage
5. Redireciona para /login
6. Preenche: joao@example.com | SecurePass123
7. Token gerado e salvo
8. Redireciona para /dashboard
9. Dashboard exibe "Bem-vindo, João"
```

**Tarefas Técnicas:**
- [ ] Criar página Register.tsx com formulário
- [ ] Criar página Login.tsx com formulário
- [ ] Funções de validação (email, senha, etc)
- [ ] Integrar com AuthContext
- [ ] Teste: registrar e fazer login
- [ ] Teste: senha muito curta deve mostrar erro
- [ ] Teste: email já existe deve mostrar erro

**Estimativa:** 🟡 Médio (2-3 horas)

---

## Checklist Aula 48

- [ ] Projeto Vite criado e rodando
- [ ] Estrutura de pastas completa
- [ ] Rotas configuradas
- [ ] Header e Footer básicos
- [ ] AuthContext implementado
- [ ] ProjectContext implementado
- [ ] Página Register funcional
- [ ] Página Login funcional
- [ ] ProtectedRoute funcionando
- [ ] localStorage salvando dados corretamente
- [ ] Código commitado no GitHub

**Tempo Total Aula 48:** ~8-10 horas (dividir em aula de ~3 horas)

---

# 📅 DESENVOLVIMENTO - PARTE 3 (Features Principais)

## US-9: Implementar Edição de Perfil

**Como** desenvolvedor logado
**Eu quero** editar meu perfil
**Para que** meu portfólio tenha informações atualizadas

**Critérios de Aceitação:**
- [ ] Página EditProfile em `/profile/edit`
- [ ] Formulário com campos:
  - Nome (obrigatório)
  - Bio/Descrição (máx 500 caracteres, com contador)
  - Título Profissional (ex: Full Stack Developer)
  - URL Foto de Perfil (validar URL)
  - URL GitHub (validar URL, começar com https://)
  - URL LinkedIn (validar URL, começar com https://)
- [ ] Campos preenchidos com dados atuais
- [ ] Botão "Salvar Alterações" atualiza localStorage
- [ ] Botão "Cancelar" volta para dashboard
- [ ] Mensagem "Perfil atualizado com sucesso"
- [ ] Foto de perfil atualiza no Header
- [ ] Validação em tempo real de URLs

**Validações:**
```
Bio: máximo 500 caracteres, mostra contador (atual/máximo)
GitHub: deve começar com "https://"
LinkedIn: deve começar com "https://"
Título: não pode ficar vazio
```

**Layout Esperado:**
```
┌──────────────────────────────────┐
│ Editar Perfil                    │
├──────────────────────────────────┤
│ Nome: [João Silva             ]  │
│ Título: [Full Stack Developer ]  │
│ Bio: [Desenvolvedor apaixon...] │
│       [250/500]                  │
│ Foto: [https://example.com/   ] │
│ GitHub: [https://github.com/  ] │
│ LinkedIn: [https://linkedin.. ] │
│ [Salvar Alterações] [Cancelar]   │
└──────────────────────────────────┘
```

**Tarefas Técnicas:**
- [ ] Criar página EditProfile.tsx
- [ ] Criar componente ProfileForm
- [ ] Integrar com AuthContext para atualizar usuário
- [ ] Validar URLs
- [ ] Contador de caracteres para bio
- [ ] Verificar foto ao digitar URL
- [ ] Foto do perfil atualiza em tempo real no formulário

**Estimativa:** 🟡 Médio (2-3 horas)

---

## US-10: Implementar Gerenciamento de Projetos

**Como** desenvolvedor logado
**Eu quero** criar, editar e deletar meus projetos
**Para que** eu possa gerenciar meu portfólio

**Critérios de Aceitação:**
- [ ] Página `/projects` mostra lista de projetos do usuário
- [ ] Cada projeto exibe:
  - Imagem em destaque (thumbnail 300x200px)
  - Título
  - Descrição (primeiras 150 caracteres com "...")
  - Tags de tecnologias (coloridas)
  - Status (badge Concluído/Em Progresso/Planejado)
  - Data de conclusão
  - 2 Botões: "Editar" e "Deletar"
- [ ] Layout em grid (responsivo: 3 colunas desktop, 2 tablet, 1 mobile)
- [ ] Página `/projects/new` para criar novo projeto
- [ ] Página `/projects/:id/edit` para editar
- [ ] Botão "Novo Projeto" na página Projects
- [ ] Ao deletar, modal de confirmação
- [ ] Projeto excluído desaparece da lista imediatamente

**Formulário de Projeto:**
```
Título: [Task Manager App            ]
Descrição: [Aplicativo para gerenc...] (500 chars)
Tecnologias: [+ React] [+ TypeScript] (adicionar tags)
GitHub: [https://github.com/projeto ]
Live: [https://task-manager.vercel ]
Imagem: [https://imgur.com/img.png ]
Data: [26/05/2025]
Status: [Concluído ▼]
[Salvar] [Cancelar]
```

**Grid Esperado:**
```
┌──────────────────────────────────┐
│ Meus Projetos                    │
│ [+ Novo Projeto]                 │
├──────────┬──────────┬────────────┤
│ Proj 1   │ Proj 2   │ Proj 3     │
│ [Img]    │ [Img]    │ [Img]      │
│ Título   │ Título   │ Título     │
│ Desc..   │ Desc..   │ Desc..     │
│ [Tags]   │ [Tags]   │ [Tags]     │
│ Status   │ Status   │ Status     │
│ [Edit]   │ [Edit]   │ [Edit]     │
│ [Del]    │ [Del]    │ [Del]      │
└──────────┴──────────┴────────────┘
```

**Tarefas Técnicas:**
- [ ] Criar página Projects.tsx
- [ ] Criar componente ProjectForm.tsx
- [ ] Criar componente ProjectCard.tsx
- [ ] Criar página EditProject.tsx
- [ ] Integrar com ProjectContext
- [ ] Modal de confirmação para deletar
- [ ] Validar todas as URLs
- [ ] Upload/preview de imagem (URL)
- [ ] Tags coloridas por tecnologia

**Tags Coloridas Esperadas:**
```
React → #61DAFB (azul)
TypeScript → #3178C6 (azul escuro)
Node.js → #339933 (verde)
Python → #3776AB (azul)
Vue → #4FC08D (verde)
CSS → #1572B6 (azul)
SQL → #336791 (azul)
```

**Estimativa:** 🟡 Médio (3-4 horas)

---

## US-11: Implementar Portfólio Público

**Como** visitante
**Eu quero** acessar o portfólio público de um desenvolvedor
**Para que** eu possa ver seus projetos e contatos

**Critérios de Aceitação:**
- [ ] Rota `/portfolio/:userId` acessível sem autenticação
- [ ] Página exibe:
  - Foto de perfil (grande, circular)
  - Nome do desenvolvedor
  - Título profissional
  - Bio/descrição
  - Botões sociais: GitHub, LinkedIn (com ícones)
  - Todos os projetos do desenvolvedor (apenas Concluído ou Em Progresso)
  - Seção de comentários por projeto
- [ ] Projetos mostram:
  - Imagem em destaque
  - Título
  - Descrição
  - Tecnologias
  - Botões: "Ver no GitHub" e "Demo ao Vivo"
- [ ] Design profissional, limpo
- [ ] Sem botões de editar/deletar
- [ ] Responsivo

**Layout Esperado:**
```
┌─────────────────────────────────────┐
│         DevHub - Portfólio Público  │
├─────────────────────────────────────┤
│           [Foto Circular]           │
│           João Silva                │
│    Full Stack Developer             │
│    Desenvolvedor apaixonado por...  │
│    [GitHub] [LinkedIn]              │
├─────────────────────────────────────┤
│ MEUS PROJETOS                       │
│ ┌────────────┬─────────┬──────────┐ │
│ │ Projeto 1  │ Proj 2  │ Proj 3   │ │
│ │[Img]       │[Img]    │[Img]     │ │
│ │[Git][Demo] │[Git]    │[Demo]    │ │
│ └────────────┴─────────┴──────────┘ │
├─────────────────────────────────────┤
│ COMENTÁRIOS E FEEDBACK              │
└─────────────────────────────────────┘
```

**Tarefas Técnicas:**
- [ ] Criar página PublicPortfolio.tsx
- [ ] Buscar usuário por ID em localStorage
- [ ] Filtrar apenas projetos Concluído/Em Progresso
- [ ] Ícones para GitHub e LinkedIn
- [ ] Estilo premium e profissional
- [ ] Foto circular com fallback
- [ ] Responsividade mobile first

**Estimativa:** 🟡 Médio (2-3 horas)

---

## US-12: Implementar Busca de Portfólios

**Como** visitante
**Eu quero** buscar portfólios de desenvolvedores
**Para que** eu possa encontrar talentos

**Critérios de Aceitação:**
- [ ] Página `/discover` com busca
- [ ] Campo de busca que filtra por:
  - Nome de desenvolvedor
  - Tecnologia
  - Título profissional
- [ ] Resultados em tempo real (ao digitar)
- [ ] Cards com resultado mostrando:
  - Foto
  - Nome
  - Título
  - Tecnologias
  - Botão "Ver Portfólio"
- [ ] Filtros por tecnologia (checkbox)
- [ ] Paginação (12 resultados por página)
- [ ] Se nenhum resultado: "Nenhum portfólio encontrado"
- [ ] Busca case-insensitive

**Layout Esperado:**
```
┌──────────────────────────────────┐
│ Descobrir Desenvolvedores        │
├──────────────────────────────────┤
│ Buscar: [_________________] 🔍   │
│ Filtros: ☐ React ☐ TypeScript   │
│          ☐ Node.js ☐ Python     │
├──────────────────────────────────┤
│ [Dev 1] [Dev 2] [Dev 3]          │
│ [Dev 4] [Dev 5] [Dev 6]          │
│ [Dev 7] [Dev 8] [Dev 9]          │
│ [Dev 10] [Dev 11] [Dev 12]       │
│ [< Anterior] [1 2 3] [Próximo >] │
└──────────────────────────────────┘
```

**Exemplo de Busca:**
```
Input: "React"
Resultados filtrados por tecnologia ou nome contendo "React"
```

**Tarefas Técnicas:**
- [ ] Criar página Discover.tsx
- [ ] Função de busca que varre localStorage
- [ ] Filtros por tecnologia
- [ ] Componente ResultCard
- [ ] Paginação
- [ ] Busca em tempo real com debounce
- [ ] Sem resultados mostra mensagem

**Estimativa:** 🟡 Médio (2-3 horas)

---

## Checklist Aula 49

- [ ] EditProfile page completa e funcional
- [ ] Projects page com create/read/update/delete
- [ ] ProjectForm validando todas as URLs
- [ ] Grid de projetos responsivo
- [ ] Modal de confirmação para deletar
- [ ] PublicPortfolio page profissional
- [ ] Discover page com busca funcional
- [ ] Filtros por tecnologia funcionando
- [ ] Paginação implementada
- [ ] Todas as validações funcionando
- [ ] localStorage salva dados corretamente
- [ ] Código commitado no GitHub

**Tempo Total Aula 49:** ~9-11 horas (dividir em aula de ~3 horas)

---

# 📅 FINALIZAÇÃO - POLISH E DEPLOY

## US-13: Implementar Sistema de Favoritos

**Como** visitante
**Eu quero** favoritar portfólios e projetos
**Para que** eu possa salvar para ver depois

**Critérios de Aceitação:**
- [ ] Ícone de coração em cada projeto (vazio ❤️ ou cheio ❤️)
- [ ] Ícone de coração no portfólio público do desenvolvedor
- [ ] Ao clicar, adiciona aos favoritos (localStorage)
- [ ] Página `/favorites` mostra todos os projetos favoritados
- [ ] Página de favoritos exibe:
  - Grid de projetos favoritados
  - Cada card com "Remover dos Favoritos"
  - Se vazio: "Você não tem favoritos ainda"
- [ ] Número de favoritos exibido (ex: "❤️ 23")
- [ ] Favoritos persistem entre sessões

**Favoritos Storage:**
```json
{
  "favorites": [
    { "projectId": "proj-1", "userId": 1 },
    { "projectId": "proj-2", "userId": 2 }
  ]
}
```

**Tarefas Técnicas:**
- [ ] Context para favoritos
- [ ] Função toggleFavorite
- [ ] Página Favorites.tsx
- [ ] Ícone de coração em ProjectCard
- [ ] Contador de favoritos
- [ ] localStorage salva favoritos

**Estimativa:** 🟢 Pequeno (1-2 horas)

---

## US-14: Implementar Sistema de Comentários

**Como** visitante
**Eu quero** deixar comentários em projetos
**Para que** eu possa dar feedback

**Critérios de Aceitação:**
- [ ] Seção de comentários na página PublicPortfolio
- [ ] Campo para escrever comentário (máx 300 caracteres)
- [ ] Validação: não deixa enviar vazio
- [ ] Comentários mostram:
  - Nome (ou "Anônimo")
  - Data e hora
  - Texto
- [ ] Botão "Deletar" (apenas para autor)
- [ ] Comentários ordenados por mais recentes
- [ ] Se sem comentários: "Sem comentários ainda"
- [ ] Contador de caracteres (atual/máximo)

**Comentário Esperado:**
```
João Silva • 26/05/2025 às 10:30
"Adorei seu projeto! Ficou incrível. Gostaria de saber 
qual foi a dificuldade maior na implementação?"

[Deletar]
```

**Tarefas Técnicas:**
- [ ] Componente CommentsSection.tsx
- [ ] Adicionar comentários ao localStorage
- [ ] Função para deletar comentário (apenas autor)
- [ ] Validação de comentário vazio
- [ ] Contador de caracteres
- [ ] Data/hora formatada

**Estimativa:** 🟢 Pequeno (1-2 horas)

---

## US-15: Responsividade Completa

**Como** usuário mobile
**Eu quero** usar a plataforma em meu celular
**Para que** eu possa acessar de qualquer lugar

**Critérios de Aceitação:**
- [ ] Header responsivo (menu hamburger em mobile)
- [ ] Grid de projetos: 3 colunas (desktop), 2 (tablet), 1 (mobile)
- [ ] Formulários com tamanho de fonte adequado (14px+)
- [ ] Botões com tamanho mínimo de 44x44px
- [ ] Imagens não overflow
- [ ] Footer ajustado em mobile
- [ ] Sem scroll horizontal
- [ ] Espaçamento adequado em mobile

**Breakpoints:**
```css
Mobile: max-width: 480px
Tablet: max-width: 768px
Desktop: min-width: 769px
```

**Testes em Mobile:**
- [ ] iPhone SE (375px)
- [ ] iPhone 12 (390px)
- [ ] Samsung A12 (412px)
- [ ] iPad (768px)

**Tarefas Técnicas:**
- [ ] Media queries em todos os componentes
- [ ] Menu hamburger em Header (mobile)
- [ ] Testar em Chrome DevTools
- [ ] Testar em dispositivos reais se possível

**Estimativa:** 🟡 Médio (2-3 horas)

---

## US-16: Melhorias de UX e Polish

**Como** usuário
**Eu quero** que a plataforma seja agradável de usar
**Para que** eu tenha uma experiência profissional

**Critérios de Aceitação:**
- [ ] Loading skeletons ao carregar dados
- [ ] Mensagens de sucesso/erro com toast
- [ ] Transições suaves entre páginas
- [ ] Hover effects em botões e links
- [ ] Cursor pointer em elementos clicáveis
- [ ] Confirmação ao sair de página com dados não salvos
- [ ] Favicon customizado
- [ ] Título da página atualizado (document.title)
- [ ] Meta descriptions
- [ ] Scroll smooth habilitado

**Componentes Esperados:**
```
Toast (notificação):
┌──────────────────────────────────┐
│ ✓ Perfil atualizado com sucesso!  │
└──────────────────────────────────┘

Modal de Confirmação:
┌──────────────────────────────────┐
│ Tem certeza?                     │
│ Esta ação não pode ser desfeita  │
│ [Cancelar] [Deletar]             │
└──────────────────────────────────┘

Loading Skeleton:
┌──────────────┐
│ ░░░░░░░░░░░░ │  (cinza animado)
│ ░░░░░░░░░░░░ │
│ ░░░░░░░░░░░░ │
└──────────────┘
```

**Tarefas Técnicas:**
- [ ] Criar componente Toast.tsx
- [ ] Criar componente Modal.tsx
- [ ] Criar componentes de Loading Skeleton
- [ ] Adicionar transições CSS
- [ ] Hover effects
- [ ] Confetti/animação ao deletar
- [ ] Favicon em public/
- [ ] Atualizar document.title em cada página

**Estimativa:** 🟡 Médio (2-3 horas)

---

## US-17: Otimizar e fazer Build

**Como** desenvolvedor
**Eu quero** otimizar a aplicação para produção
**Para que** ela carregue rápido

**Critérios de Aceitação:**
- [ ] Remover console.logs
- [ ] Code splitting por rota
- [ ] Lazy loading de componentes
- [ ] Compressão de imagens
- [ ] Build sem warnings
- [ ] Bundle size < 500KB
- [ ] npm run build executa sem erros
- [ ] npm run preview funciona
- [ ] Performance Lighthouse > 80

**Checklist de Otimização:**
- [ ] Remover console.log de produção
- [ ] Lazy load com React.lazy()
- [ ] Suspense fallback
- [ ] Imagens otimizadas (usar placeholder)
- [ ] CSS crítico inline
- [ ] Remover bibliotecas não usadas
- [ ] Tree-shaking ativado
- [ ] Minificação ativada

**Tarefas Técnicas:**
- [ ] npm run build
- [ ] Verificar dist/ size
- [ ] npm run preview em localhost:4173
- [ ] Testar todas as features
- [ ] Lighthouse audit
- [ ] Remover code dead

**Estimativa:** 🟢 Pequeno (1-2 horas)

---

## US-18: Deploy na Vercel

**Como** desenvolvedor
**Eu quero** fazer deploy do projeto
**Para que** o portfólio fique online

**Critérios de Aceitação:**
- [ ] GitHub repository com código limpo
- [ ] .gitignore correto
- [ ] .env.example com variáveis
- [ ] Repositório público
- [ ] Vercel account criada
- [ ] Deploy automático ao fazer push para main
- [ ] URL de produção funcional
- [ ] HTTPS ativado
- [ ] Domínio customizado (opcional)
- [ ] Tudo funciona em produção

**Processo de Deploy:**
```bash
1. git push origin main
2. Vercel detecta push automaticamente
3. Build automático
4. Deploy em https://seu-projeto.vercel.app
5. Testar em produção
```

**Testes Pós-Deploy:**
- [ ] Registrar novo usuário
- [ ] Fazer login
- [ ] Criar projeto
- [ ] Editar perfil
- [ ] Ver portfólio público
- [ ] Buscar desenvolvedores
- [ ] Deixar comentário
- [ ] Deletar projeto
- [ ] localStorage funcionando
- [ ] Responsividade em mobile

**Tarefas Técnicas:**
- [ ] Criar repositório GitHub
- [ ] Push código final
- [ ] Conectar Vercel ao GitHub
- [ ] Configurar build command
- [ ] Deploy automático
- [ ] Testar em produção
- [ ] Adicionar ao portfólio pessoal

**Estimativa:** 🟢 Pequeno (1 hora)
