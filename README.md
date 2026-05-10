# PARNAVAZ

Karga bağımsız kültür dergisi web sitesi.

## Kurulum

```bash
npm install
npm run dev
```

## Build & Deploy

```bash
npm run build
```

Proje Vercel ve Netlify ile uyumlu static export destekler.

## Yeni Sayı Eklemek

1. PDF dosyasını `/public/pdfs/` klasörüne koy  
   → örn: `public/pdfs/karga-sayi-4.pdf`

2. `data/magazines.ts` dosyasına yeni obje ekle:

```ts
{
  id: 4,
  title: "Karga — Sayı 4",
  description: "Sayı açıklaması...",
  date: "01.07.2025",
  pdf: "/pdfs/karga-sayi-4.pdf",
  issue: "No. 04",
  theme: "Tema Adı",
}
```

3. Deploy et — hepsi bu kadar.

## Klasör Yapısı

```
app/
  page.tsx              → Ana sayfa
  karga/
    page.tsx            → Tüm sayılar
    KargaContent.tsx    → Client component
  layout.tsx            → Root layout + metadata
  globals.css           → Global styles + grain effect

components/
  layout/
    Navbar.tsx          → Blur navbar
    Footer.tsx          → Footer
  sections/
    HeroSection.tsx     → Ana sayfa hero
    FeaturedSection.tsx → Son sayı vurgu
  ui/
    MagazineCard.tsx    → Yeniden kullanılabilir kart

data/
  magazines.ts          → Dergi verisi

public/
  pdfs/                 → PDF dosyaları buraya
  images/               → Görseller buraya
```

## Teknolojiler

- **Next.js 15** (App Router, Static Export)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion**

## Renk Paleti

| İsim | Hex |
|------|-----|
| Background | `#080000` |
| Card | `#1a0000` |
| Accent (Altın) | `#d4a017` |
| Text | `#f5e6c8` |
| Text Muted | `#a89070` |

## Fontlar

- **Başlıklar**: Cormorant Garamond (serif, sinematik)
- **El yazısı aksan**: Caveat
- **Body**: Inter
