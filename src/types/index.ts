export interface Amenity {
  name: string
  iconName: string
  category: 'Essentials' | 'Comfort' | 'Kitchen' | 'Bathroom' | 'Outdoor & Parking'
}

export interface HouseRules {
  checkIn: string
  checkOut: string
  selfCheckIn: boolean
  smokingAllowed: boolean
  petsAllowed: boolean
  partiesAllowed: boolean
  quietHours?: string
}

export interface Apartment {
  id: string
  name: string
  subtitle: string
  platform: 'Airbnb' | 'Booking.com'
  platformUrl: string
  rating: number
  reviewCount: number
  badgeText: string
  capacity: {
    guests: number
    bedrooms: number
    beds: number
    bathrooms: number
    areaSqm: number
  }
  description: string
  story: string
  heroImage: string
  galleryImages: {
    url: string
    caption: string
  }[]
  amenities: Amenity[]
  highlights: string[]
  rules: HouseRules
}

export interface LocationHighlight {
  title: string
  distance: string
  category: 'Sightseeing' | 'Dining' | 'Transport' | 'Beach & Leisure'
  description: string
}

export interface GuestReview {
  id: string
  author: string
  location: string
  date: string
  rating: number
  platform: 'Airbnb' | 'Booking.com'
  apartmentName: string
  text: string
  avatarUrl?: string
}

export interface HostInfo {
  name: string
  title: string
  bio: string
  avatarUrl: string
  email: string
  phone: string
  whatsapp: string
  address: string
  languages: string[]
  superhost: boolean
  bookingAward: boolean
}
