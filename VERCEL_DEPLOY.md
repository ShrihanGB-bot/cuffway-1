Vercel deployment notes

This repository is a Vite + React app configured to output into the `build` directory.

Recommended Vercel settings (importing from GitHub):

- Framework Preset: Other (or leave autodetect)
- Build Command: npm run build
- Output Directory: build
- Install Command: npm install

Notes and troubleshooting:

- The repo includes a `vercel.json` which sets the build to use `@vercel/static-build` and `distDir: build`.
- If Vercel fails to detect the project, set the Framework Preset to "Other" and fill the commands above.
- If you add serverless functions or need rewrites, configure them in `vercel.json` or the Vercel dashboard.
- If builds fail due to devDependencies, ensure Vercel is installing dev deps (leave the default install settings) or move required build deps to `dependencies`.

Environment variables:
- Add any API keys or runtime variables in Project Settings > Environment Variables.

Contact form (Google Apps Script):
- Set a Vercel environment variable named `VITE_GOOGLE_SCRIPT_URL` with the Web App URL you get after deploying the Google Apps Script (see `src/GOOGLE_APPS_SCRIPT_SETUP.md`).
- This will be available in the client as `import.meta.env.VITE_GOOGLE_SCRIPT_URL`.

Local validation:
- npm install
- npm run build
- confirm `build/` folder exists and contains `index.html` and `assets/`.

Contact:
- If you run into a specific error during Vercel builds, paste the build logs and I can help debug further.
