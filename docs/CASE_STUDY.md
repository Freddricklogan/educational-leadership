# Case Study — Educational Leadership & School Improvement

**Repository:** [educational-leadership](https://github.com/Freddricklogan/educational-leadership) · **Live demo:** [freddricklogan.github.io/educational-leadership](https://freddricklogan.github.io/educational-leadership/) · **Author:** Freddrick Logan

---

## 1. Who has this problem

New principals and assistant principals, aspiring district leaders in a certification or doctoral programme, the faculty who prepare them, and the central-office staff and consultants — I am one — asked to help a school improve on a board's timeline. Everyone in that room has read the theories. The habits that make them useful — reframing a problem, testing a change small before scaling it, breaking every result out by group — are rarely practised.

## 2. The problem, as a scenario

A first-year principal inherits a spike in ninth-grade chronic absenteeism. She rewrites the attendance policy — a structural fix — and announces it at a staff meeting. Teachers hear it as blame; the union asks why they were not consulted; the numbers do not move. Average attendance improves by spring, so she reports success. Disaggregated, the gain sits entirely with students who were rarely absent; the chronically absent group is worse. A superintendent asks what was tested, with whom, for how long, and what was learned. There is a policy, a memo and a chart; there is no test and no learning.

## 3. What it costs to leave it alone

A year in which the students the policy was meant for received nothing, and a leader who now believes the problem is the students. I will not put a figure on it — attendance funding and staff time differ by state and district. What is certain is that each skipped step — reframing the resistance, a small PDSA test, an equity audit of who benefited — is teachable in days.

## 4. The approach, and the alternative I rejected

I wrote a twelve-section resource that puts those habits in the reader's hands. A four-frame explorer after Bolman and Deal shows what the structural, human-resource, political and symbolic frames each assume and what move each suggests, so the same resistance can be read four ways. A PDSA stepper walks one change idea for ninth-grade absenteeism through Plan, Do, Study and Act with a hint at each phase and a driver diagram beside it. An equity audit after Skrla, McKenzie and Scheurich scores the practices a school actually does — disaggregation, discipline monitoring, advanced-course access — and names where to start. Around them sit Leithwood's core practices, six leadership models, improvement science and professional learning communities, data-informed decisions, the politics and law of K-12 education, structural inequity and the learning organization. The resource then joined the shared Learning Resource Kit: Executive Shell, collapsible sections with saved progress, a five-question quiz written from this content that records xAPI statements locally, and a print layout.

The alternative I rejected was a theory survey organised by author. Students already own that book. What they lack runs from a concrete problem to a frame, a test and an audit, and back.

## 5. What the code does today

Real: the authored content across twelve sections with an executive summary and a glossary of foundational works; three working widgets — the four-frame explorer, the PDSA stepper, the equity audit — moved from inline script to a module without rewriting; the kit layer with progress, quiz, xAPI 1.0.3 statements and print; a strict content-security policy with no inline script or style; tests that validate the quiz configuration and mount the kit against the real page.

Simulated: the absenteeism case is a composite for teaching, not a school's data. The law section is an orientation with leading cases, not legal advice, and says so.

Worth knowing: the audit's weights are a pedagogical device, not a validated instrument; reading time is words at 230 per minute; progress counts a section as opened, not read.

## 6. Evidence

Measured locally with the commands CI runs: 7 tests passing across two files — quiz validity, page invariants, and the vendored kit mounted on this page; coverage 79.84% of all files with `src/config.js` at 100% and the vendored kit at 78.75% from this page's smoke test; ESLint and html-validate clean. The conversion audit records 75 inline style attributes replaced by 21 classes, 26 custom properties namespaced, 6 buttons typed, 4 tables given a body and a `<main>` landmark added. Headless Chrome on the converted page: zero console errors; the third frame tab activates the political frame, the PDSA stepper advances two phases to Study, three audit practices score 34% Emerging with a named starting point; Expand all opens 12 of 12 sections and the KPI strip follows; no horizontal scroll at 1280 or 400 pixels.

## 7. What it would take to run this in production

As a public resource it is in production now. For a preparation programme it needs the kit's statements sent to the institution's learning record store — endpoint, credentials, consent notice, identified actor, one origin added to the content-security policy — and, if grades depend on it, a second reader for the questions. Days of integration; the content does not change.

## 8. Limits and next steps

One case; a PDSA stepper with a fixed change idea; an audit without a way to save or export results; law limited to federal constitutional cases. Next: a second case from a middle school, an editable PDSA planner that exports a one-page test plan, a state-law appendix chosen by the reader, and per-section questions in place of one quiz at the end.

## 9. Who should look at this

**Hiring manager:** evidence that I teach leadership as improvement practice, and package it to a standard an institution can review and adopt.
**Consulting client:** a working outline of how I would structure a school-improvement engagement — frames, small tests, equity audit — before the first data meeting.
**Engineer:** read `src/page.js` for the PDSA stepper's state and `tests/kit.test.js` for the kit mounted against this page's real markup.
