Sechaba Leotlela 
ST10523992

# RugbyPro Equipment Store Website

## Project Overview

RugbyPro Equipment Store is a retail website project created for a rugby equipment business based in South Africa. The website allows customers to learn about the organisation, view available rugby products, submit enquiries, and access contact information.

The purpose of this project is to create a simple, user-friendly and responsive online platform for rugby players, teams, schools, and supporters.

---

## Organisation Information

- **Organisation Name:** RugbyPro Equipment Store
- **Organisation Type:** Retail Business
- **Industry:** Sports Equipment
- **Location:** East Rand (Head Office) and Cape Town (Branch), South Africa

RugbyPro provides rugby equipment including rugby balls, boots, jerseys, protective equipment, and training accessories.

---

## Website Goals

- Create an online presence for RugbyPro Equipment Store.
- Allow customers to view rugby products.
- Provide product information and pricing.
- Allow customers to submit enquiries.
- Improve communication with customers.

---

## Target Audience

- Rugby players
- Rugby clubs
- Schools
- Coaches
- Parents purchasing equipment
- Rugby supporters

---

## Website Pages

| File | Purpose |
|---|---|
| `index.html` | Home — hero, featured products, why choose RugbyPro |
| `about.html` | About Us — history, mission, vision, values, team members |
| `products.html` | Products — 5 product categories with images and prices |
| `enquiry.html` | Product enquiry form |
| `contact.html` | Contact information, two branches, embedded map, contact form |

---

## Technologies Used

- **HTML5** — page structure and content
- **CSS3** — styling, layout, responsive design
- **JavaScript** — planned for later stages

**Tools:**
- Visual Studio Code
- GitHub
- Google Fonts (Oswald + Roboto)
- Squoosh (image compression)
- Unsplash / Pexels (source images)

---

## Project Structure

```

RugbyPro-Equipment-Store/
├── index.html
├── about.html
├── products.html
├── enquiry.html
├── contact.html
├── README.md
├── css/
│   └── style.css
├── images/
│   └── (hero, product and logo images)
├── js/
├── research/
└── screenshots/


## Design

### Colour Scheme

| Colour | Hex | Purpose |
|---|---|---|
| Dark Green | `#0d3b2e` | Primary brand colour (header) |
| Green | `#14563f` | Secondary headings |
| Gold | `#d4af37` | Accent (borders, hovers, buttons) |
| Black | `#111111` | Navigation and footer |
| White | `#ffffff` | Content background |

### Typography

- **Oswald** — headings, navigation, buttons, brand text (condensed, sporty)
- **Roboto** — body text (clean, readable)

Typographic scale: `1rem → 1.3rem → 1.8rem → 2.5rem`

### Breakpoints

- **Desktop** — 769px and up
- **Tablet** — 481px to 768px
- **Mobile** — 480px and below

### Responsive Design

The website uses CSS Grid and Flexbox for layout. Media queries apply different styles at each breakpoint:
- Navigation stacks vertically on mobile
- Product, team and location grids go from 3 columns → 2 columns → 1 column
- Font sizes, padding and button sizes are scaled down for mobile

### Responsive Images

- The **hero image** uses `srcset` and `sizes` to serve three resolutions (800w, 1400w, 2000w) based on viewport width.
- The **rugby ball product card** uses the `<picture>` element with a media query to serve a mobile-specific crop on screens 480px and narrower.

---

## Screenshots

### Desktop (1440px)

![Desktop homepage view](screenshots/desktop-home.png)

### Tablet (768px)

![Tablet homepage view](screenshots/tablet-home.png)

### Mobile (375px)

![Mobile homepage view](screenshots/mobile-home.png)

---

## Changelog

### Version 1.0 — Part 1

- Created project folder and folder structure (css, images, js, research)
- Created five HTML pages: index, about, products, enquiry, contact
- Added navigation menu linking all pages
- Added basic content to each page
- Added enquiry and contact forms
- Created README

### Version 1.1 — Part 2

- Created and linked `css/style.css` as the external stylesheet
- Added RugbyPro colour scheme using CSS variables (dark green, green, gold, black, white)
- Applied a CSS reset (`* { margin: 0; padding: 0; box-sizing: border-box; }`)
- Applied typography using Google Fonts (Oswald for headings, Roboto for body)
- Styled header, navigation, main content, forms, buttons, and footer
- Added interactive states: `:hover`, `:focus` and `:active` across nav, buttons, cards and form fields
- Rebuilt the homepage with a full-width **hero section**, call-to-action button, and **5-card product grid**
- Rebuilt the products page with 5 product cards, images, descriptions and prices
- Added **Our History** and **Meet the Team** sections to the About page
- Added a **second branch location** (Cape Town) and an **embedded Google Map** to the Contact page
- Polished both forms with HTML5 validation (`required`, `minlength`, `pattern`, `type="email"`) and required-field indicators
- Added responsive media queries at 768px and 480px
- Added responsive images (`srcset`, `sizes`, and `<picture>` element)
- Moved project files into a flat, correct folder structure

### Part 1 Feedback

*Part 1 feedback was not available at the time of submission. Any changes made in response to Part 1 feedback will be documented here once received.*

---

## References

- Google Fonts — https://fonts.googleapis.com
- MDN Web Docs. *Responsive web design*. https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design
- Nielsen, J. (1994). *10 Usability Heuristics for User Interface Design*. Nielsen Norman Group. https://www.nngroup.com/articles/ten-usability-heuristics/
- Pexels — https://www.pexels.com
- Squoosh — https://squoosh.app
- Unsplash — https://unsplash.com
- W3C. *Web Content Accessibility Guidelines (WCAG) 2.1*. https://www.w3.org/TR/WCAG21/

---

## Version History

| Version | Date | Description |
|---|---|---|
| 1.0 | Part 1 | Basic HTML structure, navigation, forms |
| 1.1 | Part 2 | Complete CSS design, responsive layout, images |
```

