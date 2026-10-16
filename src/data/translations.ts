import type { Language } from '../context/LanguageContext'

export interface ApartmentTranslation {
  name: string
  subtitle: string
  badgeText: string
  description: string
  story: string
  highlights: string[]
  galleryCaptions: string[]
  rules: {
    checkIn: string
    checkOut: string
    policies: string
    quietHours: string
  }
}

export interface SiteTranslations {
  nav: {
    apartments: string
    terrace: string
    garden: string
    amenities: string
    location: string
    reviews: string
    contact: string
  }
  hero: {
    welcomeBadge: string
    headlineStart: string
    headlineHighlight: string
    subtitle: string
    viewDetails: string
    bookOn: string
    listedOn: string
    guests: string
    bedroom: string
    beds: string
    bath: string
    superhostVerified: string
    superhostSub: string
    selfCheckIn: string
    selfCheckInSub: string
    fastWifi: string
    fastWifiSub: string
    spotless: string
    spotlessSub: string
  }
  apartmentSection: {
    guests: string
    bedrooms: string
    bathrooms: string
    surface: string
    rating: string
    aboutSpace: string
    highlightsTitle: string
    offersTitle: string
    houseRulesTitle: string
    checkIn: string
    checkOut: string
    policies: string
    quietHours: string
    directBooking: string
    officialListing: string
    airbnbGuarantee: string
    bookingGuarantee: string
    liveCalendar: string
    instantConfirmation: string
    hostSupport: string
    bookButton: string
    redirectNotice: string
    viewAllPhotos: string
  }
  amenities: {
    badge: string
    title: string
    subtitle: string
    fastWifiTitle: string
    fastWifiDesc: string
    climateTitle: string
    climateDesc: string
    checkinTitle: string
    checkinDesc: string
    coffeeTitle: string
    coffeeDesc: string
    cleanTitle: string
    cleanDesc: string
    conciergeTitle: string
    conciergeDesc: string
    compareTitle: string
    compareSubtitle: string
    apt1Perk1: string
    apt1Perk2: string
    apt1Perk3: string
    apt1Perk4: string
    apt2Perk1: string
    apt2Perk2: string
    apt2Perk3: string
    apt2Perk4: string
  }
  location: {
    badge: string
    title: string
    subtitle: string
    addressLabel: string
    fullAddress: string
    openGoogleMaps: string
    gettingHereTitle: string
    gettingHereDesc: string
    contactForDirections: string
    highlights: {
      title: string
      distance: string
      description: string
    }[]
  }
  reviews: {
    badge: string
    title: string
    subtitle: string
    verifiedAirbnb: string
    exceptionalBooking: string
    verifiedGuest: string
    from: string
  }
  contact: {
    badge: string
    title: string
    subtitle: string
    hostTitle: string
    hostRole: string
    languagesLabel: string
    whatsappCta: string
    whatsappSub: string
    thankYouTitle: string
    thankYouText: string
    sendAnother: string
    yourName: string
    yourEmail: string
    inquiryApartment: string
    bothOption: string
    yourMessage: string
    messagePlaceholder: string
    sendButton: string
    sendingButton: string
  }
  footer: {
    tagline: string
    bookOnline: string
    explore: string
    rights: string
    backToTop: string
  }
  apartments: {
    terrace: ApartmentTranslation
    garden: ApartmentTranslation
  }
}

export const translations: Record<Language, SiteTranslations> = {
  it: {
    nav: {
      apartments: 'Gli Appartamenti',
      terrace: 'La Melina sulla Mole',
      garden: 'La Melina su Via Po',
      amenities: 'Servizi',
      location: 'Posizione',
      reviews: 'Recensioni',
      contact: 'Contatti',
    },
    hero: {
      welcomeBadge: 'Benvenuti a Melina Apartments · Torino Centro',
      headlineStart: 'Due Oasi Esclusive nel Cuore di',
      headlineHighlight: 'Torino',
      subtitle:
        'Vivi il fascino sabaudo con il massimo comfort. Due appartamenti indipendenti situati in Via Po 51, ciascuno con il proprio spazio privato all’aperto.',
      viewDetails: 'Dettagli e Foto',
      bookOn: 'Prenota su',
      listedOn: 'Disponibile su',
      guests: 'Ospiti',
      bedroom: 'Camera',
      beds: 'Letti',
      bath: 'Bagno',
      superhostVerified: 'Ospitalità Verificata',
      superhostSub: 'Valutazioni al vertice',
      selfCheckIn: 'Self Check-In Smart',
      selfCheckInSub: 'Codice tastierino 24/7',
      fastWifi: 'Wi-Fi Fibra Ultraveloce',
      fastWifiSub: 'Connessione a 300+ Mbps',
      spotless: 'Pulizia Impeccabile',
      spotlessSub: 'Igienizzazione professionale',
    },
    apartmentSection: {
      guests: 'Ospiti',
      bedrooms: 'Camere',
      bathrooms: 'Bagni',
      surface: 'Superficie',
      rating: 'Punteggio',
      aboutSpace: 'Lo Spazio',
      highlightsTitle: 'Punti di Forza',
      offersTitle: 'Servizi inclusi',
      houseRulesTitle: 'Regole della Casa e Orari',
      checkIn: 'Check-in',
      checkOut: 'Check-out',
      policies: 'Condizioni',
      quietHours: 'Ore di silenzio',
      directBooking: 'Prenotazione Ufficiale',
      officialListing: 'Annuncio Ufficiale su',
      airbnbGuarantee:
        'Verifica calendario in tempo reale, prezzi stagionali, recensioni certificate e prenota con garanzia e protezione Airbnb.',
      bookingGuarantee:
        'Controlla date disponibili, conferma immediata, politiche di cancellazione flessibili e prenota con garanzia Booking.com.',
      liveCalendar: 'Calendario sempre aggiornato in tempo reale',
      instantConfirmation: 'Conferma immediata e pagamento sicuro',
      hostSupport: 'Assistenza diretta dell’host Francesco 24/7',
      bookButton: 'Vedi Disponibilità e Prenota su',
      redirectNotice: 'Verrai reindirizzato alla pagina ufficiale dell’annuncio.',
      viewAllPhotos: 'Guarda tutte le foto',
    },
    amenities: {
      badge: 'Comfort & Standard',
      title: 'Tutto ciò di cui hai bisogno',
      subtitle:
        'Entrambi gli appartamenti sono allestiti con cura sartoriale per farti sentire a casa fin dal primo istante.',
      fastWifiTitle: 'Fibra Ottica Veloce',
      fastWifiDesc:
        'Connessione fluida a 300+ Mbps in ogni ambiente, ideale per streaming e smart working.',
      climateTitle: 'Aria Condizionata & Clima',
      climateDesc:
        'Climatizzazione estiva e riscaldamento autonomo silenzioso regolabile a piacere.',
      checkinTitle: 'Self Check-In 24/7',
      checkinDesc:
        'Serratura digitale con tastierino numerico per arrivare comodamente all’ora che preferisci.',
      coffeeTitle: 'Angolo Caffè & Tè',
      coffeeDesc:
        'Macchina Nespresso, moka tradizionale italiana, bollitore e cestino di benvenuto omaggio.',
      cleanTitle: 'Biancheria & Pulizia Hotel',
      cleanDesc:
        'Lenzuola di cotone pregiato, set morbidi di asciugamani e pulizia ad alti standard.',
      conciergeTitle: 'Guida Locale e Assistenza',
      conciergeDesc:
        'Consigli autentici su ristoranti, musei e caffè storici torinesi con supporto WhatsApp.',
      compareTitle: 'Quale appartamento fa per te?',
      compareSubtitle:
        'Confronta le due soluzioni per scegliere quella perfetta per il tuo soggiorno a Torino.',
      apt1Perk1: 'Grande terrazzo panoramico privato con sdraio e tavolo',
      apt1Perk2: 'Ospita fino a 4 persone (Letto King + divano letto)',
      apt1Perk3: 'Ultimo piano luminosissimo con vista suggestiva sui tetti',
      apt1Perk4: 'Cucina completa con lavastoviglie, forno e Nespresso',
      apt2Perk1: 'Patio giardino privato e rilassante con piante e ombrellone',
      apt2Perk2: 'Ospita fino a 3 persone (Piano terra, zero scale)',
      apt2Perk3: 'Silenziosa corte interna sabauda ricca di fascino',
      apt2Perk4: 'Accesso facilitato, animali ammessi su richiesta',
    },
    location: {
      badge: 'La Posizione',
      title: 'Via Po 51, Nel Cuore di Torino',
      subtitle:
        'Una posizione impareggiabile: sotto i maestosi portici storici di Via Po, a pochi passi dalla Mole Antonelliana e da Piazza Vittorio Veneto.',
      addressLabel: 'Indirizzo degli appartamenti:',
      fullAddress: 'Via Po, 51 - 10124 Torino (TO), Italia',
      openGoogleMaps: 'Apri su Google Maps',
      gettingHereTitle: 'Come Raggiungerci',
      gettingHereDesc:
        'Facilmente raggiungibile a piedi o in pochi minuti di tram/bus sia dalla stazione di Porta Nuova che da Porta Susa. Fermate dei mezzi pubblici proprio davanti a Via Po.',
      contactForDirections: 'Chiedi info per il viaggio',
      highlights: [
        {
          title: 'Mole Antonelliana & Museo del Cinema',
          distance: '3 min a piedi',
          description:
            'Il simbolo monumentale di Torino e il celebre museo interattivo si trovano a due passi.',
        },
        {
          title: 'Piazza Vittorio Veneto & Fiume Po',
          distance: '2 min a piedi',
          description:
            'Una delle piazze più grandi d’Europa, ideale per aperitivi serali e passeggiate lungo i Murazzi.',
        },
        {
          title: 'Piazza Castello & Palazzo Reale',
          distance: '6 min a piedi',
          description:
            'Il cuore storico e regale della città, con Palazzo Madama e i Musei Reali.',
        },
        {
          title: 'Caffè Storici, Ristoranti & Gelaterie',
          distance: 'Lungo Via Po',
          description:
            'Bicerin, gianduiotti e le migliori trattorie piemontesi proprio sotto casa.',
        },
      ],
    },
    reviews: {
      badge: 'Cosa Dicono di Noi',
      title: 'Apprezzati da Viaggiatori di Tutto il Mondo',
      subtitle:
        'Leggi le recensioni autentiche lasciate da ospiti che hanno soggiornato nei nostri appartamenti tramite Airbnb e Booking.com.',
      verifiedAirbnb: 'Ospite Verificato Airbnb',
      exceptionalBooking: 'Punteggio Straordinario Booking.com',
      verifiedGuest: 'Ospite Certificato',
      from: 'da',
    },
    contact: {
      badge: 'Comunicazione Diretta',
      title: 'Hai Domande Prima di Prenotare?',
      subtitle:
        'Le prenotazioni e i calendari avvengono su Airbnb e Booking.com, ma sono a tua completa disposizione per informazioni su parcheggi, trasporti e richieste particolari.',
      hostTitle: 'Francesco',
      hostRole: 'Host & Gestore di Melina Apartments',
      languagesLabel: 'Lingue parlate:',
      whatsappCta: 'Scrivimi su WhatsApp',
      whatsappSub: 'Risposta rapida',
      thankYouTitle: 'Grazie per il tuo messaggio!',
      thankYouText:
        'Ti risponderò al più presto. Ricorda che puoi verificare date e disponibilità in tempo reale su Airbnb e Booking.com.',
      sendAnother: 'Invia un’altra domanda',
      yourName: 'Il tuo nome *',
      yourEmail: 'La tua email *',
      inquiryApartment: 'A quale appartamento sei interessato?',
      bothOption: 'Entrambi / Da valutare',
      yourMessage: 'Il tuo messaggio o date desiderate *',
      messagePlaceholder:
        'Ciao Francesco, stiamo pianificando una visita a Torino. Volevo chiederti se...',
      sendButton: 'Invia Messaggio a Francesco',
      sendingButton: 'Invio in corso...',
    },
    footer: {
      tagline:
        'Due eleganti appartamenti vacanza nel centro storico di Torino, in Via Po 51.',
      bookOnline: 'Prenota Online',
      explore: 'Navigazione',
      rights:
        'Tutti i diritti riservati. Prenotazioni intermediate in sicurezza su Airbnb e Booking.com.',
      backToTop: 'Torna su',
    },
    apartments: {
      terrace: {
        name: 'La Melina sulla Mole',
        subtitle:
          'Luminoso appartamento all’ultimo piano con suggestivo terrazzo panoramico privato',
        badgeText: 'Booking.com Traveler Review Award 9.8 / 10',
        description:
          'Un rifugio baciato dal sole in Via Po 51, con un ampio terrazzo privato che domina i tetti di Torino. Ideale per coppie, famiglie o professionisti in cerca di charme autentico e comfort moderni.',
        story:
          'La Melina sulla Mole nasce per offrirti momenti indimenticabili. Fai colazione all’aperto guardando il cielo di Torino o rilassati con un calice di vino al tramonto sul terrazzo lounge. La zona giorno presenta soffitti alti, zona pranzo dedicata e una moderna cucina attrezzata per ogni esigenza.',
        highlights: [
          'Terrazzo privato all’ultimo piano con tavolo da pranzo esterno e sdraio prendisole',
          'Posizione centralissima in Via Po 51, a due passi da Piazza Vittorio e Mole',
          'Serratura digitale con codice per un self check-in comodo a qualsiasi ora',
          'Valutazione 9.8/10 per pulizia e accoglienza dell’host su Booking.com',
        ],
        galleryCaptions: [
          'Soggiorno accogliente con abbondante luce naturale e accesso diretto al terrazzo',
          'Camera matrimoniale con materasso memory foam king size e armadio',
          'Cucina moderna completa di piano a induzione, forno e postazione Nespresso',
          'Bagno contemporaneo con grande doccia walk-in a pioggia',
          'Terrazzo panoramico privato con tavolo da pranzo e vista sui tetti torinesi',
        ],
        rules: {
          checkIn: 'Dalle 15:00 (Self check-in con tastierino)',
          checkOut: 'Entro le 10:30',
          policies: 'Vietato fumare all’interno · No feste ed eventi · No animali',
          quietHours: 'Dalle 22:00 alle 08:00',
        },
      },
      garden: {
        name: 'La Melina su Via Po',
        subtitle:
          'Affascinante loft al piano terra con intimo patio giardino botanico privato',
        badgeText: 'Airbnb Superhost Preferred · 4.96 ★',
        description:
          'Un’oasi di quiete nel centro storico: ambienti rifiniti con dettagli di design e accesso diretto a un giardino segreto ombreggiato da piante e gelsomino. Perfetto per rigenerarsi dopo una giornata in città.',
        story:
          'La Melina su Via Po unisce la quiete delle storiche corti interne di Via Po 51 alla modernità degli arredi. Situato al piano terra senza barriere architettoniche e senza scale da salire, dispone di un riservato patio esterno ideale per il caffè del mattino o un momento di lettura immersi nel verde.',
        highlights: [
          'Patio giardino privato e recintato con tavolo bistrot e ombrellone',
          'Comodo accesso a piano terra senza scale, ideale per chi viaggia con valigie pesanti',
          'Ospitalità Superhost con guida personalizzata su Torino e i suoi segreti',
          'Cestino di benvenuto omaggio con specialità tipiche piemontesi',
        ],
        galleryCaptions: [
          'Interni ricercati con zona living accogliente e divano relax',
          'Camera da letto silenziosa con letto matrimoniale e materasso ergonomico',
          'Cucina attrezzata con piano cottura, microonde e macchina per caffè italiano',
          'Bagno elegante con prodotti corpo bio e doccia rigenerante',
          'Patio giardino esclusivo ombreggiato con piante e sedute all’aperto',
        ],
        rules: {
          checkIn: 'Dalle 15:00 (Accesso rapido con tastierino numerico)',
          checkOut: 'Entro le 10:30',
          policies: 'Vietato fumare all’interno · No feste · Animali ammessi su richiesta',
          quietHours: 'Dalle 22:00 alle 08:00',
        },
      },
    },
  },
  en: {
    nav: {
      apartments: 'The Apartments',
      terrace: 'La Melina sulla Mole',
      garden: 'La Melina su Via Po',
      amenities: 'Amenities',
      location: 'Location',
      reviews: 'Reviews',
      contact: 'Contact',
    },
    hero: {
      welcomeBadge: 'Welcome to Melina Apartments · Turin Center',
      headlineStart: 'Two Handcrafted Retreats in the Heart of',
      headlineHighlight: 'Turin',
      subtitle:
        'Experience Italian elegance with modern comfort. Two private holiday apartments at Via Po 51, each featuring its own peaceful outdoor sanctuary.',
      viewDetails: 'Details & Photos',
      bookOn: 'Book on',
      listedOn: 'Listed on',
      guests: 'Guests',
      bedroom: 'Bedroom',
      beds: 'Beds',
      bath: 'Bath',
      superhostVerified: 'Superhost Hospitality',
      superhostSub: 'Top-rated guest reviews',
      selfCheckIn: 'Smart Keyless Check-in',
      selfCheckInSub: '24/7 Keypad entry code',
      fastWifi: 'Fast Fiber Wi-Fi',
      fastWifiSub: '300+ Mbps connection',
      spotless: 'Spotless Cleanliness',
      spotlessSub: 'Professionally sanitized',
    },
    apartmentSection: {
      guests: 'Guests',
      bedrooms: 'Bedrooms',
      bathrooms: 'Bathrooms',
      surface: 'Surface',
      rating: 'Rating',
      aboutSpace: 'About the Space',
      highlightsTitle: 'Apartment Highlights',
      offersTitle: 'What this place offers',
      houseRulesTitle: 'House Rules & Timing',
      checkIn: 'Check-in',
      checkOut: 'Check-out',
      policies: 'Policies',
      quietHours: 'Quiet hours',
      directBooking: 'Direct Booking',
      officialListing: 'Official Listing on',
      airbnbGuarantee:
        'Check real-time calendar dates, seasonal pricing, verified guest reviews, and book with Airbnb guest protection.',
      bookingGuarantee:
        'Check instant availability, flexible cancellation options, and book with Booking.com guarantee.',
      liveCalendar: 'Real-time updated calendar availability',
      instantConfirmation: 'Instant confirmation & secure checkout',
      hostSupport: '24/7 direct host assistance by Francesco',
      bookButton: 'View Availability & Book on',
      redirectNotice: 'You will be redirected to the official listing page.',
      viewAllPhotos: 'View all photos',
    },
    amenities: {
      badge: 'Comfort & Standards',
      title: 'Designed for Effortless Relaxation',
      subtitle:
        'Both apartments are prepared to high standards so you feel immediately at home in Turin.',
      fastWifiTitle: 'Fast Fiber Wi-Fi',
      fastWifiDesc:
        'Smooth 300+ Mbps internet in every room, perfect for streaming and remote work.',
      climateTitle: 'Climate Control & Heating',
      climateDesc:
        'Modern whisper-quiet air conditioning and independent heating in all rooms.',
      checkinTitle: 'Self Check-In 24/7',
      checkinDesc:
        'Smart digital keypad locks allow flexible arrival whenever your flight or train reaches Turin.',
      coffeeTitle: 'Italian Coffee Bars',
      coffeeDesc:
        'Equipped with Nespresso machines, authentic moka pots, organic teas, and complimentary welcome treats.',
      cleanTitle: 'Hotel Cleanliness & Linens',
      cleanDesc:
        'Crisp cotton linens, plush bath towels, and professional sanitization before every guest.',
      conciergeTitle: 'Local Guide & Host Support',
      conciergeDesc:
        'Curated Turin guidebook with trattorias, historic cafes, and direct host WhatsApp assistance.',
      compareTitle: 'Which apartment is right for you?',
      compareSubtitle:
        'Compare our two apartments to pick the one best suited for your stay in Turin.',
      apt1Perk1: 'Private panoramic rooftop terrace with dining table & loungers',
      apt1Perk2: 'Accommodates up to 4 guests (King bed + sleeper sofa)',
      apt1Perk3: 'Top-floor bright living space with rooftop views',
      apt1Perk4: 'Full kitchen with dishwasher, oven, and Nespresso',
      apt2Perk1: 'Private botanical garden patio with shade umbrella',
      apt2Perk2: 'Accommodates up to 3 guests (Ground floor, zero steps)',
      apt2Perk3: 'Quiet historical courtyard setting full of character',
      apt2Perk4: 'Easy step-free access, pets welcomed upon request',
    },
    location: {
      badge: 'The Neighborhood',
      title: 'Via Po 51, The Historic Heart of Turin',
      subtitle:
        'A prestigious central address: located under the grand 17th-century arcades of Via Po, moments from the Mole Antonelliana and Piazza Vittorio Veneto.',
      addressLabel: 'Apartments address:',
      fullAddress: 'Via Po, 51 - 10124 Turin (TO), Italy',
      openGoogleMaps: 'Open in Google Maps',
      gettingHereTitle: 'Getting to Via Po 51',
      gettingHereDesc:
        'Easily reached on foot or via short tram/bus ride from both Porta Nuova and Porta Susa central stations. Public transit stops right outside on Via Po.',
      contactForDirections: 'Ask Host For Travel Advice',
      highlights: [
        {
          title: 'Mole Antonelliana & National Cinema Museum',
          distance: '3 min walk',
          description:
            'Turin’s iconic landmark and its acclaimed interactive museum are just around the corner.',
        },
        {
          title: 'Piazza Vittorio Veneto & River Po',
          distance: '2 min walk',
          description:
            'One of Europe’s grandest squares, famous for riverside cafes, evening aperitivi, and Murazzi promenades.',
        },
        {
          title: 'Piazza Castello & Royal Palace',
          distance: '6 min walk',
          description:
            'The royal heart of the city featuring Palazzo Madama and the Royal Armory.',
        },
        {
          title: 'Historic Cafes, Pastry Shops & Trattorias',
          distance: 'Along Via Po',
          description:
            'Sample authentic Bicerin, gianduiotti chocolates, and Piedmontese cuisine right outside your door.',
        },
      ],
    },
    reviews: {
      badge: 'Guest Feedback',
      title: 'Loved by Travelers Worldwide',
      subtitle:
        'Read verified reviews from guests who booked our apartments via Airbnb and Booking.com.',
      verifiedAirbnb: 'Verified Airbnb Guest',
      exceptionalBooking: 'Exceptional Booking.com Score',
      verifiedGuest: 'Verified Guest',
      from: 'from',
    },
    contact: {
      badge: 'Direct Communication',
      title: 'Have Questions Before Booking?',
      subtitle:
        'While reservations are made via Airbnb & Booking.com, I am here to help with travel questions, parking advice, or specific requests.',
      hostTitle: 'Francesco',
      hostRole: 'Host & Manager of Melina Apartments',
      languagesLabel: 'Languages spoken:',
      whatsappCta: 'Chat on WhatsApp',
      whatsappSub: 'Instant reply',
      thankYouTitle: 'Thank You for Your Message!',
      thankYouText:
        'I will get back to you shortly. Live calendars are also available anytime on Airbnb and Booking.com.',
      sendAnother: 'Send another question',
      yourName: 'Your Name *',
      yourEmail: 'Your Email *',
      inquiryApartment: 'Which apartment are you inquiring about?',
      bothOption: 'Either / Both Apartments',
      yourMessage: 'Your question or desired dates *',
      messagePlaceholder:
        'Hi Francesco, we are planning a trip to Turin. Could you let us know if...',
      sendButton: 'Send Message to Francesco',
      sendingButton: 'Sending message...',
    },
    footer: {
      tagline:
        'Two private holiday retreats in central Turin at Via Po 51.',
      bookOnline: 'Book Online',
      explore: 'Navigation',
      rights:
        'All rights reserved. Bookings fulfilled securely on Airbnb and Booking.com.',
      backToTop: 'Back to Top',
    },
    apartments: {
      terrace: {
        name: 'La Melina sulla Mole',
        subtitle:
          'Top-floor bright apartment with private panoramic rooftop terrace',
        badgeText: 'Booking.com Traveler Review Award 9.8 / 10',
        description:
          'A sun-drenched retreat at Via Po 51 featuring an expansive private terrace overlooking the rooftops of Turin. Ideal for couples, families, or remote workers seeking authentic charm and modern comforts.',
        story:
          'La Melina sulla Mole was curated to offer guests unforgettable memories. Savor breakfast outdoors under the Italian morning sun or relax with an evening aperitivo watching the sunset from the terrace lounge. The living space features high ceilings, a dining area, and a fully equipped chef’s kitchen.',
        highlights: [
          'Top-floor private terrace with al fresco dining table & sun loungers',
          'Prime central location in Via Po 51, steps from Piazza Vittorio & Mole',
          'Digital keypad smart lock for seamless 24/7 keyless arrival',
          'Rated 9.8/10 for cleanliness and host service on Booking.com',
        ],
        galleryCaptions: [
          'Spacious living room with natural light and terrace access',
          'Master bedroom with king-size memory foam mattress',
          'Modern kitchen with induction stove, oven, and Nespresso bar',
          'Contemporary bathroom with walk-in rainfall shower',
          'Private rooftop terrace with outdoor dining and city views',
        ],
        rules: {
          checkIn: 'From 3:00 PM (Keypad self check-in)',
          checkOut: 'Until 10:30 AM',
          policies: 'No indoor smoking · No parties or events · No pets',
          quietHours: '10:00 PM – 8:00 AM',
        },
      },
      garden: {
        name: 'La Melina su Via Po',
        subtitle:
          'Charming ground-floor loft with private botanical garden patio',
        badgeText: 'Airbnb Superhost Preferred · 4.96 ★',
        description:
          'A peaceful haven in Turin’s historic center: stylish designer finishes and direct access to a tranquil garden patio shaded by lush plants and jasmine. An idyllic sanctuary after exploring the city.',
        story:
          'La Melina su Via Po combines the quiet atmosphere of historical Via Po courtyards with modern Italian furnishings. Located on the ground floor with zero stair climbing, it opens up to an enclosed private patio perfect for your morning espresso or relaxing evening read.',
        highlights: [
          'Private enclosed botanical patio with bistro table and parasol',
          'Step-free ground-floor access, ideal for luggage and easy entry',
          'Superhost hospitality with bespoke local guide on Turin secrets',
          'Complimentary Italian welcome basket with local Piedmontese treats',
        ],
        galleryCaptions: [
          'Inviting loft interior with cozy lounge and reading nook',
          'Peaceful bedroom with queen plush bed and acoustic insulation',
          'Fully equipped modern kitchenette with breakfast bar',
          'Sleek bathroom with organic toiletries and rain shower',
          'Private botanical garden patio with shade umbrella & bistro table',
        ],
        rules: {
          checkIn: 'From 3:00 PM (Keyless access code)',
          checkOut: 'Until 10:30 AM',
          policies: 'No indoor smoking · No parties · Pets welcome upon request',
          quietHours: '10:00 PM – 8:00 AM',
        },
      },
    },
  },
  fr: {
    nav: {
      apartments: 'Les Appartements',
      terrace: 'La Melina sulla Mole',
      garden: 'La Melina su Via Po',
      amenities: 'Services',
      location: 'Emplacement',
      reviews: 'Avis',
      contact: 'Contact',
    },
    hero: {
      welcomeBadge: 'Bienvenue à Melina Apartments · Turin Centre',
      headlineStart: 'Deux Havres de Paix au Cœur de',
      headlineHighlight: 'Turin',
      subtitle:
        'Découvrez le charme piémontais et le confort contemporain. Deux appartements privés situés Via Po 51, chacun avec son propre espace extérieur exclusif.',
      viewDetails: 'Détails & Photos',
      bookOn: 'Réserver sur',
      listedOn: 'Disponible sur',
      guests: 'Voyageurs',
      bedroom: 'Chambre',
      beds: 'Lits',
      bath: 'Salle de bain',
      superhostVerified: 'Hospitalité Superhost',
      superhostSub: 'Excellentes évaluations',
      selfCheckIn: 'Arrivée Autonome',
      selfCheckInSub: 'Code digicode 24h/24',
      fastWifi: 'Wi-Fi Fibre Très Rapide',
      fastWifiSub: 'Débit 300+ Mbps',
      spotless: 'Propreté Irréprochable',
      spotlessSub: 'Désinfection professionnelle',
    },
    apartmentSection: {
      guests: 'Voyageurs',
      bedrooms: 'Chambres',
      bathrooms: 'Salles de bain',
      surface: 'Superficie',
      rating: 'Note',
      aboutSpace: 'À propos du logement',
      highlightsTitle: 'Points Forts',
      offersTitle: 'Ce que propose ce logement',
      houseRulesTitle: 'Règlement Intérieur et Horaires',
      checkIn: 'Arrivée',
      checkOut: 'Départ',
      policies: 'Conditions',
      quietHours: 'Heures de calme',
      directBooking: 'Réservation Officielle',
      officialListing: 'Annonce Officielle sur',
      airbnbGuarantee:
        'Consultez le calendrier en direct, les tarifs selon la saison et réservez en toute sécurité avec la garantie Airbnb.',
      bookingGuarantee:
        'Consultez les disponibilités instantanées, les conditions d’annulation et réservez avec la garantie Booking.com.',
      liveCalendar: 'Calendrier mis à jour en temps réel',
      instantConfirmation: 'Confirmation immédiate et paiement sécurisé',
      hostSupport: 'Assistance directe 24h/24 par l’hôte Francesco',
      bookButton: 'Voir Disponibilités & Réserver sur',
      redirectNotice: 'Vous serez redirigé vers l’annonce officielle.',
      viewAllPhotos: 'Voir toutes les photos',
    },
    amenities: {
      badge: 'Confort & Exigences',
      title: 'Conçu pour une Détente Absolue',
      subtitle:
        'Nos deux appartements sont préparés avec un soin extrême pour que vous vous sentiez comme chez vous à Turin.',
      fastWifiTitle: 'Wi-Fi Fibre Haut Débit',
      fastWifiDesc:
        'Connexion 300+ Mbps fluide dans toutes les pièces, parfaite pour le streaming et le télétravail.',
      climateTitle: 'Climatisation & Chauffage',
      climateDesc:
        'Climatisation silencieuse et chauffage autonome réglable pour un confort optimal en toute saison.',
      checkinTitle: 'Arrivée Autonome 24h/24',
      checkinDesc:
        'Serrures numériques à code pour une entrée facile à l’heure de votre convenance.',
      coffeeTitle: 'Pause Café & Thé à l’Italienne',
      coffeeDesc:
        'Machine Nespresso, moka traditionnelle, bouilloire et panier de bienvenue offert.',
      cleanTitle: 'Linge & Propreté Hôtelière',
      cleanDesc:
        'Draps en coton soyeux, serviettes moelleuses et ménage rigoureux avant chaque arrivée.',
      conciergeTitle: 'Guide Local et Conseils',
      conciergeDesc:
        'Recommandations exclusives de restaurants, musées et cafés historiques avec contact WhatsApp.',
      compareTitle: 'Quel appartement choisir ?',
      compareSubtitle:
        'Comparez nos deux logements pour trouver l’option idéale pour votre séjour à Turin.',
      apt1Perk1: 'Grande terrasse panoramique privée avec chaises longues et table',
      apt1Perk2: 'Capacité jusqu’à 4 personnes (Grand lit King + canapé-lit)',
      apt1Perk3: 'Dernier étage baigné de lumière avec vue sur les toits',
      apt1Perk4: 'Cuisine complète avec lave-vaisselle, four et Nespresso',
      apt2Perk1: 'Patio jardin intime et arboré avec parasol et table bistrot',
      apt2Perk2: 'Capacité jusqu’à 3 personnes (Rez-de-chaussée, sans escalier)',
      apt2Perk3: 'Cour intérieure historique silencieuse et pleine de cachet',
      apt2Perk4: 'Accès sans marches, animaux acceptés sur demande préalable',
    },
    location: {
      badge: 'Le Quartier',
      title: 'Via Po 51, Le Cœur Historique de Turin',
      subtitle:
        'Une adresse centrale d’exception : sous les magnifiques arcades de la Via Po, à quelques pas de la Mole Antonelliana et de la Piazza Vittorio Veneto.',
      addressLabel: 'Adresse des appartements :',
      fullAddress: 'Via Po, 51 - 10124 Turin (TO), Italie',
      openGoogleMaps: 'Ouvrir sur Google Maps',
      gettingHereTitle: 'Comment Arriver à Via Po 51',
      gettingHereDesc:
        'Facilement accessible à pied ou par tram/bus direct depuis les gares centrales de Porta Nuova et Porta Susa. Arrêts de transport public juste devant la Via Po.',
      contactForDirections: 'Demander Conseil pour le Trajet',
      highlights: [
        {
          title: 'Mole Antonelliana & Musée du Cinéma',
          distance: '3 min à pied',
          description:
            'Le monument emblématique de Turin et son musée interactif renommé sont juste au coin de la rue.',
        },
        {
          title: 'Piazza Vittorio Veneto & Fleuve Pô',
          distance: '2 min à pied',
          description:
            'L’une des plus grandes places d’Europe, réputée pour ses terrasses et les promenades des Murazzi.',
        },
        {
          title: 'Piazza Castello & Palais Royal',
          distance: '6 min à pied',
          description:
            'Le centre royal de la ville avec le Palais Madama et les Musées Royaux.',
        },
        {
          title: 'Cafés Historiques, Pâtisseries & Trattorias',
          distance: 'Le long de Via Po',
          description:
            'Savourez le véritable Bicerin et les spécialités piémontaises au pas de votre porte.',
        },
      ],
    },
    reviews: {
      badge: 'Témoignages',
      title: 'Apprécié par les Voyageurs du Monde Entier',
      subtitle:
        'Découvrez les avis authentiques laissés par nos hôtes sur Airbnb et Booking.com.',
      verifiedAirbnb: 'Voyageur Vérifié Airbnb',
      exceptionalBooking: 'Note Exceptionnelle Booking.com',
      verifiedGuest: 'Hôte Vérifié',
      from: 'de',
    },
    contact: {
      badge: 'Contact Direct',
      title: 'Une Question Avant de Réserver ?',
      subtitle:
        'Les réservations s’effectuent sur Airbnb et Booking.com, mais je suis disponible pour tout renseignement sur le quartier, le stationnement ou vos besoins spécifiques.',
      hostTitle: 'Francesco',
      hostRole: 'Hôte et Gestionnaire de Melina Apartments',
      languagesLabel: 'Langues parlées :',
      whatsappCta: 'Discuter sur WhatsApp',
      whatsappSub: 'Réponse rapide',
      thankYouTitle: 'Merci pour votre message !',
      thankYouText:
        'Je vous répondrai très rapidement. Les calendriers sont également accessibles en temps réel sur Airbnb et Booking.com.',
      sendAnother: 'Poser une autre question',
      yourName: 'Votre Nom *',
      yourEmail: 'Votre Email *',
      inquiryApartment: 'Quel appartement vous intéresse ?',
      bothOption: 'L’un ou l’autre / Les deux',
      yourMessage: 'Votre question ou dates souhaitées *',
      messagePlaceholder:
        'Bonjour Francesco, nous prévoyons un séjour à Turin et nous voulions savoir si...',
      sendButton: 'Envoyer le Message à Francesco',
      sendingButton: 'Envoi en cours...',
    },
    footer: {
      tagline:
        'Deux appartements d’hôtes de charme au cœur de Turin, Via Po 51.',
      bookOnline: 'Réserver en Ligne',
      explore: 'Navigation',
      rights:
        'Tous droits réservés. Réservations traitées en toute sécurité sur Airbnb et Booking.com.',
      backToTop: 'Retour en haut',
    },
    apartments: {
      terrace: {
        name: 'La Melina sulla Mole',
        subtitle:
          'Appartement lumineux au dernier étage avec terrasse panoramique privée',
        badgeText: 'Booking.com Traveler Review Award 9.8 / 10',
        description:
          'Un havre baigné de soleil au 51 Via Po avec une immense terrasse privée dominant les toits de Turin. Idéal pour couples, familles ou séjours professionnels alliant élégance et confort.',
        story:
          'La Melina sulla Mole a été conçu pour offrir des moments magiques. Prenez votre petit-déjeuner en plein air ou savourez un apéritif au coucher du soleil. L’espace de vie offre de hauts plafonds, un bel espace repas et une cuisine moderne entièrement équipée.',
        highlights: [
          'Terrasse privée au dernier étage avec table pour dîner dehors et transats',
          'Emplacement exceptionnel Via Po 51, à deux pas de Piazza Vittorio et de la Mole',
          'Serrure numérique à code pour une arrivée autonome et sans stress',
          'Noté 9.8/10 pour la propreté et l’accueil sur Booking.com',
        ],
        galleryCaptions: [
          'Séjour spacieux et lumineux avec accès direct à la terrasse',
          'Chambre principale avec literie king size à mémoire de forme',
          'Cuisine moderne avec plaques à induction, four et espace Nespresso',
          'Salle de bain contemporaine avec grande douche à l’italienne',
          'Terrasse panoramique privée avec table d’extérieur et vue sur les toits',
        ],
        rules: {
          checkIn: 'À partir de 15h00 (Arrivée autonome avec digicode)',
          checkOut: 'Jusqu’à 10h30',
          policies: 'Logement non-fumeur · Fêtes interdites · Animaux non admis',
          quietHours: 'De 22h00 à 08h00',
        },
      },
      garden: {
        name: 'La Melina su Via Po',
        subtitle:
          'Loft plein de charme en rez-de-chaussée avec patio jardin privatif',
        badgeText: 'Airbnb Superhost Preferred · 4.96 ★',
        description:
          'Une oasis de sérénité au cœur de la ville : finitions soignées et accès direct à un patio intime entouré de verdure et de jasmin. Le refuge parfait après une belle journée de visite.',
        story:
          'La Melina su Via Po allie le calme des cours historiques de la Via Po au confort contemporain. Situé en rez-de-chaussée sans marches à monter, il dispose d’un jardin extérieur privé pour vos cafés du matin ou vos lectures apaisantes.',
        highlights: [
          'Patio jardin privatif clos avec table bistrot et parasol',
          'Accès de plain-pied sans marches, très pratique pour les bagages',
          'Hospitalité Superhost avec guide personnalisé des adresses secrètes de Turin',
          'Panier de bienvenue offert avec des délices piémontais',
        ],
        galleryCaptions: [
          'Intérieur chaleureux avec salon douillet et coin lecture',
          'Chambre paisible avec lit queen size et excellente isolation phonique',
          'Kitchenette moderne équipée avec coin repas',
          'Salle de bain soignée avec produits bio et douche pluie',
          'Patio jardin privatif ombragé avec mobilier d’extérieur',
        ],
        rules: {
          checkIn: 'À partir de 15h00 (Code d’accès sécurisé)',
          checkOut: 'Jusqu’à 10h30',
          policies: 'Logement non-fumeur · Fêtes interdites · Animaux bienvenus sur demande',
          quietHours: 'De 22h00 à 08h00',
        },
      },
    },
  },
  de: {
    nav: {
      apartments: 'Die Apartments',
      terrace: 'La Melina sulla Mole',
      garden: 'La Melina su Via Po',
      amenities: 'Ausstattung',
      location: 'Lage',
      reviews: 'Bewertungen',
      contact: 'Kontakt',
    },
    hero: {
      welcomeBadge: 'Willkommen bei Melina Apartments · Turin Zentrum',
      headlineStart: 'Zwei Exklusive Rückzugsorte im Herzen von',
      headlineHighlight: 'Turin',
      subtitle:
        'Erleben Sie piemontesischen Charme und modernen Luxus. Zwei private Ferienapartments in der Via Po 51, jeweils mit eigenem Außenbereich.',
      viewDetails: 'Details & Fotos',
      bookOn: 'Buchen auf',
      listedOn: 'Verfügbar auf',
      guests: 'Gäste',
      bedroom: 'Schlafzimmer',
      beds: 'Betten',
      bath: 'Bad',
      superhostVerified: 'Superhost Gastfreundschaft',
      superhostSub: 'Hervorragende Bewertungen',
      selfCheckIn: 'Smart Self Check-In',
      selfCheckInSub: '24/7 Zahlencode-Zugang',
      fastWifi: 'Schnelles Glasfaser-WLAN',
      fastWifiSub: '300+ Mbit/s Geschwindigkeit',
      spotless: 'Makellose Sauberkeit',
      spotlessSub: 'Professionell desinfiziert',
    },
    apartmentSection: {
      guests: 'Gäste',
      bedrooms: 'Schlafzimmer',
      bathrooms: 'Badezimmer',
      surface: 'Fläche',
      rating: 'Bewertung',
      aboutSpace: 'Über die Unterkunft',
      highlightsTitle: 'Highlights des Apartments',
      offersTitle: 'Was diese Unterkunft bietet',
      houseRulesTitle: 'Hausregeln & Zeiten',
      checkIn: 'Check-in',
      checkOut: 'Check-out',
      policies: 'Bedingungen',
      quietHours: 'Ruhezeiten',
      directBooking: 'Offizielle Buchung',
      officialListing: 'Offizielles Inserat auf',
      airbnbGuarantee:
        'Live-Verfügbarkeit, Saisonpreise, verifizierte Bewertungen und sichere Buchung mit Airbnb-Garantie.',
      bookingGuarantee:
        'Sofortige Bestätigung, flexible Stornierungsoptionen und Buchung mit Booking.com-Garantie.',
      liveCalendar: 'Echtzeit-Kalender für genaue Verfügbarkeit',
      instantConfirmation: 'Sofortige Bestätigung & sichere Bezahlung',
      hostSupport: 'Direkte Betreuung rund um die Uhr durch Gastgeber Francesco',
      bookButton: 'Verfügbarkeit prüfen & buchen auf',
      redirectNotice: 'Sie werden zum offiziellen Inserat weitergeleitet.',
      viewAllPhotos: 'Alle Fotos ansehen',
    },
    amenities: {
      badge: 'Komfort & Qualität',
      title: 'Perfekt für Ihre Erholung',
      subtitle:
        'Beide Apartments sind mit viel Liebe zum Detail ausgestattet, damit Sie sich in Turin sofort wohlfühlen.',
      fastWifiTitle: 'Schnelles Glasfaser-WLAN',
      fastWifiDesc:
        'Zuverlässiges 300+ Mbit/s Internet für Streaming und Homeoffice in allen Räumen.',
      climateTitle: 'Klimaanlage & Heizung',
      climateDesc:
        'Leise Klimatisierung und autonome Heizung für jede Jahreszeit.',
      checkinTitle: 'Self Check-In 24/7',
      checkinDesc:
        'Digitales Codeschloss für eine unkomplizierte Anreise zu jeder Uhrzeit.',
      coffeeTitle: 'Italienische Kaffeeecke',
      coffeeDesc:
        'Nespresso-Maschine, original italienische Moka, Wasserkocher und Willkommensgruß.',
      cleanTitle: 'Hotelstandard & Frische Bettwäsche',
      cleanDesc:
        'Feine Baumwollbettwäsche, flauschige Handtücher und höchste Hygiene vor jeder Ankunft.',
      conciergeTitle: 'Persönliche Turin-Tipps',
      conciergeDesc:
        'Empfehlungen für Trattorien, Museen und historische Cafés mit WhatsApp-Betreuung.',
      compareTitle: 'Welches Apartment passt zu Ihnen?',
      compareSubtitle:
        'Vergleichen Sie beide Unterkünfte für Ihren perfekten Aufenthalt in Turin.',
      apt1Perk1: 'Große private Dachterrasse mit Esstisch & Sonnenliegen',
      apt1Perk2: 'Platz für bis zu 4 Personen (Kingsize-Bett + Schlafsofa)',
      apt1Perk3: 'Oberste Etage mit viel Licht und Blick über die Dächer',
      apt1Perk4: 'Komplette Küche mit Geschirrspüler, Backofen und Nespresso',
      apt2Perk1: 'Privater botanischer Garten-Innenhof mit Sonnenschirm',
      apt2Perk2: 'Platz für bis zu 3 Personen (Erdgeschoss, stufenlos)',
      apt2Perk3: 'Ruhiger historischer Innenhof voller italienischem Flair',
      apt2Perk4: 'Stufenloser Zugang, Haustiere auf Anfrage willkommen',
    },
    location: {
      badge: 'Die Umgebung',
      title: 'Via Po 51, Das Historische Zentrum von Turin',
      subtitle:
        'Beste Innenstadtlage: unter den eleganten Arkaden der Via Po, nur wenige Schritte von der Mole Antonelliana und der Piazza Vittorio Veneto entfernt.',
      addressLabel: 'Adresse der Apartments:',
      fullAddress: 'Via Po, 51 - 10124 Turin (TO), Italien',
      openGoogleMaps: 'In Google Maps öffnen',
      gettingHereTitle: 'Anreise zur Via Po 51',
      gettingHereDesc:
        'Bequem zu Fuß oder mit direkter Straßenbahn/Bus von den Hauptbahnhöfen Porta Nuova und Porta Susa erreichbar. Haltestellen direkt vor der Tür in Via Po.',
      contactForDirections: 'Gastgeber nach Anreiseroute fragen',
      highlights: [
        {
          title: 'Mole Antonelliana & Nationales Filmmuseum',
          distance: '3 Min. zu Fuß',
          description:
            'Das Wahrzeichen Turins und sein faszinierendes Museum liegen direkt um die Ecke.',
        },
        {
          title: 'Piazza Vittorio Veneto & Po-Flussufer',
          distance: '2 Min. zu Fuß',
          description:
            'Einer der größten Plätze Europas mit beliebten Aperitivo-Bars und Spazierwegen entlang der Murazzi.',
        },
        {
          title: 'Piazza Castello & Königspalast',
          distance: '6 Min. zu Fuß',
          description:
            'Das historische Zentrum mit Palazzo Madama und den Königlichen Sammlungen.',
        },
        {
          title: 'Traditionscafés, Chocolaterien & Trattorien',
          distance: 'Entlang der Via Po',
          description:
            'Genießen Sie Bicerin, Gianduiotti und piemontesische Küche direkt vor der Haustür.',
        },
      ],
    },
    reviews: {
      badge: 'Gästestimmen',
      title: 'Beliebt bei Reisenden Weltweit',
      subtitle:
        'Lesen Sie echte Bewertungen von Gästen, die unsere Apartments über Airbnb und Booking.com gebucht haben.',
      verifiedAirbnb: 'Verifizierter Airbnb-Gast',
      exceptionalBooking: 'Hervorragende Booking.com-Note',
      verifiedGuest: 'Geprüfter Gast',
      from: 'aus',
    },
    contact: {
      badge: 'Direkter Kontakt',
      title: 'Haben Sie Fragen vor der Buchung?',
      subtitle:
        'Buchungen erfolgen über Airbnb und Booking.com. Für Fragen zur Anreise, Parkmöglichkeiten oder Sonderwünsche stehe ich Ihnen gerne zur Verfügung.',
      hostTitle: 'Francesco',
      hostRole: 'Gastgeber & Verwalter von Melina Apartments',
      languagesLabel: 'Gesprochene Sprachen:',
      whatsappCta: 'Per WhatsApp schreiben',
      whatsappSub: 'Schnelle Rückmeldung',
      thankYouTitle: 'Vielen Dank für Ihre Nachricht!',
      thankYouText:
        'Ich werde mich schnellstmöglich bei Ihnen melden. Die Live-Kalender finden Sie jederzeit auf Airbnb und Booking.com.',
      sendAnother: 'Weitere Frage senden',
      yourName: 'Ihr Name *',
      yourEmail: 'Ihre E-Mail *',
      inquiryApartment: 'Für welches Apartment interessieren Sie sich?',
      bothOption: 'Beide / Noch unentschieden',
      yourMessage: 'Ihre Frage oder gewünschte Reisedaten *',
      messagePlaceholder:
        'Hallo Francesco, wir planen eine Reise nach Turin und möchten gerne wissen, ob...',
      sendButton: 'Nachricht an Francesco senden',
      sendingButton: 'Wird gesendet...',
    },
    footer: {
      tagline:
        'Zwei private Ferienunterkünfte im Herzen von Turin in der Via Po 51.',
      bookOnline: 'Online Buchen',
      explore: 'Navigation',
      rights:
        'Alle Rechte vorbehalten. Buchungen sicher abgewickelt über Airbnb und Booking.com.',
      backToTop: 'Nach oben',
    },
    apartments: {
      terrace: {
        name: 'La Melina sulla Mole',
        subtitle:
          'Helles Dachgeschoss-Apartment mit privater Panorama-Dachterrasse',
        badgeText: 'Booking.com Traveler Review Award 9.8 / 10',
        description:
          'Ein sonnendurchflutetes Refugium in der Via Po 51 mit großer privater Terrasse über den Dächern Turins. Ideal für Paare, Familien oder Geschäftsreisende mit Sinn für Stil und Komfort.',
        story:
          'La Melina sulla Mole bietet ein unvergessliches Turin-Erlebnis. Frühstücken Sie unter freiem Himmel oder genießen Sie den Sonnenuntergang bei einem Glas Wein. Der Wohnbereich besticht durch hohe Decken, einen großzügigen Essplatz und eine moderne Küche.',
        highlights: [
          'Private Dachterrasse mit Esstisch im Freien und bequemen Sonnenliegen',
          'Zentrale Top-Lage in der Via Po 51 nahe Piazza Vittorio und Mole',
          'Digitales Codeschloss für unkomplizierten 24/7 Self Check-in',
          'Top-Bewertung von 9.8/10 für Sauberkeit und Service auf Booking.com',
        ],
        galleryCaptions: [
          'Großzügiger Wohnbereich mit Tageslicht und Zugang zur Terrasse',
          'Hauptschlafzimmer mit hochwertigem Kingsize-Boxspringbett',
          'Moderne Küche mit Induktionsherd, Backofen und Nespresso-Station',
          'Elegantes Bad mit begehbarer Regendusche',
          'Private Dachterrasse mit Blick auf die Turiner Dächer',
        ],
        rules: {
          checkIn: 'Ab 15:00 Uhr (Self Check-in mit Code)',
          checkOut: 'Bis 10:30 Uhr',
          policies: 'Nichtraucherwohnung · Keine Partys · Keine Haustiere',
          quietHours: '22:00 – 08:00 Uhr',
        },
      },
      garden: {
        name: 'La Melina su Via Po',
        subtitle:
          'Stilvolles Erdgeschoss-Loft mit privatem begrüntem Garten-Patio',
        badgeText: 'Airbnb Superhost Preferred · 4.96 ★',
        description:
          'Eine Ruheoase mitten in Turin: geschmackvolles Interieur und direkter Zugang zu einem geschützten Innenhof mit Jasmin und mediterranen Pflanzen. Perfekt zum Entspannen nach einem Tag in der Stadt.',
        story:
          'La Melina su Via Po verbindet den Charme historischer Innenhöfe der Via Po mit modernem italienischem Design. Das stufenlose Erdgeschoss-Apartment bietet einen uneinsehbaren Gartenbereich für den Morgenkaffee oder gemütliche Lesestunden.',
        highlights: [
          'Privater begrünter Patio mit Bistrotisch und Sonnenschirm',
          'Stufenloser Erdgeschoss-Zugang, ideal für Reisende mit Gepäck',
          'Superhost-Qualität mit individuellem Reiseführer für Turin',
          'Willkommensgruß mit typischen piemontesischen Spezialitäten',
        ],
        galleryCaptions: [
          'Stilvoller Wohnbereich mit bequemer Sitzecke',
          'Ruhiges Schlafzimmer mit Queensize-Bett und Schallschutz',
          'Moderne voll ausgestattete Küchenzeile mit Bartisch',
          'Schickes Badezimmer mit Bio-Pflegeprodukten und Regendusche',
          'Privater Garten-Patio mit gemütlichen Sitzgelegenheiten im Freien',
        ],
        rules: {
          checkIn: 'Ab 15:00 Uhr (Zahlencode-Zugang)',
          checkOut: 'Bis 10:30 Uhr',
          policies: 'Nichtraucherwohnung · Keine Partys · Haustiere auf Anfrage erlaubt',
          quietHours: '22:00 – 08:00 Uhr',
        },
      },
    },
  },
  es: {
    nav: {
      apartments: 'Los Apartamentos',
      terrace: 'La Melina sulla Mole',
      garden: 'La Melina su Via Po',
      amenities: 'Servicios',
      location: 'Ubicación',
      reviews: 'Opiniones',
      contact: 'Contacto',
    },
    hero: {
      welcomeBadge: 'Bienvenidos a Melina Apartments · Centro de Turín',
      headlineStart: 'Dos Refugios Exclusivos en el Corazón de',
      headlineHighlight: 'Turín',
      subtitle:
        'Disfruta del encanto italiano con el máximo confort. Dos apartamentos vacacionales privados en Via Po 51, cada uno con su propio espacio exterior exclusivo.',
      viewDetails: 'Detalles & Fotos',
      bookOn: 'Reservar en',
      listedOn: 'Disponible en',
      guests: 'Huéspedes',
      bedroom: 'Dormitorio',
      beds: 'Camas',
      bath: 'Baño',
      superhostVerified: 'Hospitalidad Superhost',
      superhostSub: 'Calificaciones excelentes',
      selfCheckIn: 'Llegada Autónoma',
      selfCheckInSub: 'Código teclado 24/7',
      fastWifi: 'Wi-Fi Fibra Ultrarrápido',
      fastWifiSub: 'Conexión a más de 300 Mbps',
      spotless: 'Limpieza Impecable',
      spotlessSub: 'Desinfección profesional',
    },
    apartmentSection: {
      guests: 'Huéspedes',
      bedrooms: 'Dormitorios',
      bathrooms: 'Baños',
      surface: 'Superficie',
      rating: 'Puntuación',
      aboutSpace: 'Sobre el Alojamiento',
      highlightsTitle: 'Puntos Destacados',
      offersTitle: 'Servicios incluidos',
      houseRulesTitle: 'Normas de la Casa y Horarios',
      checkIn: 'Llegada',
      checkOut: 'Salida',
      policies: 'Condiciones',
      quietHours: 'Horas de silencio',
      directBooking: 'Reserva Oficial',
      officialListing: 'Anuncio Oficial en',
      airbnbGuarantee:
        'Consulta calendario en tiempo real, precios de temporada y reserva con total seguridad y garantía Airbnb.',
      bookingGuarantee:
        'Consulta fechas disponibles al instante, cancelación flexible y reserva con la garantía de Booking.com.',
      liveCalendar: 'Calendario actualizado en tiempo real',
      instantConfirmation: 'Confirmación inmediata y pago seguro',
      hostSupport: 'Atención directa 24/7 de tu anfitrión Francesco',
      bookButton: 'Ver Disponibilidad y Reservar en',
      redirectNotice: 'Serás redirigido a la página oficial del anuncio.',
      viewAllPhotos: 'Ver todas las fotos',
    },
    amenities: {
      badge: 'Confort & Estándares',
      title: 'Diseñado para Tu Máxima Relajación',
      subtitle:
        'Ambos apartamentos están preparados al detalle para que te sientas como en casa en Turín.',
      fastWifiTitle: 'Fibra Óptica de Alta Velocidad',
      fastWifiDesc:
        'Conexión fluida de 300+ Mbps en todas las habitaciones, perfecta para streaming y teletrabajo.',
      climateTitle: 'Aire Acondicionado & Climatización',
      climateDesc:
        'Climatización silenciosa y calefacción individual para tu confort en cualquier estación.',
      checkinTitle: 'Self Check-In 24/7',
      checkinDesc:
        'Cerraduras con teclado digital para acceder fácilmente a la hora que prefieras.',
      coffeeTitle: 'Rincón de Café y Té Italiano',
      coffeeDesc:
        'Cafetera Nespresso, moka italiana tradicional, hervidor y detalle de bienvenida.',
      cleanTitle: 'Ropa de Cama y Limpieza de Hotel',
      cleanDesc:
        'Sábanas de algodón de alta calidad, toallas suaves y limpieza profesional antes de cada llegada.',
      conciergeTitle: 'Guía Local y Asistencia',
      conciergeDesc:
        'Recomendaciones auténticas de trattorias, museos y cafés históricos con atención por WhatsApp.',
      compareTitle: '¿Qué apartamento es para ti?',
      compareSubtitle:
        'Compara ambas opciones para elegir el alojamiento perfecto para tu estancia en Turín.',
      apt1Perk1: 'Gran terraza privada en la azotea con mesa exterior y tumbonas',
      apt1Perk2: 'Capacidad hasta 4 personas (Cama King + sofá cama)',
      apt1Perk3: 'Última planta muy luminosa con vistas a los tejados',
      apt1Perk4: 'Cocina completa con lavavajillas, horno y Nespresso',
      apt2Perk1: 'Patio jardín privado y apacible con sombrilla y mesa de café',
      apt2Perk2: 'Capacidad hasta 3 personas (Planta baja, sin escaleras)',
      apt2Perk3: 'Patio interior histórico, tranquilo y lleno de encanto',
      apt2Perk4: 'Acceso sin escalones, mascotas permitidas bajo petición',
    },
    location: {
      badge: 'El Barrio',
      title: 'Via Po 51, El Corazón Histórico de Turín',
      subtitle:
        'Ubicación privilegiada: bajo los majestuosos soportales de Via Po, a pocos pasos de la Mole Antonelliana y de Piazza Vittorio Veneto.',
      addressLabel: 'Dirección de los apartamentos:',
      fullAddress: 'Via Po, 51 - 10124 Turín (TO), Italia',
      openGoogleMaps: 'Abrir en Google Maps',
      gettingHereTitle: 'Cómo Llegar a Via Po 51',
      gettingHereDesc:
        'Fácil acceso a pie o en tranvía/autobús directo desde las estaciones centrales de Porta Nuova y Porta Susa. Paradas de transporte público justo enfrente en Via Po.',
      contactForDirections: 'Consultar Ruta al Anfitrión',
      highlights: [
        {
          title: 'Mole Antonelliana & Museo del Cine',
          distance: '3 min a pie',
          description:
            'El gran monumento símbolo de Turín y su famoso museo interactivo están a la vuelta de la esquina.',
        },
        {
          title: 'Piazza Vittorio Veneto & Río Po',
          distance: '2 min a pie',
          description:
            'Una de las plazas más grandes de Europa, perfecta para aperitivos al atardecer y paseos por los Murazzi.',
        },
        {
          title: 'Piazza Castello & Palacio Real',
          distance: '6 min a pie',
          description:
            'El epicentro histórico con el Palazzo Madama y los Museos Reales.',
        },
        {
          title: 'Cafés Históricos, Pastelerías & Trattorias',
          distance: 'A lo largo de Via Po',
          description:
            'Degusta el auténtico Bicerin, bombones gianduiotti y la gastronomía piamontesa justo abajo.',
        },
      ],
    },
    reviews: {
      badge: 'Testimonios',
      title: 'Preferido por Viajeros de Todo el Mundo',
      subtitle:
        'Opiniones verificadas dejadas por huéspedes que reservaron en Airbnb y Booking.com.',
      verifiedAirbnb: 'Huésped Verificado en Airbnb',
      exceptionalBooking: 'Puntuación Excepcional en Booking.com',
      verifiedGuest: 'Huésped Verificado',
      from: 'de',
    },
    contact: {
      badge: 'Comunicación Directa',
      title: '¿Tienes Preguntas Antes de Reservar?',
      subtitle:
        'Las reservas se gestionan en Airbnb y Booking.com, pero estoy a tu disposición para aconsejarte sobre el viaje, aparcamiento o peticiones especiales.',
      hostTitle: 'Francesco',
      hostRole: 'Anfitrión y Gestor de Melina Apartments',
      languagesLabel: 'Idiomas:',
      whatsappCta: 'Escribir por WhatsApp',
      whatsappSub: 'Respuesta inmediata',
      thankYouTitle: '¡Gracias por tu mensaje!',
      thankYouText:
        'Te responderé muy pronto. Los calendarios en vivo están disponibles en cualquier momento en Airbnb y Booking.com.',
      sendAnother: 'Enviar otra pregunta',
      yourName: 'Tu Nombre *',
      yourEmail: 'Tu Correo Electrónico *',
      inquiryApartment: '¿Qué apartamento te interesa?',
      bothOption: 'Cualquiera / Ambos',
      yourMessage: 'Tu mensaje o fechas deseadas *',
      messagePlaceholder:
        'Hola Francesco, estamos organizando un viaje a Turín y queríamos saber si...',
      sendButton: 'Enviar Mensaje a Francesco',
      sendingButton: 'Enviando mensaje...',
    },
    footer: {
      tagline:
        'Dos alojamientos vacacionales privados en el centro histórico de Turín, en Via Po 51.',
      bookOnline: 'Reservar Online',
      explore: 'Navegación',
      rights:
        'Todos los derechos reservados. Reservas gestionadas de forma segura en Airbnb y Booking.com.',
      backToTop: 'Volver arriba',
    },
    apartments: {
      terrace: {
        name: 'La Melina sulla Mole',
        subtitle:
          'Luminoso apartamento en última planta con terraza panorámica privada',
        badgeText: 'Booking.com Traveler Review Award 9.8 / 10',
        description:
          'Un oasis bañado por el sol en Via Po 51 con una amplia terraza privada con vistas a los tejados de Turín. Ideal para parejas, familias o estancias de trabajo que buscan encanto y comodidades de primer nivel.',
        story:
          'La Melina sulla Mole fue creado para regalar momentos memorables. Desayuna al aire libre o contempla el atardecer con un buen vino desde el salón exterior. El apartamento cuenta con techos altos, zona de comedor y una cocina equipada al completo.',
        highlights: [
          'Terraza privada en la azotea con mesa de comedor y tumbonas',
          'Ubicación céntrica privilegiada en Via Po 51, a pasos de Piazza Vittorio y la Mole',
          'Cerradura inteligente con código para llegada autónoma sin esperas',
          'Puntuación 9.8/10 en limpieza y trato en Booking.com',
        ],
        galleryCaptions: [
          'Salón espacioso y luminoso con acceso directo a la terraza',
          'Dormitorio principal con cama king size y colchón viscoelástico',
          'Cocina moderna con placa de inducción, horno y rincón Nespresso',
          'Baño contemporáneo con amplia ducha de lluvia',
          'Terraza panorámica privada con mesa exterior y vistas a la ciudad',
        ],
        rules: {
          checkIn: 'A partir de las 15:00 (Check-in autónomo con teclado)',
          checkOut: 'Hasta las 10:30',
          policies: 'No fumadores en el interior · Sin fiestas · No mascotas',
          quietHours: 'De 22:00 a 08:00',
        },
      },
      garden: {
        name: 'La Melina su Via Po',
        subtitle:
          'Acogedor loft en planta baja con íntimo patio jardín botánico privado',
        badgeText: 'Airbnb Superhost Preferred · 4.96 ★',
        description:
          'Un remanso de paz en pleno centro histórico: diseño moderno y acceso directo a un tranquilo jardín privado con plantas y jazmines. El lugar perfecto para descansar tras un día explorando la ciudad.',
        story:
          'La Melina su Via Po combina el sosiego de los patios históricos de Via Po 51 con el diseño contemporáneo. Ubicado en la planta baja sin barreras ni escaleras, dispone de un agradable patio exterior para tomar el café o leer relajadamente.',
        highlights: [
          'Patio jardín privado con mesa bistró y sombrilla',
          'Acceso directo en planta baja sin escalones, muy cómodo para el equipaje',
          'Hospitalidad Superhost con recomendaciones locales sobre los tesoros de Turín',
          'Detalle de bienvenida con especialidades gastronómicas del Piamonte',
        ],
        galleryCaptions: [
          'Interior de diseño con salón acogedor y rincón de lectura',
          'Dormitorio tranquilo con cama queen size y aislamiento acústico',
          'Cocina moderna equipada con barra de desayuno',
          'Elegante baño con productos bio y ducha de lluvia',
          'Patio jardín privado con sombra y mobiliario exterior',
        ],
        rules: {
          checkIn: 'A partir de las 15:00 (Código digital de acceso)',
          checkOut: 'Hasta las 10:30',
          policies: 'No fumadores en el interior · Sin fiestas · Mascotas permitidas bajo petición',
          quietHours: 'De 22:00 a 08:00',
        },
      },
    },
  },
}
