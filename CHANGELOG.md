# Changelog

All notable changes to **Kaia** are documented in this file.

The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [Unreleased]

### Planned

- WhatsApp & Telegram channel integrations
- OpenAI Assistants API with per-domain fine-tuning
- Multi-language chatbot (auto-detect visitor locale)
- Analytics export (CSV / PDF)
- n8n / Zapier / Make webhook triggers
- Resend email provider support
- Comprehensive test suite (Vitest + Playwright)
- Rate limiting and abuse protection

---

## [1.0.0] — 2024-06-01

### Added

- Initial public release of **Kaia** (open-sourced from the original private build)
- AI-powered chatbot widget powered by OpenAI GPT-4o
- Embeddable `<script>` snippet for any website
- Multi-domain management from a single dashboard
- Real-time agent takeover via Pusher channels
- Appointment booking with configurable time slots
- Email marketing campaigns with customer segmentation
- Product showcase inside the chat window
- Stripe subscription billing (Standard · Plus · Ultimate plans)
- Full chatbot customisation: icon, background colour, text colour, welcome message
- Helpdesk knowledge base (Q&A pairs per domain)
- Filter questions to qualify leads before connecting
- Customer response collection and lead capture
- Clerk-based authentication with sign-up / sign-in flows
- Role-based access (owner type)
- Dark / light mode with `next-themes`
- Prisma 5 schema with PostgreSQL
- Uploadcare file/image upload integration
- Nodemailer email sending
- Next.js 14 App Router architecture with Server Actions
- shadcn/ui + Radix UI component library
- Tailwind CSS design system with custom orange brand colour
- Docker and Docker Compose support
- `.env.example` with full variable reference
- MIT License

---

[Unreleased]: https://github.com/andrebuilds/kaia/compare/v1.0.0...HEAD
[1.0.0]: https://github.com/andrebuilds/kaia/releases/tag/v1.0.0
