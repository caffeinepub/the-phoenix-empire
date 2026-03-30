# The Phoenix Empire

## Current State
New project — no existing code.

## Requested Changes (Diff)

### Add
- Multi-page e-commerce site: Home, Shop, About, Contact
- Product catalog with 4 categories: Footballs, Boots, Jerseys, Accessories
- Shopping cart with add/remove/quantity management
- Checkout flow with Cash on Delivery (India) — name, address, phone, order summary
- Hero section with tagline "Rise with the Game" and CTA buttons
- Featured products section on homepage
- "Why Choose Us" section
- Customer testimonials section
- Instagram feed preview section
- About page: brand story focused on football passion and ambition
- Contact page: WhatsApp button, Instagram link, contact form
- Mobile-first responsive layout

### Modify
N/A

### Remove
N/A

## Implementation Plan
1. Backend: Product catalog (CRUD), cart management per session/principal, order placement with COD, contact form submission storage
2. Frontend:
   - React Router for multi-page navigation (Home, Shop, About, Contact)
   - Global cart state (React context)
   - Home: Hero, Featured Products, Why Choose Us, Testimonials, Instagram preview
   - Shop: Category filter tabs, product grid, product cards
   - About: Brand story sections
   - Contact: WhatsApp CTA, Instagram link, contact form
   - Cart drawer/modal with checkout form
   - Black/Red/Gold color system, strong typography, sporty minimal design
