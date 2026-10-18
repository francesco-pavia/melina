# La Melina — Holiday Rentals Showcase

A modern, elegant showcase website for **La Melina**, presenting two private holiday apartments in Italy rented on **Airbnb** and **Booking.com**.

The website is designed purely for showcase, presentation, and guest communication — direct reservations are fulfilled via verified **Airbnb** and **Booking.com** listings.

---

## 🏡 Featured Apartments

1. **La Melina sotto la Mole (Rented on Booking.com):**
   - Top-floor apartment with a private panoramic terrace overlooking Turin and the Mole Antonelliana.
   - Up to 4 guests · 1 King bedroom + sofa bed · 1 bathroom · 68 m².
   - Direct link to book on Booking.com with Traveler Review Award (9.8/10).

2. **La Melina su Via Po (Rented on Airbnb):**
   - Peaceful ground-floor loft with private botanical garden patio facing historic Via Po courtyards.
   - Up to 3 guests · 1 bedroom · 2 beds · 1 bathroom · 56 m².
   - Direct link to book on Airbnb with Superhost verification (4.96 ★).

---

## ✨ Website Features

- **Multilingual Experience (5 Languages):** Seamless instant language switching between Italian, English, French, German, and Spanish with saved preferences.
- **Direct Booking Badges:** Prominent official Airbnb & Booking.com buttons redirecting visitors straight to your active listings.
- **Interactive Photo Lightbox:** Full-screen photo gallery modal for guests to inspect all room pictures with arrow navigation and image descriptions.
- **Side-by-Side Comparison:** Helps prospective guests choose which apartment fits their trip.
- **Guest Stay Guidelines:** Clear check-in/out policies, key lockbox instructions, quiet hours, house rules, and departure checklist.
- **Shared Standards:** Highlights fast fiber Wi-Fi, air conditioning, keypad self check-in, and cleanliness standards.
- **Neighborhood Guide:** Walking distances to historic center, restaurants, sights, and train station.
- **Verified Guest Reviews:** Real guest testimonials showcasing high ratings on Airbnb (4.96 ★ Superhost) and Booking.com (9.8/10 Traveler Review Award).
- **Direct Host Communication:** Meet host Alessandra with instant WhatsApp chat, direct email, phone, and an inquiry form.
- **SEO & Social Sharing:** Preconfigured OpenGraph metadata, JSON-LD Schema.org structured data, `sitemap.xml`, and `robots.txt`.

---

## 🛠️ Tech Stack

- **Framework:** [React 19](https://react.dev/)
- **Bundler:** [Vite 8](https://vite.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/) + Custom Brand SVGs (Airbnb, Booking.com, WhatsApp)
- **Internationalization:** Custom lightweight React Context supporting 5 languages (IT, EN, FR, DE, ES)

---

## 📁 Project Structure

```
Melina/
├── public/                               # Static assets served directly at root
│   ├── favicon.svg                       # Branded villa vector icon for browser tabs & bookmarks
│   ├── melina_logo.svg                   # Official Melina brand vector logo
│   ├── turin_bg.jpg                      # High-resolution landscape photo of Turin & Mole Antonelliana
│   ├── robots.txt                        # Search engine crawler directives & sitemap reference
│   ├── sitemap.xml                       # XML sitemap with multilingual alternate hreflang tags
│   ├── google3453313dfc477335.html       # Google Search Console site verification file
│   ├── _redirects                        # SPA client-side routing fallback rule for static hosts
│   └── images/                           # High-resolution optimized photography
│       ├── host-alessandra.jpg           # Portrait photo of host Alessandra
│       ├── melina-mole/                  # Photo gallery for La Melina sotto la Mole
│       │   ├── mole-night.jpg            # Panoramic night view of Mole Antonelliana
│       │   ├── living-couch.jpg          # Living room with seating and terrace view
│       │   ├── living-stairs.jpg         # Living space & loft architectural stairs
│       │   ├── bedroom.jpg               # King master bedroom setup
│       │   ├── bedroom-view.jpg          # Master bedroom perspective
│       │   ├── kitchen.jpg               # Fully-equipped contemporary kitchen
│       │   ├── kitchen-details.jpg       # Kitchen countertop & breakfast setup
│       │   ├── dining-room.jpg           # Terrace-adjacent dining area
│       │   ├── entrance-bench.jpg        # Entrance hall & welcome bench
│       │   ├── bathroom.jpg              # Walk-in shower & modern vanity
│       │   ├── bathroom-details.jpg      # Premium toiletries & bath details
│       │   └── logo.jpg                  # Branded apartment plaque / detail
│       └── melina-po/                    # Photo gallery for La Melina su Via Po
│           ├── building-exterior.jpg     # Historic Via Po building facade & entrance
│           ├── entrance.jpg              # Private entryway & hallway
│           ├── balcony-po.jpg            # Private balcony overlooking historic courtyards
│           ├── balcony-arcades-view.jpg  # Balcony perspective over Turin arcades
│           ├── living-room.jpg           # Elegant living room with sofa bed
│           ├── living-perspective.jpg    # Open-plan living space perspective
│           ├── living-tv.jpg             # Media console & entertainment nook
│           ├── dining-living.jpg         # Dining table & living area combination
│           ├── bedroom-view.jpg          # Peaceful master bedroom with courtyard light
│           ├── bathroom.jpg              # Contemporary tiled bathroom & walk-in shower
│           └── architectural-details.jpg # Historic Turin vaulted ceiling & design details
│
├── src/                                  # React application source code
│   ├── components/                       # Modular UI section components
│   │   ├── Navbar.tsx                    # Glassmorphic header with scroll detection & language picker
│   │   ├── Hero.tsx                      # Immersive hero section with quick property cards & platform badges
│   │   ├── ApartmentSection.tsx          # Comprehensive property presentation, specs, gallery & booking links
│   │   ├── ImageLightbox.tsx             # Full-screen responsive photo lightbox with keyboard controls
│   │   ├── AmenitiesOverview.tsx         # Side-by-side feature comparison table & shared standards
│   │   ├── StayGuidelinesSection.tsx     # Guest house rules, check-in/out times & departure checklist
│   │   ├── LocationSection.tsx           # Turin neighborhood highlights & walking distances
│   │   ├── ReviewsSection.tsx            # Verified guest reviews & Superhost / Traveler Review badges
│   │   ├── HostContact.tsx               # Host bio, direct WhatsApp chat, contact info & inquiry form
│   │   ├── Footer.tsx                    # Footer with navigation anchors, platform links & copyright
│   │   └── Icons.tsx                     # Pixel-perfect custom SVG icons (Airbnb, Booking.com, WhatsApp)
│   ├── context/                          # Global state providers
│   │   └── LanguageContext.tsx           # Context & hook managing multi-language switching (IT, EN, FR, DE, ES)
│   ├── data/                             # Content data stores & internationalization
│   │   ├── apartmentsData.ts             # All property specs, photo paths, amenities, reviews & host info
│   │   └── translations.ts               # Complete multilingual copy dictionary for all 5 languages
│   ├── types/                            # TypeScript interfaces & types
│   │   └── index.ts                      # Interfaces for Apartment, Amenity, HouseRules, Review & Location
│   ├── App.tsx                           # Root application component orchestrating all sections
│   ├── index.css                         # Tailwind CSS v4 setup, custom fonts & styling utilities
│   └── main.tsx                          # Application DOM entry point wrapped in LanguageProvider
│
├── index.html                            # HTML template with OpenGraph meta tags & JSON-LD schema
├── vite.config.ts                        # Vite 8 configuration with React & Tailwind CSS v4 plugins
├── vercel.json                           # Vercel deployment rewrite rules for SPA routing
├── tsconfig.json                         # Root TypeScript configuration linking app & node configs
├── tsconfig.app.json                     # TypeScript compilation config for application code (`src/`)
├── tsconfig.node.json                    # TypeScript compilation config for Vite node tooling
├── package.json                          # Project dependencies, metadata & build scripts
├── package-lock.json                     # Locked dependency tree for reproducible builds
└── .gitignore                            # Excluded files and folders from version control
```

---

## 🏃 Quick Start

### Start Local Development Server:
```bash
npm run dev
```
Open **[http://localhost:5173/](http://localhost:5173/)** to preview the site with instant hot-reloading.

### Build for Production:
```bash
npm run build
```

---

## ✏️ How to Customize Your Links & Photos

All data is conveniently centralized in a single file:
👉 [`src/data/apartmentsData.ts`](file:///C:/Users/Utente/Documents/Melina/src/data/apartmentsData.ts)

1. **Insert Your Airbnb & Booking.com URLs:**
   - For Apartment 1 (`melina-terrace`), replace `platformUrl: 'https://www.airbnb.com'` with your exact Airbnb listing link.
   - For Apartment 2 (`melina-garden`), replace `platformUrl: 'https://www.booking.com'` with your exact Booking.com listing link.

2. **Add Your Own Apartment Photos:**
   - In `apartments[0].galleryImages` and `apartments[1].galleryImages`, replace the image URLs with your photos (or put local photos in `public/` and reference `/photo.jpg`).

3. **Update Host & Contact Details:**
   - Edit `hostInfo` (name, WhatsApp number, email, phone).
