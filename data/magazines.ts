export interface Magazine {
  id: number;
  title: string;
  description: string;
  date: string;
  pdf: string;
  issue: string;
  theme?: string;
}

export const magazines: Magazine[] = [

  {
    id: 1,
    title: "Karga — Sayı 1",
    description:
      "İlk sayımız: başlangıç ve manifesto. Yaratıcılığın karanlık köşelerinden doğan sesler, ilk kez bir arada.",
    date: "12.01.2025",
    pdf: "/pdfs/karga-sayi-1.pdf",
    issue: "No. 01",
    theme: "Manifesto",
  },
  {
    id: 2,
    title: "Karga — Sayı 2",
    description:
      "İkinci sayımız: geçiş ritüelleri ve sınır deneyimleri. Bedenin ve zihnin kıyılarında dolaşan imgeler.",
    date: "15.03.2025",
    pdf: "/pdfs/karga-sayi-2.pdf",
    issue: "No. 02",
    theme: "Geçiş",
  },
  {
    id: 3,
    title: "Karga — Sayı 3",
    description:
      "Üçüncü sayımız: hafıza ve unutmanın arkeolojisi. Kalıntılar, izler ve yok olmanın estetiği üzerine.",
    date: "20.05.2025",
    pdf: "/pdfs/karga-sayi-3.pdf",
    issue: "No. 03",
    theme: "Arkeoloji",
  },

      {
    id: 4,
    title: "Karga — Sayı 4",
    description:
      "Dördüncü sayımız: sikiş ve sokuşun psikolojisi. Bedenin ve zihnin kıyılarında dolaşan imgeler.",
    date: "10.07.2025",
    pdf: "/pdfs/karga-sayi-4.pdf",
    issue: "No. 04",
    theme: "ÜSTÜNSOY, YUNUS VE MÜCO",
  },
        {
    id: 5,
    title: "Karga — Sayı 5",
    description:
      "Beşinci sayımız: sikiş ve sokuşun psikolojisi. Bedenin ve zihnin kıyılarında dolaşan imgeler.",
    date: "10.07.2025",
    pdf: "/pdfs/karga-sayi-5.pdf",
    issue: "No. 05 ",
    theme: "ÜSTÜNSOY, YUNUS VE MÜCO",
  },

];
