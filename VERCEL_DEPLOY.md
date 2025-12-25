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

Local validation:
- npm install
- npm run build
- confirm `build/` folder exists and contains `index.html` and `assets/`.

Contact:
- If you run into a specific error during Vercel builds, paste the build logs and I can help debug further.
