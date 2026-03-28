import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

interface ExperienceData {
  name: string;
  tagline: string;
  heroImage: string;
  description: string;
  highlights: string[];
  features: { icon: string; title: string; desc: string }[];
}

@Component({
  selector: 'app-category-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category-page.component.html',
  styleUrl: './category-page.component.scss'
})
export class CategoryPageComponent implements OnInit {
  exp: ExperienceData | null = null;
  notFound = false;

  private experiences: Record<string, ExperienceData> = {
    'beach': {
      name: 'Beach Holidays',
      tagline: 'Sun, sand & endless horizons',
      heroImage: 'https://cdn.yourholiday.me/static/dynimg/itinerary/72/600x450/2185294-2185293_pexels-photo-1450353.jpg',
      description: 'Escape to the world\'s most breathtaking beaches. From the turquoise lagoons of the Maldives to the golden shores of Goa and the exotic beaches of Bali — we craft the perfect beach holiday tailored just for you.',
      highlights: ['Maldives overwater villas', 'Bali beach resorts', 'Goa beach shacks & water sports', 'Andaman coral reefs', 'Phuket island hopping', 'Seychelles private beaches'],
      features: [
        { icon: 'fas fa-umbrella-beach', title: 'Private Beach Access', desc: 'Exclusive beach resorts with private access and stunning ocean views.' },
        { icon: 'fas fa-water', title: 'Water Sports', desc: 'Snorkeling, scuba diving, parasailing, jet skiing and more.' },
        { icon: 'fas fa-ship', title: 'Island Hopping', desc: 'Explore multiple islands on curated boat tours and cruises.' },
        { icon: 'fas fa-fish', title: 'Marine Life', desc: 'Discover vibrant coral reefs and exotic marine ecosystems.' }
      ]
    },
    'family': {
      name: 'Family Holidays',
      tagline: 'Creating memories that last a lifetime',
      heroImage: 'https://cdn.yourholiday.me/static/dynimg/itinerary/23/600x450/2185310-2185309_pexels-photo-4205505.jpg',
      description: 'Family travel is our specialty. We design holidays that delight every age — from thrilling theme parks for kids to cultural experiences for adults. Safe, comfortable and unforgettable family adventures await.',
      highlights: ['Universal Studios Singapore', 'Dubai theme parks', 'Bali family resorts', 'Kerala houseboat', 'Rajasthan heritage tours', 'Himachal snow adventures'],
      features: [
        { icon: 'fas fa-child', title: 'Kid-Friendly Activities', desc: 'Theme parks, wildlife safaris and interactive cultural experiences.' },
        { icon: 'fas fa-hotel', title: 'Family Resorts', desc: 'Spacious family rooms and suites with dedicated kids\' facilities.' },
        { icon: 'fas fa-shield-alt', title: 'Safe & Secure', desc: 'Vetted accommodations and licensed guides for complete peace of mind.' },
        { icon: 'fas fa-utensils', title: 'All-Inclusive Meals', desc: 'Curated menus with options for all dietary preferences.' }
      ]
    },
    'luxury': {
      name: 'Luxury Travel',
      tagline: 'Where every detail is perfection',
      heroImage: 'https://cdn.yourholiday.me/static/dynimg/itinerary/99/600x450/2185274-2185273_pexels-photo-279574.jpg',
      description: 'Indulge in the finest travel experiences the world has to offer. Private villas, Michelin-starred dining, exclusive yacht charters and bespoke itineraries — luxury travel redefined by JK Tours & Travels.',
      highlights: ['Maldives water villas', 'Dubai 5-star hotels', 'Swiss luxury trains', 'Private yacht charters', 'Exclusive spa retreats', 'VIP airport transfers'],
      features: [
        { icon: 'fas fa-gem', title: '5-Star Accommodations', desc: 'Handpicked luxury hotels, private villas and overwater bungalows.' },
        { icon: 'fas fa-concierge-bell', title: 'Personal Concierge', desc: '24/7 dedicated concierge service throughout your journey.' },
        { icon: 'fas fa-plane', title: 'Business Class Flights', desc: 'Premium cabin upgrades and private jet options available.' },
        { icon: 'fas fa-spa', title: 'Wellness & Spa', desc: 'World-class spa treatments and wellness retreats included.' }
      ]
    },
    'culture-and-heritage': {
      name: 'Culture & Heritage',
      tagline: 'Discover the soul of civilizations',
      heroImage: 'https://cdn.yourholiday.me/static/dynimg/itinerary/37/600x450/2185258-2185257_pexels-photo-209741.jpg',
      description: 'Immerse yourself in the rich tapestry of world cultures. From the ancient forts of Rajasthan to the temples of Kyoto, the ruins of Rome to the monasteries of Ladakh — every journey is a lesson in history.',
      highlights: ['Rajasthan forts & palaces', 'Rome & Vatican City', 'Kyoto temples', 'Ladakh monasteries', 'Angkor Wat Cambodia', 'Istanbul Grand Bazaar'],
      features: [
        { icon: 'fas fa-landmark', title: 'UNESCO Heritage Sites', desc: 'Guided tours of the world\'s most significant cultural landmarks.' },
        { icon: 'fas fa-book', title: 'Expert Historians', desc: 'Knowledgeable local guides who bring history to life.' },
        { icon: 'fas fa-palette', title: 'Art & Architecture', desc: 'Explore museums, galleries and architectural marvels.' },
        { icon: 'fas fa-drum', title: 'Cultural Shows', desc: 'Kathakali, Kecak fire dance, Rajasthani folk performances and more.' }
      ]
    },
    'all-inclusive-holidays': {
      name: 'All Inclusive Holidays',
      tagline: 'Everything included — zero worries',
      heroImage: 'https://cdn.yourholiday.me/static/dynimg/itinerary/62/600x450/2186114-2186113_pexels-photo-3184183.jpg',
      description: 'The ultimate stress-free holiday experience. Flights, hotels, meals, transfers, sightseeing — everything is taken care of. Just pack your bags and enjoy every moment without worrying about a single detail.',
      highlights: ['Flights included', 'Hotel stays covered', 'All meals provided', 'Airport transfers', 'Guided sightseeing', 'Travel insurance'],
      features: [
        { icon: 'fas fa-plane', title: 'Return Flights', desc: 'Return flights from Mumbai/Delhi included in all packages.' },
        { icon: 'fas fa-hotel', title: 'Hotel Stays', desc: 'Premium hotel accommodations throughout your journey.' },
        { icon: 'fas fa-utensils', title: 'All Meals', desc: 'Breakfast, lunch and dinner included at quality restaurants.' },
        { icon: 'fas fa-bus', title: 'All Transfers', desc: 'Airport, hotel and sightseeing transfers fully covered.' }
      ]
    },
    'cultral-safaris': {
      name: 'Cultural Safaris',
      tagline: 'Wild encounters & tribal traditions',
      heroImage: 'https://cdn.yourholiday.me/static/dynimg/itinerary/86/600x450/2186480-2186479_kenya-6.jpg',
      description: 'Experience the raw beauty of wildlife and the richness of tribal cultures. From tiger safaris in Ranthambore to elephant encounters in Chiang Mai — these are journeys that connect you with nature and humanity.',
      highlights: ['Ranthambore tiger safari', 'Jim Corbett National Park', 'Chiang Mai elephant sanctuary', 'Wayanad wildlife', 'Kaziranga rhino safari', 'Sundarbans mangroves'],
      features: [
        { icon: 'fas fa-paw', title: 'Wildlife Safaris', desc: 'Expert naturalist-guided jeep safaris in national parks.' },
        { icon: 'fas fa-leaf', title: 'Eco-Tourism', desc: 'Responsible travel that supports local conservation efforts.' },
        { icon: 'fas fa-camera', title: 'Photography Tours', desc: 'Dedicated wildlife photography sessions at golden hours.' },
        { icon: 'fas fa-users', title: 'Tribal Experiences', desc: 'Authentic interactions with indigenous communities.' }
      ]
    },
    'honeymoon': {
      name: 'Honeymoon Packages',
      tagline: 'Begin your forever in paradise',
      heroImage: 'https://cdn.yourholiday.me/static/dynimg/destination/54/1200x900/2188294-2188293_.jpg',
      description: 'Your love story deserves the most magical backdrop. From candlelit dinners on Maldivian beaches to gondola rides in Venice, from Bali\'s romantic rice terraces to Kashmir\'s shikara rides on Dal Lake — we make your honeymoon unforgettable.',
      highlights: ['Maldives water villas', 'Bali romantic resorts', 'Kashmir houseboat', 'Paris city of love', 'Santorini Greece', 'Coorg coffee estates'],
      features: [
        { icon: 'fas fa-heart', title: 'Romantic Setups', desc: 'Flower decorations, candle light dinners and couple spa sessions.' },
        { icon: 'fas fa-ring', title: 'Honeymoon Specials', desc: 'Exclusive honeymoon packages with complimentary surprises.' },
        { icon: 'fas fa-camera', title: 'Couple Photoshoots', desc: 'Professional photography sessions at scenic locations.' },
        { icon: 'fas fa-bed', title: 'Luxury Suites', desc: 'Premium couple suites with ocean views and private pools.' }
      ]
    },
    'experiences': {
      name: 'Unique Experiences',
      tagline: 'Beyond ordinary — extraordinary adventures',
      heroImage: 'https://cdn.yourholiday.me/static/dynimg/itinerary/45/1200x900/3192010-3192009_aaron-sebastian-bfgeyps0znk-unsplash.jpg',
      description: 'Travel is not just about places — it\'s about experiences that transform you. Hot air balloon rides over Cappadocia, bungee jumping in Rishikesh, stargazing in Ladakh, cooking classes in Thailand — we curate moments that become stories.',
      highlights: ['Hot air balloon Cappadocia', 'Bungee jumping Rishikesh', 'Stargazing Ladakh', 'Cooking class Thailand', 'Paragliding Bir Billing', 'Scuba diving Andamans'],
      features: [
        { icon: 'fas fa-parachute-box', title: 'Adventure Sports', desc: 'Skydiving, bungee jumping, paragliding and white water rafting.' },
        { icon: 'fas fa-star', title: 'Once-in-a-Lifetime', desc: 'Curated bucket-list experiences you\'ll treasure forever.' },
        { icon: 'fas fa-mountain', title: 'Trekking & Hiking', desc: 'Guided treks through Himalayas, Alps and tropical rainforests.' },
        { icon: 'fas fa-utensils', title: 'Culinary Tours', desc: 'Street food walks, cooking classes and farm-to-table experiences.' }
      ]
    }
  };

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    const name = this.route.snapshot.paramMap.get('name')?.toLowerCase().replace(/\s+/g, '-') ?? '';
    this.exp = this.experiences[name] ?? null;
    if (!this.exp) this.notFound = true;
  }

  goHome() { this.router.navigate(['/']); }
}
