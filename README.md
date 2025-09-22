# Watt Compare

UK's smartest business energy comparison platform - Compare deals from 35+ suppliers instantly.

## Features

- **Smart Comparison Engine**: AI-powered comparison of 35+ energy suppliers
- **Real-Time Pricing**: Live rates updated every 60 seconds
- **Instant Results**: Get comparison results in under a minute
- **Price Analytics**: Market trend analysis and best time to switch
- **Auto-Switch Service**: Automated switching to better deals
- **Contract Monitoring**: Alerts for better deals and contract end dates

## Tech Stack

- React 18 with Vite
- Tailwind CSS for styling
- Framer Motion for animations
- React Router for navigation
- React Helmet for SEO
- Axios for API calls

## Setup Instructions

1. Install dependencies:
```bash
npm install
```

2. Configure Google Sheets Integration:
   - Create a new Google Sheet
   - Open Script Editor and paste the code from `GOOGLE_APPS_SCRIPT.gs`
   - Deploy as Web App and get the URL
   - Update `src/utils/googleSheetsIntegration.js` with your script URL

3. Run development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## Deployment

The site is configured for Netlify deployment:

```bash
npm run deploy
```

## Color Scheme

- **Primary**: Blue (#0967d2) - Trust and reliability
- **Accent**: Amber (#f59e0b) - Action and urgency
- **Success**: Green (#22c55e) - Savings and positive outcomes

## Key Pages

- Home - Comparison calculator and value proposition
- Compare Services - Individual comparison pages for each utility
- Get Quote - Quick comparison form
- Price Analytics - Market insights and trends
- Switching Guide - Step-by-step switching process
- Contact - Support and assistance

## Comparison Features

- Side-by-side supplier comparison
- Hidden fee detection
- Green energy filter
- Multi-site comparison tool
- Contract end date reminders
- Price match guarantee

## SEO Optimization

- Unique meta titles and descriptions per page
- Schema.org structured data for comparison service
- XML sitemap
- Fast loading with code splitting
- Mobile-responsive design
- Canonical URLs

## Performance

- Lazy loading for all routes
- Optimized images
- Code splitting by route
- CSS purging in production
- Browser caching headers
- Sub-60 second comparison time

## Contact

For support or customization:
- Phone: 0333 150 8745
- Email: compare@wattcompare.co.uk
- Address: Compare House, 200 Tech Quarter, London EC2A 3DT