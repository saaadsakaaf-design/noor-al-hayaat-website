# Noor Al Hayat Pharmaceutical Industries — v2

Premium responsive React/Vite website for Noor Al Hayat Pharmaceutical Industries.

Pages: Home, Products, About Us, Our Factory, Contact.

Run:
npm install
npm run dev

Deploy:
GitHub + Vercel or Netlify.

Before production, replace demo imagery with approved Noor Al Hayat brand/factory assets and verify all product/regulatory information.

## Current design direction
The homepage follows the approved Noor Al Hayat visual direction:
- Green pharmaceutical corporate palette
- Arabic/English brand treatment
- Top contact bar
- Factory-led hero
- Tablets & Capsules product showcase
- About/quality section
- Factory workflow
- Responsive mobile navigation

### Before public launch
Replace demo imagery and verify:
- Official logo artwork
- Factory photographs/renderings
- Exact factory address
- Product brand names, strengths and pack sizes
- Regulatory/certification claims
- Production capacity and employee/market figures

## Final v4 additions
- Added the supplied Noor Al Hayaat wordmark as `public/assets/noor-al-hayaat-logo.png`.
- Updated the initial portfolio to match the supplied project brochure.
- Added the three-phase production model.
- Added healthcare, economic and community impact sections.
- Kept certification and capacity claims out of the live UI unless verified.


## Build fix
The final build removes the optional lucide-react runtime dependency and uses lightweight local icon components, preventing the Vercel Rollup import error.
