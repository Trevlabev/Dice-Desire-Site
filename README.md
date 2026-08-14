# Dice & Desire — GitHub Pages Site

Static, dependency-free website for **Dice & Desire — Role Play After Dark**.

## Publish with GitHub Pages

1. Create a GitHub repository (for example `dice-and-desire`).
2. Upload this repository's files to the repository root.
3. In GitHub, open **Settings → Pages**.
4. Under **Build and deployment**, choose **GitHub Actions**.
5. The included workflow will deploy the static site automatically on pushes to `main`.

## Local preview

You can open `index.html` directly, or run any simple local web server, for example:

```bash
python -m http.server 8080
```

Then open `http://localhost:8080`.

## Custom domain

Once a domain is chosen, add it under **Settings → Pages → Custom domain**. GitHub can create/manage the `CNAME` entry in the repository once configured.

## Site structure

- `index.html` — complete public site
- `assets/` — brand assets, mood stills, and embedded project overview video
- `.github/workflows/deploy-pages.yml` — GitHub Pages deployment
- `.nojekyll` — prevents Jekyll processing
