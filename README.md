# Educational Leadership & School Improvement: a graduate-level guide to leading K-12 improvement, with a four-frame explorer, a PDSA stepper and an equity audit

[![CI/CD](https://github.com/Freddricklogan/educational-leadership/actions/workflows/deploy.yml/badge.svg)](https://github.com/Freddricklogan/educational-leadership/actions/workflows/deploy.yml)
[![Coverage](https://img.shields.io/badge/coverage-79.84%25-green)](#5-getting-started--verification)
[![Security (CodeQL)](https://github.com/Freddricklogan/educational-leadership/actions/workflows/codeql.yml/badge.svg)](https://github.com/Freddricklogan/educational-leadership/actions/workflows/codeql.yml)
[![License MIT](https://img.shields.io/badge/license-MIT-blue)](LICENSE)
[![Live Demo](https://img.shields.io/badge/live%20resource-online-brightgreen)](https://freddricklogan.github.io/educational-leadership/)

## 1. Executive Summary & Business Impact

**Problem statement.** New principals and aspiring district leaders arrive with a leadership theory, a data dashboard and a strategic plan, and are surprised by the same things every year: a change that met resistance the org chart did not predict, a spike in absenteeism nobody tested a fix for, an achievement gap that looked fine in the average. The frameworks are known; the habit of reframing, testing small and disaggregating is not built.

**Solution & value delivered.** A twelve-section resource that moves from Leithwood's core practices through Bolman and Deal's four frames, six leadership models, improvement science and professional learning communities, data-informed decision making, the politics and law of K-12 education, systemic inequity and the learning organization — with a frame explorer that shows each lens's assumptions and moves, a PDSA stepper that walks one change idea through a ninth-grade absenteeism problem, and an equity audit after Skrla, McKenzie and Scheurich that scores a school's actual practices. The page is one of ten
resources built on the shared
[Learning Resource Kit](https://github.com/Freddricklogan/learning-resource-kit):
an Executive Shell with live counts, collapsible sections whose progress is
saved in the reader's browser, a five-question quiz written for this
resource that records xAPI 1.0.3 statements locally, and a print layout that
opens every section. Nothing leaves the page; the content-security policy
forbids network calls.

**[→ Read the full case study](docs/CASE_STUDY.md)**

| Outcome | How this repo delivers it |
| --- | --- |
| A resource, not a slide deck | 12 sections (16 minutes at 230 wpm) with an executive summary first: leadership as improvement, four organizational frames, six leadership models, improvement science, PDSA cycle, data-informed decisions, politics of education, education law, systemic inequity, equity audit, learning organization, glossary |
| Interactive where it matters | 3 authored widgets (see §4) kept intact through the conversion and verified under a strict CSP |
| Evidence of learning | Quiz answers and completion recorded as xAPI statements with an anonymous actor; inspectable on the page |
| Reviewable by an institution | No inline script or style, typed buttons, table bodies, a `<main>` landmark; html-validate and ESLint in CI |
| Usable everywhere | Keyboard-operable sections, deep links that open their section, print stylesheet, no horizontal scroll at 400 px |

## 2. Demonstrated Competencies & Technical Skills

- **EdTech & Human-Centered Design** — practice before theory: the frame tabs, PDSA stepper and equity audit each make the reader act on a concrete school problem before the page names the framework; the law section is an orientation with cases, not advice; a glossary of foundational works closes the loop.
- **Systems Architecture & CS** — authored content in `index.html`, its
  widgets in `src/page.js`, its styles in `src/page.css` under the `--lr-`
  namespace; the kit vendored as `src/lr-kit.js`; config and tests that
  fail CI if a quiz question is malformed.
- **Cybersecurity & Compliance** — `default-src 'none'; script-src 'self';
  connect-src 'none'`; no third-party script; Trivy, npm audit and CodeQL in
  CI.
- **Data Science & AI** — reading time and section counts computed from the
  content at load; scores recorded as scaled results, never claimed.

## 3. System Architecture & Data Flow

```mermaid
flowchart LR
  subgraph TB1["Trust Boundary: GitHub Pages (static)"]
    HTML["index.html<br/>authored content · 12 sections"]:::client
    PAGE["src/page.js + src/page.css<br/>3 widgets · --lr- tokens"]:::client
    KIT["src/lr-kit.js + lr-kit.css<br/>shell · progress · quiz · xAPI · print"]:::service
    CFG["src/config.js<br/>title · tagline · 5 questions"]:::data
  end
  subgraph TB2["Trust Boundary: the reader's browser"]
    LS["localStorage<br/>lr:educational-leadership:progress · :xapi · lr:actor"]:::data
  end
  HTML --> PAGE
  CFG --> KIT
  HTML --> KIT
  KIT -->|"CSP: connect-src 'none'"| LS
  classDef client fill:#1f2a44,stroke:#58A6FF,color:#e6edf3
  classDef service fill:#14213d,stroke:#3fb950,color:#e6edf3
  classDef data fill:#1b2a1f,stroke:#3fb950,color:#e6edf3
```

## 4. Technical Highlights & Engineering Decisions

### The authored widgets

| Widget | What it does |
| --- | --- |
| Four-frame explorer | Tabs for the structural, human-resource, political and symbolic frames, each with its assumptions, roots and the leader's move |
| PDSA stepper | Walks a change idea for ninth-grade chronic absenteeism through Plan, Do, Study and Act with a hint at each phase, beside a driver diagram |
| Equity audit | Weighted checklist of equity practices — disaggregation, discipline monitoring, advanced-course access, teacher-quality distribution — with a bar and an Emerging / Developing / Strong verdict |

### ADR-1 — Convert, do not rewrite

**Context.** The original was one hand-authored file: rich content and
bespoke widgets, but inline styles and scripts that no content-security
policy or validator accepts.

**Decision.** The kit's converter moved the stylesheet and scripts out of
the page, replaced 75 inline style attributes with
21 generated classes, namespaced 26 custom properties, typed
6 buttons, gave 4 tables a body and wrapped the content in a `<main>` landmark. The content and
widget code were not rewritten; `AUDIT.md` lists every change.

**Consequence.** The page passes html-validate under a strict CSP with its
original behaviour intact, and the change is auditable line by line.

### ADR-2 — One quiz, one attempt, standard statements

**Context.** The page's own self-checks vanish on reload and record nothing.

**Decision.** Five questions written from this resource's content live in
`src/config.js`; the kit accepts a single attempt per question, shows the
explanation, and records xAPI *answered* and *completed* statements with a
scaled score, kept in the browser and shown as JSON.

**Consequence.** The score reflects what the reader knew before the
explanation, and an institution can see the exact statements a learning
record store would receive.

### ADR-3 — Progress means opened

**Context.** Scroll depth is easy to measure and says little about reading.

**Decision.** A section counts as opened when its collapsed state is
removed — by click, keyboard, deep link or "Expand all" — and an
*experienced* statement is recorded once.

**Consequence.** The KPI strip is conservative: 12 sections, and the count
only rises when the reader opens one.

## 5. Getting Started & Verification

**Prerequisites.** Node 22 for the checks; the page itself needs only a
browser.

```bash
git clone https://github.com/Freddricklogan/educational-leadership.git
cd educational-leadership
npm ci
npm run check     # eslint → html-validate → vitest
npx serve .       # open http://localhost:3000
```

**Verification — the numbers this repository actually produced:**

```bash
npm run lint      # 0 problems
npm run validate  # html-validate index.html: clean
npm run coverage  # 7 passed; All files 79.84% (config.js 100%, vendored lr-kit.js 78.75%)
```

| Check | Result |
| --- | --- |
| Unit tests (Vitest, jsdom) | **7 passed / 7** across 2 files — quiz validity, page invariants, the kit mounted on this page |
| Coverage | All files **79.84%** statements: `src/config.js` 100%, vendored `src/lr-kit.js` 78.75% from this page's smoke test (the kit's own suite covers it at 99%) |
| ESLint, html-validate | clean |
| Conversion audit | 75 inline styles → 21 classes · 26 tokens namespaced · 6 buttons typed · 4 tables fixed |
| Headless Chrome smoke | **0 console errors**; all 3 widgets exercised; sections opened 12/12 on Expand all; no horizontal scroll at 1200 or 400 px |

## 6. Live Demo & Production Showcase

**<https://freddricklogan.github.io/educational-leadership/>**

**30-second guided walkthrough.** Press **Take the 30-second tour**.

1. **A graduate-level resource, not a slide deck** — 12 sections, about
   16 minutes of reading.
2. **Open a section** — the first section opens and the count rises.
3. **Check your understanding** — five questions on reframing, PDSA, data types, student speech and structural inequity.
4. **Your statements, inspectable** — the xAPI JSON recorded in this browser.

The quiz covers:
- reframing and the structural frame
- why PDSA tests are small and fast
- Bernhardt's four data types
- Tinker and the limits on student speech
- how inequity is structured

Part of the resource hub at <https://freddricklogan.github.io/resources/>.
