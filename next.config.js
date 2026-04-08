# Hext Pharma — Next.js Website

A complete, modern pharmaceutical website for **Hext Pharma Private Limited**, built with **Next.js 14**, **Tailwind CSS**, and **App Router**.

---

## 📁 Folder Structure

```
hextpharma/
├── app/
│   ├── layout.js              # Root layout + SEO metadata
│   ├── page.js                # Home page
│   ├── sitemap.js             # Dynamic XML sitemap
│   ├── products/
│   │   ├── layout.js          # Products page metadata
│   │   └── page.js            # Products page (filterable)
│   ├── about/
│   │   └── page.js            # About Us page
│   ├── contact/
│   │   └── page.js            # Contact page with form
│   └── bulk-order/
│       ├── layout.js          # Bulk order metadata
│       └── page.js            # Bulk order signup (2-step form)
├── components/
│   ├── Navbar.js              # Sticky responsive navbar
│   ├── Footer.js              # Footer with free delivery banner
│   ├── Hero.js                # Home hero section
│   ├── TrustBadges.js         # 6 trust badge icons
│   ├── Services.js            # Services grid (6 cards)
│   ├── FeaturedProducts.js    # 6 featured products
│   ├── BulkOrderBanner.js     # CTA banner for bulk orders
│   └── DoctorGroups.js        # Products by specialty
├── data/
│   └── products.js            # All 13 products + categories + doctor groups
├── styles/
│   └── globals.css            # Tailwind + custom CSS
├── public/
│   └── robots.txt
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── next.config.js
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open in browser
http://localhost:3000
```

### Build for Production

```bash
npm run build
npm start
```

### Deploy on Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or push to GitHub and connect the repo on [vercel.com](https://vercel.com).

---

## 📄 Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero, trust badges, services, featured products, bulk CTA, doctor groups |
| Products | `/products` | All 13 products with search + filter by category & specialty |
| About Us | `/about` | Company info, mission, values, leadership |
| Contact | `/contact` | Contact form + company info |
| Bulk Order | `/bulk-order` | 2-step signup form for bulk orders |

---

## 🎨 Design System

- **Colors**: Brand blue (`#1d4ed8`) + soft blues + white
- **Fonts**: Sora (headings) + DM Sans (body) via Google Fonts
- **Framework**: Tailwind CSS
- **Theme**: Clean, modern medical — white + blue

---

## 💊 Products Data

All 13 Hext Pharma products are in `data/products.js`:
- AGITHRO-250 & 500 (Azithromycin)
- HESTOCID-S Suspension
- HESTOZYME Syrup
- ACIMORE-P & ACIMORE-SP
- REWDEC-DSR Capsules
- SUCEN-O Suspension
- HESTOVIT Tablet, Syrup & Drop
- FAYRAS-XT Tablet & Suspension

---

## 📦 Key Features

- ✅ SEO-ready (metadata, Open Graph, sitemap, robots.txt)
- ✅ Responsive (mobile + tablet + desktop)
- ✅ Free delivery banner — ₹5,000+ threshold
- ✅ Product filter by category & doctor specialty
- ✅ 2-step bulk order registration form
- ✅ Contact form with subject selection
- ✅ Smooth animations & hover states
- ✅ App Router + server/client components

---

## 📞 Contact Details (Hext Pharma)

- **Address**: 27/109/3a, Opp Shankar Gali Main Panday Road, Jwala Nagar, Shahdara, Delhi North East, Delhi – 110032
- **Phone**: 9065395864 | 9534891576
- **Email**: hextpharma73@gmail.com

---

*Built for Hext Pharma Private Limited · Delhi, India*
