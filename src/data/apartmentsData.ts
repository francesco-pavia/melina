import type { Apartment, LocationHighlight, GuestReview, HostInfo } from '../types'
import { translations } from './translations'
import type { Language } from '../context/LanguageContext'

export const baseApartments: Apartment[] = [
  {
    id: 'melina-mole',
    name: 'La Melina sulla Mole',
    subtitle: 'Luminoso appartamento all’ultimo piano con suggestivo terrazzo panoramico e vista sulla Mole',
    platform: 'Booking.com',
    platformUrl: 'https://www.booking.com/Share-qytECBi', 
    rating: 10.0,
    reviewCount: 3,
    badgeText: 'Booking.com 10/10 Eccezionale',
    capacity: {
      guests: 2,
      bedrooms: 1,
      beds: 2,
      bathrooms: 1,
      areaSqm: 70,
    },
    description:
      'In una posizione privilegiata nel centro di Torino, La Melina offre una terrazza e un balcone con vista panoramica sulla città. Questo appartamento climatizzato comprende 1 camera da letto, un accogliente soggiorno, una cucina accessoriata con frigorifero e macchina da caffè, e 1 bagno con bidet e doccia.',
    story:
      'Situato in posizione d’eccellenza in Via Po 51, La Melina offre un’esperienza sabauda indimenticabile con punteggio perfetto di 10/10 per la posizione. Goditi la colazione sul terrazzo privato ammirando la Mole Antonelliana o rilassati al tramonto sui tetti torinesi. L’alloggio dispone di ascensore, climatizzazione, Wi-Fi gratuito e tutto il necessario per un soggiorno confortevole.',
    heroImage: '/images/melina-mole/living-stairs.jpg',
    galleryImages: [
      {
        url: '/images/melina-mole/living-stairs.jpg',
        caption: 'Ambiente living accogliente con scala verso il soppalco',
      },
      {
        url: '/images/melina-mole/mole-night.jpg',
        caption: 'Suggestiva vista notturna della Mole Antonelliana illuminata',
      },
      {
        url: '/images/melina-mole/dining-room.jpg',
        caption: 'Zona pranzo luminosa',
      },
      {
        url: '/images/melina-mole/kitchen.jpg',
        caption: 'Cucina attrezzata con piano cottura, frigorifero e macchina del caffè',
      },
      {
        url: '/images/melina-mole/bedroom-view.jpg',
        caption: 'Vista dal soppalco',
      },
      {
        url: '/images/melina-mole/bathroom.jpg',
        caption: 'Bagno privato con doccia, bidet e set biancheria e asciugamani',
      },
      {
        url: '/images/melina-mole/entrance-bench.jpg',
        caption: 'Ingresso dell’alloggio con panca',
      },
      {
        url: '/images/melina-mole/bedroom.jpg',
        caption: 'Camera da letto sul soppalco',
      },
      {
        url: '/images/melina-mole/living-couch.jpg',
        caption: 'Salotto con poltrone e tavolino',
      },
      {
        url: '/images/melina-mole/bathroom-details.jpg',
        caption: 'Specchio illuminato nel bagno',
      },
      {
        url: '/images/melina-mole/kitchen-details.jpg',
        caption: 'Dettaglio sulla cucina',
      },
      {
        url: '/images/melina-mole/logo.jpg',
        caption: 'Logo dell’appartamento all’entrata',
      },
    ],
    amenities: [
      { name: 'Wi-Fi Gratuito ad Alta Velocità', iconName: 'Wifi', category: 'Essentials' },
      { name: 'Terrazzo Panoramico & Balcone', iconName: 'Sun', category: 'Outdoor & Parking' },
      { name: 'Aria Condizionata & Riscaldamento', iconName: 'Wind', category: 'Comfort' },
      { name: 'Ascensore nel palazzo', iconName: 'Home', category: 'Comfort' },
      { name: 'Cucina con Frigorifero & Piano Cottura', iconName: 'Utensils', category: 'Kitchen' },
      { name: 'Macchina del Caffè & Bollitore', iconName: 'Coffee', category: 'Kitchen' },
      { name: 'Smart TV Schermo Piatto', iconName: 'Tv', category: 'Comfort' },
      { name: 'Lavatrice in appartamento', iconName: 'Shirt', category: 'Essentials' },
      { name: 'Bagno Privato con Bidet e Doccia', iconName: 'Droplets', category: 'Bathroom' },
      { name: 'Self Check-in con cassetta chiavi', iconName: 'Key', category: 'Essentials' },
      { name: 'Camere Non Fumatori', iconName: 'Sparkles', category: 'Essentials' },
      { name: 'Lenzuola & Set Asciugamani inclusi', iconName: 'Bed', category: 'Essentials' },
    ],
    highlights: [
      'Terrazzo e balcone privato con vista panoramica sulla Mole Antonelliana e sui tetti di Torino',
      'Posizione privilegiata nel cuore di Torino con punteggio posizione massimo di 10,0',
      'Comfort completo: ascensore, aria condizionata, riscaldamento e lavatrice',
      'Punteggio 10/10 per pulizia, servizi, comfort e accoglienza su Booking.com',
    ],
    rules: {
      checkIn: 'Check-in flessibile (Self check-in con cassetta chiavi)',
      checkOut: 'Entro le ore 12:00',
      selfCheckIn: true,
      smokingAllowed: false,
      petsAllowed: false,
      partiesAllowed: false,
      quietHours: '22:00 – 08:00',
    },
  },
  {
    id: 'melina-po',
    name: 'La Melina su Via Po',
    subtitle: 'Elegante salotto sabaudo con soffitti alti e balcone panoramico sui portici di Via Po',
    platform: 'Airbnb',
    platformUrl: 'https://www.airbnb.it/rooms/1540725503663066319', 
    rating: 4.5,
    reviewCount: 2,
    badgeText: 'Airbnb Amato dagli ospiti',
    capacity: {
      guests: 2,
      bedrooms: 1,
      beds: 2,
      bathrooms: 1,
      areaSqm: 56,
    },
    description:
      'Nel cuore pulsante di Torino al piano nobile con ascensore, La Melina su Via Po è un suggestivo salotto sabaudo caratterizzato da soffitti alti d’epoca, arredi curati e un romantico balcone privato affacciato direttamente sulla storica Via Po. L’alloggio dispone di zona living accogliente con angolo lettura e giochi da tavolo, camera matrimoniale soppalcata, angolo cottura accessoriato con Nespresso e bagno con bidet e doccia.',
    story:
      'Vivi Torino dalla prospettiva più autentica: affacciati dal balcone privato sui famosi portici di Via Po per gustare un caffè o ammirare la vita cittadina. Situato in un palazzo storico nobiliare provvisto di ascensore, l’appartamento offre un’atmosfera d’altri tempi unita ai più moderni comfort: aria condizionata centralizzata, riscaldamento, Wi-Fi veloce, Smart TV e self check-in con tastierino numerico.',
    heroImage: '/images/melina-po/living-room.jpg',
    galleryImages: [
      {
        url: '/images/melina-po/living-room.jpg',
        caption: 'Spazioso salotto con alti soffitti storici e divani',
      },
      {
        url: '/images/melina-po/living-tv.jpg',
        caption: 'Salotto con Smart TV',
      },
      {
        url: '/images/melina-po/dining-living.jpg',
        caption: 'Zona giorno con tavolo da pranzo e bar a vista',
      },
      {
        url: '/images/melina-po/bedroom-view.jpg',
        caption: 'Camera da letto sul soppalco',
      },
      {
        url: '/images/melina-po/bathroom.jpg',
        caption: 'Bagno privato rifinito con doccia, bidet e set biancheria',
      },
      {
        url: '/images/melina-po/balcony-arcades-view.jpg',
        caption: 'Scorcio panoramico sui portici storici di Via Po dal balcone',
      },
      {
        url: '/images/melina-po/entrance.jpg',
        caption: 'Entrata nell’alloggio con panca',
      },
      {
        url: '/images/melina-po/living-perspective.jpg',
        caption: 'Vista sul salotto dal soppalco',
      },
      {
        url: '/images/melina-po/architectural-details.jpg',
        caption: 'Dettagli del tavolo',
      },
      {
        url: '/images/melina-po/building-exterior.jpg',
        caption: 'Via Po illuminata d’inverno',
      },
    ],
    amenities: [
      { name: 'Wi-Fi Gratuito ad Alta Velocità', iconName: 'Wifi', category: 'Essentials' },
      { name: 'Balcone Privato su Via Po', iconName: 'Sun', category: 'Outdoor & Parking' },
      { name: 'Aria Condizionata Centralizzata', iconName: 'Wind', category: 'Comfort' },
      { name: 'Ascensore nel palazzo', iconName: 'Home', category: 'Comfort' },
      { name: 'Angolo Cottura con Frigorifero & Freezer', iconName: 'Utensils', category: 'Kitchen' },
      { name: 'Macchina Nespresso & Bollitore', iconName: 'Coffee', category: 'Kitchen' },
      { name: 'Smart TV Schermo Piatto', iconName: 'Tv', category: 'Comfort' },
      { name: 'Bagno Privato con Bidet e Doccia', iconName: 'Droplets', category: 'Bathroom' },
      { name: 'Biblioteca di Libri & Giochi da Tavolo', iconName: 'Sparkles', category: 'Comfort' },
      { name: 'Self Check-in con cassetta chiavi', iconName: 'Key', category: 'Essentials' },
      { name: 'Lenzuola & Set Asciugamani inclusi', iconName: 'Bed', category: 'Essentials' },
      { name: 'Parcheggio Convenzionato nelle Vicinanze', iconName: 'Car', category: 'Outdoor & Parking' },
    ],
    highlights: [
      'Balcone privato con vista suggestiva sui portici storici di Via Po',
      'Elegante piano nobile con ascensore, soffitti d’epoca e soppalco di design',
      'Posizione strategica a pochi passi da Piazza Vittorio Veneto e dalla Mole',
      'Comfort completo: aria condizionata centralizzata, Wi-Fi veloce e self check-in',
    ],
    rules: {
      checkIn: 'Check-in flessibile (Self check-in con cassetta chiavi)',
      checkOut: 'Entro le ore 12:00',
      selfCheckIn: true,
      smokingAllowed: false,
      petsAllowed: false,
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
  bio: `Benvenuti a Torino! La Melina è la tappa ideale per vivere l’eleganza e il fascino sabaudo: sotto i portici storici di Via Po 51, a due passi dalla Mole Antonelliana e da Piazza Vittorio Veneto. Rimango sempre a vostra disposizione per informazioni, accoglienza e consigli autentici sulla città.`,
  avatarUrl: '/images/host-alessandra.jpg',
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
    text: 'Wunderschöne Wohnung mitten im Zentrum von Turin! Der private Balkon mit Blick auf die Via Po ist herrlich für den Morgenkaffee. Hohe Decken voller Geschichte, perfekte Klimaanlage und top sauber.',
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
    text: 'Une pépite au cœur de Turin ! Le balcon sur la Via Po est charmant, l’ascenseur très appréciable et le salon avec mezzanine a un cachet fou. Literie impeccable et accueil très attentionné d’Alessandra.',
  },
]
