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

export interface StayGuideTranslations {
  badge: string
  title: string
  subtitle: string
  intro: string
  checkInOutTitle: string
  checkInOutBadge: string
  flexibleCheckIn: string
  checkOutTime: string
  keyLockbox: string
  duringStayTitle: string
  duringStayBadge: string
  maxGuestsRule: string
  noSmokingRule: string
  quietHours: string
  noPartiesRule: string
  noPetsRule: string
  beforeLeavingTitle: string
  beforeLeavingBadge: string
  takeTrashRule: string
  turnOffAllRule: string
  returnKeysRule: string
  lockDoorsRule: string
}

export interface SiteTranslations {
  nav: {
    apartments: string
    terrace: string
    garden: string
    amenities: string
    stayGuide: string
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
    followUs: string
    privacyNotice: string
    privacyLinkText: string
  }
  footer: {
    tagline: string
    bookOnline: string
    explore: string
    rights: string
    backToTop: string
    followUs: string
    privacyPolicy: string
  }
  privacyModal: {
    title: string
    badge: string
    lastUpdated: string
    controllerTitle: string
    controllerText: string
    dataTitle: string
    dataText: string
    purposeTitle: string
    purposeText: string
    cookiesTitle: string
    cookiesText: string
    rightsTitle: string
    rightsText: string
    closeButton: string
    controllerEmailLabel: string
    sslSecurity: string
  }
  stayGuide: StayGuideTranslations
  apartments: {
    terrace: ApartmentTranslation
    garden: ApartmentTranslation
  }
}

export const translations: Record<Language, SiteTranslations> = {
  it: {
    nav: {
      apartments: 'Gli Appartamenti',
      terrace: 'La Melina sotto la Mole',
      garden: 'La Melina su Via Po',
      amenities: 'Servizi',
      stayGuide: 'Guida al Soggiorno',
      location: 'Posizione',
      reviews: 'Recensioni',
      contact: 'Contatti',
    },
    hero: {
      welcomeBadge: 'Benvenuti a La Melina · Torino Centro',
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
        'Le prenotazioni e i calendari avvengono su Airbnb e Booking.com, ma sono a tua completa disposizione per informazioni su parcheggi, trasporti o altre richieste.',
      formTitle: 'Invia un Messaggio Diretto',
      formSubtitle: 'Richiesta informazioni o disponibilità date',
      formBadge: 'Risposta personale entro poche ore',
      hostTitle: 'Alessandra Mela',
      hostRole: 'Host & Property Manager · La Melina',
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
      followUs: 'Seguici sui social',
      privacyNotice: 'Inviando il modulo confermi di aver preso visione dell’',
      privacyLinkText: 'Informativa sulla Privacy',
    },
    footer: {
      tagline:
        'Due eleganti appartamenti vacanza nel centro storico di Torino, in Via Po 51.',
      bookOnline: 'Prenota Online',
      explore: 'Navigazione',
      rights:
        'Tutti i diritti riservati. Prenotazioni intermediate in sicurezza su Airbnb e Booking.com.',
      backToTop: 'Torna su',
      followUs: 'Seguici sui social',
      privacyPolicy: 'Informativa Privacy & Cookie',
    },
    privacyModal: {
      title: 'Informativa sulla Privacy & Cookie Policy',
      badge: 'Conformità GDPR (Reg. UE 2016/679)',
      lastUpdated: 'Ultimo aggiornamento: Ottobre 2026',
      controllerTitle: '1. Titolare del Trattamento',
      controllerText:
        'Il Titolare del trattamento dei dati personali è Alessandra Mela, referente per gli appartamenti vacanze "La Melina" situati in Via Po 51, 10124 Torino (TO), Italia.\n\nPer qualsiasi informazione, richiesta o per l’esercizio dei tuoi diritti in materia di protezione dei dati, puoi contattarci direttamente all’indirizzo email: info.lamelina@gmail.com.',
      dataTitle: '2. Dati Raccolti, Canali di Contatto e Log Server',
      dataText:
        'Raccogliamo i dati personali forniti volontariamente tramite il nostro modulo di contatto (nome, indirizzo email, appartamento d’interesse e messaggio) o mediante i recapiti diretti presenti sul sito (WhatsApp al +39 328 329 9346 ed email).\n\nNatura del conferimento: Il conferimento dei dati è facoltativo, ma l’eventuale mancato inserimento rende impossibile rispondere alle tue richieste di preventivo, disponibilità o assistenza sul soggiorno.\n\nDati tecnici e log di navigazione: Durante la consultazione del sito, l’infrastruttura di hosting (Vercel Inc.) registra automaticamente nei log di sistema alcune informazioni tecniche (indirizzo IP, identificativo del browser User-Agent, data e ora della richiesta). Tale raccolta avviene sulla base del legittimo interesse (Art. 6, par. 1, lett. f GDPR) per garantire la sicurezza della rete, prevenire attacchi informatici e assicurare il corretto funzionamento tecnico della piattaforma.',
      purposeTitle: '3. Finalità, Base Giuridica e Responsabili del Trattamento',
      purposeText:
        'I dati sono trattati esclusivamente per rispondere alle tue domande, fornirti informazioni e pianificare il tuo soggiorno (misure precontrattuali ai sensi dell’Art. 6, par. 1, lett. b GDPR), nonché per presidiare la sicurezza dell’infrastruttura informatica (Art. 6, par. 1, lett. f GDPR).\n\nNon vendiamo né cediamo mai i tuoi dati personali a terzi per scopi promozionali o di marketing.\n\nFornitori tecnici e trasferimenti internazionali: I dati sono trattati unicamente tramite fornitori di servizi affidabili che operano quali Responsabili del Trattamento ai sensi dell’Art. 28 GDPR: Vercel Inc. per l’hosting web, FormSubmit per l’inoltro cifrato delle richieste e Google Workspace / Gmail per la ricezione della corrispondenza. Poiché tali provider hanno sede o server negli Stati Uniti, i flussi di dati extra-UE sono protetti dalle garanzie dell’EU-US Data Privacy Framework (DPF) e dalle Clausole Contrattuali Standard (SCC) della Commissione Europea.\n\nLe prenotazioni e i relativi pagamenti avvengono in modo autonomo e sicuro direttamente sui portali ufficiali Airbnb e Booking.com.',
      cookiesTitle: '4. Cookie e Archiviazione Locale (Nessun Banner)',
      cookiesText:
        'Questo sito web è progettato nel rispetto totale della tua privacy: NON utilizziamo cookie di profilazione, cookie pubblicitari né strumenti di tracciamento o profilazione di terze parti (come Google Analytics o Meta Pixel).\n\nUtilizziamo esclusivamente lo storage tecnico del browser (localStorage con chiave "melina_lang") per memorizzare la preferenza linguistica da te selezionata (italiano, inglese, francese, tedesco o spagnolo). Poiché si tratta di una funzionalità tecnica essenziale ed esente da consenso preventivo ai sensi delle linee guida del Garante Privacy e della Direttiva ePrivacy europea, la navigazione è priva di fastidiosi banner per i cookie.',
      rightsTitle: '5. Diritti dell’Interessato, Tempi di Conservazione e Reclamo',
      rightsText:
        'Tempi di conservazione: I dati personali inviati tramite modulo di contatto, email o WhatsApp vengono conservati per il tempo strettamente necessario a gestire la richiesta e in ogni caso per non oltre 12 mesi dall’ultima comunicazione, a meno che non segua una prenotazione confermata o sussistano specifici obblighi di legge contabili e fiscali. I log tecnici di sistema vengono cancellati secondo le normali finestre di sicurezza dell’hosting provider.\n\nI tuoi diritti: Ai sensi degli artt. 15-22 del GDPR, puoi esercitare in ogni momento il diritto di accesso, rettifica, cancellazione (diritto all’oblio), limitazione del trattamento o opposizione, scrivendo a info.lamelina@gmail.com.\n\nDiritto di reclamo: Hai inoltre il diritto di proporre reclamo all’Autorità Garante per la Protezione dei Dati Personali italiana (Piazza Venezia 11, 00187 Roma - www.garanteprivacy.it) o all’autorità di controllo del tuo Paese di residenza.',
      closeButton: 'Chiudi',
      controllerEmailLabel: 'Email del Titolare:',
      sslSecurity: 'Sicurezza SSL / Connessione Protetta',
    },
    stayGuide: {
      badge: 'Guida al Soggiorno',
      title: 'Tutto quello che c’è da sapere per il tuo soggiorno',
      subtitle:
        'Informazioni pratiche e semplici attenzioni per vivere al meglio gli appartamenti La Melina in totale serenità.',
      intro:
        'Desideriamo che ti senta a casa tua fin dal primo istante. Ecco poche e chiare indicazioni su orari, cura degli ambienti e massima tranquillità per tutti gli ospiti.',
      checkInOutTitle: 'Orari & Accesso',
      checkInOutBadge: 'Flessibilità & Autonomia',
      flexibleCheckIn: 'Self check-in smart con cassetta chiavi e orario flessibile',
      checkOutTime: 'Check-out entro le ore 12:00',
      keyLockbox: 'Codice di accesso inviato prima dell’arrivo per entrare in totale libertà',
      duringStayTitle: 'Cura degli Spazi',
      duringStayBadge: 'Il rispetto della casa',
      maxGuestsRule: 'Capienza massima: 2 ospiti per appartamento',
      noSmokingRule: 'Ambienti interni 100% non fumatori (balcone e terrazza disponibili all’aperto)',
      quietHours: 'Ore di riposo e silenzio dalle 22:00 alle 08:00 nel rispetto del palazzo',
      noPartiesRule: 'Non sono consentiti feste, eventi o shooting commerciali',
      noPetsRule: 'Alloggi non adatti agli animali domestici per garantire massima igiene',
      beforeLeavingTitle: 'Prima della Partenza',
      beforeLeavingBadge: 'Piccoli gesti prima di partire',
      takeTrashRule: 'Smaltire i rifiuti negli appositi contenitori differenziati',
      turnOffAllRule: 'Spegnere luci e climatizzazione per un consumo sostenibile',
      returnKeysRule: 'Riporre con cura le chiavi nella cassetta di sicurezza',
      lockDoorsRule: 'Chiudere la porta a chiave prima di partire',
    },
    apartments: {
      terrace: {
        name: 'La Melina sotto la Mole',
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
          'Ambiente living accogliente con scala verso il soppalco',
          'Suggestiva vista notturna della Mole Antonelliana illuminata',
          'Zona pranzo luminosa',
          'Cucina attrezzata con piano cottura, frigorifero e macchina del caffè',
          'Vista dal soppalco',
          'Bagno privato con doccia, bidet e set biancheria e asciugamani',
          'Ingresso dell’alloggio con panca',
          'Camera da letto sul soppalco',
          'Salotto con poltrone e tavolino',
          'Specchio illuminato nel bagno',
          'Dettaglio sulla cucina',
          'Logo dell’appartamento all’entrata',
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
          'Spazioso salotto con alti soffitti storici e divani',
          'Salotto con Smart TV',
          'Zona giorno con tavolo da pranzo e bar a vista',
          'Camera da letto sul soppalco',
          'Bagno privato rifinito con doccia, bidet e set biancheria',
          'Scorcio panoramico sui portici storici di Via Po dal balcone',
          'Entrata nell’alloggio con panca',
          'Vista sul salotto dal soppalco',
          'Dettagli del tavolo',
          'Via Po illuminata d’inverno',
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
      terrace: 'La Melina sotto la Mole',
      garden: 'La Melina su Via Po',
      amenities: 'Amenities',
      stayGuide: 'Stay Guide',
      location: 'Location',
      reviews: 'Reviews',
      contact: 'Contact',
    },
    hero: {
      welcomeBadge: 'Welcome to La Melina · Turin Center',
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
      hostRole: 'Host & Property Manager · La Melina',
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
      followUs: 'Follow our journey',
      privacyNotice: 'By sending this message, you confirm that you have read our',
      privacyLinkText: 'Privacy Policy',
    },
    footer: {
      tagline:
        'Two private holiday retreats in central Turin at Via Po 51.',
      bookOnline: 'Book Online',
      explore: 'Navigation',
      rights:
        'All rights reserved. Bookings fulfilled securely on Airbnb and Booking.com.',
      backToTop: 'Back to Top',
      followUs: 'Follow us',
      privacyPolicy: 'Privacy & Cookie Policy',
    },
    privacyModal: {
      title: 'Privacy & Cookie Policy',
      badge: 'GDPR Compliance (EU Reg. 2016/679)',
      lastUpdated: 'Last updated: October 2026',
      controllerTitle: '1. Data Controller',
      controllerText:
        'The Data Controller is Alessandra Mela, property manager for "La Melina" holiday apartments situated at Via Po 51, 10124 Turin (TO), Italy.\n\nFor any questions, information requests, or to exercise your statutory data protection rights, please contact us directly at: info.lamelina@gmail.com.',
      dataTitle: '2. Data Collected, Contact Channels & Server Logs',
      dataText:
        'We collect personal information that you voluntarily submit through our inquiry form (name, email address, chosen apartment, and message) or through our direct contact channels (WhatsApp at +39 328 329 9346 and direct email).\n\nNature of provision: Providing your personal data is voluntary; however, without it we cannot reply to your requests or assist with your stay planning.\n\nTechnical connection data & server logs: When you visit our website, our cloud hosting infrastructure (Vercel Inc.) automatically records technical connection logs (including IP addresses, browser User-Agent strings, and access timestamps). This technical logging is conducted on the basis of legitimate interest (Art. 6(1)(f) GDPR) to ensure server stability, cyber threat prevention, and proper platform functioning.',
      purposeTitle: '3. Purpose, Legal Basis & Data Processors',
      purposeText:
        'Your data is processed exclusively to address your inquiries, verify rates and availability, and assist with stay arrangements (pre-contractual measures under Art. 6(1)(b) GDPR), as well as to safeguard network security (Art. 6(1)(f) GDPR).\n\nWe never sell or share your personal data with third parties for commercial or marketing purposes.\n\nTechnical service providers & international transfers: Data processing relies strictly on trusted technical service providers acting as Data Processors under Art. 28 GDPR: Vercel Inc. (web infrastructure and hosting), FormSubmit (encrypted inquiry transmission), and Google Workspace / Gmail (email reception). Where these providers operate in the United States, cross-border data transfers are safeguarded under the EU-US Data Privacy Framework (DPF) and the European Commission’s Standard Contractual Clauses (SCC).\n\nFinal reservations and financial transactions take place independently and securely directly through official Airbnb and Booking.com platforms.',
      cookiesTitle: '4. Cookies & Local Storage (No Cookie Banner)',
      cookiesText:
        'This website is engineered with strict privacy standards: we DO NOT use profiling cookies, advertising cookies, or third-party behavioral trackers (such as Google Analytics or Meta Pixel).\n\nWe only use browser local technical storage (localStorage key "melina_lang") to preserve your preferred browsing language (Italian, English, French, German, or Spanish). Because this is an essential technical setting exempt from prior consent under Italian Garante and EU ePrivacy guidelines, this site is free of annoying cookie banners.',
      rightsTitle: '5. Data Retention, Your Rights & Complaints',
      rightsText:
        'Data retention: Inquiries submitted via the form, email, or WhatsApp are retained only as long as necessary to handle the communication, and in any case for no longer than 12 months from the last contact, unless followed by a confirmed reservation or required by statutory accounting/legal retention obligations. Technical server logs are purged according to hosting provider security cycles.\n\nYour rights: Under Articles 15-22 of the GDPR, you have the right to access, rectify, delete (right to be forgotten), restrict processing, or object to the processing of your data by contacting info.lamelina@gmail.com.\n\nRight to lodge a complaint: You also have the right to lodge a complaint with the Italian Data Protection Authority (Garante per la protezione dei dati personali, Piazza Venezia 11, 00187 Rome - www.garanteprivacy.it) or with your local supervisory authority within the EU.',
      closeButton: 'Close',
      controllerEmailLabel: 'Data Controller Email:',
      sslSecurity: 'SSL Security / Encrypted Connection',
    },
    stayGuide: {
      badge: 'Stay Guide',
      title: 'Helpful details for a smooth, relaxing stay',
      subtitle:
        'Practical timings and thoughtful touches to make the most of your time at La Melina in complete ease.',
      intro:
        'We want you to feel warmly at home in Turin from the very first minute. Here are a few clear details regarding arrival, caring for the space, and peaceful living.',
      checkInOutTitle: 'Timing & Arrival',
      checkInOutBadge: 'Flexibility & Autonomy',
      flexibleCheckIn: 'Smart self check-in with key lockbox and flexible timing',
      checkOutTime: 'Check-out by 12:00 PM',
      keyLockbox: 'Secure entry code sent before arrival for seamless 24/7 access',
      duringStayTitle: 'Caring for the Space',
      duringStayBadge: 'Caring for the space',
      maxGuestsRule: 'Maximum capacity: 2 guests per apartment',
      noSmokingRule: '100% smoke-free interiors (private balcony & terrace available outside)',
      quietHours: 'Quiet resting hours from 10:00 PM to 8:00 AM out of respect for neighbors',
      noPartiesRule: 'Parties, gatherings, or commercial photography are not permitted',
      noPetsRule: 'Pet-free retreats to ensure top allergen & cleanliness standards',
      beforeLeavingTitle: 'Before Departure',
      beforeLeavingBadge: 'Simple parting gestures',
      takeTrashRule: 'Dispose of trash in the designated recycling bins',
      turnOffAllRule: 'Turn off lights and climate controls for sustainability',
      returnKeysRule: 'Return the apartment keys safely to the lockbox',
      lockDoorsRule: 'Lock the entrance door securely upon departure',
    },
    apartments: {
      terrace: {
        name: 'La Melina sotto la Mole',
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
          'Cozy living area with staircase leading to the mezzanine',
          'Atmospheric night view of the illuminated Mole Antonelliana',
          'Bright dining area',
          'Fully equipped kitchen with stovetop, refrigerator, and coffee machine',
          'View from the mezzanine',
          'Private bathroom with shower, bidet, and fresh linen & towel sets',
          'Apartment entryway with bench',
          'Mezzanine bedroom',
          'Living area with armchairs and coffee table',
          'Illuminated mirror in the bathroom',
          'Kitchen details',
          'Apartment logo at the entrance',
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
          'Spacious living room with high historic ceilings and sofas',
          'Living room with Smart TV',
          'Living area with dining table and open bar',
          'Mezzanine bedroom',
          'Refined private bathroom with shower, bidet, and towel set',
          'Panoramic view over the historic arcades of Via Po from the balcony',
          'Apartment entryway with bench',
          'View over the living room from the mezzanine',
          'Table details',
          'Via Po illuminated in winter',
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
      terrace: 'La Melina sotto la Mole',
      garden: 'La Melina su Via Po',
      amenities: 'Services',
      stayGuide: 'Guide du Séjour',
      location: 'Emplacement',
      reviews: 'Avis',
      contact: 'Contact',
    },
    hero: {
      welcomeBadge: 'Bienvenue à La Melina · Turin Centre',
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
      hostRole: 'Host & Property Manager · La Melina',
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
      followUs: 'Suivez-nous sur les réseaux',
      privacyNotice: 'En envoyant ce formulaire, vous confirmez avoir pris connaissance de notre',
      privacyLinkText: 'Politique de Confidentialité',
    },
    footer: {
      tagline:
        'Deux appartements d’hôtes de charme au cœur de Turin, Via Po 51.',
      bookOnline: 'Réserver en Ligne',
      explore: 'Navigation',
      rights:
        'Tous droits réservés. Réservations traitées en toute sécurité sur Airbnb et Booking.com.',
      backToTop: 'Retour en haut',
      followUs: 'Suivez-nous',
      privacyPolicy: 'Politique de Confidentialité',
    },
    privacyModal: {
      title: 'Politique de Confidentialité & Cookies',
      badge: 'Conformité RGPD (Règlement UE 2016/679)',
      lastUpdated: 'Dernière mise à jour : Octobre 2026',
      controllerTitle: '1. Responsable du Traitement',
      controllerText:
        'Le responsable du traitement des données personnelles est Alessandra Mela pour les hébergements touristiques "La Melina", Via Po 51, 10124 Turin (TO), Italie.\n\nPour toute demande d’information ou pour exercer vos droits relatifs à vos données personnelles, vous pouvez nous écrire directement à : info.lamelina@gmail.com.',
      dataTitle: '2. Données Collectées, Canaux de Contact et Journaux Serveur',
      dataText:
        'Nous recueillons les données personnelles transmises volontairement via le formulaire de contact (nom, adresse email, hébergement souhaité et message) ou par nos canaux directs (WhatsApp au +39 328 329 9346 et email direct).\n\nCaractère facultatif : La transmission de vos données est facultative, mais son omission empêche de répondre à vos demandes de renseignement ou de disponibilité.\n\nDonnées techniques et journaux de connexion : Lors de votre consultation du site, l’hébergeur d’infrastructure (Vercel Inc.) enregistre automatiquement des informations techniques dans les journaux système (adresse IP, User-Agent du navigateur, date et heure d’accès). Ce traitement repose sur notre intérêt légitime (Art. 6.1.f RGPD) afin de garantir la sécurité du réseau, prévenir les attaques et assurer le bon fonctionnement du site.',
      purposeTitle: '3. Finalités, Base Juridique et Sous-traitants',
      purposeText:
        'Vos données sont traitées exclusivement pour répondre à vos demandes, établir des devis et vous assister dans l’organisation de votre séjour (mesures précontractuelles, Art. 6.1.b RGPD), ainsi que pour sécuriser l’infrastructure (Art. 6.1.f RGPD).\n\nNous ne vendons ni ne cédons jamais vos données personnelles à des tiers à des fins promotionnelles ou de marketing.\n\nSous-traitants techniques et transferts hors UE : Les données sont traitées uniquement par des prestataires techniques de confiance agissant en qualité de sous-traitants (Art. 28 RGPD) : Vercel Inc. pour l’hébergement web, FormSubmit pour l’acheminement sécurisé des messages et Google Workspace / Gmail pour la messagerie. Les transferts vers leurs infrastructures situées aux États-Unis sont encadrés par le cadre UE-États-Unis de protection des données (DPF) et les Clauses Contractuelles Types (CCT) de la Commission européenne.\n\nLes réservations et paiements s’effectuent de manière indépendante et sécurisée directement sur les plateformes officielles Airbnb et Booking.com.',
      cookiesTitle: '4. Cookies et Stockage Local (Sans Bannière)',
      cookiesText:
        'Ce site est conçu dans le plus strict respect de votre vie privée : AUCUN cookie de profilage, cookie publicitaire ou traceur de comportement tiers (tel que Google Analytics ou le Pixel Meta) n’est utilisé.\n\nNous employons exclusivement le stockage technique local du navigateur (localStorage avec la clé "melina_lang") pour mémoriser votre choix de langue (italien, anglais, français, allemand ou espagnol). S’agissant d’une technologie strictement technique dispensée de consentement selon les directives des autorités de protection des données et la directive ePrivacy, aucune bannière de cookies n’est imposée.',
      rightsTitle: '5. Conservation des Données, Vos Droits et Réclamations',
      rightsText:
        'Durée de conservation : Les données transmises par formulaire, email ou WhatsApp sont conservées pendant la durée nécessaire au traitement de votre demande et pour un maximum de 12 mois après le dernier contact, sauf réservation effective ou obligations légales et comptables de conservation. Les journaux serveur sont purgés selon les cycles de sécurité de l’hébergeur.\n\nVos droits : Conformément aux articles 15 à 22 du RGPD, vous disposez à tout moment d’un droit d’accès, de rectification, d’effacement (droit à l’oubli), de limitation et d’opposition en écrivant à info.lamelina@gmail.com.\n\nDroit de réclamation : Vous avez également le droit d’introduire une réclamation auprès de l’autorité de protection des données italienne (Garante per la protezione dei dati personali, Piazza Venezia 11, 00187 Rome - www.garanteprivacy.it) ou de l’autorité de contrôle de votre pays de résidence dans l’UE (ex. la CNIL en France).',
      closeButton: 'Fermer',
      controllerEmailLabel: 'Email du Responsable :',
      sslSecurity: 'Sécurité SSL / Connexion Protégée',
    },
    stayGuide: {
      badge: 'Guide du Séjour',
      title: 'Tout ce qu’il faut savoir pour un séjour serein',
      subtitle:
        'Horaires pratiques et attentions bienveillantes pour profiter pleinement de votre séjour chez La Melina.',
      intro:
        'Nous souhaitons que vous vous sentiez comme chez vous à Turin dès la première seconde. Voici quelques repères clairs sur les horaires, le confort et le respect des lieux.',
      checkInOutTitle: 'Horaires & Accès',
      checkInOutBadge: 'Flexibilité & Autonomie',
      flexibleCheckIn: 'Arrivée autonome intelligente avec boîte à clés et horaires flexibles',
      checkOutTime: 'Départ avant 12h00',
      keyLockbox: 'Code d’accès sécurisé envoyé avant l’arrivée pour une entrée libre 24h/24',
      duringStayTitle: 'Soin des Lieux',
      duringStayBadge: 'Respect des lieux',
      maxGuestsRule: 'Capacité maximale : 2 personnes par appartement',
      noSmokingRule: 'Intérieurs 100% non-fumeurs (terrasse et balcon privatifs en extérieur)',
      quietHours: 'Heures de repos et de calme de 22h00 à 08h00 pour la tranquillité de l’immeuble',
      noPartiesRule: 'Fêtes, réceptions ou tournages commerciaux non autorisés',
      noPetsRule: 'Logements sans animaux pour garantir un niveau d’hygiène irréprochable',
      beforeLeavingTitle: 'Avant le Départ',
      beforeLeavingBadge: 'Quelques gestes simples',
      takeTrashRule: 'Déposer les poubelles dans les bacs de tri sélectif dédiés',
      turnOffAllRule: 'Éteindre les lumières et la climatisation par souci écologique',
      returnKeysRule: 'Replacer soigneusement les clés dans la boîte sécurisée',
      lockDoorsRule: 'Verrouiller la porte d’entrée au moment du départ',
    },
    apartments: {
      terrace: {
        name: 'La Melina sotto la Mole',
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
          'Espace salon chaleureux avec escalier menant à la mezzanine',
          'Vue nocturne suggestive de la Mole Antonelliana illuminée',
          'Espace salle à manger lumineux',
          'Cuisine équipée avec plaques de cuisson, réfrigérateur et machine à café',
          'Vue depuis la mezzanine',
          'Salle de bain privée avec douche, bidet et linge de maison & serviettes',
          'Entrée du logement avec banc',
          'Chambre à coucher en mezzanine',
          'Salon avec fauteuils et table basse',
          'Miroir éclairé dans la salle de bain',
          'Détails de la cuisine',
          'Logo de l’appartement à l’entrée',
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
          'Salon spacieux avec hauts plafonds d’époque et canapés',
          'Salon avec Smart TV',
          'Pièce de vie avec table à manger et bar ouvert',
          'Chambre à coucher en mezzanine',
          'Salle de bain privée raffinée avec douche, bidet et linge de bain',
          'Aperçu panoramique sur les arcades historiques de la Via Po depuis le balcon',
          'Entrée du logement avec banc',
          'Vue sur le salon depuis la mezzanine',
          'Détails de la table',
          'La Via Po illuminée en hiver',
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
      terrace: 'La Melina sotto la Mole',
      garden: 'La Melina su Via Po',
      amenities: 'Ausstattung',
      stayGuide: 'Aufenthalts-Guide',
      location: 'Lage',
      reviews: 'Bewertungen',
      contact: 'Kontakt',
    },
    hero: {
      welcomeBadge: 'Willkommen bei La Melina · Turin Zentrum',
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
      hostRole: 'Host & Property Manager · La Melina',
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
      followUs: 'Folgen Sie uns in den sozialen Medien',
      privacyNotice: 'Mit dem Absenden bestätigen Sie, dass Sie unsere',
      privacyLinkText: 'Datenschutzerklärung',
    },
    footer: {
      tagline:
        'Zwei private Ferienunterkünfte im Herzen von Turin in der Via Po 51.',
      bookOnline: 'Online Buchen',
      explore: 'Navigation',
      rights:
        'Alle Rechte vorbehalten. Buchungen sicher abgewickelt über Airbnb und Booking.com.',
      backToTop: 'Nach oben',
      followUs: 'Folgen Sie uns',
      privacyPolicy: 'Datenschutz & Cookies',
    },
    privacyModal: {
      title: 'Datenschutzerklärung & Cookie-Richtlinie',
      badge: 'DSGVO-Konformität (EU-VO 2016/679)',
      lastUpdated: 'Zuletzt aktualisiert: Oktober 2026',
      controllerTitle: '1. Verantwortliche Stelle',
      controllerText:
        'Verantwortliche Stelle für die Datenverarbeitung ist Alessandra Mela für die Ferienunterkünfte "La Melina", Via Po 51, 10124 Turin (TO), Italien.\n\nFür Auskünfte, Anfragen oder zur Wahrnehmung Ihrer Datenschutzrechte wenden Sie sich bitte direkt per E-Mail an: info.lamelina@gmail.com.',
      dataTitle: '2. Erhobene Daten, Kontaktkanäle & Server-Protokolle',
      dataText:
        'Wir erheben personenbezogene Daten, die Sie uns freiwillig über das Anfrageformular (Name, E-Mail-Adresse, gewähltes Apartment und Nachricht) oder über unsere Direktkanäle (WhatsApp unter +39 328 329 9346 sowie direkte E-Mail) mitteilen.\n\nFreiwilligkeit der Bereitstellung: Die Bereitstellung Ihrer Daten ist freiwillig; ohne diese Angaben ist eine Beantwortung Ihrer Anfrage oder Auskunft zu Verfügbarkeiten jedoch nicht möglich.\n\nTechnische Verbindungsdaten & Server-Logs: Beim Aufruf der Website registriert die Hosting-Infrastruktur (Vercel Inc.) aus technischen Gründen Logfiles (u.a. IP-Adresse, Browser-Kennung User-Agent sowie Zugriffszeitpunkt). Diese Speicherung erfolgt auf Grundlage berechtigter Interessen (Art. 6 Abs. 1 lit. f DSGVO), um Systemsicherheit, Abwehr von Cyberangriffen und zuverlässigen Betrieb zu gewährleisten.',
      purposeTitle: '3. Zweck, Rechtsgrundlagen & Auftragsverarbeiter',
      purposeText:
        'Ihre Daten werden ausschließlich zur Beantwortung von Fragen, Angebotserstellung und Reisevorbereitung (vorvertragliche Maßnahmen gem. Art. 6 Abs. 1 lit. b DSGVO) sowie zur Systemsicherheit (Art. 6 Abs. 1 lit. f DSGVO) verarbeitet.\n\nWir verkaufen oder übermitteln Ihre Daten zu keinem Zeitpunkt an Dritte zu Marketing- oder Werbezwecken.\n\nTechnische Dienstleister & Drittlandübermittlung: Die Verarbeitung erfolgt über sorgfältig eingebundene technische Dienstleister als Auftragsverarbeiter (Art. 28 DSGVO): Vercel Inc. für das Webhosting, FormSubmit für die verschlüsselte Formularweiterleitung und Google Workspace / Gmail für den Mail-Empfang. Da diese Dienstleister Standorte in den USA unterhalten, sind Übermittlungen durch das EU-US Data Privacy Framework (DPF) und Standardvertragsklauseln (SCC) der Europäischen Kommission abgesichert.\n\nBuchungen und Zahlungen erfolgen eigenständig und sicher über die offiziellen Portale Airbnb und Booking.com.',
      cookiesTitle: '4. Cookies & Lokale Speicherung (Kein Cookie-Banner)',
      cookiesText:
        'Diese Website respektiert Ihre Privatsphäre: Wir setzen KEINE Profiling-Cookies, Marketing-Tracker oder verhaltensbezogene Drittanbieter-Analysen (wie Google Analytics oder Meta-Pixel) ein.\n\nEs kommt ausschließlich der lokale technische Speicher des Browsers (localStorage mit dem Schlüssel "melina_lang") zum Einsatz, um Ihre gewünschte Spracheinstellung (Italienisch, Englisch, Französisch, Deutsch oder Spanisch) festzuhalten. Da dies eine essenzielle technische Funktion darstellt, die nach ePrivacy-Vorgaben und Behördenleitlinien einwilligungsfrei ist, benötigen wir kein störendes Cookie-Banner.',
      rightsTitle: '5. Speicherdauer, Ihre Rechte & Beschwerdebefugnis',
      rightsText:
        'Speicherdauer: Übermittelte Anfragedaten werden für die Dauer der Bearbeitung und maximal für einen Zeitraum von 12 Monaten nach dem letzten Kontakt aufbewahrt, es sei denn, es folgt eine Buchung oder es greifen gesetzliche steuer- und handelsrechtliche Aufbewahrungspflichten. Technische Server-Logs werden nach standardisierten Sicherheitszyklen des Hosters gelöscht.\n\nIhre Rechte: Gemäß Art. 15-22 DSGVO haben Sie jederzeit das Recht auf Auskunft, Berichtigung, Löschung (Recht auf Vergessenwerden), Einschränkung der Verarbeitung oder Widerspruch per E-Mail an info.lamelina@gmail.com.\n\nBeschwerderecht: Sie haben zudem das Recht, eine Beschwerde bei der zuständigen italienischen Aufsichtsbehörde (Garante per la protezione dei dati personali, Piazza Venezia 11, 00187 Rom - www.garanteprivacy.it) oder bei der Datenschutzbehörde Ihres Wohnsitzlandes einzureichen.',
      closeButton: 'Schließen',
      controllerEmailLabel: 'E-Mail der Verantwortlichen:',
      sslSecurity: 'SSL-Sicherheit / Verschlüsselte Verbindung',
    },
    stayGuide: {
      badge: 'Aufenthalts-Guide',
      title: 'Wissenswertes für einen entspannten Aufenthalt',
      subtitle:
        'Praktische Zeiten und einfache Hinweise, um Ihre Zeit bei La Melina in vollen Zügen zu genießen.',
      intro:
        'Wir möchten, dass Sie sich in Turin vom ersten Moment an wie zu Hause fühlen. Hier finden Sie alle nützlichen Informationen zu Ankunft, Wohnkomfort und ruhigem Beisammensein.',
      checkInOutTitle: 'Zeiten & Ankunft',
      checkInOutBadge: 'Flexibilität & Autonomie',
      flexibleCheckIn: 'Smarter Self Check-in mit Schlüsselbox und flexiblen Ankunftszeiten',
      checkOutTime: 'Check-out bis 12:00 Uhr',
      keyLockbox: 'Sicherer Zugangscode vorab für unkomplizierten 24/7 Einlass',
      duringStayTitle: 'Pflege der Räumlichkeiten',
      duringStayBadge: 'Respektvoller Umgang',
      maxGuestsRule: 'Maximale Belegung: 2 Gäste pro Apartment',
      noSmokingRule: '100% Nichtraucher-Innenräume (privater Balkon & Terrasse im Freien)',
      quietHours: 'Nachtruhe von 22:00 bis 08:00 Uhr für ein ungestörtes Wohnumfeld',
      noPartiesRule: 'Partys, Veranstaltungen oder kommerzielle Fotoshootings sind nicht gestattet',
      noPetsRule: 'Haustierfreie Apartments für höchste Sauberkeits- und Allergenstandards',
      beforeLeavingTitle: 'Vor der Abreise',
      beforeLeavingBadge: 'Kleine Handgriffe vor der Abreise',
      takeTrashRule: 'Müll in den vorgesehenen Recycling-Behältern entsorgen',
      turnOffAllRule: 'Lichter und Klimaanlage für einen nachhaltigen Umgang ausschalten',
      returnKeysRule: 'Schlüssel sicher in die Schlüsselbox zurücklegen',
      lockDoorsRule: 'Wohnungstür beim Verlassen sorgfältig abschließen',
    },
    apartments: {
      terrace: {
        name: 'La Melina sotto la Mole',
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
          'Gemütlicher Wohnbereich mit Treppe zur Galerie',
          'Stimmungsvoller nächtlicher Blick auf die beleuchtete Mole Antonelliana',
          'Heller Essbereich',
          'Voll ausgestattete Küche mit Herd, Kühlschrank und Kaffeemaschine',
          'Blick von der Galerie',
          'Privates Badezimmer mit Dusche, Bidet sowie Bettwäsche- und Handtuchset',
          'Wohnungseingang mit Sitzbank',
          'Schlafzimmer auf der Galerie',
          'Wohnzimmer mit Sesseln und Couchtisch',
          'Beleuchteter Spiegel im Badezimmer',
          'Küchendetails',
          'Wohnungslogo am Eingang',
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
          'Geräumiges Wohnzimmer mit hohen historischen Decken und Sofas',
          'Wohnbereich mit Smart-TV',
          'Wohnbereich mit Esstisch und offener Bar',
          'Schlafzimmer auf der Galerie',
          'Elegantes privates Badezimmer mit Dusche, Bidet und Handtuchset',
          'Panoramablick auf die historischen Arkaden der Via Po vom Balkon',
          'Wohnungseingang mit Sitzbank',
          'Blick auf das Wohnzimmer von der Galerie',
          'Tischdetails',
          'Via Po im winterlichen Lichterglanz',
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
      terrace: 'La Melina sotto la Mole',
      garden: 'La Melina su Via Po',
      amenities: 'Servicios',
      stayGuide: 'Guía de Estancia',
      location: 'Ubicación',
      reviews: 'Opiniones',
      contact: 'Contacto',
    },
    hero: {
      welcomeBadge: 'Bienvenidos a La Melina · Centro de Turín',
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
      hostRole: 'Host & Property Manager · La Melina',
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
      followUs: 'Síguenos en las redes sociales',
      privacyNotice: 'Al enviar este formulario confirmas que has leído nuestra',
      privacyLinkText: 'Política de Privacidad',
    },
    footer: {
      tagline:
        'Dos alojamientos vacacionales privados en el centro histórico de Turín, en Via Po 51.',
      bookOnline: 'Reservar Online',
      explore: 'Navegación',
      rights:
        'Todos los derechos reservados. Reservas gestionadas de forma segura en Airbnb y Booking.com.',
      backToTop: 'Volver arriba',
      followUs: 'Síguenos',
      privacyPolicy: 'Política de Privacidad & Cookies',
    },
    privacyModal: {
      title: 'Política de Privacidad y Cookies',
      badge: 'Conformidad RGPD (Reglamento UE 2016/679)',
      lastUpdated: 'Última actualización: Octubre 2026',
      controllerTitle: '1. Responsable del Tratamiento',
      controllerText:
        'La responsable del tratamiento de los datos personales es Alessandra Mela para los alojamientos "La Melina", sitos en Via Po 51, 10124 Turín (TO), Italia.\n\nPara cualquier consulta, aclaración o para el ejercicio de tus derechos de protección de datos, puedes contactarnos directamente en: info.lamelina@gmail.com.',
      dataTitle: '2. Datos Recopilados, Canales de Contacto y Registros del Servidor',
      dataText:
        'Recopilamos los datos personales proporcionados voluntariamente mediante el formulario de consulta (nombre, correo electrónico, apartamento de interés y mensaje) o a través de los canales directos del sitio (WhatsApp en el +39 328 329 9346 y correo directo).\n\nCarácter potestativo del suministro: La aportación de datos es voluntaria; no obstante, su omisión impide atender a tus dudas o comprobar la disponibilidad del alojamiento.\n\nDatos técnicos y registros de navegación: Durante la navegación, el proveedor de alojamiento en la nube (Vercel Inc.) registra de forma automática información técnica en los registros del servidor (dirección IP, identificador User-Agent del navegador y marcas de tiempo). Esta recogida responde a nuestro interés legítimo (Art. 6.1.f RGPD) para preservar la ciberseguridad, prevenir incidentes técnicos y garantizar el correcto funcionamiento del servicio.',
      purposeTitle: '3. Finalidad, Base Jurídica y Encargados del Tratamiento',
      purposeText:
        'Tus datos se tratan exclusivamente para responder a tus consultas, facilitar presupuestos y coordinar tu estancia (medidas precontractuales según el Art. 6.1.b del RGPD), así como para garantizar la seguridad de la infraestructura (Art. 6.1.f del RGPD).\n\nNunca vendemos ni cedemos tus datos personales a terceros con fines publicitarios o de mercadotecnia.\n\nProveedores técnicos y transferencias internacionales: El tratamiento se efectúa mediante proveedores técnicos contrastados que operan como Encargados del Tratamiento (Art. 28 RGPD): Vercel Inc. para el alojamiento web, FormSubmit para la transmisión cifrada del formulario y Google Workspace / Gmail para la gestión del correo. Dado que sus servidores o sedes se encuentran en Estados Unidos, las transferencias internacionales están reguladas por el Marco de Privacidad de Datos UE-EE. UU. (DPF) y las Cláusulas Contractuales Tipo (CCT) de la Comisión Europea.\n\nLas reservas finales y los pagos se formalizan de manera independiente y protegida a través de las plataformas oficiales de Airbnb y Booking.com.',
      cookiesTitle: '4. Cookies y Almacenamiento Local (Sin Banner de Cookies)',
      cookiesText:
        'Este sitio web está concebido para respetar plenamente tu privacidad: NO utilizamos cookies de perfilado, cookies publicitarias ni rastreadores de comportamiento de terceros (como Google Analytics o el Píxel de Meta).\n\nÚnicamente empleamos el almacenamiento técnico local del navegador (localStorage con la clave "melina_lang") para guardar tu preferencia de idioma seleccionada (italiano, inglés, francés, alemán o español). Al ser un mecanismo estrictamente técnico y exento de consentimiento según las directrices de las autoridades de protección de datos y la directiva ePrivacy, el sitio no requiere avisos ni banners de cookies molestos.',
      rightsTitle: '5. Conservación de Datos, Derechos del Usuario y Reclamaciones',
      rightsText:
        'Plazos de conservación: Los datos facilitados por formulario, correo o WhatsApp se conservan durante el tiempo estrictamente necesario para gestionar la solicitud y, a lo sumo, por un plazo máximo de 12 meses desde la última interacción, salvo formalización de una reserva o cumplimiento de obligaciones fiscales y legales. Los registros técnicos de navegación se cancelan conforme a los estándares de seguridad del hosting.\n\nTus derechos: Conforme a los artículos 15 a 22 del RGPD, puedes solicitar en todo momento el acceso, rectificación, supresión (derecho al olvido), limitación u oposición enviando un correo a info.lamelina@gmail.com.\n\nDerecho de reclamación: Asimismo, te asiste el derecho a formular una reclamación ante la autoridad italiana de control (Garante per la protezione dei dati personali, Piazza Venezia 11, 00187 Roma - www.garanteprivacy.it) o ante la agencia de protección de datos de tu lugar de residencia habitual en la UE.',
      closeButton: 'Cerrar',
      controllerEmailLabel: 'Correo de la Responsable:',
      sslSecurity: 'Seguridad SSL / Conexión Segura',
    },
    stayGuide: {
      badge: 'Guía de Estancia',
      title: 'Todo lo que necesitas saber para una estancia serena',
      subtitle:
        'Horarios prácticos y sencillas pautas para disfrutar de tu estancia en La Melina con total comodidad.',
      intro:
        'Queremos que te sientas como en tu propia casa desde el primer momento. Aquí tienes algunas indicaciones claras sobre horarios, cuidado del espacio y tranquilidad.',
      checkInOutTitle: 'Horarios & Acceso',
      checkInOutBadge: 'Flexibilidad & Autonomía',
      flexibleCheckIn: 'Llegada autónoma smart con caja de llaves y horario flexible',
      checkOutTime: 'Salida antes de las 12:00',
      keyLockbox: 'Código de acceso seguro enviado antes de la llegada para total libertad 24/7',
      duringStayTitle: 'Cuidado de los Espacios',
      duringStayBadge: 'Respeto del hogar',
      maxGuestsRule: 'Capacidad máxima: 2 huéspedes por apartamento',
      noSmokingRule: 'Interiores 100% libres de humo (balcón y terraza privados disponibles al aire libre)',
      quietHours: 'Horas de descanso de 22:00 a 08:00 para garantizar la tranquilidad vecinal',
      noPartiesRule: 'No se permiten fiestas, eventos ni sesiones fotográficas publicitarias',
      noPetsRule: 'Alojamientos sin mascotas para garantizar un estándar óptimo de higiene',
      beforeLeavingTitle: 'Antes de la Salida',
      beforeLeavingBadge: 'Pequeños detalles antes de salir',
      takeTrashRule: 'Depositar la basura en los cubos de reciclaje indicados',
      turnOffAllRule: 'Apagar luces y climatización para un consumo energético sostenible',
      returnKeysRule: 'Guardar las llaves en la caja de seguridad',
      lockDoorsRule: 'Cerrar la puerta con llave al salir',
    },
    apartments: {
      terrace: {
        name: 'La Melina sotto la Mole',
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
          'Acogedora sala de estar con escalera hacia el altillo',
          'Sugerente vista nocturna de la Mole Antonelliana iluminada',
          'Luminoso comedor',
          'Cocina equipada con placa de cocción, frigorífico y cafetera',
          'Vista desde el altillo',
          'Baño privado con ducha, bidé y juego de sábanas y toallas',
          'Entrada del apartamento con banco',
          'Dormitorio en el altillo',
          'Salón con sillones y mesa de centro',
          'Espejo iluminado en el baño',
          'Detalles de la cocina',
          'Logotipo del apartamento en la entrada',
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
          'Planta noble con ascensor, techos altos señoriales y altillo de design',
          'Ubicación estratégica a pocos pasos de Piazza Vittorio Veneto y la Mole',
          'Máximo confort: aire acondicionado centralizado, Wi-Fi rápido y self check-in smart',
        ],
        galleryCaptions: [
          'Amplio salón con techos altos de época y sofás',
          'Salón con Smart TV',
          'Zona de estar con mesa de comedor y barra abierta',
          'Dormitorio en el altillo',
          'Elegante baño privado con ducha, bidé y juego de toallas',
          'Vista panorámica de los soportales históricos de Via Po desde el balcón',
          'Entrada del apartamento con banco',
          'Vista de la sala de estar desde el altillo',
          'Detalles de la mesa',
          'Via Po iluminada en invierno',
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
