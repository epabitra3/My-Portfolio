# Deploy to epabitra.com via GitHub Actions

## What’s set up

- **Workflow:** `.github/workflows/deploy.yml` builds the Vite/React app and deploys the `dist/` folder to GitHub Pages on every push to `main`.
- **Custom domain:** `public/CNAME` contains `epabitra.com` so the built site is served for your domain.
- **SPA routing:** `public/404.html` and redirect logic in the app handle direct links (e.g. `epabitra.com/blog.html`) so React Router works correctly.

## 1. Push to GitHub

```bash
git add .
git commit -m "Add GitHub Actions deploy and custom domain setup"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

(If the repo already exists, use `git push origin main`.)

## 2. Enable GitHub Pages from Actions

1. Open your repo on GitHub → **Settings** → **Pages**.
2. Under **Build and deployment**:
   - **Source:** choose **GitHub Actions** (not “Deploy from a branch”).
3. Save. No need to pick a branch or folder; the workflow deploys the built site.

## 3. Set custom domain

1. In **Settings** → **Pages**, find **Custom domain**.
2. Enter: `epabitra.com`
3. Click **Save**.
4. If GitHub shows **DNS check**, wait until it turns green (DNS can take a few minutes to hours).

## 4. DNS at your domain registrar

At the place where you manage **epabitra.com** (e.g. GoDaddy, Namecheap, Cloudflare), add:

**Option A – Root domain (epabitra.com):**

| Type | Name/Host | Value/Target        |
|------|-----------|----------------------|
| A    | @         | 185.199.108.153      |
| A    | @         | 185.199.109.153      |
| A    | @         | 185.199.110.153      |
| A    | @         | 185.199.111.153      |

**Option B – www (www.epabitra.com):**

| Type  | Name/Host | Value/Target        |
|-------|-----------|----------------------|
| CNAME | www       | YOUR_USERNAME.github.io |

(Replace `YOUR_USERNAME` with your GitHub username.)

- If you use **only** the root domain, use Option A (and keep `CNAME` as `epabitra.com` in the repo).
- If you want **www** as well, add Option B and in GitHub Pages you can add `www.epabitra.com` and choose “Redirect to apex” or keep both.

GitHub’s official doc: [Configuring a custom domain for your GitHub Pages site](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).

## 5. HTTPS (optional)

After the custom domain is set and DNS is correct, GitHub will offer **Enforce HTTPS** in **Settings** → **Pages**. Turn it on when it’s available.

## 6. Check the deployment

- **Actions:** Repo → **Actions** → “Deploy to GitHub Pages”. Each push to `main` runs the workflow; when it’s green, the site is updated.
- **URLs:**  
  - Before DNS/custom domain: `https://YOUR_USERNAME.github.io/YOUR_REPO/`  
  - After custom domain: `https://epabitra.com`

If the site is at `https://username.github.io/repo/` (subpath), tell me and we can set the Vite `base` for that path.
