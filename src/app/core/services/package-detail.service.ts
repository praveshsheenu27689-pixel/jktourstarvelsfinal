import { Injectable } from '@angular/core';

export interface DayActivity {
  time?: string;
  title: string;
  type: 'transfer' | 'activity' | 'hotel' | 'meal' | 'note';
  tag?: string;
  duration?: string;
  included?: boolean;
}

export interface ItineraryDay {
  day: number;
  title: string;
  image: string;
  description: string;
  activities: DayActivity[];
  breakfast: 'Included at Hotel' | 'Not Included' | 'Included';
  lunch: 'Included' | 'Not Included';
  dinner: 'Included' | 'Not Included';
  hotel: string;
  notes?: string[];
}

export interface HotelInfo {
  name: string;
  stars: number;
  address: string;
  rating: number;
  ratingLabel: string;
  ratingCount: number;
  checkIn: string;
  checkOut: string;
  roomType: string;
  meals: string;
  image: string;
  knowAbout: string[];
}

export interface PackageDetail {
  id: number;
  title: string;
  destination: string;
  nights: number;
  days: number;
  image: string;
  price: number;
  badge?: string;
  flightFrom: string;
  flightIncluded: boolean;
  atAGlance: { intro: string; highlights: string[] };
  hotel: HotelInfo;
  itinerary: ItineraryDay[];
  inclusions: string[];
  exclusions: string[];
  terms: string[];
  importantNotes: string[];
}

@Injectable({ providedIn: 'root' })
export class PackageDetailService {

  private details: PackageDetail[] = [
    {
      id: 101,
      title: 'Bali Breeze — 4 Nights 5 Days',
      destination: 'Bali',
      nights: 4, days: 5,
      image: 'https://cdn.yourholiday.me/static/dynimg/destination/48/600x300/3996290-3996289_bali-4.jpg',
      price: 12387,
      flightFrom: 'Mumbai',
      flightIncluded: false,
      atAGlance: {
        intro: 'A perfect introduction to Bali — temples, rice terraces, water sports and sunsets',
        highlights: ['Ubud Village & Kintamani Volcano', 'Water Sports at Tanjung Benoa', 'Uluwatu Temple & Kecak Dance', 'Taman Ayun Temple', 'Sacred Monkey Forest', 'Tanah Lot Sunset']
      },
      hotel: {
        name: 'Hotel NEO+ Kuta, Legian by ASTON',
        stars: 3, address: 'Jl. Troppozone No. 8 Legian',
        rating: 8.2, ratingLabel: 'Very Good', ratingCount: 309,
        checkIn: '02:00 PM', checkOut: '12:00 PM',
        roomType: '1 x Superior Room (Breakfast)',
        meals: 'Meals Included - Breakfast',
        image: 'https://cdn.yourholiday.me/static/dynimg/destination/48/600x300/3996290-3996289_bali-4.jpg',
        knowAbout: ['Close to Kuta Beach — 10 min walk', 'Indian restaurants nearby', 'Rooftop pool with city views', 'Popular among Indian tourists', 'Free WiFi throughout']
      },
      itinerary: [
        { day: 1, title: 'Arrival in Bali', image: 'https://cdn.yourholiday.me/static/dynimg/destination/48/600x300/3996290-3996289_bali-4.jpg', description: 'Arrive at Ngurah Rai Airport. Transfer to hotel. Evening free.', activities: [{ title: 'Airport to Hotel Transfer', type: 'transfer' }, { title: 'Overnight at Hotel NEO+ Kuta', type: 'hotel' }], breakfast: 'Not Included', lunch: 'Not Included', dinner: 'Not Included', hotel: 'Hotel NEO+ Kuta' },
        { day: 2, title: 'Ubud & Kintamani Tour', image: 'https://cdn.yourholiday.me/static/dynimg/destination/48/600x300/3996290-3996289_bali-4.jpg', description: 'Visit Tegalalang Rice Terraces, Goa Gajah, Kintamani Volcano, Tirta Empul.', activities: [{ time: '07:30', title: 'Ubud Kintamani Full Day Tour', type: 'activity', duration: '10 hrs' }, { title: 'Overnight at Hotel NEO+ Kuta', type: 'hotel' }], breakfast: 'Included at Hotel', lunch: 'Not Included', dinner: 'Not Included', hotel: 'Hotel NEO+ Kuta' },
        { day: 3, title: 'Water Sports & Uluwatu', image: 'https://cdn.yourholiday.me/static/dynimg/destination/48/600x300/3996290-3996289_bali-4.jpg', description: 'Morning water sports at Tanjung Benoa. Evening Uluwatu Temple & Kecak Fire Dance.', activities: [{ time: '09:00', title: 'Water Sports — Parasailing, Jet Ski, Banana Boat', type: 'activity' }, { time: '17:00', title: 'Uluwatu Temple & Kecak Dance', type: 'activity' }, { title: 'Overnight at Hotel NEO+ Kuta', type: 'hotel' }], breakfast: 'Included at Hotel', lunch: 'Not Included', dinner: 'Not Included', hotel: 'Hotel NEO+ Kuta' },
        { day: 4, title: 'Taman Ayun, Monkey Forest & Tanah Lot', image: 'https://cdn.yourholiday.me/static/dynimg/destination/48/600x300/3996290-3996289_bali-4.jpg', description: 'Visit Taman Ayun Royal Temple, Sacred Monkey Forest in Ubud, and iconic Tanah Lot at sunset.', activities: [{ time: '09:00', title: 'Taman Ayun, Monkey Forest & Tanah Lot Tour', type: 'activity', duration: '8 hrs' }, { title: 'Overnight at Hotel NEO+ Kuta', type: 'hotel' }], breakfast: 'Included at Hotel', lunch: 'Not Included', dinner: 'Not Included', hotel: 'Hotel NEO+ Kuta' },
        { day: 5, title: 'Departure from Bali', image: 'https://cdn.yourholiday.me/static/dynimg/destination/48/600x300/3996290-3996289_bali-4.jpg', description: 'After breakfast, check out and transfer to airport.', activities: [{ title: 'Hotel to Airport Transfer', type: 'transfer' }], breakfast: 'Included at Hotel', lunch: 'Not Included', dinner: 'Not Included', hotel: '' }
      ],
      inclusions: ['4 Nights accommodation with breakfast', 'All private transfers', 'Ubud Kintamani Tour', 'Water Sports package', 'Uluwatu & Kecak Dance', 'Taman Ayun, Monkey Forest & Tanah Lot Tour', 'All taxes'],
      exclusions: ['International airfare', 'Visa on Arrival (~USD 35)', 'Lunch & Dinner', 'Personal expenses', 'Travel insurance'],
      terms: ['25% booking amount required', 'Full payment 30 days before departure', 'Cancellation: 30+ days 10%, 15-29 days 25%, 7-14 days 50%, <7 days 100%'],
      importantNotes: ['Visa on Arrival available for Indians at Bali airport — carry USD 35', 'Dress modestly at temples — sarong required', 'Water sports subject to weather conditions']
    },
    {
      id: 201,
      title: 'Dubai Highlights — 4 Nights 5 Days',
      destination: 'Dubai',
      nights: 4, days: 5,
      image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/98/600x300/2211579-2211578_dubai-pac1.jpg',
      price: 28536,
      badge: 'Bestseller',
      flightFrom: 'Mumbai',
      flightIncluded: false,
      atAGlance: {
        intro: 'Experience the dazzling city of Dubai — skyscrapers, deserts, and golden souks',
        highlights: ['Burj Khalifa At the Top Level 124', 'Dubai Mall & Fountain Show', 'Desert Safari with BBQ Dinner', 'Dubai Creek & Gold Souk', 'Dubai Frame', 'Dhow Cruise Dinner']
      },
      hotel: {
        name: 'Citymax Hotel Bur Dubai',
        stars: 3, address: 'Khalid Bin Al Waleed Road, Bur Dubai',
        rating: 7.8, ratingLabel: 'Good', ratingCount: 1240,
        checkIn: '02:00 PM', checkOut: '12:00 PM',
        roomType: '1 x Standard Room (Breakfast)',
        meals: 'Meals Included - Breakfast',
        image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/98/600x300/2211579-2211578_dubai-pac1.jpg',
        knowAbout: ['Centrally located in Bur Dubai', 'Indian restaurants nearby', 'Rooftop pool', 'Metro station 5 min walk', 'Popular among Indian tourists']
      },
      itinerary: [
        { day: 1, title: 'Arrival in Dubai', image: 'https://cdn.yourholiday.me/static/dynimg/destination/16/600x300/3598628-3598627_adobestock_47088158.jpg', description: 'Arrive at Dubai International Airport. Transfer to hotel. Evening explore Gold Souk.', activities: [{ title: 'Airport to Hotel Transfer', type: 'transfer' }, { title: 'Overnight at Citymax Hotel', type: 'hotel' }], breakfast: 'Not Included', lunch: 'Not Included', dinner: 'Not Included', hotel: 'Citymax Hotel Bur Dubai' },
        { day: 2, title: 'Dubai City Tour + Burj Khalifa', image: 'https://cdn.yourholiday.me/static/dynimg/destination/16/600x300/3598628-3598627_adobestock_47088158.jpg', description: 'City tour covering Jumeirah Mosque, Burj Al Arab, Palm Jumeirah. Afternoon Burj Khalifa Level 124. Evening Dubai Mall & Fountain Show.', activities: [{ time: '09:00', title: 'Dubai City Tour — Half Day', type: 'activity' }, { time: '15:00', title: 'Burj Khalifa + Dubai Mall + Fountain Show', type: 'activity' }, { title: 'Overnight at Citymax Hotel', type: 'hotel' }], breakfast: 'Included at Hotel', lunch: 'Not Included', dinner: 'Not Included', hotel: 'Citymax Hotel Bur Dubai' },
        { day: 3, title: 'Desert Safari with BBQ Dinner', image: 'https://cdn.yourholiday.me/static/dynimg/destination/16/600x300/3598628-3598627_adobestock_47088158.jpg', description: 'Afternoon Desert Safari — dune bashing, camel ride, sandboarding, belly dance, BBQ dinner.', activities: [{ time: '15:00', title: 'Desert Safari — Dune Bashing, Camel Ride, BBQ Dinner', type: 'activity', duration: '6 hrs' }, { title: 'Overnight at Citymax Hotel', type: 'hotel' }], breakfast: 'Included at Hotel', lunch: 'Not Included', dinner: 'Included', hotel: 'Citymax Hotel Bur Dubai' },
        { day: 4, title: 'Dubai Frame + Dhow Cruise', image: 'https://cdn.yourholiday.me/static/dynimg/destination/16/600x300/3598628-3598627_adobestock_47088158.jpg', description: 'Morning Dubai Frame. Evening Dhow Cruise Dinner on Dubai Creek.', activities: [{ time: '10:00', title: 'Dubai Frame Entry', type: 'activity' }, { time: '20:00', title: 'Dhow Cruise Dinner on Dubai Creek', type: 'activity' }, { title: 'Overnight at Citymax Hotel', type: 'hotel' }], breakfast: 'Included at Hotel', lunch: 'Not Included', dinner: 'Included', hotel: 'Citymax Hotel Bur Dubai' },
        { day: 5, title: 'Departure from Dubai', image: 'https://cdn.yourholiday.me/static/dynimg/destination/16/600x300/3598628-3598627_adobestock_47088158.jpg', description: 'After breakfast, check out and transfer to airport.', activities: [{ title: 'Hotel to Airport Transfer', type: 'transfer' }], breakfast: 'Included at Hotel', lunch: 'Not Included', dinner: 'Not Included', hotel: '' }
      ],
      inclusions: ['4 Nights accommodation with breakfast', 'All private transfers', 'Dubai City Tour', 'Burj Khalifa Level 124 entry', 'Desert Safari with BBQ dinner', 'Dubai Frame entry', 'Dhow Cruise Dinner', 'All taxes'],
      exclusions: ['International airfare', 'UAE Tourist Visa (~₹5,000)', 'Lunch & personal meals', 'Personal expenses', 'Travel insurance'],
      terms: ['25% booking amount required', 'Full payment 30 days before departure', 'Cancellation: 30+ days 10%, 15-29 days 25%, 7-14 days 50%, <7 days 100%'],
      importantNotes: ['UAE Visa NOT included — can be arranged by JK Tours', 'Dress modestly in public places', 'Burj Khalifa tickets must be booked in advance']
    },
    {
      id: 301,
      title: 'Bangkok Escape — 4 Nights 5 Days',
      destination: 'Thailand',
      nights: 4, days: 5,
      image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/45/600x300/2210729-2210728_thailand-p1.jpg',
      price: 22500,
      flightFrom: 'Mumbai',
      flightIncluded: false,
      atAGlance: {
        intro: 'Discover the vibrant capital of Thailand — temples, floating markets, and nightlife',
        highlights: ['Grand Palace & Wat Phra Kaew', 'Wat Arun (Temple of Dawn)', 'Damnoen Saduak Floating Market', 'Safari World & Marine Park', 'Chao Phraya River Cruise', 'Chatuchak Weekend Market']
      },
      hotel: {
        name: 'Ibis Bangkok Riverside',
        stars: 3, address: 'Charoen Nakhon Road, Bangkok',
        rating: 8.1, ratingLabel: 'Very Good', ratingCount: 1450,
        checkIn: '02:00 PM', checkOut: '12:00 PM',
        roomType: '1 x Superior Room (Breakfast)',
        meals: 'Meals Included - Breakfast',
        image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/45/600x300/2210729-2210728_thailand-p1.jpg',
        knowAbout: ['Riverside location with stunning Chao Phraya views', 'Indian food available nearby', 'Swimming pool', 'Free WiFi', 'Popular among Indian tourists']
      },
      itinerary: [
        { day: 1, title: 'Arrival in Bangkok', image: 'https://cdn.yourholiday.me/static/dynimg/destination/32/600x300/3076721-3076720_thailand2.jpg', description: 'Arrive at Suvarnabhumi Airport. Transfer to hotel. Evening free.', activities: [{ title: 'Airport to Hotel Transfer', type: 'transfer' }, { title: 'Overnight at Ibis Bangkok Riverside', type: 'hotel' }], breakfast: 'Not Included', lunch: 'Not Included', dinner: 'Not Included', hotel: 'Ibis Bangkok Riverside' },
        { day: 2, title: 'Bangkok City Tour — Grand Palace & Temples', image: 'https://cdn.yourholiday.me/static/dynimg/destination/32/600x300/3076721-3076720_thailand2.jpg', description: 'Visit Grand Palace, Wat Phra Kaew, Wat Pho, and Wat Arun by boat.', activities: [{ time: '08:30', title: 'Bangkok City Tour — Grand Palace, Wat Pho, Wat Arun', type: 'activity', duration: '8 hrs' }, { title: 'Overnight at Ibis Bangkok Riverside', type: 'hotel' }], breakfast: 'Included at Hotel', lunch: 'Not Included', dinner: 'Not Included', hotel: 'Ibis Bangkok Riverside' },
        { day: 3, title: 'Floating Market + Safari World', image: 'https://cdn.yourholiday.me/static/dynimg/destination/32/600x300/3076721-3076720_thailand2.jpg', description: 'Morning Damnoen Saduak Floating Market. Afternoon Safari World & Marine Park.', activities: [{ time: '07:00', title: 'Damnoen Saduak Floating Market', type: 'activity' }, { time: '13:00', title: 'Safari World & Marine Park', type: 'activity' }, { title: 'Overnight at Ibis Bangkok Riverside', type: 'hotel' }], breakfast: 'Included at Hotel', lunch: 'Not Included', dinner: 'Not Included', hotel: 'Ibis Bangkok Riverside' },
        { day: 4, title: 'Chao Phraya Dinner Cruise + Shopping', image: 'https://cdn.yourholiday.me/static/dynimg/destination/32/600x300/3076721-3076720_thailand2.jpg', description: 'Day free for shopping at Chatuchak Market or MBK. Evening Chao Phraya Dinner Cruise.', activities: [{ time: '20:00', title: 'Chao Phraya Dinner Cruise', type: 'activity', duration: '2 hrs' }, { title: 'Overnight at Ibis Bangkok Riverside', type: 'hotel' }], breakfast: 'Included at Hotel', lunch: 'Not Included', dinner: 'Included', hotel: 'Ibis Bangkok Riverside' },
        { day: 5, title: 'Departure from Bangkok', image: 'https://cdn.yourholiday.me/static/dynimg/destination/32/600x300/3076721-3076720_thailand2.jpg', description: 'After breakfast, check out and transfer to airport.', activities: [{ title: 'Hotel to Airport Transfer', type: 'transfer' }], breakfast: 'Included at Hotel', lunch: 'Not Included', dinner: 'Not Included', hotel: '' }
      ],
      inclusions: ['4 Nights accommodation with breakfast', 'All private transfers', 'Bangkok City Tour', 'Floating Market Tour', 'Safari World entry', 'Chao Phraya Dinner Cruise', 'All taxes'],
      exclusions: ['International airfare', 'Thailand e-Visa', 'Lunch & personal meals', 'Personal expenses', 'Travel insurance'],
      terms: ['25% booking amount required', 'Full payment 30 days before departure', 'Cancellation: 30+ days 10%, 15-29 days 25%, 7-14 days 50%, <7 days 100%'],
      importantNotes: ['Thailand e-Visa available online for Indians', 'Dress modestly at temples', 'Floating market best visited early morning']
    },
    {
      id: 401,
      title: 'City Highlights — 4 Nights 5 Days',
      destination: 'Singapore',
      nights: 4, days: 5,
      image: 'https://cdn.yourholiday.me/static/dynimg/destination/58/600x300/3996296-3996295_singapore-stock-image.jpg',
      price: 32500,
      flightFrom: 'Mumbai',
      flightIncluded: false,
      atAGlance: {
        intro: 'Explore the Lion City — a perfect blend of modernity, culture, and nature',
        highlights: ['Gardens by the Bay & Supertree Grove', 'Marina Bay Sands SkyPark', 'Sentosa Island', 'Universal Studios Singapore', 'Merlion Park', 'Chinatown & Little India']
      },
      hotel: {
        name: 'Hotel Boss Singapore',
        stars: 3, address: 'Lavender Street, Singapore',
        rating: 8.0, ratingLabel: 'Very Good', ratingCount: 520,
        checkIn: '02:00 PM', checkOut: '12:00 PM',
        roomType: '1 x Superior Room (Breakfast)',
        meals: 'Meals Included - Breakfast',
        image: 'https://cdn.yourholiday.me/static/dynimg/destination/58/600x300/3996296-3996295_singapore-stock-image.jpg',
        knowAbout: ['Near Lavender MRT station', 'Rooftop pool', 'Indian food available nearby', 'Free WiFi', 'Popular among Indian tourists']
      },
      itinerary: [
        { day: 1, title: 'Arrival in Singapore', image: 'https://cdn.yourholiday.me/static/dynimg/destination/58/600x300/3996296-3996295_singapore-stock-image.jpg', description: 'Arrive at Changi Airport. Transfer to hotel. Evening explore Orchard Road.', activities: [{ title: 'Airport to Hotel Transfer', type: 'transfer' }, { title: 'Overnight at Hotel Boss Singapore', type: 'hotel' }], breakfast: 'Not Included', lunch: 'Not Included', dinner: 'Not Included', hotel: 'Hotel Boss Singapore' },
        { day: 2, title: 'Singapore City Tour + Gardens by the Bay', image: 'https://cdn.yourholiday.me/static/dynimg/destination/58/600x300/3996296-3996295_singapore-stock-image.jpg', description: 'City tour — Merlion Park, Marina Bay Sands, Chinatown, Little India. Evening Gardens by the Bay light show.', activities: [{ time: '09:00', title: 'Singapore City Tour + Gardens by the Bay', type: 'activity', duration: '8 hrs' }, { title: 'Overnight at Hotel Boss Singapore', type: 'hotel' }], breakfast: 'Included at Hotel', lunch: 'Not Included', dinner: 'Not Included', hotel: 'Hotel Boss Singapore' },
        { day: 3, title: 'Sentosa Island + Universal Studios', image: 'https://cdn.yourholiday.me/static/dynimg/destination/58/600x300/3996296-3996295_singapore-stock-image.jpg', description: 'Full day at Sentosa Island. Universal Studios Singapore with thrilling rides and shows.', activities: [{ time: '09:00', title: 'Sentosa Island + Universal Studios Singapore', type: 'activity', duration: 'Full Day' }, { title: 'Overnight at Hotel Boss Singapore', type: 'hotel' }], breakfast: 'Included at Hotel', lunch: 'Not Included', dinner: 'Not Included', hotel: 'Hotel Boss Singapore' },
        { day: 4, title: 'Night Safari + Singapore Flyer', image: 'https://cdn.yourholiday.me/static/dynimg/destination/58/600x300/3996296-3996295_singapore-stock-image.jpg', description: 'Day free for shopping at Orchard Road. Evening Singapore Flyer observation wheel. Night Safari at Singapore Zoo.', activities: [{ time: '18:00', title: 'Singapore Flyer + Night Safari', type: 'activity', duration: '4 hrs' }, { title: 'Overnight at Hotel Boss Singapore', type: 'hotel' }], breakfast: 'Included at Hotel', lunch: 'Not Included', dinner: 'Not Included', hotel: 'Hotel Boss Singapore' },
        { day: 5, title: 'Departure from Singapore', image: 'https://cdn.yourholiday.me/static/dynimg/destination/58/600x300/3996296-3996295_singapore-stock-image.jpg', description: 'After breakfast, check out and transfer to Changi Airport.', activities: [{ title: 'Hotel to Airport Transfer', type: 'transfer' }], breakfast: 'Included at Hotel', lunch: 'Not Included', dinner: 'Not Included', hotel: '' }
      ],
      inclusions: ['4 Nights accommodation with breakfast', 'All private transfers', 'Singapore City Tour', 'Gardens by the Bay entry', 'Universal Studios Singapore entry', 'Singapore Flyer entry', 'Night Safari entry', 'All taxes'],
      exclusions: ['International airfare', 'Singapore Tourist Visa (if applicable)', 'Lunch & personal meals', 'Personal expenses', 'Travel insurance'],
      terms: ['25% booking amount required', 'Full payment 30 days before departure', 'Cancellation: 30+ days 10%, 15-29 days 25%, 7-14 days 50%, <7 days 100%'],
      importantNotes: ['Singapore is visa-free for Indian passport holders for up to 30 days', 'Universal Studios tickets included — meal vouchers not included', 'Gardens by the Bay Flower Dome & Cloud Forest entry included']
    }
  ];

  getByPackageId(id: number): PackageDetail | undefined {
    return this.details.find(d => d.id === id);
  }

  getByTitle(title: string): PackageDetail | undefined {
    return this.details.find(d =>
      d.title.toLowerCase().includes(title.toLowerCase()) ||
      title.toLowerCase().includes(d.destination.toLowerCase())
    );
  }

  getByDestination(dest: string): PackageDetail[] {
    return this.details.filter(d => d.destination.toLowerCase() === dest.toLowerCase());
  }

  getAll(): PackageDetail[] {
    return this.details;
  }
}
