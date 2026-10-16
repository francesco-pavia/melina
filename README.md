# Melina Apartments — Holiday Rentals Showcase

A modern, elegant showcase website for **Melina Apartments**, presenting two private holiday apartments in Italy rented on **Airbnb** and **Booking.com**.

The website is designed purely for showcase, presentation, and guest communication — direct reservations are fulfilled via verified **Airbnb** and **Booking.com** listings.

---

## 🏡 Featured Apartments

1. **Melina Sunny Terrace (Rented on Airbnb):**
   - Top-floor apartment with a private panoramic terrace and al fresco dining.
   - Up to 4 guests · 1 King bedroom + sofa bed · 1 bathroom · 68 m².
   - Direct link to book on Airbnb with Superhost verification.

2. **Melina Garden Loft (Rented on Booking.com):**
   - Peaceful ground-floor loft with private botanical garden patio.
   - Up to 3 guests · 1 bedroom · 2 beds · 1 bathroom · 56 m².
   - Direct link to book on Booking.com with Traveler Review Award (9.7/10).

---

## ✨ Website Features

- **Direct Booking Badges:** Prominent official Airbnb & Booking.com buttons redirecting visitors straight to your active listings.
- **Interactive Photo Lightbox:** Full-screen photo gallery modal for guests to inspect all room pictures with arrow navigation.
- **Side-by-Side Comparison:** Helps prospective guests choose which apartment fits their trip.
- **Shared Standards:** Highlights fast fiber Wi-Fi, air conditioning, keypad self check-in, and cleanliness standards.
- **Neighborhood Guide:** Walking distances to historic center, restaurants, beaches, and train station.
- **Verified Guest Reviews:** Real guest testimonials showcasing high ratings on Airbnb (4.96 ★) and Booking.com (9.7/10).
- **Direct Host Communication:** Meet Francesco with WhatsApp chat, direct email, phone, and an inquiry form.

---

## 🛠️ Tech Stack

- **Framework:** [React 19](https://react.dev/)
- **Bundler:** [Vite 8](https://vite.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/) + Custom Brand SVGs (Airbnb, Booking.com, WhatsApp)

---

## 📁 Project Structure

```
Melina/
├── public/
│   └── favicon.svg              # Branded villa icon
├── src/
│   ├── components/
│   │   ├── AmenitiesOverview.tsx # Shared perks & side-by-side comparison
│   │   ├── ApartmentSection.tsx  # Detailed apartment presentation & photo grid
│   │   ├── Footer.tsx            # Footer navigation & platform links
│   │   ├── Hero.tsx              # Welcoming hero with quick apartment cards
│   │   ├── HostContact.tsx       # Meet host Francesco, WhatsApp & inquiry form
│   │   ├── Icons.tsx             # Official Airbnb, Booking.com & WhatsApp SVGs
│   │   ├── ImageLightbox.tsx     # Full-screen photo gallery viewer
│   │   ├── LocationSection.tsx   # Neighborhood walking distances & sights
│   │   ├── Navbar.tsx            # Glassmorphic header with direct platform CTAs
│   │   └── ReviewsSection.tsx    # Verified reviews from Airbnb & Booking.com
│   ├── data/
│   │   └── apartmentsData.ts     # ALL content, links, photos & text (easy to edit)
│   ├── types/
│   │   └── index.ts              # TypeScript type definitions
│   ├── App.tsx                  # Main layout orchestrator
│   ├── index.css                # Warm boutique styling & Tailwind directives
│   └── main.tsx                 # Root entry point
├── index.html                   # HTML template with SEO metadata
├── package.json
└── vite.config.ts
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
