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

### 4. Eliminação de Hardcode e Números Mágicos

**Princípio fundamental**: **Nunca use valores hardcoded ou números mágicos no código**. Sempre extraia para constants, enums ou configurações.

**Regras obrigatórias:**

- ✅ **Sempre use enums** para valores discretos (status, tipos, variantes)
- ✅ **Sempre use constants** para números, strings fixas, URLs e paths
- ✅ **Sempre centralize** mensagens de erro e validações
- ✅ **Sempre documente** regras de negócio em constants ou validators
- ❌ **Nunca** use números mágicos diretamente no código
- ❌ **Nunca** use strings hardcoded sem constant
- ❌ **Nunca** use valores de configuração inline

Veja a seção [Eliminação de Hardcode e Números Mágicos](#eliminação-de-hardcode-e-números-mágicos) para exemplos detalhados.

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

- **Janela**: 60 segundos (deve estar em constant)
- **Limite**: 20 requisições por IP (deve estar em constant)
- **Resposta**: 429 (Too Many Requests) quando excedido (deve usar HTTP_STATUS constant)

⚠️ **Nota**: Esses valores devem ser extraídos para constants seguindo o padrão de eliminação de números mágicos.

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
- **Enums**: PascalCase (`Language`, `StatusTopic`)

### Exports

- **Named exports** para componentes e funções
- **Barrel exports** (`index.ts`) para facilitar imports

```tsx
// modules/blog/components/index.ts
export * from "./PostCard";
export * from "./PostHeader";
```

### Eliminação de Hardcode e Números Mágicos

⚠️ **Princípio fundamental**: **Nunca use valores hardcoded ou números mágicos no código**. Sempre extraia para constants, enums ou configurações.

#### 1. Constantes para Valores Fixos

**❌ Evitar:**

```tsx
// Hardcode direto no código
if (status === "AVAILABLE") {
  // ...
}

const maxRetries = 3;
const timeout = 5000;
```

**✅ Preferir:**

```tsx
// shared/constants/api.ts
export const API_CONFIG = {
  MAX_RETRIES: 3,
  TIMEOUT_MS: 5000,
  STALE_TIME_MS: 5 * 60 * 1000, // 5 minutos
} as const;

// Uso
if (status === StatusTopic.AVAILABLE) {
  // ...
}
```

#### 2. Enums para Valores Discretos

**Sempre use enums** quando houver um conjunto fixo de valores possíveis:

**❌ Evitar:**

```tsx
type Status = "AVAILABLE" | "COMING_SOON";
type Variant = "HTML" | "JAVASCRIPT" | "REACT";

if (status === "AVAILABLE") {
  // ...
}
```

**✅ Preferir:**

```tsx
// shared/constants/topics.ts
export enum StatusTopic {
  AVAILABLE = "AVAILABLE",
  COMING_SOON = "COMING_SOON",
}

export enum VariantTopic {
  HTML = "HTML",
  JAVASCRIPT = "JAVASCRIPT",
  REACT = "REACT",
}

// Uso
if (status === StatusTopic.AVAILABLE) {
  // ...
}
```

**Exemplo real do projeto:**

```tsx
// shared/constants/language.ts
export enum Language {
  HTML = "html",
  JAVASCRIPT = "javascript",
  REACT = "react",
}

export const ICON_LANGUAGE: Record<Language, string> = {
  [Language.HTML]: "/assets/svg/html.svg",
  [Language.JAVASCRIPT]: "/assets/svg/js.svg",
  [Language.REACT]: "/assets/svg/react.svg",
};
```

#### 3. Números Mágicos

**❌ Evitar:**

```tsx
// Números mágicos sem contexto
const normalizedName = normalizeText(name, 25);
const normalizedCity = normalizeText(city, 15);
if (entry.count >= 20) {
  // ...
}
```

**✅ Preferir:**

```tsx
// modules/donate/server/pix/constants.ts
export const PIX_LIMITS = {
  MAX_NAME_LENGTH: 25,
  MAX_CITY_LENGTH: 15,
} as const;

// app/api/pix/constants.ts
export const RATE_LIMIT = {
  WINDOW_MS: 60_000, // 60 segundos
  MAX_REQUESTS: 20,
} as const;

// Uso
const normalizedName = normalizeText(name, PIX_LIMITS.MAX_NAME_LENGTH);
if (entry.count >= RATE_LIMIT.MAX_REQUESTS) {
  // ...
}
```

#### 4. Strings Hardcoded

**❌ Evitar:**

```tsx
// Strings hardcoded
return NextResponse.json({ error: "Too Many Requests" }, { status: 429 });
const txid = "***";
```

**✅ Preferir:**

```tsx
// shared/constants/http.ts
export const HTTP_STATUS = {
  TOO_MANY_REQUESTS: 429,
  INTERNAL_SERVER_ERROR: 500,
} as const;

export const HTTP_MESSAGES = {
  TOO_MANY_REQUESTS: "Too Many Requests",
  SERVER_ERROR: "Configuração do servidor incompleta",
} as const;

// modules/donate/server/pix/constants.ts
export const PIX_DEFAULTS = {
  TXID: "***",
} as const;

// Uso
return NextResponse.json(
  { error: HTTP_MESSAGES.TOO_MANY_REQUESTS },
  { status: HTTP_STATUS.TOO_MANY_REQUESTS }
);
```

#### 5. URLs e Paths

**❌ Evitar:**

```tsx
// URLs hardcoded
const qrCodeUrl = `https://quickchart.io/qr?text=${encodedPayload}`;
const apiUrl = "/api/pix";
```

**✅ Preferir:**

```tsx
// shared/constants/api.ts
export const API_ENDPOINTS = {
  PIX: "/api/pix",
} as const;

export const EXTERNAL_SERVICES = {
  QUICKCHART_QR: "https://quickchart.io/qr",
} as const;

// Uso
const qrCodeUrl = `${EXTERNAL_SERVICES.QUICKCHART_QR}?text=${encodedPayload}`;
```

#### 6. Regras de Negócio

**❌ Evitar:**

```tsx
// Regras de negócio hardcoded
if (!key || !name || !city || !Number.isFinite(amount) || amount <= 0) {
  throw new Error("Invalid Pix payload input");
}
```

**✅ Preferir:**

```tsx
// modules/donate/server/pix/constants.ts
export const PIX_VALIDATION = {
  MIN_AMOUNT: 0,
  REQUIRED_FIELDS: ["key", "name", "city", "amount"] as const,
} as const;

// modules/donate/server/pix/validators.ts
export function validatePixInput(input: PixPayloadInput): void {
  if (!input.key || !input.name || !input.city) {
    throw new Error("Campos obrigatórios ausentes");
  }
  if (
    !Number.isFinite(input.amount) ||
    input.amount <= PIX_VALIDATION.MIN_AMOUNT
  ) {
    throw new Error("Valor inválido");
  }
}
```

### Checklist de Revisão

Antes de commitar, verifique:

- [ ] Não há strings hardcoded (exceto em constants)
- [ ] Não há números mágicos (valores devem estar em constants)
- [ ] Valores discretos usam enums
- [ ] URLs e paths estão em constants
- [ ] Mensagens de erro estão centralizadas
- [ ] Valores de configuração estão em constants
- [ ] Regras de negócio estão documentadas em constants ou validators

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
- **Stale time**: 5 minutos para dados de Pix (deve estar em constant)
- **Retry**: 1 tentativa para requisições de API (deve estar em constant)

⚠️ **Nota**: Esses valores devem ser extraídos para constants seguindo o padrão de eliminação de números mágicos.

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
