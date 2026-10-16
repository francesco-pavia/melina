import type { Apartment, LocationHighlight, GuestReview, HostInfo } from '../types'
import { translations } from './translations'
import type { Language } from '../context/LanguageContext'

export const baseApartments: Apartment[] = [
  {
    id: 'melina-terrace',
    name: 'La Melina sulla Mole',
    subtitle: 'Luminoso appartamento all’ultimo piano con terrazzo panoramico privato',
    platform: 'Booking.com',
    platformUrl: 'https://www.booking.com/Share-qytECBi', 
    rating: 9.8,
    reviewCount: 48,
    badgeText: 'Booking.com Traveler Review Award',
    capacity: {
      guests: 4,
      bedrooms: 1,
      beds: 2,
      bathrooms: 1,
      areaSqm: 68,
    },
    description:
      'Un rifugio baciato dal sole in Via Po 51, con un ampio terrazzo privato che domina i tetti di Torino.',
    story:
      'La Melina sulla Mole nasce per offrirti momenti indimenticabili. Fai colazione all’aperto guardando il cielo di Torino o rilassati con un calice di vino al tramonto sul terrazzo lounge.',
    heroImage:
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80',
        caption: 'Soggiorno accogliente con abbondante luce naturale e accesso diretto al terrazzo',
      },
      {
        url: 'https://images.unsplash.com/photo-1540518614846-7ede433c4ef7?auto=format&fit=crop&w=1200&q=80',
        caption: 'Camera matrimoniale con materasso memory foam king size e armadio',
      },
      {
        url: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80',
        caption: 'Cucina moderna completa di piano a induzione, forno e postazione Nespresso',
      },
      {
        url: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80',
        caption: 'Bagno contemporaneo con grande doccia walk-in a pioggia',
      },
      {
        url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
        caption: 'Terrazzo panoramico privato con tavolo da pranzo e vista sui tetti torinesi',
      },
    ],
    amenities: [
      { name: 'Wi-Fi Fibra Ultraveloce (300 Mbps)', iconName: 'Wifi', category: 'Essentials' },
      { name: 'Aria Condizionata & Riscaldamento', iconName: 'Wind', category: 'Comfort' },
      { name: 'Terrazzo Panoramico Privato', iconName: 'Sun', category: 'Outdoor & Parking' },
      { name: 'Cucina Attrezzata Completa', iconName: 'Utensils', category: 'Kitchen' },
      { name: 'Macchina Caffè Nespresso', iconName: 'Coffee', category: 'Kitchen' },
      { name: 'Lavastoviglie & Forno', iconName: 'Sparkles', category: 'Kitchen' },
      { name: 'Smart TV 55" 4K (Netflix/Prime)', iconName: 'Tv', category: 'Comfort' },
      { name: 'Lavatrice & Asciugatrice', iconName: 'Shirt', category: 'Essentials' },
      { name: 'Doccia Walk-in a Pioggia', iconName: 'Droplets', category: 'Bathroom' },
      { name: 'Self Check-in (Tastierino digitale)', iconName: 'Key', category: 'Essentials' },
      { name: 'Postazione Smart Working / Laptop', iconName: 'Laptop', category: 'Comfort' },
      { name: 'Biancheria in Cotone & Asciugamani', iconName: 'Bed', category: 'Essentials' },
    ],
    highlights: [
      'Terrazzo privato all’ultimo piano con tavolo da pranzo esterno e sdraio prendisole',
      'Posizione centralissima in Via Po 51, a due passi da Piazza Vittorio e Mole',
      'Serratura digitale con codice per un self check-in comodo a qualsiasi ora',
      'Ospitalità e pulizia ad alti standard garantite su Booking.com',
    ],
    rules: {
      checkIn: 'Dalle 15:00 (Self check-in con tastierino)',
      checkOut: 'Entro le 10:30',
      selfCheckIn: true,
      smokingAllowed: false,
      petsAllowed: false,
      partiesAllowed: false,
      quietHours: '22:00 – 08:00',
    },
  },
  {
    id: 'melina-garden',
    name: 'La Melina su Via Po',
    subtitle: 'Affascinante loft al piano terra con intimo patio giardino botanico privato',
    platform: 'Airbnb',
    platformUrl: 'https://www.airbnb.com/l/3rEzh1pu', 
    rating: 4.96,
    reviewCount: 39,
    badgeText: 'Airbnb Superhost Preferred',
    capacity: {
      guests: 3,
      bedrooms: 1,
      beds: 2,
      bathrooms: 1,
      areaSqm: 56,
    },
    description:
      'Un’oasi di quiete nel centro storico: ambienti rifiniti con dettagli di design e accesso diretto a un giardino segreto ombreggiato da piante e gelsomino.',
    story:
      'La Melina su Via Po unisce la quiete delle storiche corti interne di Via Po 51 alla modernità degli arredi. Situato al piano terra senza barriere architettoniche e senza scale da salire, dispone di un riservato patio esterno.',
    heroImage:
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80',
        caption: 'Interni ricercati con zona living accogliente e divano relax',
      },
      {
        url: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1200&q=80',
        caption: 'Camera da letto silenziosa con letto matrimoniale e materasso ergonomico',
      },
      {
        url: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=80',
        caption: 'Cucina attrezzata con piano cottura, microonde e macchina per caffè italiano',
      },
      {
        url: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1200&q=80',
        caption: 'Bagno elegante con prodotti corpo bio e doccia rigenerante',
      },
      {
        url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
        caption: 'Patio giardino esclusivo ombreggiato con piante e sedute all’aperto',
      },
    ],
    amenities: [
      { name: 'Wi-Fi Fibra Ultraveloce', iconName: 'Wifi', category: 'Essentials' },
      { name: 'Climatizzazione & Riscaldamento', iconName: 'Wind', category: 'Comfort' },
      { name: 'Patio Giardino Botanico Privato', iconName: 'Flower2', category: 'Outdoor & Parking' },
      { name: 'Cucina Attrezzata di Design', iconName: 'Utensils', category: 'Kitchen' },
      { name: 'Moka Tradizionale & Bollitore', iconName: 'Coffee', category: 'Kitchen' },
      { name: 'Smart TV Schermo Piatto', iconName: 'Tv', category: 'Comfort' },
      { name: 'Lavatrice in appartamento', iconName: 'Shirt', category: 'Essentials' },
      { name: 'Doccia a Pioggia & Asciugacapelli', iconName: 'Droplets', category: 'Bathroom' },
      { name: 'Accesso a Piano Terra (Zero scale)', iconName: 'Home', category: 'Comfort' },
      { name: 'Tastierino Numerico Keyless', iconName: 'Key', category: 'Essentials' },
      { name: 'Parcheggio Convenzionato Vicino', iconName: 'Car', category: 'Outdoor & Parking' },
      { name: 'Set Cortesia Bagno Biologico', iconName: 'Sparkles', category: 'Bathroom' },
    ],
    highlights: [
      'Patio giardino privato e recintato con tavolo bistrot e ombrellone',
      'Comodo accesso a piano terra senza scale, ideale per chi viaggia con valigie pesanti',
      'Ospitalità Superhost con guida personalizzata su Torino e i suoi segreti',
      'Cestino di benvenuto omaggio con specialità tipiche piemontesi',
    ],
    rules: {
      checkIn: 'Dalle 15:00 (Accesso rapido con tastierino numerico)',
      checkOut: 'Entro le 10:30',
      selfCheckIn: true,
      smokingAllowed: false,
      petsAllowed: true,
      partiesAllowed: false,
      quietHours: '22:00 – 08:00',
    },
  },
]

export const getLocalizedApartments = (lang: Language): Apartment[] => {
  const t = translations[lang].apartments

  return [
    {
      ...baseApartments[0],
      name: t.terrace.name,
      subtitle: t.terrace.subtitle,
      badgeText: t.terrace.badgeText,
      description: t.terrace.description,
      story: t.terrace.story,
      highlights: t.terrace.highlights,
      galleryImages: baseApartments[0].galleryImages.map((img, i) => ({
        ...img,
        caption: t.terrace.galleryCaptions[i] || img.caption,
      })),
      rules: {
        ...baseApartments[0].rules,
        checkIn: t.terrace.rules.checkIn,
        checkOut: t.terrace.rules.checkOut,
        quietHours: t.terrace.rules.quietHours,
      },
    },
    {
      ...baseApartments[1],
      name: t.garden.name,
      subtitle: t.garden.subtitle,
      badgeText: t.garden.badgeText,
      description: t.garden.description,
      story: t.garden.story,
      highlights: t.garden.highlights,
      galleryImages: baseApartments[1].galleryImages.map((img, i) => ({
        ...img,
        caption: t.garden.galleryCaptions[i] || img.caption,
      })),
      rules: {
        ...baseApartments[1].rules,
        checkIn: t.garden.rules.checkIn,
        checkOut: t.garden.rules.checkOut,
        quietHours: t.garden.rules.quietHours,
      },
    },
  ]
}

export const hostInfo: HostInfo = {
  name: 'Alessandra Mela',
  title: 'Host & Property Manager · Melina',
  bio: `Benvenuti a Torino! Rimango sempre a disposizione via WhatsApp prima e durante il soggiorno per info e consigli su ristoranti tipici, musei e itinerari sabaudi.`,
  avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
  email: 'mela.alessandragf@gmail.com',
  phone: '+39 328 329 9346',
  whatsapp: 'https://wa.me/393283299346',
  address: 'Via Po, 51 - 10124 Torino (TO), Italia',
  languages: ['Italiano', 'English'],
  superhost: true,
  bookingAward: true,
}

export const locationHighlights: LocationHighlight[] = [
  {
    title: 'Mole Antonelliana & Museo del Cinema',
    distance: '3 min a piedi',
    category: 'Sightseeing',
    description: 'Il monumento simbolo di Torino con ascensore panoramico e museo interattivo.',
  },
  {
    title: 'Piazza Vittorio Veneto & Murazzi del Po',
    distance: '2 min a piedi',
    category: 'Sightseeing',
    description: 'Una delle piazze più scenografiche d’Europa, splendida per passeggiate e aperitivi lungo il fiume.',
  },
  {
    title: 'Piazza Castello & Musei Reali',
    distance: '6 min a piedi',
    category: 'Sightseeing',
    description: 'Palazzo Reale, Palazzo Madama e il Duomo con la Sacra Sindone.',
  },
  {
    title: 'Caffè Storici & Ristoranti Tipici',
    distance: 'Lungo Via Po',
    category: 'Dining',
    description: 'Bicerin, gianduiotti e le migliori piole piemontesi direttamente sotto i portici.',
  },
]

export const guestReviews: GuestReview[] = [
  {
    id: 'rev-1',
    author: 'Sophie & Liam',
    location: 'United Kingdom',
    date: 'Settembre 2026',
    rating: 10,
    platform: 'Booking.com',
    apartmentName: 'La Melina sulla Mole',
    text: 'Soggiorno da sogno in Via Po! Il terrazzo è qualcosa di spettacolare con vista sui tetti. Posizione comodissima per girare tutta Torino a piedi. Alessandra è stata gentilissima e disponibilissima.',
  },
  {
    id: 'rev-2',
    author: 'Marc & Julia',
    location: 'Deutschland',
    date: 'Agosto 2026',
    rating: 5.0,
    platform: 'Airbnb',
    apartmentName: 'La Melina su Via Po',
    text: 'Wunderschöne Oase mitten im Zentrum von Turin! Der private Garten im Innenhof ist herrlich ruhig nach einem langen Tag in der Stadt. Perfekte Klimaanlage, sehr bequeme Betten und top sauber.',
  },
  {
    id: 'rev-3',
    author: 'Alessandro & Chiara',
    location: 'Italia',
    date: 'Luglio 2026',
    rating: 9.8,
    platform: 'Booking.com',
    apartmentName: 'La Melina sulla Mole',
    text: 'Appartamento meraviglioso, pulizia impeccabile e posizione comodissima sotto i portici di Via Po. Il self check-in con tastierino è stato comodissimo e il terrazzo è fantastico.',
  },
  {
    id: 'rev-4',
    author: 'Camille & Thomas',
    location: 'France',
    date: 'Giugno 2026',
    rating: 5.0,
    platform: 'Airbnb',
    apartmentName: 'La Melina su Via Po',
    text: 'Une pépite au cœur de Turin ! Très calme dans la cour intérieure, aucun escalier à monter, literie parfaite et accueil très attentionné d’Alessandra. Nous reviendrons sans hésiter.',
  },
]
