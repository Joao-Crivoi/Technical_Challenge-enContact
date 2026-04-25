# 📬 enContact — Frontend Technical Challenge

> Practical test for Front-end Developer at [enContact](https://www.encontact.com.br) — a customer service management platform for email and WhatsApp.

🌐 [English Version](./README.md)

![Status](https://img.shields.io/badge/status-completed-brightgreen)
![License](https://img.shields.io/badge/license-MIT-blue)

---

## 🔗 Live Demo

👉 [Access the live project](https://joao-crivoi.github.io/Technical_Challenge-enContact/))

**Login credentials:**
```
Username: admin
Password: admin
```

---

## 📋 Context

enContact is a platform that centralizes and organizes customer service via email and WhatsApp. This project is a technical challenge that simulates a message management screen — similar to what the company's employees use daily.

The challenge consists of building a React application with authentication, external API consumption, state management, internationalization, and theming.

---

## ✨ Features

### 🔐 Authentication
- Login screen with validation via **Zod** + **React Hook Form**
- Mocked credentials with persistence via **Zustand**
- Protected routes — only authenticated users can access the Main Page
- Automatic typing effect on credentials for demonstration purposes

### 📂 Message Management
- Sidebar with tree menu consuming external API
- Message card list per selected subMenu
- Checkbox on hover for item selection
- Multiple selection with all initials turning into checkboxes
- **Archive** button that removes selected items from the list
- Loading skeleton during data fetching
- User-resizable sidebar

### 🌍 Internationalization
- 6 supported languages: **Português, English, Español, Русский, 中文, हिन्दी**
- Selected language persisted between sessions

### 🎨 Theming
- **Dark** and **Light** themes with smooth transition
- Color palette based on enContact's visual identity
- Selected theme persisted between sessions

### 📱 Responsiveness
- Layout adapted for desktop and mobile
- Sidebar hidden on mobile
- Responsive Footer and Header

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| ![React](https://img.shields.io/badge/React-19.2.5-61DAFB?logo=react&logoColor=white) | 19.2.5 | UI Library |
| ![TypeScript](https://img.shields.io/badge/TypeScript-6.0.2-3178C6?logo=typescript&logoColor=white) | 6.0.2 | Type Safety |
| ![Vite](https://img.shields.io/badge/Vite-8.0.9-646CFF?logo=vite&logoColor=white) | 8.0.9 | Build Tool |
| ![TailwindCSS](https://img.shields.io/badge/Tailwind-4.2.4-06B6D4?logo=tailwindcss&logoColor=white) | 4.2.4 | Styling |
| ![Zustand](https://img.shields.io/badge/Zustand-5.0.12-brown) | 5.0.12 | State Management |
| ![React Router](https://img.shields.io/badge/React_Router-7.14.2-CA4245?logo=reactrouter&logoColor=white) | 7.14.2 | Routing |
| ![React Hook Form](https://img.shields.io/badge/React_Hook_Form-7.73.1-EC5990?logo=reacthookform&logoColor=white) | 7.73.1 | Form Management |
| ![Zod](https://img.shields.io/badge/Zod-4.3.6-3068B7) | 4.3.6 | Schema Validation |
| ![i18next](https://img.shields.io/badge/i18next-26.0.6-26A69A?logo=i18next&logoColor=white) | 26.0.6 | Internationalization |
| ![React Icons](https://img.shields.io/badge/React_Icons-5.6.0-E91E63) | 5.6.0 | Icons |

---

## 🏗️ Architecture

The project adopts a **feature-based architecture** — each feature is encapsulated in its own module with isolated components, hooks, stores, services, and types.

```
src/
├── assets/              # Images and SVGs
├── components/          # Global reusable components
│   └── ui/
│       ├── alert/       # ErrorAlert
│       ├── effect/      # Blob, CutLogo
│       ├── form/        # Button, Input, FormField
│       ├── navigation/  # IconLink, LinkButton
│       └── page/        # Header, Footer, Controls, Avatar
├── constants/           # Global constants (links, languages)
├── hooks/               # Global hooks (useThemeEffect, useTypewriter, useAvatarMenu)
├── i18n/                # Config and translations (pt, en, es, ru, zh, hi)
├── modules/
│   ├── auth/            # Authentication feature
│   │   ├── components/  # LoginPage, LoginForm, LoginBranding, ProtectedRoute
│   │   ├── hooks/       # useLoginForm
│   │   ├── schemas/     # loginSchema (Zod)
│   │   ├── stores/      # authStore (Zustand)
│   │   └── types/       # AuthState
│   └── main/            # Main feature
│       ├── components/  # Sidebar, Toolbar, ItemList, ItemCard, MenuItem
│       ├── hooks/       # useMenus, useItems, useItemCard
│       ├── services/    # menuService, itemService
│       ├── stores/      # menuStore, itemStore
│       └── types.ts     # Menu, SubMenu, SubMenuItem
├── router/              # AppRoutes
├── stores/              # Global stores (themeStore, languageStore)
└── types/               # Global types (Theme, Language)
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/joao-crivoi/technical_challenge-encontact.git

# Navigate to the project folder
cd technical_challenge-encontact/frontend

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
```

### Environment Variables

```env
VITE_API_URL=https://my-json-server.typicode.com/EnkiGroup/DesafioFrontEnd2026Jr
VITE_MOCK_USER=admin
VITE_MOCK_PASS=admin
```

### Running

```bash
npm run dev
```

Access `http://localhost:5173`

---

## 🎯 Best Practices

- **Separation of concerns** — logic extracted into custom hooks, clean JSX in components
- **Design tokens** — color palette centralized in CSS with semantic variables
- **Barrel exports** — clean imports via `index.ts` in each folder
- **Accessibility** — `aria-label`, `aria-hidden`, correct HTML semantics
- **Strict TypeScript** — no `any`, well-defined interfaces and types
- **Full i18n** — all texts externalized, no hardcoded strings in components

---

## 💡 Additional Features

Beyond what was required, the following was added:

- **Automatic typing effect** — on the login screen, credentials are typed automatically after 3 seconds, making demonstration easier
- **6 languages** — beyond Portuguese and English, support for Spanish, Russian, Chinese, and Hindi
- **Resizable sidebar** — users can adjust the sidebar width by dragging its border
- **Loading skeleton** — animated visual feedback while cards are loading
- **Animated gradient** — brand visual identity with smooth animation on the header, footer, and login branding
- **Theme and language persistence** — user preferences survive page refresh

---

## 👨‍💻 Author

**João Victor Crivoi Cesar Souza**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?logo=linkedin&logoColor=white)](https://www.linkedin.com/in/joao-crivoi-souza)

---

*Developed as a technical challenge for enContact — 2025*
