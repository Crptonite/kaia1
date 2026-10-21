# Contributing to Kaia

First off — **thank you** for taking the time to contribute! 🎉  
Kaia is an independent open-source project created by [Andrea D'Ambrosio](https://github.com/andrebuilds), and every contribution — code, docs, bug reports, ideas — makes it better.

---

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
  - [Reporting Bugs](#reporting-bugs)
  - [Suggesting Features](#suggesting-features)
  - [Your First Code Contribution](#your-first-code-contribution)
  - [Pull Requests](#pull-requests)
- [Development Setup](#development-setup)
- [Project Structure](#project-structure)
- [Coding Standards](#coding-standards)
- [Commit Message Convention](#commit-message-convention)
- [Testing](#testing)
- [License](#license)

---

## Code of Conduct

This project follows the [Contributor Covenant Code of Conduct](CODE_OF_CONDUCT.md).  
By participating you agree to uphold it. Please report unacceptable behaviour to **info@andreadambrosio.io**.

---

## How Can I Contribute?

### Reporting Bugs

Before opening a bug report:

1. **Search existing issues** to avoid duplicates.
2. Make sure you can reproduce the bug on the latest `main` branch.

When opening a bug report, use the **Bug Report** issue template and include:

- A clear and descriptive title
- Steps to reproduce the issue
- Expected vs actual behaviour
- Environment (OS, Node.js version, browser)
- Relevant logs / screenshots

### Suggesting Features

Feature requests are welcome! Use the **Feature Request** template.  
Please describe:

- The problem you're trying to solve
- Your proposed solution
- Any alternatives you've considered

> **Tip:** Small, focused PRs are merged faster than large, broad ones.

### Your First Code Contribution

Not sure where to start? Look for issues tagged:

- [`good first issue`](https://github.com/andrebuilds/kaia/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22) — simple, well-scoped tasks
- [`help wanted`](https://github.com/andrebuilds/kaia/issues?q=is%3Aissue+is%3Aopen+label%3A%22help+wanted%22) — contributions actively sought

### Pull Requests

1. **Fork** the repository and create your branch from `main`:
   ```bash
   git checkout -b feat/my-awesome-feature
   ```
2. Make your changes following the [Coding Standards](#coding-standards).
3. Add or update tests if relevant.
4. Make sure the project builds and lints cleanly:
   ```bash
   bun run build
   bun run lint
   ```
5. Commit using the [Conventional Commits](#commit-message-convention) format.
6. Push your branch and **open a PR against `main`**.
7. Fill in the PR template completely.
8. Wait for review — we aim to respond within 48 hours.

> **One feature per PR.** PRs that bundle multiple unrelated changes will be asked to split.

---

## Development Setup

### Requirements

| Tool       | Version                                       |
| ---------- | --------------------------------------------- |
| Node.js    | ≥ 18.17                                       |
| Bun        | ≥ 1.0 (or npm / pnpm)                         |
| PostgreSQL | ≥ 15                                          |
| Docker     | any recent version (optional but recommended) |

### Steps

```bash
# 1. Fork, then clone your fork
git clone https://github.com/<your-username>/kaia.git
cd kaia

# 2. Install dependencies
bun install

# 3. Copy environment variables and fill them in
cp .env.example .env

# 4. Start the database (Docker)
docker compose up -d db

# 5. Run migrations
bunx prisma migrate dev

# 6. Start dev server
bun dev
```

The app will be available at `http://localhost:3000`.

---

## Project Structure

```
src/
├── actions/        # Next.js Server Actions (business logic)
├── app/            # Next.js App Router pages and layouts
├── components/     # Reusable React components
├── context/        # React context providers
├── hooks/          # Custom React hooks
├── icons/          # SVG icon components
├── lib/            # Utility functions and shared clients
├── schemas/        # Zod validation schemas
└── constants/      # Static configuration & copy
prisma/
└── schema.prisma   # Database schema
```

---

## Coding Standards

- **TypeScript** — all new code must be fully typed. Avoid `any`.
- **Functional components** — use function declarations, not arrow functions for top-level components.
- **Server Actions** — keep all data-fetching / mutation logic in `src/actions/`.
- **Tailwind CSS** — use utility classes. Avoid inline styles.
- **shadcn/ui** — prefer existing components before creating new ones.
- **Error handling** — every server action must have a `try/catch` and return a typed status response.
- **No `console.log`** — use proper error boundaries or structured logging.
- **Imports** — use `@/` path aliases, never relative `../../`.

### ESLint

The project uses the Next.js default ESLint config. Run it with:

```bash
bun run lint
```

All PRs must pass linting with zero errors.

---

## Commit Message Convention

We follow [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/).

```
<type>(<scope>): <short summary>

[optional body]

[optional footer]
```

| Type       | When to use                                 |
| ---------- | ------------------------------------------- |
| `feat`     | A new feature                               |
| `fix`      | A bug fix                                   |
| `docs`     | Documentation only                          |
| `style`    | Formatting, missing semicolons, etc.        |
| `refactor` | Code change that is neither fix nor feature |
| `perf`     | Performance improvement                     |
| `test`     | Adding or updating tests                    |
| `chore`    | Build process, dependency updates           |
| `ci`       | CI/CD changes                               |

**Examples:**

```
feat(chatbot): add streaming response support
fix(auth): redirect to sign-in when session expires
docs(readme): update deployment section
```

---

## Testing

> The test suite is a work in progress. Writing tests is a highly valued contribution!

When tests are available, run them with:

```bash
bun test
```

Please add tests for any new Server Actions or utility functions you contribute.

---

## License

By contributing to Kaia, you agree that your contributions will be licensed under the [MIT License](LICENSE).
