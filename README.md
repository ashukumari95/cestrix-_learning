# Cestrix Learning — Premium B2B SaaS Sales & Marketing Website + AI SEO Engine

[![React](https://img.shields.io/badge/React-19-blue.svg)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8-purple.svg)](https://vite.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-CSS-teal.svg)](https://tailwindcss.com/)
[![Gemini](https://img.shields.io/badge/Gemini_API-3.8_Flash-orange.svg)](https://aistudio.google.com/)

An enterprise-grade B2B SaaS sales & marketing platform built for **Cestrix Learning** — the Operating System for Modern Coaching Institutes, Competitive Exam Academies, and Multi-Branch Education Franchises.

---

## 🌟 Architecture & Highlights

### 1. Enterprise SaaS Design Direction
- **Brand Palette:**
  - Primary: Deep Trust Blue (`#173F8A`)
  - Secondary: Navy (`#0F172A`)
  - Accent: Modern Teal (`#0D9488`)
  - Background: Crisp White (`#FFFFFF`) & Subtle Slate (`#F8FAFC`)
  - Borders: Refined Slate (`#E2E8F0`)
- **Typography:** Modern typography stack with Google Fonts Inter & Plus Jakarta Sans.
- **Aesthetic Inspiration:** Built to international SaaS standards inspired by Linear, Stripe, and Vercel.

### 2. Complete 13-Section Homepage
1. **Hero:** Eyebrow badge, headline, dual CTAs, subtle trust indicators, and an interactive layered dashboard showcase.
2. **Problems We Solve:** 6 before-vs-after comparison cards addressing manual attendance, scattered records, unorganized tests, and fee friction.
3. **All-in-One Platform:** 12 module cards (Student Records, Batches, Faculty, Biometric Attendance, LMS, CBT Tests, Rankings, Fee Receipts, WhatsApp Automation, AI Learning, Multi-Branch, White-Label Apps).
4. **Interactive Product Showcase:** 7 realistic tabbed dashboard mockups with live demo data.
5. **Role-Based Platform:** Distinct interfaces for Coaching Admin, Teachers, Students, and Parents.
6. **AI-Powered Learning:** Interactive step-by-step mathematical reasoning simulator, photo doubt solver preview, and weakness analysis.
7. **White-Label Mobile Apps:** Live brand customizer previewing custom institute colors, logos, and app store presence.
8. **How It Works:** 4-step horizontal/vertical deployment timeline.
9. **Solutions:** Specialized cards for single-center, multi-branch, JEE/NEET, and tuition centers.
10. **Pricing Preview:** Transparent Starter, Growth, and Enterprise tiers with custom commercial inquiry actions.
11. **FAQ Accordion:** 10 accessible questions with honest, detailed institutional answers.
12. **Final CTA:** Dark navy conversion section.
13. **Enterprise Footer:** 4-column link directory with operational status indicator and ISO 27001 readiness badging.

### 3. Dedicated Institutional Pages
- `/features` — Deep dive into all 12 modules with operational workflows
- `/solutions` — Overview of educational institutional architectures
- `/solutions/coaching-institutes` — Architecture tailored for independent single-center leaders
- `/solutions/multi-branch` — Centralized governance and data isolation for franchise networks
- `/ai-learning` — Specialized AI mathematics doubt solver and adaptive practice engine
- `/white-label-apps` — Branded iOS & Android mobile application studio
- `/pricing` — Comprehensive tier comparison matrix and licensing options
- `/about` — Mission, educational philosophy, and data isolation principles
- `/contact` — Sales and support desks directory
- `/book-demo` — Fully validated lead enquiry form with date picker and instant submission feedback
- `/admin/leads` — Protected internal sales CRM with pipeline statuses (`New`, `Contacted`, `Demo Scheduled`, `Demo Completed`, `Qualified`, `Converted`, `Lost`)
- `/privacy` & `/terms` — Compliant policy documentation

---

## 🤖 Section 13: AI-Powered SEO Engine & Search Intelligence

Accessible at `/seo-engine`, this is an intelligent search engine optimization suite featuring:

1. **LLM Provider Architecture:**
   - Provider: **Google AI Studio (Gemini API)**
   - Recommended Models: `gemini-3.8-flash` (default), `gemini-3.5-flash-lite`, `gemini-3.1-pro-preview`
   - Server-side API integration protecting API keys from frontend exposure
   - Automatic fallback to verified deterministic expert rules when offline or before adding an API key.

2. **On-Page SEO Analyzer:**
   - Inspects target URLs or HTML content
   - Deterministic checks: Title tag width/length, meta description character count, single H1 enforcement, canonical tags, image alt text, and JSON-LD structured schemas (`SoftwareApplication`, `Organization`, `FAQPage`)
   - LLM reasoning identifying evidence, priority levels (Critical, High, Medium, Low), and recommended replacements.

3. **Keyword Research & Intent Clustering:**
   - Classifies search phrases into **Informational, Commercial, Transactional, and Navigational** intents
   - Semantic cluster mapping to relevant site pages
   - Cannibalization risk detection and content brief outlines
   - Strict adherence to search data integrity (external volumes marked as unavailable rather than fabricated).

4. **AI Content Optimization Studio:**
   - Generates high-CTR title variations and meta descriptions
   - Heading structure optimization (H1, H2, H3)
   - Genuine user FAQ generation for rich snippet schema
   - Readability analysis with plain English scoring.

5. **Technical SEO Crawler:**
   - Deterministic internal crawler checking HTTP status codes (200, 301, 404), redirect chains, canonical validation, and sitemap/robots.txt integrity
   - **SSRF Protection:** Strictly guards against loopback (`127.0.0.1`, `localhost`) and private network IP ranges.

6. **Search Performance & Core Web Vitals:**
   - Displays Google Search Console performance data (Clicks, Impressions, CTR, Positions, landing page queries)
   - Core Web Vitals metrics (LCP, INP, CLS, FCP) with clear target thresholds.

7. **Audit Reports & Export:**
   - Compiles comprehensive multi-category executive summaries, technical audit scores, and prioritized action plans with printable PDF export.

---

## 🚀 Quickstart & Local Development

### Prerequisites
- Node.js >= 20.x
- npm >= 10.x

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment
Copy the example environment file:
```bash
cp .env.example .env
```
*(Optional: Add your `GEMINI_API_KEY` from [Google AI Studio](https://aistudio.google.com/) for live Gemini processing. If omitted, the engine uses the verified heuristic engine).*

### 3. Run Development Servers
Start both the backend API server and Vite frontend:
```bash
# Terminal 1: Backend API Server
npx tsx server/index.ts

# Terminal 2: Frontend Vite Server
npm run dev
```

Visit **`http://localhost:5174/`** in your browser.

---

## 🛠️ REST API Endpoints

| Endpoint | Method | Description |
|---|---|---|
| `/api/health` | `GET` | Service status and timestamp |
| `/api/leads` | `POST` | Submit demo inquiry with server-side validation |
| `/api/leads` | `GET` | Retrieve sales pipeline leads and aggregate metrics |
| `/api/leads/:id` | `PATCH` | Update lead status (`New`, `Demo Scheduled`, `Qualified`, etc.) |
| `/api/seo/config` | `GET / POST` | Read or update active Gemini model and API key status |
| `/api/seo/analyze-page` | `POST` | Run deterministic and LLM on-page audit |
| `/api/seo/keywords` | `POST` | Generate intent-based keyword clusters and content briefs |
| `/api/seo/content-optimize` | `POST` | Generate high-CTR titles, metas, headings, and FAQs |
| `/api/seo/crawl` | `POST` | Safe technical website crawler with SSRF guard |
| `/api/seo/performance` | `GET` | Retrieve Search Console and Core Web Vitals data |
| `/api/seo/report` | `POST` | Compile full prioritized executive SEO audit report |

---

## ☁️ Deployment on Vercel

1. Push this repository to GitHub or GitLab.
2. In the Vercel dashboard, click **Add New Project** and import the repository.
3. Configure Environment Variables:
   - `GEMINI_API_KEY` = your Google AI Studio API key
   - `GEMINI_MODEL` = `gemini-3.8-flash`
4. Click **Deploy**. The project will build using `vite build` into `/dist` with zero configuration needed.
