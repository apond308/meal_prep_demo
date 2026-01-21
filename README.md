# Meal Prep Made Simple

A proof of concept website for Jennifer Pond's meal prep coaching business, helping busy families eat nourishing meals with less stress.

## About

This website showcases Jennifer Pond's **Simple 3-Part Meal Prep System** for families:

1. **Prep Ingredients, Not Recipes** - Mix-and-match building blocks
2. **Cook Once, Mix & Match All Week** - Same ingredients, different meals
3. **Same Meals, New Flavors** - Repeat formats, change sauces/spices

## Features

- **Hero Section** - Clear value proposition for busy families
- **Problem/Solution** - Addresses common pain points
- **The 3-Part System** - Core methodology explained
- **Building Blocks** - Proteins, veggies, carbs, sauces formula
- **Blog Section** - Tips, recipes, and inspiration
- **Philosophy** - "Food is Medicine" and "Food is Connection"
- **About Jennifer** - Credentials and personal story
- **Lead Magnet** - Free guide download modal
- **Newsletter Signup** - Email list building
- **Responsive Design** - Works on all devices

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

Simply open `index.html` in your web browser.

## File Structure

```
meal_prep_demo/
├── index.html                        # Main HTML page
├── styles.css                        # All styling
├── app.js                            # JavaScript interactivity
├── run.sh                            # Local server script
├── Meal_Prep_Made_Simple_EBook.md    # Source content document
└── README.md                         # This file
```

## Tech Stack

- HTML5
- CSS3 (Custom properties, Grid, Flexbox)
- Vanilla JavaScript (No frameworks)
- Google Fonts (Playfair Display, Inter)

## Design Choices

- **Warm color palette** - Orange primary (#d97706) for warmth and energy
- **Navy secondary** (#1e3a5f) - Professional and trustworthy
- **Green accents** (#059669) - Health and wellness
- **Playfair Display** - Elegant serif for headings
- **Inter** - Clean sans-serif for body text

## Next Steps (Production)

For a production deployment, consider:
- Email marketing integration (ConvertKit, Mailchimp, etc.)
- Blog CMS (Contentful, Sanity, or static site generator)
- Analytics (Google Analytics, Plausible)
- SEO optimization
- Social media integration
- Testimonials section
- Actual eBook PDF delivery system
