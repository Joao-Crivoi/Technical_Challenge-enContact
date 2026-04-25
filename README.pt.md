# 📬 enContact — Desafio Técnico Frontend

> Teste prático para desenvolvedor Front-end da [enContact](https://www.encontact.com.br) — plataforma de gestão de atendimento por e-mail e WhatsApp.

🌐 [English version](./README.md)

![Status](https://img.shields.io/badge/status-concluído-brightgreen)
![License](https://img.shields.io/badge/license-MIT-blue)

---

## 🔗 Demo

👉 [Acesse o projeto em produção](https://joao-crivoi.github.io/technical_challenge-encontact)

**Credenciais de acesso:**
```
Usuário: admin
Senha: admin
```

---

## 📋 Contexto

A enContact é uma plataforma que centraliza e organiza o atendimento ao cliente por e-mail e WhatsApp. Este projeto é um teste técnico que simula uma tela de gestão de mensagens — similar ao que os colaboradores da empresa utilizam no dia a dia.

O desafio consiste em construir uma aplicação React com autenticação, consumo de API externa, gerenciamento de estado, internacionalização e tematização.

---

## ✨ Funcionalidades

### 🔐 Autenticação
- Tela de login com validação via **Zod** + **React Hook Form**
- Credenciais mockadas com persistência via **Zustand**
- Rotas protegidas — somente usuários autenticados acessam a Main Page
- Efeito de digitação automática das credenciais para demonstração

### 📂 Gestão de Mensagens
- Sidebar com menu em árvore consumindo API externa
- Lista de cards de mensagens por subMenu selecionado
- Checkbox ao hover para seleção de itens
- Seleção múltipla com todas as iniciais virando checkbox
- Botão **Arquivar** que remove itens selecionados da listagem
- Loading skeleton durante carregamento
- Sidebar redimensionável pelo usuário

### 🌍 Internacionalização
- 6 idiomas suportados: **Português, English, Español, Русский, 中文, हिन्दी**
- Persistência do idioma selecionado entre sessões

### 🎨 Tematização
- Tema **Dark** e **Light** com transição suave
- Paleta de cores baseada na identidade visual da enContact
- Persistência do tema selecionado entre sessões

### 📱 Responsividade
- Layout adaptado para desktop e mobile
- Sidebar oculta no mobile
- Footer e Header responsivos

---

## 🛠️ Stack Tecnológica

| Tecnologia | Versão | Uso |
|---|---|---|
| ![React](https://img.shields.io/badge/React-19.2.5-61DAFB?logo=react&logoColor=white) | 19.2.5 | UI |
| ![TypeScript](https://img.shields.io/badge/TypeScript-6.0.2-3178C6?logo=typescript&logoColor=white) | 6.0.2 | Tipagem |
| ![Vite](https://img.shields.io/badge/Vite-8.0.9-646CFF?logo=vite&logoColor=white) | 8.0.9 | Build tool |
| ![TailwindCSS](https://img.shields.io/badge/Tailwind-4.2.4-06B6D4?logo=tailwindcss&logoColor=white) | 4.2.4 | Estilização |
| ![Zustand](https://img.shields.io/badge/Zustand-5.0.12-brown) | 5.0.12 | Gerenciamento de estado |
| ![React Router](https://img.shields.io/badge/React_Router-7.14.2-CA4245?logo=reactrouter&logoColor=white) | 7.14.2 | Roteamento |
| ![React Hook Form](https://img.shields.io/badge/React_Hook_Form-7.73.1-EC5990?logo=reacthookform&logoColor=white) | 7.73.1 | Formulários |
| ![Zod](https://img.shields.io/badge/Zod-4.3.6-3068B7) | 4.3.6 | Validação de schemas |
| ![i18next](https://img.shields.io/badge/i18next-26.0.6-26A69A?logo=i18next&logoColor=white) | 26.0.6 | Internacionalização |
| ![React Icons](https://img.shields.io/badge/React_Icons-5.6.0-E91E63) | 5.6.0 | Ícones |

---

## 🏗️ Arquitetura

O projeto adota uma **feature-based architecture** — cada funcionalidade é encapsulada em seu próprio módulo com componentes, hooks, stores, services e tipos isolados.

```
src/
├── assets/              # Imagens e SVGs
├── components/          # Componentes globais reutilizáveis
│   └── ui/
│       ├── alert/       # ErrorAlert
│       ├── effect/      # Blob, CutLogo
│       ├── form/        # Button, Input, FormField
│       ├── navigation/  # IconLink, LinkButton
│       └── page/        # Header, Footer, Controls, Avatar
├── constants/           # Constantes globais (links, idiomas)
├── hooks/               # Hooks globais (useThemeEffect, useTypewriter, useAvatarMenu)
├── i18n/                # Configuração e traduções (pt, en, es, ru, zh, hi)
├── modules/
│   ├── auth/            # Feature de autenticação
│   │   ├── components/  # LoginPage, LoginForm, LoginBranding, ProtectedRoute
│   │   ├── hooks/       # useLoginForm
│   │   ├── schemas/     # loginSchema (Zod)
│   │   ├── stores/      # authStore (Zustand)
│   │   └── types/       # AuthState
│   └── main/            # Feature principal
│       ├── components/  # Sidebar, Toolbar, ItemList, ItemCard, MenuItem
│       ├── hooks/       # useMenus, useItems, useItemCard
│       ├── services/    # menuService, itemService
│       ├── stores/      # menuStore, itemStore
│       └── types.ts     # Menu, SubMenu, SubMenuItem
├── router/              # AppRoutes
├── stores/              # Stores globais (themeStore, languageStore)
└── types/               # Tipos globais (Theme, Language)
```

---

## 🚀 Como rodar localmente

### Pré-requisitos
- Node.js 18+
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone https://github.com/joao-crivoi/technical_challenge-encontact.git

# Entre na pasta do projeto
cd technical_challenge-encontact/frontend

# Instale as dependências
npm install

# Configure as variáveis de ambiente
cp .env.example .env
```

### Variáveis de ambiente

```env
VITE_API_URL=https://my-json-server.typicode.com/EnkiGroup/DesafioFrontEnd2026Jr
VITE_MOCK_USER=admin
VITE_MOCK_PASS=admin
```

### Rodando

```bash
npm run dev
```

Acesse `http://localhost:5173`

---

## 🎯 Boas práticas adotadas

- **Separação de responsabilidades** — lógica extraída em hooks customizados, JSX limpo nos componentes
- **Design tokens** — paleta de cores centralizada no CSS com variáveis semânticas
- **Barrel exports** — imports limpos via `index.ts` em cada pasta
- **Acessibilidade** — `aria-label`, `aria-hidden`, semântica HTML correta
- **TypeScript estrito** — sem `any`, interfaces e tipos bem definidos
- **i18n completo** — todos os textos externalizados, nenhum texto hardcoded nos componentes

---

## 💡 Funcionalidades adicionais

Além do solicitado, foi adicionado:

- **Efeito de digitação automática** — ao carregar a tela de login, as credenciais são digitadas automaticamente após 3 segundos, facilitando a demonstração
- **6 idiomas** — além do português e inglês, suporte a espanhol, russo, chinês e hindi
- **Sidebar redimensionável** — o usuário pode ajustar a largura da sidebar arrastando a borda
- **Loading skeleton** — feedback visual animado durante o carregamento dos cards
- **Gradiente animado** — identidade visual da marca com animação suave no header, footer e branding da tela de login
- **Persistência de tema e idioma** — as preferências do usuário sobrevivem ao refresh da página

---

## 👨‍💻 Autor

**João Victor Crivoi Cesar Souza**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?logo=linkedin&logoColor=white)](https://www.linkedin.com/in/joao-crivoi-souza)

---

*Desenvolvido como teste técnico para a enContact — 2025*
