# FreshPrep - Meal Prep Service Website

A proof of concept website for a meal prep service company featuring a blog-style layout and subscription plans.

## Features

- **Hero Section** - Eye-catching introduction with key statistics
- **Blog Posts** - Latest articles with featured post highlighting
- **Subscription Plans** - Three-tier pricing (Starter, Balance, Performance)
- **Dietary Options** - Support for various dietary preferences
- **Newsletter Signup** - Email subscription for updates
- **Responsive Design** - Works on desktop, tablet, and mobile

## Running Locally

### Option 1: Using the run script (Recommended)

```bash
./run.sh
```

Then open http://localhost:8000 in your browser.

### Option 2: Using Python directly

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000 in your browser.

### Option 3: Open directly

Simply open `index.html` in your web browser. Note: Some features may work better when served via HTTP.

## File Structure

```
meal_prep_demo/
├── index.html    # Main HTML page
├── styles.css    # All styling
├── app.js        # JavaScript interactivity
├── run.sh        # Local server script
└── README.md     # This file
```

## Tech Stack

- HTML5
- CSS3 (Custom properties, Grid, Flexbox)
- Vanilla JavaScript (No frameworks)
- Google Fonts (Inter)

## Screenshots

The website includes:
- Navigation with mobile menu
- Hero section with stats
- Blog grid with featured post
- Three-tier pricing cards
- About section with features
- Newsletter signup
- Footer with links

## Next Steps (Production)

For a production deployment, consider:
- Backend integration for form submissions
- Database for blog posts and subscriptions
- Payment processing for plans
- Email service integration
- CMS for content management
