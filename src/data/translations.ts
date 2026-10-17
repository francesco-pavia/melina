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
    rulesIntro: string
    checkInOutTitle: string
    duringStayTitle: string
    beforeLeavingTitle: string
    flexibleCheckIn: string
    checkOutTime: string
    keyLockbox: string
    maxGuestsRule: string
    noPetsRule: string
    noPartiesRule: string
    noCommercialPhotoRule: string
    noSmokingRule: string
    takeTrashRule: string
    turnOffAllRule: string
    returnKeysRule: string
    lockDoorsRule: string
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
    formTitle: string
    formSubtitle: string
    formBadge: string
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
      welcomeBadge: 'Benvenuti a Melina · Torino Centro',
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
      rulesIntro:
        'Soggiornerai nell’alloggio di un’altra persona, quindi ti preghiamo di trattarlo con cura e rispetto.',
      checkInOutTitle: 'Check-in e check-out',
      duringStayTitle: 'Durante il soggiorno',
      beforeLeavingTitle: 'Prima della partenza',
      flexibleCheckIn: 'Check-in flessibile',
      checkOutTime: 'Check-out entro le ore 12:00',
      keyLockbox: 'Self check-in con cassetta delle chiavi',
      maxGuestsRule: 'Massimo 2 ospiti',
      noPetsRule: 'Nessun animale domestico',
      noPartiesRule: 'Vietato organizzare feste/eventi',
      noCommercialPhotoRule: 'Fotografia pubblicitaria non consentita',
      noSmokingRule: 'Non è consentito fumare',
      takeTrashRule: 'Buttare la spazzatura',
      turnOffAllRule: 'Spegnere tutto (luci e climatizzazione)',
      returnKeysRule: 'Restituire le chiavi nella cassetta',
      lockDoorsRule: 'Chiudere a chiave',
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
      hostSupport: 'Assistenza diretta dell’host Alessandra 24/7',
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
      apt1Perk2: 'Ideale per 2 persone (Luminoso ultimo piano 70 m²)',
      apt1Perk3: 'Ultimo piano luminosissimo con vista suggestiva sui tetti',
      apt1Perk4: 'Cucina completa con lavastoviglie, forno e Nespresso',
      apt2Perk1: 'Balcone privato con affaccio caratteristico sui portici di Via Po',
      apt2Perk2: 'Piano nobile con ascensore e magnifici soffitti alti storici',
      apt2Perk3: 'Salotto sabaudo raffinato con camera matrimoniale soppalcata',
      apt2Perk4: 'Ospita 2 persone, aria condizionata e angolo lettura con giochi',
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
      formTitle: 'Invia un Messaggio Diretto',
      formSubtitle: 'Richiesta informazioni o disponibilità date',
      formBadge: 'Risposta personale entro poche ore',
      hostTitle: 'Alessandra Mela',
      hostRole: 'Host & Property Manager · Melina',
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
        'Ciao Alessandra, stiamo pianificando una visita a Torino. Volevo chiederti se...',
      sendButton: 'Invia Messaggio ad Alessandra',
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
          'Luminoso appartamento all’ultimo piano con suggestivo terrazzo panoramico e vista sulla Mole',
        badgeText: 'Booking.com 10/10 Eccezionale',
        description:
          'In una posizione privilegiata nel centro di Torino, La Melina offre una terrazza e un balcone con vista panoramica sulla città. Questo appartamento climatizzato comprende 1 camera da letto, un accogliente soggiorno, una cucina accessoriata con frigorifero e macchina da caffè, e 1 bagno con bidet e doccia.',
        story:
          'Situato in posizione d’eccellenza in Via Po 51, La Melina offre un’esperienza sabauda indimenticabile con punteggio perfetto di 10/10 per la posizione. Goditi la colazione sul terrazzo privato ammirando la Mole Antonelliana o rilassati al tramonto sui tetti torinesi. L’alloggio dispone di ascensore, climatizzazione, Wi-Fi gratuito e tutto il necessario per un soggiorno confortevole.',
        highlights: [
          'Terrazzo e balcone privato con vista panoramica sulla Mole Antonelliana e sui tetti di Torino',
          'Posizione privilegiata nel cuore di Torino con punteggio posizione massimo di 10,0',
          'Comfort completo: ascensore, aria condizionata, riscaldamento e lavatrice',
          'Punteggio 10/10 per pulizia, servizi, comfort e accoglienza su Booking.com',
        ],
        galleryCaptions: [
          'Terrazzo panoramico privato con vista suggestiva sulla Mole Antonelliana e sui tetti',
          'Suggestiva vista notturna della Mole Antonelliana illuminata dal terrazzo',
          'Zona pranzo luminosa con tavolo e affaccio panoramico',
          'Cucina attrezzata con piano cottura, frigorifero e macchina del caffè',
          'Camera da letto con soppalco caratteristico e scala a chiocciola',
          'Bagno privato con doccia, bidet e set biancheria e asciugamani',
          'Ingresso dell’alloggio con comoda panca e dettagli di charme',
          'Ambiente living accogliente con finiture storiche e luce naturale',
          'Balcone esterno privato con vista su Via Po',
        ],
        rules: {
          checkIn: 'Check-in flessibile (Self check-in con cassetta chiavi)',
          checkOut: 'Entro le ore 12:00',
          policies: 'Massimo 2 ospiti · No fumo · No feste · No animali · No foto pubblicitarie',
          quietHours: 'Dalle 22:00 alle 08:00',
        },
      },
      garden: {
        name: 'La Melina su Via Po',
        subtitle:
          'Elegante salotto sabaudo con soffitti alti e balcone panoramico sui portici di Via Po',
        badgeText: 'Airbnb Amato dagli ospiti',
        description:
          'Nel cuore pulsante di Torino al piano nobile con ascensore, La Melina su Via Po è un suggestivo salotto sabaudo caratterizzato da soffitti alti d’epoca, arredi curati e un romantico balcone privato affacciato direttamente sulla storica Via Po. L’alloggio dispone di zona living accogliente con angolo lettura e giochi da tavolo, camera matrimoniale soppalcata, angolo cottura accessoriato con Nespresso e bagno con bidet e doccia.',
        story:
          'Vivi Torino dalla prospettiva più autentica: affacciati dal balcone privato sui famosi portici di Via Po per gustare un caffè o ammirare la vita cittadina. Situato in un palazzo storico nobiliare provvisto di ascensore, l’appartamento offre un’atmosfera d’altri tempi unita ai più moderni comfort: aria condizionata centralizzata, riscaldamento, Wi-Fi veloce, Smart TV e self check-in con tastierino numerico.',
        highlights: [
          'Balcone privato con vista suggestiva sui portici storici di Via Po',
          'Elegante piano nobile con ascensore, soffitti d’epoca e soppalco di design',
          'Posizione strategica a pochi passi da Piazza Vittorio Veneto e dalla Mole',
          'Comfort completo: aria condizionata centralizzata, Wi-Fi veloce e self check-in',
        ],
        galleryCaptions: [
          'Tavolino sul balcone privato con affaccio caratteristico su Via Po',
          'Spazioso salotto sabaudo con alti soffitti storici e comodo divano',
          'Camera da letto matrimoniale soppalcata con atmosfera intima e confortevole',
          'Zona giorno con tavolo da pranzo, Smart TV e cucina a vista',
          'Prospettiva del soppalco e volumi ariosi del piano nobile',
          'Bagno privato rifinito con doccia, bidet e set biancheria',
          'Scorcio panoramico sui portici storici di Via Po dal balcone',
          'Angolo lettura con selezione di libri, guide e giochi da tavolo',
          'Elegante prospettiva della zona living inondata di luce',
          'Dettagli architettonici d’epoca e finiture di pregio',
          'Facciata dello storico palazzo sabaudo in Via Po 51',
        ],
        rules: {
          checkIn: 'Check-in flessibile (Self check-in con cassetta chiavi)',
          checkOut: 'Entro le ore 12:00',
          policies: 'Massimo 2 ospiti · No fumo · No feste · No animali · No foto pubblicitarie',
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
      welcomeBadge: 'Welcome to Melina · Turin Center',
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
      rulesIntro:
        'You’ll be staying in someone’s home, so please treat it with care and respect.',
      checkInOutTitle: 'Check-in and check-out',
      duringStayTitle: 'During your stay',
      beforeLeavingTitle: 'Before leaving',
      flexibleCheckIn: 'Flexible check-in',
      checkOutTime: 'Check-out by 12:00 PM',
      keyLockbox: 'Self check-in with key lockbox',
      maxGuestsRule: 'Maximum 2 guests',
      noPetsRule: 'No pets allowed',
      noPartiesRule: 'No parties or events',
      noCommercialPhotoRule: 'No commercial photography',
      noSmokingRule: 'No smoking allowed',
      takeTrashRule: 'Take out the trash',
      turnOffAllRule: 'Turn off lights and climate controls',
      returnKeysRule: 'Return keys to the lockbox',
      lockDoorsRule: 'Lock the door',
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
      hostSupport: '24/7 direct host assistance by Alessandra',
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
      apt1Perk2: 'Ideal for 2 guests (Bright top-floor layout 70 m²)',
      apt1Perk3: 'Top-floor bright living space with rooftop views',
      apt1Perk4: 'Full kitchen with dishwasher, oven, and Nespresso',
      apt2Perk1: 'Private balcony directly overlooking the historic Via Po arcades',
      apt2Perk2: 'Noble floor with elevator access and grand historic high ceilings',
      apt2Perk3: 'Refined Savoyard living salon with mezzanine double bedroom',
      apt2Perk4: 'Accommodates 2 guests, central A/C and curated reading library',
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
      formTitle: 'Send a Direct Message',
      formSubtitle: 'Inquiry or date availability question',
      formBadge: 'Personal reply within a few hours',
      hostTitle: 'Alessandra Mela',
      hostRole: 'Host & Property Manager · Melina',
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
        'Hi Alessandra, we are planning a trip to Turin. Could you let us know if...',
      sendButton: 'Send Message to Alessandra',
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
          'Top-floor bright apartment with private panoramic terrace and Mole Antonelliana view',
        badgeText: 'Booking.com 10/10 Exceptional',
        description:
          'In a prime location in the heart of Turin, La Melina offers a terrace and a balcony with panoramic city views. This air-conditioned apartment features 1 bedroom, a cozy living room, an equipped kitchenette with fridge and coffee machine, and 1 bathroom with bidet and shower.',
        story:
          'Situated in an exceptional location on historic Via Po 51, La Melina delivers an authentic Savoyard stay backed by a flawless 10.0 location score. Enjoy breakfast on your private terrace gazing at the Mole Antonelliana or unwind at sunset over Turin’s rooftops. Complete with elevator access, air conditioning, heating, free high-speed Wi-Fi, and plush amenities.',
        highlights: [
          'Private rooftop terrace & balcony with panoramic views of the Mole Antonelliana and rooftops',
          'Unbeatable central location in Via Po with a perfect 10.0 location score',
          'Modern convenience: building elevator, air conditioning, heating & in-unit washer',
          'Flawless 10/10 rating for cleanliness, amenities, comfort & service on Booking.com',
        ],
        galleryCaptions: [
          'Private panoramic terrace with breathtaking views of the Mole Antonelliana & rooftops',
          'Atmospheric nighttime view of the illuminated Mole Antonelliana from the terrace',
          'Bright dining nook with table and chairs by the scenic window',
          'Kitchen equipped with stove, refrigerator, cookware, and coffee maker',
          'Comfortable bedroom with distinctive mezzanine and spiral staircase',
          'Contemporary private bathroom with walk-in shower, bidet, and fresh linens',
          'Welcoming entryway with artisanal wooden bench and historical charm',
          'Inviting living space with historic charm and abundant daylight',
          'Private outdoor balcony with panoramic perspective of Via Po',
        ],
        rules: {
          checkIn: 'Flexible check-in (Self check-in with key lockbox)',
          checkOut: 'By 12:00 PM',
          policies: 'Maximum 2 guests · No smoking · No parties · No pets · No commercial photography',
          quietHours: '10:00 PM – 8:00 AM',
        },
      },
      garden: {
        name: 'La Melina su Via Po',
        subtitle:
          'Elegant Savoyard salon with high historic ceilings and balcony overlooking Via Po arcades',
        badgeText: 'Airbnb Guest Favorite',
        description:
          'In the beating heart of Turin on the piano nobile with elevator access, La Melina su Via Po is an atmospheric Savoyard residence featuring soaring ceilings, refined furnishings, and a romantic private balcony directly overlooking historic Via Po. The home features a welcoming lounge with reading library and board games, mezzanine double bedroom, equipped kitchenette with Nespresso, and private bathroom with shower and bidet.',
        story:
          'Experience Turin from its most authentic vantage point: step out onto your private balcony overlooking the arcades of Via Po to sip espresso or watch city life unfold. Located in a historic noble building with elevator, this retreat blends old-world elegance with modern comforts: central air conditioning, heating, high-speed Wi-Fi, Smart TV, and smart keyless self check-in.',
        highlights: [
          'Private balcony with scenic views over the historic arcades of Via Po',
          'Grand noble floor with elevator access, historic soaring ceilings & designer loft',
          'Strategic central location moments from Piazza Vittorio Veneto and the Mole',
          'Complete comfort: central air conditioning, fast Wi-Fi, and smart keypad self check-in',
        ],
        galleryCaptions: [
          'Bistro table on private balcony with picturesque views over Via Po',
          'Spacious Savoyard salon with historic high ceilings and comfortable lounge sofa',
          'Mezzanine double bedroom with cozy, intimate ambiance',
          'Open dining and living space with dining table, Smart TV, and kitchenette',
          'Perspective view from the mezzanine highlighting airy noble-floor volumes',
          'Private bathroom with walk-in shower, bidet, and plush bath linens',
          'Panoramic view over the historic arcades of Via Po from the balcony',
          'Curated reading nook with books, Turin guides, and board games',
          'Luminous perspective of the stylish living room flooded with daylight',
          'Noble architectural details and refined period craftsmanship',
          'Historic Savoyard building facade along Via Po 51',
        ],
        rules: {
          checkIn: 'Flexible check-in (Self check-in with key lockbox)',
          checkOut: 'By 12:00 PM',
          policies: 'Maximum 2 guests · No smoking · No parties · No pets · No commercial photography',
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
      welcomeBadge: 'Bienvenue à Melina · Turin Centre',
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
      rulesIntro:
        'Vous séjournerez dans le logement d’une autre personne, merci d’en prendre soin avec respect.',
      checkInOutTitle: 'Arrivée et départ',
      duringStayTitle: 'Pendant le séjour',
      beforeLeavingTitle: 'Avant de partir',
      flexibleCheckIn: 'Arrivée flexible',
      checkOutTime: 'Départ avant 12h00',
      keyLockbox: 'Arrivée autonome avec boîte à clés sécurisée',
      maxGuestsRule: '2 personnes maximum',
      noPetsRule: 'Animaux de compagnie non admis',
      noPartiesRule: 'Fêtes et événements interdits',
      noCommercialPhotoRule: 'Séances photo commerciales non autorisées',
      noSmokingRule: 'Logement non-fumeur',
      takeTrashRule: 'Jeter les poubelles',
      turnOffAllRule: 'Tout éteindre (lumières et climatisation)',
      returnKeysRule: 'Remettre les clés dans la boîte sécurisée',
      lockDoorsRule: 'Fermer à clé',
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
      hostSupport: 'Assistance directe 24h/24 par l’hôte Alessandra',
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
      apt1Perk2: 'Idéal pour 2 personnes (Dernier étage lumineux 70 m²)',
      apt1Perk3: 'Dernier étage baigné de lumière avec vue sur les toits',
      apt1Perk4: 'Cuisine complète avec lave-vaisselle, four et Nespresso',
      apt2Perk1: 'Balcon privé avec vue pittoresque sur les arcades de la Via Po',
      apt2Perk2: 'Étage noble avec ascenseur et hauts plafonds historiques',
      apt2Perk3: 'Salon savoyard raffiné avec chambre double en mezzanine',
      apt2Perk4: 'Idéal pour 2 personnes, climatisation et coin bibliothèque',
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
      formTitle: 'Envoyer un Message Direct',
      formSubtitle: 'Demande d’information ou de dates disponibles',
      formBadge: 'Réponse personnelle en quelques heures',
      hostTitle: 'Alessandra Mela',
      hostRole: 'Host & Property Manager · Melina',
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
        'Bonjour Alessandra, nous prévoyons un séjour à Turin et nous voulions savoir si...',
      sendButton: 'Envoyer le Message à Alessandra',
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
          'Appartement lumineux au dernier étage avec terrasse panoramique privée et vue sur la Mole',
        badgeText: 'Booking.com 10/10 Exceptionnel',
        description:
          'Bénéficiant d’un emplacement privilégié au cœur de Turin, La Melina dispose d’une terrasse et d’un balcon avec vue panoramique sur la ville. Cet appartement climatisé comprend 1 chambre, un salon chaleureux, une kitchenette équipée avec réfrigérateur et machine à café, et 1 salle de bain avec bidet et douche.',
        story:
          'Situé à une adresse d’exception au 51 Via Po, La Melina offre une expérience piémontaise mémorable avec une note de situation parfaite de 10/10. Savourez votre petit-déjeuner en terrasse face à la Mole Antonelliana ou admirez le coucher de soleil sur les toits de Turin. L’immeuble dispose d’un ascenseur, de la climatisation, du chauffage et du Wi-Fi haut débit.',
        highlights: [
          'Terrasse et balcon panoramiques avec vue imprenable sur la Mole Antonelliana et les toits',
          'Emplacement exceptionnel Via Po avec une note de situation parfaite de 10,0',
          'Confort moderne : ascenseur dans l’immeuble, climatisation, chauffage et lave-linge',
          'Note parfaite de 10/10 pour la propreté, les équipements et l’accueil sur Booking.com',
        ],
        galleryCaptions: [
          'Terrasse panoramique privée avec vue spectaculaire sur la Mole et les toits',
          'Vue nocturne féerique de la Mole Antonelliana illuminée depuis la terrasse',
          'Espace repas lumineux avec table et chaises face à la fenêtre panoramique',
          'Cuisine équipée avec plaques de cuisson, réfrigérateur et machine à café',
          'Chambre confortable avec mezzanine de caractère et escalier en colimaçon',
          'Salle de bain privée contemporaine avec douche, bidet et linge fourni',
          'Entrée chaleureuse avec banc en bois artisanal et cachet d’époque',
          'Salon raffiné mêlant charme historique et lumière naturelle',
          'Balcon privatif offrant une vue agréable sur la Via Po',
        ],
        rules: {
          checkIn: 'Arrivée flexible (Arrivée autonome avec boîte à clés)',
          checkOut: 'Avant 12h00',
          policies: '2 personnes max · Logement non-fumeur · Fêtes interdites · Pas d’animaux · Pas de photos commerciales',
          quietHours: 'De 22h00 à 08h00',
        },
      },
      garden: {
        name: 'La Melina su Via Po',
        subtitle:
          'Élégant salon savoyard avec hauts plafonds d’époque et balcon sur les arcades de la Via Po',
        badgeText: 'Airbnb Coup de cœur voyageurs',
        description:
          'Au cœur battant de Turin, au piano nobile avec ascenseur, La Melina su Via Po est un appartement savoyard de caractère mêlant hauts plafonds d’époque, décoration raffinée et balcon privé romantique donnant directement sur la prestigieuse Via Po. L’espace propose un salon chaleureux avec bibliothèque et jeux de société, une chambre double en mezzanine, une kitchenette équipée avec Nespresso et une salle de bain avec bidet et douche.',
        story:
          'Découvrez Turin sous son angle le plus authentique : installez-vous sur le balcon privé au-dessus des arcades historiques pour prendre votre café ou observer la vie piémontaise. Situé dans un somptueux palais noble avec ascenseur, ce havre de paix combine charme d’antan et commodités modernes : climatisation centrale, chauffage, Wi-Fi ultra-rapide, Smart TV et arrivée autonome par serrure à code.',
        highlights: [
          'Balcon privatif avec vue pittoresque sur les arcades historiques de la Via Po',
          'Étage noble avec ascenseur, hauts plafonds majestueux et mezzanine soignée',
          'Emplacement central à deux pas de la Piazza Vittorio Veneto et de la Mole',
          'Confort moderne complet : climatisation, Wi-Fi haut débit et check-in autonome',
        ],
        galleryCaptions: [
          'Table bistrot sur le balcon privé avec vue pittoresque sur la Via Po',
          'Grand salon savoyard avec hauts plafonds historiques et canapé confortable',
          'Chambre double en mezzanine dans une atmosphère douce et chaleureuse',
          'Espace de vie ouvert avec table à manger, Smart TV et kitchenette équipée',
          'Vue d’ensemble depuis la mezzanine soulignant les beaux volumes de l’étage noble',
          'Salle de bain privée contemporaine avec douche, bidet et serviettes soyeuses',
          'Aperçu panoramique sur les arcades historiques de la Via Po depuis le balcon',
          'Coin lecture cosy avec sélection de livres, guides touristiques et jeux',
          'Perspective lumineuse du séjour baigné de lumière naturelle',
          'Détails architecturaux d’époque et finitions élégantes de l’immeuble',
          'Façade du palais noble historique au 51 Via Po',
        ],
        rules: {
          checkIn: 'Arrivée flexible (Arrivée autonome avec boîte à clés)',
          checkOut: 'Avant 12h00',
          policies: '2 personnes max · Logement non-fumeur · Fêtes interdites · Pas d’animaux · Pas de photos commerciales',
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
      welcomeBadge: 'Willkommen bei Melina · Turin Zentrum',
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
      rulesIntro:
        'Sie wohnen im Zuhause einer anderen Person, bitte behandeln Sie es mit Sorgfalt und Respekt.',
      checkInOutTitle: 'Check-in und Check-out',
      duringStayTitle: 'Während des Aufenthalts',
      beforeLeavingTitle: 'Vor der Abreise',
      flexibleCheckIn: 'Flexibler Check-in',
      checkOutTime: 'Check-out bis 12:00 Uhr',
      keyLockbox: 'Self Check-in mit Schlüsselbox',
      maxGuestsRule: 'Maximal 2 Gäste',
      noPetsRule: 'Keine Haustiere erlaubt',
      noPartiesRule: 'Keine Partys oder Veranstaltungen',
      noCommercialPhotoRule: 'Kommerzielle Fotografie nicht gestattet',
      noSmokingRule: 'Rauchen nicht gestattet',
      takeTrashRule: 'Müll entsorgen',
      turnOffAllRule: 'Alles ausschalten (Lichter & Klimaanlage)',
      returnKeysRule: 'Schlüssel in die Schlüsselbox zurücklegen',
      lockDoorsRule: 'Abschließen',
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
      hostSupport: 'Direkte Betreuung rund um die Uhr durch Gastgeberin Alessandra',
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
      apt1Perk2: 'Ideal für 2 Gäste (Helle oberste Etage 70 m²)',
      apt1Perk3: 'Oberste Etage mit viel Licht und Blick über die Dächer',
      apt1Perk4: 'Komplette Küche mit Geschirrspüler, Backofen und Nespresso',
      apt2Perk1: 'Privater Balkon mit Panoramablick auf die Arkaden der Via Po',
      apt2Perk2: 'Beletage mit Aufzug und herrschaftlich hohen Decken',
      apt2Perk3: 'Stilvoller piemontesischer Salon mit Mezzanin-Doppelbett',
      apt2Perk4: 'Für 2 Gäste, zentrale Klimaanlage und gemütliche Leseecke',
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
      formTitle: 'Direkte Nachricht Senden',
      formSubtitle: 'Anfrage zu Informationen oder Reisedaten',
      formBadge: 'Persönliche Antwort in wenigen Stunden',
      hostTitle: 'Alessandra Mela',
      hostRole: 'Host & Property Manager · Melina',
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
        'Hallo Alessandra, wir planen eine Reise nach Turin und möchten gerne wissen, ob...',
      sendButton: 'Nachricht an Alessandra senden',
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
          'Helles Dachgeschoss-Apartment mit privater Panorama-Terrasse und Blick auf die Mole',
        badgeText: 'Booking.com 10/10 Außergewöhnlich',
        description:
          'In bester Lage im Herzen von Turin bietet La Melina eine Terrasse und einen Balkon mit Panoramablick auf die Stadt. Dieses klimatisierte Apartment verfügt über 1 Schlafzimmer, ein gemütliches Wohnzimmer, eine Küchenzeile mit Kühlschrank und Kaffeemaschine sowie 1 Badezimmer mit Bidet und Dusche.',
        story:
          'In privilegierter Lage in der Via Po 51 bietet La Melina ein unvergleichliches Piemont-Erlebnis mit einer perfekten Lagebewertung von 10/10. Frühstücken Sie auf der privaten Terrasse mit Blick auf die Mole Antonelliana oder genießen Sie den Sonnenuntergang über den Turiner Dächern. Das Gebäude verfügt über einen Aufzug, Klimaanlage, Heizung und Highspeed-WLAN.',
        highlights: [
          'Private Panorama-Dachterrasse & Balkon mit atemberaubendem Blick auf die Mole Antonelliana',
          'Unschlagbare Lage in der Via Po mit perfekter Lagebewertung von 10,0',
          'Modernster Komfort: Aufzug im Haus, Klimaanlage, Heizung und Waschmaschine',
          'Höchstbewertung von 10/10 für Sauberkeit, Ausstattung und Gastfreundschaft auf Booking.com',
        ],
        galleryCaptions: [
          'Private Panorama-Dachterrasse mit fantastischem Blick auf die Mole und die Stadt',
          'Stimmungsvolle Nachtansicht der beleuchteten Mole Antonelliana von der Terrasse',
          'Heller Essbereich mit Tisch und Stühlen am Panoramafenster',
          'Voll ausgestattete Küche mit Kochfeld, Kühlschrank und Kaffeemaschine',
          'Gemütliches Schlafzimmer mit charakteristischer Mezzanine und Wendeltreppe',
          'Modernes Privatbad mit Dusche, Bidet und frischen Handtüchern',
          'Einladender Eingangsbereich mit Holzbank und historischem Altbau-Charme',
          'Gemütlicher Wohnbereich mit historischem Flair und viel Tageslicht',
          'Privater Balkon mit malerischem Blick auf die geschichtsträchtige Via Po',
        ],
        rules: {
          checkIn: 'Flexibler Check-in (Self Check-in mit Schlüsselbox)',
          checkOut: 'Bis 12:00 Uhr',
          policies: 'Maximal 2 Gäste · Nichtraucher · Keine Partys · Keine Haustiere · Keine kommerzielle Fotografie',
          quietHours: '22:00 – 08:00 Uhr',
        },
      },
      garden: {
        name: 'La Melina su Via Po',
        subtitle:
          'Elegantes piemontesisches Refugium mit hohen Decken und Balkon über den Arkaden der Via Po',
        badgeText: 'Airbnb Beliebt bei Gästen',
        description:
          'Im lebendigen Herzen von Turin in der Beletage mit Aufzug: La Melina su Via Po ist ein stilvoller Salon mit herrschaftlich hohen Decken, auserlesener Einrichtung und einem romantischen privaten Balkon mit direktem Blick auf die historische Via Po. Die Wohnung bietet einen behaglichen Wohnbereich mit Bibliothek und Gesellschaftsspielen, ein Mezzanin-Doppelzimmer, eine ausgestattete Küchenzeile mit Nespresso sowie ein Badezimmer mit Bidet und Dusche.',
        story:
          'Erleben Sie Turin aus seiner authentischsten Perspektive: Genießen Sie Ihren morgendlichen Espresso auf dem privaten Balkon hoch über den Arkaden der Via Po. In einem historischen Adelspalais mit Aufzug gelegen, verbindet dieses Domizil altehrwürdigen Charme mit zeitgemäßem Luxus: zentrale Klimaanlage, Heizung, Highspeed-WLAN, Smart-TV und schlüsselloser Self Check-in per Zahlencode.',
        highlights: [
          'Privater Balkon mit einmaligem Ausblick auf die historischen Arkaden der Via Po',
          'Herrschaftliche Beletage mit Aufzug, hohen Decken und modernem Mezzanin',
          'Top-Zentrumslage nahe Piazza Vittorio Veneto und der Mole Antonelliana',
          'Rundum-Komfort: zentrale Klimaanlage, schnelles WLAN und Self Check-in',
        ],
        galleryCaptions: [
          'Bistrotisch auf dem privaten Balkon mit malerischem Blick auf die Via Po',
          'Großzügiger piemontesischer Salon mit hohen Stuckdecken und gemütlichem Sofa',
          'Mezzanin-Schlafzimmer mit Doppelbett und behaglicher Atmosphäre',
          'Wohn- und Essbereich mit Esstisch, Smart-TV und offener Küchenzeile',
          'Blick von der Galerie auf die luftigen Raumhöhen der Beletage',
          'Privates Badezimmer mit Dusche, Bidet und flauschigen Handtüchern',
          'Panoramablick auf die belebten Arkaden der Via Po vom Balkon',
          'Gemütliche Leseecke mit Büchern, Turin-Reiseführern und Brettspielen',
          'Lichtdurchflutete Perspektive des stilvollen Wohnzimmers',
          'Historische architektonische Details und hochwertige Ausstattung',
          'Fassade des historischen Palais in der Via Po 51',
        ],
        rules: {
          checkIn: 'Flexibler Check-in (Self Check-in mit Schlüsselbox)',
          checkOut: 'Bis 12:00 Uhr',
          policies: 'Maximal 2 Gäste · Nichtraucher · Keine Partys · Keine Haustiere · Keine kommerzielle Fotografie',
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
      welcomeBadge: 'Bienvenidos a Melina · Centro de Turín',
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
      rulesIntro:
        'Te alojarás en la casa de otra persona, por lo que te pedimos tratarla con cuidado y respeto.',
      checkInOutTitle: 'Llegada y salida',
      duringStayTitle: 'Durante la estancia',
      beforeLeavingTitle: 'Antes de salir',
      flexibleCheckIn: 'Check-in flexible',
      checkOutTime: 'Salida antes de las 12:00',
      keyLockbox: 'Llegada autónoma con caja de seguridad para llaves',
      maxGuestsRule: 'Máximo 2 huéspedes',
      noPetsRule: 'No se admiten mascotas',
      noPartiesRule: 'Prohibido fiestas y eventos',
      noCommercialPhotoRule: 'Fotografía publicitaria no permitida',
      noSmokingRule: 'No se permite fumar',
      takeTrashRule: 'Tirar la basura',
      turnOffAllRule: 'Apagar todo (luces y climatización)',
      returnKeysRule: 'Devolver las llaves a la caja de seguridad',
      lockDoorsRule: 'Cerrar con llave',
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
      hostSupport: 'Atención directa 24/7 de tu anfitriona Alessandra',
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
      apt1Perk2: 'Ideal para 2 personas (Última planta luminosa 70 m²)',
      apt1Perk3: 'Última planta muy luminosa con vistas a los tejados',
      apt1Perk4: 'Cocina completa con lavavajillas, horno y Nespresso',
      apt2Perk1: 'Balcón privado con vistas directas a los soportales de Via Po',
      apt2Perk2: 'Planta noble con ascensor y techos altos señoriales',
      apt2Perk3: 'Elegante salón saboyano con dormitorio doble en altillo',
      apt2Perk4: 'Para 2 personas, aire acondicionado centralizado y rincón de lectura',
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
      formTitle: 'Enviar un Mensaje Directo',
      formSubtitle: 'Consulta de información o fechas disponibles',
      formBadge: 'Respuesta personal en pocas horas',
      hostTitle: 'Alessandra Mela',
      hostRole: 'Host & Property Manager · Melina',
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
        'Hola Alessandra, estamos organizando un viaje a Turín y queríamos saber si...',
      sendButton: 'Enviar Mensaje a Alessandra',
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
          'Luminoso apartamento en última planta con terraza panorámica privada y vistas a la Mole',
        badgeText: 'Booking.com 10/10 Excepcional',
        description:
          'Con una ubicación privilegiada en pleno centro de Turín, La Melina ofrece terraza y balcón con vistas panorámicas a la ciudad. Este apartamento con aire acondicionado dispone de 1 dormitorio, una acogedora sala de estar, zona de cocina equipada con nevera y cafetera, y 1 baño con bidet y ducha.',
        story:
          'Situado en una ubicación excepcional en Via Po 51, La Melina brinda una experiencia turinesa inmejorable respaldada por una puntuación de ubicación perfecta de 10/10. Desayuna en la terraza privada contemplando la Mole Antonelliana o admira el atardecer sobre los tejados de Turín. El edificio cuenta con ascensor, climatización, calefacción y Wi-Fi de alta velocidad.',
        highlights: [
          'Terraza y balcón panorámicos con vistas exclusivas a la Mole Antonelliana y los tejados',
          'Ubicación privilegiada en Via Po con la máxima puntuación de ubicación de 10,0',
          'Máximo confort: ascensor en el edificio, aire acondicionado, calefacción y lavadora',
          'Puntuación impecable de 10/10 en limpieza, servicios y atención en Booking.com',
        ],
        galleryCaptions: [
          'Terraza panorámica privada con espectaculares vistas a la Mole Antonelliana y la ciudad',
          'Evocadora vista nocturna de la Mole Antonelliana iluminada desde la terraza',
          'Luminosa zona de comedor con mesa y sillas junto al ventanal panorámico',
          'Cocina equipada con placa de cocción, nevera, menaje y cafetera',
          'Cómodo dormitorio con altillo característico y escalera de caracol',
          'Baño privado contemporáneo con ducha, bidet y toallas incluidas',
          'Acogedora entrada con banco de madera artesanal y encanto histórico',
          'Salón acogedor con techos altos, carácter histórico y abundante luz natural',
          'Balcón exterior privado con vistas despejadas a Via Po',
        ],
        rules: {
          checkIn: 'Check-in flexible (Llegada autónoma con caja de llaves)',
          checkOut: 'Antes de las 12:00',
          policies: 'Máximo 2 huéspedes · Prohibido fumar · Sin fiestas · No mascotas · Sin fotos publicitarias',
          quietHours: 'De 22:00 a 08:00',
        },
      },
      garden: {
        name: 'La Melina su Via Po',
        subtitle:
          'Elegante salón saboyano con techos altos señoriales y balcón sobre los soportales de Via Po',
        badgeText: 'Airbnb Favorito entre huéspedes',
        description:
          'En pleno corazón de Turín en la planta noble con ascensor, La Melina su Via Po es una residencia saboyana con techos altos históricos, mobiliario cuidado y un romántico balcón privado con vistas directas a la emblemática Via Po. El alojamiento dispone de un acogedor salón con rincón de lectura y juegos de mesa, dormitorio doble en altillo, cocina americana equipada con Nespresso y baño con bidet y ducha.',
        story:
          'Vive Turín desde su perspectiva más auténtica: asómate a tu balcón privado sobre los soportales históricos de Via Po para degustar un café o contemplar la vida turinesa. Ubicado en un palacio señorial histórico provisto de ascensor, este refugio combina encanto de época y comodidades de hoy: aire acondicionado centralizado, calefacción, Wi-Fi rápido, Smart TV y llegada autónoma con teclado digital.',
        highlights: [
          'Balcón privado con vistas características a los soportales históricos de Via Po',
          'Planta noble con ascensor, techos altos señoriales y altillo de diseño',
          'Ubicación estratégica a pocos pasos de Piazza Vittorio Veneto y la Mole',
          'Máximo confort: aire acondicionado centralizado, Wi-Fi rápido y self check-in smart',
        ],
        galleryCaptions: [
          'Mesa bistró en el balcón privado con vistas pintorescas a Via Po',
          'Amplio salón saboyano con techos altos de época y cómodo sofá',
          'Dormitorio doble en altillo con ambiente íntimo y confortable',
          'Zona de estar y comedor diáfana con mesa, Smart TV y cocina integrada',
          'Perspectiva desde el altillo destacando la gran altura de la planta noble',
          'Baño privado contemporáneo con ducha, bidet y juego de toallas suaves',
          'Vista panorámica de los soportales históricos de Via Po desde el balcón',
          'Rincón de lectura con cuidada biblioteca, guías de Turín y juegos de mesa',
          'Perspectiva luminosa del elegante salón bañado por la luz exterior',
          'Detalles arquitectónicos de época y acabados nobles del edificio',
          'Fachada del histórico palacio saboyano en Via Po 51',
        ],
        rules: {
          checkIn: 'Check-in flexible (Llegada autónoma con caja de llaves)',
          checkOut: 'Antes de las 12:00',
          policies: 'Máximo 2 huéspedes · Prohibido fumar · Sin fiestas · No mascotas · Sin fotos publicitarias',
          quietHours: 'De 22:00 a 08:00',
        },
      },
    },
  },
}
