# 🏗️ Arquitetura do Frontend Lab

Este documento descreve a arquitetura, padrões e decisões de design do projeto Frontend Lab.

## 📁 Estrutura do Projeto

```
├── app/                        # Páginas e rotas (Next.js App Router)
│   ├── api/
│   │   └── pix/                # API para geração do payload Pix
│   │       └── route.ts
│   ├── blog/                   # Rotas do blog
│   │   ├── [slug]/             # Página de detalhe do post
│   │   │   └── page.tsx
│   │   └── page.tsx            # Listagem de posts
│   ├── donate/                 # Página de doação
│   │   ├── components/         # Componentes específicos da página
│   │   └── page.tsx
│   ├── [category]/             # Rotas dinâmicas de categorias
│   │   └── [component]/
│   │       └── page.tsx
│   ├── error.tsx               # Página de erro global
│   ├── not-found.tsx           # Página 404
│   ├── layout.tsx              # Layout raiz
│   ├── page.tsx                # Home
│   └── globals.css             # Estilos globais
├── modules/                    # Módulos de domínio (arquitetura modular)
│   ├── blog/                   # Módulo do blog
│   │   ├── components/         # Componentes específicos do blog
│   │   ├── constants/          # Constantes do blog
│   │   └── utils/              # Utilitários do blog
│   ├── categories/             # Módulo de categorias/conteúdos HTML
│   │   ├── components/         # Demos e componentes de renderização
│   │   ├── constants/          # Definições de conteúdo
│   │   ├── types/              # Tipos TypeScript
│   │   └── utils/              # Utilitários de processamento
│   ├── donate/                 # Módulo de doações
│   │   └── server/
│   │       └── pix/            # Lógica server-side do Pix
│   │           ├── emv.ts      # Geração de payload EMV
│   │           └── crc16.ts    # Cálculo CRC16
│   └── error/                  # Módulo de tratamento de erros
│       └── components/         # Componentes de erro reutilizáveis
├── shared/                     # Camada compartilhada entre módulos
│   ├── components/             # Componentes UI reutilizáveis
│   ├── constants/               # Constantes globais
│   ├── hooks/                  # Hooks customizados
│   ├── providers/              # Providers globais (React Query, etc.)
│   ├── queries/                # Queries e fetch de dados
│   └── config/                 # Configurações e utilitários
└── public/
    └── assets/
        ├── svg/                # Ícones e logos
        └── images/             # Imagens estáticas
```

## 🎯 Princípios Arquiteturais

### 1. Arquitetura Modular

O projeto segue uma **arquitetura modular por domínio**, onde cada funcionalidade específica é organizada em seu próprio módulo dentro de `modules/`.

**Regra de ouro:**

- Se é específico de um domínio → vai em `modules/[dominio]/`
- Se é compartilhado entre múltiplos domínios → vai em `shared/`

### 2. Organização de Módulos

Cada módulo pode conter:

```
modules/[dominio]/
├── components/     # Componentes específicos do domínio
├── constants/      # Constantes e dados do domínio
├── types/          # Tipos TypeScript do domínio
├── utils/          # Funções utilitárias do domínio
└── server/         # Lógica server-side (se necessário)
```

**Exemplo prático:**

- `modules/blog/components/PostCard.tsx` → Componente específico do blog
- `shared/components/ActionButton.tsx` → Componente usado em várias páginas

### 3. Camada Compartilhada (`shared/`)

A pasta `shared/` contém tudo que é **reutilizável entre múltiplos módulos**:

- **`components/`**: Componentes de UI genéricos (botões, cards, layout, etc.)
- **`constants/`**: Constantes globais (metadados, configurações, etc.)
- **`hooks/`**: Hooks customizados reutilizáveis
- **`providers/`**: Providers React globais
- **`queries/`**: Funções de fetch de dados compartilhadas
- **`config/`**: Configurações e utilitários (ex: `cn()` para classes CSS)

## 🌐 Rotas e Funcionalidades

### Rotas Principais

| Rota                      | Descrição                                | Tipo             |
| ------------------------- | ---------------------------------------- | ---------------- |
| `/`                       | Home com visão geral e grid de conteúdos | Server Component |
| `/blog`                   | Listagem de artigos com busca e filtros  | Server Component |
| `/blog/[slug]`            | Página de detalhe do post                | Server Component |
| `/[category]/[component]` | Demos interativos de HTML avançado       | Server Component |
| `/donate`                 | Página de doação com Pix                 | Server Component |
| `/api/pix`                | API para geração de payload Pix          | API Route        |

### Rotas de Erro

- `/error` - Página de erro global (500)
- `/not-found` - Página 404

## 💸 Sistema de Doações (Pix)

### Fluxo de Funcionamento

1. **Frontend** (`app/donate/page.tsx`):

   - Renderiza a página de doação
   - Usa o hook `usePixDonation()` para buscar o payload

2. **Hook** (`shared/hooks/usePixDonation.ts`):

   - Faz requisição para `/api/pix`
   - Gera URL do QR Code usando QuickChart
   - Gerencia estado de loading/error

3. **API Route** (`app/api/pix/route.ts`):

   - Valida variáveis de ambiente
   - Aplica rate limiting (20 req/min por IP)
   - Chama a função de geração do payload

4. **Lógica de Negócio** (`modules/donate/server/pix/`):
   - `emv.ts`: Gera payload EMV seguindo padrão brasileiro
   - `crc16.ts`: Calcula CRC16-CCITT para validação

### Configuração

Variáveis de ambiente necessárias:

```bash
PIX_KEY="sua-chave-pix-aqui"
PIX_RECEIVER_NAME="Nome do recebedor"
PIX_CITY="Cidade"
PIX_DEFAULT_AMOUNT="20.00"
```

### Rate Limiting

A rota `/api/pix` implementa rate limiting simples em memória:

- **Janela**: 60 segundos
- **Limite**: 20 requisições por IP
- **Resposta**: 429 (Too Many Requests) quando excedido

## 🎨 Padrões de Código

### Componentes React

#### Server Components (padrão)

```tsx
// app/blog/page.tsx
export default async function Blog() {
  const posts = await getPosts();
  return <PostsList posts={posts} />;
}
```

#### Client Components (quando necessário)

```tsx
// shared/components/ActionButton.tsx
"use client";

export function ActionButton({ href, children }: Props) {
  // Lógica de interação
}
```

### Organização de Imports

Ordem preferencial:

1. Bibliotecas externas
2. Imports do Next.js
3. Imports de `@/shared`
4. Imports de `@/modules`
5. Imports relativos

```tsx
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";

import { usePixDonation } from "@/shared/hooks";
import { PostCard } from "@/modules/blog/components";
```

### Nomenclatura

- **Componentes**: PascalCase (`PostCard.tsx`)
- **Hooks**: camelCase com prefixo `use` (`usePixDonation.ts`)
- **Utils**: camelCase (`formatDate.ts`)
- **Constants**: UPPER_SNAKE_CASE ou objetos (`DONATE_CONTENT`)
- **Types**: PascalCase (`PixPayloadInput`)

### Exports

- **Named exports** para componentes e funções
- **Barrel exports** (`index.ts`) para facilitar imports

```tsx
// modules/blog/components/index.ts
export * from "./PostCard";
export * from "./PostHeader";
```

## 📱 Responsividade

### Padrão de Padding

Todos os containers principais seguem o padrão responsivo:

```tsx
<div className="max-w-5xl mx-auto px-2 py-4 sm:px-8 sm:py-12">
  {/* Conteúdo */}
</div>
```

**Breakpoints:**

- **Mobile**: `px-2 py-4` (padding reduzido)
- **Desktop** (`sm:` e acima): `px-8 py-12` (padding padrão)

### Breakpoints Tailwind

O projeto usa os breakpoints padrão do Tailwind:

- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px

## 🔧 Configurações

### TypeScript

- **Strict mode** habilitado
- **Path aliases** configurados (`@/*` → raiz do projeto)
- **Module resolution**: `bundler` (Next.js)

### Tailwind CSS

- **v4** com PostCSS
- **Custom classes** em `app/globals.css`:
  - `.prose-custom` - Estilização de conteúdo markdown
  - `.btn-base`, `.btn-primary`, `.btn-secondary` - Botões padronizados

### Next.js

- **App Router** como padrão
- **Server Components** por padrão
- **Client Components** apenas quando necessário (`"use client"`)

## 🚀 Performance

### Otimizações Implementadas

1. **Server Components**: Maioria das páginas são Server Components
2. **React Query**: Cache e gerenciamento de estado assíncrono
3. **Image Optimization**: Next.js Image component
4. **Static Generation**: Páginas de conteúdo geradas estaticamente quando possível

### Queries e Cache

- **React Query** para gerenciamento de estado assíncrono
- **Stale time**: 5 minutos para dados de Pix
- **Retry**: 1 tentativa para requisições de API

## 📦 Versionamento

### Controle de Versão

O projeto utiliza **Semantic Versioning (SemVer)** no formato `MAJOR.MINOR.PATCH`:

- **MAJOR** (`1.0.0`): Mudanças incompatíveis com versões anteriores
- **MINOR** (`1.1.0`): Novas funcionalidades compatíveis com versões anteriores
- **PATCH** (`1.0.1`): Correções de bugs compatíveis

### Atualização de Versão

⚠️ **Importante**: A cada deploy/subida para produção, a versão do projeto **deve ser atualizada** no arquivo `package.json`.

**Processo obrigatório antes de cada deploy:**

1. Atualizar a versão em `package.json`:

   ```json
   {
     "version": "1.0.0" // Incrementar conforme necessário
   }
   ```

2. Commitar a mudança de versão junto com as alterações:

   ```bash
   git add package.json
   git commit -m "chore: bump version to 1.0.0"
   ```

3. Criar uma tag Git (opcional, mas recomendado):
   ```bash
   git tag -a v1.0.0 -m "Release 1.0.0 - Primeira entrega do MVP"
   git push origin v1.0.0
   ```

### Versão Atual

- **Versão atual**: `1.0.0` (Primeira entrega do MVP)

## 📝 Convenções de Commit

O projeto segue convenções semânticas de commit:

- `feat:` - Nova funcionalidade
- `fix:` - Correção de bug
- `refactor:` - Refatoração de código
- `docs:` - Documentação
- `style:` - Formatação, espaços, etc.
- `chore:` - Tarefas de manutenção

## 🔍 Decisões Arquiteturais

### Por que módulos em vez de features?

A organização por módulos permite:

- **Isolamento de domínios**: Cada módulo é autocontido
- **Reutilização clara**: `shared/` deixa explícito o que é compartilhado
- **Escalabilidade**: Fácil adicionar novos módulos sem afetar existentes

### Por que server-side por padrão?

- **Performance**: Menos JavaScript no cliente
- **SEO**: Conteúdo renderizado no servidor
- **Simplicidade**: Menos estado para gerenciar

### Por que TypeScript strict?

- **Segurança de tipos**: Menos bugs em runtime
- **Documentação**: Tipos servem como documentação
- **Refatoração**: Mudanças seguras com suporte da IDE

---

**Última atualização**: Dezembro 2025
