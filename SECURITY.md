# Security Policy

## Supported Versions

| Version         | Supported |
| --------------- | --------- |
| `main` (latest) | ✅        |
| Older releases  | ❌        |

We only provide security patches for the current `main` branch.

---

## Reporting a Vulnerability

**Please do NOT open a public GitHub issue for security vulnerabilities.**

If you discover a security issue in Kaia, please report it privately:

### Option 1 — GitHub Private Security Advisory (preferred)

1. Go to the [Security tab](https://github.com/andrebuilds/kaia/security/advisories/new) of this repository.
2. Click **"Report a vulnerability"**.
3. Fill in the form with as much detail as possible.

### Option 2 — Email

Send your report to **info@andreadambrosio.io** with the subject line:

```
[SECURITY] Kaia — <brief description>
```

Include:

- A description of the vulnerability
- Steps to reproduce (proof of concept if possible)
- Potential impact assessment
- Your suggested fix (optional but appreciated)

---

## What to Expect

| Step                                 | Timeline               |
| ------------------------------------ | ---------------------- |
| Acknowledgement of your report       | Within 48 hours        |
| Initial assessment                   | Within 5 business days |
| Patch release (for confirmed issues) | Within 30 days         |
| Credit in release notes              | Upon fix release       |

We follow [responsible disclosure](https://cheatsheetseries.owasp.org/cheatsheets/Vulnerability_Disclosure_Cheat_Sheet.html): we ask that you give us a reasonable amount of time to fix the issue before any public disclosure.

---

## Scope

The following are **in scope**:

- Authentication and authorization flaws
- SQL injection / NoSQL injection
- Remote code execution
- Server-Side Request Forgery (SSRF)
- Cross-Site Scripting (XSS) in the chatbot widget or dashboard
- Exposed secrets or API keys in the repository
- Improper Stripe webhook validation
- Privilege escalation between user accounts/domains
- Data exposure via Prisma queries

The following are **out of scope**:

- Vulnerabilities in third-party services (Clerk, Stripe, OpenAI, Pusher, Uploadcare)
- Issues already reported in open issues
- Theoretical vulnerabilities without a practical attack path
- Issues in outdated or unsupported dependency versions that you haven't verified affect the current `main`

---

## Security Best Practices for Self-Hosters

If you are self-hosting Kaia, please follow these guidelines:

1. **Never commit `.env`** — add it to `.gitignore` (already done by default).
2. **Rotate all secrets** after any suspected exposure.
3. **Keep dependencies updated** — run `bun update` or use Dependabot.
4. **Enable Stripe webhook signature verification** — ensure `STRIPE_WEBHOOK_SECRET` is set.
5. **Use HTTPS** — never run Kaia over plain HTTP in production.
6. **Restrict database access** — use a dedicated PostgreSQL user with minimum privileges.
7. **Use environment-specific Clerk instances** — separate dev and production Clerk apps.

---

## Acknowledgements

We are grateful to everyone who responsibly discloses security issues to us. Significant contributors will be credited in the release notes and in this file.

---

_This policy is maintained by [Andrea D'Ambrosio](https://github.com/andrebuilds)._
