<div align="center">

# Kaia — AI-Powered Sales Assistant

**Embed a fully autonomous AI chatbot into any website in minutes.**  
Handle leads, answer questions, book appointments and close deals — 24/7, without human intervention.

[![License: MIT](https://img.shields.io/badge/License-MIT-orange.svg)](LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=nextdotjs)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org)
[![Prisma](https://img.shields.io/badge/Prisma-5-2D3748?logo=prisma)](https://www.prisma.io)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8?logo=tailwindcss)](https://tailwindcss.com)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)
[![Contributors](https://img.shields.io/github/contributors/andrebuilds/kaia)](https://github.com/andrebuilds/kaia/graphs/contributors)

[Quick Start](#quick-start) · [Features](#features) · [Architecture](#architecture) · [Contributing](CONTRIBUTING.md) · [Roadmap](#roadmap)

</div>

---

## What is Kaia?

Kaia is an **open-source AI SaaS platform** that lets businesses deploy a customisable AI chatbot on any website with a single code snippet. Unlike black-box chatbot services, Kaia gives you complete control over the model, the training data (your helpdesk), the branding, and the business logic.

Built by **[Andrea D'Ambrosio](https://github.com/andrebuilds)** — designed to be simple to self-host, easy to extend, and production-ready from day one.

---

## Features

### Core

| Feature                    | Description                                               |
| -------------------------- | --------------------------------------------------------- |
| 🤖 **AI Chatbot**          | GPT-4o powered assistant with streaming responses         |
| 🌐 **Multi-Domain**        | Manage unlimited branded chatbots from a single dashboard |
| 💬 **Real-Time Takeover**  | Agent can jump into any live conversation via Pusher      |
| 📅 **Appointment Booking** | Built-in slot-based calendar booking system               |
| 📧 **Email Marketing**     | Create and send campaigns to segmented customer lists     |
| 🛒 **Product Showcase**    | Display and sell products directly inside the chat window |
| 🎨 **Full Customisation**  | Custom icon, background colour, text colour per domain    |

### Platform

| Feature                    | Description                                              |
| -------------------------- | -------------------------------------------------------- |
| 🔐 **Auth**                | Clerk-based sign-up / sign-in with role support          |
| 💳 **Billing**             | Stripe subscriptions (Standard · Plus · Ultimate)        |
| 📊 **Analytics Dashboard** | Conversation stats, leads captured, bookings at a glance |
| 🔗 **Embeddable Widget**   | One `<script>` tag — zero dependencies on the host site  |
| 🌓 **Dark / Light Mode**   | Fully themed with `next-themes` and Tailwind             |
| 📦 **Self-Hostable**       | Docker-ready, Vercel-ready, runs anywhere Node.js runs   |

---

## Tech Stack

| Layer            | Technology                                                                                                      |
| ---------------- | --------------------------------------------------------------------------------------------------------------- |
| **Framework**    | [Next.js 14](https://nextjs.org) (App Router, Server Actions)                                                   |
| **Language**     | [TypeScript 5](https://www.typescriptlang.org)                                                                  |
| **Database**     | [PostgreSQL](https://www.postgresql.org) via [Prisma 5](https://prisma.io)                                      |
| **Auth**         | [Clerk](https://clerk.com)                                                                                      |
| **AI**           | [OpenAI API](https://platform.openai.com) (GPT-4o)                                                              |
| **Payments**     | [Stripe](https://stripe.com)                                                                                    |
| **Real-time**    | [Pusher](https://pusher.com)                                                                                    |
| **File Uploads** | [Uploadcare](https://uploadcare.com)                                                                            |
| **Email**        | [Nodemailer](https://nodemailer.com)                                                                            |
| **UI**           | [Tailwind CSS](https://tailwindcss.com) + [Radix UI](https://radix-ui.com) + [shadcn/ui](https://ui.shadcn.com) |
| **Validation**   | [Zod](https://zod.dev) + [React Hook Form](https://react-hook-form.com)                                         |

---

## Architecture

```
kaia/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── (dashboard)/        # Authenticated dashboard routes
│   │   │   ├── appointment/    # Booking management
│   │   │   ├── conversation/   # Real-time chat inbox
│   │   │   ├── dashboard/      # Analytics overview
│   │   │   ├── email-marketing/
│   │   │   ├── integration/    # Third-party connections
│   │   │   └── settings/       # Domain & chatbot settings
│   │   ├── api/stripe/         # Stripe webhook handler
│   │   ├── auth/               # Sign-in / sign-up
│   │   ├── chatbot/            # Embeddable widget host
│   │   └── portal/             # Customer-facing portal
│   ├── actions/                # Next.js Server Actions
│   ├── components/             # React component library
│   ├── hooks/                  # Custom React hooks
│   ├── schemas/                # Zod validation schemas
│   └── constants/              # Static config & copy
├── prisma/
│   └── schema.prisma           # Database schema
└── public/                     # Static assets
```

---

## Quick Start

### Prerequisites

- **Node.js** ≥ 18.17
- **PostgreSQL** ≥ 15 (or use the Docker Compose setup)
- **Bun** ≥ 1.0 (recommended) or npm / pnpm / yarn
- Accounts for: [Clerk](https://clerk.com), [OpenAI](https://platform.openai.com), [Stripe](https://stripe.com), [Pusher](https://pusher.com), [Uploadcare](https://uploadcare.com)

### 1 — Clone

```bash
git clone https://github.com/andrebuilds/kaia.git
cd kaia
```

### 2 — Install dependencies

```bash
bun install
# or: npm install
```

### 3 — Set up environment variables

```bash
cp .env.example .env
```

Open `.env` and fill in **every** value. See [Environment Variables](#environment-variables) for a full reference.

### 4 — Start the database

#### Option A — Docker (recommended)

```bash
docker compose up -d db
```

#### Option B — Local PostgreSQL

Create a database named `kaia` and update `DATABASE_URL` in `.env`.

### 5 — Run Prisma migrations

```bash
bunx prisma migrate dev --name init
bunx prisma generate
```

### 6 — Start the development server

```bash
bun dev
```

Open [http://localhost:3000](http://localhost:3000) — you should see the Kaia landing page.

### 7 — Set up Stripe webhooks (for billing)

```bash
# Install the Stripe CLI: https://stripe.com/docs/stripe-cli
stripe listen --forward-to localhost:3000/api/stripe/webhook
```

---

## Environment Variables

A full reference is available in [`.env.example`](.env.example).

| Variable                             | Required | Description                   |
| ------------------------------------ | -------- | ----------------------------- |
| `DATABASE_URL`                       | ✅       | PostgreSQL connection string  |
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`  | ✅       | Clerk public key              |
| `CLERK_SECRET_KEY`                   | ✅       | Clerk secret key              |
| `OPEN_AI_KEY`                        | ✅       | OpenAI API key (GPT-4o)       |
| `STRIPE_SECRET`                      | ✅       | Stripe secret key             |
| `NEXT_PUBLIC_STRIPE_PUBLISH_KEY`     | ✅       | Stripe publishable key        |
| `STRIPE_WEBHOOK_SECRET`              | ✅       | Stripe webhook signing secret |
| `PUSHER_APP_ID`                      | ✅       | Pusher application ID         |
| `PUSHER_APP_KEY`                     | ✅       | Pusher key                    |
| `PUSHER_APP_SECRET`                  | ✅       | Pusher secret                 |
| `PUSHER_CLUSTER`                     | ✅       | Pusher cluster (e.g. `eu`)    |
| `NEXT_PUBLIC_UPLOAD_CARE_PUBLIC_KEY` | ✅       | Uploadcare public key         |
| `NODEMAILER_EMAIL`                   | ✅       | Sender email address          |
| `NODEMAILER_PASSWORD`                | ✅       | Sender email app password     |
| `NEXT_PUBLIC_URL`                    | ✅       | Public base URL of the app    |

---

## Docker

### Development

```bash
docker compose up
```

This starts both **PostgreSQL** and the **Next.js** dev server with hot-reload.

### Production

```bash
docker build -t kaia .
docker run -p 3000:3000 --env-file .env kaia
```

---

## Deployment

### Vercel (one-click)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/andrebuilds/kaia)

1. Click the button above.
2. Add all environment variables from `.env.example`.
3. Vercel will build and deploy automatically.

### Self-hosted

Any VPS with Docker installed will work:

```bash
git clone https://github.com/andrebuilds/kaia.git
cd kaia
cp .env.example .env   # fill in values
docker compose -f docker-compose.prod.yml up -d
```

---

## Contributing

Contributions are welcome and deeply appreciated! Kaia is an independent open-source project and grows with community support.

Please read [CONTRIBUTING.md](CONTRIBUTING.md) before opening a PR.

**Good first issues** are tagged [`good first issue`](https://github.com/andrebuilds/kaia/issues?q=is%3Aopen+is%3Aissue+label%3A%22good+first+issue%22) — a great place to start.

---

## Roadmap

- [ ] WhatsApp & Telegram channel integrations
- [ ] OpenAI Assistants API (fine-tuning per domain)
- [ ] Multi-language chatbot (auto-detect visitor locale)
- [ ] Analytics export (CSV / PDF reports)
- [ ] n8n / Zapier / Make webhook triggers
- [ ] Resend email provider support
- [ ] Rate limiting & abuse protection
- [ ] Comprehensive test suite (Vitest + Playwright)

---

## Security

Found a vulnerability? Please **do not open a public issue**.  
Instead, read [SECURITY.md](SECURITY.md) and follow the responsible disclosure process.

---

## License

Kaia is open-source software licensed under the **[MIT License](LICENSE)**.

© 2024 [Andrea D'Ambrosio](https://github.com/andrebuilds). All rights reserved.

---

<div align="center">

Made with ❤️ by **Andrea D'Ambrosio**

If Kaia helps you, consider giving it a ⭐ — it means a lot!

</div>
