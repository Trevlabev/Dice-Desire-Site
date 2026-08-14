# Dice & Desire — Role Play After Dark

Static public-facing project site for **Dice & Desire**, built for GitHub Pages.

## What is included

- Responsive one-page site
- 18+ localStorage age gate
- Sticky anchor navigation
- Working-format / production-flow section
- Cast placeholder section
- Recruitment overview
- Planned audience-support goals
- Boundary philosophy
- FAQ accordion
- Open Graph / social card SVG
- GitHub Pages deployment workflow
- No backend, no API keys, no build step required

## Deploy to GitHub Pages

1. Create a **public GitHub repository** (for example `dice-and-desire`).
2. Upload all files in this folder to the repository root, preserving `.github/workflows/deploy-pages.yml`.
3. In GitHub, open **Settings → Pages**.
4. Under **Build and deployment**, choose **GitHub Actions** as the source.
5. Push to `main` (or run the workflow manually from the Actions tab).
6. GitHub will publish the site at the Pages URL shown by the deployment workflow.

Because all paths are relative, the site works both at a custom domain and at a project URL such as `username.github.io/dice-and-desire/`.

## Local preview

Open `index.html` directly, or run a simple local server such as:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Editing

The site is intentionally dependency-free. Main files:

- `index.html` — content and section structure
- `styles.css` — design system and responsive layout
- `app.js` — age gate, mobile nav, reveal animations

## Project state

This site deliberately labels unresolved details as **working**, **planned**, or **in development** rather than inventing cast names, release dates, pricing, social handles, or finalized legal/business terms.
