import { Injectable } from '@angular/core';

export interface Destination { id: number; name: string; image: string; }
export interface Package { id: number; title: string; image: string; itinerary: string; price: number; category: string; badge?: string; }
export interface Experience { icon: string; label: string; }
export interface Testimonial { name: string; location: string; text: string; }

export interface ItineraryDay { day: number; title: string; description: string; }
export interface DestPackage {
  id: number;
  name: string;
  duration: string;
  nights: number;
  price: number;
  badge?: string;
  image: string;
  highlights: string[];
  itinerary: ItineraryDay[];
  groupSize: string;
  transport: string;
  accommodation: string;
}
export interface DestinationPageData {
  name: string;
  tagline: string;
  heroImage: string;
  packages: DestPackage[];
}

@Injectable({ providedIn: 'root' })
export class DataService {

  companyName = 'J K Tours And Travels, Pune';
  logo = 'https://cdn.yourholiday.me/static/dynimg/partner/37/300x150/3562268-3562267_j-k-new-logo.jpg';
  heroImage = 'https://cdn.yourholiday.me/static/dynimg/itinerary/85/1200x900/2191615-2191614_adobestock_223056954.jpg';
  customizeImage = 'https://cdn.yourholiday.me/static/dynimg/itinerary/99/1200x900/3191480-3191479_azin-javadzadeh-wmpyrpas7dq-unsplash.jpg';

  typewriterWords = [
    'Dubai starting Rs. 39,999',
    'Thailand starting Rs. 19,999',
    'Singapore starting Rs. 44,999',
    'Europe starting Rs. 1,19,999',
    'Australia starting Rs. 1,29,999',
    'Goa starting Rs. 9,999',
    'Kerala starting Rs. 14,999'
  ];

  destinations: Destination[] = [
    { id: 1,  name: 'Andamans',    image: 'https://cdn.yourholiday.me/static/dynimg/destination/33/600x300/2210456-2210455_andaman.jpg' },
    { id: 2,  name: 'Australia',   image: 'https://cdn.yourholiday.me/static/dynimg/destination/58/600x300/2210344-2210343_australia.jpg' },
    { id: 3,  name: 'Bali',        image: 'https://cdn.yourholiday.me/static/dynimg/destination/48/600x300/3996290-3996289_bali-4.jpg' },
    { id: 4,  name: 'Cambodia',    image: 'https://cdn.yourholiday.me/static/dynimg/destination/60/600x300/3160621-3160620_cambodia.jpg' },
    { id: 5,  name: 'Dubai',       image: 'https://cdn.yourholiday.me/static/dynimg/destination/16/600x300/3598628-3598627_adobestock_47088158.jpg' },
    { id: 6,  name: 'Europe',      image: 'https://cdn.yourholiday.me/static/dynimg/destination/21/600x300/2190173-2190172_europe-1-main-image.jpg' },
    { id: 7,  name: 'Georgia',     image: 'https://cdn.yourholiday.me/static/dynimg/destination/7/600x300/2185866-2185865_georgia-main-image.jpg' },
    { id: 8,  name: 'Greece',      image: 'https://cdn.yourholiday.me/static/dynimg/destination/5/600x300/2750959-2750958_greece.jpg' },
    { id: 9,  name: 'Italy',       image: 'https://cdn.yourholiday.me/static/dynimg/destination/79/600x300/2750961-2750960_italy.jpg' },
    { id: 10, name: 'Japan',       image: 'https://cdn.yourholiday.me/static/dynimg/destination/64/600x300/2750318-2750317_japan.jpg' },
    { id: 11, name: 'Kazakhstan',  image: 'https://cdn.yourholiday.me/static/dynimg/destination/58/600x300/2750322-2750321_kazakhstan.jpg' },
    { id: 12, name: 'Malaysia',    image: 'https://cdn.yourholiday.me/static/dynimg/destination/64/600x300/3160627-3160626_tourist-places-in-malaysia.jpg' },
    { id: 13, name: 'Maldives',    image: 'https://cdn.yourholiday.me/static/dynimg/destination/98/600x300/2750963-2750962_maldives.jpg' },
    { id: 14, name: 'Mauritius',   image: 'https://cdn.yourholiday.me/static/dynimg/destination/70/600x300/2210601-2210600_mauritius.jpg' },
    { id: 15, name: 'New Zealand', image: 'https://cdn.yourholiday.me/static/dynimg/destination/48/600x300/2190141-2190140_rock-formations-on-wharariki-beach-new-zealand--1.jpg' },
    { id: 16, name: 'Portugal',    image: 'https://cdn.yourholiday.me/static/dynimg/destination/20/600x300/2750340-2750339_portugal.jpg' },
    { id: 17, name: 'Russia',      image: 'https://cdn.yourholiday.me/static/dynimg/destination/89/600x300/2750969-2750968_russia.jpg' },
    { id: 18, name: 'Seychelles',  image: 'https://cdn.yourholiday.me/static/dynimg/destination/3/600x300/2750342-2750341_seychelles.jpg' },
    { id: 19, name: 'Singapore',   image: 'https://cdn.yourholiday.me/static/dynimg/destination/58/600x300/3996296-3996295_singapore-stock-image.jpg' },
    { id: 20, name: 'Spain',       image: 'https://cdn.yourholiday.me/static/dynimg/destination/56/600x300/2750344-2750343_spain.jpg' },
    { id: 21, name: 'Sri Lanka',   image: 'https://cdn.yourholiday.me/static/dynimg/destination/93/600x300/2210565-2210564_srilanka.jpg' },
    { id: 22, name: 'Switzerland', image: 'https://cdn.yourholiday.me/static/dynimg/destination/74/600x300/2190187-2190186_zurich-switzerland-view-of-the-historic-city-center-with-famous-fraumunster-church-5.jpg' },
    { id: 23, name: 'Thailand',    image: 'https://cdn.yourholiday.me/static/dynimg/destination/32/600x300/3076721-3076720_thailand2.jpg' },
    { id: 24, name: 'Turkey',      image: 'https://cdn.yourholiday.me/static/dynimg/destination/45/600x300/2750974-2750973_turkey.jpg' },
    { id: 25, name: 'Vietnam',     image: 'https://cdn.yourholiday.me/static/dynimg/destination/35/600x300/3078047-3078046_vietnam.jpg' }
  ];

  // Europe Summer 2024 Fixed Departure — exact prices from live site
  europePackages: Package[] = [
    { id: 1, title: 'Grand Tour of Europe with All Meals',
      image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/55/600x300/2998781-2998780_london-tourism-title.jpg',
      itinerary: 'London 3N, Paris 3N, Rotterdam 1N, ...', price: 404583, category: 'Europe', badge: 'Fixed Departure' },
    { id: 2, title: 'Wonders of Europe',
      image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/38/600x300/2990875-2990874_swiss.jpg',
      itinerary: 'Paris 3N, Rotterdam 1N, Cologne 1N, ...', price: 322573, category: 'Europe' },
    { id: 3, title: 'Glimpses of Europe',
      image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/43/600x300/2993319-2993318_europe.jpg',
      itinerary: 'Paris 3N, Eindhoven 1N, Cologne 1N, ...', price: 229628, category: 'Europe' },
    { id: 4, title: 'UK and Scotland (Summer 2024)',
      image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/15/600x300/2995351-2995350_uk_tourism.jpg',
      itinerary: 'London 2N, Birmingham 1N, Glasgow 3N, ...', price: 316471, category: 'Europe' }
  ];

  // Andaman Fixed Departure — exact prices from live site
  andamanPackages: Package[] = [
    { id: 5, title: 'Andaman Island Delight With Flight',
      image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/16/600x300/3032141-3032140_hero-anadaman-19-1-min.jpg',
      itinerary: 'Port Blair 1N, Havelock-Island 2N, ...', price: 28264, category: 'Andaman', badge: 'Fixed Departure' },
    { id: 6, title: 'Island Escape With Complimentary Photoshoot',
      image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/16/600x300/3032082-3032081_hero-anadaman-21-min.jpg',
      itinerary: 'Port Blair 1N, Havelock-Island 2N, ...', price: 16836, category: 'Andaman' },
    { id: 7, title: 'Andaman Honeymoon Escapes',
      image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/7/600x300/3177247-3177246_honeymoon.jpg',
      itinerary: 'Port Blair 1N, Havelock-Island 2N, ...', price: 25509, category: 'Andaman' },
    { id: 8, title: 'Best of Andaman',
      image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/56/600x300/3115245-3115244_andaman-oickture.jpg',
      itinerary: 'Port Blair 1N, Havelock-Island 2N, ...', price: 27755, category: 'Andaman' }
  ];

  // Recommended Domestic Experiences — exact prices from live site
  domesticPackages: Package[] = [
    { id: 9,  title: 'Stunning Kerala - Budget',
      image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/14/600x300/2228853-2228852_kerala-1.jpg',
      itinerary: 'Munnar 2N, Thekkady 1N, Kumarakom 1N, ...', price: 16562, category: 'Domestic' },
    { id: 10, title: 'Luxury in South India',
      image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/28/600x300/2210839-2210838_hampi.jpg',
      itinerary: 'Bangalore 2N, Mysore 2N, Ooty 2N, ...', price: 104322, category: 'Domestic' },
    { id: 11, title: 'MAGICAL ANDAMAN',
      image: 'https://cdn.yourholiday.me/static/dynimg/destination/48/600x300/2086330-2086329_portblair.jpg',
      itinerary: 'Port Blair 2N, Havelock-Island 1N, ...', price: 18515, category: 'Domestic' },
    { id: 12, title: 'EXOTIC ANDAMAN',
      image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/71/600x300/2228849-2228848_andaman-3.jpg',
      itinerary: 'Port Blair 1N, Havelock-Island 2N, ...', price: 18314, category: 'Domestic' },
    { id: 13, title: "Classic Kerala: God's own Country",
      image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/17/600x300/2182118-2182117_classic-kerala-gods-own-country.jpg',
      itinerary: 'Kochi 2N, Munnar 2N, Thekkady 1N, ...', price: 58111, category: 'Domestic' },
    { id: 14, title: 'Goa 4 Nights 3 Star',
      image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/76/600x300/2210775-2210774_goa-pack1.jpg',
      itinerary: 'Goa 4N', price: 10272, category: 'Domestic' },
    { id: 15, title: 'Magnificent Tour to Himachal',
      image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/11/600x300/2228921-2228920_hp-3.jpg',
      itinerary: 'Shimla 2N, Manali 3N, Dharamshala 1N, ...', price: 21115, category: 'Domestic' },
    { id: 16, title: 'Amazing Himachal with Chandigarh',
      image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/21/600x300/2228887-2228886_manali-1.jpg',
      itinerary: 'Shimla 2N, Manali 3N, Dharamshala 1N, ...', price: 27257, category: 'Domestic' }
  ];

  // Bali Packages — from jktourstravels.in (20 packages)
  baliPackages: Package[] = [
    { id: 101, title: 'Bali Basic for First Timers',
      image: 'https://cdn.yourholiday.me/static/dynimg/destination/48/600x300/3996290-3996289_bali-4.jpg',
      itinerary: 'Ubud Kintamani, Water Sports, Uluwatu Kecak, Taman Ayun Temple, Monkey Forest, Tanah Lot',
      price: 12387, category: 'Bali', badge: 'Bestseller' },
    { id: 102, title: 'Beautiful Bali',
      image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/21/600x300/2210757-2210756_sin-pack-1.jpg',
      itinerary: 'Ubud, Kintamani, Goa Gajah, Water Sports, Uluwatu Kecak, Taman Ayun, Monkey Forest, Tanah Lot, Ulun Danu Temple, Git Git Waterfalls',
      price: 15917, category: 'Bali', badge: 'Bestseller' },
    { id: 103, title: 'Romantic Bali',
      image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/99/600x300/3191480-3191479_azin-javadzadeh-wmpyrpas7dq-unsplash.jpg',
      itinerary: 'Ubud, Water Sports, Uluwatu Kecak, Bali Swing, Tanah Lot, Rice Terraces, Balinese Spa',
      price: 27169, category: 'Bali', badge: 'Bestseller' },
    { id: 104, title: 'Glimpses of Bali',
      image: 'https://cdn.yourholiday.me/static/dynimg/destination/48/600x300/3996290-3996289_bali-4.jpg',
      itinerary: 'Bali Safari Park, Water Sports, Uluwatu Kecak, Taman Ayun Temple, Monkey Forest, Tanah Lot, Ulun Danu Temple, Rice Terraces',
      price: 40695, category: 'Bali', badge: 'Bestseller' },
    { id: 105, title: 'Relaxed Bali for Couples',
      image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/7/600x300/3177247-3177246_honeymoon.jpg',
      itinerary: 'Water Sports, Uluwatu Kecak, Tukad Cepung Falls, Rice Terraces, Tanah Lot',
      price: 23323, category: 'Bali', badge: 'Honeymoon Special' },
    { id: 106, title: 'Scenic Bali for Honeymooners',
      image: 'https://cdn.yourholiday.me/static/dynimg/destination/48/600x300/3996290-3996289_bali-4.jpg',
      itinerary: 'Candle Light Dinner, Water Sports, Uluwatu Kecak, Tegenungan Falls, Rice Terraces, Gates of Heaven, Ulun Danu Temple, Taman Ayun',
      price: 26278, category: 'Bali', badge: 'Honeymoon Special' },
    { id: 107, title: 'Bali Honeymoon Delight',
      image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/7/600x300/3177247-3177246_honeymoon.jpg',
      itinerary: 'Seminyak, Ubud, Kintamani, Water Sports, Uluwatu Kecak, Bali Swing, Tanah Lot, Candle Light Dinner',
      price: 29450, category: 'Bali', badge: 'Honeymoon Special' },
    { id: 108, title: 'Bali with Nusa Penida',
      image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/21/600x300/2210757-2210756_sin-pack-1.jpg',
      itinerary: 'Nusa Penida, Kelingking Beach, Angel Billabong, Broken Beach, Water Sports, Uluwatu Kecak, Tanah Lot',
      price: 32500, category: 'Bali' },
    { id: 109, title: 'Bali Adventure Package',
      image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/99/600x300/3191480-3191479_azin-javadzadeh-wmpyrpas7dq-unsplash.jpg',
      itinerary: 'White Water Rafting, ATV Ride, Water Sports, Ubud Monkey Forest, Kintamani Volcano, Uluwatu Kecak',
      price: 18750, category: 'Bali' },
    { id: 110, title: 'Bali Family Fun',
      image: 'https://cdn.yourholiday.me/static/dynimg/destination/48/600x300/3996290-3996289_bali-4.jpg',
      itinerary: 'Bali Safari Park, Waterbom Park, Ubud, Kintamani, Tanah Lot, Taman Ayun Temple',
      price: 21800, category: 'Bali' },
    { id: 111, title: 'Best of Bali',
      image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/21/600x300/2210757-2210756_sin-pack-1.jpg',
      itinerary: 'Ubud, Kintamani, Goa Gajah, Tirta Empul, Water Sports, Uluwatu Kecak, Tanah Lot, Ulun Danu Temple, Git Git Waterfalls, Rice Terraces',
      price: 35200, category: 'Bali' },
    { id: 112, title: 'Bali Luxury Escape',
      image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/99/600x300/3191480-3191479_azin-javadzadeh-wmpyrpas7dq-unsplash.jpg',
      itinerary: 'Private Villa, Seminyak, Ubud, Bali Swing, Candle Light Dinner, Spa, Water Sports, Uluwatu Kecak, Tanah Lot',
      price: 55000, category: 'Bali', badge: 'Luxury' },
    { id: 113, title: 'Bali Budget Getaway',
      image: 'https://cdn.yourholiday.me/static/dynimg/destination/48/600x300/3996290-3996289_bali-4.jpg',
      itinerary: 'Kuta Beach, Seminyak, Water Sports, Uluwatu Kecak, Tanah Lot',
      price: 9999, category: 'Bali', badge: 'Budget' },
    { id: 114, title: 'Bali with Lombok',
      image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/21/600x300/2210757-2210756_sin-pack-1.jpg',
      itinerary: 'Bali 4N, Lombok 3N, Gili Islands, Senggigi Beach, Ubud, Water Sports, Uluwatu Kecak',
      price: 42000, category: 'Bali' },
    { id: 115, title: 'Bali Cultural Tour',
      image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/99/600x300/3191480-3191479_azin-javadzadeh-wmpyrpas7dq-unsplash.jpg',
      itinerary: 'Ubud Royal Palace, Goa Gajah, Tirta Empul, Besakih Temple, Kintamani, Taman Ayun, Tanah Lot',
      price: 19500, category: 'Bali' },
    { id: 116, title: 'Bali Wellness Retreat',
      image: 'https://cdn.yourholiday.me/static/dynimg/destination/48/600x300/3996290-3996289_bali-4.jpg',
      itinerary: 'Ubud Yoga, Balinese Spa, Rice Terraces, Tirta Empul, Bali Swing, Tanah Lot, Seminyak Sunset',
      price: 33800, category: 'Bali' },
    { id: 117, title: 'Grand Bali Experience',
      image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/21/600x300/2210757-2210756_sin-pack-1.jpg',
      itinerary: 'Ubud, Kintamani, Nusa Penida, Bali Safari, Water Sports, Uluwatu Kecak, Bali Swing, Tanah Lot, Ulun Danu Temple, Rice Terraces, Git Git Waterfalls',
      price: 48900, category: 'Bali' },
    { id: 118, title: 'Bali Highlights with Seminyak',
      image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/99/600x300/3191480-3191479_azin-javadzadeh-wmpyrpas7dq-unsplash.jpg',
      itinerary: 'Seminyak, Ubud, Kintamani, Water Sports, Uluwatu Kecak, Tanah Lot, Taman Ayun, Monkey Forest',
      price: 22600, category: 'Bali' },
    { id: 119, title: 'Bali Bliss - Extended',
      image: 'https://cdn.yourholiday.me/static/dynimg/destination/48/600x300/3996290-3996289_bali-4.jpg',
      itinerary: 'Ubud, Kintamani, Goa Gajah, Nusa Penida, Kelingking Beach, Water Sports, Uluwatu Kecak, Bali Swing, Tanah Lot, Ulun Danu Temple, Rice Terraces, Git Git Waterfalls',
      price: 38500, category: 'Bali' },
    { id: 120, title: 'Bali Splendour',
      image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/21/600x300/2210757-2210756_sin-pack-1.jpg',
      itinerary: 'Seminyak, Ubud, Bali Swing, Kintamani, Tirta Empul, Water Sports, Uluwatu Kecak, Tanah Lot, Taman Ayun, Monkey Forest, Ulun Danu Temple',
      price: 31200, category: 'Bali' }
  ];

  // Thailand Packages — from jktourstravels.in
  thailandPackages: Package[] = [
    { id: 301, title: 'Classic Thailand',
      image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/45/600x300/2210729-2210728_thailand-p1.jpg',
      itinerary: 'Bangkok City Tour, Grand Palace, Wat Pho, Floating Market, Pattaya, Coral Island, Nong Nooch Village',
      price: 28500, category: 'Thailand', badge: 'Bestseller' },
    { id: 302, title: 'Highlights of Thailand',
      image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/2/600x300/2210731-2210730_thailand-p2.jpg',
      itinerary: 'Bangkok, Grand Palace, Wat Arun, Chiang Mai, Doi Inthanon, Elephant Sanctuary, Phuket, Phi Phi Islands',
      price: 42000, category: 'Thailand', badge: 'Bestseller' },
    { id: 303, title: 'Thailand Budget Getaway',
      image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/45/600x300/2210729-2210728_thailand-p1.jpg',
      itinerary: 'Bangkok City Tour, Wat Pho, Chatuchak Market, Pattaya, Coral Island, Walking Street',
      price: 18999, category: 'Thailand', badge: 'Budget' },
    { id: 304, title: 'Thailand Honeymoon Special',
      image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/7/600x300/3177247-3177246_honeymoon.jpg',
      itinerary: 'Bangkok, Chao Phraya Dinner Cruise, Phuket, Phi Phi Islands, James Bond Island, Krabi, Railay Beach',
      price: 52000, category: 'Thailand', badge: 'Honeymoon Special' },
    { id: 305, title: 'Romantic Thailand for Couples',
      image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/2/600x300/2210731-2210730_thailand-p2.jpg',
      itinerary: 'Bangkok, Floating Market, Phuket, Sunset Cruise, Phi Phi Islands, Krabi, Four Islands Tour',
      price: 45800, category: 'Thailand', badge: 'Honeymoon Special' },
    { id: 306, title: 'Thailand Family Package',
      image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/45/600x300/2210729-2210728_thailand-p1.jpg',
      itinerary: 'Bangkok, Safari World, Dream World, Pattaya, Nong Nooch Village, Coral Island, Elephant Show',
      price: 38500, category: 'Thailand' },
    { id: 307, title: 'Best of Thailand',
      image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/2/600x300/2210731-2210730_thailand-p2.jpg',
      itinerary: 'Bangkok, Grand Palace, Wat Pho, Floating Market, Chiang Mai, Elephant Sanctuary, Doi Suthep, Phuket, Phi Phi Islands, Big Buddha',
      price: 55000, category: 'Thailand' },
    { id: 308, title: 'Thailand Adventure Tour',
      image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/45/600x300/2210729-2210728_thailand-p1.jpg',
      itinerary: 'Bangkok, ATV Ride, Zip Line, White Water Rafting, Chiang Mai, Trekking, Elephant Ride, Phuket, Scuba Diving',
      price: 48000, category: 'Thailand' },
    { id: 309, title: 'Phuket & Krabi Special',
      image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/2/600x300/2210731-2210730_thailand-p2.jpg',
      itinerary: 'Phuket, Phi Phi Islands, James Bond Island, Krabi, Railay Beach, Four Islands Tour, Tiger Cave Temple',
      price: 32000, category: 'Thailand' },
    { id: 310, title: 'Thailand with Chiang Mai',
      image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/45/600x300/2210729-2210728_thailand-p1.jpg',
      itinerary: 'Bangkok, Grand Palace, Chiang Mai, Elephant Sanctuary, Doi Inthanon, Night Bazaar, Doi Suthep Temple',
      price: 36500, category: 'Thailand' },
    { id: 311, title: 'Thailand Luxury Escape',
      image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/2/600x300/2210731-2210730_thailand-p2.jpg',
      itinerary: 'Bangkok, Mandarin Oriental Stay, Private Floating Market, Phuket, Private Yacht, Phi Phi Islands, Luxury Spa',
      price: 95000, category: 'Thailand', badge: 'Luxury' },
    { id: 312, title: 'Grand Thailand Experience',
      image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/45/600x300/2210729-2210728_thailand-p1.jpg',
      itinerary: 'Bangkok, Grand Palace, Floating Market, Chiang Mai, Elephant Sanctuary, Phuket, Phi Phi Islands, Krabi, Railay Beach, Koh Samui',
      price: 72000, category: 'Thailand' },
    { id: 313, title: 'Bangkok & Pattaya Tour',
      image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/2/600x300/2210731-2210730_thailand-p2.jpg',
      itinerary: 'Bangkok City Tour, Grand Palace, Wat Pho, Pattaya, Coral Island, Nong Nooch Village, Walking Street',
      price: 22500, category: 'Thailand' },
    { id: 314, title: 'Thailand with Koh Samui',
      image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/45/600x300/2210729-2210728_thailand-p1.jpg',
      itinerary: 'Bangkok, Phuket, Phi Phi Islands, Koh Samui, Ang Thong Marine Park, Chaweng Beach',
      price: 58000, category: 'Thailand' },
    { id: 315, title: 'Thailand Island Hopping',
      image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/2/600x300/2210731-2210730_thailand-p2.jpg',
      itinerary: 'Phuket, Phi Phi Islands, Koh Lanta, Krabi, Railay Beach, Koh Ngai, Snorkeling, Kayaking',
      price: 44000, category: 'Thailand' }
  ];

  // Singapore Packages — from jktourstravels.in
  singaporePackages: Package[] = [
    { id: 401, title: 'Singapore on a Budget',
      image: 'https://cdn.yourholiday.me/static/dynimg/destination/58/600x300/3996296-3996295_singapore-stock-image.jpg',
      itinerary: 'Gardens by the Bay, Marina Bay Sands, Merlion Park, Sentosa Island, Universal Studios, Chinatown',
      price: 32500, category: 'Singapore', badge: 'Bestseller' },
    { id: 402, title: 'Ultimate Singapore Experience',
      image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/76/600x300/2211669-2211668_singapore-4.jpg',
      itinerary: 'Gardens by the Bay, Marina Bay Sands, Universal Studios, Sentosa, S.E.A. Aquarium, Night Safari, Singapore Zoo, Jurong Bird Park',
      price: 61516, category: 'Singapore', badge: 'Bestseller' },
    { id: 403, title: 'Singapore Highlights',
      image: 'https://cdn.yourholiday.me/static/dynimg/destination/58/600x300/3996296-3996295_singapore-stock-image.jpg',
      itinerary: 'Merlion Park, Marina Bay Sands, Gardens by the Bay, Sentosa Island, Universal Studios, Little India, Chinatown',
      price: 42000, category: 'Singapore', badge: 'Bestseller' },
    { id: 404, title: 'Singapore Honeymoon Special',
      image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/7/600x300/3177247-3177246_honeymoon.jpg',
      itinerary: 'Marina Bay Sands, Gardens by the Bay, Sentosa, Cable Car Ride, Candlelight Dinner, Universal Studios, Singapore Flyer',
      price: 55000, category: 'Singapore', badge: 'Honeymoon Special' },
    { id: 405, title: 'Romantic Singapore for Couples',
      image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/76/600x300/2211669-2211668_singapore-4.jpg',
      itinerary: 'Marina Bay Sands, Gardens by the Bay, Sentosa, Cable Car, Dinner Cruise, Universal Studios, Singapore Flyer',
      price: 48500, category: 'Singapore', badge: 'Honeymoon Special' },
    { id: 406, title: 'Singapore Family Fun',
      image: 'https://cdn.yourholiday.me/static/dynimg/destination/58/600x300/3996296-3996295_singapore-stock-image.jpg',
      itinerary: 'Universal Studios, S.E.A. Aquarium, Singapore Zoo, Night Safari, Gardens by the Bay, Sentosa, Jurong Bird Park',
      price: 65000, category: 'Singapore' },
    { id: 407, title: 'Singapore with Malaysia',
      image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/20/600x300/2211659-2211658_sing-pac-1.jpg',
      itinerary: 'Singapore, Gardens by the Bay, Universal Studios, Kuala Lumpur, Petronas Towers, Batu Caves, Genting Highlands',
      price: 75531, category: 'Singapore' },
    { id: 408, title: 'Best of Singapore',
      image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/76/600x300/2211669-2211668_singapore-4.jpg',
      itinerary: 'Merlion Park, Marina Bay Sands, Gardens by the Bay, Universal Studios, Night Safari, Singapore Zoo, Sentosa, Chinatown, Little India',
      price: 58000, category: 'Singapore' },
    { id: 409, title: 'Singapore Luxury Escape',
      image: 'https://cdn.yourholiday.me/static/dynimg/destination/58/600x300/3996296-3996295_singapore-stock-image.jpg',
      itinerary: 'Marina Bay Sands Stay, Gardens by the Bay, Private City Tour, Universal Studios, Sentosa, Yacht Dinner Cruise, Singapore Flyer',
      price: 95000, category: 'Singapore', badge: 'Luxury' },
    { id: 410, title: 'Singapore & Bali Combo',
      image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/21/600x300/2210757-2210756_sin-pack-1.jpg',
      itinerary: 'Singapore, Gardens by the Bay, Universal Studios, Bali, Ubud, Kintamani, Water Sports, Uluwatu Kecak, Tanah Lot',
      price: 47854, category: 'Singapore' },
    { id: 411, title: 'Grand Singapore Experience',
      image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/76/600x300/2211669-2211668_singapore-4.jpg',
      itinerary: 'Marina Bay Sands, Gardens by the Bay, Universal Studios, Night Safari, Singapore Zoo, Jurong Bird Park, S.E.A. Aquarium, Sentosa, Singapore Flyer, Chinatown',
      price: 82000, category: 'Singapore' },
    { id: 412, title: 'Singapore City Explorer',
      image: 'https://cdn.yourholiday.me/static/dynimg/destination/58/600x300/3996296-3996295_singapore-stock-image.jpg',
      itinerary: 'Merlion Park, Marina Bay Sands, Chinatown, Little India, Arab Street, Gardens by the Bay, Singapore Flyer, Orchard Road',
      price: 28000, category: 'Singapore', badge: 'Budget' }
  ];

  // Dubai Packages — from jktourstravels.in
  dubaiPackages: Package[] = [
    { id: 201, title: 'Dubai on a Budget',
      image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/98/600x300/2211579-2211578_dubai-pac1.jpg',
      itinerary: 'Dubai City Tour, Burj Khalifa, Dubai Mall, Desert Safari, Dhow Cruise',
      price: 28536, category: 'Dubai', badge: 'Bestseller' },
    { id: 202, title: 'Trip to Dubai',
      image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/59/600x300/2211591-2211590_dubai-pac-4.jpg',
      itinerary: 'Burj Khalifa, Dubai Mall, Desert Safari, Palm Jumeirah, Dhow Cruise, Abu Dhabi City Tour',
      price: 40397, category: 'Dubai', badge: 'Bestseller' },
    { id: 203, title: 'Dubai Highlights',
      image: 'https://cdn.yourholiday.me/static/dynimg/destination/16/600x300/3598628-3598627_adobestock_47088158.jpg',
      itinerary: 'Burj Khalifa, Dubai Frame, Dubai Museum, Gold Souk, Spice Souk, Desert Safari, Dhow Cruise',
      price: 32500, category: 'Dubai', badge: 'Bestseller' },
    { id: 204, title: 'Dubai Honeymoon Special',
      image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/7/600x300/3177247-3177246_honeymoon.jpg',
      itinerary: 'Burj Khalifa, Dubai Mall, Desert Safari with Dinner, Dhow Cruise Dinner, Palm Jumeirah, Atlantis Aquaventure',
      price: 45800, category: 'Dubai', badge: 'Honeymoon Special' },
    { id: 205, title: 'Romantic Dubai for Couples',
      image: 'https://cdn.yourholiday.me/static/dynimg/destination/16/600x300/3598628-3598627_adobestock_47088158.jpg',
      itinerary: 'Burj Al Arab, Burj Khalifa, Desert Safari, Dhow Cruise Dinner, Palm Jumeirah, Dubai Frame',
      price: 52000, category: 'Dubai', badge: 'Honeymoon Special' },
    { id: 206, title: 'Dubai with Abu Dhabi',
      image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/98/600x300/2211579-2211578_dubai-pac1.jpg',
      itinerary: 'Dubai City Tour, Burj Khalifa, Desert Safari, Abu Dhabi City Tour, Sheikh Zayed Grand Mosque, Ferrari World',
      price: 38900, category: 'Dubai' },
    { id: 207, title: 'Dubai Family Package',
      image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/59/600x300/2211591-2211590_dubai-pac-4.jpg',
      itinerary: 'Dubai Mall, Burj Khalifa, Dubai Frame, Atlantis Aquaventure, Desert Safari, Global Village, IMG Worlds of Adventure',
      price: 55000, category: 'Dubai' },
    { id: 208, title: 'Dubai Luxury Escape',
      image: 'https://cdn.yourholiday.me/static/dynimg/destination/16/600x300/3598628-3598627_adobestock_47088158.jpg',
      itinerary: 'Burj Al Arab Stay, Burj Khalifa At the Top, Private Desert Safari, Yacht Cruise, Palm Jumeirah, Dubai Opera',
      price: 95000, category: 'Dubai', badge: 'Luxury' },
    { id: 209, title: 'Dubai Adventure Tour',
      image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/98/600x300/2211579-2211578_dubai-pac1.jpg',
      itinerary: 'Skydiving, Dune Bashing, Quad Biking, Zip Line, Water Sports, Burj Khalifa, Dubai Frame',
      price: 48500, category: 'Dubai' },
    { id: 210, title: 'Dubai Shopping Festival Tour',
      image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/59/600x300/2211591-2211590_dubai-pac-4.jpg',
      itinerary: 'Dubai Mall, Mall of the Emirates, Gold Souk, Spice Souk, City Walk, Burj Khalifa, Desert Safari',
      price: 35200, category: 'Dubai' },
    { id: 211, title: 'Dubai with Muscat',
      image: 'https://cdn.yourholiday.me/static/dynimg/destination/16/600x300/3598628-3598627_adobestock_47088158.jpg',
      itinerary: 'Dubai City Tour, Burj Khalifa, Desert Safari, Muscat City Tour, Sultan Qaboos Grand Mosque, Mutrah Souq',
      price: 42000, category: 'Dubai' },
    { id: 212, title: 'Best of Dubai',
      image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/98/600x300/2211579-2211578_dubai-pac1.jpg',
      itinerary: 'Burj Khalifa, Dubai Frame, Dubai Museum, Palm Jumeirah, Desert Safari, Dhow Cruise, Abu Dhabi, Sheikh Zayed Mosque',
      price: 44900, category: 'Dubai' },
    { id: 213, title: 'Dubai Budget Getaway',
      image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/59/600x300/2211591-2211590_dubai-pac-4.jpg',
      itinerary: 'Dubai City Tour, Gold Souk, Spice Souk, Desert Safari, Dhow Cruise',
      price: 22500, category: 'Dubai', badge: 'Budget' },
    { id: 214, title: 'Grand Dubai Experience',
      image: 'https://cdn.yourholiday.me/static/dynimg/destination/16/600x300/3598628-3598627_adobestock_47088158.jpg',
      itinerary: 'Burj Khalifa, Dubai Mall, Desert Safari, Palm Jumeirah, Dhow Cruise, Abu Dhabi, Ferrari World, Global Village, Dubai Frame',
      price: 62000, category: 'Dubai' },
    { id: 215, title: 'Dubai with Maldives',
      image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/98/600x300/2211579-2211578_dubai-pac1.jpg',
      itinerary: 'Dubai 3N, Maldives 4N, Burj Khalifa, Desert Safari, Water Villa Stay, Snorkeling, Sunset Cruise',
      price: 85000, category: 'Dubai', badge: 'Luxury' }
  ];

  // Recommended International Experiences — exact prices from live site
  internationalPackages: Package[] = [
    { id: 17, title: 'Classic Thailand',
      image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/45/600x300/2210729-2210728_thailand-p1.jpg',
      itinerary: 'Bangkok 3N, Chiang Mai 4N, Phuket 4N, ...', price: 66071, category: 'International' },
    { id: 18, title: 'Romantic Singapore and Bali',
      image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/21/600x300/2210757-2210756_sin-pack-1.jpg',
      itinerary: 'Singapore 3N, Bali 2N, Bali 2N', price: 47854, category: 'International' },
    { id: 19, title: 'Fully Loaded Singapore Malaysia',
      image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/20/600x300/2211659-2211658_sing-pac-1.jpg',
      itinerary: 'Singapore 4N, Kuala Lumpur 3N', price: 75531, category: 'International' },
    { id: 20, title: 'Ultimate Singapore Experience',
      image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/76/600x300/2211669-2211668_singapore-4.jpg',
      itinerary: 'Singapore 5N', price: 61516, category: 'International' },
    { id: 21, title: 'Fabulous Hong Kong Macau',
      image: 'https://cdn.yourholiday.me/static/dynimg/destination/51/600x300/2082244-2082243_venetian.jpg',
      itinerary: 'Macau 2N, Hong Kong 3N', price: 54295, category: 'International' },
    { id: 22, title: 'Highlights of Thailand',
      image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/2/600x300/2210731-2210730_thailand-p2.jpg',
      itinerary: 'Bangkok 2N, Chiang Mai 3N, Koh Samui ...', price: 87987, category: 'International' },
    { id: 23, title: 'Dubai on a Budget',
      image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/98/600x300/2211579-2211578_dubai-pac1.jpg',
      itinerary: 'Dubai 4N', price: 28536, category: 'International' },
    { id: 24, title: 'Trip to Dubai',
      image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/59/600x300/2211591-2211590_dubai-pac-4.jpg',
      itinerary: 'Dubai 5N', price: 40397, category: 'International' }
  ];

  // Experiences — exact from live site
  experiences: Experience[] = [
    { icon: 'fas fa-umbrella-beach', label: 'Beach' },
    { icon: 'fas fa-users',          label: 'Family' },
    { icon: 'fas fa-gem',            label: 'Luxury' },
    { icon: 'fas fa-landmark',       label: 'Culture and Heritage' },
    { icon: 'fas fa-infinity',       label: 'All Inclusive Holidays' },
    { icon: 'fas fa-paw',            label: 'Cultral Safaris' },
    { icon: 'fas fa-heart',          label: 'Honeymoon' },
    { icon: 'fas fa-star',           label: 'Experiences' }
  ];

  // Testimonials — exact text from live site
  testimonials: Testimonial[] = [
    {
      name: 'Anthony', location: 'Goa',
      text: 'No words! Thanks for making my dream come true. But I want to say, Sabse pyaara Hindustan'
    },
    {
      name: 'Sagar', location: 'Belgaum',
      text: 'Never could I have imagined the wonderful experiences that awaited me before we began our trip. It was a wonderful experience overall'
    },
    {
      name: 'Ramya John', location: 'Rajasthan',
      text: 'Thank you so much for a well-organized trip. We had a wonderful time. The weather was awesome, the hotels were nice, thank you for everything!'
    },
    {
      name: 'Priya Sharma', location: 'Pune',
      text: 'J K Tours made our Europe trip absolutely magical. Every detail was perfectly planned — from hotels to sightseeing. Highly recommend to everyone!'
    },
    {
      name: 'Rahul Mehta', location: 'Mumbai',
      text: 'Booked Dubai package for our family. The team was very professional and helpful throughout. Best travel agency in Pune without a doubt!'
    }
  ];

  // Mega menu experiences — exact from live site
  megaExperiences = [
    { label: 'Beach',                image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/72/600x450/2185294-2185293_pexels-photo-1450353.jpg' },
    { label: 'Family',               image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/23/600x450/2185310-2185309_pexels-photo-4205505.jpg' },
    { label: 'Luxury',               image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/99/600x450/2185274-2185273_pexels-photo-279574.jpg' },
    { label: 'Culture and Heritage', image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/37/600x450/2185258-2185257_pexels-photo-209741.jpg' },
    { label: 'All Inclusive',        image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/62/600x450/2186114-2186113_pexels-photo-3184183.jpg' },
    { label: 'Cultral Safaris',      image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/86/600x450/2186480-2186479_kenya-6.jpg' },
    { label: 'Honeymoon',            image: 'https://cdn.yourholiday.me/static/dynimg/destination/54/1200x900/2188294-2188293_.jpg' },
    { label: 'Experiences',          image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/45/1200x900/3192010-3192009_aaron-sebastian-bfgeyps0znk-unsplash.jpg' }
  ];

  // Footer experiences — exact from live site
  footerExperiences = [
    'Beach', 'Family', 'Luxury', 'Culture and Heritage',
    'All Inclusive Holidays', 'Cultral Safaris', 'Honeymoon',
    'All Inclusive', 'All Inclusive', 'Luxury', 'Beach', 'Family', 'Experiences'
  ];

  // ============================================================
  // DOMESTIC DESTINATION PAGES
  // ============================================================
  domesticDestinationPages: Record<string, DestinationPageData> = {

    'andamans': {
      name: 'Andaman & Nicobar Islands',
      tagline: 'Where the sea meets paradise',
      heroImage: 'https://cdn.yourholiday.me/static/dynimg/destination/33/600x300/2210456-2210455_andaman.jpg',
      packages: [
        {
          id: 1, nights: 4, duration: '4N/5D', price: 18500, badge: 'Bestseller',
          name: 'Andaman Escape',
          image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/16/600x300/3032141-3032140_hero-anadaman-19-1-min.jpg',
          highlights: [
            'Return flights from Mumbai/Delhi included',
            'Port Blair city tour & Cellular Jail light show',
            'Havelock Island — Radhanagar Beach (Asia\'s Best)',
            'Glass-bottom boat ride & snorkeling',
            'All transfers & daily breakfast included'
          ],
          groupSize: '2 – 20 People', transport: 'Flight + Ferry', accommodation: '3★ Hotels',
          itinerary: [
            { day: 1, title: 'Arrival – Port Blair', description: 'Arrive at Veer Savarkar Airport. Check-in to hotel. Evening visit to Cellular Jail & Sound & Light Show.' },
            { day: 2, title: 'Port Blair Sightseeing', description: 'Corbyn\'s Cove Beach, Samudrika Naval Museum, Anthropological Museum & Chatham Saw Mill.' },
            { day: 3, title: 'Havelock Island', description: 'Ferry to Havelock. Check-in & visit Radhanagar Beach (Asia\'s Best Beach). Sunset at leisure.' },
            { day: 4, title: 'Water Sports & Neil Island', description: 'Snorkeling, glass-bottom boat ride. Optional scuba diving. Return to Port Blair by evening ferry.' },
            { day: 5, title: 'Departure', description: 'Breakfast at hotel. Check-out & transfer to airport. Tour ends with beautiful memories.' }
          ]
        },
        {
          id: 2, nights: 5, duration: '5N/6D', price: 24500, badge: 'Popular',
          name: 'Island Bliss',
          image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/16/600x300/3032082-3032081_hero-anadaman-21-min.jpg',
          highlights: [
            'Return flights from Mumbai/Delhi included',
            'Havelock + Neil Island coverage',
            'Scuba diving & snorkeling sessions',
            'Radhanagar Beach & Laxmanpur Beach',
            'All transfers, ferry tickets & daily breakfast'
          ],
          groupSize: '2 – 20 People', transport: 'Flight + Ferry', accommodation: '3★ / 4★ Hotels',
          itinerary: [
            { day: 1, title: 'Arrival – Port Blair', description: 'Arrive & check-in. Evening Cellular Jail Sound & Light Show.' },
            { day: 2, title: 'Port Blair City Tour', description: 'Corbyn\'s Cove, Samudrika Museum, Chatham Saw Mill & Ross Island.' },
            { day: 3, title: 'Havelock Island', description: 'Ferry to Havelock. Radhanagar Beach visit. Leisure evening.' },
            { day: 4, title: 'Water Sports Day', description: 'Scuba diving, snorkeling & glass-bottom boat ride at Elephant Beach.' },
            { day: 5, title: 'Neil Island', description: 'Ferry to Neil Island. Laxmanpur Beach, Natural Bridge & Bharatpur Beach.' },
            { day: 6, title: 'Departure', description: 'Return ferry to Port Blair. Transfer to airport. Tour ends.' }
          ]
        },
        {
          id: 3, nights: 6, duration: '6N/7D', price: 31000,
          name: 'Andaman Explorer',
          image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/56/600x300/3115245-3115244_andaman-oickture.jpg',
          highlights: [
            'Complete Andaman circuit — Port Blair, Havelock, Neil',
            'Baratang Island — Limestone Caves & Mud Volcano',
            'Sea-walk & certified scuba diving',
            'Jolly Buoy Island snorkeling (seasonal)',
            'All meals, transfers & ferry tickets included'
          ],
          groupSize: '2 – 15 People', transport: 'Flight + Ferry', accommodation: '4★ Hotels',
          itinerary: [
            { day: 1, title: 'Arrival – Port Blair', description: 'Airport pickup. Check-in. Cellular Jail evening show.' },
            { day: 2, title: 'Baratang Island', description: 'Early morning drive through Jarawa Reserve. Limestone caves & mud volcano visit.' },
            { day: 3, title: 'Port Blair Sightseeing', description: 'Ross Island, North Bay Island, Corbyn\'s Cove & Samudrika Museum.' },
            { day: 4, title: 'Havelock Island', description: 'Ferry to Havelock. Radhanagar Beach. Leisure evening.' },
            { day: 5, title: 'Elephant Beach & Water Sports', description: 'Snorkeling, sea-walk & scuba diving at Elephant Beach.' },
            { day: 6, title: 'Neil Island', description: 'Laxmanpur Beach, Natural Bridge & Bharatpur Beach.' },
            { day: 7, title: 'Departure', description: 'Return to Port Blair. Transfer to airport. Tour ends.' }
          ]
        },
        {
          id: 4, nights: 7, duration: '7N/8D', price: 38500, badge: 'Premium',
          name: 'Grand Andaman',
          image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/7/600x300/3177247-3177246_honeymoon.jpg',
          highlights: [
            'Full Andaman experience — all major islands',
            'Luxury resort stay at Havelock',
            'Private snorkeling & scuba diving sessions',
            'Jolly Buoy & Cinque Island day trips',
            'All meals, transfers, ferry & flight tickets'
          ],
          groupSize: '2 – 12 People', transport: 'Flight + Ferry', accommodation: '4★ / 5★ Resorts',
          itinerary: [
            { day: 1, title: 'Arrival – Port Blair', description: 'Airport pickup. Luxury check-in. Cellular Jail evening show.' },
            { day: 2, title: 'Baratang Island', description: 'Limestone caves, mud volcano & mangrove creek boat ride.' },
            { day: 3, title: 'Port Blair & Ross Island', description: 'Ross Island, North Bay, Corbyn\'s Cove & Samudrika Museum.' },
            { day: 4, title: 'Jolly Buoy Island', description: 'Snorkeling at Jolly Buoy coral reef (seasonal). Mahatma Gandhi Marine National Park.' },
            { day: 5, title: 'Havelock Island', description: 'Ferry to Havelock. Luxury resort check-in. Radhanagar Beach sunset.' },
            { day: 6, title: 'Elephant Beach & Scuba', description: 'Private scuba diving & snorkeling. Bioluminescent beach walk at night.' },
            { day: 7, title: 'Neil Island', description: 'Laxmanpur, Natural Bridge & Bharatpur Beach. Return to Port Blair.' },
            { day: 8, title: 'Departure', description: 'Breakfast. Check-out. Transfer to airport. Tour ends with beautiful memories.' }
          ]
        }
      ]
    },

    'goa': {
      name: 'Goa',
      tagline: 'Sun, sand & endless vibes',
      heroImage: 'https://cdn.yourholiday.me/static/dynimg/itinerary/76/600x300/2210775-2210774_goa-pack1.jpg',
      packages: [
        {
          id: 5, nights: 4, duration: '4N/5D', price: 10272, badge: 'Bestseller',
          name: 'Goa Getaway',
          image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/76/600x300/2210775-2210774_goa-pack1.jpg',
          highlights: [
            'North Goa beaches — Baga, Calangute, Anjuna',
            'Old Goa churches — UNESCO World Heritage',
            'Dudhsagar Waterfall day trip',
            'Spice plantation visit with lunch',
            'All transfers & daily breakfast included'
          ],
          groupSize: '2 – 20 People', transport: 'Flight / Train + Cab', accommodation: '3★ Hotels',
          itinerary: [
            { day: 1, title: 'Arrival – Goa', description: 'Arrive at Goa Airport/Station. Check-in to hotel. Evening at Baga Beach. Welcome dinner.' },
            { day: 2, title: 'North Goa Sightseeing', description: 'Calangute, Baga, Anjuna & Vagator beaches. Fort Aguada. Chapora Fort sunset.' },
            { day: 3, title: 'Old Goa & Spice Plantation', description: 'Basilica of Bom Jesus, Se Cathedral, Spice Plantation lunch & Mandovi River cruise.' },
            { day: 4, title: 'Dudhsagar Waterfall', description: 'Full-day jeep safari to Dudhsagar Falls. Swim in natural pool. Return by evening.' },
            { day: 5, title: 'Departure', description: 'Breakfast at hotel. Check-out & transfer to airport/station. Tour ends.' }
          ]
        },
        {
          id: 6, nights: 5, duration: '5N/6D', price: 14500, badge: 'Popular',
          name: 'Goa Bliss',
          image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/76/600x300/2210775-2210774_goa-pack1.jpg',
          highlights: [
            'North & South Goa complete coverage',
            'Water sports — parasailing, jet ski, banana boat',
            'Dudhsagar Waterfall & spice plantation',
            'Sunset cruise on Mandovi River',
            'All transfers & daily breakfast included'
          ],
          groupSize: '2 – 20 People', transport: 'Flight / Train + Cab', accommodation: '3★ / 4★ Hotels',
          itinerary: [
            { day: 1, title: 'Arrival – Goa', description: 'Arrive & check-in. Evening at Baga Beach. Welcome dinner.' },
            { day: 2, title: 'North Goa Beaches & Water Sports', description: 'Calangute, Baga, Anjuna. Water sports — parasailing, jet ski, banana boat ride.' },
            { day: 3, title: 'Old Goa & Mandovi Cruise', description: 'Basilica of Bom Jesus, Se Cathedral. Evening Mandovi River sunset cruise.' },
            { day: 4, title: 'South Goa', description: 'Colva, Benaulim & Palolem beaches. Cabo de Rama Fort. Leisurely afternoon.' },
            { day: 5, title: 'Dudhsagar & Spice Plantation', description: 'Jeep safari to Dudhsagar Falls. Spice plantation lunch. Evening at leisure.' },
            { day: 6, title: 'Departure', description: 'Breakfast. Check-out & transfer. Tour ends.' }
          ]
        },
        {
          id: 7, nights: 6, duration: '6N/7D', price: 19800,
          name: 'Goa Explorer',
          image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/76/600x300/2210775-2210774_goa-pack1.jpg',
          highlights: [
            'Complete North + South Goa circuit',
            'Scuba diving & snorkeling at Grande Island',
            'Dudhsagar Waterfall jeep safari',
            'Casino night & Tito\'s Lane nightlife',
            'All meals, transfers & sightseeing included'
          ],
          groupSize: '2 – 15 People', transport: 'Flight / Train + Cab', accommodation: '4★ Hotels',
          itinerary: [
            { day: 1, title: 'Arrival – Goa', description: 'Arrive & check-in. Evening at Baga Beach. Welcome dinner.' },
            { day: 2, title: 'North Goa Beaches', description: 'Calangute, Baga, Anjuna, Vagator. Fort Aguada & Chapora Fort.' },
            { day: 3, title: 'Water Sports & Grande Island', description: 'Scuba diving & snorkeling at Grande Island. Parasailing & jet ski.' },
            { day: 4, title: 'Old Goa & Mandovi Cruise', description: 'UNESCO churches. Spice plantation lunch. Sunset Mandovi cruise.' },
            { day: 5, title: 'South Goa', description: 'Colva, Benaulim, Palolem. Cabo de Rama Fort. Evening casino.' },
            { day: 6, title: 'Dudhsagar Waterfall', description: 'Full-day jeep safari. Swim in natural pool. Tito\'s Lane evening.' },
            { day: 7, title: 'Departure', description: 'Breakfast. Check-out & transfer. Tour ends.' }
          ]
        },
        {
          id: 8, nights: 7, duration: '7N/8D', price: 26500, badge: 'Premium',
          name: 'Grand Goa',
          image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/76/600x300/2210775-2210774_goa-pack1.jpg',
          highlights: [
            'Luxury beach resort stay',
            'Complete Goa — North, South & hidden gems',
            'Private yacht sunset cruise',
            'Scuba diving, parasailing & all water sports',
            'All meals, transfers & exclusive experiences'
          ],
          groupSize: '2 – 10 People', transport: 'Flight + Private Cab', accommodation: '4★ / 5★ Resorts',
          itinerary: [
            { day: 1, title: 'Arrival – Goa', description: 'Luxury resort check-in. Welcome drink. Evening at Baga Beach.' },
            { day: 2, title: 'North Goa Beaches', description: 'Calangute, Baga, Anjuna, Vagator. Fort Aguada & Chapora Fort.' },
            { day: 3, title: 'Grande Island & Scuba', description: 'Private scuba diving & snorkeling at Grande Island. Parasailing.' },
            { day: 4, title: 'Old Goa & Spice Plantation', description: 'UNESCO churches. Spice plantation lunch. Private Mandovi yacht cruise.' },
            { day: 5, title: 'South Goa', description: 'Colva, Benaulim, Palolem. Cabo de Rama Fort. Sunset at Butterfly Beach.' },
            { day: 6, title: 'Dudhsagar & Leisure', description: 'Jeep safari to Dudhsagar Falls. Afternoon spa. Casino evening.' },
            { day: 7, title: 'Leisure & Shopping', description: 'Anjuna Flea Market. Souvenir shopping. Farewell dinner at beach shack.' },
            { day: 8, title: 'Departure', description: 'Breakfast. Check-out & transfer. Tour ends with beautiful memories.' }
          ]
        }
      ]
    },

    'kerala': {
      name: 'Kerala',
      tagline: "God's Own Country — backwaters, hills & beaches",
      heroImage: 'https://cdn.yourholiday.me/static/dynimg/itinerary/14/600x300/2228853-2228852_kerala-1.jpg',
      packages: [
        {
          id: 9, nights: 4, duration: '4N/5D', price: 16562, badge: 'Bestseller',
          name: 'Kerala Escape',
          image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/14/600x300/2228853-2228852_kerala-1.jpg',
          highlights: [
            'Munnar tea gardens & Eravikulam National Park',
            'Thekkady — Periyar Wildlife Sanctuary boat ride',
            'Alleppey houseboat stay on backwaters',
            'Kochi Fort Kochi heritage walk',
            'All transfers & daily breakfast included'
          ],
          groupSize: '2 – 20 People', transport: 'Flight / Train + Cab', accommodation: '3★ Hotels + Houseboat',
          itinerary: [
            { day: 1, title: 'Arrival – Kochi', description: 'Arrive at Cochin Airport. Check-in. Evening Fort Kochi walk — Chinese Fishing Nets, Dutch Palace & Jew Town.' },
            { day: 2, title: 'Munnar', description: 'Drive to Munnar. Tea garden visit, Eravikulam National Park & Mattupetty Dam. Overnight Munnar.' },
            { day: 3, title: 'Thekkady', description: 'Drive to Thekkady. Periyar Wildlife Sanctuary boat ride. Spice plantation tour. Overnight Thekkady.' },
            { day: 4, title: 'Alleppey Houseboat', description: 'Drive to Alleppey. Board houseboat. Cruise through backwaters. Overnight on houseboat.' },
            { day: 5, title: 'Departure', description: 'Disembark houseboat. Transfer to Kochi airport. Tour ends with beautiful memories.' }
          ]
        },
        {
          id: 10, nights: 5, duration: '5N/6D', price: 22000, badge: 'Popular',
          name: 'Kerala Highlights',
          image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/17/600x300/2182118-2182117_classic-kerala-gods-own-country.jpg',
          highlights: [
            'Munnar, Thekkady, Kumarakom & Kovalam coverage',
            'Alleppey houseboat overnight stay',
            'Kathakali & Kalaripayattu cultural shows',
            'Kovalam beach — lighthouse & Hawah Beach',
            'All transfers & daily breakfast included'
          ],
          groupSize: '2 – 20 People', transport: 'Flight / Train + Cab', accommodation: '3★ / 4★ Hotels + Houseboat',
          itinerary: [
            { day: 1, title: 'Arrival – Kochi', description: 'Arrive & check-in. Fort Kochi heritage walk. Kathakali show in the evening.' },
            { day: 2, title: 'Munnar', description: 'Drive to Munnar. Tea gardens, Eravikulam NP, Mattupetty Dam & Echo Point.' },
            { day: 3, title: 'Thekkady', description: 'Periyar Wildlife Sanctuary boat ride. Spice plantation. Kalaripayattu show.' },
            { day: 4, title: 'Kumarakom & Houseboat', description: 'Drive to Kumarakom. Board houseboat. Backwater cruise. Overnight on houseboat.' },
            { day: 5, title: 'Kovalam Beach', description: 'Drive to Kovalam. Lighthouse Beach, Hawah Beach & Samudra Beach. Leisure evening.' },
            { day: 6, title: 'Departure', description: 'Breakfast. Transfer to Trivandrum airport. Tour ends.' }
          ]
        },
        {
          id: 11, nights: 6, duration: '6N/7D', price: 29500,
          name: 'Kerala Explorer',
          image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/14/600x300/2228853-2228852_kerala-1.jpg',
          highlights: [
            'Complete Kerala — Kochi, Munnar, Thekkady, Alleppey, Kovalam',
            'Wayanad wildlife & tribal village visit',
            'Houseboat + beach resort stay',
            'Ayurvedic spa & wellness session',
            'All meals, transfers & sightseeing included'
          ],
          groupSize: '2 – 15 People', transport: 'Flight + Cab', accommodation: '4★ Hotels + Houseboat',
          itinerary: [
            { day: 1, title: 'Arrival – Kochi', description: 'Arrive & check-in. Fort Kochi walk. Kathakali show.' },
            { day: 2, title: 'Munnar', description: 'Tea gardens, Eravikulam NP, Mattupetty Dam, Echo Point & Top Station.' },
            { day: 3, title: 'Wayanad', description: 'Drive to Wayanad. Edakkal Caves, Chembra Peak trek & tribal village visit.' },
            { day: 4, title: 'Thekkady', description: 'Periyar boat ride, spice plantation & Kalaripayattu show.' },
            { day: 5, title: 'Alleppey Houseboat', description: 'Board houseboat. Backwater cruise through canals & villages. Overnight on houseboat.' },
            { day: 6, title: 'Kovalam & Ayurveda', description: 'Drive to Kovalam. Lighthouse Beach. Ayurvedic massage & wellness session.' },
            { day: 7, title: 'Departure', description: 'Breakfast. Transfer to Trivandrum airport. Tour ends.' }
          ]
        },
        {
          id: 12, nights: 7, duration: '7N/8D', price: 38000, badge: 'Premium',
          name: 'Grand Kerala',
          image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/17/600x300/2182118-2182117_classic-kerala-gods-own-country.jpg',
          highlights: [
            'Full Kerala circuit — 7 destinations',
            'Luxury houseboat & beach resort stay',
            'Private Ayurvedic wellness package',
            'Wayanad, Varkala & Bekal Fort coverage',
            'All meals, transfers & exclusive experiences'
          ],
          groupSize: '2 – 10 People', transport: 'Flight + Private Cab', accommodation: '4★ / 5★ Resorts + Luxury Houseboat',
          itinerary: [
            { day: 1, title: 'Arrival – Kochi', description: 'Luxury check-in. Fort Kochi heritage walk. Kathakali show.' },
            { day: 2, title: 'Munnar', description: 'Tea gardens, Eravikulam NP, Mattupetty Dam, Echo Point & Top Station.' },
            { day: 3, title: 'Wayanad', description: 'Edakkal Caves, Chembra Peak, Pookode Lake & tribal village.' },
            { day: 4, title: 'Thekkady', description: 'Periyar boat ride, spice plantation & Kalaripayattu show.' },
            { day: 5, title: 'Alleppey Luxury Houseboat', description: 'Premium houseboat. Backwater cruise. Sunset on the backwaters.' },
            { day: 6, title: 'Kovalam & Varkala', description: 'Lighthouse Beach, Varkala cliff beach & Janardanaswamy Temple.' },
            { day: 7, title: 'Ayurveda & Leisure', description: 'Full-day Ayurvedic wellness package. Farewell dinner at beach resort.' },
            { day: 8, title: 'Departure', description: 'Breakfast. Transfer to Trivandrum airport. Tour ends with beautiful memories.' }
          ]
        }
      ]
    },

    'kashmir': {
      name: 'Kashmir',
      tagline: 'Paradise on Earth — valleys, lakes & snow peaks',
      heroImage: 'https://cdn.yourholiday.me/static/dynimg/itinerary/28/600x300/2210839-2210838_hampi.jpg',
      packages: [
        {
          id: 29, nights: 4, duration: '4N/5D', price: 16500, badge: 'Bestseller',
          name: 'Kashmir Escape',
          image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/28/600x300/2210839-2210838_hampi.jpg',
          highlights: [
            'Srinagar — Dal Lake shikara ride & floating market',
            'Gulmarg — Asia\'s highest gondola ride',
            'Pahalgam — Betaab Valley & Aru Valley',
            'Mughal Gardens — Shalimar Bagh & Nishat Bagh',
            'All transfers & daily breakfast included'
          ],
          groupSize: '2 – 20 People', transport: 'Flight + Cab', accommodation: '3★ Hotels + Houseboat',
          itinerary: [
            { day: 1, title: 'Arrival – Srinagar', description: 'Arrive at Srinagar Airport. Check-in to houseboat on Dal Lake. Evening shikara ride.' },
            { day: 2, title: 'Srinagar Sightseeing', description: 'Mughal Gardens — Shalimar Bagh, Nishat Bagh & Chashme Shahi. Dal Lake floating vegetable market.' },
            { day: 3, title: 'Gulmarg', description: 'Drive to Gulmarg. Gondola ride to Apharwat Peak. Snow activities & meadow walk.' },
            { day: 4, title: 'Pahalgam', description: 'Drive to Pahalgam. Betaab Valley, Aru Valley & Chandanwari. Lidder River walk.' },
            { day: 5, title: 'Departure', description: 'Breakfast. Transfer to Srinagar Airport. Tour ends with beautiful memories.' }
          ]
        },
        {
          id: 30, nights: 5, duration: '5N/6D', price: 22000, badge: 'Popular',
          name: 'Kashmir Highlights',
          image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/28/600x300/2210839-2210838_hampi.jpg',
          highlights: [
            'Srinagar, Gulmarg, Pahalgam & Sonamarg',
            'Thajiwas Glacier trek at Sonamarg',
            'Dal Lake houseboat overnight stay',
            'Gondola ride & snow skiing at Gulmarg',
            'All transfers & daily breakfast included'
          ],
          groupSize: '2 – 20 People', transport: 'Flight + Cab', accommodation: '3★ / 4★ Hotels + Houseboat',
          itinerary: [
            { day: 1, title: 'Arrival – Srinagar', description: 'Arrive & check-in to houseboat. Evening Dal Lake shikara ride.' },
            { day: 2, title: 'Srinagar Sightseeing', description: 'Mughal Gardens, Dal Lake floating market & Hazratbal Shrine.' },
            { day: 3, title: 'Gulmarg', description: 'Gondola ride to Apharwat Peak. Snow skiing & meadow walk.' },
            { day: 4, title: 'Pahalgam', description: 'Betaab Valley, Aru Valley & Chandanwari. Lidder River walk.' },
            { day: 5, title: 'Sonamarg', description: 'Drive to Sonamarg. Thajiwas Glacier trek & Zoji La Pass views.' },
            { day: 6, title: 'Departure', description: 'Breakfast. Transfer to Srinagar Airport. Tour ends.' }
          ]
        },
        {
          id: 31, nights: 6, duration: '6N/7D', price: 29500,
          name: 'Kashmir Explorer',
          image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/28/600x300/2210839-2210838_hampi.jpg',
          highlights: [
            'Srinagar, Gulmarg, Pahalgam, Sonamarg & Doodhpathri',
            'Doodhpathri — the Valley of Milk',
            'Yusmarg meadow & Nilnag Lake trek',
            'Wular Lake & Manasbal Lake visit',
            'All meals, transfers & sightseeing included'
          ],
          groupSize: '2 – 15 People', transport: 'Flight + Cab', accommodation: '4★ Hotels + Houseboat',
          itinerary: [
            { day: 1, title: 'Arrival – Srinagar', description: 'Arrive & check-in to houseboat. Evening shikara ride on Dal Lake.' },
            { day: 2, title: 'Srinagar Sightseeing', description: 'Mughal Gardens, Dal Lake floating market & Hazratbal Shrine.' },
            { day: 3, title: 'Gulmarg', description: 'Gondola ride, snow skiing & Alpather Lake trek.' },
            { day: 4, title: 'Pahalgam', description: 'Betaab Valley, Aru Valley & Chandanwari. Lidder River.' },
            { day: 5, title: 'Sonamarg', description: 'Thajiwas Glacier trek & Zoji La Pass views.' },
            { day: 6, title: 'Doodhpathri & Yusmarg', description: 'Doodhpathri Valley of Milk & Yusmarg meadow. Nilnag Lake trek.' },
            { day: 7, title: 'Departure', description: 'Breakfast. Transfer to Srinagar Airport. Tour ends.' }
          ]
        },
        {
          id: 32, nights: 7, duration: '7N/8D', price: 38500, badge: 'Premium',
          name: 'Grand Kashmir',
          image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/28/600x300/2210839-2210838_hampi.jpg',
          highlights: [
            'Complete Kashmir — Srinagar, Gulmarg, Pahalgam, Sonamarg, Gurez Valley',
            'Gurez Valley — untouched Himalayan paradise',
            'Luxury houseboat & mountain resort stays',
            'Private shikara & helicopter ride (optional)',
            'All meals, transfers & exclusive experiences'
          ],
          groupSize: '2 – 10 People', transport: 'Flight + Private Cab', accommodation: '4★ / 5★ Resorts + Luxury Houseboat',
          itinerary: [
            { day: 1, title: 'Arrival – Srinagar', description: 'Luxury houseboat check-in. Private shikara ride on Dal Lake.' },
            { day: 2, title: 'Srinagar Sightseeing', description: 'Mughal Gardens, Dal Lake floating market & Hazratbal Shrine.' },
            { day: 3, title: 'Gulmarg', description: 'Gondola ride to Apharwat Peak. Skiing & Alpather Lake trek.' },
            { day: 4, title: 'Pahalgam', description: 'Betaab Valley, Aru Valley & Chandanwari. Lidder River walk.' },
            { day: 5, title: 'Sonamarg', description: 'Thajiwas Glacier trek & Zoji La Pass. Overnight Sonamarg.' },
            { day: 6, title: 'Gurez Valley', description: 'Drive to Gurez Valley. Habba Khatoon Peak, Kishanganga River & Dawar village.' },
            { day: 7, title: 'Doodhpathri & Yusmarg', description: 'Doodhpathri Valley of Milk & Yusmarg meadow. Farewell dinner on houseboat.' },
            { day: 8, title: 'Departure', description: 'Breakfast. Transfer to Srinagar Airport. Tour ends with beautiful memories.' }
          ]
        }
      ]
    },

    'uttarakhand': {
      name: 'Uttarakhand',
      tagline: 'Devbhoomi — temples, treks & the mighty Himalayas',
      heroImage: 'https://cdn.yourholiday.me/static/dynimg/itinerary/21/600x300/2228887-2228886_manali-1.jpg',
      packages: [
        {
          id: 25, nights: 4, duration: '4N/5D', price: 13500, badge: 'Bestseller',
          name: 'Uttarakhand Escape',
          image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/21/600x300/2228887-2228886_manali-1.jpg',
          highlights: [
            'Haridwar — Har Ki Pauri Ganga Aarti',
            'Rishikesh — Laxman Jhula & Ram Jhula',
            'White water rafting in Rishikesh',
            'Mussoorie — Kempty Falls & Mall Road',
            'All transfers & daily breakfast included'
          ],
          groupSize: '2 – 20 People', transport: 'Flight / Train + Cab', accommodation: '3★ Hotels',
          itinerary: [
            { day: 1, title: 'Arrival – Haridwar', description: 'Arrive at Haridwar. Check-in. Evening Har Ki Pauri Ganga Aarti — a divine experience.' },
            { day: 2, title: 'Rishikesh', description: 'Drive to Rishikesh. Laxman Jhula, Ram Jhula, Triveni Ghat & Beatles Ashram.' },
            { day: 3, title: 'River Rafting & Mussoorie', description: 'Morning white water rafting in Rishikesh. Drive to Mussoorie. Mall Road evening.' },
            { day: 4, title: 'Mussoorie Sightseeing', description: 'Kempty Falls, Gun Hill, Camel\'s Back Road & Lal Tibba viewpoint.' },
            { day: 5, title: 'Departure', description: 'Breakfast. Transfer to Dehradun Airport / Railway Station. Tour ends.' }
          ]
        },
        {
          id: 26, nights: 5, duration: '5N/6D', price: 18500, badge: 'Popular',
          name: 'Uttarakhand Highlights',
          image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/21/600x300/2228887-2228886_manali-1.jpg',
          highlights: [
            'Haridwar, Rishikesh, Mussoorie & Nainital',
            'Naini Lake boat ride & Mall Road Nainital',
            'White water rafting & bungee jumping Rishikesh',
            'Jim Corbett National Park jeep safari',
            'All transfers & daily breakfast included'
          ],
          groupSize: '2 – 20 People', transport: 'Flight / Train + Cab', accommodation: '3★ / 4★ Hotels',
          itinerary: [
            { day: 1, title: 'Arrival – Haridwar', description: 'Arrive & check-in. Evening Har Ki Pauri Ganga Aarti.' },
            { day: 2, title: 'Rishikesh', description: 'Laxman Jhula, Ram Jhula, white water rafting & bungee jumping.' },
            { day: 3, title: 'Mussoorie', description: 'Drive to Mussoorie. Kempty Falls, Gun Hill & Mall Road.' },
            { day: 4, title: 'Nainital', description: 'Drive to Nainital. Naini Lake boat ride, Mall Road & Naina Devi Temple.' },
            { day: 5, title: 'Jim Corbett', description: 'Drive to Jim Corbett. Afternoon jeep safari in the national park.' },
            { day: 6, title: 'Departure', description: 'Breakfast. Transfer to Ramnagar / Delhi. Tour ends.' }
          ]
        },
        {
          id: 27, nights: 6, duration: '6N/7D', price: 25000,
          name: 'Uttarakhand Explorer',
          image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/21/600x300/2228887-2228886_manali-1.jpg',
          highlights: [
            'Haridwar, Rishikesh, Mussoorie, Nainital & Auli',
            'Auli — skiing & Gorson Bugyal trek',
            'Chopta — Tungnath & Chandrashila trek',
            'Jim Corbett tiger safari',
            'All meals, transfers & sightseeing included'
          ],
          groupSize: '2 – 15 People', transport: 'Flight + Cab', accommodation: '4★ Hotels',
          itinerary: [
            { day: 1, title: 'Arrival – Haridwar', description: 'Arrive & check-in. Evening Har Ki Pauri Ganga Aarti.' },
            { day: 2, title: 'Rishikesh', description: 'Laxman Jhula, white water rafting & Beatles Ashram.' },
            { day: 3, title: 'Auli', description: 'Drive to Auli. Skiing (seasonal), Gorson Bugyal meadow & Joshimath.' },
            { day: 4, title: 'Chopta & Tungnath', description: 'Trek to Tungnath Temple & Chandrashila Peak. Panoramic Himalayan views.' },
            { day: 5, title: 'Nainital', description: 'Drive to Nainital. Naini Lake, Mall Road & Naina Devi Temple.' },
            { day: 6, title: 'Jim Corbett', description: 'Morning & afternoon jeep safari in Jim Corbett National Park.' },
            { day: 7, title: 'Departure', description: 'Breakfast. Transfer to Ramnagar / Delhi. Tour ends.' }
          ]
        },
        {
          id: 28, nights: 7, duration: '7N/8D', price: 34000, badge: 'Premium',
          name: 'Grand Uttarakhand',
          image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/21/600x300/2228887-2228886_manali-1.jpg',
          highlights: [
            'Complete Uttarakhand — Haridwar, Rishikesh, Auli, Chopta, Nainital, Corbett',
            'Char Dham Yatra coverage (Kedarnath & Badrinath)',
            'Luxury resort stays with mountain views',
            'Helicopter ride to Kedarnath (optional)',
            'All meals, transfers & exclusive experiences'
          ],
          groupSize: '2 – 10 People', transport: 'Flight + Private Cab', accommodation: '4★ / 5★ Resorts',
          itinerary: [
            { day: 1, title: 'Arrival – Haridwar', description: 'Luxury check-in. Evening Har Ki Pauri Ganga Aarti.' },
            { day: 2, title: 'Rishikesh', description: 'Laxman Jhula, white water rafting & bungee jumping.' },
            { day: 3, title: 'Kedarnath', description: 'Drive to Gaurikund. Trek / helicopter to Kedarnath Temple. Overnight Kedarnath.' },
            { day: 4, title: 'Badrinath', description: 'Drive to Badrinath. Badrinath Temple darshan & Mana Village (last Indian village).' },
            { day: 5, title: 'Auli & Chopta', description: 'Auli skiing & Gorson Bugyal. Drive to Chopta. Tungnath trek.' },
            { day: 6, title: 'Nainital', description: 'Drive to Nainital. Naini Lake, Mall Road & Naina Devi Temple.' },
            { day: 7, title: 'Jim Corbett', description: 'Morning & afternoon tiger safari in Jim Corbett National Park.' },
            { day: 8, title: 'Departure', description: 'Breakfast. Transfer to Delhi. Tour ends with beautiful memories.' }
          ]
        }
      ]
    },

    'ladakh': {
      name: 'Ladakh',
      tagline: 'Land of High Passes — monasteries, lakes & raw Himalayas',
      heroImage: 'https://cdn.yourholiday.me/static/dynimg/itinerary/99/600x300/3191480-3191479_azin-javadzadeh-wmpyrpas7dq-unsplash.jpg',
      packages: [
        {
          id: 21, nights: 4, duration: '4N/5D', price: 18500, badge: 'Bestseller',
          name: 'Ladakh Escape',
          image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/99/600x300/3191480-3191479_azin-javadzadeh-wmpyrpas7dq-unsplash.jpg',
          highlights: [
            'Leh city tour — Leh Palace & Shanti Stupa',
            'Pangong Tso Lake — the iconic blue lake',
            'Thiksey & Hemis Monastery visits',
            'Magnetic Hill & Sangam (Indus-Zanskar confluence)',
            'All transfers & daily breakfast included'
          ],
          groupSize: '2 – 15 People', transport: 'Flight + Cab', accommodation: '3★ Hotels / Camps',
          itinerary: [
            { day: 1, title: 'Arrival – Leh (Acclimatization)', description: 'Arrive at Leh Airport. Check-in. Rest for acclimatization. Evening Leh Market walk.' },
            { day: 2, title: 'Leh Local Sightseeing', description: 'Leh Palace, Shanti Stupa, Thiksey Monastery, Hemis Monastery & Hall of Fame Museum.' },
            { day: 3, title: 'Pangong Tso Lake', description: 'Drive to Pangong Lake via Chang La Pass. Sunset at the iconic blue lake. Overnight camp.' },
            { day: 4, title: 'Return to Leh', description: 'Morning at Pangong. Drive back via Shyok Valley. Magnetic Hill & Sangam point.' },
            { day: 5, title: 'Departure', description: 'Breakfast. Transfer to Leh Airport. Tour ends with beautiful memories.' }
          ]
        },
        {
          id: 22, nights: 5, duration: '5N/6D', price: 24000, badge: 'Popular',
          name: 'Ladakh Highlights',
          image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/99/600x300/3191480-3191479_azin-javadzadeh-wmpyrpas7dq-unsplash.jpg',
          highlights: [
            'Pangong Tso & Nubra Valley coverage',
            'Khardung La Pass — world\'s highest motorable road',
            'Bactrian camel safari in Nubra Valley',
            'Diskit Monastery & Hunder Sand Dunes',
            'All transfers & daily breakfast included'
          ],
          groupSize: '2 – 15 People', transport: 'Flight + Cab', accommodation: '3★ / 4★ Hotels + Camp',
          itinerary: [
            { day: 1, title: 'Arrival – Leh (Acclimatization)', description: 'Arrive & check-in. Rest. Evening Leh Market & Shanti Stupa.' },
            { day: 2, title: 'Leh Sightseeing', description: 'Leh Palace, Thiksey Monastery, Hemis Monastery & Hall of Fame.' },
            { day: 3, title: 'Nubra Valley', description: 'Drive via Khardung La Pass. Diskit Monastery, Hunder Sand Dunes & camel safari.' },
            { day: 4, title: 'Pangong Tso Lake', description: 'Drive to Pangong Lake. Sunset at the blue lake. Overnight camp.' },
            { day: 5, title: 'Return to Leh', description: 'Morning at Pangong. Drive back via Shyok Valley. Magnetic Hill & Sangam.' },
            { day: 6, title: 'Departure', description: 'Breakfast. Transfer to Leh Airport. Tour ends.' }
          ]
        },
        {
          id: 23, nights: 6, duration: '6N/7D', price: 31000,
          name: 'Ladakh Explorer',
          image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/99/600x300/3191480-3191479_azin-javadzadeh-wmpyrpas7dq-unsplash.jpg',
          highlights: [
            'Pangong Tso, Nubra Valley & Tso Moriri Lake',
            'Khardung La & Chang La high mountain passes',
            'Zanskar Valley & Rangdum Monastery',
            'White water rafting on Zanskar River',
            'All meals, transfers & sightseeing included'
          ],
          groupSize: '2 – 12 People', transport: 'Flight + Cab', accommodation: '4★ Hotels + Luxury Camps',
          itinerary: [
            { day: 1, title: 'Arrival – Leh (Acclimatization)', description: 'Arrive & check-in. Rest. Evening Leh Market walk.' },
            { day: 2, title: 'Leh Sightseeing', description: 'Leh Palace, Shanti Stupa, Thiksey & Hemis Monastery.' },
            { day: 3, title: 'Nubra Valley', description: 'Khardung La Pass, Diskit Monastery, Hunder Dunes & camel safari.' },
            { day: 4, title: 'Pangong Tso Lake', description: 'Drive via Shyok Valley. Sunset at Pangong. Overnight luxury camp.' },
            { day: 5, title: 'Tso Moriri Lake', description: 'Drive to Tso Moriri via Mahe Bridge. Korzok Monastery & lake views.' },
            { day: 6, title: 'Zanskar & Rafting', description: 'White water rafting on Zanskar River. Rangdum Monastery visit.' },
            { day: 7, title: 'Departure', description: 'Breakfast. Transfer to Leh Airport. Tour ends.' }
          ]
        },
        {
          id: 24, nights: 7, duration: '7N/8D', price: 42000, badge: 'Premium',
          name: 'Grand Ladakh',
          image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/99/600x300/3191480-3191479_azin-javadzadeh-wmpyrpas7dq-unsplash.jpg',
          highlights: [
            'Complete Ladakh — Leh, Nubra, Pangong, Tso Moriri, Zanskar',
            'Luxury glamping at Pangong & Nubra',
            'Motorbike ride on Khardung La (optional)',
            'Stargazing camp in the Himalayas',
            'All meals, transfers & exclusive experiences'
          ],
          groupSize: '2 – 8 People', transport: 'Flight + Private Cab', accommodation: '4★ Hotels + Luxury Glamping',
          itinerary: [
            { day: 1, title: 'Arrival – Leh (Acclimatization)', description: 'Luxury hotel check-in. Rest. Evening Leh Market & Shanti Stupa.' },
            { day: 2, title: 'Leh Sightseeing', description: 'Leh Palace, Thiksey, Hemis Monastery & Hall of Fame.' },
            { day: 3, title: 'Nubra Valley', description: 'Khardung La Pass, Diskit Monastery, Hunder Dunes & camel safari. Luxury camp.' },
            { day: 4, title: 'Pangong Tso Lake', description: 'Drive via Shyok Valley. Sunset at Pangong. Luxury glamping & stargazing.' },
            { day: 5, title: 'Tso Moriri Lake', description: 'Drive to Tso Moriri. Korzok Monastery & pristine lake views.' },
            { day: 6, title: 'Zanskar Valley', description: 'White water rafting on Zanskar River. Rangdum Monastery.' },
            { day: 7, title: 'Magnetic Hill & Sangam', description: 'Magnetic Hill, Sangam confluence, Gurudwara Pathar Sahib & Hall of Fame.' },
            { day: 8, title: 'Departure', description: 'Breakfast. Transfer to Leh Airport. Tour ends with beautiful memories.' }
          ]
        }
      ]
    },

    'rajasthan': {
      name: 'Rajasthan',
      tagline: 'Land of Kings — forts, palaces & desert magic',
      heroImage: 'https://cdn.yourholiday.me/static/dynimg/itinerary/37/600x450/2185258-2185257_pexels-photo-209741.jpg',
      packages: [
        {
          id: 17, nights: 4, duration: '4N/5D', price: 15500, badge: 'Bestseller',
          name: 'Rajasthan Escape',
          image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/37/600x450/2185258-2185257_pexels-photo-209741.jpg',
          highlights: [
            'Jaipur — Amber Fort, Hawa Mahal & City Palace',
            'Jodhpur — Mehrangarh Fort & Blue City walk',
            'Pushkar — Brahma Temple & sacred lake',
            'Camel safari at Sam Sand Dunes, Jaisalmer',
            'All transfers & daily breakfast included'
          ],
          groupSize: '2 – 20 People', transport: 'Flight + Cab', accommodation: '3★ Hotels',
          itinerary: [
            { day: 1, title: 'Arrival – Jaipur', description: 'Arrive at Jaipur Airport. Check-in. Evening at Chokhi Dhani for Rajasthani folk dinner.' },
            { day: 2, title: 'Jaipur Sightseeing', description: 'Amber Fort, Hawa Mahal, City Palace, Jantar Mantar & Johari Bazaar shopping.' },
            { day: 3, title: 'Pushkar', description: 'Drive to Pushkar. Brahma Temple, Pushkar Lake & local bazaar. Overnight Pushkar.' },
            { day: 4, title: 'Jodhpur', description: 'Drive to Jodhpur. Mehrangarh Fort, Jaswant Thada & Blue City walk.' },
            { day: 5, title: 'Departure', description: 'Breakfast. Transfer to Jodhpur Airport. Tour ends with beautiful memories.' }
          ]
        },
        {
          id: 18, nights: 5, duration: '5N/6D', price: 21000, badge: 'Popular',
          name: 'Rajasthan Highlights',
          image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/37/600x450/2185258-2185257_pexels-photo-209741.jpg',
          highlights: [
            'Jaipur, Jodhpur & Udaipur golden triangle',
            'Lake Pichola boat ride & City Palace Udaipur',
            'Mehrangarh Fort & Umaid Bhawan Palace',
            'Rajasthani folk dinner & cultural show',
            'All transfers & daily breakfast included'
          ],
          groupSize: '2 – 20 People', transport: 'Flight + Cab', accommodation: '3★ / 4★ Hotels',
          itinerary: [
            { day: 1, title: 'Arrival – Jaipur', description: 'Arrive & check-in. Evening Chokhi Dhani folk dinner.' },
            { day: 2, title: 'Jaipur Sightseeing', description: 'Amber Fort, Hawa Mahal, City Palace, Jantar Mantar & Johari Bazaar.' },
            { day: 3, title: 'Pushkar & Ajmer', description: 'Brahma Temple, Pushkar Lake, Ajmer Dargah & local bazaar.' },
            { day: 4, title: 'Jodhpur', description: 'Mehrangarh Fort, Jaswant Thada, Umaid Bhawan Palace & Blue City walk.' },
            { day: 5, title: 'Udaipur', description: 'Drive to Udaipur. City Palace, Lake Pichola boat ride & Saheliyon ki Bari.' },
            { day: 6, title: 'Departure', description: 'Breakfast. Transfer to Udaipur Airport. Tour ends.' }
          ]
        },
        {
          id: 19, nights: 6, duration: '6N/7D', price: 28000,
          name: 'Rajasthan Explorer',
          image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/37/600x450/2185258-2185257_pexels-photo-209741.jpg',
          highlights: [
            'Jaipur, Jodhpur, Jaisalmer & Udaipur circuit',
            'Jaisalmer Golden Fort & camel safari at Sam Dunes',
            'Desert camp overnight stay',
            'Lake Pichola sunset boat ride',
            'All meals, transfers & sightseeing included'
          ],
          groupSize: '2 – 15 People', transport: 'Flight + Cab', accommodation: '4★ Hotels + Desert Camp',
          itinerary: [
            { day: 1, title: 'Arrival – Jaipur', description: 'Arrive & check-in. Evening Chokhi Dhani folk dinner.' },
            { day: 2, title: 'Jaipur Sightseeing', description: 'Amber Fort, Hawa Mahal, City Palace & Jantar Mantar.' },
            { day: 3, title: 'Jodhpur', description: 'Mehrangarh Fort, Jaswant Thada & Blue City walk.' },
            { day: 4, title: 'Jaisalmer', description: 'Drive to Jaisalmer. Golden Fort, Patwon ki Haveli & Gadisar Lake.' },
            { day: 5, title: 'Sam Sand Dunes', description: 'Camel safari at Sam Dunes. Sunset in the desert. Overnight desert camp with folk music.' },
            { day: 6, title: 'Udaipur', description: 'Drive to Udaipur. City Palace, Lake Pichola boat ride & Fateh Sagar Lake.' },
            { day: 7, title: 'Departure', description: 'Breakfast. Transfer to Udaipur Airport. Tour ends.' }
          ]
        },
        {
          id: 20, nights: 7, duration: '7N/8D', price: 36500, badge: 'Premium',
          name: 'Grand Rajasthan',
          image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/37/600x450/2185258-2185257_pexels-photo-209741.jpg',
          highlights: [
            'Complete Rajasthan — Jaipur, Jodhpur, Jaisalmer, Udaipur, Ranthambore',
            'Ranthambore National Park tiger safari',
            'Luxury heritage hotel & desert camp stays',
            'Private camel safari & desert sunset',
            'All meals, transfers & exclusive experiences'
          ],
          groupSize: '2 – 10 People', transport: 'Flight + Private Cab', accommodation: '4★ / 5★ Heritage Hotels + Desert Camp',
          itinerary: [
            { day: 1, title: 'Arrival – Jaipur', description: 'Luxury heritage hotel check-in. Evening Chokhi Dhani folk dinner.' },
            { day: 2, title: 'Jaipur Sightseeing', description: 'Amber Fort, Hawa Mahal, City Palace, Jantar Mantar & Johari Bazaar.' },
            { day: 3, title: 'Ranthambore', description: 'Drive to Ranthambore. Afternoon & morning tiger safari in the national park.' },
            { day: 4, title: 'Jodhpur', description: 'Mehrangarh Fort, Jaswant Thada, Umaid Bhawan Palace & Blue City walk.' },
            { day: 5, title: 'Jaisalmer', description: 'Golden Fort, Patwon ki Haveli & Gadisar Lake.' },
            { day: 6, title: 'Sam Sand Dunes', description: 'Private camel safari. Sunset in the desert. Luxury desert camp with folk music & dinner.' },
            { day: 7, title: 'Udaipur', description: 'City Palace, Lake Pichola private boat ride & Saheliyon ki Bari.' },
            { day: 8, title: 'Departure', description: 'Breakfast. Transfer to Udaipur Airport. Tour ends with beautiful memories.' }
          ]
        }
      ]
    },

    'himachal-pradesh': {
      name: 'Himachal Pradesh',
      tagline: 'Mountains, valleys & snow-capped adventures',
      heroImage: 'https://cdn.yourholiday.me/static/dynimg/itinerary/11/600x300/2228921-2228920_hp-3.jpg',
      packages: [
        {
          id: 13, nights: 4, duration: '4N/5D', price: 14500, badge: 'Bestseller',
          name: 'Himachal Escape',
          image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/11/600x300/2228921-2228920_hp-3.jpg',
          highlights: [
            'Shimla — Mall Road, Christ Church & Jakhu Temple',
            'Kufri — snow activities & horse riding',
            'Manali — Solang Valley & Rohtang Pass',
            'Hadimba Temple & Old Manali walk',
            'All transfers & daily breakfast included'
          ],
          groupSize: '2 – 20 People', transport: 'Flight / Train + Cab', accommodation: '3★ Hotels',
          itinerary: [
            { day: 1, title: 'Arrival – Shimla', description: 'Arrive at Shimla. Check-in. Evening Mall Road walk, Christ Church & Ridge.' },
            { day: 2, title: 'Shimla & Kufri', description: 'Jakhu Temple, Kufri snow point, horse riding & Himalayan Nature Park.' },
            { day: 3, title: 'Shimla to Manali', description: 'Scenic drive via Kullu Valley. Kullu Shawl factory visit. Check-in Manali.' },
            { day: 4, title: 'Manali Sightseeing', description: 'Hadimba Temple, Manu Temple, Old Manali, Vashisht Hot Springs & Mall Road.' },
            { day: 5, title: 'Departure', description: 'Breakfast. Transfer to Bhuntar Airport / Volvo to Delhi. Tour ends.' }
          ]
        },
        {
          id: 14, nights: 5, duration: '5N/6D', price: 19500, badge: 'Popular',
          name: 'Himachal Highlights',
          image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/21/600x300/2228887-2228886_manali-1.jpg',
          highlights: [
            'Shimla, Kufri, Manali & Solang Valley',
            'Rohtang Pass snow experience (seasonal)',
            'River rafting in Beas River, Kullu',
            'Dharamshala & McLeod Ganj — Dalai Lama Temple',
            'All transfers & daily breakfast included'
          ],
          groupSize: '2 – 20 People', transport: 'Flight / Train + Cab', accommodation: '3★ / 4★ Hotels',
          itinerary: [
            { day: 1, title: 'Arrival – Shimla', description: 'Arrive & check-in. Mall Road, Christ Church & Ridge evening walk.' },
            { day: 2, title: 'Shimla & Kufri', description: 'Jakhu Temple, Kufri snow point & Himalayan Nature Park.' },
            { day: 3, title: 'Kullu & Manali', description: 'Drive via Kullu. River rafting in Beas. Check-in Manali.' },
            { day: 4, title: 'Rohtang Pass / Solang Valley', description: 'Rohtang Pass snow (seasonal) or Solang Valley — skiing, zorbing & cable car.' },
            { day: 5, title: 'Dharamshala & McLeod Ganj', description: 'Dalai Lama Temple, Bhagsu Waterfall, Tibetan market & St. John Church.' },
            { day: 6, title: 'Departure', description: 'Breakfast. Transfer to Gaggal Airport / Volvo to Delhi. Tour ends.' }
          ]
        },
        {
          id: 15, nights: 6, duration: '6N/7D', price: 26000,
          name: 'Himachal Explorer',
          image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/11/600x300/2228921-2228920_hp-3.jpg',
          highlights: [
            'Shimla, Manali, Dharamshala & Dalhousie',
            'Rohtang Pass + Solang Valley snow activities',
            'Khajjiar — the Mini Switzerland of India',
            'River rafting, paragliding & trekking',
            'All meals, transfers & sightseeing included'
          ],
          groupSize: '2 – 15 People', transport: 'Flight + Cab', accommodation: '4★ Hotels',
          itinerary: [
            { day: 1, title: 'Arrival – Shimla', description: 'Arrive & check-in. Mall Road, Christ Church & Jakhu Temple.' },
            { day: 2, title: 'Kufri & Chail', description: 'Kufri snow point, Chail Palace & Chail Wildlife Sanctuary.' },
            { day: 3, title: 'Manali', description: 'Drive to Manali. Hadimba Temple, Old Manali & Vashisht Hot Springs.' },
            { day: 4, title: 'Rohtang & Solang Valley', description: 'Rohtang Pass snow (seasonal). Solang Valley — skiing, zorbing & cable car.' },
            { day: 5, title: 'Dharamshala & McLeod Ganj', description: 'Dalai Lama Temple, Bhagsu Waterfall & Tibetan market.' },
            { day: 6, title: 'Dalhousie & Khajjiar', description: 'Khajjiar meadow (Mini Switzerland), Dainkund Peak & Panchpula waterfall.' },
            { day: 7, title: 'Departure', description: 'Breakfast. Transfer to Pathankot / Gaggal Airport. Tour ends.' }
          ]
        },
        {
          id: 16, nights: 7, duration: '7N/8D', price: 34500, badge: 'Premium',
          name: 'Grand Himachal',
          image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/21/600x300/2228887-2228886_manali-1.jpg',
          highlights: [
            'Complete Himachal — Shimla, Manali, Dharamshala, Dalhousie, Spiti',
            'Spiti Valley — Key Monastery & Chandratal Lake',
            'Paragliding in Bir Billing (World\'s Best Site)',
            'Luxury mountain resort stays',
            'All meals, transfers & exclusive experiences'
          ],
          groupSize: '2 – 10 People', transport: 'Flight + Private Cab', accommodation: '4★ / 5★ Mountain Resorts',
          itinerary: [
            { day: 1, title: 'Arrival – Shimla', description: 'Luxury check-in. Mall Road, Christ Church & Ridge.' },
            { day: 2, title: 'Kufri & Chail', description: 'Kufri snow, Chail Palace & Himalayan Nature Park.' },
            { day: 3, title: 'Manali', description: 'Drive to Manali. Hadimba Temple, Old Manali & Vashisht Hot Springs.' },
            { day: 4, title: 'Rohtang & Solang Valley', description: 'Rohtang Pass snow. Solang Valley skiing & zorbing.' },
            { day: 5, title: 'Dharamshala & Bir Billing', description: 'Dalai Lama Temple, McLeod Ganj. Paragliding at Bir Billing.' },
            { day: 6, title: 'Dalhousie & Khajjiar', description: 'Khajjiar meadow, Dainkund Peak & Panchpula waterfall.' },
            { day: 7, title: 'Spiti Valley', description: 'Key Monastery, Kibber village & Chandratal Lake (seasonal).' },
            { day: 8, title: 'Departure', description: 'Breakfast. Transfer to airport. Tour ends with beautiful memories.' }
          ]
        }
      ]
    }

  };

  // ============================================================
  // INTERNATIONAL DESTINATION PAGES
  // ============================================================
  internationalDestinationPages: Record<string, DestinationPageData> = {

    'bali': {
      name: 'Bali, Indonesia',
      tagline: 'Island of the Gods — temples, rice terraces & turquoise seas',
      heroImage: 'https://cdn.yourholiday.me/static/dynimg/destination/48/600x300/3996290-3996289_bali-4.jpg',
      packages: [
        {
          id: 1001, nights: 4, duration: '4N/5D', price: 12387, badge: 'Bestseller',
          name: 'Bali Basic for First Timers',
          image: 'https://cdn.yourholiday.me/static/dynimg/destination/48/600x300/3996290-3996289_bali-4.jpg',
          highlights: [
            'Return flights from Mumbai/Delhi included',
            'Ubud Kintamani volcano & rice terraces',
            'Water sports at Tanjung Benoa beach',
            'Uluwatu Kecak fire dance at sunset',
            'Tanah Lot temple & Monkey Forest'
          ],
          groupSize: '2 – 20 People', transport: 'Flight + Coach', accommodation: '3★ / 4★ Hotels',
          itinerary: [
            { day: 1, title: 'Arrival – Bali', description: 'Arrive at Ngurah Rai Airport. Check-in to hotel. Evening at leisure. Welcome dinner.' },
            { day: 2, title: 'Ubud Kintamani & Water Sports', description: 'Visit Ubud Kintamani volcano, rice terraces & Monkey Forest. Afternoon water sports at Tanjung Benoa.' },
            { day: 3, title: 'Uluwatu & Taman Ayun', description: 'Taman Ayun Temple, Uluwatu cliff temple & Kecak fire dance at sunset.' },
            { day: 4, title: 'Tanah Lot & Shopping', description: 'Tanah Lot sea temple at sunset. Kuta beach & souvenir shopping.' },
            { day: 5, title: 'Departure', description: 'Breakfast at hotel. Check-out & transfer to airport. Tour ends with beautiful memories.' }
          ]
        },
        {
          id: 1002, nights: 5, duration: '5N/6D', price: 15917, badge: 'Bestseller',
          name: 'Beautiful Bali',
          image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/21/600x300/2210757-2210756_sin-pack-1.jpg',
          highlights: [
            'Return flights from Mumbai/Delhi included',
            'Ubud, Kintamani, Goa Gajah & Tirta Empul',
            'Water sports, Uluwatu Kecak & Bali Swing',
            'Ulun Danu Temple & Git Git Waterfalls',
            'All transfers & daily breakfast included'
          ],
          groupSize: '2 – 20 People', transport: 'Flight + Coach', accommodation: '3★ / 4★ Hotels',
          itinerary: [
            { day: 1, title: 'Arrival – Bali', description: 'Arrive at Ngurah Rai Airport. Check-in. Evening at leisure. Welcome dinner.' },
            { day: 2, title: 'Ubud Kintamani, Water Sports', description: 'Visit Ubud Kintamani, Water Sports. Expert guide accompanies throughout. Meals included.' },
            { day: 3, title: 'Uluwatu Kecak, Taman Ayun Temple', description: 'Visit Uluwatu Kecak, Taman Ayun Temple. Expert guide accompanies throughout. Meals included.' },
            { day: 4, title: 'Monkey Forest, Tanah Lot', description: 'Visit Monkey Forest, Tanah Lot. Expert guide accompanies throughout. Meals included.' },
            { day: 5, title: 'Ulun Danu & Git Git Waterfalls', description: 'Ulun Danu Temple, Git Git Waterfalls & Bedugul. Leisure evening.' },
            { day: 6, title: 'Departure', description: 'Breakfast at hotel. Check-out & transfer to airport. Tour ends.' }
          ]
        },
        {
          id: 1003, nights: 6, duration: '6N/7D', price: 27169,
          name: 'Romantic Bali',
          image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/99/600x300/3191480-3191479_azin-javadzadeh-wmpyrpas7dq-unsplash.jpg',
          highlights: [
            'Return flights from Mumbai/Delhi included',
            'Bali Swing & candle light dinner',
            'Nusa Penida — Kelingking Beach & Angel Billabong',
            'Balinese spa & rice terrace walk',
            'All transfers & daily breakfast included'
          ],
          groupSize: '2 – 15 People', transport: 'Flight + Coach', accommodation: '4★ Hotels',
          itinerary: [
            { day: 1, title: 'Arrival – Bali', description: 'Arrive & check-in. Welcome dinner at beach restaurant.' },
            { day: 2, title: 'Ubud & Bali Swing', description: 'Ubud Royal Palace, Goa Gajah, Bali Swing & Tegalalang Rice Terraces.' },
            { day: 3, title: 'Water Sports & Uluwatu', description: 'Water sports at Tanjung Benoa. Uluwatu Kecak fire dance at sunset.' },
            { day: 4, title: 'Nusa Penida', description: 'Day trip to Nusa Penida. Kelingking Beach, Angel Billabong & Broken Beach.' },
            { day: 5, title: 'Spa & Tanah Lot', description: 'Balinese spa session. Tanah Lot sunset. Candle light dinner.' },
            { day: 6, title: 'Seminyak & Shopping', description: 'Seminyak beach, Ku De Ta sunset & souvenir shopping.' },
            { day: 7, title: 'Departure', description: 'Breakfast. Check-out & transfer to airport. Tour ends.' }
          ]
        },
        {
          id: 1004, nights: 7, duration: '7N/8D', price: 40695, badge: 'Premium',
          name: 'Grand Bali',
          image: 'https://cdn.yourholiday.me/static/dynimg/destination/48/600x300/3996290-3996289_bali-4.jpg',
          highlights: [
            'Return flights from Mumbai/Delhi included',
            'Bali + Nusa Penida full circuit',
            'Private villa stay in Seminyak',
            'Scuba diving, ATV ride & white water rafting',
            'All meals, transfers & exclusive experiences'
          ],
          groupSize: '2 – 10 People', transport: 'Flight + Private Coach', accommodation: '4★ / 5★ Villas & Hotels',
          itinerary: [
            { day: 1, title: 'Arrival – Bali', description: 'Private villa check-in. Welcome dinner at beach restaurant.' },
            { day: 2, title: 'Ubud & Bali Swing', description: 'Ubud Royal Palace, Goa Gajah, Bali Swing & Tegalalang Rice Terraces.' },
            { day: 3, title: 'ATV & White Water Rafting', description: 'ATV ride through rice fields. White water rafting on Ayung River.' },
            { day: 4, title: 'Nusa Penida', description: 'Kelingking Beach, Angel Billabong, Broken Beach & Crystal Bay snorkeling.' },
            { day: 5, title: 'Water Sports & Uluwatu', description: 'Scuba diving at Padang Bai. Uluwatu Kecak fire dance.' },
            { day: 6, title: 'Tanah Lot & Spa', description: 'Tanah Lot sunset. Luxury Balinese spa. Candle light dinner.' },
            { day: 7, title: 'Seminyak & Kuta', description: 'Seminyak beach, Ku De Ta sunset & farewell dinner.' },
            { day: 8, title: 'Departure', description: 'Breakfast. Check-out & transfer to airport. Tour ends with beautiful memories.' }
          ]
        }
      ]
    },

    'dubai': {
      name: 'Dubai, UAE',
      tagline: 'City of Gold — skyscrapers, desert & luxury beyond limits',
      heroImage: 'https://cdn.yourholiday.me/static/dynimg/destination/16/600x300/3598628-3598627_adobestock_47088158.jpg',
      packages: [
        {
          id: 2001, nights: 4, duration: '4N/5D', price: 28536, badge: 'Bestseller',
          name: 'Dubai on a Budget',
          image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/98/600x300/2211579-2211578_dubai-pac1.jpg',
          highlights: [
            'Return flights from Mumbai/Delhi included',
            'Burj Khalifa — At the Top observation deck',
            'Desert safari with BBQ dinner & belly dance',
            'Dhow cruise dinner on Dubai Creek',
            'Dubai Mall, Gold Souk & Spice Souk'
          ],
          groupSize: '2 – 20 People', transport: 'Flight + Coach', accommodation: '3★ / 4★ Hotels',
          itinerary: [
            { day: 1, title: 'Arrival – Dubai', description: 'Arrive at Dubai International Airport. Check-in. Evening Dubai Creek Dhow cruise dinner.' },
            { day: 2, title: 'Dubai City Tour', description: 'Burj Khalifa At the Top, Dubai Mall, Dubai Frame, Gold Souk & Spice Souk.' },
            { day: 3, title: 'Desert Safari', description: 'Morning at leisure. Afternoon desert safari — dune bashing, camel ride, BBQ dinner & belly dance.' },
            { day: 4, title: 'Palm Jumeirah & Shopping', description: 'Palm Jumeirah, Atlantis view, Mall of the Emirates & Ski Dubai.' },
            { day: 5, title: 'Departure', description: 'Breakfast at hotel. Check-out & transfer to airport. Tour ends with beautiful memories.' }
          ]
        },
        {
          id: 2002, nights: 5, duration: '5N/6D', price: 40397, badge: 'Popular',
          name: 'Trip to Dubai',
          image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/59/600x300/2211591-2211590_dubai-pac-4.jpg',
          highlights: [
            'Return flights from Mumbai/Delhi included',
            'Burj Khalifa, Dubai Mall & Dubai Frame',
            'Desert safari with dune bashing & BBQ',
            'Abu Dhabi — Sheikh Zayed Grand Mosque',
            'Palm Jumeirah & Atlantis Aquaventure'
          ],
          groupSize: '2 – 20 People', transport: 'Flight + Coach', accommodation: '4★ Hotels',
          itinerary: [
            { day: 1, title: 'Arrival – Dubai', description: 'Arrive & check-in. Evening Dubai Creek Dhow cruise dinner.' },
            { day: 2, title: 'Dubai City Tour', description: 'Burj Khalifa, Dubai Mall, Dubai Frame, Gold Souk & Spice Souk.' },
            { day: 3, title: 'Desert Safari', description: 'Dune bashing, camel ride, sandboarding, BBQ dinner & belly dance.' },
            { day: 4, title: 'Abu Dhabi Day Trip', description: 'Sheikh Zayed Grand Mosque, Ferrari World & Corniche.' },
            { day: 5, title: 'Palm Jumeirah & Atlantis', description: 'Palm Jumeirah monorail, Atlantis Aquaventure & The Pointe.' },
            { day: 6, title: 'Departure', description: 'Breakfast. Check-out & transfer to airport. Tour ends.' }
          ]
        },
        {
          id: 2003, nights: 6, duration: '6N/7D', price: 52000,
          name: 'Dubai Explorer',
          image: 'https://cdn.yourholiday.me/static/dynimg/destination/16/600x300/3598628-3598627_adobestock_47088158.jpg',
          highlights: [
            'Return flights from Mumbai/Delhi included',
            'Dubai + Abu Dhabi + Sharjah full circuit',
            'Burj Al Arab exterior visit & photo stop',
            'Dubai Opera show & City Walk',
            'All meals, transfers & sightseeing included'
          ],
          groupSize: '2 – 15 People', transport: 'Flight + Coach', accommodation: '4★ Hotels',
          itinerary: [
            { day: 1, title: 'Arrival – Dubai', description: 'Arrive & check-in. Evening Dubai Creek Dhow cruise dinner.' },
            { day: 2, title: 'Dubai City Tour', description: 'Burj Khalifa, Dubai Mall, Dubai Frame, Gold Souk & Spice Souk.' },
            { day: 3, title: 'Desert Safari', description: 'Dune bashing, camel ride, sandboarding, BBQ dinner & belly dance.' },
            { day: 4, title: 'Abu Dhabi', description: 'Sheikh Zayed Grand Mosque, Ferrari World, Louvre Abu Dhabi & Corniche.' },
            { day: 5, title: 'Palm Jumeirah & Burj Al Arab', description: 'Palm Jumeirah, Atlantis, Burj Al Arab photo stop & City Walk.' },
            { day: 6, title: 'Sharjah & Dubai Opera', description: 'Sharjah Heritage Area, Blue Souk & Dubai Opera evening show.' },
            { day: 7, title: 'Departure', description: 'Breakfast. Check-out & transfer to airport. Tour ends.' }
          ]
        },
        {
          id: 2004, nights: 7, duration: '7N/8D', price: 85000, badge: 'Premium',
          name: 'Grand Dubai',
          image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/98/600x300/2211579-2211578_dubai-pac1.jpg',
          highlights: [
            'Return flights from Mumbai/Delhi included',
            'Luxury 5-star hotel stay in Downtown Dubai',
            'Private desert safari & yacht cruise',
            'Dubai + Abu Dhabi + Oman day trip',
            'All meals, transfers & exclusive experiences'
          ],
          groupSize: '2 – 10 People', transport: 'Flight + Private Coach', accommodation: '5★ Hotels',
          itinerary: [
            { day: 1, title: 'Arrival – Dubai', description: 'Luxury 5-star check-in. Private Dhow cruise dinner on Dubai Creek.' },
            { day: 2, title: 'Dubai City Tour', description: 'Burj Khalifa VIP access, Dubai Mall, Dubai Frame & Gold Souk.' },
            { day: 3, title: 'Private Desert Safari', description: 'Private dune bashing, camel ride, falconry show & gourmet BBQ dinner.' },
            { day: 4, title: 'Abu Dhabi', description: 'Sheikh Zayed Grand Mosque, Ferrari World, Louvre Abu Dhabi & Corniche.' },
            { day: 5, title: 'Oman Day Trip', description: 'Drive to Muscat. Sultan Qaboos Grand Mosque, Mutrah Souq & Corniche.' },
            { day: 6, title: 'Yacht Cruise & Atlantis', description: 'Private yacht cruise around Palm Jumeirah. Atlantis Aquaventure.' },
            { day: 7, title: 'Luxury Shopping & Spa', description: 'Mall of the Emirates, Ski Dubai & luxury spa session.' },
            { day: 8, title: 'Departure', description: 'Breakfast. Check-out & transfer to airport. Tour ends with beautiful memories.' }
          ]
        }
      ]
    },

    'thailand': {
      name: 'Thailand',
      tagline: 'Land of Smiles — temples, beaches & vibrant street life',
      heroImage: 'https://cdn.yourholiday.me/static/dynimg/destination/32/600x300/3076721-3076720_thailand2.jpg',
      packages: [
        {
          id: 3001, nights: 4, duration: '4N/5D', price: 18999, badge: 'Bestseller',
          name: 'Classic Thailand',
          image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/45/600x300/2210729-2210728_thailand-p1.jpg',
          highlights: [
            'Return flights from Mumbai/Delhi included',
            'Bangkok — Grand Palace, Wat Pho & Floating Market',
            'Pattaya — Coral Island & Nong Nooch Village',
            'Walking Street Pattaya nightlife',
            'All transfers & daily breakfast included'
          ],
          groupSize: '2 – 20 People', transport: 'Flight + Coach', accommodation: '3★ / 4★ Hotels',
          itinerary: [
            { day: 1, title: 'Arrival – Bangkok', description: 'Arrive at Suvarnabhumi Airport. Check-in. Evening Chao Phraya River cruise & welcome dinner.' },
            { day: 2, title: 'Bangkok City Tour', description: 'Grand Palace, Wat Pho (Reclining Buddha), Wat Arun & Chatuchak Weekend Market.' },
            { day: 3, title: 'Floating Market & Pattaya', description: 'Damnoen Saduak Floating Market. Drive to Pattaya. Evening Walking Street.' },
            { day: 4, title: 'Coral Island & Nong Nooch', description: 'Coral Island speedboat trip — snorkeling & water sports. Nong Nooch Village cultural show.' },
            { day: 5, title: 'Departure', description: 'Breakfast at hotel. Transfer to Bangkok Airport. Tour ends with beautiful memories.' }
          ]
        },
        {
          id: 3002, nights: 5, duration: '5N/6D', price: 28500, badge: 'Popular',
          name: 'Thailand Highlights',
          image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/2/600x300/2210731-2210730_thailand-p2.jpg',
          highlights: [
            'Return flights from Mumbai/Delhi included',
            'Bangkok, Pattaya & Phuket coverage',
            'Phi Phi Islands speedboat day trip',
            'James Bond Island & Phang Nga Bay',
            'All transfers & daily breakfast included'
          ],
          groupSize: '2 – 20 People', transport: 'Flight + Coach', accommodation: '3★ / 4★ Hotels',
          itinerary: [
            { day: 1, title: 'Arrival – Bangkok', description: 'Arrive & check-in. Evening Chao Phraya River cruise.' },
            { day: 2, title: 'Bangkok City Tour', description: 'Grand Palace, Wat Pho, Wat Arun & Floating Market.' },
            { day: 3, title: 'Pattaya', description: 'Coral Island, Nong Nooch Village & Walking Street.' },
            { day: 4, title: 'Fly to Phuket', description: 'Flight to Phuket. Check-in. Patong Beach & Bangla Road evening.' },
            { day: 5, title: 'Phi Phi Islands', description: 'Speedboat to Phi Phi Islands — Maya Bay, snorkeling & Viking Cave.' },
            { day: 6, title: 'Departure', description: 'Breakfast. Transfer to Phuket Airport. Tour ends.' }
          ]
        },
        {
          id: 3003, nights: 6, duration: '6N/7D', price: 42000,
          name: 'Thailand Explorer',
          image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/45/600x300/2210729-2210728_thailand-p1.jpg',
          highlights: [
            'Return flights from Mumbai/Delhi included',
            'Bangkok, Chiang Mai, Phuket & Krabi',
            'Elephant Sanctuary visit in Chiang Mai',
            'Railay Beach & Four Islands tour Krabi',
            'All meals, transfers & sightseeing included'
          ],
          groupSize: '2 – 15 People', transport: 'Flight + Coach', accommodation: '4★ Hotels',
          itinerary: [
            { day: 1, title: 'Arrival – Bangkok', description: 'Arrive & check-in. Evening Chao Phraya River cruise.' },
            { day: 2, title: 'Bangkok City Tour', description: 'Grand Palace, Wat Pho, Wat Arun & Chatuchak Market.' },
            { day: 3, title: 'Chiang Mai', description: 'Fly to Chiang Mai. Doi Suthep Temple & Night Bazaar.' },
            { day: 4, title: 'Elephant Sanctuary & Doi Inthanon', description: 'Ethical Elephant Sanctuary visit. Doi Inthanon National Park — Thailand\'s highest peak.' },
            { day: 5, title: 'Phuket', description: 'Fly to Phuket. Patong Beach, Big Buddha & Promthep Cape sunset.' },
            { day: 6, title: 'Krabi & Railay Beach', description: 'Drive to Krabi. Railay Beach by longtail boat. Four Islands snorkeling tour.' },
            { day: 7, title: 'Departure', description: 'Breakfast. Transfer to Krabi Airport. Tour ends.' }
          ]
        },
        {
          id: 3004, nights: 7, duration: '7N/8D', price: 62000, badge: 'Premium',
          name: 'Grand Thailand',
          image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/2/600x300/2210731-2210730_thailand-p2.jpg',
          highlights: [
            'Return flights from Mumbai/Delhi included',
            'Bangkok, Chiang Mai, Phuket, Krabi & Koh Samui',
            'Private Elephant Sanctuary & jungle trek',
            'Luxury resort stays throughout',
            'All meals, transfers & exclusive experiences'
          ],
          groupSize: '2 – 10 People', transport: 'Flight + Private Coach', accommodation: '4★ / 5★ Resorts',
          itinerary: [
            { day: 1, title: 'Arrival – Bangkok', description: 'Luxury hotel check-in. Private Chao Phraya dinner cruise.' },
            { day: 2, title: 'Bangkok City Tour', description: 'Grand Palace, Wat Pho, Wat Arun & Floating Market.' },
            { day: 3, title: 'Chiang Mai', description: 'Fly to Chiang Mai. Doi Suthep Temple & Night Bazaar.' },
            { day: 4, title: 'Elephant Sanctuary & Doi Inthanon', description: 'Private Elephant Sanctuary. Doi Inthanon National Park & hill tribe village.' },
            { day: 5, title: 'Phuket', description: 'Fly to Phuket. Big Buddha, Promthep Cape & Patong Beach.' },
            { day: 6, title: 'Phi Phi Islands & Krabi', description: 'Private speedboat to Phi Phi Islands. Maya Bay & snorkeling. Railay Beach.' },
            { day: 7, title: 'Koh Samui', description: 'Fly to Koh Samui. Ang Thong Marine Park & Chaweng Beach.' },
            { day: 8, title: 'Departure', description: 'Breakfast. Transfer to Koh Samui Airport. Tour ends with beautiful memories.' }
          ]
        }
      ]
    },

    'singapore': {
      name: 'Singapore',
      tagline: 'Lion City — futuristic skyline, gardens & world-class experiences',
      heroImage: 'https://cdn.yourholiday.me/static/dynimg/destination/58/600x300/3996296-3996295_singapore-stock-image.jpg',
      packages: [
        {
          id: 4001, nights: 4, duration: '4N/5D', price: 32500, badge: 'Bestseller',
          name: 'Singapore Highlights',
          image: 'https://cdn.yourholiday.me/static/dynimg/destination/58/600x300/3996296-3996295_singapore-stock-image.jpg',
          highlights: [
            'Return flights from Mumbai/Delhi included',
            'Gardens by the Bay & Marina Bay Sands',
            'Sentosa Island — Universal Studios Singapore',
            'Merlion Park, Chinatown & Little India',
            'All transfers & daily breakfast included'
          ],
          groupSize: '2 – 20 People', transport: 'Flight + MRT + Coach', accommodation: '3★ / 4★ Hotels',
          itinerary: [
            { day: 1, title: 'Arrival – Singapore', description: 'Arrive at Changi Airport. Check-in. Evening Marina Bay Sands Skypark & Gardens by the Bay light show.' },
            { day: 2, title: 'City Tour', description: 'Merlion Park, Marina Bay Sands, Chinatown, Little India & Arab Street.' },
            { day: 3, title: 'Sentosa Island', description: 'Universal Studios Singapore, S.E.A. Aquarium & Sentosa beach.' },
            { day: 4, title: 'Gardens by the Bay & Shopping', description: 'Gardens by the Bay, Cloud Forest, Orchard Road shopping & Singapore Flyer.' },
            { day: 5, title: 'Departure', description: 'Breakfast at hotel. Transfer to Changi Airport. Tour ends with beautiful memories.' }
          ]
        },
        {
          id: 4002, nights: 5, duration: '5N/6D', price: 44999, badge: 'Popular',
          name: 'Ultimate Singapore',
          image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/76/600x300/2211669-2211668_singapore-4.jpg',
          highlights: [
            'Return flights from Mumbai/Delhi included',
            'Universal Studios, Night Safari & Singapore Zoo',
            'Gardens by the Bay & Marina Bay Sands',
            'Jurong Bird Park & S.E.A. Aquarium',
            'All transfers & daily breakfast included'
          ],
          groupSize: '2 – 20 People', transport: 'Flight + MRT + Coach', accommodation: '4★ Hotels',
          itinerary: [
            { day: 1, title: 'Arrival – Singapore', description: 'Arrive & check-in. Evening Marina Bay Sands & Gardens by the Bay light show.' },
            { day: 2, title: 'City Tour', description: 'Merlion Park, Chinatown, Little India, Arab Street & Singapore Flyer.' },
            { day: 3, title: 'Sentosa & Universal Studios', description: 'Universal Studios Singapore & S.E.A. Aquarium.' },
            { day: 4, title: 'Singapore Zoo & Night Safari', description: 'Singapore Zoo morning visit. Night Safari evening — unique nocturnal wildlife experience.' },
            { day: 5, title: 'Gardens by the Bay & Jurong', description: 'Gardens by the Bay, Cloud Forest & Jurong Bird Park.' },
            { day: 6, title: 'Departure', description: 'Breakfast. Transfer to Changi Airport. Tour ends.' }
          ]
        },
        {
          id: 4003, nights: 6, duration: '6N/7D', price: 58000,
          name: 'Singapore Explorer',
          image: 'https://cdn.yourholiday.me/static/dynimg/destination/58/600x300/3996296-3996295_singapore-stock-image.jpg',
          highlights: [
            'Return flights from Mumbai/Delhi included',
            'Singapore + Malaysia (Kuala Lumpur) combo',
            'Petronas Twin Towers & Batu Caves KL',
            'Genting Highlands cable car & casino',
            'All meals, transfers & sightseeing included'
          ],
          groupSize: '2 – 15 People', transport: 'Flight + Coach', accommodation: '4★ Hotels',
          itinerary: [
            { day: 1, title: 'Arrival – Singapore', description: 'Arrive & check-in. Evening Marina Bay Sands & Gardens by the Bay.' },
            { day: 2, title: 'Singapore City Tour', description: 'Merlion Park, Chinatown, Little India & Singapore Flyer.' },
            { day: 3, title: 'Sentosa & Universal Studios', description: 'Universal Studios Singapore & S.E.A. Aquarium.' },
            { day: 4, title: 'Night Safari & Zoo', description: 'Singapore Zoo & Night Safari.' },
            { day: 5, title: 'Kuala Lumpur', description: 'Coach to KL. Petronas Twin Towers, Batu Caves & KL Tower.' },
            { day: 6, title: 'Genting Highlands', description: 'Cable car to Genting Highlands. Theme park & casino. Return to KL.' },
            { day: 7, title: 'Departure', description: 'Breakfast. Transfer to KLIA. Tour ends.' }
          ]
        },
        {
          id: 4004, nights: 7, duration: '7N/8D', price: 78000, badge: 'Premium',
          name: 'Grand Singapore',
          image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/76/600x300/2211669-2211668_singapore-4.jpg',
          highlights: [
            'Return flights from Mumbai/Delhi included',
            'Marina Bay Sands hotel stay',
            'Private city tour & yacht dinner cruise',
            'Singapore + Malaysia full circuit',
            'All meals, transfers & exclusive experiences'
          ],
          groupSize: '2 – 10 People', transport: 'Flight + Private Coach', accommodation: '4★ / 5★ Hotels incl. MBS',
          itinerary: [
            { day: 1, title: 'Arrival – Singapore', description: 'Marina Bay Sands check-in. Skypark infinity pool. Evening Gardens by the Bay.' },
            { day: 2, title: 'Private City Tour', description: 'Private city tour — Merlion, Chinatown, Little India & Orchard Road.' },
            { day: 3, title: 'Sentosa & Universal Studios', description: 'Universal Studios Singapore & S.E.A. Aquarium. Evening yacht dinner cruise.' },
            { day: 4, title: 'Singapore Zoo & Night Safari', description: 'Singapore Zoo & Night Safari.' },
            { day: 5, title: 'Gardens & Jurong', description: 'Gardens by the Bay, Cloud Forest & Jurong Bird Park.' },
            { day: 6, title: 'Kuala Lumpur', description: 'Coach to KL. Petronas Twin Towers, Batu Caves & KL Tower.' },
            { day: 7, title: 'Genting Highlands', description: 'Cable car to Genting Highlands. Theme park & casino.' },
            { day: 8, title: 'Departure', description: 'Breakfast. Transfer to KLIA. Tour ends with beautiful memories.' }
          ]
        }
      ]
    },

    'italy': {
      name: 'Italy',
      tagline: 'Bel Paese — ancient ruins, Renaissance art & la dolce vita',
      heroImage: 'https://cdn.yourholiday.me/static/dynimg/destination/79/600x300/2750961-2750960_italy.jpg',
      packages: [
        {
          id: 16001, nights: 4, duration: '4N/5D', price: 74999, badge: 'Bestseller',
          name: 'Roman Holiday',
          image: 'https://cdn.yourholiday.me/static/dynimg/destination/79/600x300/2750961-2750960_italy.jpg',
          highlights: [
            'Return flights from Mumbai/Delhi included',
            'Colosseum, Roman Forum & Palatine Hill',
            'Vatican Museums, Sistine Chapel & St. Peter\'s Basilica',
            'Trevi Fountain, Spanish Steps & Pantheon',
            'All transfers & daily breakfast included'
          ],
          groupSize: '2 – 20 People', transport: 'Flight + Coach', accommodation: '3★ / 4★ Hotels',
          itinerary: [
            { day: 1, title: 'Arrival – Rome', description: 'Arrive at Rome Fiumicino Airport. Check-in. Evening Trastevere neighbourhood walk & dinner.' },
            { day: 2, title: 'Ancient Rome', description: 'Colosseum, Roman Forum, Palatine Hill & Circus Maximus.' },
            { day: 3, title: 'Vatican City', description: 'Vatican Museums, Sistine Chapel, St. Peter\'s Basilica & St. Peter\'s Square.' },
            { day: 4, title: 'Rome Highlights', description: 'Trevi Fountain, Spanish Steps, Pantheon & Piazza Navona. Evening gelato walk.' },
            { day: 5, title: 'Departure', description: 'Breakfast at hotel. Transfer to Rome Airport. Tour ends with beautiful memories.' }
          ]
        },
        {
          id: 16002, nights: 5, duration: '5N/6D', price: 99999, badge: 'Popular',
          name: 'Tuscan Trails',
          image: 'https://cdn.yourholiday.me/static/dynimg/destination/79/600x300/2750961-2750960_italy.jpg',
          highlights: [
            'Return flights from Mumbai/Delhi included',
            'Rome & Florence dual-city coverage',
            'Florence — Uffizi Gallery & Michelangelo\'s David',
            'Tuscany wine country — Chianti & San Gimignano',
            'All transfers & daily breakfast included'
          ],
          groupSize: '2 – 20 People', transport: 'Flight + Train + Coach', accommodation: '4★ Hotels',
          itinerary: [
            { day: 1, title: 'Arrival – Rome', description: 'Arrive & check-in. Evening Trastevere walk & dinner.' },
            { day: 2, title: 'Rome City Tour', description: 'Colosseum, Roman Forum, Vatican Museums & Trevi Fountain.' },
            { day: 3, title: 'Train to Florence', description: 'High-speed train to Florence. Piazza del Duomo, Baptistery & Ponte Vecchio.' },
            { day: 4, title: 'Florence Highlights', description: 'Uffizi Gallery, Michelangelo\'s David at Accademia & Piazzale Michelangelo sunset.' },
            { day: 5, title: 'Tuscany Wine Country', description: 'Day trip to Chianti wine region, San Gimignano medieval towers & Siena.' },
            { day: 6, title: 'Departure', description: 'Breakfast. Transfer to Florence Airport. Tour ends.' }
          ]
        },
        {
          id: 16003, nights: 6, duration: '6N/7D', price: 124999,
          name: 'Italian Splendour',
          image: 'https://cdn.yourholiday.me/static/dynimg/destination/79/600x300/2750961-2750960_italy.jpg',
          highlights: [
            'Return flights from Mumbai/Delhi included',
            'Rome, Florence & Venice full circuit',
            'Venice — gondola ride & St. Mark\'s Square',
            'Murano & Burano island day trip',
            'All meals, transfers & sightseeing included'
          ],
          groupSize: '2 – 15 People', transport: 'Flight + Train + Coach', accommodation: '4★ Hotels',
          itinerary: [
            { day: 1, title: 'Arrival – Rome', description: 'Arrive & check-in. Evening Trastevere walk & dinner.' },
            { day: 2, title: 'Rome City Tour', description: 'Colosseum, Roman Forum, Vatican Museums & Trevi Fountain.' },
            { day: 3, title: 'Florence', description: 'Train to Florence. Duomo, Uffizi Gallery & Ponte Vecchio.' },
            { day: 4, title: 'Tuscany & Train to Venice', description: 'Morning Chianti wine tasting. Afternoon train to Venice.' },
            { day: 5, title: 'Venice Highlights', description: 'Gondola ride, St. Mark\'s Square, Doge\'s Palace & Rialto Bridge.' },
            { day: 6, title: 'Murano & Burano Islands', description: 'Boat to Murano glass-blowing island & Burano colourful fishing village.' },
            { day: 7, title: 'Departure', description: 'Breakfast. Transfer to Venice Marco Polo Airport. Tour ends.' }
          ]
        },
        {
          id: 16004, nights: 7, duration: '7N/8D', price: 154999, badge: 'Premium',
          name: 'Grand Italia',
          image: 'https://cdn.yourholiday.me/static/dynimg/destination/79/600x300/2750961-2750960_italy.jpg',
          highlights: [
            'Return flights from Mumbai/Delhi included',
            'Rome, Florence, Venice, Amalfi Coast & Cinque Terre',
            'Amalfi Coast — Positano & Ravello cliffside villages',
            'Cinque Terre — five colourful coastal villages',
            'All meals, transfers & exclusive experiences'
          ],
          groupSize: '2 – 10 People', transport: 'Flight + Train + Private Coach', accommodation: '4★ / 5★ Hotels',
          itinerary: [
            { day: 1, title: 'Arrival – Rome', description: 'Luxury hotel check-in. Evening Trastevere walk & dinner.' },
            { day: 2, title: 'Rome City Tour', description: 'Colosseum, Roman Forum, Vatican Museums & Trevi Fountain.' },
            { day: 3, title: 'Amalfi Coast', description: 'Drive to Amalfi Coast. Positano, Amalfi town & Ravello cliffside views.' },
            { day: 4, title: 'Florence', description: 'Train to Florence. Duomo, Uffizi Gallery, Accademia & Ponte Vecchio.' },
            { day: 5, title: 'Cinque Terre', description: 'Train to Cinque Terre. Hike between Vernazza, Corniglia & Monterosso villages.' },
            { day: 6, title: 'Venice', description: 'Train to Venice. Gondola ride, St. Mark\'s Square & Doge\'s Palace.' },
            { day: 7, title: 'Murano, Burano & Farewell', description: 'Murano & Burano island boat trip. Farewell dinner at canal-side restaurant.' },
            { day: 8, title: 'Departure', description: 'Breakfast. Transfer to Venice Airport. Tour ends with beautiful memories.' }
          ]
        }
      ]
    },

    'kazakhstan': {
      name: 'Kazakhstan',
      tagline: 'Heart of the Steppe — futuristic cities, canyons & nomadic culture',
      heroImage: 'https://cdn.yourholiday.me/static/dynimg/destination/58/600x300/2750322-2750321_kazakhstan.jpg',
      packages: [
        {
          id: 17001, nights: 4, duration: '4N/5D', price: 39999, badge: 'Bestseller',
          name: 'Almaty Escape',
          image: 'https://cdn.yourholiday.me/static/dynimg/destination/58/600x300/2750322-2750321_kazakhstan.jpg',
          highlights: [
            'Return flights from Mumbai/Delhi included',
            'Almaty — Zenkov Cathedral & Green Bazaar',
            'Big Almaty Lake — turquoise alpine lake',
            'Medeu ice skating rink & Shymbulak ski resort',
            'All transfers & daily breakfast included'
          ],
          groupSize: '2 – 20 People', transport: 'Flight + Coach', accommodation: '3★ / 4★ Hotels',
          itinerary: [
            { day: 1, title: 'Arrival – Almaty', description: 'Arrive at Almaty Airport. Check-in. Evening Arbat pedestrian street & dinner.' },
            { day: 2, title: 'Almaty City Tour', description: 'Zenkov Cathedral, Central State Museum, Green Bazaar & Panfilov Park.' },
            { day: 3, title: 'Big Almaty Lake & Medeu', description: 'Big Almaty Lake turquoise alpine lake. Medeu ice rink & Shymbulak ski resort cable car.' },
            { day: 4, title: 'Charyn Canyon', description: 'Day trip to Charyn Canyon — Kazakhstan\'s Grand Canyon. Valley of Castles walk.' },
            { day: 5, title: 'Departure', description: 'Breakfast at hotel. Transfer to Almaty Airport. Tour ends with beautiful memories.' }
          ]
        },
        {
          id: 17002, nights: 5, duration: '5N/6D', price: 52999, badge: 'Popular',
          name: 'Steppe Wonders',
          image: 'https://cdn.yourholiday.me/static/dynimg/destination/58/600x300/2750322-2750321_kazakhstan.jpg',
          highlights: [
            'Return flights from Mumbai/Delhi included',
            'Almaty & Astana (Nur-Sultan) dual-city coverage',
            'Astana — Baiterek Tower & futuristic skyline',
            'Khan Shatyr — world\'s largest tent structure',
            'All transfers & daily breakfast included'
          ],
          groupSize: '2 – 20 People', transport: 'Flight + Coach', accommodation: '4★ Hotels',
          itinerary: [
            { day: 1, title: 'Arrival – Almaty', description: 'Arrive & check-in. Evening Arbat street & dinner.' },
            { day: 2, title: 'Almaty City Tour', description: 'Zenkov Cathedral, Green Bazaar, Panfilov Park & Central State Museum.' },
            { day: 3, title: 'Big Almaty Lake & Charyn Canyon', description: 'Big Almaty Lake. Afternoon Charyn Canyon Valley of Castles.' },
            { day: 4, title: 'Fly to Astana', description: 'Flight to Astana. Baiterek Tower, Khan Shatyr & Palace of Peace and Reconciliation.' },
            { day: 5, title: 'Astana Highlights', description: 'Nur-Astana Mosque, EXPO 2017 site, Hazrat Sultan Mosque & futuristic skyline walk.' },
            { day: 6, title: 'Departure', description: 'Breakfast. Transfer to Astana Airport. Tour ends.' }
          ]
        },
        {
          id: 17003, nights: 6, duration: '6N/7D', price: 67999,
          name: 'Kazakhstan Explorer',
          image: 'https://cdn.yourholiday.me/static/dynimg/destination/58/600x300/2750322-2750321_kazakhstan.jpg',
          highlights: [
            'Return flights from Mumbai/Delhi included',
            'Almaty, Astana & Turkestan ancient city',
            'Turkestan — Mausoleum of Khoja Ahmed Yasawi (UNESCO)',
            'Nomadic culture experience — yurt stay & eagle hunting',
            'All meals, transfers & sightseeing included'
          ],
          groupSize: '2 – 15 People', transport: 'Flight + Coach', accommodation: '4★ Hotels + Yurt',
          itinerary: [
            { day: 1, title: 'Arrival – Almaty', description: 'Arrive & check-in. Evening Arbat street & dinner.' },
            { day: 2, title: 'Almaty City Tour', description: 'Zenkov Cathedral, Green Bazaar & Central State Museum.' },
            { day: 3, title: 'Big Almaty Lake & Charyn Canyon', description: 'Big Almaty Lake & Charyn Canyon Valley of Castles.' },
            { day: 4, title: 'Fly to Astana', description: 'Flight to Astana. Baiterek Tower, Khan Shatyr & Nur-Astana Mosque.' },
            { day: 5, title: 'Turkestan', description: 'Drive to Turkestan. Mausoleum of Khoja Ahmed Yasawi (UNESCO) & ancient city ruins.' },
            { day: 6, title: 'Nomadic Culture & Yurt Stay', description: 'Eagle hunting demonstration, horse riding & overnight yurt stay on the steppe.' },
            { day: 7, title: 'Departure', description: 'Breakfast. Transfer to Shymkent Airport. Tour ends.' }
          ]
        },
        {
          id: 17004, nights: 7, duration: '7N/8D', price: 87999, badge: 'Premium',
          name: 'Central Asia Grand',
          image: 'https://cdn.yourholiday.me/static/dynimg/destination/58/600x300/2750322-2750321_kazakhstan.jpg',
          highlights: [
            'Return flights from Mumbai/Delhi included',
            'Almaty, Astana, Turkestan & Aral Sea',
            'Aral Sea — ship graveyard & ecological wonder',
            'Baikonur Cosmodrome — world\'s first space launch site',
            'All meals, transfers & exclusive experiences'
          ],
          groupSize: '2 – 10 People', transport: 'Flight + Private Coach', accommodation: '4★ / 5★ Hotels + Yurt',
          itinerary: [
            { day: 1, title: 'Arrival – Almaty', description: 'Luxury hotel check-in. Evening Arbat street & dinner.' },
            { day: 2, title: 'Almaty City Tour', description: 'Zenkov Cathedral, Green Bazaar, Charyn Canyon & Big Almaty Lake.' },
            { day: 3, title: 'Fly to Astana', description: 'Flight to Astana. Baiterek Tower, Khan Shatyr & EXPO 2017 site.' },
            { day: 4, title: 'Turkestan', description: 'Drive to Turkestan. Mausoleum of Khoja Ahmed Yasawi & ancient city.' },
            { day: 5, title: 'Nomadic Culture & Yurt Stay', description: 'Eagle hunting, horse riding & overnight yurt stay on the steppe.' },
            { day: 6, title: 'Aral Sea', description: 'Drive to Aral Sea. Ship graveyard at Moynaq & salt flat landscapes.' },
            { day: 7, title: 'Baikonur Cosmodrome', description: 'Baikonur Cosmodrome tour — world\'s first & largest space launch facility.' },
            { day: 8, title: 'Departure', description: 'Breakfast. Transfer to Baikonur Airport. Tour ends with beautiful memories.' }
          ]
        }
      ]
    },

    'new zealand': {
      name: 'New Zealand',
      tagline: 'Land of the Long White Cloud — fjords, Maori culture & adventure capital',
      heroImage: 'https://cdn.yourholiday.me/static/dynimg/destination/48/600x300/2190141-2190140_rock-formations-on-wharariki-beach-new-zealand--1.jpg',
      packages: [
        {
          id: 18001, nights: 4, duration: '4N/5D', price: 94999, badge: 'Bestseller',
          name: 'Kiwi Highlights',
          image: 'https://cdn.yourholiday.me/static/dynimg/destination/48/600x300/2190141-2190140_rock-formations-on-wharariki-beach-new-zealand--1.jpg',
          highlights: [
            'Return flights from Mumbai/Delhi included',
            'Auckland — Sky Tower & Waitemata Harbour',
            'Rotorua — geothermal wonders & Maori culture',
            'Waitomo Glowworm Caves — magical underground world',
            'All transfers & daily breakfast included'
          ],
          groupSize: '2 – 20 People', transport: 'Flight + Coach', accommodation: '3★ / 4★ Hotels',
          itinerary: [
            { day: 1, title: 'Arrival – Auckland', description: 'Arrive at Auckland Airport. Check-in. Evening Sky Tower & Viaduct Harbour.' },
            { day: 2, title: 'Auckland City Tour', description: 'Sky Tower, Auckland Museum, Mission Bay beach & Waitemata Harbour cruise.' },
            { day: 3, title: 'Waitomo Glowworm Caves', description: 'Drive to Waitomo. Glowworm Caves boat ride through magical underground caverns.' },
            { day: 4, title: 'Rotorua', description: 'Drive to Rotorua. Te Puia geothermal park, Pohutu Geyser & Maori hangi dinner.' },
            { day: 5, title: 'Departure', description: 'Breakfast at hotel. Transfer to Rotorua/Auckland Airport. Tour ends with beautiful memories.' }
          ]
        },
        {
          id: 18002, nights: 5, duration: '5N/6D', price: 119999, badge: 'Popular',
          name: 'Fjord Explorer',
          image: 'https://cdn.yourholiday.me/static/dynimg/destination/48/600x300/2190141-2190140_rock-formations-on-wharariki-beach-new-zealand--1.jpg',
          highlights: [
            'Return flights from Mumbai/Delhi included',
            'Auckland, Rotorua & Queenstown',
            'Milford Sound — UNESCO World Heritage fjord cruise',
            'Queenstown — adventure capital of the world',
            'All transfers & daily breakfast included'
          ],
          groupSize: '2 – 20 People', transport: 'Flight + Coach', accommodation: '4★ Hotels',
          itinerary: [
            { day: 1, title: 'Arrival – Auckland', description: 'Arrive & check-in. Evening Sky Tower & Viaduct Harbour.' },
            { day: 2, title: 'Auckland & Waitomo', description: 'Auckland Museum. Waitomo Glowworm Caves boat ride.' },
            { day: 3, title: 'Rotorua', description: 'Te Puia geothermal park, Pohutu Geyser & Maori hangi dinner.' },
            { day: 4, title: 'Fly to Queenstown', description: 'Flight to Queenstown. Skyline Gondola & Remarkables mountain views.' },
            { day: 5, title: 'Milford Sound', description: 'Full-day Milford Sound cruise — waterfalls, dolphins & fjord scenery.' },
            { day: 6, title: 'Departure', description: 'Breakfast. Transfer to Queenstown Airport. Tour ends.' }
          ]
        },
        {
          id: 18003, nights: 6, duration: '6N/7D', price: 144999,
          name: 'Middle Earth Tour',
          image: 'https://cdn.yourholiday.me/static/dynimg/destination/48/600x300/2190141-2190140_rock-formations-on-wharariki-beach-new-zealand--1.jpg',
          highlights: [
            'Return flights from Mumbai/Delhi included',
            'Auckland, Rotorua, Queenstown & Hobbiton',
            'Hobbiton Movie Set — Lord of the Rings filming location',
            'Bungee jumping & skydiving in Queenstown',
            'All meals, transfers & sightseeing included'
          ],
          groupSize: '2 – 15 People', transport: 'Flight + Coach', accommodation: '4★ Hotels',
          itinerary: [
            { day: 1, title: 'Arrival – Auckland', description: 'Arrive & check-in. Evening Sky Tower & Viaduct Harbour.' },
            { day: 2, title: 'Hobbiton Movie Set', description: 'Drive to Matamata. Hobbiton Movie Set tour — Lord of the Rings & The Hobbit filming location.' },
            { day: 3, title: 'Rotorua', description: 'Te Puia geothermal park, Pohutu Geyser, Wai-O-Tapu & Maori hangi dinner.' },
            { day: 4, title: 'Fly to Queenstown', description: 'Flight to Queenstown. Skyline Gondola & Remarkables views.' },
            { day: 5, title: 'Milford Sound', description: 'Full-day Milford Sound fjord cruise — waterfalls & dolphins.' },
            { day: 6, title: 'Queenstown Adventure', description: 'Bungee jumping at Kawarau Bridge or skydiving over Lake Wakatipu.' },
            { day: 7, title: 'Departure', description: 'Breakfast. Transfer to Queenstown Airport. Tour ends.' }
          ]
        },
        {
          id: 18004, nights: 7, duration: '7N/8D', price: 174999, badge: 'Premium',
          name: 'Grand New Zealand',
          image: 'https://cdn.yourholiday.me/static/dynimg/destination/48/600x300/2190141-2190140_rock-formations-on-wharariki-beach-new-zealand--1.jpg',
          highlights: [
            'Return flights from Mumbai/Delhi included',
            'Auckland, Hobbiton, Rotorua, Queenstown, Milford Sound & Franz Josef Glacier',
            'Franz Josef Glacier — helicopter landing on glacier',
            'Private Milford Sound overnight cruise',
            'All meals, transfers & exclusive experiences'
          ],
          groupSize: '2 – 10 People', transport: 'Flight + Private Coach', accommodation: '4★ / 5★ Hotels',
          itinerary: [
            { day: 1, title: 'Arrival – Auckland', description: 'Luxury hotel check-in. Evening Sky Tower & Viaduct Harbour.' },
            { day: 2, title: 'Hobbiton & Waitomo', description: 'Hobbiton Movie Set tour. Waitomo Glowworm Caves boat ride.' },
            { day: 3, title: 'Rotorua', description: 'Te Puia, Pohutu Geyser, Wai-O-Tapu & Maori hangi dinner.' },
            { day: 4, title: 'Fly to Queenstown', description: 'Flight to Queenstown. Skyline Gondola & Remarkables views.' },
            { day: 5, title: 'Milford Sound Overnight Cruise', description: 'Private Milford Sound overnight cruise — waterfalls, dolphins & stargazing.' },
            { day: 6, title: 'Franz Josef Glacier', description: 'Drive to Franz Josef. Helicopter landing on glacier & ice walk.' },
            { day: 7, title: 'Queenstown Adventure', description: 'Bungee jumping, skydiving or jet boating on Shotover River.' },
            { day: 8, title: 'Departure', description: 'Breakfast. Transfer to Queenstown Airport. Tour ends with beautiful memories.' }
          ]
        }
      ]
    },

    'cambodia': {
      name: 'Cambodia',
      tagline: 'Kingdom of Wonder — ancient temples, Mekong life & timeless culture',
      heroImage: 'https://cdn.yourholiday.me/static/dynimg/destination/60/600x300/3160621-3160620_cambodia.jpg',
      packages: [
        {
          id: 13001, nights: 4, duration: '4N/5D', price: 28999, badge: 'Bestseller',
          name: 'Angkor Discovery',
          image: 'https://cdn.yourholiday.me/static/dynimg/destination/60/600x300/3160621-3160620_cambodia.jpg',
          highlights: [
            'Return flights from Mumbai/Delhi included',
            'Angkor Wat — world\'s largest religious monument',
            'Angkor Thom & Bayon Temple — stone faces',
            'Ta Prohm — jungle temple of Tomb Raider fame',
            'All transfers & daily breakfast included'
          ],
          groupSize: '2 – 20 People', transport: 'Flight + Tuk-tuk + Coach', accommodation: '3★ / 4★ Hotels',
          itinerary: [
            { day: 1, title: 'Arrival – Siem Reap', description: 'Arrive at Siem Reap Airport. Check-in. Evening Pub Street & Angkor Night Market.' },
            { day: 2, title: 'Angkor Wat Sunrise', description: 'Sunrise at Angkor Wat. Explore the main temple complex. Afternoon Angkor Thom & Bayon Temple.' },
            { day: 3, title: 'Ta Prohm & Banteay Srei', description: 'Ta Prohm jungle temple. Banteay Srei — pink sandstone carvings. Tonle Sap Lake sunset cruise.' },
            { day: 4, title: 'Phnom Penh Day Trip', description: 'Flight to Phnom Penh. Royal Palace, Silver Pagoda & National Museum.' },
            { day: 5, title: 'Departure', description: 'Breakfast at hotel. Transfer to airport. Tour ends with beautiful memories.' }
          ]
        },
        {
          id: 13002, nights: 5, duration: '5N/6D', price: 36999, badge: 'Popular',
          name: 'Khmer Heritage',
          image: 'https://cdn.yourholiday.me/static/dynimg/destination/60/600x300/3160621-3160620_cambodia.jpg',
          highlights: [
            'Return flights from Mumbai/Delhi included',
            'Siem Reap & Phnom Penh dual coverage',
            'Angkor Wat, Angkor Thom & Ta Prohm',
            'Killing Fields & Tuol Sleng Museum — history',
            'All transfers & daily breakfast included'
          ],
          groupSize: '2 – 20 People', transport: 'Flight + Coach', accommodation: '4★ Hotels',
          itinerary: [
            { day: 1, title: 'Arrival – Siem Reap', description: 'Arrive & check-in. Evening Pub Street & Angkor Night Market.' },
            { day: 2, title: 'Angkor Wat Sunrise & Angkor Thom', description: 'Sunrise at Angkor Wat. Angkor Thom, Bayon Temple & Baphuon.' },
            { day: 3, title: 'Ta Prohm & Banteay Srei', description: 'Ta Prohm jungle temple. Banteay Srei pink sandstone. Tonle Sap Lake cruise.' },
            { day: 4, title: 'Phnom Penh', description: 'Flight to Phnom Penh. Royal Palace, Silver Pagoda & National Museum.' },
            { day: 5, title: 'Killing Fields & Tuol Sleng', description: 'Choeung Ek Killing Fields & Tuol Sleng Genocide Museum. Riverside evening walk.' },
            { day: 6, title: 'Departure', description: 'Breakfast. Transfer to Phnom Penh Airport. Tour ends.' }
          ]
        },
        {
          id: 13003, nights: 6, duration: '6N/7D', price: 47999,
          name: 'Cambodia Explorer',
          image: 'https://cdn.yourholiday.me/static/dynimg/destination/60/600x300/3160621-3160620_cambodia.jpg',
          highlights: [
            'Return flights from Mumbai/Delhi included',
            'Siem Reap, Phnom Penh & Sihanoukville beach',
            'Sihanoukville — pristine beaches & island hopping',
            'Koh Rong island — bioluminescent waters',
            'All meals, transfers & sightseeing included'
          ],
          groupSize: '2 – 15 People', transport: 'Flight + Coach + Ferry', accommodation: '4★ Hotels',
          itinerary: [
            { day: 1, title: 'Arrival – Siem Reap', description: 'Arrive & check-in. Evening Pub Street & Angkor Night Market.' },
            { day: 2, title: 'Angkor Wat & Angkor Thom', description: 'Sunrise at Angkor Wat. Angkor Thom & Bayon Temple.' },
            { day: 3, title: 'Ta Prohm & Tonle Sap', description: 'Ta Prohm jungle temple. Banteay Srei. Tonle Sap Lake sunset cruise.' },
            { day: 4, title: 'Phnom Penh', description: 'Royal Palace, Silver Pagoda, Killing Fields & Tuol Sleng Museum.' },
            { day: 5, title: 'Sihanoukville', description: 'Bus/flight to Sihanoukville. Serendipity Beach & Ochheuteal Beach.' },
            { day: 6, title: 'Koh Rong Island', description: 'Ferry to Koh Rong. Snorkeling, bioluminescent beach walk at night.' },
            { day: 7, title: 'Departure', description: 'Breakfast. Return to Sihanoukville. Transfer to airport. Tour ends.' }
          ]
        },
        {
          id: 13004, nights: 7, duration: '7N/8D', price: 62999, badge: 'Premium',
          name: 'Mekong Journey',
          image: 'https://cdn.yourholiday.me/static/dynimg/destination/60/600x300/3160621-3160620_cambodia.jpg',
          highlights: [
            'Return flights from Mumbai/Delhi included',
            'Siem Reap, Phnom Penh, Sihanoukville & Mekong River',
            'Mekong River cruise — floating villages',
            'Luxury resort stay at Koh Rong Samloem',
            'All meals, transfers & exclusive experiences'
          ],
          groupSize: '2 – 10 People', transport: 'Flight + Private Coach + Ferry', accommodation: '4★ / 5★ Hotels',
          itinerary: [
            { day: 1, title: 'Arrival – Siem Reap', description: 'Luxury hotel check-in. Evening Pub Street & Angkor Night Market.' },
            { day: 2, title: 'Angkor Wat Sunrise & Angkor Thom', description: 'Sunrise at Angkor Wat. Angkor Thom, Bayon & Baphuon.' },
            { day: 3, title: 'Ta Prohm & Banteay Srei', description: 'Ta Prohm jungle temple. Banteay Srei. Tonle Sap Lake cruise.' },
            { day: 4, title: 'Phnom Penh', description: 'Royal Palace, Silver Pagoda, Killing Fields & Tuol Sleng Museum.' },
            { day: 5, title: 'Mekong River Cruise', description: 'Private Mekong River cruise — floating villages, silk weaving & local markets.' },
            { day: 6, title: 'Sihanoukville & Koh Rong Samloem', description: 'Ferry to Koh Rong Samloem. Luxury resort check-in. Snorkeling & beach leisure.' },
            { day: 7, title: 'Island Leisure & Bioluminescence', description: 'Kayaking, snorkeling & bioluminescent beach walk at night.' },
            { day: 8, title: 'Departure', description: 'Breakfast. Return ferry. Transfer to airport. Tour ends with beautiful memories.' }
          ]
        }
      ]
    },

    'georgia': {
      name: 'Georgia',
      tagline: 'Caucasus gem — ancient monasteries, mountain valleys & world-class wine',
      heroImage: 'https://cdn.yourholiday.me/static/dynimg/destination/7/600x300/2185866-2185865_georgia-main-image.jpg',
      packages: [
        {
          id: 14001, nights: 4, duration: '4N/5D', price: 34999, badge: 'Bestseller',
          name: 'Tbilisi Trails',
          image: 'https://cdn.yourholiday.me/static/dynimg/destination/7/600x300/2185866-2185865_georgia-main-image.jpg',
          highlights: [
            'Return flights from Mumbai/Delhi included',
            'Tbilisi Old Town — Narikala Fortress & sulfur baths',
            'Mtskheta — UNESCO ancient capital of Georgia',
            'Jvari Monastery & Svetitskhoveli Cathedral',
            'All transfers & daily breakfast included'
          ],
          groupSize: '2 – 20 People', transport: 'Flight + Coach', accommodation: '3★ / 4★ Hotels',
          itinerary: [
            { day: 1, title: 'Arrival – Tbilisi', description: 'Arrive at Tbilisi Airport. Check-in. Evening Rustaveli Avenue & Rike Park.' },
            { day: 2, title: 'Tbilisi Old Town', description: 'Narikala Fortress, Metekhi Church, sulfur baths, Abanotubani & cable car to fortress.' },
            { day: 3, title: 'Mtskheta Day Trip', description: 'Jvari Monastery, Svetitskhoveli Cathedral & Mtskheta old town walk.' },
            { day: 4, title: 'Kakheti Wine Region', description: 'Drive to Kakheti. Sighnaghi — City of Love. Wine tasting at local winery.' },
            { day: 5, title: 'Departure', description: 'Breakfast at hotel. Transfer to Tbilisi Airport. Tour ends with beautiful memories.' }
          ]
        },
        {
          id: 14002, nights: 5, duration: '5N/6D', price: 44999, badge: 'Popular',
          name: 'Caucasus Charm',
          image: 'https://cdn.yourholiday.me/static/dynimg/destination/7/600x300/2185866-2185865_georgia-main-image.jpg',
          highlights: [
            'Return flights from Mumbai/Delhi included',
            'Tbilisi, Mtskheta & Kazbegi mountain town',
            'Gergeti Trinity Church — iconic Caucasus view',
            'Gudauri ski resort & mountain scenery',
            'All transfers & daily breakfast included'
          ],
          groupSize: '2 – 20 People', transport: 'Flight + Coach', accommodation: '4★ Hotels',
          itinerary: [
            { day: 1, title: 'Arrival – Tbilisi', description: 'Arrive & check-in. Evening Rustaveli Avenue & Rike Park.' },
            { day: 2, title: 'Tbilisi Old Town', description: 'Narikala Fortress, Metekhi Church, sulfur baths & cable car.' },
            { day: 3, title: 'Mtskheta & Gudauri', description: 'Jvari Monastery, Svetitskhoveli Cathedral. Drive to Gudauri mountain resort.' },
            { day: 4, title: 'Kazbegi & Gergeti Trinity Church', description: 'Drive to Kazbegi. Gergeti Trinity Church hike with Mt. Kazbek backdrop.' },
            { day: 5, title: 'Kakheti Wine Region', description: 'Sighnaghi — City of Love. Wine tasting & Bodbe Monastery.' },
            { day: 6, title: 'Departure', description: 'Breakfast. Transfer to Tbilisi Airport. Tour ends.' }
          ]
        },
        {
          id: 14003, nights: 6, duration: '6N/7D', price: 57999,
          name: 'Georgia Explorer',
          image: 'https://cdn.yourholiday.me/static/dynimg/destination/7/600x300/2185866-2185865_georgia-main-image.jpg',
          highlights: [
            'Return flights from Mumbai/Delhi included',
            'Tbilisi, Kazbegi, Kakheti & Batumi Black Sea',
            'Batumi — Black Sea resort city & botanical garden',
            'Vardzia cave monastery — 12th century rock city',
            'All meals, transfers & sightseeing included'
          ],
          groupSize: '2 – 15 People', transport: 'Flight + Coach', accommodation: '4★ Hotels',
          itinerary: [
            { day: 1, title: 'Arrival – Tbilisi', description: 'Arrive & check-in. Evening Rustaveli Avenue & Rike Park.' },
            { day: 2, title: 'Tbilisi Old Town', description: 'Narikala Fortress, Metekhi Church, sulfur baths & cable car.' },
            { day: 3, title: 'Kazbegi & Gergeti Trinity Church', description: 'Drive to Kazbegi. Gergeti Trinity Church hike. Gudauri mountain views.' },
            { day: 4, title: 'Kakheti Wine Region', description: 'Sighnaghi, Bodbe Monastery & wine tasting at Telavi winery.' },
            { day: 5, title: 'Batumi', description: 'Drive to Batumi. Black Sea beach, Batumi Boulevard & Botanical Garden.' },
            { day: 6, title: 'Vardzia Cave Monastery', description: 'Vardzia 12th-century rock-hewn monastery & Rabati Castle.' },
            { day: 7, title: 'Departure', description: 'Breakfast. Transfer to Batumi/Tbilisi Airport. Tour ends.' }
          ]
        },
        {
          id: 14004, nights: 7, duration: '7N/8D', price: 74999, badge: 'Premium',
          name: 'Silk Road Journey',
          image: 'https://cdn.yourholiday.me/static/dynimg/destination/7/600x300/2185866-2185865_georgia-main-image.jpg',
          highlights: [
            'Return flights from Mumbai/Delhi included',
            'Tbilisi, Kazbegi, Kakheti, Batumi & Svaneti',
            'Svaneti — UNESCO medieval towers & glaciers',
            'Mestia — trekking in the Greater Caucasus',
            'All meals, transfers & exclusive experiences'
          ],
          groupSize: '2 – 10 People', transport: 'Flight + Private Coach', accommodation: '4★ / 5★ Hotels',
          itinerary: [
            { day: 1, title: 'Arrival – Tbilisi', description: 'Luxury hotel check-in. Evening Rustaveli Avenue & Rike Park.' },
            { day: 2, title: 'Tbilisi Old Town', description: 'Narikala Fortress, Metekhi Church, sulfur baths & cable car.' },
            { day: 3, title: 'Kazbegi & Gergeti Trinity Church', description: 'Gergeti Trinity Church hike. Mt. Kazbek views & Gudauri.' },
            { day: 4, title: 'Kakheti Wine Region', description: 'Sighnaghi, Bodbe Monastery & private wine tasting at Telavi.' },
            { day: 5, title: 'Batumi', description: 'Black Sea beach, Batumi Boulevard, Botanical Garden & Vardzia.' },
            { day: 6, title: 'Fly to Svaneti – Mestia', description: 'Flight to Mestia. Svaneti UNESCO towers, Svan Museum & glacier views.' },
            { day: 7, title: 'Mestia Trekking', description: 'Trek to Chalaadi Glacier. Hatsvali ski resort & mountain panoramas.' },
            { day: 8, title: 'Departure', description: 'Breakfast. Flight back to Tbilisi. Transfer to airport. Tour ends with beautiful memories.' }
          ]
        }
      ]
    },

    'greece': {
      name: 'Greece',
      tagline: 'Cradle of civilization — ancient ruins, whitewashed islands & azure seas',
      heroImage: 'https://cdn.yourholiday.me/static/dynimg/destination/5/600x300/2750959-2750958_greece.jpg',
      packages: [
        {
          id: 15001, nights: 4, duration: '4N/5D', price: 64999, badge: 'Bestseller',
          name: 'Athens Escape',
          image: 'https://cdn.yourholiday.me/static/dynimg/destination/5/600x300/2750959-2750958_greece.jpg',
          highlights: [
            'Return flights from Mumbai/Delhi included',
            'Acropolis & Parthenon — ancient Athens',
            'Plaka old neighbourhood & Monastiraki flea market',
            'Cape Sounion — Temple of Poseidon at sunset',
            'All transfers & daily breakfast included'
          ],
          groupSize: '2 – 20 People', transport: 'Flight + Coach', accommodation: '3★ / 4★ Hotels',
          itinerary: [
            { day: 1, title: 'Arrival – Athens', description: 'Arrive at Athens Airport. Check-in. Evening Plaka neighbourhood walk & dinner.' },
            { day: 2, title: 'Athens City Tour', description: 'Acropolis, Parthenon, Erechtheion, Acropolis Museum & Monastiraki flea market.' },
            { day: 3, title: 'Cape Sounion & Piraeus', description: 'Cape Sounion — Temple of Poseidon at sunset. Piraeus harbour walk.' },
            { day: 4, title: 'Delphi Day Trip', description: 'Day trip to Delphi — Oracle of Delphi, Temple of Apollo & Delphi Museum.' },
            { day: 5, title: 'Departure', description: 'Breakfast at hotel. Transfer to Athens Airport. Tour ends with beautiful memories.' }
          ]
        },
        {
          id: 15002, nights: 5, duration: '5N/6D', price: 84999, badge: 'Popular',
          name: 'Aegean Dreams',
          image: 'https://cdn.yourholiday.me/static/dynimg/destination/5/600x300/2750959-2750958_greece.jpg',
          highlights: [
            'Return flights from Mumbai/Delhi included',
            'Athens & Santorini dual coverage',
            'Santorini — Oia sunset & caldera views',
            'Fira & Imerovigli cliffside walk',
            'All transfers & daily breakfast included'
          ],
          groupSize: '2 – 20 People', transport: 'Flight + Ferry + Coach', accommodation: '4★ Hotels',
          itinerary: [
            { day: 1, title: 'Arrival – Athens', description: 'Arrive & check-in. Evening Plaka neighbourhood walk.' },
            { day: 2, title: 'Athens City Tour', description: 'Acropolis, Parthenon, Acropolis Museum & Monastiraki.' },
            { day: 3, title: 'Ferry to Santorini', description: 'Ferry to Santorini. Check-in to cliffside hotel. Fira town evening walk.' },
            { day: 4, title: 'Santorini Highlights', description: 'Oia village & iconic sunset. Imerovigli cliffside walk. Black sand beach at Perissa.' },
            { day: 5, title: 'Akrotiri & Wine Tasting', description: 'Akrotiri prehistoric ruins. Santo Wines vineyard with caldera views & wine tasting.' },
            { day: 6, title: 'Departure', description: 'Breakfast. Transfer to Santorini Airport. Tour ends.' }
          ]
        },
        {
          id: 15003, nights: 6, duration: '6N/7D', price: 109999,
          name: 'Greek Odyssey',
          image: 'https://cdn.yourholiday.me/static/dynimg/destination/5/600x300/2750959-2750958_greece.jpg',
          highlights: [
            'Return flights from Mumbai/Delhi included',
            'Athens, Santorini & Mykonos',
            'Mykonos — windmills, Little Venice & party beaches',
            'Delos Island — UNESCO archaeological site',
            'All meals, transfers & sightseeing included'
          ],
          groupSize: '2 – 15 People', transport: 'Flight + Ferry + Coach', accommodation: '4★ Hotels',
          itinerary: [
            { day: 1, title: 'Arrival – Athens', description: 'Arrive & check-in. Evening Plaka neighbourhood walk.' },
            { day: 2, title: 'Athens City Tour', description: 'Acropolis, Parthenon, Acropolis Museum & Monastiraki.' },
            { day: 3, title: 'Ferry to Santorini', description: 'Ferry to Santorini. Fira town & cliffside hotel check-in.' },
            { day: 4, title: 'Santorini Highlights', description: 'Oia sunset, Imerovigli walk, Perissa black sand beach & wine tasting.' },
            { day: 5, title: 'Ferry to Mykonos', description: 'Ferry to Mykonos. Windmills, Little Venice & Mykonos Town walk.' },
            { day: 6, title: 'Delos Island & Beaches', description: 'Boat to Delos UNESCO ruins. Afternoon at Paradise Beach or Super Paradise Beach.' },
            { day: 7, title: 'Departure', description: 'Breakfast. Transfer to Mykonos Airport. Tour ends.' }
          ]
        },
        {
          id: 15004, nights: 7, duration: '7N/8D', price: 139999, badge: 'Premium',
          name: 'Island Hopper',
          image: 'https://cdn.yourholiday.me/static/dynimg/destination/5/600x300/2750959-2750958_greece.jpg',
          highlights: [
            'Return flights from Mumbai/Delhi included',
            'Athens, Santorini, Mykonos & Crete',
            'Crete — Knossos Palace & Samaria Gorge trek',
            'Private yacht island hopping experience',
            'All meals, transfers & exclusive experiences'
          ],
          groupSize: '2 – 10 People', transport: 'Flight + Ferry + Private Coach', accommodation: '4★ / 5★ Hotels',
          itinerary: [
            { day: 1, title: 'Arrival – Athens', description: 'Luxury hotel check-in. Evening Plaka neighbourhood & dinner.' },
            { day: 2, title: 'Athens City Tour', description: 'Acropolis, Parthenon, Acropolis Museum, Monastiraki & Cape Sounion.' },
            { day: 3, title: 'Santorini', description: 'Ferry to Santorini. Fira, Oia sunset & cliffside hotel.' },
            { day: 4, title: 'Santorini Deep Dive', description: 'Imerovigli walk, Akrotiri ruins, Perissa beach & wine tasting.' },
            { day: 5, title: 'Mykonos', description: 'Ferry to Mykonos. Windmills, Little Venice & Delos Island ruins.' },
            { day: 6, title: 'Crete', description: 'Fly to Crete. Knossos Palace & Heraklion Archaeological Museum.' },
            { day: 7, title: 'Samaria Gorge & Private Yacht', description: 'Samaria Gorge trek. Private yacht sunset cruise around the island.' },
            { day: 8, title: 'Departure', description: 'Breakfast. Transfer to Heraklion Airport. Tour ends with beautiful memories.' }
          ]
        }
      ]
    },

    'turkey': {
      name: 'Turkey',
      tagline: 'Where East meets West — ancient ruins, hot air balloons & turquoise coast',
      heroImage: 'https://cdn.yourholiday.me/static/dynimg/destination/45/600x300/2750974-2750973_turkey.jpg',
      packages: [
        {
          id: 11001, nights: 4, duration: '4N/5D', price: 54999, badge: 'Bestseller',
          name: 'Istanbul Escape',
          image: 'https://cdn.yourholiday.me/static/dynimg/destination/45/600x300/2750974-2750973_turkey.jpg',
          highlights: [
            'Return flights from Mumbai/Delhi included',
            'Hagia Sophia & Blue Mosque — iconic Istanbul',
            'Topkapi Palace & Grand Bazaar',
            'Bosphorus cruise between two continents',
            'All transfers & daily breakfast included'
          ],
          groupSize: '2 – 20 People', transport: 'Flight + Coach', accommodation: '3★ / 4★ Hotels',
          itinerary: [
            { day: 1, title: 'Arrival – Istanbul', description: 'Arrive at Istanbul Airport. Check-in. Evening Galata Bridge walk & Bosphorus view.' },
            { day: 2, title: 'Old City Tour', description: 'Hagia Sophia, Blue Mosque, Topkapi Palace, Basilica Cistern & Hippodrome.' },
            { day: 3, title: 'Grand Bazaar & Bosphorus Cruise', description: 'Grand Bazaar shopping, Spice Bazaar & Bosphorus cruise between Europe and Asia.' },
            { day: 4, title: 'Princes Islands & Dolmabahce', description: 'Ferry to Princes Islands. Dolmabahce Palace & Taksim Square evening.' },
            { day: 5, title: 'Departure', description: 'Breakfast at hotel. Transfer to Istanbul Airport. Tour ends with beautiful memories.' }
          ]
        },
        {
          id: 11002, nights: 5, duration: '5N/6D', price: 72999, badge: 'Popular',
          name: 'Cappadocia Dreams',
          image: 'https://cdn.yourholiday.me/static/dynimg/destination/45/600x300/2750974-2750973_turkey.jpg',
          highlights: [
            'Return flights from Mumbai/Delhi included',
            'Istanbul & Cappadocia dual coverage',
            'Hot air balloon ride over fairy chimneys',
            'Underground cities & cave hotel stay',
            'All transfers & daily breakfast included'
          ],
          groupSize: '2 – 20 People', transport: 'Flight + Coach', accommodation: '4★ Hotels + Cave Hotel',
          itinerary: [
            { day: 1, title: 'Arrival – Istanbul', description: 'Arrive & check-in. Evening Galata Bridge & Bosphorus view.' },
            { day: 2, title: 'Istanbul City Tour', description: 'Hagia Sophia, Blue Mosque, Topkapi Palace & Grand Bazaar.' },
            { day: 3, title: 'Fly to Cappadocia', description: 'Flight to Cappadocia. Check-in to cave hotel. Goreme Open Air Museum & fairy chimneys.' },
            { day: 4, title: 'Hot Air Balloon & Underground City', description: 'Sunrise hot air balloon ride. Derinkuyu Underground City & Ihlara Valley.' },
            { day: 5, title: 'Uchisar & Devrent Valley', description: 'Uchisar Castle, Devrent Valley & Pasabag Monks Valley. Pottery workshop.' },
            { day: 6, title: 'Departure', description: 'Breakfast. Transfer to Cappadocia Airport. Tour ends.' }
          ]
        },
        {
          id: 11003, nights: 6, duration: '6N/7D', price: 94999,
          name: 'Turkey Explorer',
          image: 'https://cdn.yourholiday.me/static/dynimg/destination/45/600x300/2750974-2750973_turkey.jpg',
          highlights: [
            'Return flights from Mumbai/Delhi included',
            'Istanbul, Cappadocia & Pamukkale',
            'Pamukkale — white travertine terraces & Hierapolis',
            'Ephesus ancient ruins — Library of Celsus',
            'All meals, transfers & sightseeing included'
          ],
          groupSize: '2 – 15 People', transport: 'Flight + Coach', accommodation: '4★ Hotels + Cave Hotel',
          itinerary: [
            { day: 1, title: 'Arrival – Istanbul', description: 'Arrive & check-in. Evening Galata Bridge & Bosphorus view.' },
            { day: 2, title: 'Istanbul City Tour', description: 'Hagia Sophia, Blue Mosque, Topkapi Palace, Grand Bazaar & Bosphorus cruise.' },
            { day: 3, title: 'Fly to Cappadocia', description: 'Flight to Cappadocia. Cave hotel check-in. Goreme Open Air Museum.' },
            { day: 4, title: 'Hot Air Balloon & Underground City', description: 'Sunrise hot air balloon ride. Derinkuyu Underground City & Ihlara Valley.' },
            { day: 5, title: 'Pamukkale', description: 'Drive to Pamukkale. White travertine terraces, Hierapolis ancient city & thermal pools.' },
            { day: 6, title: 'Ephesus', description: 'Ephesus ancient ruins — Library of Celsus, Great Theatre & Temple of Artemis.' },
            { day: 7, title: 'Departure', description: 'Breakfast. Transfer to Izmir Airport. Tour ends.' }
          ]
        },
        {
          id: 11004, nights: 7, duration: '7N/8D', price: 119999, badge: 'Premium',
          name: 'Grand Turkey',
          image: 'https://cdn.yourholiday.me/static/dynimg/destination/45/600x300/2750974-2750973_turkey.jpg',
          highlights: [
            'Return flights from Mumbai/Delhi included',
            'Istanbul, Cappadocia, Pamukkale, Ephesus & Antalya',
            'Antalya — turquoise coast & old harbour',
            'Private hot air balloon & yacht cruise',
            'All meals, transfers & exclusive experiences'
          ],
          groupSize: '2 – 10 People', transport: 'Flight + Private Coach', accommodation: '4★ / 5★ Hotels + Cave Hotel',
          itinerary: [
            { day: 1, title: 'Arrival – Istanbul', description: 'Luxury hotel check-in. Evening Bosphorus dinner cruise.' },
            { day: 2, title: 'Istanbul City Tour', description: 'Hagia Sophia, Blue Mosque, Topkapi Palace, Grand Bazaar & Bosphorus cruise.' },
            { day: 3, title: 'Cappadocia', description: 'Flight to Cappadocia. Cave hotel. Goreme Open Air Museum & fairy chimneys.' },
            { day: 4, title: 'Hot Air Balloon & Underground City', description: 'Private sunrise hot air balloon. Derinkuyu Underground City & Ihlara Valley.' },
            { day: 5, title: 'Pamukkale & Ephesus', description: 'Pamukkale travertines & Hierapolis. Ephesus ancient ruins.' },
            { day: 6, title: 'Antalya', description: 'Drive to Antalya. Old harbour, Kaleici old town & Duden Waterfalls.' },
            { day: 7, title: 'Turquoise Coast Yacht Cruise', description: 'Private yacht cruise along the turquoise coast. Snorkeling & beach leisure.' },
            { day: 8, title: 'Departure', description: 'Breakfast. Transfer to Antalya Airport. Tour ends with beautiful memories.' }
          ]
        }
      ]
    },

    'vietnam': {
      name: 'Vietnam',
      tagline: 'S-shaped wonder — emerald bays, ancient towns & vibrant street life',
      heroImage: 'https://cdn.yourholiday.me/static/dynimg/destination/35/600x300/3078047-3078046_vietnam.jpg',
      packages: [
        {
          id: 12001, nights: 4, duration: '4N/5D', price: 34999, badge: 'Bestseller',
          name: 'Hanoi Highlights',
          image: 'https://cdn.yourholiday.me/static/dynimg/destination/35/600x300/3078047-3078046_vietnam.jpg',
          highlights: [
            'Return flights from Mumbai/Delhi included',
            'Hanoi — Hoan Kiem Lake & Old Quarter',
            'Ha Long Bay — UNESCO World Heritage cruise',
            'Trang An Grottoes boat ride',
            'All transfers & daily breakfast included'
          ],
          groupSize: '2 – 20 People', transport: 'Flight + Coach + Cruise', accommodation: '3★ / 4★ Hotels',
          itinerary: [
            { day: 1, title: 'Arrival – Hanoi', description: 'Arrive at Noi Bai Airport. Check-in. Evening Hoan Kiem Lake & Old Quarter street food walk.' },
            { day: 2, title: 'Hanoi City Tour', description: 'Ho Chi Minh Mausoleum, Temple of Literature, One Pillar Pagoda & Hoan Kiem Lake.' },
            { day: 3, title: 'Ha Long Bay Cruise', description: 'Drive to Ha Long Bay. Board cruise. Kayaking through limestone karsts & cave exploration.' },
            { day: 4, title: 'Ha Long & Return to Hanoi', description: 'Morning on cruise. Tai Chi on deck. Return to Hanoi. Trang An Grottoes boat ride.' },
            { day: 5, title: 'Departure', description: 'Breakfast at hotel. Transfer to Noi Bai Airport. Tour ends with beautiful memories.' }
          ]
        },
        {
          id: 12002, nights: 5, duration: '5N/6D', price: 44999, badge: 'Popular',
          name: 'Ha Long Escape',
          image: 'https://cdn.yourholiday.me/static/dynimg/destination/35/600x300/3078047-3078046_vietnam.jpg',
          highlights: [
            'Return flights from Mumbai/Delhi included',
            'Hanoi, Ha Long Bay & Hoi An',
            'Hoi An Ancient Town — UNESCO World Heritage',
            'Lantern making & cooking class in Hoi An',
            'All transfers & daily breakfast included'
          ],
          groupSize: '2 – 20 People', transport: 'Flight + Coach + Cruise', accommodation: '4★ Hotels',
          itinerary: [
            { day: 1, title: 'Arrival – Hanoi', description: 'Arrive & check-in. Evening Hoan Kiem Lake & Old Quarter.' },
            { day: 2, title: 'Hanoi City Tour', description: 'Ho Chi Minh Mausoleum, Temple of Literature & One Pillar Pagoda.' },
            { day: 3, title: 'Ha Long Bay Cruise', description: 'Ha Long Bay cruise — kayaking, cave exploration & sunset on deck.' },
            { day: 4, title: 'Fly to Da Nang – Hoi An', description: 'Return to Hanoi. Fly to Da Nang. Transfer to Hoi An Ancient Town.' },
            { day: 5, title: 'Hoi An Exploration', description: 'Hoi An Ancient Town walk, Japanese Covered Bridge, lantern making & cooking class.' },
            { day: 6, title: 'Departure', description: 'Breakfast. Transfer to Da Nang Airport. Tour ends.' }
          ]
        },
        {
          id: 12003, nights: 6, duration: '6N/7D', price: 57999,
          name: 'Vietnam Explorer',
          image: 'https://cdn.yourholiday.me/static/dynimg/destination/35/600x300/3078047-3078046_vietnam.jpg',
          highlights: [
            'Return flights from Mumbai/Delhi included',
            'Hanoi, Ha Long Bay, Hoi An & Ho Chi Minh City',
            'Cu Chi Tunnels — Vietnam War history',
            'Mekong Delta boat ride & floating market',
            'All meals, transfers & sightseeing included'
          ],
          groupSize: '2 – 15 People', transport: 'Flight + Coach + Cruise', accommodation: '4★ Hotels',
          itinerary: [
            { day: 1, title: 'Arrival – Hanoi', description: 'Arrive & check-in. Evening Hoan Kiem Lake & Old Quarter.' },
            { day: 2, title: 'Ha Long Bay Cruise', description: 'Ha Long Bay — kayaking, cave exploration & sunset on deck.' },
            { day: 3, title: 'Hanoi to Hoi An', description: 'Return to Hanoi. Fly to Da Nang. Hoi An Ancient Town evening walk.' },
            { day: 4, title: 'Hoi An & My Son Sanctuary', description: 'Hoi An Ancient Town, Japanese Bridge & My Son Hindu sanctuary ruins.' },
            { day: 5, title: 'Fly to Ho Chi Minh City', description: 'Flight to HCMC. Reunification Palace, War Remnants Museum & Ben Thanh Market.' },
            { day: 6, title: 'Cu Chi Tunnels & Mekong Delta', description: 'Cu Chi Tunnels morning. Afternoon Mekong Delta boat ride & floating market.' },
            { day: 7, title: 'Departure', description: 'Breakfast. Transfer to Tan Son Nhat Airport. Tour ends.' }
          ]
        },
        {
          id: 12004, nights: 7, duration: '7N/8D', price: 74999, badge: 'Premium',
          name: 'Grand Vietnam',
          image: 'https://cdn.yourholiday.me/static/dynimg/destination/35/600x300/3078047-3078046_vietnam.jpg',
          highlights: [
            'Return flights from Mumbai/Delhi included',
            'Hanoi, Ha Long Bay, Hue, Hoi An & Ho Chi Minh City',
            'Hue Imperial Citadel & royal tombs',
            'Private Ha Long Bay overnight cruise',
            'All meals, transfers & exclusive experiences'
          ],
          groupSize: '2 – 10 People', transport: 'Flight + Private Coach + Cruise', accommodation: '4★ / 5★ Hotels',
          itinerary: [
            { day: 1, title: 'Arrival – Hanoi', description: 'Luxury hotel check-in. Evening Hoan Kiem Lake & Old Quarter.' },
            { day: 2, title: 'Hanoi City Tour', description: 'Ho Chi Minh Mausoleum, Temple of Literature & One Pillar Pagoda.' },
            { day: 3, title: 'Ha Long Bay Private Cruise', description: 'Private Ha Long Bay cruise — kayaking, cave exploration & sunset dinner on deck.' },
            { day: 4, title: 'Hue Imperial City', description: 'Fly to Hue. Imperial Citadel, Thien Mu Pagoda & royal tombs by dragon boat.' },
            { day: 5, title: 'Hoi An', description: 'Drive to Hoi An. Ancient Town, Japanese Bridge, lantern making & cooking class.' },
            { day: 6, title: 'Ho Chi Minh City', description: 'Fly to HCMC. Reunification Palace, War Remnants Museum & Ben Thanh Market.' },
            { day: 7, title: 'Cu Chi Tunnels & Mekong Delta', description: 'Cu Chi Tunnels. Mekong Delta boat ride, floating market & farewell dinner.' },
            { day: 8, title: 'Departure', description: 'Breakfast. Transfer to Tan Son Nhat Airport. Tour ends with beautiful memories.' }
          ]
        }
      ]
    },

    'australia': {
      name: 'Australia',
      tagline: 'Land Down Under — iconic landmarks, wildlife & stunning coastlines',
      heroImage: 'https://cdn.yourholiday.me/static/dynimg/destination/58/600x300/2210344-2210343_australia.jpg',
      packages: [
        {
          id: 9001, nights: 4, duration: '4N/5D', price: 89999, badge: 'Bestseller',
          name: 'Sydney Sojourn',
          image: 'https://cdn.yourholiday.me/static/dynimg/destination/58/600x300/2210344-2210343_australia.jpg',
          highlights: [
            'Return flights from Mumbai/Delhi included',
            'Sydney Opera House & Harbour Bridge walk',
            'Bondi Beach & Manly Ferry cruise',
            'Blue Mountains — Three Sisters & Scenic World',
            'All transfers & daily breakfast included'
          ],
          groupSize: '2 – 20 People', transport: 'Flight + Coach', accommodation: '3★ / 4★ Hotels',
          itinerary: [
            { day: 1, title: 'Arrival – Sydney', description: 'Arrive at Sydney Airport. Check-in. Evening Sydney Harbour walk & Opera House exterior.' },
            { day: 2, title: 'Sydney City Tour', description: 'Sydney Opera House, Harbour Bridge, The Rocks, Darling Harbour & Bondi Beach.' },
            { day: 3, title: 'Blue Mountains', description: 'Day trip to Blue Mountains. Three Sisters, Scenic World cable car & Leura village.' },
            { day: 4, title: 'Manly & Wildlife', description: 'Manly Ferry cruise. Taronga Zoo — koalas, kangaroos & wombats.' },
            { day: 5, title: 'Departure', description: 'Breakfast at hotel. Transfer to Sydney Airport. Tour ends with beautiful memories.' }
          ]
        },
        {
          id: 9002, nights: 5, duration: '5N/6D', price: 114999, badge: 'Popular',
          name: 'Coastal Wonders',
          image: 'https://cdn.yourholiday.me/static/dynimg/destination/58/600x300/2210344-2210343_australia.jpg',
          highlights: [
            'Return flights from Mumbai/Delhi included',
            'Sydney & Melbourne dual-city coverage',
            'Great Ocean Road — Twelve Apostles',
            'Philip Island — Penguin Parade at sunset',
            'All transfers & daily breakfast included'
          ],
          groupSize: '2 – 20 People', transport: 'Flight + Coach', accommodation: '4★ Hotels',
          itinerary: [
            { day: 1, title: 'Arrival – Sydney', description: 'Arrive & check-in. Evening Sydney Harbour & Opera House.' },
            { day: 2, title: 'Sydney Highlights', description: 'Opera House, Harbour Bridge, Bondi Beach & Blue Mountains day trip.' },
            { day: 3, title: 'Fly to Melbourne', description: 'Flight to Melbourne. City tour — Federation Square, Flinders Street & Queen Victoria Market.' },
            { day: 4, title: 'Great Ocean Road', description: 'Full-day Great Ocean Road tour — Twelve Apostles, Loch Ard Gorge & London Arch.' },
            { day: 5, title: 'Philip Island', description: 'Philip Island — Penguin Parade at sunset. Koala Conservation Centre.' },
            { day: 6, title: 'Departure', description: 'Breakfast. Transfer to Melbourne Airport. Tour ends.' }
          ]
        },
        {
          id: 9003, nights: 6, duration: '6N/7D', price: 139999,
          name: 'Outback & Beyond',
          image: 'https://cdn.yourholiday.me/static/dynimg/destination/58/600x300/2210344-2210343_australia.jpg',
          highlights: [
            'Return flights from Mumbai/Delhi included',
            'Sydney, Melbourne & Cairns full circuit',
            'Great Barrier Reef snorkeling & diving',
            'Daintree Rainforest — world\'s oldest tropical rainforest',
            'All meals, transfers & sightseeing included'
          ],
          groupSize: '2 – 15 People', transport: 'Flight + Coach', accommodation: '4★ Hotels',
          itinerary: [
            { day: 1, title: 'Arrival – Sydney', description: 'Arrive & check-in. Evening Sydney Harbour & Opera House.' },
            { day: 2, title: 'Sydney Highlights', description: 'Opera House, Harbour Bridge, Bondi Beach & Taronga Zoo.' },
            { day: 3, title: 'Melbourne', description: 'Fly to Melbourne. Federation Square, Flinders Street & Queen Victoria Market.' },
            { day: 4, title: 'Great Ocean Road', description: 'Twelve Apostles, Loch Ard Gorge & London Arch.' },
            { day: 5, title: 'Cairns & Great Barrier Reef', description: 'Fly to Cairns. Afternoon snorkeling & diving at Great Barrier Reef.' },
            { day: 6, title: 'Daintree Rainforest', description: 'Daintree Rainforest tour — river cruise, wildlife spotting & Cape Tribulation beach.' },
            { day: 7, title: 'Departure', description: 'Breakfast. Transfer to Cairns Airport. Tour ends.' }
          ]
        },
        {
          id: 9004, nights: 7, duration: '7N/8D', price: 169999, badge: 'Premium',
          name: 'Ultimate Australia',
          image: 'https://cdn.yourholiday.me/static/dynimg/destination/58/600x300/2210344-2210343_australia.jpg',
          highlights: [
            'Return flights from Mumbai/Delhi included',
            'Sydney, Melbourne, Cairns & Uluru (Ayers Rock)',
            'Uluru sunrise & Kata Tjuta guided walk',
            'Great Barrier Reef private dive & helicopter flight',
            'All meals, transfers & exclusive experiences'
          ],
          groupSize: '2 – 10 People', transport: 'Flight + Private Coach', accommodation: '4★ / 5★ Hotels',
          itinerary: [
            { day: 1, title: 'Arrival – Sydney', description: 'Luxury hotel check-in. Evening Sydney Harbour & Opera House.' },
            { day: 2, title: 'Sydney Highlights', description: 'Opera House, Harbour Bridge, Bondi Beach & Blue Mountains.' },
            { day: 3, title: 'Melbourne', description: 'Fly to Melbourne. Federation Square, Great Ocean Road preview & Philip Island.' },
            { day: 4, title: 'Great Ocean Road', description: 'Twelve Apostles, Loch Ard Gorge & London Arch full-day tour.' },
            { day: 5, title: 'Uluru – Ayers Rock', description: 'Fly to Uluru. Sunset viewing of Ayers Rock. Outback dinner under the stars.' },
            { day: 6, title: 'Uluru Sunrise & Kata Tjuta', description: 'Uluru sunrise walk. Kata Tjuta Valley of the Winds guided trek.' },
            { day: 7, title: 'Cairns & Great Barrier Reef', description: 'Fly to Cairns. Private dive at Great Barrier Reef. Helicopter scenic flight.' },
            { day: 8, title: 'Departure', description: 'Breakfast. Transfer to Cairns Airport. Tour ends with beautiful memories.' }
          ]
        }
      ]
    },

    'japan': {
      name: 'Japan',
      tagline: 'Land of the Rising Sun — temples, cherry blossoms & futuristic cities',
      heroImage: 'https://cdn.yourholiday.me/static/dynimg/destination/64/600x300/2750318-2750317_japan.jpg',
      packages: [
        {
          id: 10001, nights: 4, duration: '4N/5D', price: 84999, badge: 'Bestseller',
          name: 'Tokyo Highlights',
          image: 'https://cdn.yourholiday.me/static/dynimg/destination/64/600x300/2750318-2750317_japan.jpg',
          highlights: [
            'Return flights from Mumbai/Delhi included',
            'Tokyo — Shibuya Crossing & Shinjuku',
            'Senso-ji Temple & Asakusa district',
            'teamLab Borderless digital art museum',
            'All transfers & daily breakfast included'
          ],
          groupSize: '2 – 20 People', transport: 'Flight + Subway + Coach', accommodation: '3★ / 4★ Hotels',
          itinerary: [
            { day: 1, title: 'Arrival – Tokyo', description: 'Arrive at Narita/Haneda Airport. Check-in. Evening Shinjuku neon lights & Kabukicho.' },
            { day: 2, title: 'Tokyo City Tour', description: 'Senso-ji Temple, Asakusa, Akihabara electronics district & Shibuya Crossing.' },
            { day: 3, title: 'Harajuku & Odaiba', description: 'Harajuku Takeshita Street, Meiji Shrine, Odaiba waterfront & teamLab Borderless.' },
            { day: 4, title: 'Mt. Fuji Day Trip', description: 'Day trip to Mt. Fuji — Fuji Five Lakes, Chureito Pagoda & Lake Kawaguchiko.' },
            { day: 5, title: 'Departure', description: 'Breakfast at hotel. Transfer to airport. Tour ends with beautiful memories.' }
          ]
        },
        {
          id: 10002, nights: 5, duration: '5N/6D', price: 109999, badge: 'Popular',
          name: 'Sakura Trail',
          image: 'https://cdn.yourholiday.me/static/dynimg/destination/64/600x300/2750318-2750317_japan.jpg',
          highlights: [
            'Return flights from Mumbai/Delhi included',
            'Tokyo & Kyoto dual-city coverage',
            'Kyoto — Fushimi Inari, Arashiyama & Geisha district',
            'Bullet train (Shinkansen) Tokyo–Kyoto',
            'All transfers & daily breakfast included'
          ],
          groupSize: '2 – 20 People', transport: 'Flight + Shinkansen + Coach', accommodation: '4★ Hotels',
          itinerary: [
            { day: 1, title: 'Arrival – Tokyo', description: 'Arrive & check-in. Evening Shinjuku & Kabukicho.' },
            { day: 2, title: 'Tokyo City Tour', description: 'Senso-ji, Asakusa, Shibuya Crossing & Harajuku.' },
            { day: 3, title: 'Mt. Fuji & Shinkansen to Kyoto', description: 'Morning Mt. Fuji views. Afternoon Shinkansen bullet train to Kyoto.' },
            { day: 4, title: 'Kyoto Highlights', description: 'Fushimi Inari Shrine, Kinkaku-ji (Golden Pavilion) & Gion Geisha district.' },
            { day: 5, title: 'Arashiyama & Nara', description: 'Arashiyama Bamboo Grove, Tenryu-ji Garden. Nara deer park & Todai-ji Temple.' },
            { day: 6, title: 'Departure', description: 'Breakfast. Transfer to Osaka/Kyoto Airport. Tour ends.' }
          ]
        },
        {
          id: 10003, nights: 6, duration: '6N/7D', price: 134999,
          name: 'Japan Explorer',
          image: 'https://cdn.yourholiday.me/static/dynimg/destination/64/600x300/2750318-2750317_japan.jpg',
          highlights: [
            'Return flights from Mumbai/Delhi included',
            'Tokyo, Kyoto, Osaka & Hiroshima',
            'Hiroshima Peace Memorial & Miyajima Island',
            'Osaka — Dotonbori street food & Osaka Castle',
            'All meals, transfers & sightseeing included'
          ],
          groupSize: '2 – 15 People', transport: 'Flight + Shinkansen + Coach', accommodation: '4★ Hotels',
          itinerary: [
            { day: 1, title: 'Arrival – Tokyo', description: 'Arrive & check-in. Evening Shinjuku & Kabukicho.' },
            { day: 2, title: 'Tokyo City Tour', description: 'Senso-ji, Asakusa, Shibuya Crossing & teamLab Borderless.' },
            { day: 3, title: 'Mt. Fuji & Shinkansen to Kyoto', description: 'Mt. Fuji Chureito Pagoda. Shinkansen to Kyoto.' },
            { day: 4, title: 'Kyoto Highlights', description: 'Fushimi Inari, Kinkaku-ji, Arashiyama Bamboo Grove & Gion district.' },
            { day: 5, title: 'Hiroshima & Miyajima', description: 'Shinkansen to Hiroshima. Peace Memorial Museum. Ferry to Miyajima — floating torii gate.' },
            { day: 6, title: 'Osaka', description: 'Osaka Castle, Dotonbori street food, Kuromon Market & Shinsekai district.' },
            { day: 7, title: 'Departure', description: 'Breakfast. Transfer to Osaka Kansai Airport. Tour ends.' }
          ]
        },
        {
          id: 10004, nights: 7, duration: '7N/8D', price: 164999, badge: 'Premium',
          name: 'Land of Rising Sun',
          image: 'https://cdn.yourholiday.me/static/dynimg/destination/64/600x300/2750318-2750317_japan.jpg',
          highlights: [
            'Return flights from Mumbai/Delhi included',
            'Tokyo, Hakone, Kyoto, Osaka & Hiroshima',
            'Hakone — Mt. Fuji views & ryokan stay',
            'Traditional tea ceremony & kimono experience',
            'All meals, transfers & exclusive experiences'
          ],
          groupSize: '2 – 10 People', transport: 'Flight + Shinkansen + Private Coach', accommodation: '4★ / 5★ Hotels + Ryokan',
          itinerary: [
            { day: 1, title: 'Arrival – Tokyo', description: 'Luxury hotel check-in. Evening Shinjuku & Kabukicho.' },
            { day: 2, title: 'Tokyo City Tour', description: 'Senso-ji, Asakusa, Shibuya Crossing, Harajuku & teamLab Borderless.' },
            { day: 3, title: 'Hakone & Mt. Fuji', description: 'Hakone — Mt. Fuji views, Hakone Open Air Museum & traditional ryokan stay.' },
            { day: 4, title: 'Shinkansen to Kyoto', description: 'Bullet train to Kyoto. Fushimi Inari Shrine & Gion Geisha district evening walk.' },
            { day: 5, title: 'Kyoto Deep Dive', description: 'Kinkaku-ji, Arashiyama Bamboo Grove, Tenryu-ji & traditional tea ceremony.' },
            { day: 6, title: 'Hiroshima & Miyajima', description: 'Peace Memorial Museum. Ferry to Miyajima — floating torii gate & Mt. Misen.' },
            { day: 7, title: 'Osaka', description: 'Osaka Castle, Dotonbori, Kuromon Market & farewell dinner.' },
            { day: 8, title: 'Departure', description: 'Breakfast. Transfer to Osaka Kansai Airport. Tour ends with beautiful memories.' }
          ]
        }
      ]
    },

    'maldives': {
      name: 'Maldives',
      tagline: 'Paradise on Earth — crystal lagoons, overwater villas & coral reefs',
      heroImage: 'https://cdn.yourholiday.me/static/dynimg/destination/98/600x300/2750963-2750962_maldives.jpg',
      packages: [
        {
          id: 6001, nights: 4, duration: '4N/5D', price: 42999, badge: 'Bestseller',
          name: 'Maldives Bliss',
          image: 'https://cdn.yourholiday.me/static/dynimg/destination/98/600x300/2750963-2750962_maldives.jpg',
          highlights: [
            'Return flights from Mumbai/Delhi included',
            'Beach villa stay on a private island resort',
            'Snorkeling & glass-bottom boat ride',
            'Sunset dolphin cruise',
            'All transfers & daily breakfast included'
          ],
          groupSize: '2 – 10 People', transport: 'Flight + Speedboat', accommodation: '4★ Beach Villa',
          itinerary: [
            { day: 1, title: 'Arrival – Malé', description: 'Arrive at Velana International Airport. Speedboat transfer to resort. Check-in to beach villa. Evening at leisure.' },
            { day: 2, title: 'Snorkeling & Water Sports', description: 'Morning snorkeling at house reef. Afternoon glass-bottom boat ride over coral gardens.' },
            { day: 3, title: 'Dolphin Cruise & Beach', description: 'Sunset dolphin watching cruise. Leisure beach day. Bonfire dinner on the beach.' },
            { day: 4, title: 'Island Hopping', description: 'Visit local Maldivian island. Explore fish market & local culture. Afternoon at resort pool.' },
            { day: 5, title: 'Departure', description: 'Breakfast at resort. Speedboat to Malé. Transfer to airport. Tour ends with beautiful memories.' }
          ]
        },
        {
          id: 6002, nights: 5, duration: '5N/6D', price: 58999, badge: 'Popular',
          name: 'Lagoon Escape',
          image: 'https://cdn.yourholiday.me/static/dynimg/destination/98/600x300/2750963-2750962_maldives.jpg',
          highlights: [
            'Return flights from Mumbai/Delhi included',
            'Overwater bungalow stay',
            'Scuba diving & snorkeling sessions',
            'Sunset dolphin cruise & sandbank picnic',
            'All transfers & daily breakfast included'
          ],
          groupSize: '2 – 8 People', transport: 'Flight + Speedboat', accommodation: '4★ Overwater Bungalow',
          itinerary: [
            { day: 1, title: 'Arrival – Malé', description: 'Arrive & speedboat transfer to resort. Check-in to overwater bungalow. Welcome cocktail.' },
            { day: 2, title: 'Snorkeling & Reef Exploration', description: 'Guided snorkeling at vibrant coral reef. Glass-bottom boat tour. Leisure afternoon.' },
            { day: 3, title: 'Scuba Diving', description: 'Introductory scuba diving session with certified instructor. Explore underwater world.' },
            { day: 4, title: 'Sandbank Picnic & Dolphin Cruise', description: 'Private sandbank picnic lunch. Sunset dolphin watching cruise.' },
            { day: 5, title: 'Island Hopping & Local Culture', description: 'Visit local island & Malé city tour — Grand Friday Mosque & fish market.' },
            { day: 6, title: 'Departure', description: 'Breakfast. Speedboat to Malé. Transfer to airport. Tour ends.' }
          ]
        },
        {
          id: 6003, nights: 6, duration: '6N/7D', price: 79999,
          name: 'Overwater Paradise',
          image: 'https://cdn.yourholiday.me/static/dynimg/destination/98/600x300/2750963-2750962_maldives.jpg',
          highlights: [
            'Return flights from Mumbai/Delhi included',
            'Luxury overwater villa with private pool',
            'Scuba diving, snorkeling & water sports',
            'Submarine tour & bioluminescent beach night',
            'All meals, transfers & sightseeing included'
          ],
          groupSize: '2 – 6 People', transport: 'Flight + Seaplane / Speedboat', accommodation: '5★ Overwater Villa',
          itinerary: [
            { day: 1, title: 'Arrival – Malé', description: 'Seaplane transfer to luxury resort. Check-in to overwater villa with private pool.' },
            { day: 2, title: 'Snorkeling & Reef Safari', description: 'Guided reef snorkeling. Glass-bottom boat tour. Afternoon kayaking.' },
            { day: 3, title: 'Scuba Diving', description: 'Two scuba dives with certified instructor. Explore manta ray & shark points.' },
            { day: 4, title: 'Water Sports Day', description: 'Jet ski, windsurfing, parasailing & banana boat. Sunset dolphin cruise.' },
            { day: 5, title: 'Submarine Tour & Sandbank', description: 'Semi-submarine tour of coral gardens. Private sandbank picnic. Bioluminescent beach walk at night.' },
            { day: 6, title: 'Malé City Tour', description: 'Visit Malé — Grand Friday Mosque, National Museum & fish market. Farewell dinner.' },
            { day: 7, title: 'Departure', description: 'Breakfast. Seaplane to Malé. Transfer to airport. Tour ends.' }
          ]
        },
        {
          id: 6004, nights: 7, duration: '7N/8D', price: 109999, badge: 'Premium',
          name: 'Ultimate Maldives',
          image: 'https://cdn.yourholiday.me/static/dynimg/destination/98/600x300/2750963-2750962_maldives.jpg',
          highlights: [
            'Return flights from Mumbai/Delhi included',
            'Two-resort experience — beach & overwater villa',
            'Private diving & snorkeling excursions',
            'Sunset yacht cruise & underwater restaurant dinner',
            'All meals, transfers & exclusive experiences'
          ],
          groupSize: '2 – 4 People', transport: 'Flight + Seaplane', accommodation: '5★ Luxury Resorts',
          itinerary: [
            { day: 1, title: 'Arrival – Malé', description: 'Seaplane to first resort. Luxury beach villa check-in. Welcome dinner on the beach.' },
            { day: 2, title: 'Snorkeling & Reef Exploration', description: 'Private guided snorkeling. Glass-bottom boat. Afternoon at leisure.' },
            { day: 3, title: 'Scuba Diving', description: 'Two private scuba dives — manta ray point & shark reef.' },
            { day: 4, title: 'Resort Transfer & Water Sports', description: 'Seaplane to second resort — overwater villa. Jet ski, parasailing & windsurfing.' },
            { day: 5, title: 'Submarine & Sandbank', description: 'Semi-submarine coral tour. Private sandbank picnic. Sunset dolphin cruise.' },
            { day: 6, title: 'Underwater Restaurant & Yacht', description: 'Lunch at underwater restaurant. Private sunset yacht cruise. Bioluminescent beach walk.' },
            { day: 7, title: 'Malé & Leisure', description: 'Malé city tour — Grand Friday Mosque & fish market. Farewell spa session.' },
            { day: 8, title: 'Departure', description: 'Breakfast. Seaplane to Malé. Transfer to airport. Tour ends with beautiful memories.' }
          ]
        }
      ]
    },

    'malaysia': {
      name: 'Malaysia',
      tagline: 'Truly Asia — rainforests, twin towers & island paradise',
      heroImage: 'https://cdn.yourholiday.me/static/dynimg/destination/64/600x300/3160627-3160626_tourist-places-in-malaysia.jpg',
      packages: [
        {
          id: 7001, nights: 4, duration: '4N/5D', price: 28999, badge: 'Bestseller',
          name: 'KL Highlights',
          image: 'https://cdn.yourholiday.me/static/dynimg/destination/64/600x300/3160627-3160626_tourist-places-in-malaysia.jpg',
          highlights: [
            'Return flights from Mumbai/Delhi included',
            'Petronas Twin Towers — Skybridge & observation deck',
            'Batu Caves — iconic Hindu temple complex',
            'KL Tower & Aquaria KLCC',
            'All transfers & daily breakfast included'
          ],
          groupSize: '2 – 20 People', transport: 'Flight + Coach', accommodation: '3★ / 4★ Hotels',
          itinerary: [
            { day: 1, title: 'Arrival – Kuala Lumpur', description: 'Arrive at KLIA. Check-in. Evening KLCC Park & Petronas Twin Towers light show.' },
            { day: 2, title: 'KL City Tour', description: 'Petronas Twin Towers Skybridge, KL Tower, Merdeka Square, National Mosque & Chinatown.' },
            { day: 3, title: 'Batu Caves & Aquaria', description: 'Batu Caves Hindu temple complex. Afternoon Aquaria KLCC underwater tunnel.' },
            { day: 4, title: 'Genting Highlands', description: 'Cable car to Genting Highlands. Theme park, casino & cool mountain air.' },
            { day: 5, title: 'Departure', description: 'Breakfast. Transfer to KLIA. Tour ends with beautiful memories.' }
          ]
        },
        {
          id: 7002, nights: 5, duration: '5N/6D', price: 38999, badge: 'Popular',
          name: 'Rainforest Retreat',
          image: 'https://cdn.yourholiday.me/static/dynimg/destination/64/600x300/3160627-3160626_tourist-places-in-malaysia.jpg',
          highlights: [
            'Return flights from Mumbai/Delhi included',
            'KL city tour & Petronas Twin Towers',
            'Langkawi — cable car & island hopping',
            'Mangrove river cruise & eagle feeding',
            'All transfers & daily breakfast included'
          ],
          groupSize: '2 – 20 People', transport: 'Flight + Coach + Ferry', accommodation: '4★ Hotels',
          itinerary: [
            { day: 1, title: 'Arrival – Kuala Lumpur', description: 'Arrive & check-in. Evening KLCC Park & Petronas Twin Towers.' },
            { day: 2, title: 'KL City Tour', description: 'Petronas Twin Towers, KL Tower, Batu Caves & Chinatown.' },
            { day: 3, title: 'Fly to Langkawi', description: 'Flight to Langkawi. Check-in. Afternoon at Pantai Cenang beach.' },
            { day: 4, title: 'Langkawi Cable Car & Island Hopping', description: 'SkyCab cable car to Mt. Mat Cincang. Island hopping — Pulau Dayang Bunting & eagle feeding.' },
            { day: 5, title: 'Mangrove Cruise & Leisure', description: 'Kilim Karst Geoforest mangrove river cruise. Afternoon at leisure.' },
            { day: 6, title: 'Departure', description: 'Breakfast. Transfer to Langkawi Airport. Tour ends.' }
          ]
        },
        {
          id: 7003, nights: 6, duration: '6N/7D', price: 52999,
          name: 'Malaysia Explorer',
          image: 'https://cdn.yourholiday.me/static/dynimg/destination/64/600x300/3160627-3160626_tourist-places-in-malaysia.jpg',
          highlights: [
            'Return flights from Mumbai/Delhi included',
            'KL, Langkawi & Penang full circuit',
            'Penang — George Town heritage & street food',
            'Penang Hill funicular & Kek Lok Si Temple',
            'All meals, transfers & sightseeing included'
          ],
          groupSize: '2 – 15 People', transport: 'Flight + Coach + Ferry', accommodation: '4★ Hotels',
          itinerary: [
            { day: 1, title: 'Arrival – Kuala Lumpur', description: 'Arrive & check-in. Evening KLCC Park & Petronas Twin Towers.' },
            { day: 2, title: 'KL City Tour', description: 'Petronas Twin Towers, KL Tower, Batu Caves & Chinatown.' },
            { day: 3, title: 'Genting Highlands', description: 'Cable car to Genting Highlands. Theme park & casino.' },
            { day: 4, title: 'Penang', description: 'Drive/fly to Penang. George Town heritage walk, street art & street food trail.' },
            { day: 5, title: 'Penang Hill & Kek Lok Si', description: 'Penang Hill funicular ride. Kek Lok Si Temple & Clan Jetties.' },
            { day: 6, title: 'Langkawi', description: 'Ferry to Langkawi. SkyCab cable car & island hopping.' },
            { day: 7, title: 'Departure', description: 'Breakfast. Transfer to Langkawi Airport. Tour ends.' }
          ]
        },
        {
          id: 7004, nights: 7, duration: '7N/8D', price: 72999, badge: 'Premium',
          name: 'Borneo & Beyond',
          image: 'https://cdn.yourholiday.me/static/dynimg/destination/64/600x300/3160627-3160626_tourist-places-in-malaysia.jpg',
          highlights: [
            'Return flights from Mumbai/Delhi included',
            'KL, Langkawi, Penang & Borneo (Kota Kinabalu)',
            'Borneo rainforest — orangutan sanctuary & jungle trek',
            'Mt. Kinabalu National Park (UNESCO)',
            'All meals, transfers & exclusive experiences'
          ],
          groupSize: '2 – 10 People', transport: 'Flight + Coach', accommodation: '4★ / 5★ Hotels',
          itinerary: [
            { day: 1, title: 'Arrival – Kuala Lumpur', description: 'Luxury hotel check-in. Evening KLCC Park & Petronas Twin Towers.' },
            { day: 2, title: 'KL City Tour', description: 'Petronas Twin Towers, KL Tower, Batu Caves & Chinatown.' },
            { day: 3, title: 'Langkawi', description: 'Fly to Langkawi. SkyCab cable car & island hopping.' },
            { day: 4, title: 'Penang', description: 'Ferry to Penang. George Town heritage, Penang Hill & Kek Lok Si Temple.' },
            { day: 5, title: 'Kota Kinabalu — Borneo', description: 'Fly to Kota Kinabalu. Sepilok Orangutan Rehabilitation Centre.' },
            { day: 6, title: 'Mt. Kinabalu & Jungle Trek', description: 'Mt. Kinabalu National Park (UNESCO). Jungle canopy walk & river safari.' },
            { day: 7, title: 'Tunku Abdul Rahman Marine Park', description: 'Island hopping in Tunku Abdul Rahman Marine Park. Snorkeling & beach leisure.' },
            { day: 8, title: 'Departure', description: 'Breakfast. Transfer to Kota Kinabalu Airport. Tour ends with beautiful memories.' }
          ]
        }
      ]
    },

    'switzerland': {
      name: 'Switzerland',
      tagline: 'Land of Alps — snow peaks, chocolate & fairy-tale villages',
      heroImage: 'https://cdn.yourholiday.me/static/dynimg/destination/74/600x300/2190187-2190186_zurich-switzerland-view-of-the-historic-city-center-with-famous-fraumunster-church-5.jpg',
      packages: [
        {
          id: 8001, nights: 4, duration: '4N/5D', price: 74999, badge: 'Bestseller',
          name: 'Swiss Highlights',
          image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/38/600x300/2990875-2990874_swiss.jpg',
          highlights: [
            'Return flights from Mumbai/Delhi included',
            'Zurich city tour & Lake Zurich cruise',
            'Lucerne — Chapel Bridge & Lion Monument',
            'Mt. Titlis cable car & glacier walk',
            'All transfers & daily breakfast included'
          ],
          groupSize: '2 – 20 People', transport: 'Flight + Coach + Train', accommodation: '3★ / 4★ Hotels',
          itinerary: [
            { day: 1, title: 'Arrival – Zurich', description: 'Arrive at Zurich Airport. Check-in. Evening Old Town walk & Lake Zurich promenade.' },
            { day: 2, title: 'Zurich City Tour', description: 'Old Town, Grossmünster, Fraumünster, Bahnhofstrasse shopping & Lake Zurich cruise.' },
            { day: 3, title: 'Lucerne', description: 'Drive to Lucerne. Chapel Bridge, Lion Monument, Old Town & Lake Lucerne boat ride.' },
            { day: 4, title: 'Mt. Titlis', description: 'Cable car to Mt. Titlis (3,020m). Glacier walk, ice cave & Cliff Walk suspension bridge.' },
            { day: 5, title: 'Departure', description: 'Breakfast. Transfer to Zurich Airport. Tour ends with beautiful memories.' }
          ]
        },
        {
          id: 8002, nights: 5, duration: '5N/6D', price: 99999, badge: 'Popular',
          name: 'Alpine Escape',
          image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/38/600x300/2990875-2990874_swiss.jpg',
          highlights: [
            'Return flights from Mumbai/Delhi included',
            'Zurich, Lucerne, Interlaken & Bern',
            'Jungfraujoch — Top of Europe (3,454m)',
            'Interlaken adventure activities',
            'All transfers & daily breakfast included'
          ],
          groupSize: '2 – 20 People', transport: 'Flight + Coach + Train', accommodation: '4★ Hotels',
          itinerary: [
            { day: 1, title: 'Arrival – Zurich', description: 'Arrive & check-in. Evening Old Town walk & Lake Zurich.' },
            { day: 2, title: 'Zurich & Lucerne', description: 'Zurich Old Town. Drive to Lucerne — Chapel Bridge, Lion Monument & Lake Lucerne.' },
            { day: 3, title: 'Mt. Titlis', description: 'Cable car to Mt. Titlis. Glacier walk, ice cave & Cliff Walk.' },
            { day: 4, title: 'Interlaken & Jungfraujoch', description: 'Drive to Interlaken. Cogwheel train to Jungfraujoch — Top of Europe. Glacier views.' },
            { day: 5, title: 'Bern', description: 'Swiss capital Bern — Bear Park, Zytglogge clock tower, Rose Garden & Federal Palace.' },
            { day: 6, title: 'Departure', description: 'Breakfast. Transfer to Zurich Airport. Tour ends.' }
          ]
        },
        {
          id: 8003, nights: 6, duration: '6N/7D', price: 129999,
          name: 'Swiss Explorer',
          image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/38/600x300/2990875-2990874_swiss.jpg',
          highlights: [
            'Return flights from Mumbai/Delhi included',
            'Zurich, Lucerne, Interlaken, Bern & Geneva',
            'Jungfraujoch + Mt. Titlis double peak experience',
            'Lake Geneva & Chillon Castle',
            'All meals, transfers & sightseeing included'
          ],
          groupSize: '2 – 15 People', transport: 'Flight + Coach + Train', accommodation: '4★ Hotels',
          itinerary: [
            { day: 1, title: 'Arrival – Zurich', description: 'Arrive & check-in. Evening Old Town walk & Lake Zurich.' },
            { day: 2, title: 'Zurich & Lucerne', description: 'Zurich Old Town. Lucerne — Chapel Bridge, Lion Monument & Lake Lucerne.' },
            { day: 3, title: 'Mt. Titlis', description: 'Cable car to Mt. Titlis. Glacier walk, ice cave & Cliff Walk.' },
            { day: 4, title: 'Interlaken & Jungfraujoch', description: 'Cogwheel train to Jungfraujoch — Top of Europe. Interlaken leisure.' },
            { day: 5, title: 'Bern', description: 'Bear Park, Zytglogge, Rose Garden & Federal Palace.' },
            { day: 6, title: 'Geneva & Lake Geneva', description: 'Drive to Geneva. Jet d\'Eau, UN Palace, Chillon Castle & Lake Geneva cruise.' },
            { day: 7, title: 'Departure', description: 'Breakfast. Transfer to Geneva Airport. Tour ends.' }
          ]
        },
        {
          id: 8004, nights: 7, duration: '7N/8D', price: 164999, badge: 'Premium',
          name: 'Grand Switzerland',
          image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/38/600x300/2990875-2990874_swiss.jpg',
          highlights: [
            'Return flights from Mumbai/Delhi included',
            'Zurich, Lucerne, Interlaken, Bern, Geneva & Zermatt',
            'Matterhorn — Gornergrat cogwheel train',
            'Glacier Express scenic train journey',
            'All meals, transfers & exclusive experiences'
          ],
          groupSize: '2 – 10 People', transport: 'Flight + Private Coach + Scenic Train', accommodation: '4★ / 5★ Hotels',
          itinerary: [
            { day: 1, title: 'Arrival – Zurich', description: 'Luxury hotel check-in. Evening Old Town walk & Lake Zurich.' },
            { day: 2, title: 'Zurich & Lucerne', description: 'Zurich Old Town. Lucerne — Chapel Bridge, Lion Monument & Lake Lucerne.' },
            { day: 3, title: 'Mt. Titlis', description: 'Cable car to Mt. Titlis. Glacier walk, ice cave & Cliff Walk.' },
            { day: 4, title: 'Interlaken & Jungfraujoch', description: 'Cogwheel train to Jungfraujoch — Top of Europe. Interlaken adventure activities.' },
            { day: 5, title: 'Bern & Geneva', description: 'Bern city tour. Drive to Geneva — Jet d\'Eau, UN Palace & Lake Geneva.' },
            { day: 6, title: 'Zermatt & Matterhorn', description: 'Train to Zermatt. Gornergrat cogwheel train — iconic Matterhorn views.' },
            { day: 7, title: 'Glacier Express', description: 'Scenic Glacier Express train journey through the Alps. Farewell dinner.' },
            { day: 8, title: 'Departure', description: 'Breakfast. Transfer to Zurich Airport. Tour ends with beautiful memories.' }
          ]
        }
      ]
    },

    'europe': {
      name: 'Europe',
      tagline: 'Old World charm — iconic cities, art & timeless landscapes',
      heroImage: 'https://cdn.yourholiday.me/static/dynimg/destination/21/600x300/2190173-2190172_europe-1-main-image.jpg',
      packages: [
        {
          id: 5001, nights: 4, duration: '4N/5D', price: 89999, badge: 'Bestseller',
          name: 'European Glimpse',
          image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/43/600x300/2993319-2993318_europe.jpg',
          highlights: [
            'Return flights from Mumbai/Delhi included',
            'Paris — Eiffel Tower, Louvre & Seine cruise',
            'Amsterdam — canals, Anne Frank House & Keukenhof',
            'Brussels — Grand Place & Manneken Pis',
            'All transfers & daily breakfast included'
          ],
          groupSize: '2 – 20 People', transport: 'Flight + Coach', accommodation: '3★ / 4★ Hotels',
          itinerary: [
            { day: 1, title: 'Arrival – Paris', description: 'Arrive at CDG Airport. Check-in. Evening Eiffel Tower visit & Seine River cruise.' },
            { day: 2, title: 'Paris Sightseeing', description: 'Louvre Museum, Notre Dame, Champs-Elysées, Arc de Triomphe & Moulin Rouge area.' },
            { day: 3, title: 'Brussels', description: 'Drive to Brussels. Grand Place, Manneken Pis, Atomium & Belgian chocolate tasting.' },
            { day: 4, title: 'Amsterdam', description: 'Drive to Amsterdam. Canal cruise, Anne Frank House, Rijksmuseum & Keukenhof Gardens.' },
            { day: 5, title: 'Departure', description: 'Breakfast. Transfer to Amsterdam Airport. Tour ends with beautiful memories.' }
          ]
        },
        {
          id: 5002, nights: 5, duration: '5N/6D', price: 119999, badge: 'Popular',
          name: 'Classic Europe',
          image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/38/600x300/2990875-2990874_swiss.jpg',
          highlights: [
            'Return flights from Mumbai/Delhi included',
            'Paris, Switzerland & Amsterdam',
            'Swiss Alps — Jungfraujoch or Mt. Titlis',
            'Interlaken — adventure capital of Europe',
            'All transfers & daily breakfast included'
          ],
          groupSize: '2 – 20 People', transport: 'Flight + Coach', accommodation: '4★ Hotels',
          itinerary: [
            { day: 1, title: 'Arrival – Paris', description: 'Arrive & check-in. Evening Eiffel Tower & Seine cruise.' },
            { day: 2, title: 'Paris Sightseeing', description: 'Louvre, Notre Dame, Champs-Elysées & Arc de Triomphe.' },
            { day: 3, title: 'Switzerland — Interlaken', description: 'Drive to Interlaken. Jungfraujoch — Top of Europe (seasonal). Evening at leisure.' },
            { day: 4, title: 'Lucerne & Mt. Titlis', description: 'Mt. Titlis cable car, glacier walk & Lucerne city tour — Chapel Bridge & Lion Monument.' },
            { day: 5, title: 'Amsterdam', description: 'Drive to Amsterdam. Canal cruise, Anne Frank House & Keukenhof Gardens.' },
            { day: 6, title: 'Departure', description: 'Breakfast. Transfer to Amsterdam Airport. Tour ends.' }
          ]
        },
        {
          id: 5003, nights: 6, duration: '6N/7D', price: 164999,
          name: 'European Wonders',
          image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/55/600x300/2998781-2998780_london-tourism-title.jpg',
          highlights: [
            'Return flights from Mumbai/Delhi included',
            'Paris, Switzerland, Italy & Amsterdam',
            'Rome — Colosseum, Vatican & Trevi Fountain',
            'Venice — gondola ride & St. Mark\'s Square',
            'All meals, transfers & sightseeing included'
          ],
          groupSize: '2 – 15 People', transport: 'Flight + Coach', accommodation: '4★ Hotels',
          itinerary: [
            { day: 1, title: 'Arrival – Paris', description: 'Arrive & check-in. Evening Eiffel Tower & Seine cruise.' },
            { day: 2, title: 'Paris Sightseeing', description: 'Louvre, Notre Dame, Champs-Elysées & Arc de Triomphe.' },
            { day: 3, title: 'Switzerland', description: 'Drive to Interlaken. Mt. Titlis cable car & Lucerne city tour.' },
            { day: 4, title: 'Rome', description: 'Fly to Rome. Colosseum, Roman Forum, Vatican Museums & Trevi Fountain.' },
            { day: 5, title: 'Venice', description: 'Drive to Venice. Gondola ride, St. Mark\'s Square & Rialto Bridge.' },
            { day: 6, title: 'Amsterdam', description: 'Fly to Amsterdam. Canal cruise, Anne Frank House & Keukenhof.' },
            { day: 7, title: 'Departure', description: 'Breakfast. Transfer to Amsterdam Airport. Tour ends.' }
          ]
        },
        {
          id: 5004, nights: 7, duration: '7N/8D', price: 229628, badge: 'Premium',
          name: 'Grand Europe',
          image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/15/600x300/2995351-2995350_uk_tourism.jpg',
          highlights: [
            'Return flights from Mumbai/Delhi included',
            'London, Paris, Switzerland, Italy & Amsterdam',
            'London — Big Ben, Buckingham Palace & Tower Bridge',
            'Luxury 4★/5★ hotel stays throughout',
            'All meals, transfers & exclusive experiences'
          ],
          groupSize: '2 – 10 People', transport: 'Flight + Private Coach', accommodation: '4★ / 5★ Hotels',
          itinerary: [
            { day: 1, title: 'Arrival – London', description: 'Arrive at Heathrow. Luxury hotel check-in. Evening Thames River cruise.' },
            { day: 2, title: 'London Sightseeing', description: 'Big Ben, Buckingham Palace, Tower Bridge, Tower of London & London Eye.' },
            { day: 3, title: 'Paris', description: 'Eurostar to Paris. Eiffel Tower, Louvre & Seine cruise.' },
            { day: 4, title: 'Switzerland', description: 'Drive to Interlaken. Jungfraujoch & Lucerne city tour.' },
            { day: 5, title: 'Rome', description: 'Fly to Rome. Colosseum, Vatican Museums & Trevi Fountain.' },
            { day: 6, title: 'Venice & Florence', description: 'Venice gondola ride. Florence — Uffizi Gallery & Ponte Vecchio.' },
            { day: 7, title: 'Amsterdam', description: 'Fly to Amsterdam. Canal cruise, Anne Frank House & Keukenhof.' },
            { day: 8, title: 'Departure', description: 'Breakfast. Transfer to Amsterdam Airport. Tour ends with beautiful memories.' }
          ]
        }
      ]
    },

    'spain': {
      name: 'Spain',
      tagline: 'Passion, art & fiesta â€” flamenco, tapas & sun-drenched coastlines',
      heroImage: 'https://cdn.yourholiday.me/static/dynimg/destination/56/600x300/2750344-2750343_spain.jpg',
      packages: [
        {
          id: 19001, nights: 4, duration: '4N/5D', price: 64999, badge: 'Bestseller',
          name: 'Barcelona Escape',
          image: 'https://cdn.yourholiday.me/static/dynimg/destination/56/600x300/2750344-2750343_spain.jpg',
          highlights: [
            'Return flights from Mumbai/Delhi included',
            'Sagrada Familia & Park Guell â€” Gaudi masterpieces',
            'Las Ramblas, Gothic Quarter & Barceloneta Beach',
            'Camp Nou stadium tour',
            'All transfers & daily breakfast included'
          ],
          groupSize: '2 â€“ 20 People', transport: 'Flight + Coach', accommodation: '3â˜… / 4â˜… Hotels',
          itinerary: [
            { day: 1, title: 'Arrival â€“ Barcelona', description: 'Arrive at Barcelona El Prat Airport. Check-in. Evening Las Ramblas walk & welcome tapas dinner.' },
            { day: 2, title: 'Gaudi Barcelona', description: 'Sagrada Familia, Park Guell, Casa Batllo exterior & Passeig de Gracia.' },
            { day: 3, title: 'Gothic Quarter & Barceloneta', description: 'Gothic Quarter walk, Barcelona Cathedral, Picasso Museum & Barceloneta Beach.' },
            { day: 4, title: 'Camp Nou & Montjuic', description: 'Camp Nou stadium tour. Montjuic Castle & Magic Fountain evening show.' },
            { day: 5, title: 'Departure', description: 'Breakfast at hotel. Transfer to Barcelona Airport. Tour ends with beautiful memories.' }
          ]
        },
        {
          id: 19002, nights: 5, duration: '5N/6D', price: 84999, badge: 'Popular',
          name: 'Andalusia Dreams',
          image: 'https://cdn.yourholiday.me/static/dynimg/destination/56/600x300/2750344-2750343_spain.jpg',
          highlights: [
            'Return flights from Mumbai/Delhi included',
            'Barcelona & Andalusia dual coverage',
            'Seville â€” Alcazar Palace & Flamenco show',
            'Granada â€” Alhambra Palace & Generalife Gardens',
            'All transfers & daily breakfast included'
          ],
          groupSize: '2 â€“ 20 People', transport: 'Flight + Coach + Train', accommodation: '4â˜… Hotels',
          itinerary: [
            { day: 1, title: 'Arrival â€“ Barcelona', description: 'Arrive & check-in. Evening Las Ramblas & Gothic Quarter.' },
            { day: 2, title: 'Barcelona Highlights', description: 'Sagrada Familia, Park Guell, Barceloneta Beach & Camp Nou.' },
            { day: 3, title: 'Fly to Seville', description: 'Flight to Seville. Alcazar Palace, Seville Cathedral & Giralda Tower.' },
            { day: 4, title: 'Seville & Flamenco', description: 'Plaza de Espana, Triana neighbourhood & evening Flamenco show.' },
            { day: 5, title: 'Granada â€“ Alhambra', description: 'Drive to Granada. Alhambra Palace, Nasrid Palaces & Generalife Gardens.' },
            { day: 6, title: 'Departure', description: 'Breakfast. Transfer to Granada/Malaga Airport. Tour ends.' }
          ]
        },
        {
          id: 19003, nights: 6, duration: '6N/7D', price: 109999,
          name: 'Spain Explorer',
          image: 'https://cdn.yourholiday.me/static/dynimg/destination/56/600x300/2750344-2750343_spain.jpg',
          highlights: [
            'Return flights from Mumbai/Delhi included',
            'Barcelona, Madrid & Andalusia full circuit',
            'Madrid â€” Prado Museum & Royal Palace',
            'Toledo â€” medieval city & El Greco heritage',
            'All meals, transfers & sightseeing included'
          ],
          groupSize: '2 â€“ 15 People', transport: 'Flight + Coach + Train', accommodation: '4â˜… Hotels',
          itinerary: [
            { day: 1, title: 'Arrival â€“ Barcelona', description: 'Arrive & check-in. Evening Las Ramblas & tapas dinner.' },
            { day: 2, title: 'Barcelona Highlights', description: 'Sagrada Familia, Park Guell, Gothic Quarter & Barceloneta Beach.' },
            { day: 3, title: 'High-Speed Train to Madrid', description: 'AVE train to Madrid. Puerta del Sol, Plaza Mayor & Retiro Park.' },
            { day: 4, title: 'Madrid City Tour', description: 'Prado Museum, Royal Palace, Almudena Cathedral & Gran Via.' },
            { day: 5, title: 'Toledo Day Trip', description: 'Day trip to Toledo â€” medieval city, El Greco Museum & Toledo Cathedral.' },
            { day: 6, title: 'Seville & Alhambra', description: 'Train to Seville. Alcazar Palace, Flamenco show & Granada Alhambra.' },
            { day: 7, title: 'Departure', description: 'Breakfast. Transfer to Malaga Airport. Tour ends.' }
          ]
        },
        {
          id: 19004, nights: 7, duration: '7N/8D', price: 139999, badge: 'Premium',
          name: 'Iberian Grand Tour',
          image: 'https://cdn.yourholiday.me/static/dynimg/destination/56/600x300/2750344-2750343_spain.jpg',
          highlights: [
            'Return flights from Mumbai/Delhi included',
            'Barcelona, Madrid, Seville, Granada & Costa del Sol',
            'Costa del Sol â€” Marbella & Malaga beaches',
            'Private Flamenco dinner show in Seville',
            'All meals, transfers & exclusive experiences'
          ],
          groupSize: '2 â€“ 10 People', transport: 'Flight + Private Coach + Train', accommodation: '4â˜… / 5â˜… Hotels',
          itinerary: [
            { day: 1, title: 'Arrival â€“ Barcelona', description: 'Luxury hotel check-in. Evening Las Ramblas & Gothic Quarter.' },
            { day: 2, title: 'Barcelona Highlights', description: 'Sagrada Familia, Park Guell, Casa Batllo & Barceloneta Beach.' },
            { day: 3, title: 'AVE Train to Madrid', description: 'High-speed train to Madrid. Prado Museum, Royal Palace & Retiro Park.' },
            { day: 4, title: 'Madrid & Toledo', description: 'Gran Via, Almudena Cathedral & day trip to medieval Toledo.' },
            { day: 5, title: 'Seville', description: 'Train to Seville. Alcazar Palace, Giralda Tower & private Flamenco dinner show.' },
            { day: 6, title: 'Granada â€“ Alhambra', description: 'Alhambra Palace, Nasrid Palaces, Generalife Gardens & Albaicin neighbourhood.' },
            { day: 7, title: 'Costa del Sol', description: 'Drive to Marbella. Old Town, Puerto Banus & Malaga Picasso Museum.' },
            { day: 8, title: 'Departure', description: 'Breakfast. Transfer to Malaga Airport. Tour ends with beautiful memories.' }
          ]
        }
      ]
    },

    'russia': {
      name: 'Russia',
      tagline: 'Land of Tsars â€” Red Square, golden domes & Trans-Siberian grandeur',
      heroImage: 'https://cdn.yourholiday.me/static/dynimg/destination/89/600x300/2750969-2750968_russia.jpg',
      packages: [
        {
          id: 20001, nights: 4, duration: '4N/5D', price: 59999, badge: 'Bestseller',
          name: 'Moscow Highlights',
          image: 'https://cdn.yourholiday.me/static/dynimg/destination/89/600x300/2750969-2750968_russia.jpg',
          highlights: [
            'Return flights from Mumbai/Delhi included',
            'Red Square, Kremlin & St. Basil\'s Cathedral',
            'Bolshoi Theatre exterior & Arbat Street',
            'Moscow Metro â€” world\'s most beautiful subway',
            'All transfers & daily breakfast included'
          ],
          groupSize: '2 â€“ 20 People', transport: 'Flight + Coach', accommodation: '3â˜… / 4â˜… Hotels',
          itinerary: [
            { day: 1, title: 'Arrival â€“ Moscow', description: 'Arrive at Sheremetyevo Airport. Check-in. Evening Arbat Street walk & welcome dinner.' },
            { day: 2, title: 'Moscow City Tour', description: 'Red Square, St. Basil\'s Cathedral, Kremlin, Lenin\'s Mausoleum & GUM department store.' },
            { day: 3, title: 'Moscow Metro & Culture', description: 'Moscow Metro tour â€” ornate stations. Bolshoi Theatre exterior. Gorky Park & Sparrow Hills.' },
            { day: 4, title: 'Kolomenskoye & Novodevichy', description: 'Kolomenskoye estate & UNESCO church. Novodevichy Convent & cemetery.' },
            { day: 5, title: 'Departure', description: 'Breakfast at hotel. Transfer to Moscow Airport. Tour ends with beautiful memories.' }
          ]
        },
        {
          id: 20002, nights: 5, duration: '5N/6D', price: 79999, badge: 'Popular',
          name: 'Golden Ring',
          image: 'https://cdn.yourholiday.me/static/dynimg/destination/89/600x300/2750969-2750968_russia.jpg',
          highlights: [
            'Return flights from Mumbai/Delhi included',
            'Moscow & St. Petersburg dual-city coverage',
            'St. Petersburg â€” Hermitage Museum & Winter Palace',
            'Peterhof â€” the Russian Versailles',
            'All transfers & daily breakfast included'
          ],
          groupSize: '2 â€“ 20 People', transport: 'Flight + High-Speed Train + Coach', accommodation: '4â˜… Hotels',
          itinerary: [
            { day: 1, title: 'Arrival â€“ Moscow', description: 'Arrive & check-in. Evening Arbat Street & welcome dinner.' },
            { day: 2, title: 'Moscow City Tour', description: 'Red Square, Kremlin, St. Basil\'s Cathedral & Moscow Metro.' },
            { day: 3, title: 'Sapsan Train to St. Petersburg', description: 'High-speed Sapsan train to St. Petersburg. Check-in. Evening Nevsky Prospekt walk.' },
            { day: 4, title: 'St. Petersburg Highlights', description: 'Hermitage Museum, Winter Palace, Palace Square & Peter & Paul Fortress.' },
            { day: 5, title: 'Peterhof & Catherine Palace', description: 'Peterhof Grand Palace & fountains. Catherine Palace & Amber Room in Pushkin.' },
            { day: 6, title: 'Departure', description: 'Breakfast. Transfer to Pulkovo Airport. Tour ends.' }
          ]
        },
        {
          id: 20003, nights: 6, duration: '6N/7D', price: 99999,
          name: 'Trans-Siberian',
          image: 'https://cdn.yourholiday.me/static/dynimg/destination/89/600x300/2750969-2750968_russia.jpg',
          highlights: [
            'Return flights from Mumbai/Delhi included',
            'Moscow, St. Petersburg & Lake Baikal',
            'Lake Baikal â€” world\'s deepest & oldest lake',
            'Irkutsk â€” gateway to Siberia',
            'All meals, transfers & sightseeing included'
          ],
          groupSize: '2 â€“ 15 People', transport: 'Flight + Train + Coach', accommodation: '4â˜… Hotels',
          itinerary: [
            { day: 1, title: 'Arrival â€“ Moscow', description: 'Arrive & check-in. Evening Arbat Street & welcome dinner.' },
            { day: 2, title: 'Moscow City Tour', description: 'Red Square, Kremlin, St. Basil\'s Cathedral & Moscow Metro.' },
            { day: 3, title: 'Sapsan to St. Petersburg', description: 'High-speed train to St. Petersburg. Hermitage Museum & Nevsky Prospekt.' },
            { day: 4, title: 'St. Petersburg Highlights', description: 'Peterhof fountains, Catherine Palace & Peter & Paul Fortress.' },
            { day: 5, title: 'Fly to Irkutsk', description: 'Flight to Irkutsk. City tour â€” Znamensky Monastery & Decembrist Museum.' },
            { day: 6, title: 'Lake Baikal', description: 'Day trip to Lake Baikal. Listvyanka village, Baikal Museum & boat ride on the world\'s deepest lake.' },
            { day: 7, title: 'Departure', description: 'Breakfast. Transfer to Irkutsk Airport. Tour ends.' }
          ]
        },
        {
          id: 20004, nights: 7, duration: '7N/8D', price: 129999, badge: 'Premium',
          name: 'Grand Russia',
          image: 'https://cdn.yourholiday.me/static/dynimg/destination/89/600x300/2750969-2750968_russia.jpg',
          highlights: [
            'Return flights from Mumbai/Delhi included',
            'Moscow, St. Petersburg, Irkutsk & Lake Baikal',
            'Bolshoi Theatre ballet performance',
            'Private Hermitage Museum tour',
            'All meals, transfers & exclusive experiences'
          ],
          groupSize: '2 â€“ 10 People', transport: 'Flight + Private Coach + Train', accommodation: '4â˜… / 5â˜… Hotels',
          itinerary: [
            { day: 1, title: 'Arrival â€“ Moscow', description: 'Luxury hotel check-in. Evening Arbat Street & welcome dinner.' },
            { day: 2, title: 'Moscow City Tour', description: 'Red Square, Kremlin, St. Basil\'s Cathedral, Moscow Metro & GUM.' },
            { day: 3, title: 'Bolshoi Theatre & Golden Ring', description: 'Bolshoi Theatre ballet performance. Sergiev Posad â€” Trinity Lavra monastery.' },
            { day: 4, title: 'Sapsan to St. Petersburg', description: 'High-speed train to St. Petersburg. Nevsky Prospekt & canal cruise.' },
            { day: 5, title: 'St. Petersburg Highlights', description: 'Private Hermitage Museum tour. Winter Palace, Palace Square & Peter & Paul Fortress.' },
            { day: 6, title: 'Peterhof & Catherine Palace', description: 'Peterhof Grand Palace & fountains. Catherine Palace & Amber Room.' },
            { day: 7, title: 'Lake Baikal', description: 'Fly to Irkutsk. Lake Baikal boat ride, Listvyanka village & Baikal Museum.' },
            { day: 8, title: 'Departure', description: 'Breakfast. Transfer to Irkutsk Airport. Tour ends with beautiful memories.' }
          ]
        }
      ]
    },

    'seychelles': {
      name: 'Seychelles',
      tagline: 'Jewels of the Indian Ocean â€” granite boulders, turquoise bays & rare wildlife',
      heroImage: 'https://cdn.yourholiday.me/static/dynimg/destination/3/600x300/2750342-2750341_seychelles.jpg',
      packages: [
        {
          id: 21001, nights: 4, duration: '4N/5D', price: 74999, badge: 'Bestseller',
          name: 'Seychelles Escape',
          image: 'https://cdn.yourholiday.me/static/dynimg/destination/3/600x300/2750342-2750341_seychelles.jpg',
          highlights: [
            'Return flights from Mumbai/Delhi included',
            'Mahe â€” Beau Vallon Beach & Victoria market',
            'Anse Intendance & Anse Royale beaches',
            'Snorkeling at Sainte Anne Marine Park',
            'All transfers & daily breakfast included'
          ],
          groupSize: '2 â€“ 10 People', transport: 'Flight + Coach', accommodation: '4â˜… Hotels',
          itinerary: [
            { day: 1, title: 'Arrival â€“ Mahe', description: 'Arrive at Seychelles International Airport. Check-in. Evening Beau Vallon Beach & welcome dinner.' },
            { day: 2, title: 'Mahe Island Tour', description: 'Victoria Clock Tower, Sir Selwyn Clarke Market, Botanical Gardens & Anse Royale beach.' },
            { day: 3, title: 'Sainte Anne Marine Park', description: 'Glass-bottom boat & snorkeling at Sainte Anne Marine Park. Afternoon at Beau Vallon.' },
            { day: 4, title: 'Anse Intendance & Morne Blanc', description: 'Anse Intendance beach. Morne Blanc nature trail & panoramic island views.' },
            { day: 5, title: 'Departure', description: 'Breakfast at hotel. Transfer to Seychelles Airport. Tour ends with beautiful memories.' }
          ]
        },
        {
          id: 21002, nights: 5, duration: '5N/6D', price: 99999, badge: 'Popular',
          name: 'Island Hopper',
          image: 'https://cdn.yourholiday.me/static/dynimg/destination/3/600x300/2750342-2750341_seychelles.jpg',
          highlights: [
            'Return flights from Mumbai/Delhi included',
            'Mahe & Praslin island coverage',
            'Praslin â€” Anse Lazio (world\'s best beach)',
            'Vallee de Mai â€” UNESCO Coco de Mer palm forest',
            'All transfers & daily breakfast included'
          ],
          groupSize: '2 â€“ 10 People', transport: 'Flight + Ferry + Coach', accommodation: '4â˜… Hotels',
          itinerary: [
            { day: 1, title: 'Arrival â€“ Mahe', description: 'Arrive & check-in. Evening Beau Vallon Beach & welcome dinner.' },
            { day: 2, title: 'Mahe Island Tour', description: 'Victoria market, Botanical Gardens, Anse Royale & Sainte Anne Marine Park snorkeling.' },
            { day: 3, title: 'Ferry to Praslin', description: 'Ferry to Praslin. Check-in. Afternoon Anse Lazio â€” one of the world\'s best beaches.' },
            { day: 4, title: 'Vallee de Mai & Anse Georgette', description: 'Vallee de Mai UNESCO forest â€” Coco de Mer palms & Black Parrot. Anse Georgette beach.' },
            { day: 5, title: 'Curieuse Island', description: 'Boat trip to Curieuse Island â€” giant Aldabra tortoises & mangrove walk.' },
            { day: 6, title: 'Departure', description: 'Breakfast. Ferry to Mahe. Transfer to airport. Tour ends.' }
          ]
        },
        {
          id: 21003, nights: 6, duration: '6N/7D', price: 129999,
          name: 'Tropical Paradise',
          image: 'https://cdn.yourholiday.me/static/dynimg/destination/3/600x300/2750342-2750341_seychelles.jpg',
          highlights: [
            'Return flights from Mumbai/Delhi included',
            'Mahe, Praslin & La Digue island circuit',
            'La Digue â€” Anse Source d\'Argent (iconic granite boulders)',
            'Scuba diving & snorkeling in crystal waters',
            'All meals, transfers & sightseeing included'
          ],
          groupSize: '2 â€“ 8 People', transport: 'Flight + Ferry + Coach', accommodation: '4â˜… Hotels',
          itinerary: [
            { day: 1, title: 'Arrival â€“ Mahe', description: 'Arrive & check-in. Evening Beau Vallon Beach & welcome dinner.' },
            { day: 2, title: 'Mahe Island Tour', description: 'Victoria market, Botanical Gardens & Sainte Anne Marine Park snorkeling.' },
            { day: 3, title: 'Ferry to Praslin', description: 'Ferry to Praslin. Anse Lazio beach & Vallee de Mai UNESCO forest.' },
            { day: 4, title: 'Curieuse & La Digue', description: 'Curieuse Island tortoises. Ferry to La Digue. Check-in. Evening at leisure.' },
            { day: 5, title: 'La Digue Highlights', description: 'Anse Source d\'Argent â€” iconic granite boulder beach. Bicycle tour of the island.' },
            { day: 6, title: 'Scuba Diving & Snorkeling', description: 'Scuba diving & snorkeling at coral reefs. Farewell sunset dinner on the beach.' },
            { day: 7, title: 'Departure', description: 'Breakfast. Ferry to Mahe. Transfer to airport. Tour ends.' }
          ]
        },
        {
          id: 21004, nights: 7, duration: '7N/8D', price: 164999, badge: 'Premium',
          name: 'Grand Seychelles',
          image: 'https://cdn.yourholiday.me/static/dynimg/destination/3/600x300/2750342-2750341_seychelles.jpg',
          highlights: [
            'Return flights from Mumbai/Delhi included',
            'Mahe, Praslin, La Digue & private island experience',
            'Luxury overwater villa stay',
            'Private yacht island hopping & sunset cruise',
            'All meals, transfers & exclusive experiences'
          ],
          groupSize: '2 â€“ 6 People', transport: 'Flight + Private Ferry + Coach', accommodation: '5â˜… Luxury Resorts',
          itinerary: [
            { day: 1, title: 'Arrival â€“ Mahe', description: 'Luxury resort check-in. Evening Beau Vallon Beach & welcome dinner.' },
            { day: 2, title: 'Mahe Island Tour', description: 'Victoria market, Botanical Gardens & private Sainte Anne Marine Park snorkeling.' },
            { day: 3, title: 'Praslin', description: 'Private ferry to Praslin. Anse Lazio beach & Vallee de Mai UNESCO forest.' },
            { day: 4, title: 'Curieuse & La Digue', description: 'Curieuse Island tortoises. Ferry to La Digue. Luxury villa check-in.' },
            { day: 5, title: 'La Digue & Anse Source d\'Argent', description: 'Anse Source d\'Argent iconic beach. Bicycle island tour & snorkeling.' },
            { day: 6, title: 'Private Yacht Cruise', description: 'Full-day private yacht island hopping. Snorkeling, fishing & sunset cruise.' },
            { day: 7, title: 'Mahe & Spa', description: 'Return to Mahe. Luxury spa session. Farewell dinner at beachfront restaurant.' },
            { day: 8, title: 'Departure', description: 'Breakfast. Transfer to Seychelles Airport. Tour ends with beautiful memories.' }
          ]
        }
      ]
    },

    'mauritius': {
      name: 'Mauritius',
      tagline: 'Pearl of the Indian Ocean - lagoons, waterfalls & Creole culture',
      heroImage: 'https://cdn.yourholiday.me/static/dynimg/destination/70/600x300/2210601-2210600_mauritius.jpg',
      packages: [
        {
          id: 22001, nights: 4, duration: '4N/5D', price: 54999, badge: 'Bestseller',
          name: 'Mauritius Escape',
          image: 'https://cdn.yourholiday.me/static/dynimg/destination/70/600x300/2210601-2210600_mauritius.jpg',
          highlights: [
            'Return flights from Mumbai/Delhi included',
            'Grand Baie - beach & water sports',
            'Chamarel - Seven Coloured Earths & waterfall',
            'Black River Gorges National Park',
            'All transfers & daily breakfast included'
          ],
          groupSize: '2 - 10 People', transport: 'Flight + Coach', accommodation: '4* Hotels',
          itinerary: [
            { day: 1, title: 'Arrival - Mauritius', description: 'Arrive at Sir Seewoosagur Ramgoolam Airport. Check-in. Evening Grand Baie beach walk & welcome dinner.' },
            { day: 2, title: 'North Mauritius Tour', description: 'Grand Baie, Cap Malheureux, Pamplemousses Botanical Garden & Port Louis Caudan Waterfront.' },
            { day: 3, title: 'Chamarel & South Tour', description: 'Seven Coloured Earths, Chamarel Waterfall, Black River Gorges & Gris Gris beach.' },
            { day: 4, title: 'Water Sports & Ile aux Cerfs', description: 'Speedboat to Ile aux Cerfs island. Snorkeling, water sports & beach leisure.' },
            { day: 5, title: 'Departure', description: 'Breakfast at hotel. Transfer to airport. Tour ends with beautiful memories.' }
          ]
        },
        {
          id: 22002, nights: 5, duration: '5N/6D', price: 72999, badge: 'Popular',
          name: 'Island Serenity',
          image: 'https://cdn.yourholiday.me/static/dynimg/destination/70/600x300/2210601-2210600_mauritius.jpg',
          highlights: [
            'Return flights from Mumbai/Delhi included',
            'Ile aux Cerfs island day trip',
            'Underwater waterfall illusion - Le Morne',
            'Dolphin watching cruise at Tamarin Bay',
            'All transfers & daily breakfast included'
          ],
          groupSize: '2 - 10 People', transport: 'Flight + Coach', accommodation: '4* Hotels',
          itinerary: [
            { day: 1, title: 'Arrival - Mauritius', description: 'Arrive & check-in. Evening Grand Baie beach & welcome dinner.' },
            { day: 2, title: 'North Tour', description: 'Grand Baie, Cap Malheureux, Pamplemousses Botanical Garden & Port Louis.' },
            { day: 3, title: 'Ile aux Cerfs', description: 'Speedboat to Ile aux Cerfs. Snorkeling, water sports & beach BBQ lunch.' },
            { day: 4, title: 'South & Le Morne', description: 'Chamarel Seven Coloured Earths, Le Morne Brabant & underwater waterfall viewpoint.' },
            { day: 5, title: 'Dolphin Watching & Tamarin', description: 'Morning dolphin watching cruise at Tamarin Bay. Afternoon at leisure.' },
            { day: 6, title: 'Departure', description: 'Breakfast. Transfer to airport. Tour ends.' }
          ]
        },
        {
          id: 22003, nights: 6, duration: '6N/7D', price: 94999,
          name: 'Tropical Bliss',
          image: 'https://cdn.yourholiday.me/static/dynimg/destination/70/600x300/2210601-2210600_mauritius.jpg',
          highlights: [
            'Return flights from Mumbai/Delhi included',
            'Full island circuit - North, South, East & West',
            'Scuba diving & snorkeling at Blue Bay Marine Park',
            'Catamaran sunset cruise',
            'All meals, transfers & sightseeing included'
          ],
          groupSize: '2 - 8 People', transport: 'Flight + Coach', accommodation: '4* Hotels',
          itinerary: [
            { day: 1, title: 'Arrival - Mauritius', description: 'Arrive & check-in. Evening Grand Baie beach & welcome dinner.' },
            { day: 2, title: 'North Tour', description: 'Grand Baie, Cap Malheureux, Pamplemousses Botanical Garden & Port Louis Caudan.' },
            { day: 3, title: 'Ile aux Cerfs & Water Sports', description: 'Speedboat to Ile aux Cerfs. Snorkeling, parasailing & beach leisure.' },
            { day: 4, title: 'South Tour', description: 'Chamarel Seven Coloured Earths, Chamarel Waterfall & Black River Gorges.' },
            { day: 5, title: 'Blue Bay Marine Park', description: 'Scuba diving & snorkeling at Blue Bay Marine Park. Mahebourg Waterfront.' },
            { day: 6, title: 'Catamaran Cruise', description: 'Full-day catamaran cruise - snorkeling, BBQ lunch & sunset on the ocean.' },
            { day: 7, title: 'Departure', description: 'Breakfast. Transfer to airport. Tour ends.' }
          ]
        },
        {
          id: 22004, nights: 7, duration: '7N/8D', price: 124999, badge: 'Premium',
          name: 'Grand Mauritius',
          image: 'https://cdn.yourholiday.me/static/dynimg/destination/70/600x300/2210601-2210600_mauritius.jpg',
          highlights: [
            'Return flights from Mumbai/Delhi included',
            'Luxury beach resort stay',
            'Private catamaran & helicopter island tour',
            'Rodrigues Island day trip',
            'All meals, transfers & exclusive experiences'
          ],
          groupSize: '2 - 6 People', transport: 'Flight + Private Coach', accommodation: '5* Luxury Resorts',
          itinerary: [
            { day: 1, title: 'Arrival - Mauritius', description: 'Luxury resort check-in. Evening Grand Baie beach & welcome dinner.' },
            { day: 2, title: 'North Tour', description: 'Grand Baie, Cap Malheureux, Pamplemousses Botanical Garden & Port Louis.' },
            { day: 3, title: 'Ile aux Cerfs & Scuba', description: 'Private speedboat to Ile aux Cerfs. Scuba diving & snorkeling.' },
            { day: 4, title: 'South & Le Morne', description: 'Chamarel Seven Coloured Earths, Le Morne & underwater waterfall viewpoint.' },
            { day: 5, title: 'Helicopter Tour', description: 'Scenic helicopter flight over the island. Blue Bay Marine Park snorkeling.' },
            { day: 6, title: 'Rodrigues Island', description: 'Day trip to Rodrigues Island - pristine beaches & giant tortoise reserve.' },
            { day: 7, title: 'Private Catamaran Cruise', description: 'Private catamaran sunset cruise. Farewell dinner at beachfront restaurant.' },
            { day: 8, title: 'Departure', description: 'Breakfast. Transfer to airport. Tour ends with beautiful memories.' }
          ]
        }
      ]
    },

    'portugal': {
      name: 'Portugal',
      tagline: 'Land of Explorers - Fado music, golden coastlines & timeless history',
      heroImage: 'https://cdn.yourholiday.me/static/dynimg/destination/20/600x300/2750340-2750339_portugal.jpg',
      packages: [
        {
          id: 23001, nights: 4, duration: '4N/5D', price: 59999, badge: 'Bestseller',
          name: 'Lisbon Escape',
          image: 'https://cdn.yourholiday.me/static/dynimg/destination/20/600x300/2750340-2750339_portugal.jpg',
          highlights: [
            'Return flights from Mumbai/Delhi included',
            'Lisbon - Belem Tower & Jeronimos Monastery',
            'Sintra - UNESCO palaces & Pena Palace',
            'Alfama district & Fado music evening',
            'All transfers & daily breakfast included'
          ],
          groupSize: '2 - 20 People', transport: 'Flight + Coach', accommodation: '3* / 4* Hotels',
          itinerary: [
            { day: 1, title: 'Arrival - Lisbon', description: 'Arrive at Lisbon Airport. Check-in. Evening Alfama district walk & Fado music dinner.' },
            { day: 2, title: 'Lisbon City Tour', description: 'Belem Tower, Jeronimos Monastery, Monument to the Discoveries & LX Factory.' },
            { day: 3, title: 'Sintra Day Trip', description: 'Pena Palace, Moorish Castle, Quinta da Regaleira & Sintra village walk.' },
            { day: 4, title: 'Cascais & Estoril', description: 'Cascais fishing village, Estoril Casino & Cabo da Roca - westernmost point of Europe.' },
            { day: 5, title: 'Departure', description: 'Breakfast at hotel. Transfer to Lisbon Airport. Tour ends with beautiful memories.' }
          ]
        },
        {
          id: 23002, nights: 5, duration: '5N/6D', price: 77999, badge: 'Popular',
          name: 'Algarve Dreams',
          image: 'https://cdn.yourholiday.me/static/dynimg/destination/20/600x300/2750340-2750339_portugal.jpg',
          highlights: [
            'Return flights from Mumbai/Delhi included',
            'Lisbon & Algarve dual coverage',
            'Algarve - Ponta da Piedade golden cliffs',
            'Benagil Sea Cave boat tour',
            'All transfers & daily breakfast included'
          ],
          groupSize: '2 - 20 People', transport: 'Flight + Coach', accommodation: '4* Hotels',
          itinerary: [
            { day: 1, title: 'Arrival - Lisbon', description: 'Arrive & check-in. Evening Alfama district & Fado music dinner.' },
            { day: 2, title: 'Lisbon City Tour', description: 'Belem Tower, Jeronimos Monastery, Sintra Pena Palace & Cascais.' },
            { day: 3, title: 'Drive to Algarve', description: 'Drive to Algarve. Lagos old town, Ponta da Piedade golden cliffs & Meia Praia beach.' },
            { day: 4, title: 'Benagil Cave & Albufeira', description: 'Benagil Sea Cave boat tour. Albufeira old town & Falesia beach.' },
            { day: 5, title: 'Sagres & Cape St. Vincent', description: 'Sagres Fortress & Cape St. Vincent - southwesternmost point of Europe.' },
            { day: 6, title: 'Departure', description: 'Breakfast. Transfer to Faro Airport. Tour ends.' }
          ]
        },
        {
          id: 23003, nights: 6, duration: '6N/7D', price: 99999,
          name: 'Portugal Explorer',
          image: 'https://cdn.yourholiday.me/static/dynimg/destination/20/600x300/2750340-2750339_portugal.jpg',
          highlights: [
            'Return flights from Mumbai/Delhi included',
            'Lisbon, Porto & Algarve full circuit',
            'Porto - Douro Valley wine tasting',
            'Ribeira district & Dom Luis Bridge',
            'All meals, transfers & sightseeing included'
          ],
          groupSize: '2 - 15 People', transport: 'Flight + Coach + Train', accommodation: '4* Hotels',
          itinerary: [
            { day: 1, title: 'Arrival - Lisbon', description: 'Arrive & check-in. Evening Alfama district & Fado music dinner.' },
            { day: 2, title: 'Lisbon City Tour', description: 'Belem Tower, Jeronimos Monastery & Monument to the Discoveries.' },
            { day: 3, title: 'Sintra & Cascais', description: 'Pena Palace, Moorish Castle & Cabo da Roca. Cascais fishing village.' },
            { day: 4, title: 'Train to Porto', description: 'Train to Porto. Ribeira district, Dom Luis Bridge & Livraria Lello bookshop.' },
            { day: 5, title: 'Douro Valley', description: 'Douro Valley wine country - vineyard tour, wine tasting & river cruise.' },
            { day: 6, title: 'Algarve', description: 'Drive to Algarve. Ponta da Piedade, Benagil Cave & Albufeira beach.' },
            { day: 7, title: 'Departure', description: 'Breakfast. Transfer to Faro Airport. Tour ends.' }
          ]
        },
        {
          id: 23004, nights: 7, duration: '7N/8D', price: 129999, badge: 'Premium',
          name: 'Iberian Journey',
          image: 'https://cdn.yourholiday.me/static/dynimg/destination/20/600x300/2750340-2750339_portugal.jpg',
          highlights: [
            'Return flights from Mumbai/Delhi included',
            'Lisbon, Sintra, Porto, Douro Valley & Algarve',
            'Private Douro Valley wine cruise',
            'Azores Islands day trip (optional)',
            'All meals, transfers & exclusive experiences'
          ],
          groupSize: '2 - 10 People', transport: 'Flight + Private Coach + Train', accommodation: '4* / 5* Hotels',
          itinerary: [
            { day: 1, title: 'Arrival - Lisbon', description: 'Luxury hotel check-in. Evening Alfama district & Fado music dinner.' },
            { day: 2, title: 'Lisbon City Tour', description: 'Belem Tower, Jeronimos Monastery, LX Factory & Chiado neighbourhood.' },
            { day: 3, title: 'Sintra & Cascais', description: 'Pena Palace, Quinta da Regaleira, Moorish Castle & Cabo da Roca.' },
            { day: 4, title: 'Train to Porto', description: 'Train to Porto. Ribeira district, Dom Luis Bridge & Livraria Lello.' },
            { day: 5, title: 'Douro Valley Private Cruise', description: 'Private Douro Valley wine cruise - vineyards, wine tasting & riverside lunch.' },
            { day: 6, title: 'Algarve', description: 'Drive to Algarve. Ponta da Piedade, Benagil Cave & Lagos old town.' },
            { day: 7, title: 'Sagres & Cape St. Vincent', description: 'Sagres Fortress, Cape St. Vincent & Albufeira beach leisure.' },
            { day: 8, title: 'Departure', description: 'Breakfast. Transfer to Faro Airport. Tour ends with beautiful memories.' }
          ]
        }
      ]
    },

    'sri lanka': {
      name: 'Sri Lanka',
      tagline: 'Pearl of the Orient - ancient temples, tea hills & golden beaches',
      heroImage: 'https://cdn.yourholiday.me/static/dynimg/destination/93/600x300/2210565-2210564_srilanka.jpg',
      packages: [
        {
          id: 24001, nights: 4, duration: '4N/5D', price: 24999, badge: 'Bestseller',
          name: 'Ceylon Highlights',
          image: 'https://cdn.yourholiday.me/static/dynimg/destination/93/600x300/2210565-2210564_srilanka.jpg',
          highlights: [
            'Return flights from Mumbai/Delhi included',
            'Sigiriya Rock Fortress - UNESCO World Heritage',
            'Dambulla Cave Temple & Kandy Temple of Tooth',
            'Nuwara Eliya tea plantation visit',
            'All transfers & daily breakfast included'
          ],
          groupSize: '2 - 20 People', transport: 'Flight + Coach', accommodation: '3* / 4* Hotels',
          itinerary: [
            { day: 1, title: 'Arrival - Colombo', description: 'Arrive at Bandaranaike International Airport. Check-in. Evening Colombo city drive & welcome dinner.' },
            { day: 2, title: 'Sigiriya & Dambulla', description: 'Sigiriya Rock Fortress climb. Dambulla Cave Temple with ancient Buddhist murals.' },
            { day: 3, title: 'Kandy', description: 'Drive to Kandy. Temple of the Sacred Tooth Relic, Kandy Lake & cultural dance show.' },
            { day: 4, title: 'Nuwara Eliya Tea Country', description: 'Drive through tea plantations. Tea factory visit & tasting. Gregory Lake walk.' },
            { day: 5, title: 'Departure', description: 'Breakfast at hotel. Transfer to Colombo Airport. Tour ends with beautiful memories.' }
          ]
        },
        {
          id: 24002, nights: 5, duration: '5N/6D', price: 32999, badge: 'Popular',
          name: 'Tea Trail',
          image: 'https://cdn.yourholiday.me/static/dynimg/destination/93/600x300/2210565-2210564_srilanka.jpg',
          highlights: [
            'Return flights from Mumbai/Delhi included',
            'Sigiriya, Kandy & Nuwara Eliya coverage',
            'Yala National Park - leopard & elephant safari',
            'Bentota beach & water sports',
            'All transfers & daily breakfast included'
          ],
          groupSize: '2 - 20 People', transport: 'Flight + Coach', accommodation: '4* Hotels',
          itinerary: [
            { day: 1, title: 'Arrival - Colombo', description: 'Arrive & check-in. Evening Colombo city drive & welcome dinner.' },
            { day: 2, title: 'Sigiriya & Dambulla', description: 'Sigiriya Rock Fortress & Dambulla Cave Temple.' },
            { day: 3, title: 'Kandy & Tea Country', description: 'Temple of the Tooth, Kandy Lake & Nuwara Eliya tea plantation.' },
            { day: 4, title: 'Yala National Park', description: 'Drive to Yala. Jeep safari - leopards, elephants, crocodiles & exotic birds.' },
            { day: 5, title: 'Bentota Beach', description: 'Drive to Bentota. Beach leisure, water sports & Madu River boat safari.' },
            { day: 6, title: 'Departure', description: 'Breakfast. Transfer to Colombo Airport. Tour ends.' }
          ]
        },
        {
          id: 24003, nights: 6, duration: '6N/7D', price: 42999,
          name: 'Sri Lanka Explorer',
          image: 'https://cdn.yourholiday.me/static/dynimg/destination/93/600x300/2210565-2210564_srilanka.jpg',
          highlights: [
            'Return flights from Mumbai/Delhi included',
            'Colombo, Sigiriya, Kandy, Nuwara Eliya & Galle',
            'Galle Fort - UNESCO Dutch colonial heritage',
            'Whale watching at Mirissa',
            'All meals, transfers & sightseeing included'
          ],
          groupSize: '2 - 15 People', transport: 'Flight + Coach', accommodation: '4* Hotels',
          itinerary: [
            { day: 1, title: 'Arrival - Colombo', description: 'Arrive & check-in. Evening Colombo city drive & welcome dinner.' },
            { day: 2, title: 'Sigiriya & Dambulla', description: 'Sigiriya Rock Fortress & Dambulla Cave Temple.' },
            { day: 3, title: 'Kandy', description: 'Temple of the Tooth, Kandy Lake, Peradeniya Botanical Gardens & cultural show.' },
            { day: 4, title: 'Nuwara Eliya', description: 'Tea plantation & factory visit. Gregory Lake & Horton Plains National Park.' },
            { day: 5, title: 'Galle Fort', description: 'Drive to Galle. UNESCO Galle Fort, Dutch Reformed Church & lighthouse.' },
            { day: 6, title: 'Mirissa Whale Watching', description: 'Morning whale watching cruise at Mirissa. Afternoon Unawatuna beach.' },
            { day: 7, title: 'Departure', description: 'Breakfast. Transfer to Colombo Airport. Tour ends.' }
          ]
        },
        {
          id: 24004, nights: 7, duration: '7N/8D', price: 56999, badge: 'Premium',
          name: 'Grand Ceylon',
          image: 'https://cdn.yourholiday.me/static/dynimg/destination/93/600x300/2210565-2210564_srilanka.jpg',
          highlights: [
            'Return flights from Mumbai/Delhi included',
            'Colombo, Sigiriya, Kandy, Nuwara Eliya, Yala & Galle',
            'Yala National Park leopard safari',
            'Luxury train ride - Kandy to Ella',
            'All meals, transfers & exclusive experiences'
          ],
          groupSize: '2 - 10 People', transport: 'Flight + Private Coach + Train', accommodation: '4* / 5* Hotels',
          itinerary: [
            { day: 1, title: 'Arrival - Colombo', description: 'Luxury hotel check-in. Evening Colombo city drive & welcome dinner.' },
            { day: 2, title: 'Sigiriya & Dambulla', description: 'Sigiriya Rock Fortress & Dambulla Cave Temple.' },
            { day: 3, title: 'Kandy', description: 'Temple of the Tooth, Kandy Lake & Peradeniya Botanical Gardens.' },
            { day: 4, title: 'Scenic Train to Ella', description: 'Luxury train ride Kandy to Ella - one of the world\'s most scenic rail journeys.' },
            { day: 5, title: 'Ella & Nuwara Eliya', description: 'Nine Arch Bridge, Little Adam\'s Peak trek & tea plantation visit.' },
            { day: 6, title: 'Yala National Park', description: 'Drive to Yala. Jeep safari - leopards, elephants & exotic wildlife.' },
            { day: 7, title: 'Galle & Mirissa', description: 'Galle Fort UNESCO heritage. Mirissa whale watching & Unawatuna beach.' },
            { day: 8, title: 'Departure', description: 'Breakfast. Transfer to Colombo Airport. Tour ends with beautiful memories.' }
          ]
        }
      ]
    }

  };
}
