# Deployment Instructions for WATT COMPARE

## GitHub Setup Instructions for Manus AI

### Step 1: Create GitHub Repository
1. Go to https://github.com/new
2. Create a new repository named `watt-compare`
3. Set it as **Private** or **Public** based on your preference
4. Do NOT initialize with README, .gitignore, or license

### Step 2: Push Code to GitHub
Run these commands in your terminal:

```bash
cd "/Users/seanwentz/Desktop/Website Designs/WATT COMPARE"

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit - WATT COMPARE website

- Complete business energy comparison platform
- Company: WATT UTILITIES LIMITED (06702949)
- Contact: 0161 833 8661
- Address: St Ann's House, Manchester, M2 7LP"

# Add your GitHub repository as origin (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/watt-compare.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Netlify Deployment Instructions

### Step 1: Connect to Netlify
1. Go to https://app.netlify.com
2. Click "Add new site" → "Import an existing project"
3. Choose "Deploy with GitHub"
4. Authorize Netlify to access your GitHub account
5. Select the `watt-compare` repository

### Step 2: Configure Build Settings
Netlify should auto-detect these, but verify:
- **Build command:** `npm run build`
- **Publish directory:** `dist`
- **Node version:** 18 (already configured in netlify.toml)

### Step 3: Deploy
1. Click "Deploy site"
2. Wait for the build to complete (usually 2-3 minutes)
3. Your site will be live at a URL like: `https://amazing-name-123.netlify.app`

### Step 4: Custom Domain (Optional)
1. In Netlify site settings, go to "Domain management"
2. Click "Add custom domain"
3. Enter your domain: `wattcompare.co.uk`
4. Follow DNS configuration instructions

## Important Files for Deployment

### Already Configured:
- ✅ `.gitignore` - Excludes node_modules and build files
- ✅ `package.json` - All dependencies and scripts configured
- ✅ `vite.config.js` - Build configuration set
- ✅ `index.html` - Entry point ready
- ✅ All React components and pages

### Build Commands:
- **Development:** `npm run dev` (runs on port 8866)
- **Build:** `npm run build` (creates production build in `dist/`)
- **Preview:** `npm run preview` (preview production build locally)

## Environment Variables (if needed)
No environment variables are currently required for this project.

## Post-Deployment Checklist
- [ ] Verify all pages load correctly
- [ ] Test quote form redirects to https://app.watt.co.uk/company
- [ ] Check all phone numbers show 0161 833 8661
- [ ] Verify company details show WATT UTILITIES LIMITED
- [ ] Test responsive design on mobile devices
- [ ] Verify footer logo displays correctly

## Support
If you encounter any issues during deployment:
1. Check the Netlify build logs for errors
2. Ensure all dependencies are listed in package.json
3. Verify Node version compatibility (18.x recommended)

## Quick Deploy Alternative (Netlify CLI)
If you prefer command line deployment:

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy directly
netlify deploy --prod --dir=dist
```

---

**Note:** This site is configured to redirect all quote-related CTAs to the external app at https://app.watt.co.uk/company