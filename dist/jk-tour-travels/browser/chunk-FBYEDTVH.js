import {
  ChangeDetectorRef,
  Directive,
  ElementRef,
  EventEmitter,
  Host,
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  InputFlags,
  NgModule,
  Optional,
  Output,
  Renderer2,
  RuntimeError,
  Self,
  SkipSelf,
  Version,
  __spreadProps,
  __spreadValues,
  booleanAttribute,
  forkJoin,
  forwardRef,
  from,
  getDOM,
  inject,
  isPromise,
  isSubscribable,
  map,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵgetInheritedFactory,
  ɵɵlistener
} from "./chunk-U7W74ZSJ.js";

// src/app/core/services/data.service.ts
var DataService = class _DataService {
  constructor() {
    this.companyName = "J K Tours And Travels, Pune";
    this.logo = "https://cdn.yourholiday.me/static/dynimg/partner/37/300x150/3562268-3562267_j-k-new-logo.jpg";
    this.heroImage = "https://cdn.yourholiday.me/static/dynimg/itinerary/85/1200x900/2191615-2191614_adobestock_223056954.jpg";
    this.customizeImage = "https://cdn.yourholiday.me/static/dynimg/itinerary/99/1200x900/3191480-3191479_azin-javadzadeh-wmpyrpas7dq-unsplash.jpg";
    this.typewriterWords = [
      "Dubai starting Rs. 39,999",
      "Thailand starting Rs. 19,999",
      "Singapore starting Rs. 44,999",
      "Europe starting Rs. 1,19,999",
      "Australia starting Rs. 1,29,999",
      "Goa starting Rs. 9,999",
      "Kerala starting Rs. 14,999"
    ];
    this.destinations = [
      { id: 1, name: "Andamans", image: "https://cdn.yourholiday.me/static/dynimg/destination/33/600x300/2210456-2210455_andaman.jpg" },
      { id: 2, name: "Australia", image: "https://cdn.yourholiday.me/static/dynimg/destination/58/600x300/2210344-2210343_australia.jpg" },
      { id: 3, name: "Bali", image: "https://cdn.yourholiday.me/static/dynimg/destination/48/600x300/3996290-3996289_bali-4.jpg" },
      { id: 4, name: "Cambodia", image: "https://cdn.yourholiday.me/static/dynimg/destination/60/600x300/3160621-3160620_cambodia.jpg" },
      { id: 5, name: "Dubai", image: "https://cdn.yourholiday.me/static/dynimg/destination/16/600x300/3598628-3598627_adobestock_47088158.jpg" },
      { id: 6, name: "Europe", image: "https://cdn.yourholiday.me/static/dynimg/destination/21/600x300/2190173-2190172_europe-1-main-image.jpg" },
      { id: 7, name: "Georgia", image: "https://cdn.yourholiday.me/static/dynimg/destination/7/600x300/2185866-2185865_georgia-main-image.jpg" },
      { id: 8, name: "Greece", image: "https://cdn.yourholiday.me/static/dynimg/destination/5/600x300/2750959-2750958_greece.jpg" },
      { id: 9, name: "Italy", image: "https://cdn.yourholiday.me/static/dynimg/destination/79/600x300/2750961-2750960_italy.jpg" },
      { id: 10, name: "Japan", image: "https://cdn.yourholiday.me/static/dynimg/destination/64/600x300/2750318-2750317_japan.jpg" },
      { id: 11, name: "Kazakhstan", image: "https://cdn.yourholiday.me/static/dynimg/destination/58/600x300/2750322-2750321_kazakhstan.jpg" },
      { id: 12, name: "Malaysia", image: "https://cdn.yourholiday.me/static/dynimg/destination/64/600x300/3160627-3160626_tourist-places-in-malaysia.jpg" },
      { id: 13, name: "Maldives", image: "https://cdn.yourholiday.me/static/dynimg/destination/98/600x300/2750963-2750962_maldives.jpg" },
      { id: 14, name: "Mauritius", image: "https://cdn.yourholiday.me/static/dynimg/destination/70/600x300/2210601-2210600_mauritius.jpg" },
      { id: 15, name: "New Zealand", image: "https://cdn.yourholiday.me/static/dynimg/destination/48/600x300/2190141-2190140_rock-formations-on-wharariki-beach-new-zealand--1.jpg" },
      { id: 16, name: "Portugal", image: "https://cdn.yourholiday.me/static/dynimg/destination/20/600x300/2750340-2750339_portugal.jpg" },
      { id: 17, name: "Russia", image: "https://cdn.yourholiday.me/static/dynimg/destination/89/600x300/2750969-2750968_russia.jpg" },
      { id: 18, name: "Seychelles", image: "https://cdn.yourholiday.me/static/dynimg/destination/3/600x300/2750342-2750341_seychelles.jpg" },
      { id: 19, name: "Singapore", image: "https://cdn.yourholiday.me/static/dynimg/destination/58/600x300/3996296-3996295_singapore-stock-image.jpg" },
      { id: 20, name: "Spain", image: "https://cdn.yourholiday.me/static/dynimg/destination/56/600x300/2750344-2750343_spain.jpg" },
      { id: 21, name: "Sri Lanka", image: "https://cdn.yourholiday.me/static/dynimg/destination/93/600x300/2210565-2210564_srilanka.jpg" },
      { id: 22, name: "Switzerland", image: "https://cdn.yourholiday.me/static/dynimg/destination/74/600x300/2190187-2190186_zurich-switzerland-view-of-the-historic-city-center-with-famous-fraumunster-church-5.jpg" },
      { id: 23, name: "Thailand", image: "https://cdn.yourholiday.me/static/dynimg/destination/32/600x300/3076721-3076720_thailand2.jpg" },
      { id: 24, name: "Turkey", image: "https://cdn.yourholiday.me/static/dynimg/destination/45/600x300/2750974-2750973_turkey.jpg" },
      { id: 25, name: "Vietnam", image: "https://cdn.yourholiday.me/static/dynimg/destination/35/600x300/3078047-3078046_vietnam.jpg" }
    ];
    this.europePackages = [
      {
        id: 1,
        title: "Grand Tour of Europe with All Meals",
        image: "https://cdn.yourholiday.me/static/dynimg/itinerary/55/600x300/2998781-2998780_london-tourism-title.jpg",
        itinerary: "London 3N, Paris 3N, Rotterdam 1N, ...",
        price: 404583,
        category: "Europe",
        badge: "Fixed Departure"
      },
      {
        id: 2,
        title: "Wonders of Europe",
        image: "https://cdn.yourholiday.me/static/dynimg/itinerary/38/600x300/2990875-2990874_swiss.jpg",
        itinerary: "Paris 3N, Rotterdam 1N, Cologne 1N, ...",
        price: 322573,
        category: "Europe"
      },
      {
        id: 3,
        title: "Glimpses of Europe",
        image: "https://cdn.yourholiday.me/static/dynimg/itinerary/43/600x300/2993319-2993318_europe.jpg",
        itinerary: "Paris 3N, Eindhoven 1N, Cologne 1N, ...",
        price: 229628,
        category: "Europe"
      },
      {
        id: 4,
        title: "UK and Scotland (Summer 2024)",
        image: "https://cdn.yourholiday.me/static/dynimg/itinerary/15/600x300/2995351-2995350_uk_tourism.jpg",
        itinerary: "London 2N, Birmingham 1N, Glasgow 3N, ...",
        price: 316471,
        category: "Europe"
      }
    ];
    this.andamanPackages = [
      {
        id: 5,
        title: "Andaman Island Delight With Flight",
        image: "https://cdn.yourholiday.me/static/dynimg/itinerary/16/600x300/3032141-3032140_hero-anadaman-19-1-min.jpg",
        itinerary: "Port Blair 1N, Havelock-Island 2N, ...",
        price: 28264,
        category: "Andaman",
        badge: "Fixed Departure"
      },
      {
        id: 6,
        title: "Island Escape With Complimentary Photoshoot",
        image: "https://cdn.yourholiday.me/static/dynimg/itinerary/16/600x300/3032082-3032081_hero-anadaman-21-min.jpg",
        itinerary: "Port Blair 1N, Havelock-Island 2N, ...",
        price: 16836,
        category: "Andaman"
      },
      {
        id: 7,
        title: "Andaman Honeymoon Escapes",
        image: "https://cdn.yourholiday.me/static/dynimg/itinerary/7/600x300/3177247-3177246_honeymoon.jpg",
        itinerary: "Port Blair 1N, Havelock-Island 2N, ...",
        price: 25509,
        category: "Andaman"
      },
      {
        id: 8,
        title: "Best of Andaman",
        image: "https://cdn.yourholiday.me/static/dynimg/itinerary/56/600x300/3115245-3115244_andaman-oickture.jpg",
        itinerary: "Port Blair 1N, Havelock-Island 2N, ...",
        price: 27755,
        category: "Andaman"
      }
    ];
    this.domesticPackages = [
      {
        id: 9,
        title: "Stunning Kerala - Budget",
        image: "https://cdn.yourholiday.me/static/dynimg/itinerary/14/600x300/2228853-2228852_kerala-1.jpg",
        itinerary: "Munnar 2N, Thekkady 1N, Kumarakom 1N, ...",
        price: 16562,
        category: "Domestic"
      },
      {
        id: 10,
        title: "Luxury in South India",
        image: "https://cdn.yourholiday.me/static/dynimg/itinerary/28/600x300/2210839-2210838_hampi.jpg",
        itinerary: "Bangalore 2N, Mysore 2N, Ooty 2N, ...",
        price: 104322,
        category: "Domestic"
      },
      {
        id: 11,
        title: "MAGICAL ANDAMAN",
        image: "https://cdn.yourholiday.me/static/dynimg/destination/48/600x300/2086330-2086329_portblair.jpg",
        itinerary: "Port Blair 2N, Havelock-Island 1N, ...",
        price: 18515,
        category: "Domestic"
      },
      {
        id: 12,
        title: "EXOTIC ANDAMAN",
        image: "https://cdn.yourholiday.me/static/dynimg/itinerary/71/600x300/2228849-2228848_andaman-3.jpg",
        itinerary: "Port Blair 1N, Havelock-Island 2N, ...",
        price: 18314,
        category: "Domestic"
      },
      {
        id: 13,
        title: "Classic Kerala: God's own Country",
        image: "https://cdn.yourholiday.me/static/dynimg/itinerary/17/600x300/2182118-2182117_classic-kerala-gods-own-country.jpg",
        itinerary: "Kochi 2N, Munnar 2N, Thekkady 1N, ...",
        price: 58111,
        category: "Domestic"
      },
      {
        id: 14,
        title: "Goa 4 Nights 3 Star",
        image: "https://cdn.yourholiday.me/static/dynimg/itinerary/76/600x300/2210775-2210774_goa-pack1.jpg",
        itinerary: "Goa 4N",
        price: 10272,
        category: "Domestic"
      },
      {
        id: 15,
        title: "Magnificent Tour to Himachal",
        image: "https://cdn.yourholiday.me/static/dynimg/itinerary/11/600x300/2228921-2228920_hp-3.jpg",
        itinerary: "Shimla 2N, Manali 3N, Dharamshala 1N, ...",
        price: 21115,
        category: "Domestic"
      },
      {
        id: 16,
        title: "Amazing Himachal with Chandigarh",
        image: "https://cdn.yourholiday.me/static/dynimg/itinerary/21/600x300/2228887-2228886_manali-1.jpg",
        itinerary: "Shimla 2N, Manali 3N, Dharamshala 1N, ...",
        price: 27257,
        category: "Domestic"
      }
    ];
    this.baliPackages = [
      {
        id: 101,
        title: "Bali Basic for First Timers",
        image: "https://cdn.yourholiday.me/static/dynimg/destination/48/600x300/3996290-3996289_bali-4.jpg",
        itinerary: "Ubud Kintamani, Water Sports, Uluwatu Kecak, Taman Ayun Temple, Monkey Forest, Tanah Lot",
        price: 12387,
        category: "Bali",
        badge: "Bestseller"
      },
      {
        id: 102,
        title: "Beautiful Bali",
        image: "https://cdn.yourholiday.me/static/dynimg/itinerary/21/600x300/2210757-2210756_sin-pack-1.jpg",
        itinerary: "Ubud, Kintamani, Goa Gajah, Water Sports, Uluwatu Kecak, Taman Ayun, Monkey Forest, Tanah Lot, Ulun Danu Temple, Git Git Waterfalls",
        price: 15917,
        category: "Bali",
        badge: "Bestseller"
      },
      {
        id: 103,
        title: "Romantic Bali",
        image: "https://cdn.yourholiday.me/static/dynimg/itinerary/99/600x300/3191480-3191479_azin-javadzadeh-wmpyrpas7dq-unsplash.jpg",
        itinerary: "Ubud, Water Sports, Uluwatu Kecak, Bali Swing, Tanah Lot, Rice Terraces, Balinese Spa",
        price: 27169,
        category: "Bali",
        badge: "Bestseller"
      },
      {
        id: 104,
        title: "Glimpses of Bali",
        image: "https://cdn.yourholiday.me/static/dynimg/destination/48/600x300/3996290-3996289_bali-4.jpg",
        itinerary: "Bali Safari Park, Water Sports, Uluwatu Kecak, Taman Ayun Temple, Monkey Forest, Tanah Lot, Ulun Danu Temple, Rice Terraces",
        price: 40695,
        category: "Bali",
        badge: "Bestseller"
      },
      {
        id: 105,
        title: "Relaxed Bali for Couples",
        image: "https://cdn.yourholiday.me/static/dynimg/itinerary/7/600x300/3177247-3177246_honeymoon.jpg",
        itinerary: "Water Sports, Uluwatu Kecak, Tukad Cepung Falls, Rice Terraces, Tanah Lot",
        price: 23323,
        category: "Bali",
        badge: "Honeymoon Special"
      },
      {
        id: 106,
        title: "Scenic Bali for Honeymooners",
        image: "https://cdn.yourholiday.me/static/dynimg/destination/48/600x300/3996290-3996289_bali-4.jpg",
        itinerary: "Candle Light Dinner, Water Sports, Uluwatu Kecak, Tegenungan Falls, Rice Terraces, Gates of Heaven, Ulun Danu Temple, Taman Ayun",
        price: 26278,
        category: "Bali",
        badge: "Honeymoon Special"
      },
      {
        id: 107,
        title: "Bali Honeymoon Delight",
        image: "https://cdn.yourholiday.me/static/dynimg/itinerary/7/600x300/3177247-3177246_honeymoon.jpg",
        itinerary: "Seminyak, Ubud, Kintamani, Water Sports, Uluwatu Kecak, Bali Swing, Tanah Lot, Candle Light Dinner",
        price: 29450,
        category: "Bali",
        badge: "Honeymoon Special"
      },
      {
        id: 108,
        title: "Bali with Nusa Penida",
        image: "https://cdn.yourholiday.me/static/dynimg/itinerary/21/600x300/2210757-2210756_sin-pack-1.jpg",
        itinerary: "Nusa Penida, Kelingking Beach, Angel Billabong, Broken Beach, Water Sports, Uluwatu Kecak, Tanah Lot",
        price: 32500,
        category: "Bali"
      },
      {
        id: 109,
        title: "Bali Adventure Package",
        image: "https://cdn.yourholiday.me/static/dynimg/itinerary/99/600x300/3191480-3191479_azin-javadzadeh-wmpyrpas7dq-unsplash.jpg",
        itinerary: "White Water Rafting, ATV Ride, Water Sports, Ubud Monkey Forest, Kintamani Volcano, Uluwatu Kecak",
        price: 18750,
        category: "Bali"
      },
      {
        id: 110,
        title: "Bali Family Fun",
        image: "https://cdn.yourholiday.me/static/dynimg/destination/48/600x300/3996290-3996289_bali-4.jpg",
        itinerary: "Bali Safari Park, Waterbom Park, Ubud, Kintamani, Tanah Lot, Taman Ayun Temple",
        price: 21800,
        category: "Bali"
      },
      {
        id: 111,
        title: "Best of Bali",
        image: "https://cdn.yourholiday.me/static/dynimg/itinerary/21/600x300/2210757-2210756_sin-pack-1.jpg",
        itinerary: "Ubud, Kintamani, Goa Gajah, Tirta Empul, Water Sports, Uluwatu Kecak, Tanah Lot, Ulun Danu Temple, Git Git Waterfalls, Rice Terraces",
        price: 35200,
        category: "Bali"
      },
      {
        id: 112,
        title: "Bali Luxury Escape",
        image: "https://cdn.yourholiday.me/static/dynimg/itinerary/99/600x300/3191480-3191479_azin-javadzadeh-wmpyrpas7dq-unsplash.jpg",
        itinerary: "Private Villa, Seminyak, Ubud, Bali Swing, Candle Light Dinner, Spa, Water Sports, Uluwatu Kecak, Tanah Lot",
        price: 55e3,
        category: "Bali",
        badge: "Luxury"
      },
      {
        id: 113,
        title: "Bali Budget Getaway",
        image: "https://cdn.yourholiday.me/static/dynimg/destination/48/600x300/3996290-3996289_bali-4.jpg",
        itinerary: "Kuta Beach, Seminyak, Water Sports, Uluwatu Kecak, Tanah Lot",
        price: 9999,
        category: "Bali",
        badge: "Budget"
      },
      {
        id: 114,
        title: "Bali with Lombok",
        image: "https://cdn.yourholiday.me/static/dynimg/itinerary/21/600x300/2210757-2210756_sin-pack-1.jpg",
        itinerary: "Bali 4N, Lombok 3N, Gili Islands, Senggigi Beach, Ubud, Water Sports, Uluwatu Kecak",
        price: 42e3,
        category: "Bali"
      },
      {
        id: 115,
        title: "Bali Cultural Tour",
        image: "https://cdn.yourholiday.me/static/dynimg/itinerary/99/600x300/3191480-3191479_azin-javadzadeh-wmpyrpas7dq-unsplash.jpg",
        itinerary: "Ubud Royal Palace, Goa Gajah, Tirta Empul, Besakih Temple, Kintamani, Taman Ayun, Tanah Lot",
        price: 19500,
        category: "Bali"
      },
      {
        id: 116,
        title: "Bali Wellness Retreat",
        image: "https://cdn.yourholiday.me/static/dynimg/destination/48/600x300/3996290-3996289_bali-4.jpg",
        itinerary: "Ubud Yoga, Balinese Spa, Rice Terraces, Tirta Empul, Bali Swing, Tanah Lot, Seminyak Sunset",
        price: 33800,
        category: "Bali"
      },
      {
        id: 117,
        title: "Grand Bali Experience",
        image: "https://cdn.yourholiday.me/static/dynimg/itinerary/21/600x300/2210757-2210756_sin-pack-1.jpg",
        itinerary: "Ubud, Kintamani, Nusa Penida, Bali Safari, Water Sports, Uluwatu Kecak, Bali Swing, Tanah Lot, Ulun Danu Temple, Rice Terraces, Git Git Waterfalls",
        price: 48900,
        category: "Bali"
      },
      {
        id: 118,
        title: "Bali Highlights with Seminyak",
        image: "https://cdn.yourholiday.me/static/dynimg/itinerary/99/600x300/3191480-3191479_azin-javadzadeh-wmpyrpas7dq-unsplash.jpg",
        itinerary: "Seminyak, Ubud, Kintamani, Water Sports, Uluwatu Kecak, Tanah Lot, Taman Ayun, Monkey Forest",
        price: 22600,
        category: "Bali"
      },
      {
        id: 119,
        title: "Bali Bliss - Extended",
        image: "https://cdn.yourholiday.me/static/dynimg/destination/48/600x300/3996290-3996289_bali-4.jpg",
        itinerary: "Ubud, Kintamani, Goa Gajah, Nusa Penida, Kelingking Beach, Water Sports, Uluwatu Kecak, Bali Swing, Tanah Lot, Ulun Danu Temple, Rice Terraces, Git Git Waterfalls",
        price: 38500,
        category: "Bali"
      },
      {
        id: 120,
        title: "Bali Splendour",
        image: "https://cdn.yourholiday.me/static/dynimg/itinerary/21/600x300/2210757-2210756_sin-pack-1.jpg",
        itinerary: "Seminyak, Ubud, Bali Swing, Kintamani, Tirta Empul, Water Sports, Uluwatu Kecak, Tanah Lot, Taman Ayun, Monkey Forest, Ulun Danu Temple",
        price: 31200,
        category: "Bali"
      }
    ];
    this.thailandPackages = [
      {
        id: 301,
        title: "Classic Thailand",
        image: "https://cdn.yourholiday.me/static/dynimg/itinerary/45/600x300/2210729-2210728_thailand-p1.jpg",
        itinerary: "Bangkok City Tour, Grand Palace, Wat Pho, Floating Market, Pattaya, Coral Island, Nong Nooch Village",
        price: 28500,
        category: "Thailand",
        badge: "Bestseller"
      },
      {
        id: 302,
        title: "Highlights of Thailand",
        image: "https://cdn.yourholiday.me/static/dynimg/itinerary/2/600x300/2210731-2210730_thailand-p2.jpg",
        itinerary: "Bangkok, Grand Palace, Wat Arun, Chiang Mai, Doi Inthanon, Elephant Sanctuary, Phuket, Phi Phi Islands",
        price: 42e3,
        category: "Thailand",
        badge: "Bestseller"
      },
      {
        id: 303,
        title: "Thailand Budget Getaway",
        image: "https://cdn.yourholiday.me/static/dynimg/itinerary/45/600x300/2210729-2210728_thailand-p1.jpg",
        itinerary: "Bangkok City Tour, Wat Pho, Chatuchak Market, Pattaya, Coral Island, Walking Street",
        price: 18999,
        category: "Thailand",
        badge: "Budget"
      },
      {
        id: 304,
        title: "Thailand Honeymoon Special",
        image: "https://cdn.yourholiday.me/static/dynimg/itinerary/7/600x300/3177247-3177246_honeymoon.jpg",
        itinerary: "Bangkok, Chao Phraya Dinner Cruise, Phuket, Phi Phi Islands, James Bond Island, Krabi, Railay Beach",
        price: 52e3,
        category: "Thailand",
        badge: "Honeymoon Special"
      },
      {
        id: 305,
        title: "Romantic Thailand for Couples",
        image: "https://cdn.yourholiday.me/static/dynimg/itinerary/2/600x300/2210731-2210730_thailand-p2.jpg",
        itinerary: "Bangkok, Floating Market, Phuket, Sunset Cruise, Phi Phi Islands, Krabi, Four Islands Tour",
        price: 45800,
        category: "Thailand",
        badge: "Honeymoon Special"
      },
      {
        id: 306,
        title: "Thailand Family Package",
        image: "https://cdn.yourholiday.me/static/dynimg/itinerary/45/600x300/2210729-2210728_thailand-p1.jpg",
        itinerary: "Bangkok, Safari World, Dream World, Pattaya, Nong Nooch Village, Coral Island, Elephant Show",
        price: 38500,
        category: "Thailand"
      },
      {
        id: 307,
        title: "Best of Thailand",
        image: "https://cdn.yourholiday.me/static/dynimg/itinerary/2/600x300/2210731-2210730_thailand-p2.jpg",
        itinerary: "Bangkok, Grand Palace, Wat Pho, Floating Market, Chiang Mai, Elephant Sanctuary, Doi Suthep, Phuket, Phi Phi Islands, Big Buddha",
        price: 55e3,
        category: "Thailand"
      },
      {
        id: 308,
        title: "Thailand Adventure Tour",
        image: "https://cdn.yourholiday.me/static/dynimg/itinerary/45/600x300/2210729-2210728_thailand-p1.jpg",
        itinerary: "Bangkok, ATV Ride, Zip Line, White Water Rafting, Chiang Mai, Trekking, Elephant Ride, Phuket, Scuba Diving",
        price: 48e3,
        category: "Thailand"
      },
      {
        id: 309,
        title: "Phuket & Krabi Special",
        image: "https://cdn.yourholiday.me/static/dynimg/itinerary/2/600x300/2210731-2210730_thailand-p2.jpg",
        itinerary: "Phuket, Phi Phi Islands, James Bond Island, Krabi, Railay Beach, Four Islands Tour, Tiger Cave Temple",
        price: 32e3,
        category: "Thailand"
      },
      {
        id: 310,
        title: "Thailand with Chiang Mai",
        image: "https://cdn.yourholiday.me/static/dynimg/itinerary/45/600x300/2210729-2210728_thailand-p1.jpg",
        itinerary: "Bangkok, Grand Palace, Chiang Mai, Elephant Sanctuary, Doi Inthanon, Night Bazaar, Doi Suthep Temple",
        price: 36500,
        category: "Thailand"
      },
      {
        id: 311,
        title: "Thailand Luxury Escape",
        image: "https://cdn.yourholiday.me/static/dynimg/itinerary/2/600x300/2210731-2210730_thailand-p2.jpg",
        itinerary: "Bangkok, Mandarin Oriental Stay, Private Floating Market, Phuket, Private Yacht, Phi Phi Islands, Luxury Spa",
        price: 95e3,
        category: "Thailand",
        badge: "Luxury"
      },
      {
        id: 312,
        title: "Grand Thailand Experience",
        image: "https://cdn.yourholiday.me/static/dynimg/itinerary/45/600x300/2210729-2210728_thailand-p1.jpg",
        itinerary: "Bangkok, Grand Palace, Floating Market, Chiang Mai, Elephant Sanctuary, Phuket, Phi Phi Islands, Krabi, Railay Beach, Koh Samui",
        price: 72e3,
        category: "Thailand"
      },
      {
        id: 313,
        title: "Bangkok & Pattaya Tour",
        image: "https://cdn.yourholiday.me/static/dynimg/itinerary/2/600x300/2210731-2210730_thailand-p2.jpg",
        itinerary: "Bangkok City Tour, Grand Palace, Wat Pho, Pattaya, Coral Island, Nong Nooch Village, Walking Street",
        price: 22500,
        category: "Thailand"
      },
      {
        id: 314,
        title: "Thailand with Koh Samui",
        image: "https://cdn.yourholiday.me/static/dynimg/itinerary/45/600x300/2210729-2210728_thailand-p1.jpg",
        itinerary: "Bangkok, Phuket, Phi Phi Islands, Koh Samui, Ang Thong Marine Park, Chaweng Beach",
        price: 58e3,
        category: "Thailand"
      },
      {
        id: 315,
        title: "Thailand Island Hopping",
        image: "https://cdn.yourholiday.me/static/dynimg/itinerary/2/600x300/2210731-2210730_thailand-p2.jpg",
        itinerary: "Phuket, Phi Phi Islands, Koh Lanta, Krabi, Railay Beach, Koh Ngai, Snorkeling, Kayaking",
        price: 44e3,
        category: "Thailand"
      }
    ];
    this.singaporePackages = [
      {
        id: 401,
        title: "Singapore on a Budget",
        image: "https://cdn.yourholiday.me/static/dynimg/destination/58/600x300/3996296-3996295_singapore-stock-image.jpg",
        itinerary: "Gardens by the Bay, Marina Bay Sands, Merlion Park, Sentosa Island, Universal Studios, Chinatown",
        price: 32500,
        category: "Singapore",
        badge: "Bestseller"
      },
      {
        id: 402,
        title: "Ultimate Singapore Experience",
        image: "https://cdn.yourholiday.me/static/dynimg/itinerary/76/600x300/2211669-2211668_singapore-4.jpg",
        itinerary: "Gardens by the Bay, Marina Bay Sands, Universal Studios, Sentosa, S.E.A. Aquarium, Night Safari, Singapore Zoo, Jurong Bird Park",
        price: 61516,
        category: "Singapore",
        badge: "Bestseller"
      },
      {
        id: 403,
        title: "Singapore Highlights",
        image: "https://cdn.yourholiday.me/static/dynimg/destination/58/600x300/3996296-3996295_singapore-stock-image.jpg",
        itinerary: "Merlion Park, Marina Bay Sands, Gardens by the Bay, Sentosa Island, Universal Studios, Little India, Chinatown",
        price: 42e3,
        category: "Singapore",
        badge: "Bestseller"
      },
      {
        id: 404,
        title: "Singapore Honeymoon Special",
        image: "https://cdn.yourholiday.me/static/dynimg/itinerary/7/600x300/3177247-3177246_honeymoon.jpg",
        itinerary: "Marina Bay Sands, Gardens by the Bay, Sentosa, Cable Car Ride, Candlelight Dinner, Universal Studios, Singapore Flyer",
        price: 55e3,
        category: "Singapore",
        badge: "Honeymoon Special"
      },
      {
        id: 405,
        title: "Romantic Singapore for Couples",
        image: "https://cdn.yourholiday.me/static/dynimg/itinerary/76/600x300/2211669-2211668_singapore-4.jpg",
        itinerary: "Marina Bay Sands, Gardens by the Bay, Sentosa, Cable Car, Dinner Cruise, Universal Studios, Singapore Flyer",
        price: 48500,
        category: "Singapore",
        badge: "Honeymoon Special"
      },
      {
        id: 406,
        title: "Singapore Family Fun",
        image: "https://cdn.yourholiday.me/static/dynimg/destination/58/600x300/3996296-3996295_singapore-stock-image.jpg",
        itinerary: "Universal Studios, S.E.A. Aquarium, Singapore Zoo, Night Safari, Gardens by the Bay, Sentosa, Jurong Bird Park",
        price: 65e3,
        category: "Singapore"
      },
      {
        id: 407,
        title: "Singapore with Malaysia",
        image: "https://cdn.yourholiday.me/static/dynimg/itinerary/20/600x300/2211659-2211658_sing-pac-1.jpg",
        itinerary: "Singapore, Gardens by the Bay, Universal Studios, Kuala Lumpur, Petronas Towers, Batu Caves, Genting Highlands",
        price: 75531,
        category: "Singapore"
      },
      {
        id: 408,
        title: "Best of Singapore",
        image: "https://cdn.yourholiday.me/static/dynimg/itinerary/76/600x300/2211669-2211668_singapore-4.jpg",
        itinerary: "Merlion Park, Marina Bay Sands, Gardens by the Bay, Universal Studios, Night Safari, Singapore Zoo, Sentosa, Chinatown, Little India",
        price: 58e3,
        category: "Singapore"
      },
      {
        id: 409,
        title: "Singapore Luxury Escape",
        image: "https://cdn.yourholiday.me/static/dynimg/destination/58/600x300/3996296-3996295_singapore-stock-image.jpg",
        itinerary: "Marina Bay Sands Stay, Gardens by the Bay, Private City Tour, Universal Studios, Sentosa, Yacht Dinner Cruise, Singapore Flyer",
        price: 95e3,
        category: "Singapore",
        badge: "Luxury"
      },
      {
        id: 410,
        title: "Singapore & Bali Combo",
        image: "https://cdn.yourholiday.me/static/dynimg/itinerary/21/600x300/2210757-2210756_sin-pack-1.jpg",
        itinerary: "Singapore, Gardens by the Bay, Universal Studios, Bali, Ubud, Kintamani, Water Sports, Uluwatu Kecak, Tanah Lot",
        price: 47854,
        category: "Singapore"
      },
      {
        id: 411,
        title: "Grand Singapore Experience",
        image: "https://cdn.yourholiday.me/static/dynimg/itinerary/76/600x300/2211669-2211668_singapore-4.jpg",
        itinerary: "Marina Bay Sands, Gardens by the Bay, Universal Studios, Night Safari, Singapore Zoo, Jurong Bird Park, S.E.A. Aquarium, Sentosa, Singapore Flyer, Chinatown",
        price: 82e3,
        category: "Singapore"
      },
      {
        id: 412,
        title: "Singapore City Explorer",
        image: "https://cdn.yourholiday.me/static/dynimg/destination/58/600x300/3996296-3996295_singapore-stock-image.jpg",
        itinerary: "Merlion Park, Marina Bay Sands, Chinatown, Little India, Arab Street, Gardens by the Bay, Singapore Flyer, Orchard Road",
        price: 28e3,
        category: "Singapore",
        badge: "Budget"
      }
    ];
    this.dubaiPackages = [
      {
        id: 201,
        title: "Dubai on a Budget",
        image: "https://cdn.yourholiday.me/static/dynimg/itinerary/98/600x300/2211579-2211578_dubai-pac1.jpg",
        itinerary: "Dubai City Tour, Burj Khalifa, Dubai Mall, Desert Safari, Dhow Cruise",
        price: 28536,
        category: "Dubai",
        badge: "Bestseller"
      },
      {
        id: 202,
        title: "Trip to Dubai",
        image: "https://cdn.yourholiday.me/static/dynimg/itinerary/59/600x300/2211591-2211590_dubai-pac-4.jpg",
        itinerary: "Burj Khalifa, Dubai Mall, Desert Safari, Palm Jumeirah, Dhow Cruise, Abu Dhabi City Tour",
        price: 40397,
        category: "Dubai",
        badge: "Bestseller"
      },
      {
        id: 203,
        title: "Dubai Highlights",
        image: "https://cdn.yourholiday.me/static/dynimg/destination/16/600x300/3598628-3598627_adobestock_47088158.jpg",
        itinerary: "Burj Khalifa, Dubai Frame, Dubai Museum, Gold Souk, Spice Souk, Desert Safari, Dhow Cruise",
        price: 32500,
        category: "Dubai",
        badge: "Bestseller"
      },
      {
        id: 204,
        title: "Dubai Honeymoon Special",
        image: "https://cdn.yourholiday.me/static/dynimg/itinerary/7/600x300/3177247-3177246_honeymoon.jpg",
        itinerary: "Burj Khalifa, Dubai Mall, Desert Safari with Dinner, Dhow Cruise Dinner, Palm Jumeirah, Atlantis Aquaventure",
        price: 45800,
        category: "Dubai",
        badge: "Honeymoon Special"
      },
      {
        id: 205,
        title: "Romantic Dubai for Couples",
        image: "https://cdn.yourholiday.me/static/dynimg/destination/16/600x300/3598628-3598627_adobestock_47088158.jpg",
        itinerary: "Burj Al Arab, Burj Khalifa, Desert Safari, Dhow Cruise Dinner, Palm Jumeirah, Dubai Frame",
        price: 52e3,
        category: "Dubai",
        badge: "Honeymoon Special"
      },
      {
        id: 206,
        title: "Dubai with Abu Dhabi",
        image: "https://cdn.yourholiday.me/static/dynimg/itinerary/98/600x300/2211579-2211578_dubai-pac1.jpg",
        itinerary: "Dubai City Tour, Burj Khalifa, Desert Safari, Abu Dhabi City Tour, Sheikh Zayed Grand Mosque, Ferrari World",
        price: 38900,
        category: "Dubai"
      },
      {
        id: 207,
        title: "Dubai Family Package",
        image: "https://cdn.yourholiday.me/static/dynimg/itinerary/59/600x300/2211591-2211590_dubai-pac-4.jpg",
        itinerary: "Dubai Mall, Burj Khalifa, Dubai Frame, Atlantis Aquaventure, Desert Safari, Global Village, IMG Worlds of Adventure",
        price: 55e3,
        category: "Dubai"
      },
      {
        id: 208,
        title: "Dubai Luxury Escape",
        image: "https://cdn.yourholiday.me/static/dynimg/destination/16/600x300/3598628-3598627_adobestock_47088158.jpg",
        itinerary: "Burj Al Arab Stay, Burj Khalifa At the Top, Private Desert Safari, Yacht Cruise, Palm Jumeirah, Dubai Opera",
        price: 95e3,
        category: "Dubai",
        badge: "Luxury"
      },
      {
        id: 209,
        title: "Dubai Adventure Tour",
        image: "https://cdn.yourholiday.me/static/dynimg/itinerary/98/600x300/2211579-2211578_dubai-pac1.jpg",
        itinerary: "Skydiving, Dune Bashing, Quad Biking, Zip Line, Water Sports, Burj Khalifa, Dubai Frame",
        price: 48500,
        category: "Dubai"
      },
      {
        id: 210,
        title: "Dubai Shopping Festival Tour",
        image: "https://cdn.yourholiday.me/static/dynimg/itinerary/59/600x300/2211591-2211590_dubai-pac-4.jpg",
        itinerary: "Dubai Mall, Mall of the Emirates, Gold Souk, Spice Souk, City Walk, Burj Khalifa, Desert Safari",
        price: 35200,
        category: "Dubai"
      },
      {
        id: 211,
        title: "Dubai with Muscat",
        image: "https://cdn.yourholiday.me/static/dynimg/destination/16/600x300/3598628-3598627_adobestock_47088158.jpg",
        itinerary: "Dubai City Tour, Burj Khalifa, Desert Safari, Muscat City Tour, Sultan Qaboos Grand Mosque, Mutrah Souq",
        price: 42e3,
        category: "Dubai"
      },
      {
        id: 212,
        title: "Best of Dubai",
        image: "https://cdn.yourholiday.me/static/dynimg/itinerary/98/600x300/2211579-2211578_dubai-pac1.jpg",
        itinerary: "Burj Khalifa, Dubai Frame, Dubai Museum, Palm Jumeirah, Desert Safari, Dhow Cruise, Abu Dhabi, Sheikh Zayed Mosque",
        price: 44900,
        category: "Dubai"
      },
      {
        id: 213,
        title: "Dubai Budget Getaway",
        image: "https://cdn.yourholiday.me/static/dynimg/itinerary/59/600x300/2211591-2211590_dubai-pac-4.jpg",
        itinerary: "Dubai City Tour, Gold Souk, Spice Souk, Desert Safari, Dhow Cruise",
        price: 22500,
        category: "Dubai",
        badge: "Budget"
      },
      {
        id: 214,
        title: "Grand Dubai Experience",
        image: "https://cdn.yourholiday.me/static/dynimg/destination/16/600x300/3598628-3598627_adobestock_47088158.jpg",
        itinerary: "Burj Khalifa, Dubai Mall, Desert Safari, Palm Jumeirah, Dhow Cruise, Abu Dhabi, Ferrari World, Global Village, Dubai Frame",
        price: 62e3,
        category: "Dubai"
      },
      {
        id: 215,
        title: "Dubai with Maldives",
        image: "https://cdn.yourholiday.me/static/dynimg/itinerary/98/600x300/2211579-2211578_dubai-pac1.jpg",
        itinerary: "Dubai 3N, Maldives 4N, Burj Khalifa, Desert Safari, Water Villa Stay, Snorkeling, Sunset Cruise",
        price: 85e3,
        category: "Dubai",
        badge: "Luxury"
      }
    ];
    this.internationalPackages = [
      {
        id: 17,
        title: "Classic Thailand",
        image: "https://cdn.yourholiday.me/static/dynimg/itinerary/45/600x300/2210729-2210728_thailand-p1.jpg",
        itinerary: "Bangkok 3N, Chiang Mai 4N, Phuket 4N, ...",
        price: 66071,
        category: "International"
      },
      {
        id: 18,
        title: "Romantic Singapore and Bali",
        image: "https://cdn.yourholiday.me/static/dynimg/itinerary/21/600x300/2210757-2210756_sin-pack-1.jpg",
        itinerary: "Singapore 3N, Bali 2N, Bali 2N",
        price: 47854,
        category: "International"
      },
      {
        id: 19,
        title: "Fully Loaded Singapore Malaysia",
        image: "https://cdn.yourholiday.me/static/dynimg/itinerary/20/600x300/2211659-2211658_sing-pac-1.jpg",
        itinerary: "Singapore 4N, Kuala Lumpur 3N",
        price: 75531,
        category: "International"
      },
      {
        id: 20,
        title: "Ultimate Singapore Experience",
        image: "https://cdn.yourholiday.me/static/dynimg/itinerary/76/600x300/2211669-2211668_singapore-4.jpg",
        itinerary: "Singapore 5N",
        price: 61516,
        category: "International"
      },
      {
        id: 21,
        title: "Fabulous Hong Kong Macau",
        image: "https://cdn.yourholiday.me/static/dynimg/destination/51/600x300/2082244-2082243_venetian.jpg",
        itinerary: "Macau 2N, Hong Kong 3N",
        price: 54295,
        category: "International"
      },
      {
        id: 22,
        title: "Highlights of Thailand",
        image: "https://cdn.yourholiday.me/static/dynimg/itinerary/2/600x300/2210731-2210730_thailand-p2.jpg",
        itinerary: "Bangkok 2N, Chiang Mai 3N, Koh Samui ...",
        price: 87987,
        category: "International"
      },
      {
        id: 23,
        title: "Dubai on a Budget",
        image: "https://cdn.yourholiday.me/static/dynimg/itinerary/98/600x300/2211579-2211578_dubai-pac1.jpg",
        itinerary: "Dubai 4N",
        price: 28536,
        category: "International"
      },
      {
        id: 24,
        title: "Trip to Dubai",
        image: "https://cdn.yourholiday.me/static/dynimg/itinerary/59/600x300/2211591-2211590_dubai-pac-4.jpg",
        itinerary: "Dubai 5N",
        price: 40397,
        category: "International"
      }
    ];
    this.experiences = [
      { icon: "fas fa-umbrella-beach", label: "Beach" },
      { icon: "fas fa-users", label: "Family" },
      { icon: "fas fa-gem", label: "Luxury" },
      { icon: "fas fa-landmark", label: "Culture and Heritage" },
      { icon: "fas fa-infinity", label: "All Inclusive Holidays" },
      { icon: "fas fa-paw", label: "Cultral Safaris" },
      { icon: "fas fa-heart", label: "Honeymoon" },
      { icon: "fas fa-star", label: "Experiences" }
    ];
    this.testimonials = [
      {
        name: "Anthony",
        location: "Goa",
        text: "No words! Thanks for making my dream come true. But I want to say, Sabse pyaara Hindustan"
      },
      {
        name: "Sagar",
        location: "Belgaum",
        text: "Never could I have imagined the wonderful experiences that awaited me before we began our trip. It was a wonderful experience overall"
      },
      {
        name: "Ramya John",
        location: "Rajasthan",
        text: "Thank you so much for a well-organized trip. We had a wonderful time. The weather was awesome, the hotels were nice, thank you for everything!"
      },
      {
        name: "Priya Sharma",
        location: "Pune",
        text: "J K Tours made our Europe trip absolutely magical. Every detail was perfectly planned \u2014 from hotels to sightseeing. Highly recommend to everyone!"
      },
      {
        name: "Rahul Mehta",
        location: "Mumbai",
        text: "Booked Dubai package for our family. The team was very professional and helpful throughout. Best travel agency in Pune without a doubt!"
      }
    ];
    this.megaExperiences = [
      { label: "Beach", image: "https://cdn.yourholiday.me/static/dynimg/itinerary/72/600x450/2185294-2185293_pexels-photo-1450353.jpg" },
      { label: "Family", image: "https://cdn.yourholiday.me/static/dynimg/itinerary/23/600x450/2185310-2185309_pexels-photo-4205505.jpg" },
      { label: "Luxury", image: "https://cdn.yourholiday.me/static/dynimg/itinerary/99/600x450/2185274-2185273_pexels-photo-279574.jpg" },
      { label: "Culture and Heritage", image: "https://cdn.yourholiday.me/static/dynimg/itinerary/37/600x450/2185258-2185257_pexels-photo-209741.jpg" },
      { label: "All Inclusive", image: "https://cdn.yourholiday.me/static/dynimg/itinerary/62/600x450/2186114-2186113_pexels-photo-3184183.jpg" },
      { label: "Cultral Safaris", image: "https://cdn.yourholiday.me/static/dynimg/itinerary/86/600x450/2186480-2186479_kenya-6.jpg" },
      { label: "Honeymoon", image: "https://cdn.yourholiday.me/static/dynimg/destination/54/1200x900/2188294-2188293_.jpg" },
      { label: "Experiences", image: "https://cdn.yourholiday.me/static/dynimg/itinerary/45/1200x900/3192010-3192009_aaron-sebastian-bfgeyps0znk-unsplash.jpg" }
    ];
    this.footerExperiences = [
      "Beach",
      "Family",
      "Luxury",
      "Culture and Heritage",
      "All Inclusive Holidays",
      "Cultral Safaris",
      "Honeymoon",
      "All Inclusive",
      "All Inclusive",
      "Luxury",
      "Beach",
      "Family",
      "Experiences"
    ];
    this.domesticDestinationPages = {
      "andamans": {
        name: "Andaman & Nicobar Islands",
        tagline: "Where the sea meets paradise",
        heroImage: "https://cdn.yourholiday.me/static/dynimg/destination/33/600x300/2210456-2210455_andaman.jpg",
        packages: [
          {
            id: 1,
            nights: 4,
            duration: "4N/5D",
            price: 18500,
            badge: "Bestseller",
            name: "Andaman Escape",
            image: "https://cdn.yourholiday.me/static/dynimg/itinerary/16/600x300/3032141-3032140_hero-anadaman-19-1-min.jpg",
            highlights: [
              "Return flights from Mumbai/Delhi included",
              "Port Blair city tour & Cellular Jail light show",
              "Havelock Island \u2014 Radhanagar Beach (Asia's Best)",
              "Glass-bottom boat ride & snorkeling",
              "All transfers & daily breakfast included"
            ],
            groupSize: "2 \u2013 20 People",
            transport: "Flight + Ferry",
            accommodation: "3\u2605 Hotels",
            itinerary: [
              { day: 1, title: "Arrival \u2013 Port Blair", description: "Arrive at Veer Savarkar Airport. Check-in to hotel. Evening visit to Cellular Jail & Sound & Light Show." },
              { day: 2, title: "Port Blair Sightseeing", description: "Corbyn's Cove Beach, Samudrika Naval Museum, Anthropological Museum & Chatham Saw Mill." },
              { day: 3, title: "Havelock Island", description: "Ferry to Havelock. Check-in & visit Radhanagar Beach (Asia's Best Beach). Sunset at leisure." },
              { day: 4, title: "Water Sports & Neil Island", description: "Snorkeling, glass-bottom boat ride. Optional scuba diving. Return to Port Blair by evening ferry." },
              { day: 5, title: "Departure", description: "Breakfast at hotel. Check-out & transfer to airport. Tour ends with beautiful memories." }
            ]
          },
          {
            id: 2,
            nights: 5,
            duration: "5N/6D",
            price: 24500,
            badge: "Popular",
            name: "Island Bliss",
            image: "https://cdn.yourholiday.me/static/dynimg/itinerary/16/600x300/3032082-3032081_hero-anadaman-21-min.jpg",
            highlights: [
              "Return flights from Mumbai/Delhi included",
              "Havelock + Neil Island coverage",
              "Scuba diving & snorkeling sessions",
              "Radhanagar Beach & Laxmanpur Beach",
              "All transfers, ferry tickets & daily breakfast"
            ],
            groupSize: "2 \u2013 20 People",
            transport: "Flight + Ferry",
            accommodation: "3\u2605 / 4\u2605 Hotels",
            itinerary: [
              { day: 1, title: "Arrival \u2013 Port Blair", description: "Arrive & check-in. Evening Cellular Jail Sound & Light Show." },
              { day: 2, title: "Port Blair City Tour", description: "Corbyn's Cove, Samudrika Museum, Chatham Saw Mill & Ross Island." },
              { day: 3, title: "Havelock Island", description: "Ferry to Havelock. Radhanagar Beach visit. Leisure evening." },
              { day: 4, title: "Water Sports Day", description: "Scuba diving, snorkeling & glass-bottom boat ride at Elephant Beach." },
              { day: 5, title: "Neil Island", description: "Ferry to Neil Island. Laxmanpur Beach, Natural Bridge & Bharatpur Beach." },
              { day: 6, title: "Departure", description: "Return ferry to Port Blair. Transfer to airport. Tour ends." }
            ]
          },
          {
            id: 3,
            nights: 6,
            duration: "6N/7D",
            price: 31e3,
            name: "Andaman Explorer",
            image: "https://cdn.yourholiday.me/static/dynimg/itinerary/56/600x300/3115245-3115244_andaman-oickture.jpg",
            highlights: [
              "Complete Andaman circuit \u2014 Port Blair, Havelock, Neil",
              "Baratang Island \u2014 Limestone Caves & Mud Volcano",
              "Sea-walk & certified scuba diving",
              "Jolly Buoy Island snorkeling (seasonal)",
              "All meals, transfers & ferry tickets included"
            ],
            groupSize: "2 \u2013 15 People",
            transport: "Flight + Ferry",
            accommodation: "4\u2605 Hotels",
            itinerary: [
              { day: 1, title: "Arrival \u2013 Port Blair", description: "Airport pickup. Check-in. Cellular Jail evening show." },
              { day: 2, title: "Baratang Island", description: "Early morning drive through Jarawa Reserve. Limestone caves & mud volcano visit." },
              { day: 3, title: "Port Blair Sightseeing", description: "Ross Island, North Bay Island, Corbyn's Cove & Samudrika Museum." },
              { day: 4, title: "Havelock Island", description: "Ferry to Havelock. Radhanagar Beach. Leisure evening." },
              { day: 5, title: "Elephant Beach & Water Sports", description: "Snorkeling, sea-walk & scuba diving at Elephant Beach." },
              { day: 6, title: "Neil Island", description: "Laxmanpur Beach, Natural Bridge & Bharatpur Beach." },
              { day: 7, title: "Departure", description: "Return to Port Blair. Transfer to airport. Tour ends." }
            ]
          },
          {
            id: 4,
            nights: 7,
            duration: "7N/8D",
            price: 38500,
            badge: "Premium",
            name: "Grand Andaman",
            image: "https://cdn.yourholiday.me/static/dynimg/itinerary/7/600x300/3177247-3177246_honeymoon.jpg",
            highlights: [
              "Full Andaman experience \u2014 all major islands",
              "Luxury resort stay at Havelock",
              "Private snorkeling & scuba diving sessions",
              "Jolly Buoy & Cinque Island day trips",
              "All meals, transfers, ferry & flight tickets"
            ],
            groupSize: "2 \u2013 12 People",
            transport: "Flight + Ferry",
            accommodation: "4\u2605 / 5\u2605 Resorts",
            itinerary: [
              { day: 1, title: "Arrival \u2013 Port Blair", description: "Airport pickup. Luxury check-in. Cellular Jail evening show." },
              { day: 2, title: "Baratang Island", description: "Limestone caves, mud volcano & mangrove creek boat ride." },
              { day: 3, title: "Port Blair & Ross Island", description: "Ross Island, North Bay, Corbyn's Cove & Samudrika Museum." },
              { day: 4, title: "Jolly Buoy Island", description: "Snorkeling at Jolly Buoy coral reef (seasonal). Mahatma Gandhi Marine National Park." },
              { day: 5, title: "Havelock Island", description: "Ferry to Havelock. Luxury resort check-in. Radhanagar Beach sunset." },
              { day: 6, title: "Elephant Beach & Scuba", description: "Private scuba diving & snorkeling. Bioluminescent beach walk at night." },
              { day: 7, title: "Neil Island", description: "Laxmanpur, Natural Bridge & Bharatpur Beach. Return to Port Blair." },
              { day: 8, title: "Departure", description: "Breakfast. Check-out. Transfer to airport. Tour ends with beautiful memories." }
            ]
          }
        ]
      },
      "goa": {
        name: "Goa",
        tagline: "Sun, sand & endless vibes",
        heroImage: "https://cdn.yourholiday.me/static/dynimg/itinerary/76/600x300/2210775-2210774_goa-pack1.jpg",
        packages: [
          {
            id: 5,
            nights: 4,
            duration: "4N/5D",
            price: 10272,
            badge: "Bestseller",
            name: "Goa Getaway",
            image: "https://cdn.yourholiday.me/static/dynimg/itinerary/76/600x300/2210775-2210774_goa-pack1.jpg",
            highlights: [
              "North Goa beaches \u2014 Baga, Calangute, Anjuna",
              "Old Goa churches \u2014 UNESCO World Heritage",
              "Dudhsagar Waterfall day trip",
              "Spice plantation visit with lunch",
              "All transfers & daily breakfast included"
            ],
            groupSize: "2 \u2013 20 People",
            transport: "Flight / Train + Cab",
            accommodation: "3\u2605 Hotels",
            itinerary: [
              { day: 1, title: "Arrival \u2013 Goa", description: "Arrive at Goa Airport/Station. Check-in to hotel. Evening at Baga Beach. Welcome dinner." },
              { day: 2, title: "North Goa Sightseeing", description: "Calangute, Baga, Anjuna & Vagator beaches. Fort Aguada. Chapora Fort sunset." },
              { day: 3, title: "Old Goa & Spice Plantation", description: "Basilica of Bom Jesus, Se Cathedral, Spice Plantation lunch & Mandovi River cruise." },
              { day: 4, title: "Dudhsagar Waterfall", description: "Full-day jeep safari to Dudhsagar Falls. Swim in natural pool. Return by evening." },
              { day: 5, title: "Departure", description: "Breakfast at hotel. Check-out & transfer to airport/station. Tour ends." }
            ]
          },
          {
            id: 6,
            nights: 5,
            duration: "5N/6D",
            price: 14500,
            badge: "Popular",
            name: "Goa Bliss",
            image: "https://cdn.yourholiday.me/static/dynimg/itinerary/76/600x300/2210775-2210774_goa-pack1.jpg",
            highlights: [
              "North & South Goa complete coverage",
              "Water sports \u2014 parasailing, jet ski, banana boat",
              "Dudhsagar Waterfall & spice plantation",
              "Sunset cruise on Mandovi River",
              "All transfers & daily breakfast included"
            ],
            groupSize: "2 \u2013 20 People",
            transport: "Flight / Train + Cab",
            accommodation: "3\u2605 / 4\u2605 Hotels",
            itinerary: [
              { day: 1, title: "Arrival \u2013 Goa", description: "Arrive & check-in. Evening at Baga Beach. Welcome dinner." },
              { day: 2, title: "North Goa Beaches & Water Sports", description: "Calangute, Baga, Anjuna. Water sports \u2014 parasailing, jet ski, banana boat ride." },
              { day: 3, title: "Old Goa & Mandovi Cruise", description: "Basilica of Bom Jesus, Se Cathedral. Evening Mandovi River sunset cruise." },
              { day: 4, title: "South Goa", description: "Colva, Benaulim & Palolem beaches. Cabo de Rama Fort. Leisurely afternoon." },
              { day: 5, title: "Dudhsagar & Spice Plantation", description: "Jeep safari to Dudhsagar Falls. Spice plantation lunch. Evening at leisure." },
              { day: 6, title: "Departure", description: "Breakfast. Check-out & transfer. Tour ends." }
            ]
          },
          {
            id: 7,
            nights: 6,
            duration: "6N/7D",
            price: 19800,
            name: "Goa Explorer",
            image: "https://cdn.yourholiday.me/static/dynimg/itinerary/76/600x300/2210775-2210774_goa-pack1.jpg",
            highlights: [
              "Complete North + South Goa circuit",
              "Scuba diving & snorkeling at Grande Island",
              "Dudhsagar Waterfall jeep safari",
              "Casino night & Tito's Lane nightlife",
              "All meals, transfers & sightseeing included"
            ],
            groupSize: "2 \u2013 15 People",
            transport: "Flight / Train + Cab",
            accommodation: "4\u2605 Hotels",
            itinerary: [
              { day: 1, title: "Arrival \u2013 Goa", description: "Arrive & check-in. Evening at Baga Beach. Welcome dinner." },
              { day: 2, title: "North Goa Beaches", description: "Calangute, Baga, Anjuna, Vagator. Fort Aguada & Chapora Fort." },
              { day: 3, title: "Water Sports & Grande Island", description: "Scuba diving & snorkeling at Grande Island. Parasailing & jet ski." },
              { day: 4, title: "Old Goa & Mandovi Cruise", description: "UNESCO churches. Spice plantation lunch. Sunset Mandovi cruise." },
              { day: 5, title: "South Goa", description: "Colva, Benaulim, Palolem. Cabo de Rama Fort. Evening casino." },
              { day: 6, title: "Dudhsagar Waterfall", description: "Full-day jeep safari. Swim in natural pool. Tito's Lane evening." },
              { day: 7, title: "Departure", description: "Breakfast. Check-out & transfer. Tour ends." }
            ]
          },
          {
            id: 8,
            nights: 7,
            duration: "7N/8D",
            price: 26500,
            badge: "Premium",
            name: "Grand Goa",
            image: "https://cdn.yourholiday.me/static/dynimg/itinerary/76/600x300/2210775-2210774_goa-pack1.jpg",
            highlights: [
              "Luxury beach resort stay",
              "Complete Goa \u2014 North, South & hidden gems",
              "Private yacht sunset cruise",
              "Scuba diving, parasailing & all water sports",
              "All meals, transfers & exclusive experiences"
            ],
            groupSize: "2 \u2013 10 People",
            transport: "Flight + Private Cab",
            accommodation: "4\u2605 / 5\u2605 Resorts",
            itinerary: [
              { day: 1, title: "Arrival \u2013 Goa", description: "Luxury resort check-in. Welcome drink. Evening at Baga Beach." },
              { day: 2, title: "North Goa Beaches", description: "Calangute, Baga, Anjuna, Vagator. Fort Aguada & Chapora Fort." },
              { day: 3, title: "Grande Island & Scuba", description: "Private scuba diving & snorkeling at Grande Island. Parasailing." },
              { day: 4, title: "Old Goa & Spice Plantation", description: "UNESCO churches. Spice plantation lunch. Private Mandovi yacht cruise." },
              { day: 5, title: "South Goa", description: "Colva, Benaulim, Palolem. Cabo de Rama Fort. Sunset at Butterfly Beach." },
              { day: 6, title: "Dudhsagar & Leisure", description: "Jeep safari to Dudhsagar Falls. Afternoon spa. Casino evening." },
              { day: 7, title: "Leisure & Shopping", description: "Anjuna Flea Market. Souvenir shopping. Farewell dinner at beach shack." },
              { day: 8, title: "Departure", description: "Breakfast. Check-out & transfer. Tour ends with beautiful memories." }
            ]
          }
        ]
      },
      "kerala": {
        name: "Kerala",
        tagline: "God's Own Country \u2014 backwaters, hills & beaches",
        heroImage: "https://cdn.yourholiday.me/static/dynimg/itinerary/14/600x300/2228853-2228852_kerala-1.jpg",
        packages: [
          {
            id: 9,
            nights: 4,
            duration: "4N/5D",
            price: 16562,
            badge: "Bestseller",
            name: "Kerala Escape",
            image: "https://cdn.yourholiday.me/static/dynimg/itinerary/14/600x300/2228853-2228852_kerala-1.jpg",
            highlights: [
              "Munnar tea gardens & Eravikulam National Park",
              "Thekkady \u2014 Periyar Wildlife Sanctuary boat ride",
              "Alleppey houseboat stay on backwaters",
              "Kochi Fort Kochi heritage walk",
              "All transfers & daily breakfast included"
            ],
            groupSize: "2 \u2013 20 People",
            transport: "Flight / Train + Cab",
            accommodation: "3\u2605 Hotels + Houseboat",
            itinerary: [
              { day: 1, title: "Arrival \u2013 Kochi", description: "Arrive at Cochin Airport. Check-in. Evening Fort Kochi walk \u2014 Chinese Fishing Nets, Dutch Palace & Jew Town." },
              { day: 2, title: "Munnar", description: "Drive to Munnar. Tea garden visit, Eravikulam National Park & Mattupetty Dam. Overnight Munnar." },
              { day: 3, title: "Thekkady", description: "Drive to Thekkady. Periyar Wildlife Sanctuary boat ride. Spice plantation tour. Overnight Thekkady." },
              { day: 4, title: "Alleppey Houseboat", description: "Drive to Alleppey. Board houseboat. Cruise through backwaters. Overnight on houseboat." },
              { day: 5, title: "Departure", description: "Disembark houseboat. Transfer to Kochi airport. Tour ends with beautiful memories." }
            ]
          },
          {
            id: 10,
            nights: 5,
            duration: "5N/6D",
            price: 22e3,
            badge: "Popular",
            name: "Kerala Highlights",
            image: "https://cdn.yourholiday.me/static/dynimg/itinerary/17/600x300/2182118-2182117_classic-kerala-gods-own-country.jpg",
            highlights: [
              "Munnar, Thekkady, Kumarakom & Kovalam coverage",
              "Alleppey houseboat overnight stay",
              "Kathakali & Kalaripayattu cultural shows",
              "Kovalam beach \u2014 lighthouse & Hawah Beach",
              "All transfers & daily breakfast included"
            ],
            groupSize: "2 \u2013 20 People",
            transport: "Flight / Train + Cab",
            accommodation: "3\u2605 / 4\u2605 Hotels + Houseboat",
            itinerary: [
              { day: 1, title: "Arrival \u2013 Kochi", description: "Arrive & check-in. Fort Kochi heritage walk. Kathakali show in the evening." },
              { day: 2, title: "Munnar", description: "Drive to Munnar. Tea gardens, Eravikulam NP, Mattupetty Dam & Echo Point." },
              { day: 3, title: "Thekkady", description: "Periyar Wildlife Sanctuary boat ride. Spice plantation. Kalaripayattu show." },
              { day: 4, title: "Kumarakom & Houseboat", description: "Drive to Kumarakom. Board houseboat. Backwater cruise. Overnight on houseboat." },
              { day: 5, title: "Kovalam Beach", description: "Drive to Kovalam. Lighthouse Beach, Hawah Beach & Samudra Beach. Leisure evening." },
              { day: 6, title: "Departure", description: "Breakfast. Transfer to Trivandrum airport. Tour ends." }
            ]
          },
          {
            id: 11,
            nights: 6,
            duration: "6N/7D",
            price: 29500,
            name: "Kerala Explorer",
            image: "https://cdn.yourholiday.me/static/dynimg/itinerary/14/600x300/2228853-2228852_kerala-1.jpg",
            highlights: [
              "Complete Kerala \u2014 Kochi, Munnar, Thekkady, Alleppey, Kovalam",
              "Wayanad wildlife & tribal village visit",
              "Houseboat + beach resort stay",
              "Ayurvedic spa & wellness session",
              "All meals, transfers & sightseeing included"
            ],
            groupSize: "2 \u2013 15 People",
            transport: "Flight + Cab",
            accommodation: "4\u2605 Hotels + Houseboat",
            itinerary: [
              { day: 1, title: "Arrival \u2013 Kochi", description: "Arrive & check-in. Fort Kochi walk. Kathakali show." },
              { day: 2, title: "Munnar", description: "Tea gardens, Eravikulam NP, Mattupetty Dam, Echo Point & Top Station." },
              { day: 3, title: "Wayanad", description: "Drive to Wayanad. Edakkal Caves, Chembra Peak trek & tribal village visit." },
              { day: 4, title: "Thekkady", description: "Periyar boat ride, spice plantation & Kalaripayattu show." },
              { day: 5, title: "Alleppey Houseboat", description: "Board houseboat. Backwater cruise through canals & villages. Overnight on houseboat." },
              { day: 6, title: "Kovalam & Ayurveda", description: "Drive to Kovalam. Lighthouse Beach. Ayurvedic massage & wellness session." },
              { day: 7, title: "Departure", description: "Breakfast. Transfer to Trivandrum airport. Tour ends." }
            ]
          },
          {
            id: 12,
            nights: 7,
            duration: "7N/8D",
            price: 38e3,
            badge: "Premium",
            name: "Grand Kerala",
            image: "https://cdn.yourholiday.me/static/dynimg/itinerary/17/600x300/2182118-2182117_classic-kerala-gods-own-country.jpg",
            highlights: [
              "Full Kerala circuit \u2014 7 destinations",
              "Luxury houseboat & beach resort stay",
              "Private Ayurvedic wellness package",
              "Wayanad, Varkala & Bekal Fort coverage",
              "All meals, transfers & exclusive experiences"
            ],
            groupSize: "2 \u2013 10 People",
            transport: "Flight + Private Cab",
            accommodation: "4\u2605 / 5\u2605 Resorts + Luxury Houseboat",
            itinerary: [
              { day: 1, title: "Arrival \u2013 Kochi", description: "Luxury check-in. Fort Kochi heritage walk. Kathakali show." },
              { day: 2, title: "Munnar", description: "Tea gardens, Eravikulam NP, Mattupetty Dam, Echo Point & Top Station." },
              { day: 3, title: "Wayanad", description: "Edakkal Caves, Chembra Peak, Pookode Lake & tribal village." },
              { day: 4, title: "Thekkady", description: "Periyar boat ride, spice plantation & Kalaripayattu show." },
              { day: 5, title: "Alleppey Luxury Houseboat", description: "Premium houseboat. Backwater cruise. Sunset on the backwaters." },
              { day: 6, title: "Kovalam & Varkala", description: "Lighthouse Beach, Varkala cliff beach & Janardanaswamy Temple." },
              { day: 7, title: "Ayurveda & Leisure", description: "Full-day Ayurvedic wellness package. Farewell dinner at beach resort." },
              { day: 8, title: "Departure", description: "Breakfast. Transfer to Trivandrum airport. Tour ends with beautiful memories." }
            ]
          }
        ]
      },
      "kashmir": {
        name: "Kashmir",
        tagline: "Paradise on Earth \u2014 valleys, lakes & snow peaks",
        heroImage: "https://cdn.yourholiday.me/static/dynimg/itinerary/28/600x300/2210839-2210838_hampi.jpg",
        packages: [
          {
            id: 29,
            nights: 4,
            duration: "4N/5D",
            price: 16500,
            badge: "Bestseller",
            name: "Kashmir Escape",
            image: "https://cdn.yourholiday.me/static/dynimg/itinerary/28/600x300/2210839-2210838_hampi.jpg",
            highlights: [
              "Srinagar \u2014 Dal Lake shikara ride & floating market",
              "Gulmarg \u2014 Asia's highest gondola ride",
              "Pahalgam \u2014 Betaab Valley & Aru Valley",
              "Mughal Gardens \u2014 Shalimar Bagh & Nishat Bagh",
              "All transfers & daily breakfast included"
            ],
            groupSize: "2 \u2013 20 People",
            transport: "Flight + Cab",
            accommodation: "3\u2605 Hotels + Houseboat",
            itinerary: [
              { day: 1, title: "Arrival \u2013 Srinagar", description: "Arrive at Srinagar Airport. Check-in to houseboat on Dal Lake. Evening shikara ride." },
              { day: 2, title: "Srinagar Sightseeing", description: "Mughal Gardens \u2014 Shalimar Bagh, Nishat Bagh & Chashme Shahi. Dal Lake floating vegetable market." },
              { day: 3, title: "Gulmarg", description: "Drive to Gulmarg. Gondola ride to Apharwat Peak. Snow activities & meadow walk." },
              { day: 4, title: "Pahalgam", description: "Drive to Pahalgam. Betaab Valley, Aru Valley & Chandanwari. Lidder River walk." },
              { day: 5, title: "Departure", description: "Breakfast. Transfer to Srinagar Airport. Tour ends with beautiful memories." }
            ]
          },
          {
            id: 30,
            nights: 5,
            duration: "5N/6D",
            price: 22e3,
            badge: "Popular",
            name: "Kashmir Highlights",
            image: "https://cdn.yourholiday.me/static/dynimg/itinerary/28/600x300/2210839-2210838_hampi.jpg",
            highlights: [
              "Srinagar, Gulmarg, Pahalgam & Sonamarg",
              "Thajiwas Glacier trek at Sonamarg",
              "Dal Lake houseboat overnight stay",
              "Gondola ride & snow skiing at Gulmarg",
              "All transfers & daily breakfast included"
            ],
            groupSize: "2 \u2013 20 People",
            transport: "Flight + Cab",
            accommodation: "3\u2605 / 4\u2605 Hotels + Houseboat",
            itinerary: [
              { day: 1, title: "Arrival \u2013 Srinagar", description: "Arrive & check-in to houseboat. Evening Dal Lake shikara ride." },
              { day: 2, title: "Srinagar Sightseeing", description: "Mughal Gardens, Dal Lake floating market & Hazratbal Shrine." },
              { day: 3, title: "Gulmarg", description: "Gondola ride to Apharwat Peak. Snow skiing & meadow walk." },
              { day: 4, title: "Pahalgam", description: "Betaab Valley, Aru Valley & Chandanwari. Lidder River walk." },
              { day: 5, title: "Sonamarg", description: "Drive to Sonamarg. Thajiwas Glacier trek & Zoji La Pass views." },
              { day: 6, title: "Departure", description: "Breakfast. Transfer to Srinagar Airport. Tour ends." }
            ]
          },
          {
            id: 31,
            nights: 6,
            duration: "6N/7D",
            price: 29500,
            name: "Kashmir Explorer",
            image: "https://cdn.yourholiday.me/static/dynimg/itinerary/28/600x300/2210839-2210838_hampi.jpg",
            highlights: [
              "Srinagar, Gulmarg, Pahalgam, Sonamarg & Doodhpathri",
              "Doodhpathri \u2014 the Valley of Milk",
              "Yusmarg meadow & Nilnag Lake trek",
              "Wular Lake & Manasbal Lake visit",
              "All meals, transfers & sightseeing included"
            ],
            groupSize: "2 \u2013 15 People",
            transport: "Flight + Cab",
            accommodation: "4\u2605 Hotels + Houseboat",
            itinerary: [
              { day: 1, title: "Arrival \u2013 Srinagar", description: "Arrive & check-in to houseboat. Evening shikara ride on Dal Lake." },
              { day: 2, title: "Srinagar Sightseeing", description: "Mughal Gardens, Dal Lake floating market & Hazratbal Shrine." },
              { day: 3, title: "Gulmarg", description: "Gondola ride, snow skiing & Alpather Lake trek." },
              { day: 4, title: "Pahalgam", description: "Betaab Valley, Aru Valley & Chandanwari. Lidder River." },
              { day: 5, title: "Sonamarg", description: "Thajiwas Glacier trek & Zoji La Pass views." },
              { day: 6, title: "Doodhpathri & Yusmarg", description: "Doodhpathri Valley of Milk & Yusmarg meadow. Nilnag Lake trek." },
              { day: 7, title: "Departure", description: "Breakfast. Transfer to Srinagar Airport. Tour ends." }
            ]
          },
          {
            id: 32,
            nights: 7,
            duration: "7N/8D",
            price: 38500,
            badge: "Premium",
            name: "Grand Kashmir",
            image: "https://cdn.yourholiday.me/static/dynimg/itinerary/28/600x300/2210839-2210838_hampi.jpg",
            highlights: [
              "Complete Kashmir \u2014 Srinagar, Gulmarg, Pahalgam, Sonamarg, Gurez Valley",
              "Gurez Valley \u2014 untouched Himalayan paradise",
              "Luxury houseboat & mountain resort stays",
              "Private shikara & helicopter ride (optional)",
              "All meals, transfers & exclusive experiences"
            ],
            groupSize: "2 \u2013 10 People",
            transport: "Flight + Private Cab",
            accommodation: "4\u2605 / 5\u2605 Resorts + Luxury Houseboat",
            itinerary: [
              { day: 1, title: "Arrival \u2013 Srinagar", description: "Luxury houseboat check-in. Private shikara ride on Dal Lake." },
              { day: 2, title: "Srinagar Sightseeing", description: "Mughal Gardens, Dal Lake floating market & Hazratbal Shrine." },
              { day: 3, title: "Gulmarg", description: "Gondola ride to Apharwat Peak. Skiing & Alpather Lake trek." },
              { day: 4, title: "Pahalgam", description: "Betaab Valley, Aru Valley & Chandanwari. Lidder River walk." },
              { day: 5, title: "Sonamarg", description: "Thajiwas Glacier trek & Zoji La Pass. Overnight Sonamarg." },
              { day: 6, title: "Gurez Valley", description: "Drive to Gurez Valley. Habba Khatoon Peak, Kishanganga River & Dawar village." },
              { day: 7, title: "Doodhpathri & Yusmarg", description: "Doodhpathri Valley of Milk & Yusmarg meadow. Farewell dinner on houseboat." },
              { day: 8, title: "Departure", description: "Breakfast. Transfer to Srinagar Airport. Tour ends with beautiful memories." }
            ]
          }
        ]
      },
      "uttarakhand": {
        name: "Uttarakhand",
        tagline: "Devbhoomi \u2014 temples, treks & the mighty Himalayas",
        heroImage: "https://cdn.yourholiday.me/static/dynimg/itinerary/21/600x300/2228887-2228886_manali-1.jpg",
        packages: [
          {
            id: 25,
            nights: 4,
            duration: "4N/5D",
            price: 13500,
            badge: "Bestseller",
            name: "Uttarakhand Escape",
            image: "https://cdn.yourholiday.me/static/dynimg/itinerary/21/600x300/2228887-2228886_manali-1.jpg",
            highlights: [
              "Haridwar \u2014 Har Ki Pauri Ganga Aarti",
              "Rishikesh \u2014 Laxman Jhula & Ram Jhula",
              "White water rafting in Rishikesh",
              "Mussoorie \u2014 Kempty Falls & Mall Road",
              "All transfers & daily breakfast included"
            ],
            groupSize: "2 \u2013 20 People",
            transport: "Flight / Train + Cab",
            accommodation: "3\u2605 Hotels",
            itinerary: [
              { day: 1, title: "Arrival \u2013 Haridwar", description: "Arrive at Haridwar. Check-in. Evening Har Ki Pauri Ganga Aarti \u2014 a divine experience." },
              { day: 2, title: "Rishikesh", description: "Drive to Rishikesh. Laxman Jhula, Ram Jhula, Triveni Ghat & Beatles Ashram." },
              { day: 3, title: "River Rafting & Mussoorie", description: "Morning white water rafting in Rishikesh. Drive to Mussoorie. Mall Road evening." },
              { day: 4, title: "Mussoorie Sightseeing", description: "Kempty Falls, Gun Hill, Camel's Back Road & Lal Tibba viewpoint." },
              { day: 5, title: "Departure", description: "Breakfast. Transfer to Dehradun Airport / Railway Station. Tour ends." }
            ]
          },
          {
            id: 26,
            nights: 5,
            duration: "5N/6D",
            price: 18500,
            badge: "Popular",
            name: "Uttarakhand Highlights",
            image: "https://cdn.yourholiday.me/static/dynimg/itinerary/21/600x300/2228887-2228886_manali-1.jpg",
            highlights: [
              "Haridwar, Rishikesh, Mussoorie & Nainital",
              "Naini Lake boat ride & Mall Road Nainital",
              "White water rafting & bungee jumping Rishikesh",
              "Jim Corbett National Park jeep safari",
              "All transfers & daily breakfast included"
            ],
            groupSize: "2 \u2013 20 People",
            transport: "Flight / Train + Cab",
            accommodation: "3\u2605 / 4\u2605 Hotels",
            itinerary: [
              { day: 1, title: "Arrival \u2013 Haridwar", description: "Arrive & check-in. Evening Har Ki Pauri Ganga Aarti." },
              { day: 2, title: "Rishikesh", description: "Laxman Jhula, Ram Jhula, white water rafting & bungee jumping." },
              { day: 3, title: "Mussoorie", description: "Drive to Mussoorie. Kempty Falls, Gun Hill & Mall Road." },
              { day: 4, title: "Nainital", description: "Drive to Nainital. Naini Lake boat ride, Mall Road & Naina Devi Temple." },
              { day: 5, title: "Jim Corbett", description: "Drive to Jim Corbett. Afternoon jeep safari in the national park." },
              { day: 6, title: "Departure", description: "Breakfast. Transfer to Ramnagar / Delhi. Tour ends." }
            ]
          },
          {
            id: 27,
            nights: 6,
            duration: "6N/7D",
            price: 25e3,
            name: "Uttarakhand Explorer",
            image: "https://cdn.yourholiday.me/static/dynimg/itinerary/21/600x300/2228887-2228886_manali-1.jpg",
            highlights: [
              "Haridwar, Rishikesh, Mussoorie, Nainital & Auli",
              "Auli \u2014 skiing & Gorson Bugyal trek",
              "Chopta \u2014 Tungnath & Chandrashila trek",
              "Jim Corbett tiger safari",
              "All meals, transfers & sightseeing included"
            ],
            groupSize: "2 \u2013 15 People",
            transport: "Flight + Cab",
            accommodation: "4\u2605 Hotels",
            itinerary: [
              { day: 1, title: "Arrival \u2013 Haridwar", description: "Arrive & check-in. Evening Har Ki Pauri Ganga Aarti." },
              { day: 2, title: "Rishikesh", description: "Laxman Jhula, white water rafting & Beatles Ashram." },
              { day: 3, title: "Auli", description: "Drive to Auli. Skiing (seasonal), Gorson Bugyal meadow & Joshimath." },
              { day: 4, title: "Chopta & Tungnath", description: "Trek to Tungnath Temple & Chandrashila Peak. Panoramic Himalayan views." },
              { day: 5, title: "Nainital", description: "Drive to Nainital. Naini Lake, Mall Road & Naina Devi Temple." },
              { day: 6, title: "Jim Corbett", description: "Morning & afternoon jeep safari in Jim Corbett National Park." },
              { day: 7, title: "Departure", description: "Breakfast. Transfer to Ramnagar / Delhi. Tour ends." }
            ]
          },
          {
            id: 28,
            nights: 7,
            duration: "7N/8D",
            price: 34e3,
            badge: "Premium",
            name: "Grand Uttarakhand",
            image: "https://cdn.yourholiday.me/static/dynimg/itinerary/21/600x300/2228887-2228886_manali-1.jpg",
            highlights: [
              "Complete Uttarakhand \u2014 Haridwar, Rishikesh, Auli, Chopta, Nainital, Corbett",
              "Char Dham Yatra coverage (Kedarnath & Badrinath)",
              "Luxury resort stays with mountain views",
              "Helicopter ride to Kedarnath (optional)",
              "All meals, transfers & exclusive experiences"
            ],
            groupSize: "2 \u2013 10 People",
            transport: "Flight + Private Cab",
            accommodation: "4\u2605 / 5\u2605 Resorts",
            itinerary: [
              { day: 1, title: "Arrival \u2013 Haridwar", description: "Luxury check-in. Evening Har Ki Pauri Ganga Aarti." },
              { day: 2, title: "Rishikesh", description: "Laxman Jhula, white water rafting & bungee jumping." },
              { day: 3, title: "Kedarnath", description: "Drive to Gaurikund. Trek / helicopter to Kedarnath Temple. Overnight Kedarnath." },
              { day: 4, title: "Badrinath", description: "Drive to Badrinath. Badrinath Temple darshan & Mana Village (last Indian village)." },
              { day: 5, title: "Auli & Chopta", description: "Auli skiing & Gorson Bugyal. Drive to Chopta. Tungnath trek." },
              { day: 6, title: "Nainital", description: "Drive to Nainital. Naini Lake, Mall Road & Naina Devi Temple." },
              { day: 7, title: "Jim Corbett", description: "Morning & afternoon tiger safari in Jim Corbett National Park." },
              { day: 8, title: "Departure", description: "Breakfast. Transfer to Delhi. Tour ends with beautiful memories." }
            ]
          }
        ]
      },
      "ladakh": {
        name: "Ladakh",
        tagline: "Land of High Passes \u2014 monasteries, lakes & raw Himalayas",
        heroImage: "https://cdn.yourholiday.me/static/dynimg/itinerary/99/600x300/3191480-3191479_azin-javadzadeh-wmpyrpas7dq-unsplash.jpg",
        packages: [
          {
            id: 21,
            nights: 4,
            duration: "4N/5D",
            price: 18500,
            badge: "Bestseller",
            name: "Ladakh Escape",
            image: "https://cdn.yourholiday.me/static/dynimg/itinerary/99/600x300/3191480-3191479_azin-javadzadeh-wmpyrpas7dq-unsplash.jpg",
            highlights: [
              "Leh city tour \u2014 Leh Palace & Shanti Stupa",
              "Pangong Tso Lake \u2014 the iconic blue lake",
              "Thiksey & Hemis Monastery visits",
              "Magnetic Hill & Sangam (Indus-Zanskar confluence)",
              "All transfers & daily breakfast included"
            ],
            groupSize: "2 \u2013 15 People",
            transport: "Flight + Cab",
            accommodation: "3\u2605 Hotels / Camps",
            itinerary: [
              { day: 1, title: "Arrival \u2013 Leh (Acclimatization)", description: "Arrive at Leh Airport. Check-in. Rest for acclimatization. Evening Leh Market walk." },
              { day: 2, title: "Leh Local Sightseeing", description: "Leh Palace, Shanti Stupa, Thiksey Monastery, Hemis Monastery & Hall of Fame Museum." },
              { day: 3, title: "Pangong Tso Lake", description: "Drive to Pangong Lake via Chang La Pass. Sunset at the iconic blue lake. Overnight camp." },
              { day: 4, title: "Return to Leh", description: "Morning at Pangong. Drive back via Shyok Valley. Magnetic Hill & Sangam point." },
              { day: 5, title: "Departure", description: "Breakfast. Transfer to Leh Airport. Tour ends with beautiful memories." }
            ]
          },
          {
            id: 22,
            nights: 5,
            duration: "5N/6D",
            price: 24e3,
            badge: "Popular",
            name: "Ladakh Highlights",
            image: "https://cdn.yourholiday.me/static/dynimg/itinerary/99/600x300/3191480-3191479_azin-javadzadeh-wmpyrpas7dq-unsplash.jpg",
            highlights: [
              "Pangong Tso & Nubra Valley coverage",
              "Khardung La Pass \u2014 world's highest motorable road",
              "Bactrian camel safari in Nubra Valley",
              "Diskit Monastery & Hunder Sand Dunes",
              "All transfers & daily breakfast included"
            ],
            groupSize: "2 \u2013 15 People",
            transport: "Flight + Cab",
            accommodation: "3\u2605 / 4\u2605 Hotels + Camp",
            itinerary: [
              { day: 1, title: "Arrival \u2013 Leh (Acclimatization)", description: "Arrive & check-in. Rest. Evening Leh Market & Shanti Stupa." },
              { day: 2, title: "Leh Sightseeing", description: "Leh Palace, Thiksey Monastery, Hemis Monastery & Hall of Fame." },
              { day: 3, title: "Nubra Valley", description: "Drive via Khardung La Pass. Diskit Monastery, Hunder Sand Dunes & camel safari." },
              { day: 4, title: "Pangong Tso Lake", description: "Drive to Pangong Lake. Sunset at the blue lake. Overnight camp." },
              { day: 5, title: "Return to Leh", description: "Morning at Pangong. Drive back via Shyok Valley. Magnetic Hill & Sangam." },
              { day: 6, title: "Departure", description: "Breakfast. Transfer to Leh Airport. Tour ends." }
            ]
          },
          {
            id: 23,
            nights: 6,
            duration: "6N/7D",
            price: 31e3,
            name: "Ladakh Explorer",
            image: "https://cdn.yourholiday.me/static/dynimg/itinerary/99/600x300/3191480-3191479_azin-javadzadeh-wmpyrpas7dq-unsplash.jpg",
            highlights: [
              "Pangong Tso, Nubra Valley & Tso Moriri Lake",
              "Khardung La & Chang La high mountain passes",
              "Zanskar Valley & Rangdum Monastery",
              "White water rafting on Zanskar River",
              "All meals, transfers & sightseeing included"
            ],
            groupSize: "2 \u2013 12 People",
            transport: "Flight + Cab",
            accommodation: "4\u2605 Hotels + Luxury Camps",
            itinerary: [
              { day: 1, title: "Arrival \u2013 Leh (Acclimatization)", description: "Arrive & check-in. Rest. Evening Leh Market walk." },
              { day: 2, title: "Leh Sightseeing", description: "Leh Palace, Shanti Stupa, Thiksey & Hemis Monastery." },
              { day: 3, title: "Nubra Valley", description: "Khardung La Pass, Diskit Monastery, Hunder Dunes & camel safari." },
              { day: 4, title: "Pangong Tso Lake", description: "Drive via Shyok Valley. Sunset at Pangong. Overnight luxury camp." },
              { day: 5, title: "Tso Moriri Lake", description: "Drive to Tso Moriri via Mahe Bridge. Korzok Monastery & lake views." },
              { day: 6, title: "Zanskar & Rafting", description: "White water rafting on Zanskar River. Rangdum Monastery visit." },
              { day: 7, title: "Departure", description: "Breakfast. Transfer to Leh Airport. Tour ends." }
            ]
          },
          {
            id: 24,
            nights: 7,
            duration: "7N/8D",
            price: 42e3,
            badge: "Premium",
            name: "Grand Ladakh",
            image: "https://cdn.yourholiday.me/static/dynimg/itinerary/99/600x300/3191480-3191479_azin-javadzadeh-wmpyrpas7dq-unsplash.jpg",
            highlights: [
              "Complete Ladakh \u2014 Leh, Nubra, Pangong, Tso Moriri, Zanskar",
              "Luxury glamping at Pangong & Nubra",
              "Motorbike ride on Khardung La (optional)",
              "Stargazing camp in the Himalayas",
              "All meals, transfers & exclusive experiences"
            ],
            groupSize: "2 \u2013 8 People",
            transport: "Flight + Private Cab",
            accommodation: "4\u2605 Hotels + Luxury Glamping",
            itinerary: [
              { day: 1, title: "Arrival \u2013 Leh (Acclimatization)", description: "Luxury hotel check-in. Rest. Evening Leh Market & Shanti Stupa." },
              { day: 2, title: "Leh Sightseeing", description: "Leh Palace, Thiksey, Hemis Monastery & Hall of Fame." },
              { day: 3, title: "Nubra Valley", description: "Khardung La Pass, Diskit Monastery, Hunder Dunes & camel safari. Luxury camp." },
              { day: 4, title: "Pangong Tso Lake", description: "Drive via Shyok Valley. Sunset at Pangong. Luxury glamping & stargazing." },
              { day: 5, title: "Tso Moriri Lake", description: "Drive to Tso Moriri. Korzok Monastery & pristine lake views." },
              { day: 6, title: "Zanskar Valley", description: "White water rafting on Zanskar River. Rangdum Monastery." },
              { day: 7, title: "Magnetic Hill & Sangam", description: "Magnetic Hill, Sangam confluence, Gurudwara Pathar Sahib & Hall of Fame." },
              { day: 8, title: "Departure", description: "Breakfast. Transfer to Leh Airport. Tour ends with beautiful memories." }
            ]
          }
        ]
      },
      "rajasthan": {
        name: "Rajasthan",
        tagline: "Land of Kings \u2014 forts, palaces & desert magic",
        heroImage: "https://cdn.yourholiday.me/static/dynimg/itinerary/37/600x450/2185258-2185257_pexels-photo-209741.jpg",
        packages: [
          {
            id: 17,
            nights: 4,
            duration: "4N/5D",
            price: 15500,
            badge: "Bestseller",
            name: "Rajasthan Escape",
            image: "https://cdn.yourholiday.me/static/dynimg/itinerary/37/600x450/2185258-2185257_pexels-photo-209741.jpg",
            highlights: [
              "Jaipur \u2014 Amber Fort, Hawa Mahal & City Palace",
              "Jodhpur \u2014 Mehrangarh Fort & Blue City walk",
              "Pushkar \u2014 Brahma Temple & sacred lake",
              "Camel safari at Sam Sand Dunes, Jaisalmer",
              "All transfers & daily breakfast included"
            ],
            groupSize: "2 \u2013 20 People",
            transport: "Flight + Cab",
            accommodation: "3\u2605 Hotels",
            itinerary: [
              { day: 1, title: "Arrival \u2013 Jaipur", description: "Arrive at Jaipur Airport. Check-in. Evening at Chokhi Dhani for Rajasthani folk dinner." },
              { day: 2, title: "Jaipur Sightseeing", description: "Amber Fort, Hawa Mahal, City Palace, Jantar Mantar & Johari Bazaar shopping." },
              { day: 3, title: "Pushkar", description: "Drive to Pushkar. Brahma Temple, Pushkar Lake & local bazaar. Overnight Pushkar." },
              { day: 4, title: "Jodhpur", description: "Drive to Jodhpur. Mehrangarh Fort, Jaswant Thada & Blue City walk." },
              { day: 5, title: "Departure", description: "Breakfast. Transfer to Jodhpur Airport. Tour ends with beautiful memories." }
            ]
          },
          {
            id: 18,
            nights: 5,
            duration: "5N/6D",
            price: 21e3,
            badge: "Popular",
            name: "Rajasthan Highlights",
            image: "https://cdn.yourholiday.me/static/dynimg/itinerary/37/600x450/2185258-2185257_pexels-photo-209741.jpg",
            highlights: [
              "Jaipur, Jodhpur & Udaipur golden triangle",
              "Lake Pichola boat ride & City Palace Udaipur",
              "Mehrangarh Fort & Umaid Bhawan Palace",
              "Rajasthani folk dinner & cultural show",
              "All transfers & daily breakfast included"
            ],
            groupSize: "2 \u2013 20 People",
            transport: "Flight + Cab",
            accommodation: "3\u2605 / 4\u2605 Hotels",
            itinerary: [
              { day: 1, title: "Arrival \u2013 Jaipur", description: "Arrive & check-in. Evening Chokhi Dhani folk dinner." },
              { day: 2, title: "Jaipur Sightseeing", description: "Amber Fort, Hawa Mahal, City Palace, Jantar Mantar & Johari Bazaar." },
              { day: 3, title: "Pushkar & Ajmer", description: "Brahma Temple, Pushkar Lake, Ajmer Dargah & local bazaar." },
              { day: 4, title: "Jodhpur", description: "Mehrangarh Fort, Jaswant Thada, Umaid Bhawan Palace & Blue City walk." },
              { day: 5, title: "Udaipur", description: "Drive to Udaipur. City Palace, Lake Pichola boat ride & Saheliyon ki Bari." },
              { day: 6, title: "Departure", description: "Breakfast. Transfer to Udaipur Airport. Tour ends." }
            ]
          },
          {
            id: 19,
            nights: 6,
            duration: "6N/7D",
            price: 28e3,
            name: "Rajasthan Explorer",
            image: "https://cdn.yourholiday.me/static/dynimg/itinerary/37/600x450/2185258-2185257_pexels-photo-209741.jpg",
            highlights: [
              "Jaipur, Jodhpur, Jaisalmer & Udaipur circuit",
              "Jaisalmer Golden Fort & camel safari at Sam Dunes",
              "Desert camp overnight stay",
              "Lake Pichola sunset boat ride",
              "All meals, transfers & sightseeing included"
            ],
            groupSize: "2 \u2013 15 People",
            transport: "Flight + Cab",
            accommodation: "4\u2605 Hotels + Desert Camp",
            itinerary: [
              { day: 1, title: "Arrival \u2013 Jaipur", description: "Arrive & check-in. Evening Chokhi Dhani folk dinner." },
              { day: 2, title: "Jaipur Sightseeing", description: "Amber Fort, Hawa Mahal, City Palace & Jantar Mantar." },
              { day: 3, title: "Jodhpur", description: "Mehrangarh Fort, Jaswant Thada & Blue City walk." },
              { day: 4, title: "Jaisalmer", description: "Drive to Jaisalmer. Golden Fort, Patwon ki Haveli & Gadisar Lake." },
              { day: 5, title: "Sam Sand Dunes", description: "Camel safari at Sam Dunes. Sunset in the desert. Overnight desert camp with folk music." },
              { day: 6, title: "Udaipur", description: "Drive to Udaipur. City Palace, Lake Pichola boat ride & Fateh Sagar Lake." },
              { day: 7, title: "Departure", description: "Breakfast. Transfer to Udaipur Airport. Tour ends." }
            ]
          },
          {
            id: 20,
            nights: 7,
            duration: "7N/8D",
            price: 36500,
            badge: "Premium",
            name: "Grand Rajasthan",
            image: "https://cdn.yourholiday.me/static/dynimg/itinerary/37/600x450/2185258-2185257_pexels-photo-209741.jpg",
            highlights: [
              "Complete Rajasthan \u2014 Jaipur, Jodhpur, Jaisalmer, Udaipur, Ranthambore",
              "Ranthambore National Park tiger safari",
              "Luxury heritage hotel & desert camp stays",
              "Private camel safari & desert sunset",
              "All meals, transfers & exclusive experiences"
            ],
            groupSize: "2 \u2013 10 People",
            transport: "Flight + Private Cab",
            accommodation: "4\u2605 / 5\u2605 Heritage Hotels + Desert Camp",
            itinerary: [
              { day: 1, title: "Arrival \u2013 Jaipur", description: "Luxury heritage hotel check-in. Evening Chokhi Dhani folk dinner." },
              { day: 2, title: "Jaipur Sightseeing", description: "Amber Fort, Hawa Mahal, City Palace, Jantar Mantar & Johari Bazaar." },
              { day: 3, title: "Ranthambore", description: "Drive to Ranthambore. Afternoon & morning tiger safari in the national park." },
              { day: 4, title: "Jodhpur", description: "Mehrangarh Fort, Jaswant Thada, Umaid Bhawan Palace & Blue City walk." },
              { day: 5, title: "Jaisalmer", description: "Golden Fort, Patwon ki Haveli & Gadisar Lake." },
              { day: 6, title: "Sam Sand Dunes", description: "Private camel safari. Sunset in the desert. Luxury desert camp with folk music & dinner." },
              { day: 7, title: "Udaipur", description: "City Palace, Lake Pichola private boat ride & Saheliyon ki Bari." },
              { day: 8, title: "Departure", description: "Breakfast. Transfer to Udaipur Airport. Tour ends with beautiful memories." }
            ]
          }
        ]
      },
      "himachal-pradesh": {
        name: "Himachal Pradesh",
        tagline: "Mountains, valleys & snow-capped adventures",
        heroImage: "https://cdn.yourholiday.me/static/dynimg/itinerary/11/600x300/2228921-2228920_hp-3.jpg",
        packages: [
          {
            id: 13,
            nights: 4,
            duration: "4N/5D",
            price: 14500,
            badge: "Bestseller",
            name: "Himachal Escape",
            image: "https://cdn.yourholiday.me/static/dynimg/itinerary/11/600x300/2228921-2228920_hp-3.jpg",
            highlights: [
              "Shimla \u2014 Mall Road, Christ Church & Jakhu Temple",
              "Kufri \u2014 snow activities & horse riding",
              "Manali \u2014 Solang Valley & Rohtang Pass",
              "Hadimba Temple & Old Manali walk",
              "All transfers & daily breakfast included"
            ],
            groupSize: "2 \u2013 20 People",
            transport: "Flight / Train + Cab",
            accommodation: "3\u2605 Hotels",
            itinerary: [
              { day: 1, title: "Arrival \u2013 Shimla", description: "Arrive at Shimla. Check-in. Evening Mall Road walk, Christ Church & Ridge." },
              { day: 2, title: "Shimla & Kufri", description: "Jakhu Temple, Kufri snow point, horse riding & Himalayan Nature Park." },
              { day: 3, title: "Shimla to Manali", description: "Scenic drive via Kullu Valley. Kullu Shawl factory visit. Check-in Manali." },
              { day: 4, title: "Manali Sightseeing", description: "Hadimba Temple, Manu Temple, Old Manali, Vashisht Hot Springs & Mall Road." },
              { day: 5, title: "Departure", description: "Breakfast. Transfer to Bhuntar Airport / Volvo to Delhi. Tour ends." }
            ]
          },
          {
            id: 14,
            nights: 5,
            duration: "5N/6D",
            price: 19500,
            badge: "Popular",
            name: "Himachal Highlights",
            image: "https://cdn.yourholiday.me/static/dynimg/itinerary/21/600x300/2228887-2228886_manali-1.jpg",
            highlights: [
              "Shimla, Kufri, Manali & Solang Valley",
              "Rohtang Pass snow experience (seasonal)",
              "River rafting in Beas River, Kullu",
              "Dharamshala & McLeod Ganj \u2014 Dalai Lama Temple",
              "All transfers & daily breakfast included"
            ],
            groupSize: "2 \u2013 20 People",
            transport: "Flight / Train + Cab",
            accommodation: "3\u2605 / 4\u2605 Hotels",
            itinerary: [
              { day: 1, title: "Arrival \u2013 Shimla", description: "Arrive & check-in. Mall Road, Christ Church & Ridge evening walk." },
              { day: 2, title: "Shimla & Kufri", description: "Jakhu Temple, Kufri snow point & Himalayan Nature Park." },
              { day: 3, title: "Kullu & Manali", description: "Drive via Kullu. River rafting in Beas. Check-in Manali." },
              { day: 4, title: "Rohtang Pass / Solang Valley", description: "Rohtang Pass snow (seasonal) or Solang Valley \u2014 skiing, zorbing & cable car." },
              { day: 5, title: "Dharamshala & McLeod Ganj", description: "Dalai Lama Temple, Bhagsu Waterfall, Tibetan market & St. John Church." },
              { day: 6, title: "Departure", description: "Breakfast. Transfer to Gaggal Airport / Volvo to Delhi. Tour ends." }
            ]
          },
          {
            id: 15,
            nights: 6,
            duration: "6N/7D",
            price: 26e3,
            name: "Himachal Explorer",
            image: "https://cdn.yourholiday.me/static/dynimg/itinerary/11/600x300/2228921-2228920_hp-3.jpg",
            highlights: [
              "Shimla, Manali, Dharamshala & Dalhousie",
              "Rohtang Pass + Solang Valley snow activities",
              "Khajjiar \u2014 the Mini Switzerland of India",
              "River rafting, paragliding & trekking",
              "All meals, transfers & sightseeing included"
            ],
            groupSize: "2 \u2013 15 People",
            transport: "Flight + Cab",
            accommodation: "4\u2605 Hotels",
            itinerary: [
              { day: 1, title: "Arrival \u2013 Shimla", description: "Arrive & check-in. Mall Road, Christ Church & Jakhu Temple." },
              { day: 2, title: "Kufri & Chail", description: "Kufri snow point, Chail Palace & Chail Wildlife Sanctuary." },
              { day: 3, title: "Manali", description: "Drive to Manali. Hadimba Temple, Old Manali & Vashisht Hot Springs." },
              { day: 4, title: "Rohtang & Solang Valley", description: "Rohtang Pass snow (seasonal). Solang Valley \u2014 skiing, zorbing & cable car." },
              { day: 5, title: "Dharamshala & McLeod Ganj", description: "Dalai Lama Temple, Bhagsu Waterfall & Tibetan market." },
              { day: 6, title: "Dalhousie & Khajjiar", description: "Khajjiar meadow (Mini Switzerland), Dainkund Peak & Panchpula waterfall." },
              { day: 7, title: "Departure", description: "Breakfast. Transfer to Pathankot / Gaggal Airport. Tour ends." }
            ]
          },
          {
            id: 16,
            nights: 7,
            duration: "7N/8D",
            price: 34500,
            badge: "Premium",
            name: "Grand Himachal",
            image: "https://cdn.yourholiday.me/static/dynimg/itinerary/21/600x300/2228887-2228886_manali-1.jpg",
            highlights: [
              "Complete Himachal \u2014 Shimla, Manali, Dharamshala, Dalhousie, Spiti",
              "Spiti Valley \u2014 Key Monastery & Chandratal Lake",
              "Paragliding in Bir Billing (World's Best Site)",
              "Luxury mountain resort stays",
              "All meals, transfers & exclusive experiences"
            ],
            groupSize: "2 \u2013 10 People",
            transport: "Flight + Private Cab",
            accommodation: "4\u2605 / 5\u2605 Mountain Resorts",
            itinerary: [
              { day: 1, title: "Arrival \u2013 Shimla", description: "Luxury check-in. Mall Road, Christ Church & Ridge." },
              { day: 2, title: "Kufri & Chail", description: "Kufri snow, Chail Palace & Himalayan Nature Park." },
              { day: 3, title: "Manali", description: "Drive to Manali. Hadimba Temple, Old Manali & Vashisht Hot Springs." },
              { day: 4, title: "Rohtang & Solang Valley", description: "Rohtang Pass snow. Solang Valley skiing & zorbing." },
              { day: 5, title: "Dharamshala & Bir Billing", description: "Dalai Lama Temple, McLeod Ganj. Paragliding at Bir Billing." },
              { day: 6, title: "Dalhousie & Khajjiar", description: "Khajjiar meadow, Dainkund Peak & Panchpula waterfall." },
              { day: 7, title: "Spiti Valley", description: "Key Monastery, Kibber village & Chandratal Lake (seasonal)." },
              { day: 8, title: "Departure", description: "Breakfast. Transfer to airport. Tour ends with beautiful memories." }
            ]
          }
        ]
      }
    };
    this.internationalDestinationPages = {
      "bali": {
        name: "Bali, Indonesia",
        tagline: "Island of the Gods \u2014 temples, rice terraces & turquoise seas",
        heroImage: "https://cdn.yourholiday.me/static/dynimg/destination/48/600x300/3996290-3996289_bali-4.jpg",
        packages: [
          {
            id: 1001,
            nights: 4,
            duration: "4N/5D",
            price: 12387,
            badge: "Bestseller",
            name: "Bali Basic for First Timers",
            image: "https://cdn.yourholiday.me/static/dynimg/destination/48/600x300/3996290-3996289_bali-4.jpg",
            highlights: [
              "Return flights from Mumbai/Delhi included",
              "Ubud Kintamani volcano & rice terraces",
              "Water sports at Tanjung Benoa beach",
              "Uluwatu Kecak fire dance at sunset",
              "Tanah Lot temple & Monkey Forest"
            ],
            groupSize: "2 \u2013 20 People",
            transport: "Flight + Coach",
            accommodation: "3\u2605 / 4\u2605 Hotels",
            itinerary: [
              { day: 1, title: "Arrival \u2013 Bali", description: "Arrive at Ngurah Rai Airport. Check-in to hotel. Evening at leisure. Welcome dinner." },
              { day: 2, title: "Ubud Kintamani & Water Sports", description: "Visit Ubud Kintamani volcano, rice terraces & Monkey Forest. Afternoon water sports at Tanjung Benoa." },
              { day: 3, title: "Uluwatu & Taman Ayun", description: "Taman Ayun Temple, Uluwatu cliff temple & Kecak fire dance at sunset." },
              { day: 4, title: "Tanah Lot & Shopping", description: "Tanah Lot sea temple at sunset. Kuta beach & souvenir shopping." },
              { day: 5, title: "Departure", description: "Breakfast at hotel. Check-out & transfer to airport. Tour ends with beautiful memories." }
            ]
          },
          {
            id: 1002,
            nights: 5,
            duration: "5N/6D",
            price: 15917,
            badge: "Bestseller",
            name: "Beautiful Bali",
            image: "https://cdn.yourholiday.me/static/dynimg/itinerary/21/600x300/2210757-2210756_sin-pack-1.jpg",
            highlights: [
              "Return flights from Mumbai/Delhi included",
              "Ubud, Kintamani, Goa Gajah & Tirta Empul",
              "Water sports, Uluwatu Kecak & Bali Swing",
              "Ulun Danu Temple & Git Git Waterfalls",
              "All transfers & daily breakfast included"
            ],
            groupSize: "2 \u2013 20 People",
            transport: "Flight + Coach",
            accommodation: "3\u2605 / 4\u2605 Hotels",
            itinerary: [
              { day: 1, title: "Arrival \u2013 Bali", description: "Arrive at Ngurah Rai Airport. Check-in. Evening at leisure. Welcome dinner." },
              { day: 2, title: "Ubud Kintamani, Water Sports", description: "Visit Ubud Kintamani, Water Sports. Expert guide accompanies throughout. Meals included." },
              { day: 3, title: "Uluwatu Kecak, Taman Ayun Temple", description: "Visit Uluwatu Kecak, Taman Ayun Temple. Expert guide accompanies throughout. Meals included." },
              { day: 4, title: "Monkey Forest, Tanah Lot", description: "Visit Monkey Forest, Tanah Lot. Expert guide accompanies throughout. Meals included." },
              { day: 5, title: "Ulun Danu & Git Git Waterfalls", description: "Ulun Danu Temple, Git Git Waterfalls & Bedugul. Leisure evening." },
              { day: 6, title: "Departure", description: "Breakfast at hotel. Check-out & transfer to airport. Tour ends." }
            ]
          },
          {
            id: 1003,
            nights: 6,
            duration: "6N/7D",
            price: 27169,
            name: "Romantic Bali",
            image: "https://cdn.yourholiday.me/static/dynimg/itinerary/99/600x300/3191480-3191479_azin-javadzadeh-wmpyrpas7dq-unsplash.jpg",
            highlights: [
              "Return flights from Mumbai/Delhi included",
              "Bali Swing & candle light dinner",
              "Nusa Penida \u2014 Kelingking Beach & Angel Billabong",
              "Balinese spa & rice terrace walk",
              "All transfers & daily breakfast included"
            ],
            groupSize: "2 \u2013 15 People",
            transport: "Flight + Coach",
            accommodation: "4\u2605 Hotels",
            itinerary: [
              { day: 1, title: "Arrival \u2013 Bali", description: "Arrive & check-in. Welcome dinner at beach restaurant." },
              { day: 2, title: "Ubud & Bali Swing", description: "Ubud Royal Palace, Goa Gajah, Bali Swing & Tegalalang Rice Terraces." },
              { day: 3, title: "Water Sports & Uluwatu", description: "Water sports at Tanjung Benoa. Uluwatu Kecak fire dance at sunset." },
              { day: 4, title: "Nusa Penida", description: "Day trip to Nusa Penida. Kelingking Beach, Angel Billabong & Broken Beach." },
              { day: 5, title: "Spa & Tanah Lot", description: "Balinese spa session. Tanah Lot sunset. Candle light dinner." },
              { day: 6, title: "Seminyak & Shopping", description: "Seminyak beach, Ku De Ta sunset & souvenir shopping." },
              { day: 7, title: "Departure", description: "Breakfast. Check-out & transfer to airport. Tour ends." }
            ]
          },
          {
            id: 1004,
            nights: 7,
            duration: "7N/8D",
            price: 40695,
            badge: "Premium",
            name: "Grand Bali",
            image: "https://cdn.yourholiday.me/static/dynimg/destination/48/600x300/3996290-3996289_bali-4.jpg",
            highlights: [
              "Return flights from Mumbai/Delhi included",
              "Bali + Nusa Penida full circuit",
              "Private villa stay in Seminyak",
              "Scuba diving, ATV ride & white water rafting",
              "All meals, transfers & exclusive experiences"
            ],
            groupSize: "2 \u2013 10 People",
            transport: "Flight + Private Coach",
            accommodation: "4\u2605 / 5\u2605 Villas & Hotels",
            itinerary: [
              { day: 1, title: "Arrival \u2013 Bali", description: "Private villa check-in. Welcome dinner at beach restaurant." },
              { day: 2, title: "Ubud & Bali Swing", description: "Ubud Royal Palace, Goa Gajah, Bali Swing & Tegalalang Rice Terraces." },
              { day: 3, title: "ATV & White Water Rafting", description: "ATV ride through rice fields. White water rafting on Ayung River." },
              { day: 4, title: "Nusa Penida", description: "Kelingking Beach, Angel Billabong, Broken Beach & Crystal Bay snorkeling." },
              { day: 5, title: "Water Sports & Uluwatu", description: "Scuba diving at Padang Bai. Uluwatu Kecak fire dance." },
              { day: 6, title: "Tanah Lot & Spa", description: "Tanah Lot sunset. Luxury Balinese spa. Candle light dinner." },
              { day: 7, title: "Seminyak & Kuta", description: "Seminyak beach, Ku De Ta sunset & farewell dinner." },
              { day: 8, title: "Departure", description: "Breakfast. Check-out & transfer to airport. Tour ends with beautiful memories." }
            ]
          }
        ]
      },
      "dubai": {
        name: "Dubai, UAE",
        tagline: "City of Gold \u2014 skyscrapers, desert & luxury beyond limits",
        heroImage: "https://cdn.yourholiday.me/static/dynimg/destination/16/600x300/3598628-3598627_adobestock_47088158.jpg",
        packages: [
          {
            id: 2001,
            nights: 4,
            duration: "4N/5D",
            price: 28536,
            badge: "Bestseller",
            name: "Dubai on a Budget",
            image: "https://cdn.yourholiday.me/static/dynimg/itinerary/98/600x300/2211579-2211578_dubai-pac1.jpg",
            highlights: [
              "Return flights from Mumbai/Delhi included",
              "Burj Khalifa \u2014 At the Top observation deck",
              "Desert safari with BBQ dinner & belly dance",
              "Dhow cruise dinner on Dubai Creek",
              "Dubai Mall, Gold Souk & Spice Souk"
            ],
            groupSize: "2 \u2013 20 People",
            transport: "Flight + Coach",
            accommodation: "3\u2605 / 4\u2605 Hotels",
            itinerary: [
              { day: 1, title: "Arrival \u2013 Dubai", description: "Arrive at Dubai International Airport. Check-in. Evening Dubai Creek Dhow cruise dinner." },
              { day: 2, title: "Dubai City Tour", description: "Burj Khalifa At the Top, Dubai Mall, Dubai Frame, Gold Souk & Spice Souk." },
              { day: 3, title: "Desert Safari", description: "Morning at leisure. Afternoon desert safari \u2014 dune bashing, camel ride, BBQ dinner & belly dance." },
              { day: 4, title: "Palm Jumeirah & Shopping", description: "Palm Jumeirah, Atlantis view, Mall of the Emirates & Ski Dubai." },
              { day: 5, title: "Departure", description: "Breakfast at hotel. Check-out & transfer to airport. Tour ends with beautiful memories." }
            ]
          },
          {
            id: 2002,
            nights: 5,
            duration: "5N/6D",
            price: 40397,
            badge: "Popular",
            name: "Trip to Dubai",
            image: "https://cdn.yourholiday.me/static/dynimg/itinerary/59/600x300/2211591-2211590_dubai-pac-4.jpg",
            highlights: [
              "Return flights from Mumbai/Delhi included",
              "Burj Khalifa, Dubai Mall & Dubai Frame",
              "Desert safari with dune bashing & BBQ",
              "Abu Dhabi \u2014 Sheikh Zayed Grand Mosque",
              "Palm Jumeirah & Atlantis Aquaventure"
            ],
            groupSize: "2 \u2013 20 People",
            transport: "Flight + Coach",
            accommodation: "4\u2605 Hotels",
            itinerary: [
              { day: 1, title: "Arrival \u2013 Dubai", description: "Arrive & check-in. Evening Dubai Creek Dhow cruise dinner." },
              { day: 2, title: "Dubai City Tour", description: "Burj Khalifa, Dubai Mall, Dubai Frame, Gold Souk & Spice Souk." },
              { day: 3, title: "Desert Safari", description: "Dune bashing, camel ride, sandboarding, BBQ dinner & belly dance." },
              { day: 4, title: "Abu Dhabi Day Trip", description: "Sheikh Zayed Grand Mosque, Ferrari World & Corniche." },
              { day: 5, title: "Palm Jumeirah & Atlantis", description: "Palm Jumeirah monorail, Atlantis Aquaventure & The Pointe." },
              { day: 6, title: "Departure", description: "Breakfast. Check-out & transfer to airport. Tour ends." }
            ]
          },
          {
            id: 2003,
            nights: 6,
            duration: "6N/7D",
            price: 52e3,
            name: "Dubai Explorer",
            image: "https://cdn.yourholiday.me/static/dynimg/destination/16/600x300/3598628-3598627_adobestock_47088158.jpg",
            highlights: [
              "Return flights from Mumbai/Delhi included",
              "Dubai + Abu Dhabi + Sharjah full circuit",
              "Burj Al Arab exterior visit & photo stop",
              "Dubai Opera show & City Walk",
              "All meals, transfers & sightseeing included"
            ],
            groupSize: "2 \u2013 15 People",
            transport: "Flight + Coach",
            accommodation: "4\u2605 Hotels",
            itinerary: [
              { day: 1, title: "Arrival \u2013 Dubai", description: "Arrive & check-in. Evening Dubai Creek Dhow cruise dinner." },
              { day: 2, title: "Dubai City Tour", description: "Burj Khalifa, Dubai Mall, Dubai Frame, Gold Souk & Spice Souk." },
              { day: 3, title: "Desert Safari", description: "Dune bashing, camel ride, sandboarding, BBQ dinner & belly dance." },
              { day: 4, title: "Abu Dhabi", description: "Sheikh Zayed Grand Mosque, Ferrari World, Louvre Abu Dhabi & Corniche." },
              { day: 5, title: "Palm Jumeirah & Burj Al Arab", description: "Palm Jumeirah, Atlantis, Burj Al Arab photo stop & City Walk." },
              { day: 6, title: "Sharjah & Dubai Opera", description: "Sharjah Heritage Area, Blue Souk & Dubai Opera evening show." },
              { day: 7, title: "Departure", description: "Breakfast. Check-out & transfer to airport. Tour ends." }
            ]
          },
          {
            id: 2004,
            nights: 7,
            duration: "7N/8D",
            price: 85e3,
            badge: "Premium",
            name: "Grand Dubai",
            image: "https://cdn.yourholiday.me/static/dynimg/itinerary/98/600x300/2211579-2211578_dubai-pac1.jpg",
            highlights: [
              "Return flights from Mumbai/Delhi included",
              "Luxury 5-star hotel stay in Downtown Dubai",
              "Private desert safari & yacht cruise",
              "Dubai + Abu Dhabi + Oman day trip",
              "All meals, transfers & exclusive experiences"
            ],
            groupSize: "2 \u2013 10 People",
            transport: "Flight + Private Coach",
            accommodation: "5\u2605 Hotels",
            itinerary: [
              { day: 1, title: "Arrival \u2013 Dubai", description: "Luxury 5-star check-in. Private Dhow cruise dinner on Dubai Creek." },
              { day: 2, title: "Dubai City Tour", description: "Burj Khalifa VIP access, Dubai Mall, Dubai Frame & Gold Souk." },
              { day: 3, title: "Private Desert Safari", description: "Private dune bashing, camel ride, falconry show & gourmet BBQ dinner." },
              { day: 4, title: "Abu Dhabi", description: "Sheikh Zayed Grand Mosque, Ferrari World, Louvre Abu Dhabi & Corniche." },
              { day: 5, title: "Oman Day Trip", description: "Drive to Muscat. Sultan Qaboos Grand Mosque, Mutrah Souq & Corniche." },
              { day: 6, title: "Yacht Cruise & Atlantis", description: "Private yacht cruise around Palm Jumeirah. Atlantis Aquaventure." },
              { day: 7, title: "Luxury Shopping & Spa", description: "Mall of the Emirates, Ski Dubai & luxury spa session." },
              { day: 8, title: "Departure", description: "Breakfast. Check-out & transfer to airport. Tour ends with beautiful memories." }
            ]
          }
        ]
      },
      "thailand": {
        name: "Thailand",
        tagline: "Land of Smiles \u2014 temples, beaches & vibrant street life",
        heroImage: "https://cdn.yourholiday.me/static/dynimg/destination/32/600x300/3076721-3076720_thailand2.jpg",
        packages: [
          {
            id: 3001,
            nights: 4,
            duration: "4N/5D",
            price: 18999,
            badge: "Bestseller",
            name: "Classic Thailand",
            image: "https://cdn.yourholiday.me/static/dynimg/itinerary/45/600x300/2210729-2210728_thailand-p1.jpg",
            highlights: [
              "Return flights from Mumbai/Delhi included",
              "Bangkok \u2014 Grand Palace, Wat Pho & Floating Market",
              "Pattaya \u2014 Coral Island & Nong Nooch Village",
              "Walking Street Pattaya nightlife",
              "All transfers & daily breakfast included"
            ],
            groupSize: "2 \u2013 20 People",
            transport: "Flight + Coach",
            accommodation: "3\u2605 / 4\u2605 Hotels",
            itinerary: [
              { day: 1, title: "Arrival \u2013 Bangkok", description: "Arrive at Suvarnabhumi Airport. Check-in. Evening Chao Phraya River cruise & welcome dinner." },
              { day: 2, title: "Bangkok City Tour", description: "Grand Palace, Wat Pho (Reclining Buddha), Wat Arun & Chatuchak Weekend Market." },
              { day: 3, title: "Floating Market & Pattaya", description: "Damnoen Saduak Floating Market. Drive to Pattaya. Evening Walking Street." },
              { day: 4, title: "Coral Island & Nong Nooch", description: "Coral Island speedboat trip \u2014 snorkeling & water sports. Nong Nooch Village cultural show." },
              { day: 5, title: "Departure", description: "Breakfast at hotel. Transfer to Bangkok Airport. Tour ends with beautiful memories." }
            ]
          },
          {
            id: 3002,
            nights: 5,
            duration: "5N/6D",
            price: 28500,
            badge: "Popular",
            name: "Thailand Highlights",
            image: "https://cdn.yourholiday.me/static/dynimg/itinerary/2/600x300/2210731-2210730_thailand-p2.jpg",
            highlights: [
              "Return flights from Mumbai/Delhi included",
              "Bangkok, Pattaya & Phuket coverage",
              "Phi Phi Islands speedboat day trip",
              "James Bond Island & Phang Nga Bay",
              "All transfers & daily breakfast included"
            ],
            groupSize: "2 \u2013 20 People",
            transport: "Flight + Coach",
            accommodation: "3\u2605 / 4\u2605 Hotels",
            itinerary: [
              { day: 1, title: "Arrival \u2013 Bangkok", description: "Arrive & check-in. Evening Chao Phraya River cruise." },
              { day: 2, title: "Bangkok City Tour", description: "Grand Palace, Wat Pho, Wat Arun & Floating Market." },
              { day: 3, title: "Pattaya", description: "Coral Island, Nong Nooch Village & Walking Street." },
              { day: 4, title: "Fly to Phuket", description: "Flight to Phuket. Check-in. Patong Beach & Bangla Road evening." },
              { day: 5, title: "Phi Phi Islands", description: "Speedboat to Phi Phi Islands \u2014 Maya Bay, snorkeling & Viking Cave." },
              { day: 6, title: "Departure", description: "Breakfast. Transfer to Phuket Airport. Tour ends." }
            ]
          },
          {
            id: 3003,
            nights: 6,
            duration: "6N/7D",
            price: 42e3,
            name: "Thailand Explorer",
            image: "https://cdn.yourholiday.me/static/dynimg/itinerary/45/600x300/2210729-2210728_thailand-p1.jpg",
            highlights: [
              "Return flights from Mumbai/Delhi included",
              "Bangkok, Chiang Mai, Phuket & Krabi",
              "Elephant Sanctuary visit in Chiang Mai",
              "Railay Beach & Four Islands tour Krabi",
              "All meals, transfers & sightseeing included"
            ],
            groupSize: "2 \u2013 15 People",
            transport: "Flight + Coach",
            accommodation: "4\u2605 Hotels",
            itinerary: [
              { day: 1, title: "Arrival \u2013 Bangkok", description: "Arrive & check-in. Evening Chao Phraya River cruise." },
              { day: 2, title: "Bangkok City Tour", description: "Grand Palace, Wat Pho, Wat Arun & Chatuchak Market." },
              { day: 3, title: "Chiang Mai", description: "Fly to Chiang Mai. Doi Suthep Temple & Night Bazaar." },
              { day: 4, title: "Elephant Sanctuary & Doi Inthanon", description: "Ethical Elephant Sanctuary visit. Doi Inthanon National Park \u2014 Thailand's highest peak." },
              { day: 5, title: "Phuket", description: "Fly to Phuket. Patong Beach, Big Buddha & Promthep Cape sunset." },
              { day: 6, title: "Krabi & Railay Beach", description: "Drive to Krabi. Railay Beach by longtail boat. Four Islands snorkeling tour." },
              { day: 7, title: "Departure", description: "Breakfast. Transfer to Krabi Airport. Tour ends." }
            ]
          },
          {
            id: 3004,
            nights: 7,
            duration: "7N/8D",
            price: 62e3,
            badge: "Premium",
            name: "Grand Thailand",
            image: "https://cdn.yourholiday.me/static/dynimg/itinerary/2/600x300/2210731-2210730_thailand-p2.jpg",
            highlights: [
              "Return flights from Mumbai/Delhi included",
              "Bangkok, Chiang Mai, Phuket, Krabi & Koh Samui",
              "Private Elephant Sanctuary & jungle trek",
              "Luxury resort stays throughout",
              "All meals, transfers & exclusive experiences"
            ],
            groupSize: "2 \u2013 10 People",
            transport: "Flight + Private Coach",
            accommodation: "4\u2605 / 5\u2605 Resorts",
            itinerary: [
              { day: 1, title: "Arrival \u2013 Bangkok", description: "Luxury hotel check-in. Private Chao Phraya dinner cruise." },
              { day: 2, title: "Bangkok City Tour", description: "Grand Palace, Wat Pho, Wat Arun & Floating Market." },
              { day: 3, title: "Chiang Mai", description: "Fly to Chiang Mai. Doi Suthep Temple & Night Bazaar." },
              { day: 4, title: "Elephant Sanctuary & Doi Inthanon", description: "Private Elephant Sanctuary. Doi Inthanon National Park & hill tribe village." },
              { day: 5, title: "Phuket", description: "Fly to Phuket. Big Buddha, Promthep Cape & Patong Beach." },
              { day: 6, title: "Phi Phi Islands & Krabi", description: "Private speedboat to Phi Phi Islands. Maya Bay & snorkeling. Railay Beach." },
              { day: 7, title: "Koh Samui", description: "Fly to Koh Samui. Ang Thong Marine Park & Chaweng Beach." },
              { day: 8, title: "Departure", description: "Breakfast. Transfer to Koh Samui Airport. Tour ends with beautiful memories." }
            ]
          }
        ]
      },
      "singapore": {
        name: "Singapore",
        tagline: "Lion City \u2014 futuristic skyline, gardens & world-class experiences",
        heroImage: "https://cdn.yourholiday.me/static/dynimg/destination/58/600x300/3996296-3996295_singapore-stock-image.jpg",
        packages: [
          {
            id: 4001,
            nights: 4,
            duration: "4N/5D",
            price: 32500,
            badge: "Bestseller",
            name: "Singapore Highlights",
            image: "https://cdn.yourholiday.me/static/dynimg/destination/58/600x300/3996296-3996295_singapore-stock-image.jpg",
            highlights: [
              "Return flights from Mumbai/Delhi included",
              "Gardens by the Bay & Marina Bay Sands",
              "Sentosa Island \u2014 Universal Studios Singapore",
              "Merlion Park, Chinatown & Little India",
              "All transfers & daily breakfast included"
            ],
            groupSize: "2 \u2013 20 People",
            transport: "Flight + MRT + Coach",
            accommodation: "3\u2605 / 4\u2605 Hotels",
            itinerary: [
              { day: 1, title: "Arrival \u2013 Singapore", description: "Arrive at Changi Airport. Check-in. Evening Marina Bay Sands Skypark & Gardens by the Bay light show." },
              { day: 2, title: "City Tour", description: "Merlion Park, Marina Bay Sands, Chinatown, Little India & Arab Street." },
              { day: 3, title: "Sentosa Island", description: "Universal Studios Singapore, S.E.A. Aquarium & Sentosa beach." },
              { day: 4, title: "Gardens by the Bay & Shopping", description: "Gardens by the Bay, Cloud Forest, Orchard Road shopping & Singapore Flyer." },
              { day: 5, title: "Departure", description: "Breakfast at hotel. Transfer to Changi Airport. Tour ends with beautiful memories." }
            ]
          },
          {
            id: 4002,
            nights: 5,
            duration: "5N/6D",
            price: 44999,
            badge: "Popular",
            name: "Ultimate Singapore",
            image: "https://cdn.yourholiday.me/static/dynimg/itinerary/76/600x300/2211669-2211668_singapore-4.jpg",
            highlights: [
              "Return flights from Mumbai/Delhi included",
              "Universal Studios, Night Safari & Singapore Zoo",
              "Gardens by the Bay & Marina Bay Sands",
              "Jurong Bird Park & S.E.A. Aquarium",
              "All transfers & daily breakfast included"
            ],
            groupSize: "2 \u2013 20 People",
            transport: "Flight + MRT + Coach",
            accommodation: "4\u2605 Hotels",
            itinerary: [
              { day: 1, title: "Arrival \u2013 Singapore", description: "Arrive & check-in. Evening Marina Bay Sands & Gardens by the Bay light show." },
              { day: 2, title: "City Tour", description: "Merlion Park, Chinatown, Little India, Arab Street & Singapore Flyer." },
              { day: 3, title: "Sentosa & Universal Studios", description: "Universal Studios Singapore & S.E.A. Aquarium." },
              { day: 4, title: "Singapore Zoo & Night Safari", description: "Singapore Zoo morning visit. Night Safari evening \u2014 unique nocturnal wildlife experience." },
              { day: 5, title: "Gardens by the Bay & Jurong", description: "Gardens by the Bay, Cloud Forest & Jurong Bird Park." },
              { day: 6, title: "Departure", description: "Breakfast. Transfer to Changi Airport. Tour ends." }
            ]
          },
          {
            id: 4003,
            nights: 6,
            duration: "6N/7D",
            price: 58e3,
            name: "Singapore Explorer",
            image: "https://cdn.yourholiday.me/static/dynimg/destination/58/600x300/3996296-3996295_singapore-stock-image.jpg",
            highlights: [
              "Return flights from Mumbai/Delhi included",
              "Singapore + Malaysia (Kuala Lumpur) combo",
              "Petronas Twin Towers & Batu Caves KL",
              "Genting Highlands cable car & casino",
              "All meals, transfers & sightseeing included"
            ],
            groupSize: "2 \u2013 15 People",
            transport: "Flight + Coach",
            accommodation: "4\u2605 Hotels",
            itinerary: [
              { day: 1, title: "Arrival \u2013 Singapore", description: "Arrive & check-in. Evening Marina Bay Sands & Gardens by the Bay." },
              { day: 2, title: "Singapore City Tour", description: "Merlion Park, Chinatown, Little India & Singapore Flyer." },
              { day: 3, title: "Sentosa & Universal Studios", description: "Universal Studios Singapore & S.E.A. Aquarium." },
              { day: 4, title: "Night Safari & Zoo", description: "Singapore Zoo & Night Safari." },
              { day: 5, title: "Kuala Lumpur", description: "Coach to KL. Petronas Twin Towers, Batu Caves & KL Tower." },
              { day: 6, title: "Genting Highlands", description: "Cable car to Genting Highlands. Theme park & casino. Return to KL." },
              { day: 7, title: "Departure", description: "Breakfast. Transfer to KLIA. Tour ends." }
            ]
          },
          {
            id: 4004,
            nights: 7,
            duration: "7N/8D",
            price: 78e3,
            badge: "Premium",
            name: "Grand Singapore",
            image: "https://cdn.yourholiday.me/static/dynimg/itinerary/76/600x300/2211669-2211668_singapore-4.jpg",
            highlights: [
              "Return flights from Mumbai/Delhi included",
              "Marina Bay Sands hotel stay",
              "Private city tour & yacht dinner cruise",
              "Singapore + Malaysia full circuit",
              "All meals, transfers & exclusive experiences"
            ],
            groupSize: "2 \u2013 10 People",
            transport: "Flight + Private Coach",
            accommodation: "4\u2605 / 5\u2605 Hotels incl. MBS",
            itinerary: [
              { day: 1, title: "Arrival \u2013 Singapore", description: "Marina Bay Sands check-in. Skypark infinity pool. Evening Gardens by the Bay." },
              { day: 2, title: "Private City Tour", description: "Private city tour \u2014 Merlion, Chinatown, Little India & Orchard Road." },
              { day: 3, title: "Sentosa & Universal Studios", description: "Universal Studios Singapore & S.E.A. Aquarium. Evening yacht dinner cruise." },
              { day: 4, title: "Singapore Zoo & Night Safari", description: "Singapore Zoo & Night Safari." },
              { day: 5, title: "Gardens & Jurong", description: "Gardens by the Bay, Cloud Forest & Jurong Bird Park." },
              { day: 6, title: "Kuala Lumpur", description: "Coach to KL. Petronas Twin Towers, Batu Caves & KL Tower." },
              { day: 7, title: "Genting Highlands", description: "Cable car to Genting Highlands. Theme park & casino." },
              { day: 8, title: "Departure", description: "Breakfast. Transfer to KLIA. Tour ends with beautiful memories." }
            ]
          }
        ]
      },
      "italy": {
        name: "Italy",
        tagline: "Bel Paese \u2014 ancient ruins, Renaissance art & la dolce vita",
        heroImage: "https://cdn.yourholiday.me/static/dynimg/destination/79/600x300/2750961-2750960_italy.jpg",
        packages: [
          {
            id: 16001,
            nights: 4,
            duration: "4N/5D",
            price: 74999,
            badge: "Bestseller",
            name: "Roman Holiday",
            image: "https://cdn.yourholiday.me/static/dynimg/destination/79/600x300/2750961-2750960_italy.jpg",
            highlights: [
              "Return flights from Mumbai/Delhi included",
              "Colosseum, Roman Forum & Palatine Hill",
              "Vatican Museums, Sistine Chapel & St. Peter's Basilica",
              "Trevi Fountain, Spanish Steps & Pantheon",
              "All transfers & daily breakfast included"
            ],
            groupSize: "2 \u2013 20 People",
            transport: "Flight + Coach",
            accommodation: "3\u2605 / 4\u2605 Hotels",
            itinerary: [
              { day: 1, title: "Arrival \u2013 Rome", description: "Arrive at Rome Fiumicino Airport. Check-in. Evening Trastevere neighbourhood walk & dinner." },
              { day: 2, title: "Ancient Rome", description: "Colosseum, Roman Forum, Palatine Hill & Circus Maximus." },
              { day: 3, title: "Vatican City", description: "Vatican Museums, Sistine Chapel, St. Peter's Basilica & St. Peter's Square." },
              { day: 4, title: "Rome Highlights", description: "Trevi Fountain, Spanish Steps, Pantheon & Piazza Navona. Evening gelato walk." },
              { day: 5, title: "Departure", description: "Breakfast at hotel. Transfer to Rome Airport. Tour ends with beautiful memories." }
            ]
          },
          {
            id: 16002,
            nights: 5,
            duration: "5N/6D",
            price: 99999,
            badge: "Popular",
            name: "Tuscan Trails",
            image: "https://cdn.yourholiday.me/static/dynimg/destination/79/600x300/2750961-2750960_italy.jpg",
            highlights: [
              "Return flights from Mumbai/Delhi included",
              "Rome & Florence dual-city coverage",
              "Florence \u2014 Uffizi Gallery & Michelangelo's David",
              "Tuscany wine country \u2014 Chianti & San Gimignano",
              "All transfers & daily breakfast included"
            ],
            groupSize: "2 \u2013 20 People",
            transport: "Flight + Train + Coach",
            accommodation: "4\u2605 Hotels",
            itinerary: [
              { day: 1, title: "Arrival \u2013 Rome", description: "Arrive & check-in. Evening Trastevere walk & dinner." },
              { day: 2, title: "Rome City Tour", description: "Colosseum, Roman Forum, Vatican Museums & Trevi Fountain." },
              { day: 3, title: "Train to Florence", description: "High-speed train to Florence. Piazza del Duomo, Baptistery & Ponte Vecchio." },
              { day: 4, title: "Florence Highlights", description: "Uffizi Gallery, Michelangelo's David at Accademia & Piazzale Michelangelo sunset." },
              { day: 5, title: "Tuscany Wine Country", description: "Day trip to Chianti wine region, San Gimignano medieval towers & Siena." },
              { day: 6, title: "Departure", description: "Breakfast. Transfer to Florence Airport. Tour ends." }
            ]
          },
          {
            id: 16003,
            nights: 6,
            duration: "6N/7D",
            price: 124999,
            name: "Italian Splendour",
            image: "https://cdn.yourholiday.me/static/dynimg/destination/79/600x300/2750961-2750960_italy.jpg",
            highlights: [
              "Return flights from Mumbai/Delhi included",
              "Rome, Florence & Venice full circuit",
              "Venice \u2014 gondola ride & St. Mark's Square",
              "Murano & Burano island day trip",
              "All meals, transfers & sightseeing included"
            ],
            groupSize: "2 \u2013 15 People",
            transport: "Flight + Train + Coach",
            accommodation: "4\u2605 Hotels",
            itinerary: [
              { day: 1, title: "Arrival \u2013 Rome", description: "Arrive & check-in. Evening Trastevere walk & dinner." },
              { day: 2, title: "Rome City Tour", description: "Colosseum, Roman Forum, Vatican Museums & Trevi Fountain." },
              { day: 3, title: "Florence", description: "Train to Florence. Duomo, Uffizi Gallery & Ponte Vecchio." },
              { day: 4, title: "Tuscany & Train to Venice", description: "Morning Chianti wine tasting. Afternoon train to Venice." },
              { day: 5, title: "Venice Highlights", description: "Gondola ride, St. Mark's Square, Doge's Palace & Rialto Bridge." },
              { day: 6, title: "Murano & Burano Islands", description: "Boat to Murano glass-blowing island & Burano colourful fishing village." },
              { day: 7, title: "Departure", description: "Breakfast. Transfer to Venice Marco Polo Airport. Tour ends." }
            ]
          },
          {
            id: 16004,
            nights: 7,
            duration: "7N/8D",
            price: 154999,
            badge: "Premium",
            name: "Grand Italia",
            image: "https://cdn.yourholiday.me/static/dynimg/destination/79/600x300/2750961-2750960_italy.jpg",
            highlights: [
              "Return flights from Mumbai/Delhi included",
              "Rome, Florence, Venice, Amalfi Coast & Cinque Terre",
              "Amalfi Coast \u2014 Positano & Ravello cliffside villages",
              "Cinque Terre \u2014 five colourful coastal villages",
              "All meals, transfers & exclusive experiences"
            ],
            groupSize: "2 \u2013 10 People",
            transport: "Flight + Train + Private Coach",
            accommodation: "4\u2605 / 5\u2605 Hotels",
            itinerary: [
              { day: 1, title: "Arrival \u2013 Rome", description: "Luxury hotel check-in. Evening Trastevere walk & dinner." },
              { day: 2, title: "Rome City Tour", description: "Colosseum, Roman Forum, Vatican Museums & Trevi Fountain." },
              { day: 3, title: "Amalfi Coast", description: "Drive to Amalfi Coast. Positano, Amalfi town & Ravello cliffside views." },
              { day: 4, title: "Florence", description: "Train to Florence. Duomo, Uffizi Gallery, Accademia & Ponte Vecchio." },
              { day: 5, title: "Cinque Terre", description: "Train to Cinque Terre. Hike between Vernazza, Corniglia & Monterosso villages." },
              { day: 6, title: "Venice", description: "Train to Venice. Gondola ride, St. Mark's Square & Doge's Palace." },
              { day: 7, title: "Murano, Burano & Farewell", description: "Murano & Burano island boat trip. Farewell dinner at canal-side restaurant." },
              { day: 8, title: "Departure", description: "Breakfast. Transfer to Venice Airport. Tour ends with beautiful memories." }
            ]
          }
        ]
      },
      "kazakhstan": {
        name: "Kazakhstan",
        tagline: "Heart of the Steppe \u2014 futuristic cities, canyons & nomadic culture",
        heroImage: "https://cdn.yourholiday.me/static/dynimg/destination/58/600x300/2750322-2750321_kazakhstan.jpg",
        packages: [
          {
            id: 17001,
            nights: 4,
            duration: "4N/5D",
            price: 39999,
            badge: "Bestseller",
            name: "Almaty Escape",
            image: "https://cdn.yourholiday.me/static/dynimg/destination/58/600x300/2750322-2750321_kazakhstan.jpg",
            highlights: [
              "Return flights from Mumbai/Delhi included",
              "Almaty \u2014 Zenkov Cathedral & Green Bazaar",
              "Big Almaty Lake \u2014 turquoise alpine lake",
              "Medeu ice skating rink & Shymbulak ski resort",
              "All transfers & daily breakfast included"
            ],
            groupSize: "2 \u2013 20 People",
            transport: "Flight + Coach",
            accommodation: "3\u2605 / 4\u2605 Hotels",
            itinerary: [
              { day: 1, title: "Arrival \u2013 Almaty", description: "Arrive at Almaty Airport. Check-in. Evening Arbat pedestrian street & dinner." },
              { day: 2, title: "Almaty City Tour", description: "Zenkov Cathedral, Central State Museum, Green Bazaar & Panfilov Park." },
              { day: 3, title: "Big Almaty Lake & Medeu", description: "Big Almaty Lake turquoise alpine lake. Medeu ice rink & Shymbulak ski resort cable car." },
              { day: 4, title: "Charyn Canyon", description: "Day trip to Charyn Canyon \u2014 Kazakhstan's Grand Canyon. Valley of Castles walk." },
              { day: 5, title: "Departure", description: "Breakfast at hotel. Transfer to Almaty Airport. Tour ends with beautiful memories." }
            ]
          },
          {
            id: 17002,
            nights: 5,
            duration: "5N/6D",
            price: 52999,
            badge: "Popular",
            name: "Steppe Wonders",
            image: "https://cdn.yourholiday.me/static/dynimg/destination/58/600x300/2750322-2750321_kazakhstan.jpg",
            highlights: [
              "Return flights from Mumbai/Delhi included",
              "Almaty & Astana (Nur-Sultan) dual-city coverage",
              "Astana \u2014 Baiterek Tower & futuristic skyline",
              "Khan Shatyr \u2014 world's largest tent structure",
              "All transfers & daily breakfast included"
            ],
            groupSize: "2 \u2013 20 People",
            transport: "Flight + Coach",
            accommodation: "4\u2605 Hotels",
            itinerary: [
              { day: 1, title: "Arrival \u2013 Almaty", description: "Arrive & check-in. Evening Arbat street & dinner." },
              { day: 2, title: "Almaty City Tour", description: "Zenkov Cathedral, Green Bazaar, Panfilov Park & Central State Museum." },
              { day: 3, title: "Big Almaty Lake & Charyn Canyon", description: "Big Almaty Lake. Afternoon Charyn Canyon Valley of Castles." },
              { day: 4, title: "Fly to Astana", description: "Flight to Astana. Baiterek Tower, Khan Shatyr & Palace of Peace and Reconciliation." },
              { day: 5, title: "Astana Highlights", description: "Nur-Astana Mosque, EXPO 2017 site, Hazrat Sultan Mosque & futuristic skyline walk." },
              { day: 6, title: "Departure", description: "Breakfast. Transfer to Astana Airport. Tour ends." }
            ]
          },
          {
            id: 17003,
            nights: 6,
            duration: "6N/7D",
            price: 67999,
            name: "Kazakhstan Explorer",
            image: "https://cdn.yourholiday.me/static/dynimg/destination/58/600x300/2750322-2750321_kazakhstan.jpg",
            highlights: [
              "Return flights from Mumbai/Delhi included",
              "Almaty, Astana & Turkestan ancient city",
              "Turkestan \u2014 Mausoleum of Khoja Ahmed Yasawi (UNESCO)",
              "Nomadic culture experience \u2014 yurt stay & eagle hunting",
              "All meals, transfers & sightseeing included"
            ],
            groupSize: "2 \u2013 15 People",
            transport: "Flight + Coach",
            accommodation: "4\u2605 Hotels + Yurt",
            itinerary: [
              { day: 1, title: "Arrival \u2013 Almaty", description: "Arrive & check-in. Evening Arbat street & dinner." },
              { day: 2, title: "Almaty City Tour", description: "Zenkov Cathedral, Green Bazaar & Central State Museum." },
              { day: 3, title: "Big Almaty Lake & Charyn Canyon", description: "Big Almaty Lake & Charyn Canyon Valley of Castles." },
              { day: 4, title: "Fly to Astana", description: "Flight to Astana. Baiterek Tower, Khan Shatyr & Nur-Astana Mosque." },
              { day: 5, title: "Turkestan", description: "Drive to Turkestan. Mausoleum of Khoja Ahmed Yasawi (UNESCO) & ancient city ruins." },
              { day: 6, title: "Nomadic Culture & Yurt Stay", description: "Eagle hunting demonstration, horse riding & overnight yurt stay on the steppe." },
              { day: 7, title: "Departure", description: "Breakfast. Transfer to Shymkent Airport. Tour ends." }
            ]
          },
          {
            id: 17004,
            nights: 7,
            duration: "7N/8D",
            price: 87999,
            badge: "Premium",
            name: "Central Asia Grand",
            image: "https://cdn.yourholiday.me/static/dynimg/destination/58/600x300/2750322-2750321_kazakhstan.jpg",
            highlights: [
              "Return flights from Mumbai/Delhi included",
              "Almaty, Astana, Turkestan & Aral Sea",
              "Aral Sea \u2014 ship graveyard & ecological wonder",
              "Baikonur Cosmodrome \u2014 world's first space launch site",
              "All meals, transfers & exclusive experiences"
            ],
            groupSize: "2 \u2013 10 People",
            transport: "Flight + Private Coach",
            accommodation: "4\u2605 / 5\u2605 Hotels + Yurt",
            itinerary: [
              { day: 1, title: "Arrival \u2013 Almaty", description: "Luxury hotel check-in. Evening Arbat street & dinner." },
              { day: 2, title: "Almaty City Tour", description: "Zenkov Cathedral, Green Bazaar, Charyn Canyon & Big Almaty Lake." },
              { day: 3, title: "Fly to Astana", description: "Flight to Astana. Baiterek Tower, Khan Shatyr & EXPO 2017 site." },
              { day: 4, title: "Turkestan", description: "Drive to Turkestan. Mausoleum of Khoja Ahmed Yasawi & ancient city." },
              { day: 5, title: "Nomadic Culture & Yurt Stay", description: "Eagle hunting, horse riding & overnight yurt stay on the steppe." },
              { day: 6, title: "Aral Sea", description: "Drive to Aral Sea. Ship graveyard at Moynaq & salt flat landscapes." },
              { day: 7, title: "Baikonur Cosmodrome", description: "Baikonur Cosmodrome tour \u2014 world's first & largest space launch facility." },
              { day: 8, title: "Departure", description: "Breakfast. Transfer to Baikonur Airport. Tour ends with beautiful memories." }
            ]
          }
        ]
      },
      "new zealand": {
        name: "New Zealand",
        tagline: "Land of the Long White Cloud \u2014 fjords, Maori culture & adventure capital",
        heroImage: "https://cdn.yourholiday.me/static/dynimg/destination/48/600x300/2190141-2190140_rock-formations-on-wharariki-beach-new-zealand--1.jpg",
        packages: [
          {
            id: 18001,
            nights: 4,
            duration: "4N/5D",
            price: 94999,
            badge: "Bestseller",
            name: "Kiwi Highlights",
            image: "https://cdn.yourholiday.me/static/dynimg/destination/48/600x300/2190141-2190140_rock-formations-on-wharariki-beach-new-zealand--1.jpg",
            highlights: [
              "Return flights from Mumbai/Delhi included",
              "Auckland \u2014 Sky Tower & Waitemata Harbour",
              "Rotorua \u2014 geothermal wonders & Maori culture",
              "Waitomo Glowworm Caves \u2014 magical underground world",
              "All transfers & daily breakfast included"
            ],
            groupSize: "2 \u2013 20 People",
            transport: "Flight + Coach",
            accommodation: "3\u2605 / 4\u2605 Hotels",
            itinerary: [
              { day: 1, title: "Arrival \u2013 Auckland", description: "Arrive at Auckland Airport. Check-in. Evening Sky Tower & Viaduct Harbour." },
              { day: 2, title: "Auckland City Tour", description: "Sky Tower, Auckland Museum, Mission Bay beach & Waitemata Harbour cruise." },
              { day: 3, title: "Waitomo Glowworm Caves", description: "Drive to Waitomo. Glowworm Caves boat ride through magical underground caverns." },
              { day: 4, title: "Rotorua", description: "Drive to Rotorua. Te Puia geothermal park, Pohutu Geyser & Maori hangi dinner." },
              { day: 5, title: "Departure", description: "Breakfast at hotel. Transfer to Rotorua/Auckland Airport. Tour ends with beautiful memories." }
            ]
          },
          {
            id: 18002,
            nights: 5,
            duration: "5N/6D",
            price: 119999,
            badge: "Popular",
            name: "Fjord Explorer",
            image: "https://cdn.yourholiday.me/static/dynimg/destination/48/600x300/2190141-2190140_rock-formations-on-wharariki-beach-new-zealand--1.jpg",
            highlights: [
              "Return flights from Mumbai/Delhi included",
              "Auckland, Rotorua & Queenstown",
              "Milford Sound \u2014 UNESCO World Heritage fjord cruise",
              "Queenstown \u2014 adventure capital of the world",
              "All transfers & daily breakfast included"
            ],
            groupSize: "2 \u2013 20 People",
            transport: "Flight + Coach",
            accommodation: "4\u2605 Hotels",
            itinerary: [
              { day: 1, title: "Arrival \u2013 Auckland", description: "Arrive & check-in. Evening Sky Tower & Viaduct Harbour." },
              { day: 2, title: "Auckland & Waitomo", description: "Auckland Museum. Waitomo Glowworm Caves boat ride." },
              { day: 3, title: "Rotorua", description: "Te Puia geothermal park, Pohutu Geyser & Maori hangi dinner." },
              { day: 4, title: "Fly to Queenstown", description: "Flight to Queenstown. Skyline Gondola & Remarkables mountain views." },
              { day: 5, title: "Milford Sound", description: "Full-day Milford Sound cruise \u2014 waterfalls, dolphins & fjord scenery." },
              { day: 6, title: "Departure", description: "Breakfast. Transfer to Queenstown Airport. Tour ends." }
            ]
          },
          {
            id: 18003,
            nights: 6,
            duration: "6N/7D",
            price: 144999,
            name: "Middle Earth Tour",
            image: "https://cdn.yourholiday.me/static/dynimg/destination/48/600x300/2190141-2190140_rock-formations-on-wharariki-beach-new-zealand--1.jpg",
            highlights: [
              "Return flights from Mumbai/Delhi included",
              "Auckland, Rotorua, Queenstown & Hobbiton",
              "Hobbiton Movie Set \u2014 Lord of the Rings filming location",
              "Bungee jumping & skydiving in Queenstown",
              "All meals, transfers & sightseeing included"
            ],
            groupSize: "2 \u2013 15 People",
            transport: "Flight + Coach",
            accommodation: "4\u2605 Hotels",
            itinerary: [
              { day: 1, title: "Arrival \u2013 Auckland", description: "Arrive & check-in. Evening Sky Tower & Viaduct Harbour." },
              { day: 2, title: "Hobbiton Movie Set", description: "Drive to Matamata. Hobbiton Movie Set tour \u2014 Lord of the Rings & The Hobbit filming location." },
              { day: 3, title: "Rotorua", description: "Te Puia geothermal park, Pohutu Geyser, Wai-O-Tapu & Maori hangi dinner." },
              { day: 4, title: "Fly to Queenstown", description: "Flight to Queenstown. Skyline Gondola & Remarkables views." },
              { day: 5, title: "Milford Sound", description: "Full-day Milford Sound fjord cruise \u2014 waterfalls & dolphins." },
              { day: 6, title: "Queenstown Adventure", description: "Bungee jumping at Kawarau Bridge or skydiving over Lake Wakatipu." },
              { day: 7, title: "Departure", description: "Breakfast. Transfer to Queenstown Airport. Tour ends." }
            ]
          },
          {
            id: 18004,
            nights: 7,
            duration: "7N/8D",
            price: 174999,
            badge: "Premium",
            name: "Grand New Zealand",
            image: "https://cdn.yourholiday.me/static/dynimg/destination/48/600x300/2190141-2190140_rock-formations-on-wharariki-beach-new-zealand--1.jpg",
            highlights: [
              "Return flights from Mumbai/Delhi included",
              "Auckland, Hobbiton, Rotorua, Queenstown, Milford Sound & Franz Josef Glacier",
              "Franz Josef Glacier \u2014 helicopter landing on glacier",
              "Private Milford Sound overnight cruise",
              "All meals, transfers & exclusive experiences"
            ],
            groupSize: "2 \u2013 10 People",
            transport: "Flight + Private Coach",
            accommodation: "4\u2605 / 5\u2605 Hotels",
            itinerary: [
              { day: 1, title: "Arrival \u2013 Auckland", description: "Luxury hotel check-in. Evening Sky Tower & Viaduct Harbour." },
              { day: 2, title: "Hobbiton & Waitomo", description: "Hobbiton Movie Set tour. Waitomo Glowworm Caves boat ride." },
              { day: 3, title: "Rotorua", description: "Te Puia, Pohutu Geyser, Wai-O-Tapu & Maori hangi dinner." },
              { day: 4, title: "Fly to Queenstown", description: "Flight to Queenstown. Skyline Gondola & Remarkables views." },
              { day: 5, title: "Milford Sound Overnight Cruise", description: "Private Milford Sound overnight cruise \u2014 waterfalls, dolphins & stargazing." },
              { day: 6, title: "Franz Josef Glacier", description: "Drive to Franz Josef. Helicopter landing on glacier & ice walk." },
              { day: 7, title: "Queenstown Adventure", description: "Bungee jumping, skydiving or jet boating on Shotover River." },
              { day: 8, title: "Departure", description: "Breakfast. Transfer to Queenstown Airport. Tour ends with beautiful memories." }
            ]
          }
        ]
      },
      "cambodia": {
        name: "Cambodia",
        tagline: "Kingdom of Wonder \u2014 ancient temples, Mekong life & timeless culture",
        heroImage: "https://cdn.yourholiday.me/static/dynimg/destination/60/600x300/3160621-3160620_cambodia.jpg",
        packages: [
          {
            id: 13001,
            nights: 4,
            duration: "4N/5D",
            price: 28999,
            badge: "Bestseller",
            name: "Angkor Discovery",
            image: "https://cdn.yourholiday.me/static/dynimg/destination/60/600x300/3160621-3160620_cambodia.jpg",
            highlights: [
              "Return flights from Mumbai/Delhi included",
              "Angkor Wat \u2014 world's largest religious monument",
              "Angkor Thom & Bayon Temple \u2014 stone faces",
              "Ta Prohm \u2014 jungle temple of Tomb Raider fame",
              "All transfers & daily breakfast included"
            ],
            groupSize: "2 \u2013 20 People",
            transport: "Flight + Tuk-tuk + Coach",
            accommodation: "3\u2605 / 4\u2605 Hotels",
            itinerary: [
              { day: 1, title: "Arrival \u2013 Siem Reap", description: "Arrive at Siem Reap Airport. Check-in. Evening Pub Street & Angkor Night Market." },
              { day: 2, title: "Angkor Wat Sunrise", description: "Sunrise at Angkor Wat. Explore the main temple complex. Afternoon Angkor Thom & Bayon Temple." },
              { day: 3, title: "Ta Prohm & Banteay Srei", description: "Ta Prohm jungle temple. Banteay Srei \u2014 pink sandstone carvings. Tonle Sap Lake sunset cruise." },
              { day: 4, title: "Phnom Penh Day Trip", description: "Flight to Phnom Penh. Royal Palace, Silver Pagoda & National Museum." },
              { day: 5, title: "Departure", description: "Breakfast at hotel. Transfer to airport. Tour ends with beautiful memories." }
            ]
          },
          {
            id: 13002,
            nights: 5,
            duration: "5N/6D",
            price: 36999,
            badge: "Popular",
            name: "Khmer Heritage",
            image: "https://cdn.yourholiday.me/static/dynimg/destination/60/600x300/3160621-3160620_cambodia.jpg",
            highlights: [
              "Return flights from Mumbai/Delhi included",
              "Siem Reap & Phnom Penh dual coverage",
              "Angkor Wat, Angkor Thom & Ta Prohm",
              "Killing Fields & Tuol Sleng Museum \u2014 history",
              "All transfers & daily breakfast included"
            ],
            groupSize: "2 \u2013 20 People",
            transport: "Flight + Coach",
            accommodation: "4\u2605 Hotels",
            itinerary: [
              { day: 1, title: "Arrival \u2013 Siem Reap", description: "Arrive & check-in. Evening Pub Street & Angkor Night Market." },
              { day: 2, title: "Angkor Wat Sunrise & Angkor Thom", description: "Sunrise at Angkor Wat. Angkor Thom, Bayon Temple & Baphuon." },
              { day: 3, title: "Ta Prohm & Banteay Srei", description: "Ta Prohm jungle temple. Banteay Srei pink sandstone. Tonle Sap Lake cruise." },
              { day: 4, title: "Phnom Penh", description: "Flight to Phnom Penh. Royal Palace, Silver Pagoda & National Museum." },
              { day: 5, title: "Killing Fields & Tuol Sleng", description: "Choeung Ek Killing Fields & Tuol Sleng Genocide Museum. Riverside evening walk." },
              { day: 6, title: "Departure", description: "Breakfast. Transfer to Phnom Penh Airport. Tour ends." }
            ]
          },
          {
            id: 13003,
            nights: 6,
            duration: "6N/7D",
            price: 47999,
            name: "Cambodia Explorer",
            image: "https://cdn.yourholiday.me/static/dynimg/destination/60/600x300/3160621-3160620_cambodia.jpg",
            highlights: [
              "Return flights from Mumbai/Delhi included",
              "Siem Reap, Phnom Penh & Sihanoukville beach",
              "Sihanoukville \u2014 pristine beaches & island hopping",
              "Koh Rong island \u2014 bioluminescent waters",
              "All meals, transfers & sightseeing included"
            ],
            groupSize: "2 \u2013 15 People",
            transport: "Flight + Coach + Ferry",
            accommodation: "4\u2605 Hotels",
            itinerary: [
              { day: 1, title: "Arrival \u2013 Siem Reap", description: "Arrive & check-in. Evening Pub Street & Angkor Night Market." },
              { day: 2, title: "Angkor Wat & Angkor Thom", description: "Sunrise at Angkor Wat. Angkor Thom & Bayon Temple." },
              { day: 3, title: "Ta Prohm & Tonle Sap", description: "Ta Prohm jungle temple. Banteay Srei. Tonle Sap Lake sunset cruise." },
              { day: 4, title: "Phnom Penh", description: "Royal Palace, Silver Pagoda, Killing Fields & Tuol Sleng Museum." },
              { day: 5, title: "Sihanoukville", description: "Bus/flight to Sihanoukville. Serendipity Beach & Ochheuteal Beach." },
              { day: 6, title: "Koh Rong Island", description: "Ferry to Koh Rong. Snorkeling, bioluminescent beach walk at night." },
              { day: 7, title: "Departure", description: "Breakfast. Return to Sihanoukville. Transfer to airport. Tour ends." }
            ]
          },
          {
            id: 13004,
            nights: 7,
            duration: "7N/8D",
            price: 62999,
            badge: "Premium",
            name: "Mekong Journey",
            image: "https://cdn.yourholiday.me/static/dynimg/destination/60/600x300/3160621-3160620_cambodia.jpg",
            highlights: [
              "Return flights from Mumbai/Delhi included",
              "Siem Reap, Phnom Penh, Sihanoukville & Mekong River",
              "Mekong River cruise \u2014 floating villages",
              "Luxury resort stay at Koh Rong Samloem",
              "All meals, transfers & exclusive experiences"
            ],
            groupSize: "2 \u2013 10 People",
            transport: "Flight + Private Coach + Ferry",
            accommodation: "4\u2605 / 5\u2605 Hotels",
            itinerary: [
              { day: 1, title: "Arrival \u2013 Siem Reap", description: "Luxury hotel check-in. Evening Pub Street & Angkor Night Market." },
              { day: 2, title: "Angkor Wat Sunrise & Angkor Thom", description: "Sunrise at Angkor Wat. Angkor Thom, Bayon & Baphuon." },
              { day: 3, title: "Ta Prohm & Banteay Srei", description: "Ta Prohm jungle temple. Banteay Srei. Tonle Sap Lake cruise." },
              { day: 4, title: "Phnom Penh", description: "Royal Palace, Silver Pagoda, Killing Fields & Tuol Sleng Museum." },
              { day: 5, title: "Mekong River Cruise", description: "Private Mekong River cruise \u2014 floating villages, silk weaving & local markets." },
              { day: 6, title: "Sihanoukville & Koh Rong Samloem", description: "Ferry to Koh Rong Samloem. Luxury resort check-in. Snorkeling & beach leisure." },
              { day: 7, title: "Island Leisure & Bioluminescence", description: "Kayaking, snorkeling & bioluminescent beach walk at night." },
              { day: 8, title: "Departure", description: "Breakfast. Return ferry. Transfer to airport. Tour ends with beautiful memories." }
            ]
          }
        ]
      },
      "georgia": {
        name: "Georgia",
        tagline: "Caucasus gem \u2014 ancient monasteries, mountain valleys & world-class wine",
        heroImage: "https://cdn.yourholiday.me/static/dynimg/destination/7/600x300/2185866-2185865_georgia-main-image.jpg",
        packages: [
          {
            id: 14001,
            nights: 4,
            duration: "4N/5D",
            price: 34999,
            badge: "Bestseller",
            name: "Tbilisi Trails",
            image: "https://cdn.yourholiday.me/static/dynimg/destination/7/600x300/2185866-2185865_georgia-main-image.jpg",
            highlights: [
              "Return flights from Mumbai/Delhi included",
              "Tbilisi Old Town \u2014 Narikala Fortress & sulfur baths",
              "Mtskheta \u2014 UNESCO ancient capital of Georgia",
              "Jvari Monastery & Svetitskhoveli Cathedral",
              "All transfers & daily breakfast included"
            ],
            groupSize: "2 \u2013 20 People",
            transport: "Flight + Coach",
            accommodation: "3\u2605 / 4\u2605 Hotels",
            itinerary: [
              { day: 1, title: "Arrival \u2013 Tbilisi", description: "Arrive at Tbilisi Airport. Check-in. Evening Rustaveli Avenue & Rike Park." },
              { day: 2, title: "Tbilisi Old Town", description: "Narikala Fortress, Metekhi Church, sulfur baths, Abanotubani & cable car to fortress." },
              { day: 3, title: "Mtskheta Day Trip", description: "Jvari Monastery, Svetitskhoveli Cathedral & Mtskheta old town walk." },
              { day: 4, title: "Kakheti Wine Region", description: "Drive to Kakheti. Sighnaghi \u2014 City of Love. Wine tasting at local winery." },
              { day: 5, title: "Departure", description: "Breakfast at hotel. Transfer to Tbilisi Airport. Tour ends with beautiful memories." }
            ]
          },
          {
            id: 14002,
            nights: 5,
            duration: "5N/6D",
            price: 44999,
            badge: "Popular",
            name: "Caucasus Charm",
            image: "https://cdn.yourholiday.me/static/dynimg/destination/7/600x300/2185866-2185865_georgia-main-image.jpg",
            highlights: [
              "Return flights from Mumbai/Delhi included",
              "Tbilisi, Mtskheta & Kazbegi mountain town",
              "Gergeti Trinity Church \u2014 iconic Caucasus view",
              "Gudauri ski resort & mountain scenery",
              "All transfers & daily breakfast included"
            ],
            groupSize: "2 \u2013 20 People",
            transport: "Flight + Coach",
            accommodation: "4\u2605 Hotels",
            itinerary: [
              { day: 1, title: "Arrival \u2013 Tbilisi", description: "Arrive & check-in. Evening Rustaveli Avenue & Rike Park." },
              { day: 2, title: "Tbilisi Old Town", description: "Narikala Fortress, Metekhi Church, sulfur baths & cable car." },
              { day: 3, title: "Mtskheta & Gudauri", description: "Jvari Monastery, Svetitskhoveli Cathedral. Drive to Gudauri mountain resort." },
              { day: 4, title: "Kazbegi & Gergeti Trinity Church", description: "Drive to Kazbegi. Gergeti Trinity Church hike with Mt. Kazbek backdrop." },
              { day: 5, title: "Kakheti Wine Region", description: "Sighnaghi \u2014 City of Love. Wine tasting & Bodbe Monastery." },
              { day: 6, title: "Departure", description: "Breakfast. Transfer to Tbilisi Airport. Tour ends." }
            ]
          },
          {
            id: 14003,
            nights: 6,
            duration: "6N/7D",
            price: 57999,
            name: "Georgia Explorer",
            image: "https://cdn.yourholiday.me/static/dynimg/destination/7/600x300/2185866-2185865_georgia-main-image.jpg",
            highlights: [
              "Return flights from Mumbai/Delhi included",
              "Tbilisi, Kazbegi, Kakheti & Batumi Black Sea",
              "Batumi \u2014 Black Sea resort city & botanical garden",
              "Vardzia cave monastery \u2014 12th century rock city",
              "All meals, transfers & sightseeing included"
            ],
            groupSize: "2 \u2013 15 People",
            transport: "Flight + Coach",
            accommodation: "4\u2605 Hotels",
            itinerary: [
              { day: 1, title: "Arrival \u2013 Tbilisi", description: "Arrive & check-in. Evening Rustaveli Avenue & Rike Park." },
              { day: 2, title: "Tbilisi Old Town", description: "Narikala Fortress, Metekhi Church, sulfur baths & cable car." },
              { day: 3, title: "Kazbegi & Gergeti Trinity Church", description: "Drive to Kazbegi. Gergeti Trinity Church hike. Gudauri mountain views." },
              { day: 4, title: "Kakheti Wine Region", description: "Sighnaghi, Bodbe Monastery & wine tasting at Telavi winery." },
              { day: 5, title: "Batumi", description: "Drive to Batumi. Black Sea beach, Batumi Boulevard & Botanical Garden." },
              { day: 6, title: "Vardzia Cave Monastery", description: "Vardzia 12th-century rock-hewn monastery & Rabati Castle." },
              { day: 7, title: "Departure", description: "Breakfast. Transfer to Batumi/Tbilisi Airport. Tour ends." }
            ]
          },
          {
            id: 14004,
            nights: 7,
            duration: "7N/8D",
            price: 74999,
            badge: "Premium",
            name: "Silk Road Journey",
            image: "https://cdn.yourholiday.me/static/dynimg/destination/7/600x300/2185866-2185865_georgia-main-image.jpg",
            highlights: [
              "Return flights from Mumbai/Delhi included",
              "Tbilisi, Kazbegi, Kakheti, Batumi & Svaneti",
              "Svaneti \u2014 UNESCO medieval towers & glaciers",
              "Mestia \u2014 trekking in the Greater Caucasus",
              "All meals, transfers & exclusive experiences"
            ],
            groupSize: "2 \u2013 10 People",
            transport: "Flight + Private Coach",
            accommodation: "4\u2605 / 5\u2605 Hotels",
            itinerary: [
              { day: 1, title: "Arrival \u2013 Tbilisi", description: "Luxury hotel check-in. Evening Rustaveli Avenue & Rike Park." },
              { day: 2, title: "Tbilisi Old Town", description: "Narikala Fortress, Metekhi Church, sulfur baths & cable car." },
              { day: 3, title: "Kazbegi & Gergeti Trinity Church", description: "Gergeti Trinity Church hike. Mt. Kazbek views & Gudauri." },
              { day: 4, title: "Kakheti Wine Region", description: "Sighnaghi, Bodbe Monastery & private wine tasting at Telavi." },
              { day: 5, title: "Batumi", description: "Black Sea beach, Batumi Boulevard, Botanical Garden & Vardzia." },
              { day: 6, title: "Fly to Svaneti \u2013 Mestia", description: "Flight to Mestia. Svaneti UNESCO towers, Svan Museum & glacier views." },
              { day: 7, title: "Mestia Trekking", description: "Trek to Chalaadi Glacier. Hatsvali ski resort & mountain panoramas." },
              { day: 8, title: "Departure", description: "Breakfast. Flight back to Tbilisi. Transfer to airport. Tour ends with beautiful memories." }
            ]
          }
        ]
      },
      "greece": {
        name: "Greece",
        tagline: "Cradle of civilization \u2014 ancient ruins, whitewashed islands & azure seas",
        heroImage: "https://cdn.yourholiday.me/static/dynimg/destination/5/600x300/2750959-2750958_greece.jpg",
        packages: [
          {
            id: 15001,
            nights: 4,
            duration: "4N/5D",
            price: 64999,
            badge: "Bestseller",
            name: "Athens Escape",
            image: "https://cdn.yourholiday.me/static/dynimg/destination/5/600x300/2750959-2750958_greece.jpg",
            highlights: [
              "Return flights from Mumbai/Delhi included",
              "Acropolis & Parthenon \u2014 ancient Athens",
              "Plaka old neighbourhood & Monastiraki flea market",
              "Cape Sounion \u2014 Temple of Poseidon at sunset",
              "All transfers & daily breakfast included"
            ],
            groupSize: "2 \u2013 20 People",
            transport: "Flight + Coach",
            accommodation: "3\u2605 / 4\u2605 Hotels",
            itinerary: [
              { day: 1, title: "Arrival \u2013 Athens", description: "Arrive at Athens Airport. Check-in. Evening Plaka neighbourhood walk & dinner." },
              { day: 2, title: "Athens City Tour", description: "Acropolis, Parthenon, Erechtheion, Acropolis Museum & Monastiraki flea market." },
              { day: 3, title: "Cape Sounion & Piraeus", description: "Cape Sounion \u2014 Temple of Poseidon at sunset. Piraeus harbour walk." },
              { day: 4, title: "Delphi Day Trip", description: "Day trip to Delphi \u2014 Oracle of Delphi, Temple of Apollo & Delphi Museum." },
              { day: 5, title: "Departure", description: "Breakfast at hotel. Transfer to Athens Airport. Tour ends with beautiful memories." }
            ]
          },
          {
            id: 15002,
            nights: 5,
            duration: "5N/6D",
            price: 84999,
            badge: "Popular",
            name: "Aegean Dreams",
            image: "https://cdn.yourholiday.me/static/dynimg/destination/5/600x300/2750959-2750958_greece.jpg",
            highlights: [
              "Return flights from Mumbai/Delhi included",
              "Athens & Santorini dual coverage",
              "Santorini \u2014 Oia sunset & caldera views",
              "Fira & Imerovigli cliffside walk",
              "All transfers & daily breakfast included"
            ],
            groupSize: "2 \u2013 20 People",
            transport: "Flight + Ferry + Coach",
            accommodation: "4\u2605 Hotels",
            itinerary: [
              { day: 1, title: "Arrival \u2013 Athens", description: "Arrive & check-in. Evening Plaka neighbourhood walk." },
              { day: 2, title: "Athens City Tour", description: "Acropolis, Parthenon, Acropolis Museum & Monastiraki." },
              { day: 3, title: "Ferry to Santorini", description: "Ferry to Santorini. Check-in to cliffside hotel. Fira town evening walk." },
              { day: 4, title: "Santorini Highlights", description: "Oia village & iconic sunset. Imerovigli cliffside walk. Black sand beach at Perissa." },
              { day: 5, title: "Akrotiri & Wine Tasting", description: "Akrotiri prehistoric ruins. Santo Wines vineyard with caldera views & wine tasting." },
              { day: 6, title: "Departure", description: "Breakfast. Transfer to Santorini Airport. Tour ends." }
            ]
          },
          {
            id: 15003,
            nights: 6,
            duration: "6N/7D",
            price: 109999,
            name: "Greek Odyssey",
            image: "https://cdn.yourholiday.me/static/dynimg/destination/5/600x300/2750959-2750958_greece.jpg",
            highlights: [
              "Return flights from Mumbai/Delhi included",
              "Athens, Santorini & Mykonos",
              "Mykonos \u2014 windmills, Little Venice & party beaches",
              "Delos Island \u2014 UNESCO archaeological site",
              "All meals, transfers & sightseeing included"
            ],
            groupSize: "2 \u2013 15 People",
            transport: "Flight + Ferry + Coach",
            accommodation: "4\u2605 Hotels",
            itinerary: [
              { day: 1, title: "Arrival \u2013 Athens", description: "Arrive & check-in. Evening Plaka neighbourhood walk." },
              { day: 2, title: "Athens City Tour", description: "Acropolis, Parthenon, Acropolis Museum & Monastiraki." },
              { day: 3, title: "Ferry to Santorini", description: "Ferry to Santorini. Fira town & cliffside hotel check-in." },
              { day: 4, title: "Santorini Highlights", description: "Oia sunset, Imerovigli walk, Perissa black sand beach & wine tasting." },
              { day: 5, title: "Ferry to Mykonos", description: "Ferry to Mykonos. Windmills, Little Venice & Mykonos Town walk." },
              { day: 6, title: "Delos Island & Beaches", description: "Boat to Delos UNESCO ruins. Afternoon at Paradise Beach or Super Paradise Beach." },
              { day: 7, title: "Departure", description: "Breakfast. Transfer to Mykonos Airport. Tour ends." }
            ]
          },
          {
            id: 15004,
            nights: 7,
            duration: "7N/8D",
            price: 139999,
            badge: "Premium",
            name: "Island Hopper",
            image: "https://cdn.yourholiday.me/static/dynimg/destination/5/600x300/2750959-2750958_greece.jpg",
            highlights: [
              "Return flights from Mumbai/Delhi included",
              "Athens, Santorini, Mykonos & Crete",
              "Crete \u2014 Knossos Palace & Samaria Gorge trek",
              "Private yacht island hopping experience",
              "All meals, transfers & exclusive experiences"
            ],
            groupSize: "2 \u2013 10 People",
            transport: "Flight + Ferry + Private Coach",
            accommodation: "4\u2605 / 5\u2605 Hotels",
            itinerary: [
              { day: 1, title: "Arrival \u2013 Athens", description: "Luxury hotel check-in. Evening Plaka neighbourhood & dinner." },
              { day: 2, title: "Athens City Tour", description: "Acropolis, Parthenon, Acropolis Museum, Monastiraki & Cape Sounion." },
              { day: 3, title: "Santorini", description: "Ferry to Santorini. Fira, Oia sunset & cliffside hotel." },
              { day: 4, title: "Santorini Deep Dive", description: "Imerovigli walk, Akrotiri ruins, Perissa beach & wine tasting." },
              { day: 5, title: "Mykonos", description: "Ferry to Mykonos. Windmills, Little Venice & Delos Island ruins." },
              { day: 6, title: "Crete", description: "Fly to Crete. Knossos Palace & Heraklion Archaeological Museum." },
              { day: 7, title: "Samaria Gorge & Private Yacht", description: "Samaria Gorge trek. Private yacht sunset cruise around the island." },
              { day: 8, title: "Departure", description: "Breakfast. Transfer to Heraklion Airport. Tour ends with beautiful memories." }
            ]
          }
        ]
      },
      "turkey": {
        name: "Turkey",
        tagline: "Where East meets West \u2014 ancient ruins, hot air balloons & turquoise coast",
        heroImage: "https://cdn.yourholiday.me/static/dynimg/destination/45/600x300/2750974-2750973_turkey.jpg",
        packages: [
          {
            id: 11001,
            nights: 4,
            duration: "4N/5D",
            price: 54999,
            badge: "Bestseller",
            name: "Istanbul Escape",
            image: "https://cdn.yourholiday.me/static/dynimg/destination/45/600x300/2750974-2750973_turkey.jpg",
            highlights: [
              "Return flights from Mumbai/Delhi included",
              "Hagia Sophia & Blue Mosque \u2014 iconic Istanbul",
              "Topkapi Palace & Grand Bazaar",
              "Bosphorus cruise between two continents",
              "All transfers & daily breakfast included"
            ],
            groupSize: "2 \u2013 20 People",
            transport: "Flight + Coach",
            accommodation: "3\u2605 / 4\u2605 Hotels",
            itinerary: [
              { day: 1, title: "Arrival \u2013 Istanbul", description: "Arrive at Istanbul Airport. Check-in. Evening Galata Bridge walk & Bosphorus view." },
              { day: 2, title: "Old City Tour", description: "Hagia Sophia, Blue Mosque, Topkapi Palace, Basilica Cistern & Hippodrome." },
              { day: 3, title: "Grand Bazaar & Bosphorus Cruise", description: "Grand Bazaar shopping, Spice Bazaar & Bosphorus cruise between Europe and Asia." },
              { day: 4, title: "Princes Islands & Dolmabahce", description: "Ferry to Princes Islands. Dolmabahce Palace & Taksim Square evening." },
              { day: 5, title: "Departure", description: "Breakfast at hotel. Transfer to Istanbul Airport. Tour ends with beautiful memories." }
            ]
          },
          {
            id: 11002,
            nights: 5,
            duration: "5N/6D",
            price: 72999,
            badge: "Popular",
            name: "Cappadocia Dreams",
            image: "https://cdn.yourholiday.me/static/dynimg/destination/45/600x300/2750974-2750973_turkey.jpg",
            highlights: [
              "Return flights from Mumbai/Delhi included",
              "Istanbul & Cappadocia dual coverage",
              "Hot air balloon ride over fairy chimneys",
              "Underground cities & cave hotel stay",
              "All transfers & daily breakfast included"
            ],
            groupSize: "2 \u2013 20 People",
            transport: "Flight + Coach",
            accommodation: "4\u2605 Hotels + Cave Hotel",
            itinerary: [
              { day: 1, title: "Arrival \u2013 Istanbul", description: "Arrive & check-in. Evening Galata Bridge & Bosphorus view." },
              { day: 2, title: "Istanbul City Tour", description: "Hagia Sophia, Blue Mosque, Topkapi Palace & Grand Bazaar." },
              { day: 3, title: "Fly to Cappadocia", description: "Flight to Cappadocia. Check-in to cave hotel. Goreme Open Air Museum & fairy chimneys." },
              { day: 4, title: "Hot Air Balloon & Underground City", description: "Sunrise hot air balloon ride. Derinkuyu Underground City & Ihlara Valley." },
              { day: 5, title: "Uchisar & Devrent Valley", description: "Uchisar Castle, Devrent Valley & Pasabag Monks Valley. Pottery workshop." },
              { day: 6, title: "Departure", description: "Breakfast. Transfer to Cappadocia Airport. Tour ends." }
            ]
          },
          {
            id: 11003,
            nights: 6,
            duration: "6N/7D",
            price: 94999,
            name: "Turkey Explorer",
            image: "https://cdn.yourholiday.me/static/dynimg/destination/45/600x300/2750974-2750973_turkey.jpg",
            highlights: [
              "Return flights from Mumbai/Delhi included",
              "Istanbul, Cappadocia & Pamukkale",
              "Pamukkale \u2014 white travertine terraces & Hierapolis",
              "Ephesus ancient ruins \u2014 Library of Celsus",
              "All meals, transfers & sightseeing included"
            ],
            groupSize: "2 \u2013 15 People",
            transport: "Flight + Coach",
            accommodation: "4\u2605 Hotels + Cave Hotel",
            itinerary: [
              { day: 1, title: "Arrival \u2013 Istanbul", description: "Arrive & check-in. Evening Galata Bridge & Bosphorus view." },
              { day: 2, title: "Istanbul City Tour", description: "Hagia Sophia, Blue Mosque, Topkapi Palace, Grand Bazaar & Bosphorus cruise." },
              { day: 3, title: "Fly to Cappadocia", description: "Flight to Cappadocia. Cave hotel check-in. Goreme Open Air Museum." },
              { day: 4, title: "Hot Air Balloon & Underground City", description: "Sunrise hot air balloon ride. Derinkuyu Underground City & Ihlara Valley." },
              { day: 5, title: "Pamukkale", description: "Drive to Pamukkale. White travertine terraces, Hierapolis ancient city & thermal pools." },
              { day: 6, title: "Ephesus", description: "Ephesus ancient ruins \u2014 Library of Celsus, Great Theatre & Temple of Artemis." },
              { day: 7, title: "Departure", description: "Breakfast. Transfer to Izmir Airport. Tour ends." }
            ]
          },
          {
            id: 11004,
            nights: 7,
            duration: "7N/8D",
            price: 119999,
            badge: "Premium",
            name: "Grand Turkey",
            image: "https://cdn.yourholiday.me/static/dynimg/destination/45/600x300/2750974-2750973_turkey.jpg",
            highlights: [
              "Return flights from Mumbai/Delhi included",
              "Istanbul, Cappadocia, Pamukkale, Ephesus & Antalya",
              "Antalya \u2014 turquoise coast & old harbour",
              "Private hot air balloon & yacht cruise",
              "All meals, transfers & exclusive experiences"
            ],
            groupSize: "2 \u2013 10 People",
            transport: "Flight + Private Coach",
            accommodation: "4\u2605 / 5\u2605 Hotels + Cave Hotel",
            itinerary: [
              { day: 1, title: "Arrival \u2013 Istanbul", description: "Luxury hotel check-in. Evening Bosphorus dinner cruise." },
              { day: 2, title: "Istanbul City Tour", description: "Hagia Sophia, Blue Mosque, Topkapi Palace, Grand Bazaar & Bosphorus cruise." },
              { day: 3, title: "Cappadocia", description: "Flight to Cappadocia. Cave hotel. Goreme Open Air Museum & fairy chimneys." },
              { day: 4, title: "Hot Air Balloon & Underground City", description: "Private sunrise hot air balloon. Derinkuyu Underground City & Ihlara Valley." },
              { day: 5, title: "Pamukkale & Ephesus", description: "Pamukkale travertines & Hierapolis. Ephesus ancient ruins." },
              { day: 6, title: "Antalya", description: "Drive to Antalya. Old harbour, Kaleici old town & Duden Waterfalls." },
              { day: 7, title: "Turquoise Coast Yacht Cruise", description: "Private yacht cruise along the turquoise coast. Snorkeling & beach leisure." },
              { day: 8, title: "Departure", description: "Breakfast. Transfer to Antalya Airport. Tour ends with beautiful memories." }
            ]
          }
        ]
      },
      "vietnam": {
        name: "Vietnam",
        tagline: "S-shaped wonder \u2014 emerald bays, ancient towns & vibrant street life",
        heroImage: "https://cdn.yourholiday.me/static/dynimg/destination/35/600x300/3078047-3078046_vietnam.jpg",
        packages: [
          {
            id: 12001,
            nights: 4,
            duration: "4N/5D",
            price: 34999,
            badge: "Bestseller",
            name: "Hanoi Highlights",
            image: "https://cdn.yourholiday.me/static/dynimg/destination/35/600x300/3078047-3078046_vietnam.jpg",
            highlights: [
              "Return flights from Mumbai/Delhi included",
              "Hanoi \u2014 Hoan Kiem Lake & Old Quarter",
              "Ha Long Bay \u2014 UNESCO World Heritage cruise",
              "Trang An Grottoes boat ride",
              "All transfers & daily breakfast included"
            ],
            groupSize: "2 \u2013 20 People",
            transport: "Flight + Coach + Cruise",
            accommodation: "3\u2605 / 4\u2605 Hotels",
            itinerary: [
              { day: 1, title: "Arrival \u2013 Hanoi", description: "Arrive at Noi Bai Airport. Check-in. Evening Hoan Kiem Lake & Old Quarter street food walk." },
              { day: 2, title: "Hanoi City Tour", description: "Ho Chi Minh Mausoleum, Temple of Literature, One Pillar Pagoda & Hoan Kiem Lake." },
              { day: 3, title: "Ha Long Bay Cruise", description: "Drive to Ha Long Bay. Board cruise. Kayaking through limestone karsts & cave exploration." },
              { day: 4, title: "Ha Long & Return to Hanoi", description: "Morning on cruise. Tai Chi on deck. Return to Hanoi. Trang An Grottoes boat ride." },
              { day: 5, title: "Departure", description: "Breakfast at hotel. Transfer to Noi Bai Airport. Tour ends with beautiful memories." }
            ]
          },
          {
            id: 12002,
            nights: 5,
            duration: "5N/6D",
            price: 44999,
            badge: "Popular",
            name: "Ha Long Escape",
            image: "https://cdn.yourholiday.me/static/dynimg/destination/35/600x300/3078047-3078046_vietnam.jpg",
            highlights: [
              "Return flights from Mumbai/Delhi included",
              "Hanoi, Ha Long Bay & Hoi An",
              "Hoi An Ancient Town \u2014 UNESCO World Heritage",
              "Lantern making & cooking class in Hoi An",
              "All transfers & daily breakfast included"
            ],
            groupSize: "2 \u2013 20 People",
            transport: "Flight + Coach + Cruise",
            accommodation: "4\u2605 Hotels",
            itinerary: [
              { day: 1, title: "Arrival \u2013 Hanoi", description: "Arrive & check-in. Evening Hoan Kiem Lake & Old Quarter." },
              { day: 2, title: "Hanoi City Tour", description: "Ho Chi Minh Mausoleum, Temple of Literature & One Pillar Pagoda." },
              { day: 3, title: "Ha Long Bay Cruise", description: "Ha Long Bay cruise \u2014 kayaking, cave exploration & sunset on deck." },
              { day: 4, title: "Fly to Da Nang \u2013 Hoi An", description: "Return to Hanoi. Fly to Da Nang. Transfer to Hoi An Ancient Town." },
              { day: 5, title: "Hoi An Exploration", description: "Hoi An Ancient Town walk, Japanese Covered Bridge, lantern making & cooking class." },
              { day: 6, title: "Departure", description: "Breakfast. Transfer to Da Nang Airport. Tour ends." }
            ]
          },
          {
            id: 12003,
            nights: 6,
            duration: "6N/7D",
            price: 57999,
            name: "Vietnam Explorer",
            image: "https://cdn.yourholiday.me/static/dynimg/destination/35/600x300/3078047-3078046_vietnam.jpg",
            highlights: [
              "Return flights from Mumbai/Delhi included",
              "Hanoi, Ha Long Bay, Hoi An & Ho Chi Minh City",
              "Cu Chi Tunnels \u2014 Vietnam War history",
              "Mekong Delta boat ride & floating market",
              "All meals, transfers & sightseeing included"
            ],
            groupSize: "2 \u2013 15 People",
            transport: "Flight + Coach + Cruise",
            accommodation: "4\u2605 Hotels",
            itinerary: [
              { day: 1, title: "Arrival \u2013 Hanoi", description: "Arrive & check-in. Evening Hoan Kiem Lake & Old Quarter." },
              { day: 2, title: "Ha Long Bay Cruise", description: "Ha Long Bay \u2014 kayaking, cave exploration & sunset on deck." },
              { day: 3, title: "Hanoi to Hoi An", description: "Return to Hanoi. Fly to Da Nang. Hoi An Ancient Town evening walk." },
              { day: 4, title: "Hoi An & My Son Sanctuary", description: "Hoi An Ancient Town, Japanese Bridge & My Son Hindu sanctuary ruins." },
              { day: 5, title: "Fly to Ho Chi Minh City", description: "Flight to HCMC. Reunification Palace, War Remnants Museum & Ben Thanh Market." },
              { day: 6, title: "Cu Chi Tunnels & Mekong Delta", description: "Cu Chi Tunnels morning. Afternoon Mekong Delta boat ride & floating market." },
              { day: 7, title: "Departure", description: "Breakfast. Transfer to Tan Son Nhat Airport. Tour ends." }
            ]
          },
          {
            id: 12004,
            nights: 7,
            duration: "7N/8D",
            price: 74999,
            badge: "Premium",
            name: "Grand Vietnam",
            image: "https://cdn.yourholiday.me/static/dynimg/destination/35/600x300/3078047-3078046_vietnam.jpg",
            highlights: [
              "Return flights from Mumbai/Delhi included",
              "Hanoi, Ha Long Bay, Hue, Hoi An & Ho Chi Minh City",
              "Hue Imperial Citadel & royal tombs",
              "Private Ha Long Bay overnight cruise",
              "All meals, transfers & exclusive experiences"
            ],
            groupSize: "2 \u2013 10 People",
            transport: "Flight + Private Coach + Cruise",
            accommodation: "4\u2605 / 5\u2605 Hotels",
            itinerary: [
              { day: 1, title: "Arrival \u2013 Hanoi", description: "Luxury hotel check-in. Evening Hoan Kiem Lake & Old Quarter." },
              { day: 2, title: "Hanoi City Tour", description: "Ho Chi Minh Mausoleum, Temple of Literature & One Pillar Pagoda." },
              { day: 3, title: "Ha Long Bay Private Cruise", description: "Private Ha Long Bay cruise \u2014 kayaking, cave exploration & sunset dinner on deck." },
              { day: 4, title: "Hue Imperial City", description: "Fly to Hue. Imperial Citadel, Thien Mu Pagoda & royal tombs by dragon boat." },
              { day: 5, title: "Hoi An", description: "Drive to Hoi An. Ancient Town, Japanese Bridge, lantern making & cooking class." },
              { day: 6, title: "Ho Chi Minh City", description: "Fly to HCMC. Reunification Palace, War Remnants Museum & Ben Thanh Market." },
              { day: 7, title: "Cu Chi Tunnels & Mekong Delta", description: "Cu Chi Tunnels. Mekong Delta boat ride, floating market & farewell dinner." },
              { day: 8, title: "Departure", description: "Breakfast. Transfer to Tan Son Nhat Airport. Tour ends with beautiful memories." }
            ]
          }
        ]
      },
      "australia": {
        name: "Australia",
        tagline: "Land Down Under \u2014 iconic landmarks, wildlife & stunning coastlines",
        heroImage: "https://cdn.yourholiday.me/static/dynimg/destination/58/600x300/2210344-2210343_australia.jpg",
        packages: [
          {
            id: 9001,
            nights: 4,
            duration: "4N/5D",
            price: 89999,
            badge: "Bestseller",
            name: "Sydney Sojourn",
            image: "https://cdn.yourholiday.me/static/dynimg/destination/58/600x300/2210344-2210343_australia.jpg",
            highlights: [
              "Return flights from Mumbai/Delhi included",
              "Sydney Opera House & Harbour Bridge walk",
              "Bondi Beach & Manly Ferry cruise",
              "Blue Mountains \u2014 Three Sisters & Scenic World",
              "All transfers & daily breakfast included"
            ],
            groupSize: "2 \u2013 20 People",
            transport: "Flight + Coach",
            accommodation: "3\u2605 / 4\u2605 Hotels",
            itinerary: [
              { day: 1, title: "Arrival \u2013 Sydney", description: "Arrive at Sydney Airport. Check-in. Evening Sydney Harbour walk & Opera House exterior." },
              { day: 2, title: "Sydney City Tour", description: "Sydney Opera House, Harbour Bridge, The Rocks, Darling Harbour & Bondi Beach." },
              { day: 3, title: "Blue Mountains", description: "Day trip to Blue Mountains. Three Sisters, Scenic World cable car & Leura village." },
              { day: 4, title: "Manly & Wildlife", description: "Manly Ferry cruise. Taronga Zoo \u2014 koalas, kangaroos & wombats." },
              { day: 5, title: "Departure", description: "Breakfast at hotel. Transfer to Sydney Airport. Tour ends with beautiful memories." }
            ]
          },
          {
            id: 9002,
            nights: 5,
            duration: "5N/6D",
            price: 114999,
            badge: "Popular",
            name: "Coastal Wonders",
            image: "https://cdn.yourholiday.me/static/dynimg/destination/58/600x300/2210344-2210343_australia.jpg",
            highlights: [
              "Return flights from Mumbai/Delhi included",
              "Sydney & Melbourne dual-city coverage",
              "Great Ocean Road \u2014 Twelve Apostles",
              "Philip Island \u2014 Penguin Parade at sunset",
              "All transfers & daily breakfast included"
            ],
            groupSize: "2 \u2013 20 People",
            transport: "Flight + Coach",
            accommodation: "4\u2605 Hotels",
            itinerary: [
              { day: 1, title: "Arrival \u2013 Sydney", description: "Arrive & check-in. Evening Sydney Harbour & Opera House." },
              { day: 2, title: "Sydney Highlights", description: "Opera House, Harbour Bridge, Bondi Beach & Blue Mountains day trip." },
              { day: 3, title: "Fly to Melbourne", description: "Flight to Melbourne. City tour \u2014 Federation Square, Flinders Street & Queen Victoria Market." },
              { day: 4, title: "Great Ocean Road", description: "Full-day Great Ocean Road tour \u2014 Twelve Apostles, Loch Ard Gorge & London Arch." },
              { day: 5, title: "Philip Island", description: "Philip Island \u2014 Penguin Parade at sunset. Koala Conservation Centre." },
              { day: 6, title: "Departure", description: "Breakfast. Transfer to Melbourne Airport. Tour ends." }
            ]
          },
          {
            id: 9003,
            nights: 6,
            duration: "6N/7D",
            price: 139999,
            name: "Outback & Beyond",
            image: "https://cdn.yourholiday.me/static/dynimg/destination/58/600x300/2210344-2210343_australia.jpg",
            highlights: [
              "Return flights from Mumbai/Delhi included",
              "Sydney, Melbourne & Cairns full circuit",
              "Great Barrier Reef snorkeling & diving",
              "Daintree Rainforest \u2014 world's oldest tropical rainforest",
              "All meals, transfers & sightseeing included"
            ],
            groupSize: "2 \u2013 15 People",
            transport: "Flight + Coach",
            accommodation: "4\u2605 Hotels",
            itinerary: [
              { day: 1, title: "Arrival \u2013 Sydney", description: "Arrive & check-in. Evening Sydney Harbour & Opera House." },
              { day: 2, title: "Sydney Highlights", description: "Opera House, Harbour Bridge, Bondi Beach & Taronga Zoo." },
              { day: 3, title: "Melbourne", description: "Fly to Melbourne. Federation Square, Flinders Street & Queen Victoria Market." },
              { day: 4, title: "Great Ocean Road", description: "Twelve Apostles, Loch Ard Gorge & London Arch." },
              { day: 5, title: "Cairns & Great Barrier Reef", description: "Fly to Cairns. Afternoon snorkeling & diving at Great Barrier Reef." },
              { day: 6, title: "Daintree Rainforest", description: "Daintree Rainforest tour \u2014 river cruise, wildlife spotting & Cape Tribulation beach." },
              { day: 7, title: "Departure", description: "Breakfast. Transfer to Cairns Airport. Tour ends." }
            ]
          },
          {
            id: 9004,
            nights: 7,
            duration: "7N/8D",
            price: 169999,
            badge: "Premium",
            name: "Ultimate Australia",
            image: "https://cdn.yourholiday.me/static/dynimg/destination/58/600x300/2210344-2210343_australia.jpg",
            highlights: [
              "Return flights from Mumbai/Delhi included",
              "Sydney, Melbourne, Cairns & Uluru (Ayers Rock)",
              "Uluru sunrise & Kata Tjuta guided walk",
              "Great Barrier Reef private dive & helicopter flight",
              "All meals, transfers & exclusive experiences"
            ],
            groupSize: "2 \u2013 10 People",
            transport: "Flight + Private Coach",
            accommodation: "4\u2605 / 5\u2605 Hotels",
            itinerary: [
              { day: 1, title: "Arrival \u2013 Sydney", description: "Luxury hotel check-in. Evening Sydney Harbour & Opera House." },
              { day: 2, title: "Sydney Highlights", description: "Opera House, Harbour Bridge, Bondi Beach & Blue Mountains." },
              { day: 3, title: "Melbourne", description: "Fly to Melbourne. Federation Square, Great Ocean Road preview & Philip Island." },
              { day: 4, title: "Great Ocean Road", description: "Twelve Apostles, Loch Ard Gorge & London Arch full-day tour." },
              { day: 5, title: "Uluru \u2013 Ayers Rock", description: "Fly to Uluru. Sunset viewing of Ayers Rock. Outback dinner under the stars." },
              { day: 6, title: "Uluru Sunrise & Kata Tjuta", description: "Uluru sunrise walk. Kata Tjuta Valley of the Winds guided trek." },
              { day: 7, title: "Cairns & Great Barrier Reef", description: "Fly to Cairns. Private dive at Great Barrier Reef. Helicopter scenic flight." },
              { day: 8, title: "Departure", description: "Breakfast. Transfer to Cairns Airport. Tour ends with beautiful memories." }
            ]
          }
        ]
      },
      "japan": {
        name: "Japan",
        tagline: "Land of the Rising Sun \u2014 temples, cherry blossoms & futuristic cities",
        heroImage: "https://cdn.yourholiday.me/static/dynimg/destination/64/600x300/2750318-2750317_japan.jpg",
        packages: [
          {
            id: 10001,
            nights: 4,
            duration: "4N/5D",
            price: 84999,
            badge: "Bestseller",
            name: "Tokyo Highlights",
            image: "https://cdn.yourholiday.me/static/dynimg/destination/64/600x300/2750318-2750317_japan.jpg",
            highlights: [
              "Return flights from Mumbai/Delhi included",
              "Tokyo \u2014 Shibuya Crossing & Shinjuku",
              "Senso-ji Temple & Asakusa district",
              "teamLab Borderless digital art museum",
              "All transfers & daily breakfast included"
            ],
            groupSize: "2 \u2013 20 People",
            transport: "Flight + Subway + Coach",
            accommodation: "3\u2605 / 4\u2605 Hotels",
            itinerary: [
              { day: 1, title: "Arrival \u2013 Tokyo", description: "Arrive at Narita/Haneda Airport. Check-in. Evening Shinjuku neon lights & Kabukicho." },
              { day: 2, title: "Tokyo City Tour", description: "Senso-ji Temple, Asakusa, Akihabara electronics district & Shibuya Crossing." },
              { day: 3, title: "Harajuku & Odaiba", description: "Harajuku Takeshita Street, Meiji Shrine, Odaiba waterfront & teamLab Borderless." },
              { day: 4, title: "Mt. Fuji Day Trip", description: "Day trip to Mt. Fuji \u2014 Fuji Five Lakes, Chureito Pagoda & Lake Kawaguchiko." },
              { day: 5, title: "Departure", description: "Breakfast at hotel. Transfer to airport. Tour ends with beautiful memories." }
            ]
          },
          {
            id: 10002,
            nights: 5,
            duration: "5N/6D",
            price: 109999,
            badge: "Popular",
            name: "Sakura Trail",
            image: "https://cdn.yourholiday.me/static/dynimg/destination/64/600x300/2750318-2750317_japan.jpg",
            highlights: [
              "Return flights from Mumbai/Delhi included",
              "Tokyo & Kyoto dual-city coverage",
              "Kyoto \u2014 Fushimi Inari, Arashiyama & Geisha district",
              "Bullet train (Shinkansen) Tokyo\u2013Kyoto",
              "All transfers & daily breakfast included"
            ],
            groupSize: "2 \u2013 20 People",
            transport: "Flight + Shinkansen + Coach",
            accommodation: "4\u2605 Hotels",
            itinerary: [
              { day: 1, title: "Arrival \u2013 Tokyo", description: "Arrive & check-in. Evening Shinjuku & Kabukicho." },
              { day: 2, title: "Tokyo City Tour", description: "Senso-ji, Asakusa, Shibuya Crossing & Harajuku." },
              { day: 3, title: "Mt. Fuji & Shinkansen to Kyoto", description: "Morning Mt. Fuji views. Afternoon Shinkansen bullet train to Kyoto." },
              { day: 4, title: "Kyoto Highlights", description: "Fushimi Inari Shrine, Kinkaku-ji (Golden Pavilion) & Gion Geisha district." },
              { day: 5, title: "Arashiyama & Nara", description: "Arashiyama Bamboo Grove, Tenryu-ji Garden. Nara deer park & Todai-ji Temple." },
              { day: 6, title: "Departure", description: "Breakfast. Transfer to Osaka/Kyoto Airport. Tour ends." }
            ]
          },
          {
            id: 10003,
            nights: 6,
            duration: "6N/7D",
            price: 134999,
            name: "Japan Explorer",
            image: "https://cdn.yourholiday.me/static/dynimg/destination/64/600x300/2750318-2750317_japan.jpg",
            highlights: [
              "Return flights from Mumbai/Delhi included",
              "Tokyo, Kyoto, Osaka & Hiroshima",
              "Hiroshima Peace Memorial & Miyajima Island",
              "Osaka \u2014 Dotonbori street food & Osaka Castle",
              "All meals, transfers & sightseeing included"
            ],
            groupSize: "2 \u2013 15 People",
            transport: "Flight + Shinkansen + Coach",
            accommodation: "4\u2605 Hotels",
            itinerary: [
              { day: 1, title: "Arrival \u2013 Tokyo", description: "Arrive & check-in. Evening Shinjuku & Kabukicho." },
              { day: 2, title: "Tokyo City Tour", description: "Senso-ji, Asakusa, Shibuya Crossing & teamLab Borderless." },
              { day: 3, title: "Mt. Fuji & Shinkansen to Kyoto", description: "Mt. Fuji Chureito Pagoda. Shinkansen to Kyoto." },
              { day: 4, title: "Kyoto Highlights", description: "Fushimi Inari, Kinkaku-ji, Arashiyama Bamboo Grove & Gion district." },
              { day: 5, title: "Hiroshima & Miyajima", description: "Shinkansen to Hiroshima. Peace Memorial Museum. Ferry to Miyajima \u2014 floating torii gate." },
              { day: 6, title: "Osaka", description: "Osaka Castle, Dotonbori street food, Kuromon Market & Shinsekai district." },
              { day: 7, title: "Departure", description: "Breakfast. Transfer to Osaka Kansai Airport. Tour ends." }
            ]
          },
          {
            id: 10004,
            nights: 7,
            duration: "7N/8D",
            price: 164999,
            badge: "Premium",
            name: "Land of Rising Sun",
            image: "https://cdn.yourholiday.me/static/dynimg/destination/64/600x300/2750318-2750317_japan.jpg",
            highlights: [
              "Return flights from Mumbai/Delhi included",
              "Tokyo, Hakone, Kyoto, Osaka & Hiroshima",
              "Hakone \u2014 Mt. Fuji views & ryokan stay",
              "Traditional tea ceremony & kimono experience",
              "All meals, transfers & exclusive experiences"
            ],
            groupSize: "2 \u2013 10 People",
            transport: "Flight + Shinkansen + Private Coach",
            accommodation: "4\u2605 / 5\u2605 Hotels + Ryokan",
            itinerary: [
              { day: 1, title: "Arrival \u2013 Tokyo", description: "Luxury hotel check-in. Evening Shinjuku & Kabukicho." },
              { day: 2, title: "Tokyo City Tour", description: "Senso-ji, Asakusa, Shibuya Crossing, Harajuku & teamLab Borderless." },
              { day: 3, title: "Hakone & Mt. Fuji", description: "Hakone \u2014 Mt. Fuji views, Hakone Open Air Museum & traditional ryokan stay." },
              { day: 4, title: "Shinkansen to Kyoto", description: "Bullet train to Kyoto. Fushimi Inari Shrine & Gion Geisha district evening walk." },
              { day: 5, title: "Kyoto Deep Dive", description: "Kinkaku-ji, Arashiyama Bamboo Grove, Tenryu-ji & traditional tea ceremony." },
              { day: 6, title: "Hiroshima & Miyajima", description: "Peace Memorial Museum. Ferry to Miyajima \u2014 floating torii gate & Mt. Misen." },
              { day: 7, title: "Osaka", description: "Osaka Castle, Dotonbori, Kuromon Market & farewell dinner." },
              { day: 8, title: "Departure", description: "Breakfast. Transfer to Osaka Kansai Airport. Tour ends with beautiful memories." }
            ]
          }
        ]
      },
      "maldives": {
        name: "Maldives",
        tagline: "Paradise on Earth \u2014 crystal lagoons, overwater villas & coral reefs",
        heroImage: "https://cdn.yourholiday.me/static/dynimg/destination/98/600x300/2750963-2750962_maldives.jpg",
        packages: [
          {
            id: 6001,
            nights: 4,
            duration: "4N/5D",
            price: 42999,
            badge: "Bestseller",
            name: "Maldives Bliss",
            image: "https://cdn.yourholiday.me/static/dynimg/destination/98/600x300/2750963-2750962_maldives.jpg",
            highlights: [
              "Return flights from Mumbai/Delhi included",
              "Beach villa stay on a private island resort",
              "Snorkeling & glass-bottom boat ride",
              "Sunset dolphin cruise",
              "All transfers & daily breakfast included"
            ],
            groupSize: "2 \u2013 10 People",
            transport: "Flight + Speedboat",
            accommodation: "4\u2605 Beach Villa",
            itinerary: [
              { day: 1, title: "Arrival \u2013 Mal\xE9", description: "Arrive at Velana International Airport. Speedboat transfer to resort. Check-in to beach villa. Evening at leisure." },
              { day: 2, title: "Snorkeling & Water Sports", description: "Morning snorkeling at house reef. Afternoon glass-bottom boat ride over coral gardens." },
              { day: 3, title: "Dolphin Cruise & Beach", description: "Sunset dolphin watching cruise. Leisure beach day. Bonfire dinner on the beach." },
              { day: 4, title: "Island Hopping", description: "Visit local Maldivian island. Explore fish market & local culture. Afternoon at resort pool." },
              { day: 5, title: "Departure", description: "Breakfast at resort. Speedboat to Mal\xE9. Transfer to airport. Tour ends with beautiful memories." }
            ]
          },
          {
            id: 6002,
            nights: 5,
            duration: "5N/6D",
            price: 58999,
            badge: "Popular",
            name: "Lagoon Escape",
            image: "https://cdn.yourholiday.me/static/dynimg/destination/98/600x300/2750963-2750962_maldives.jpg",
            highlights: [
              "Return flights from Mumbai/Delhi included",
              "Overwater bungalow stay",
              "Scuba diving & snorkeling sessions",
              "Sunset dolphin cruise & sandbank picnic",
              "All transfers & daily breakfast included"
            ],
            groupSize: "2 \u2013 8 People",
            transport: "Flight + Speedboat",
            accommodation: "4\u2605 Overwater Bungalow",
            itinerary: [
              { day: 1, title: "Arrival \u2013 Mal\xE9", description: "Arrive & speedboat transfer to resort. Check-in to overwater bungalow. Welcome cocktail." },
              { day: 2, title: "Snorkeling & Reef Exploration", description: "Guided snorkeling at vibrant coral reef. Glass-bottom boat tour. Leisure afternoon." },
              { day: 3, title: "Scuba Diving", description: "Introductory scuba diving session with certified instructor. Explore underwater world." },
              { day: 4, title: "Sandbank Picnic & Dolphin Cruise", description: "Private sandbank picnic lunch. Sunset dolphin watching cruise." },
              { day: 5, title: "Island Hopping & Local Culture", description: "Visit local island & Mal\xE9 city tour \u2014 Grand Friday Mosque & fish market." },
              { day: 6, title: "Departure", description: "Breakfast. Speedboat to Mal\xE9. Transfer to airport. Tour ends." }
            ]
          },
          {
            id: 6003,
            nights: 6,
            duration: "6N/7D",
            price: 79999,
            name: "Overwater Paradise",
            image: "https://cdn.yourholiday.me/static/dynimg/destination/98/600x300/2750963-2750962_maldives.jpg",
            highlights: [
              "Return flights from Mumbai/Delhi included",
              "Luxury overwater villa with private pool",
              "Scuba diving, snorkeling & water sports",
              "Submarine tour & bioluminescent beach night",
              "All meals, transfers & sightseeing included"
            ],
            groupSize: "2 \u2013 6 People",
            transport: "Flight + Seaplane / Speedboat",
            accommodation: "5\u2605 Overwater Villa",
            itinerary: [
              { day: 1, title: "Arrival \u2013 Mal\xE9", description: "Seaplane transfer to luxury resort. Check-in to overwater villa with private pool." },
              { day: 2, title: "Snorkeling & Reef Safari", description: "Guided reef snorkeling. Glass-bottom boat tour. Afternoon kayaking." },
              { day: 3, title: "Scuba Diving", description: "Two scuba dives with certified instructor. Explore manta ray & shark points." },
              { day: 4, title: "Water Sports Day", description: "Jet ski, windsurfing, parasailing & banana boat. Sunset dolphin cruise." },
              { day: 5, title: "Submarine Tour & Sandbank", description: "Semi-submarine tour of coral gardens. Private sandbank picnic. Bioluminescent beach walk at night." },
              { day: 6, title: "Mal\xE9 City Tour", description: "Visit Mal\xE9 \u2014 Grand Friday Mosque, National Museum & fish market. Farewell dinner." },
              { day: 7, title: "Departure", description: "Breakfast. Seaplane to Mal\xE9. Transfer to airport. Tour ends." }
            ]
          },
          {
            id: 6004,
            nights: 7,
            duration: "7N/8D",
            price: 109999,
            badge: "Premium",
            name: "Ultimate Maldives",
            image: "https://cdn.yourholiday.me/static/dynimg/destination/98/600x300/2750963-2750962_maldives.jpg",
            highlights: [
              "Return flights from Mumbai/Delhi included",
              "Two-resort experience \u2014 beach & overwater villa",
              "Private diving & snorkeling excursions",
              "Sunset yacht cruise & underwater restaurant dinner",
              "All meals, transfers & exclusive experiences"
            ],
            groupSize: "2 \u2013 4 People",
            transport: "Flight + Seaplane",
            accommodation: "5\u2605 Luxury Resorts",
            itinerary: [
              { day: 1, title: "Arrival \u2013 Mal\xE9", description: "Seaplane to first resort. Luxury beach villa check-in. Welcome dinner on the beach." },
              { day: 2, title: "Snorkeling & Reef Exploration", description: "Private guided snorkeling. Glass-bottom boat. Afternoon at leisure." },
              { day: 3, title: "Scuba Diving", description: "Two private scuba dives \u2014 manta ray point & shark reef." },
              { day: 4, title: "Resort Transfer & Water Sports", description: "Seaplane to second resort \u2014 overwater villa. Jet ski, parasailing & windsurfing." },
              { day: 5, title: "Submarine & Sandbank", description: "Semi-submarine coral tour. Private sandbank picnic. Sunset dolphin cruise." },
              { day: 6, title: "Underwater Restaurant & Yacht", description: "Lunch at underwater restaurant. Private sunset yacht cruise. Bioluminescent beach walk." },
              { day: 7, title: "Mal\xE9 & Leisure", description: "Mal\xE9 city tour \u2014 Grand Friday Mosque & fish market. Farewell spa session." },
              { day: 8, title: "Departure", description: "Breakfast. Seaplane to Mal\xE9. Transfer to airport. Tour ends with beautiful memories." }
            ]
          }
        ]
      },
      "malaysia": {
        name: "Malaysia",
        tagline: "Truly Asia \u2014 rainforests, twin towers & island paradise",
        heroImage: "https://cdn.yourholiday.me/static/dynimg/destination/64/600x300/3160627-3160626_tourist-places-in-malaysia.jpg",
        packages: [
          {
            id: 7001,
            nights: 4,
            duration: "4N/5D",
            price: 28999,
            badge: "Bestseller",
            name: "KL Highlights",
            image: "https://cdn.yourholiday.me/static/dynimg/destination/64/600x300/3160627-3160626_tourist-places-in-malaysia.jpg",
            highlights: [
              "Return flights from Mumbai/Delhi included",
              "Petronas Twin Towers \u2014 Skybridge & observation deck",
              "Batu Caves \u2014 iconic Hindu temple complex",
              "KL Tower & Aquaria KLCC",
              "All transfers & daily breakfast included"
            ],
            groupSize: "2 \u2013 20 People",
            transport: "Flight + Coach",
            accommodation: "3\u2605 / 4\u2605 Hotels",
            itinerary: [
              { day: 1, title: "Arrival \u2013 Kuala Lumpur", description: "Arrive at KLIA. Check-in. Evening KLCC Park & Petronas Twin Towers light show." },
              { day: 2, title: "KL City Tour", description: "Petronas Twin Towers Skybridge, KL Tower, Merdeka Square, National Mosque & Chinatown." },
              { day: 3, title: "Batu Caves & Aquaria", description: "Batu Caves Hindu temple complex. Afternoon Aquaria KLCC underwater tunnel." },
              { day: 4, title: "Genting Highlands", description: "Cable car to Genting Highlands. Theme park, casino & cool mountain air." },
              { day: 5, title: "Departure", description: "Breakfast. Transfer to KLIA. Tour ends with beautiful memories." }
            ]
          },
          {
            id: 7002,
            nights: 5,
            duration: "5N/6D",
            price: 38999,
            badge: "Popular",
            name: "Rainforest Retreat",
            image: "https://cdn.yourholiday.me/static/dynimg/destination/64/600x300/3160627-3160626_tourist-places-in-malaysia.jpg",
            highlights: [
              "Return flights from Mumbai/Delhi included",
              "KL city tour & Petronas Twin Towers",
              "Langkawi \u2014 cable car & island hopping",
              "Mangrove river cruise & eagle feeding",
              "All transfers & daily breakfast included"
            ],
            groupSize: "2 \u2013 20 People",
            transport: "Flight + Coach + Ferry",
            accommodation: "4\u2605 Hotels",
            itinerary: [
              { day: 1, title: "Arrival \u2013 Kuala Lumpur", description: "Arrive & check-in. Evening KLCC Park & Petronas Twin Towers." },
              { day: 2, title: "KL City Tour", description: "Petronas Twin Towers, KL Tower, Batu Caves & Chinatown." },
              { day: 3, title: "Fly to Langkawi", description: "Flight to Langkawi. Check-in. Afternoon at Pantai Cenang beach." },
              { day: 4, title: "Langkawi Cable Car & Island Hopping", description: "SkyCab cable car to Mt. Mat Cincang. Island hopping \u2014 Pulau Dayang Bunting & eagle feeding." },
              { day: 5, title: "Mangrove Cruise & Leisure", description: "Kilim Karst Geoforest mangrove river cruise. Afternoon at leisure." },
              { day: 6, title: "Departure", description: "Breakfast. Transfer to Langkawi Airport. Tour ends." }
            ]
          },
          {
            id: 7003,
            nights: 6,
            duration: "6N/7D",
            price: 52999,
            name: "Malaysia Explorer",
            image: "https://cdn.yourholiday.me/static/dynimg/destination/64/600x300/3160627-3160626_tourist-places-in-malaysia.jpg",
            highlights: [
              "Return flights from Mumbai/Delhi included",
              "KL, Langkawi & Penang full circuit",
              "Penang \u2014 George Town heritage & street food",
              "Penang Hill funicular & Kek Lok Si Temple",
              "All meals, transfers & sightseeing included"
            ],
            groupSize: "2 \u2013 15 People",
            transport: "Flight + Coach + Ferry",
            accommodation: "4\u2605 Hotels",
            itinerary: [
              { day: 1, title: "Arrival \u2013 Kuala Lumpur", description: "Arrive & check-in. Evening KLCC Park & Petronas Twin Towers." },
              { day: 2, title: "KL City Tour", description: "Petronas Twin Towers, KL Tower, Batu Caves & Chinatown." },
              { day: 3, title: "Genting Highlands", description: "Cable car to Genting Highlands. Theme park & casino." },
              { day: 4, title: "Penang", description: "Drive/fly to Penang. George Town heritage walk, street art & street food trail." },
              { day: 5, title: "Penang Hill & Kek Lok Si", description: "Penang Hill funicular ride. Kek Lok Si Temple & Clan Jetties." },
              { day: 6, title: "Langkawi", description: "Ferry to Langkawi. SkyCab cable car & island hopping." },
              { day: 7, title: "Departure", description: "Breakfast. Transfer to Langkawi Airport. Tour ends." }
            ]
          },
          {
            id: 7004,
            nights: 7,
            duration: "7N/8D",
            price: 72999,
            badge: "Premium",
            name: "Borneo & Beyond",
            image: "https://cdn.yourholiday.me/static/dynimg/destination/64/600x300/3160627-3160626_tourist-places-in-malaysia.jpg",
            highlights: [
              "Return flights from Mumbai/Delhi included",
              "KL, Langkawi, Penang & Borneo (Kota Kinabalu)",
              "Borneo rainforest \u2014 orangutan sanctuary & jungle trek",
              "Mt. Kinabalu National Park (UNESCO)",
              "All meals, transfers & exclusive experiences"
            ],
            groupSize: "2 \u2013 10 People",
            transport: "Flight + Coach",
            accommodation: "4\u2605 / 5\u2605 Hotels",
            itinerary: [
              { day: 1, title: "Arrival \u2013 Kuala Lumpur", description: "Luxury hotel check-in. Evening KLCC Park & Petronas Twin Towers." },
              { day: 2, title: "KL City Tour", description: "Petronas Twin Towers, KL Tower, Batu Caves & Chinatown." },
              { day: 3, title: "Langkawi", description: "Fly to Langkawi. SkyCab cable car & island hopping." },
              { day: 4, title: "Penang", description: "Ferry to Penang. George Town heritage, Penang Hill & Kek Lok Si Temple." },
              { day: 5, title: "Kota Kinabalu \u2014 Borneo", description: "Fly to Kota Kinabalu. Sepilok Orangutan Rehabilitation Centre." },
              { day: 6, title: "Mt. Kinabalu & Jungle Trek", description: "Mt. Kinabalu National Park (UNESCO). Jungle canopy walk & river safari." },
              { day: 7, title: "Tunku Abdul Rahman Marine Park", description: "Island hopping in Tunku Abdul Rahman Marine Park. Snorkeling & beach leisure." },
              { day: 8, title: "Departure", description: "Breakfast. Transfer to Kota Kinabalu Airport. Tour ends with beautiful memories." }
            ]
          }
        ]
      },
      "switzerland": {
        name: "Switzerland",
        tagline: "Land of Alps \u2014 snow peaks, chocolate & fairy-tale villages",
        heroImage: "https://cdn.yourholiday.me/static/dynimg/destination/74/600x300/2190187-2190186_zurich-switzerland-view-of-the-historic-city-center-with-famous-fraumunster-church-5.jpg",
        packages: [
          {
            id: 8001,
            nights: 4,
            duration: "4N/5D",
            price: 74999,
            badge: "Bestseller",
            name: "Swiss Highlights",
            image: "https://cdn.yourholiday.me/static/dynimg/itinerary/38/600x300/2990875-2990874_swiss.jpg",
            highlights: [
              "Return flights from Mumbai/Delhi included",
              "Zurich city tour & Lake Zurich cruise",
              "Lucerne \u2014 Chapel Bridge & Lion Monument",
              "Mt. Titlis cable car & glacier walk",
              "All transfers & daily breakfast included"
            ],
            groupSize: "2 \u2013 20 People",
            transport: "Flight + Coach + Train",
            accommodation: "3\u2605 / 4\u2605 Hotels",
            itinerary: [
              { day: 1, title: "Arrival \u2013 Zurich", description: "Arrive at Zurich Airport. Check-in. Evening Old Town walk & Lake Zurich promenade." },
              { day: 2, title: "Zurich City Tour", description: "Old Town, Grossm\xFCnster, Fraum\xFCnster, Bahnhofstrasse shopping & Lake Zurich cruise." },
              { day: 3, title: "Lucerne", description: "Drive to Lucerne. Chapel Bridge, Lion Monument, Old Town & Lake Lucerne boat ride." },
              { day: 4, title: "Mt. Titlis", description: "Cable car to Mt. Titlis (3,020m). Glacier walk, ice cave & Cliff Walk suspension bridge." },
              { day: 5, title: "Departure", description: "Breakfast. Transfer to Zurich Airport. Tour ends with beautiful memories." }
            ]
          },
          {
            id: 8002,
            nights: 5,
            duration: "5N/6D",
            price: 99999,
            badge: "Popular",
            name: "Alpine Escape",
            image: "https://cdn.yourholiday.me/static/dynimg/itinerary/38/600x300/2990875-2990874_swiss.jpg",
            highlights: [
              "Return flights from Mumbai/Delhi included",
              "Zurich, Lucerne, Interlaken & Bern",
              "Jungfraujoch \u2014 Top of Europe (3,454m)",
              "Interlaken adventure activities",
              "All transfers & daily breakfast included"
            ],
            groupSize: "2 \u2013 20 People",
            transport: "Flight + Coach + Train",
            accommodation: "4\u2605 Hotels",
            itinerary: [
              { day: 1, title: "Arrival \u2013 Zurich", description: "Arrive & check-in. Evening Old Town walk & Lake Zurich." },
              { day: 2, title: "Zurich & Lucerne", description: "Zurich Old Town. Drive to Lucerne \u2014 Chapel Bridge, Lion Monument & Lake Lucerne." },
              { day: 3, title: "Mt. Titlis", description: "Cable car to Mt. Titlis. Glacier walk, ice cave & Cliff Walk." },
              { day: 4, title: "Interlaken & Jungfraujoch", description: "Drive to Interlaken. Cogwheel train to Jungfraujoch \u2014 Top of Europe. Glacier views." },
              { day: 5, title: "Bern", description: "Swiss capital Bern \u2014 Bear Park, Zytglogge clock tower, Rose Garden & Federal Palace." },
              { day: 6, title: "Departure", description: "Breakfast. Transfer to Zurich Airport. Tour ends." }
            ]
          },
          {
            id: 8003,
            nights: 6,
            duration: "6N/7D",
            price: 129999,
            name: "Swiss Explorer",
            image: "https://cdn.yourholiday.me/static/dynimg/itinerary/38/600x300/2990875-2990874_swiss.jpg",
            highlights: [
              "Return flights from Mumbai/Delhi included",
              "Zurich, Lucerne, Interlaken, Bern & Geneva",
              "Jungfraujoch + Mt. Titlis double peak experience",
              "Lake Geneva & Chillon Castle",
              "All meals, transfers & sightseeing included"
            ],
            groupSize: "2 \u2013 15 People",
            transport: "Flight + Coach + Train",
            accommodation: "4\u2605 Hotels",
            itinerary: [
              { day: 1, title: "Arrival \u2013 Zurich", description: "Arrive & check-in. Evening Old Town walk & Lake Zurich." },
              { day: 2, title: "Zurich & Lucerne", description: "Zurich Old Town. Lucerne \u2014 Chapel Bridge, Lion Monument & Lake Lucerne." },
              { day: 3, title: "Mt. Titlis", description: "Cable car to Mt. Titlis. Glacier walk, ice cave & Cliff Walk." },
              { day: 4, title: "Interlaken & Jungfraujoch", description: "Cogwheel train to Jungfraujoch \u2014 Top of Europe. Interlaken leisure." },
              { day: 5, title: "Bern", description: "Bear Park, Zytglogge, Rose Garden & Federal Palace." },
              { day: 6, title: "Geneva & Lake Geneva", description: "Drive to Geneva. Jet d'Eau, UN Palace, Chillon Castle & Lake Geneva cruise." },
              { day: 7, title: "Departure", description: "Breakfast. Transfer to Geneva Airport. Tour ends." }
            ]
          },
          {
            id: 8004,
            nights: 7,
            duration: "7N/8D",
            price: 164999,
            badge: "Premium",
            name: "Grand Switzerland",
            image: "https://cdn.yourholiday.me/static/dynimg/itinerary/38/600x300/2990875-2990874_swiss.jpg",
            highlights: [
              "Return flights from Mumbai/Delhi included",
              "Zurich, Lucerne, Interlaken, Bern, Geneva & Zermatt",
              "Matterhorn \u2014 Gornergrat cogwheel train",
              "Glacier Express scenic train journey",
              "All meals, transfers & exclusive experiences"
            ],
            groupSize: "2 \u2013 10 People",
            transport: "Flight + Private Coach + Scenic Train",
            accommodation: "4\u2605 / 5\u2605 Hotels",
            itinerary: [
              { day: 1, title: "Arrival \u2013 Zurich", description: "Luxury hotel check-in. Evening Old Town walk & Lake Zurich." },
              { day: 2, title: "Zurich & Lucerne", description: "Zurich Old Town. Lucerne \u2014 Chapel Bridge, Lion Monument & Lake Lucerne." },
              { day: 3, title: "Mt. Titlis", description: "Cable car to Mt. Titlis. Glacier walk, ice cave & Cliff Walk." },
              { day: 4, title: "Interlaken & Jungfraujoch", description: "Cogwheel train to Jungfraujoch \u2014 Top of Europe. Interlaken adventure activities." },
              { day: 5, title: "Bern & Geneva", description: "Bern city tour. Drive to Geneva \u2014 Jet d'Eau, UN Palace & Lake Geneva." },
              { day: 6, title: "Zermatt & Matterhorn", description: "Train to Zermatt. Gornergrat cogwheel train \u2014 iconic Matterhorn views." },
              { day: 7, title: "Glacier Express", description: "Scenic Glacier Express train journey through the Alps. Farewell dinner." },
              { day: 8, title: "Departure", description: "Breakfast. Transfer to Zurich Airport. Tour ends with beautiful memories." }
            ]
          }
        ]
      },
      "europe": {
        name: "Europe",
        tagline: "Old World charm \u2014 iconic cities, art & timeless landscapes",
        heroImage: "https://cdn.yourholiday.me/static/dynimg/destination/21/600x300/2190173-2190172_europe-1-main-image.jpg",
        packages: [
          {
            id: 5001,
            nights: 4,
            duration: "4N/5D",
            price: 89999,
            badge: "Bestseller",
            name: "European Glimpse",
            image: "https://cdn.yourholiday.me/static/dynimg/itinerary/43/600x300/2993319-2993318_europe.jpg",
            highlights: [
              "Return flights from Mumbai/Delhi included",
              "Paris \u2014 Eiffel Tower, Louvre & Seine cruise",
              "Amsterdam \u2014 canals, Anne Frank House & Keukenhof",
              "Brussels \u2014 Grand Place & Manneken Pis",
              "All transfers & daily breakfast included"
            ],
            groupSize: "2 \u2013 20 People",
            transport: "Flight + Coach",
            accommodation: "3\u2605 / 4\u2605 Hotels",
            itinerary: [
              { day: 1, title: "Arrival \u2013 Paris", description: "Arrive at CDG Airport. Check-in. Evening Eiffel Tower visit & Seine River cruise." },
              { day: 2, title: "Paris Sightseeing", description: "Louvre Museum, Notre Dame, Champs-Elys\xE9es, Arc de Triomphe & Moulin Rouge area." },
              { day: 3, title: "Brussels", description: "Drive to Brussels. Grand Place, Manneken Pis, Atomium & Belgian chocolate tasting." },
              { day: 4, title: "Amsterdam", description: "Drive to Amsterdam. Canal cruise, Anne Frank House, Rijksmuseum & Keukenhof Gardens." },
              { day: 5, title: "Departure", description: "Breakfast. Transfer to Amsterdam Airport. Tour ends with beautiful memories." }
            ]
          },
          {
            id: 5002,
            nights: 5,
            duration: "5N/6D",
            price: 119999,
            badge: "Popular",
            name: "Classic Europe",
            image: "https://cdn.yourholiday.me/static/dynimg/itinerary/38/600x300/2990875-2990874_swiss.jpg",
            highlights: [
              "Return flights from Mumbai/Delhi included",
              "Paris, Switzerland & Amsterdam",
              "Swiss Alps \u2014 Jungfraujoch or Mt. Titlis",
              "Interlaken \u2014 adventure capital of Europe",
              "All transfers & daily breakfast included"
            ],
            groupSize: "2 \u2013 20 People",
            transport: "Flight + Coach",
            accommodation: "4\u2605 Hotels",
            itinerary: [
              { day: 1, title: "Arrival \u2013 Paris", description: "Arrive & check-in. Evening Eiffel Tower & Seine cruise." },
              { day: 2, title: "Paris Sightseeing", description: "Louvre, Notre Dame, Champs-Elys\xE9es & Arc de Triomphe." },
              { day: 3, title: "Switzerland \u2014 Interlaken", description: "Drive to Interlaken. Jungfraujoch \u2014 Top of Europe (seasonal). Evening at leisure." },
              { day: 4, title: "Lucerne & Mt. Titlis", description: "Mt. Titlis cable car, glacier walk & Lucerne city tour \u2014 Chapel Bridge & Lion Monument." },
              { day: 5, title: "Amsterdam", description: "Drive to Amsterdam. Canal cruise, Anne Frank House & Keukenhof Gardens." },
              { day: 6, title: "Departure", description: "Breakfast. Transfer to Amsterdam Airport. Tour ends." }
            ]
          },
          {
            id: 5003,
            nights: 6,
            duration: "6N/7D",
            price: 164999,
            name: "European Wonders",
            image: "https://cdn.yourholiday.me/static/dynimg/itinerary/55/600x300/2998781-2998780_london-tourism-title.jpg",
            highlights: [
              "Return flights from Mumbai/Delhi included",
              "Paris, Switzerland, Italy & Amsterdam",
              "Rome \u2014 Colosseum, Vatican & Trevi Fountain",
              "Venice \u2014 gondola ride & St. Mark's Square",
              "All meals, transfers & sightseeing included"
            ],
            groupSize: "2 \u2013 15 People",
            transport: "Flight + Coach",
            accommodation: "4\u2605 Hotels",
            itinerary: [
              { day: 1, title: "Arrival \u2013 Paris", description: "Arrive & check-in. Evening Eiffel Tower & Seine cruise." },
              { day: 2, title: "Paris Sightseeing", description: "Louvre, Notre Dame, Champs-Elys\xE9es & Arc de Triomphe." },
              { day: 3, title: "Switzerland", description: "Drive to Interlaken. Mt. Titlis cable car & Lucerne city tour." },
              { day: 4, title: "Rome", description: "Fly to Rome. Colosseum, Roman Forum, Vatican Museums & Trevi Fountain." },
              { day: 5, title: "Venice", description: "Drive to Venice. Gondola ride, St. Mark's Square & Rialto Bridge." },
              { day: 6, title: "Amsterdam", description: "Fly to Amsterdam. Canal cruise, Anne Frank House & Keukenhof." },
              { day: 7, title: "Departure", description: "Breakfast. Transfer to Amsterdam Airport. Tour ends." }
            ]
          },
          {
            id: 5004,
            nights: 7,
            duration: "7N/8D",
            price: 229628,
            badge: "Premium",
            name: "Grand Europe",
            image: "https://cdn.yourholiday.me/static/dynimg/itinerary/15/600x300/2995351-2995350_uk_tourism.jpg",
            highlights: [
              "Return flights from Mumbai/Delhi included",
              "London, Paris, Switzerland, Italy & Amsterdam",
              "London \u2014 Big Ben, Buckingham Palace & Tower Bridge",
              "Luxury 4\u2605/5\u2605 hotel stays throughout",
              "All meals, transfers & exclusive experiences"
            ],
            groupSize: "2 \u2013 10 People",
            transport: "Flight + Private Coach",
            accommodation: "4\u2605 / 5\u2605 Hotels",
            itinerary: [
              { day: 1, title: "Arrival \u2013 London", description: "Arrive at Heathrow. Luxury hotel check-in. Evening Thames River cruise." },
              { day: 2, title: "London Sightseeing", description: "Big Ben, Buckingham Palace, Tower Bridge, Tower of London & London Eye." },
              { day: 3, title: "Paris", description: "Eurostar to Paris. Eiffel Tower, Louvre & Seine cruise." },
              { day: 4, title: "Switzerland", description: "Drive to Interlaken. Jungfraujoch & Lucerne city tour." },
              { day: 5, title: "Rome", description: "Fly to Rome. Colosseum, Vatican Museums & Trevi Fountain." },
              { day: 6, title: "Venice & Florence", description: "Venice gondola ride. Florence \u2014 Uffizi Gallery & Ponte Vecchio." },
              { day: 7, title: "Amsterdam", description: "Fly to Amsterdam. Canal cruise, Anne Frank House & Keukenhof." },
              { day: 8, title: "Departure", description: "Breakfast. Transfer to Amsterdam Airport. Tour ends with beautiful memories." }
            ]
          }
        ]
      },
      "spain": {
        name: "Spain",
        tagline: "Passion, art & fiesta \xE2\u20AC\u201D flamenco, tapas & sun-drenched coastlines",
        heroImage: "https://cdn.yourholiday.me/static/dynimg/destination/56/600x300/2750344-2750343_spain.jpg",
        packages: [
          {
            id: 19001,
            nights: 4,
            duration: "4N/5D",
            price: 64999,
            badge: "Bestseller",
            name: "Barcelona Escape",
            image: "https://cdn.yourholiday.me/static/dynimg/destination/56/600x300/2750344-2750343_spain.jpg",
            highlights: [
              "Return flights from Mumbai/Delhi included",
              "Sagrada Familia & Park Guell \xE2\u20AC\u201D Gaudi masterpieces",
              "Las Ramblas, Gothic Quarter & Barceloneta Beach",
              "Camp Nou stadium tour",
              "All transfers & daily breakfast included"
            ],
            groupSize: "2 \xE2\u20AC\u201C 20 People",
            transport: "Flight + Coach",
            accommodation: "3\xE2\u02DC\u2026 / 4\xE2\u02DC\u2026 Hotels",
            itinerary: [
              { day: 1, title: "Arrival \xE2\u20AC\u201C Barcelona", description: "Arrive at Barcelona El Prat Airport. Check-in. Evening Las Ramblas walk & welcome tapas dinner." },
              { day: 2, title: "Gaudi Barcelona", description: "Sagrada Familia, Park Guell, Casa Batllo exterior & Passeig de Gracia." },
              { day: 3, title: "Gothic Quarter & Barceloneta", description: "Gothic Quarter walk, Barcelona Cathedral, Picasso Museum & Barceloneta Beach." },
              { day: 4, title: "Camp Nou & Montjuic", description: "Camp Nou stadium tour. Montjuic Castle & Magic Fountain evening show." },
              { day: 5, title: "Departure", description: "Breakfast at hotel. Transfer to Barcelona Airport. Tour ends with beautiful memories." }
            ]
          },
          {
            id: 19002,
            nights: 5,
            duration: "5N/6D",
            price: 84999,
            badge: "Popular",
            name: "Andalusia Dreams",
            image: "https://cdn.yourholiday.me/static/dynimg/destination/56/600x300/2750344-2750343_spain.jpg",
            highlights: [
              "Return flights from Mumbai/Delhi included",
              "Barcelona & Andalusia dual coverage",
              "Seville \xE2\u20AC\u201D Alcazar Palace & Flamenco show",
              "Granada \xE2\u20AC\u201D Alhambra Palace & Generalife Gardens",
              "All transfers & daily breakfast included"
            ],
            groupSize: "2 \xE2\u20AC\u201C 20 People",
            transport: "Flight + Coach + Train",
            accommodation: "4\xE2\u02DC\u2026 Hotels",
            itinerary: [
              { day: 1, title: "Arrival \xE2\u20AC\u201C Barcelona", description: "Arrive & check-in. Evening Las Ramblas & Gothic Quarter." },
              { day: 2, title: "Barcelona Highlights", description: "Sagrada Familia, Park Guell, Barceloneta Beach & Camp Nou." },
              { day: 3, title: "Fly to Seville", description: "Flight to Seville. Alcazar Palace, Seville Cathedral & Giralda Tower." },
              { day: 4, title: "Seville & Flamenco", description: "Plaza de Espana, Triana neighbourhood & evening Flamenco show." },
              { day: 5, title: "Granada \xE2\u20AC\u201C Alhambra", description: "Drive to Granada. Alhambra Palace, Nasrid Palaces & Generalife Gardens." },
              { day: 6, title: "Departure", description: "Breakfast. Transfer to Granada/Malaga Airport. Tour ends." }
            ]
          },
          {
            id: 19003,
            nights: 6,
            duration: "6N/7D",
            price: 109999,
            name: "Spain Explorer",
            image: "https://cdn.yourholiday.me/static/dynimg/destination/56/600x300/2750344-2750343_spain.jpg",
            highlights: [
              "Return flights from Mumbai/Delhi included",
              "Barcelona, Madrid & Andalusia full circuit",
              "Madrid \xE2\u20AC\u201D Prado Museum & Royal Palace",
              "Toledo \xE2\u20AC\u201D medieval city & El Greco heritage",
              "All meals, transfers & sightseeing included"
            ],
            groupSize: "2 \xE2\u20AC\u201C 15 People",
            transport: "Flight + Coach + Train",
            accommodation: "4\xE2\u02DC\u2026 Hotels",
            itinerary: [
              { day: 1, title: "Arrival \xE2\u20AC\u201C Barcelona", description: "Arrive & check-in. Evening Las Ramblas & tapas dinner." },
              { day: 2, title: "Barcelona Highlights", description: "Sagrada Familia, Park Guell, Gothic Quarter & Barceloneta Beach." },
              { day: 3, title: "High-Speed Train to Madrid", description: "AVE train to Madrid. Puerta del Sol, Plaza Mayor & Retiro Park." },
              { day: 4, title: "Madrid City Tour", description: "Prado Museum, Royal Palace, Almudena Cathedral & Gran Via." },
              { day: 5, title: "Toledo Day Trip", description: "Day trip to Toledo \xE2\u20AC\u201D medieval city, El Greco Museum & Toledo Cathedral." },
              { day: 6, title: "Seville & Alhambra", description: "Train to Seville. Alcazar Palace, Flamenco show & Granada Alhambra." },
              { day: 7, title: "Departure", description: "Breakfast. Transfer to Malaga Airport. Tour ends." }
            ]
          },
          {
            id: 19004,
            nights: 7,
            duration: "7N/8D",
            price: 139999,
            badge: "Premium",
            name: "Iberian Grand Tour",
            image: "https://cdn.yourholiday.me/static/dynimg/destination/56/600x300/2750344-2750343_spain.jpg",
            highlights: [
              "Return flights from Mumbai/Delhi included",
              "Barcelona, Madrid, Seville, Granada & Costa del Sol",
              "Costa del Sol \xE2\u20AC\u201D Marbella & Malaga beaches",
              "Private Flamenco dinner show in Seville",
              "All meals, transfers & exclusive experiences"
            ],
            groupSize: "2 \xE2\u20AC\u201C 10 People",
            transport: "Flight + Private Coach + Train",
            accommodation: "4\xE2\u02DC\u2026 / 5\xE2\u02DC\u2026 Hotels",
            itinerary: [
              { day: 1, title: "Arrival \xE2\u20AC\u201C Barcelona", description: "Luxury hotel check-in. Evening Las Ramblas & Gothic Quarter." },
              { day: 2, title: "Barcelona Highlights", description: "Sagrada Familia, Park Guell, Casa Batllo & Barceloneta Beach." },
              { day: 3, title: "AVE Train to Madrid", description: "High-speed train to Madrid. Prado Museum, Royal Palace & Retiro Park." },
              { day: 4, title: "Madrid & Toledo", description: "Gran Via, Almudena Cathedral & day trip to medieval Toledo." },
              { day: 5, title: "Seville", description: "Train to Seville. Alcazar Palace, Giralda Tower & private Flamenco dinner show." },
              { day: 6, title: "Granada \xE2\u20AC\u201C Alhambra", description: "Alhambra Palace, Nasrid Palaces, Generalife Gardens & Albaicin neighbourhood." },
              { day: 7, title: "Costa del Sol", description: "Drive to Marbella. Old Town, Puerto Banus & Malaga Picasso Museum." },
              { day: 8, title: "Departure", description: "Breakfast. Transfer to Malaga Airport. Tour ends with beautiful memories." }
            ]
          }
        ]
      },
      "russia": {
        name: "Russia",
        tagline: "Land of Tsars \xE2\u20AC\u201D Red Square, golden domes & Trans-Siberian grandeur",
        heroImage: "https://cdn.yourholiday.me/static/dynimg/destination/89/600x300/2750969-2750968_russia.jpg",
        packages: [
          {
            id: 20001,
            nights: 4,
            duration: "4N/5D",
            price: 59999,
            badge: "Bestseller",
            name: "Moscow Highlights",
            image: "https://cdn.yourholiday.me/static/dynimg/destination/89/600x300/2750969-2750968_russia.jpg",
            highlights: [
              "Return flights from Mumbai/Delhi included",
              "Red Square, Kremlin & St. Basil's Cathedral",
              "Bolshoi Theatre exterior & Arbat Street",
              "Moscow Metro \xE2\u20AC\u201D world's most beautiful subway",
              "All transfers & daily breakfast included"
            ],
            groupSize: "2 \xE2\u20AC\u201C 20 People",
            transport: "Flight + Coach",
            accommodation: "3\xE2\u02DC\u2026 / 4\xE2\u02DC\u2026 Hotels",
            itinerary: [
              { day: 1, title: "Arrival \xE2\u20AC\u201C Moscow", description: "Arrive at Sheremetyevo Airport. Check-in. Evening Arbat Street walk & welcome dinner." },
              { day: 2, title: "Moscow City Tour", description: "Red Square, St. Basil's Cathedral, Kremlin, Lenin's Mausoleum & GUM department store." },
              { day: 3, title: "Moscow Metro & Culture", description: "Moscow Metro tour \xE2\u20AC\u201D ornate stations. Bolshoi Theatre exterior. Gorky Park & Sparrow Hills." },
              { day: 4, title: "Kolomenskoye & Novodevichy", description: "Kolomenskoye estate & UNESCO church. Novodevichy Convent & cemetery." },
              { day: 5, title: "Departure", description: "Breakfast at hotel. Transfer to Moscow Airport. Tour ends with beautiful memories." }
            ]
          },
          {
            id: 20002,
            nights: 5,
            duration: "5N/6D",
            price: 79999,
            badge: "Popular",
            name: "Golden Ring",
            image: "https://cdn.yourholiday.me/static/dynimg/destination/89/600x300/2750969-2750968_russia.jpg",
            highlights: [
              "Return flights from Mumbai/Delhi included",
              "Moscow & St. Petersburg dual-city coverage",
              "St. Petersburg \xE2\u20AC\u201D Hermitage Museum & Winter Palace",
              "Peterhof \xE2\u20AC\u201D the Russian Versailles",
              "All transfers & daily breakfast included"
            ],
            groupSize: "2 \xE2\u20AC\u201C 20 People",
            transport: "Flight + High-Speed Train + Coach",
            accommodation: "4\xE2\u02DC\u2026 Hotels",
            itinerary: [
              { day: 1, title: "Arrival \xE2\u20AC\u201C Moscow", description: "Arrive & check-in. Evening Arbat Street & welcome dinner." },
              { day: 2, title: "Moscow City Tour", description: "Red Square, Kremlin, St. Basil's Cathedral & Moscow Metro." },
              { day: 3, title: "Sapsan Train to St. Petersburg", description: "High-speed Sapsan train to St. Petersburg. Check-in. Evening Nevsky Prospekt walk." },
              { day: 4, title: "St. Petersburg Highlights", description: "Hermitage Museum, Winter Palace, Palace Square & Peter & Paul Fortress." },
              { day: 5, title: "Peterhof & Catherine Palace", description: "Peterhof Grand Palace & fountains. Catherine Palace & Amber Room in Pushkin." },
              { day: 6, title: "Departure", description: "Breakfast. Transfer to Pulkovo Airport. Tour ends." }
            ]
          },
          {
            id: 20003,
            nights: 6,
            duration: "6N/7D",
            price: 99999,
            name: "Trans-Siberian",
            image: "https://cdn.yourholiday.me/static/dynimg/destination/89/600x300/2750969-2750968_russia.jpg",
            highlights: [
              "Return flights from Mumbai/Delhi included",
              "Moscow, St. Petersburg & Lake Baikal",
              "Lake Baikal \xE2\u20AC\u201D world's deepest & oldest lake",
              "Irkutsk \xE2\u20AC\u201D gateway to Siberia",
              "All meals, transfers & sightseeing included"
            ],
            groupSize: "2 \xE2\u20AC\u201C 15 People",
            transport: "Flight + Train + Coach",
            accommodation: "4\xE2\u02DC\u2026 Hotels",
            itinerary: [
              { day: 1, title: "Arrival \xE2\u20AC\u201C Moscow", description: "Arrive & check-in. Evening Arbat Street & welcome dinner." },
              { day: 2, title: "Moscow City Tour", description: "Red Square, Kremlin, St. Basil's Cathedral & Moscow Metro." },
              { day: 3, title: "Sapsan to St. Petersburg", description: "High-speed train to St. Petersburg. Hermitage Museum & Nevsky Prospekt." },
              { day: 4, title: "St. Petersburg Highlights", description: "Peterhof fountains, Catherine Palace & Peter & Paul Fortress." },
              { day: 5, title: "Fly to Irkutsk", description: "Flight to Irkutsk. City tour \xE2\u20AC\u201D Znamensky Monastery & Decembrist Museum." },
              { day: 6, title: "Lake Baikal", description: "Day trip to Lake Baikal. Listvyanka village, Baikal Museum & boat ride on the world's deepest lake." },
              { day: 7, title: "Departure", description: "Breakfast. Transfer to Irkutsk Airport. Tour ends." }
            ]
          },
          {
            id: 20004,
            nights: 7,
            duration: "7N/8D",
            price: 129999,
            badge: "Premium",
            name: "Grand Russia",
            image: "https://cdn.yourholiday.me/static/dynimg/destination/89/600x300/2750969-2750968_russia.jpg",
            highlights: [
              "Return flights from Mumbai/Delhi included",
              "Moscow, St. Petersburg, Irkutsk & Lake Baikal",
              "Bolshoi Theatre ballet performance",
              "Private Hermitage Museum tour",
              "All meals, transfers & exclusive experiences"
            ],
            groupSize: "2 \xE2\u20AC\u201C 10 People",
            transport: "Flight + Private Coach + Train",
            accommodation: "4\xE2\u02DC\u2026 / 5\xE2\u02DC\u2026 Hotels",
            itinerary: [
              { day: 1, title: "Arrival \xE2\u20AC\u201C Moscow", description: "Luxury hotel check-in. Evening Arbat Street & welcome dinner." },
              { day: 2, title: "Moscow City Tour", description: "Red Square, Kremlin, St. Basil's Cathedral, Moscow Metro & GUM." },
              { day: 3, title: "Bolshoi Theatre & Golden Ring", description: "Bolshoi Theatre ballet performance. Sergiev Posad \xE2\u20AC\u201D Trinity Lavra monastery." },
              { day: 4, title: "Sapsan to St. Petersburg", description: "High-speed train to St. Petersburg. Nevsky Prospekt & canal cruise." },
              { day: 5, title: "St. Petersburg Highlights", description: "Private Hermitage Museum tour. Winter Palace, Palace Square & Peter & Paul Fortress." },
              { day: 6, title: "Peterhof & Catherine Palace", description: "Peterhof Grand Palace & fountains. Catherine Palace & Amber Room." },
              { day: 7, title: "Lake Baikal", description: "Fly to Irkutsk. Lake Baikal boat ride, Listvyanka village & Baikal Museum." },
              { day: 8, title: "Departure", description: "Breakfast. Transfer to Irkutsk Airport. Tour ends with beautiful memories." }
            ]
          }
        ]
      },
      "seychelles": {
        name: "Seychelles",
        tagline: "Jewels of the Indian Ocean \xE2\u20AC\u201D granite boulders, turquoise bays & rare wildlife",
        heroImage: "https://cdn.yourholiday.me/static/dynimg/destination/3/600x300/2750342-2750341_seychelles.jpg",
        packages: [
          {
            id: 21001,
            nights: 4,
            duration: "4N/5D",
            price: 74999,
            badge: "Bestseller",
            name: "Seychelles Escape",
            image: "https://cdn.yourholiday.me/static/dynimg/destination/3/600x300/2750342-2750341_seychelles.jpg",
            highlights: [
              "Return flights from Mumbai/Delhi included",
              "Mahe \xE2\u20AC\u201D Beau Vallon Beach & Victoria market",
              "Anse Intendance & Anse Royale beaches",
              "Snorkeling at Sainte Anne Marine Park",
              "All transfers & daily breakfast included"
            ],
            groupSize: "2 \xE2\u20AC\u201C 10 People",
            transport: "Flight + Coach",
            accommodation: "4\xE2\u02DC\u2026 Hotels",
            itinerary: [
              { day: 1, title: "Arrival \xE2\u20AC\u201C Mahe", description: "Arrive at Seychelles International Airport. Check-in. Evening Beau Vallon Beach & welcome dinner." },
              { day: 2, title: "Mahe Island Tour", description: "Victoria Clock Tower, Sir Selwyn Clarke Market, Botanical Gardens & Anse Royale beach." },
              { day: 3, title: "Sainte Anne Marine Park", description: "Glass-bottom boat & snorkeling at Sainte Anne Marine Park. Afternoon at Beau Vallon." },
              { day: 4, title: "Anse Intendance & Morne Blanc", description: "Anse Intendance beach. Morne Blanc nature trail & panoramic island views." },
              { day: 5, title: "Departure", description: "Breakfast at hotel. Transfer to Seychelles Airport. Tour ends with beautiful memories." }
            ]
          },
          {
            id: 21002,
            nights: 5,
            duration: "5N/6D",
            price: 99999,
            badge: "Popular",
            name: "Island Hopper",
            image: "https://cdn.yourholiday.me/static/dynimg/destination/3/600x300/2750342-2750341_seychelles.jpg",
            highlights: [
              "Return flights from Mumbai/Delhi included",
              "Mahe & Praslin island coverage",
              "Praslin \xE2\u20AC\u201D Anse Lazio (world's best beach)",
              "Vallee de Mai \xE2\u20AC\u201D UNESCO Coco de Mer palm forest",
              "All transfers & daily breakfast included"
            ],
            groupSize: "2 \xE2\u20AC\u201C 10 People",
            transport: "Flight + Ferry + Coach",
            accommodation: "4\xE2\u02DC\u2026 Hotels",
            itinerary: [
              { day: 1, title: "Arrival \xE2\u20AC\u201C Mahe", description: "Arrive & check-in. Evening Beau Vallon Beach & welcome dinner." },
              { day: 2, title: "Mahe Island Tour", description: "Victoria market, Botanical Gardens, Anse Royale & Sainte Anne Marine Park snorkeling." },
              { day: 3, title: "Ferry to Praslin", description: "Ferry to Praslin. Check-in. Afternoon Anse Lazio \xE2\u20AC\u201D one of the world's best beaches." },
              { day: 4, title: "Vallee de Mai & Anse Georgette", description: "Vallee de Mai UNESCO forest \xE2\u20AC\u201D Coco de Mer palms & Black Parrot. Anse Georgette beach." },
              { day: 5, title: "Curieuse Island", description: "Boat trip to Curieuse Island \xE2\u20AC\u201D giant Aldabra tortoises & mangrove walk." },
              { day: 6, title: "Departure", description: "Breakfast. Ferry to Mahe. Transfer to airport. Tour ends." }
            ]
          },
          {
            id: 21003,
            nights: 6,
            duration: "6N/7D",
            price: 129999,
            name: "Tropical Paradise",
            image: "https://cdn.yourholiday.me/static/dynimg/destination/3/600x300/2750342-2750341_seychelles.jpg",
            highlights: [
              "Return flights from Mumbai/Delhi included",
              "Mahe, Praslin & La Digue island circuit",
              "La Digue \xE2\u20AC\u201D Anse Source d'Argent (iconic granite boulders)",
              "Scuba diving & snorkeling in crystal waters",
              "All meals, transfers & sightseeing included"
            ],
            groupSize: "2 \xE2\u20AC\u201C 8 People",
            transport: "Flight + Ferry + Coach",
            accommodation: "4\xE2\u02DC\u2026 Hotels",
            itinerary: [
              { day: 1, title: "Arrival \xE2\u20AC\u201C Mahe", description: "Arrive & check-in. Evening Beau Vallon Beach & welcome dinner." },
              { day: 2, title: "Mahe Island Tour", description: "Victoria market, Botanical Gardens & Sainte Anne Marine Park snorkeling." },
              { day: 3, title: "Ferry to Praslin", description: "Ferry to Praslin. Anse Lazio beach & Vallee de Mai UNESCO forest." },
              { day: 4, title: "Curieuse & La Digue", description: "Curieuse Island tortoises. Ferry to La Digue. Check-in. Evening at leisure." },
              { day: 5, title: "La Digue Highlights", description: "Anse Source d'Argent \xE2\u20AC\u201D iconic granite boulder beach. Bicycle tour of the island." },
              { day: 6, title: "Scuba Diving & Snorkeling", description: "Scuba diving & snorkeling at coral reefs. Farewell sunset dinner on the beach." },
              { day: 7, title: "Departure", description: "Breakfast. Ferry to Mahe. Transfer to airport. Tour ends." }
            ]
          },
          {
            id: 21004,
            nights: 7,
            duration: "7N/8D",
            price: 164999,
            badge: "Premium",
            name: "Grand Seychelles",
            image: "https://cdn.yourholiday.me/static/dynimg/destination/3/600x300/2750342-2750341_seychelles.jpg",
            highlights: [
              "Return flights from Mumbai/Delhi included",
              "Mahe, Praslin, La Digue & private island experience",
              "Luxury overwater villa stay",
              "Private yacht island hopping & sunset cruise",
              "All meals, transfers & exclusive experiences"
            ],
            groupSize: "2 \xE2\u20AC\u201C 6 People",
            transport: "Flight + Private Ferry + Coach",
            accommodation: "5\xE2\u02DC\u2026 Luxury Resorts",
            itinerary: [
              { day: 1, title: "Arrival \xE2\u20AC\u201C Mahe", description: "Luxury resort check-in. Evening Beau Vallon Beach & welcome dinner." },
              { day: 2, title: "Mahe Island Tour", description: "Victoria market, Botanical Gardens & private Sainte Anne Marine Park snorkeling." },
              { day: 3, title: "Praslin", description: "Private ferry to Praslin. Anse Lazio beach & Vallee de Mai UNESCO forest." },
              { day: 4, title: "Curieuse & La Digue", description: "Curieuse Island tortoises. Ferry to La Digue. Luxury villa check-in." },
              { day: 5, title: "La Digue & Anse Source d'Argent", description: "Anse Source d'Argent iconic beach. Bicycle island tour & snorkeling." },
              { day: 6, title: "Private Yacht Cruise", description: "Full-day private yacht island hopping. Snorkeling, fishing & sunset cruise." },
              { day: 7, title: "Mahe & Spa", description: "Return to Mahe. Luxury spa session. Farewell dinner at beachfront restaurant." },
              { day: 8, title: "Departure", description: "Breakfast. Transfer to Seychelles Airport. Tour ends with beautiful memories." }
            ]
          }
        ]
      },
      "mauritius": {
        name: "Mauritius",
        tagline: "Pearl of the Indian Ocean - lagoons, waterfalls & Creole culture",
        heroImage: "https://cdn.yourholiday.me/static/dynimg/destination/70/600x300/2210601-2210600_mauritius.jpg",
        packages: [
          {
            id: 22001,
            nights: 4,
            duration: "4N/5D",
            price: 54999,
            badge: "Bestseller",
            name: "Mauritius Escape",
            image: "https://cdn.yourholiday.me/static/dynimg/destination/70/600x300/2210601-2210600_mauritius.jpg",
            highlights: [
              "Return flights from Mumbai/Delhi included",
              "Grand Baie - beach & water sports",
              "Chamarel - Seven Coloured Earths & waterfall",
              "Black River Gorges National Park",
              "All transfers & daily breakfast included"
            ],
            groupSize: "2 - 10 People",
            transport: "Flight + Coach",
            accommodation: "4* Hotels",
            itinerary: [
              { day: 1, title: "Arrival - Mauritius", description: "Arrive at Sir Seewoosagur Ramgoolam Airport. Check-in. Evening Grand Baie beach walk & welcome dinner." },
              { day: 2, title: "North Mauritius Tour", description: "Grand Baie, Cap Malheureux, Pamplemousses Botanical Garden & Port Louis Caudan Waterfront." },
              { day: 3, title: "Chamarel & South Tour", description: "Seven Coloured Earths, Chamarel Waterfall, Black River Gorges & Gris Gris beach." },
              { day: 4, title: "Water Sports & Ile aux Cerfs", description: "Speedboat to Ile aux Cerfs island. Snorkeling, water sports & beach leisure." },
              { day: 5, title: "Departure", description: "Breakfast at hotel. Transfer to airport. Tour ends with beautiful memories." }
            ]
          },
          {
            id: 22002,
            nights: 5,
            duration: "5N/6D",
            price: 72999,
            badge: "Popular",
            name: "Island Serenity",
            image: "https://cdn.yourholiday.me/static/dynimg/destination/70/600x300/2210601-2210600_mauritius.jpg",
            highlights: [
              "Return flights from Mumbai/Delhi included",
              "Ile aux Cerfs island day trip",
              "Underwater waterfall illusion - Le Morne",
              "Dolphin watching cruise at Tamarin Bay",
              "All transfers & daily breakfast included"
            ],
            groupSize: "2 - 10 People",
            transport: "Flight + Coach",
            accommodation: "4* Hotels",
            itinerary: [
              { day: 1, title: "Arrival - Mauritius", description: "Arrive & check-in. Evening Grand Baie beach & welcome dinner." },
              { day: 2, title: "North Tour", description: "Grand Baie, Cap Malheureux, Pamplemousses Botanical Garden & Port Louis." },
              { day: 3, title: "Ile aux Cerfs", description: "Speedboat to Ile aux Cerfs. Snorkeling, water sports & beach BBQ lunch." },
              { day: 4, title: "South & Le Morne", description: "Chamarel Seven Coloured Earths, Le Morne Brabant & underwater waterfall viewpoint." },
              { day: 5, title: "Dolphin Watching & Tamarin", description: "Morning dolphin watching cruise at Tamarin Bay. Afternoon at leisure." },
              { day: 6, title: "Departure", description: "Breakfast. Transfer to airport. Tour ends." }
            ]
          },
          {
            id: 22003,
            nights: 6,
            duration: "6N/7D",
            price: 94999,
            name: "Tropical Bliss",
            image: "https://cdn.yourholiday.me/static/dynimg/destination/70/600x300/2210601-2210600_mauritius.jpg",
            highlights: [
              "Return flights from Mumbai/Delhi included",
              "Full island circuit - North, South, East & West",
              "Scuba diving & snorkeling at Blue Bay Marine Park",
              "Catamaran sunset cruise",
              "All meals, transfers & sightseeing included"
            ],
            groupSize: "2 - 8 People",
            transport: "Flight + Coach",
            accommodation: "4* Hotels",
            itinerary: [
              { day: 1, title: "Arrival - Mauritius", description: "Arrive & check-in. Evening Grand Baie beach & welcome dinner." },
              { day: 2, title: "North Tour", description: "Grand Baie, Cap Malheureux, Pamplemousses Botanical Garden & Port Louis Caudan." },
              { day: 3, title: "Ile aux Cerfs & Water Sports", description: "Speedboat to Ile aux Cerfs. Snorkeling, parasailing & beach leisure." },
              { day: 4, title: "South Tour", description: "Chamarel Seven Coloured Earths, Chamarel Waterfall & Black River Gorges." },
              { day: 5, title: "Blue Bay Marine Park", description: "Scuba diving & snorkeling at Blue Bay Marine Park. Mahebourg Waterfront." },
              { day: 6, title: "Catamaran Cruise", description: "Full-day catamaran cruise - snorkeling, BBQ lunch & sunset on the ocean." },
              { day: 7, title: "Departure", description: "Breakfast. Transfer to airport. Tour ends." }
            ]
          },
          {
            id: 22004,
            nights: 7,
            duration: "7N/8D",
            price: 124999,
            badge: "Premium",
            name: "Grand Mauritius",
            image: "https://cdn.yourholiday.me/static/dynimg/destination/70/600x300/2210601-2210600_mauritius.jpg",
            highlights: [
              "Return flights from Mumbai/Delhi included",
              "Luxury beach resort stay",
              "Private catamaran & helicopter island tour",
              "Rodrigues Island day trip",
              "All meals, transfers & exclusive experiences"
            ],
            groupSize: "2 - 6 People",
            transport: "Flight + Private Coach",
            accommodation: "5* Luxury Resorts",
            itinerary: [
              { day: 1, title: "Arrival - Mauritius", description: "Luxury resort check-in. Evening Grand Baie beach & welcome dinner." },
              { day: 2, title: "North Tour", description: "Grand Baie, Cap Malheureux, Pamplemousses Botanical Garden & Port Louis." },
              { day: 3, title: "Ile aux Cerfs & Scuba", description: "Private speedboat to Ile aux Cerfs. Scuba diving & snorkeling." },
              { day: 4, title: "South & Le Morne", description: "Chamarel Seven Coloured Earths, Le Morne & underwater waterfall viewpoint." },
              { day: 5, title: "Helicopter Tour", description: "Scenic helicopter flight over the island. Blue Bay Marine Park snorkeling." },
              { day: 6, title: "Rodrigues Island", description: "Day trip to Rodrigues Island - pristine beaches & giant tortoise reserve." },
              { day: 7, title: "Private Catamaran Cruise", description: "Private catamaran sunset cruise. Farewell dinner at beachfront restaurant." },
              { day: 8, title: "Departure", description: "Breakfast. Transfer to airport. Tour ends with beautiful memories." }
            ]
          }
        ]
      },
      "portugal": {
        name: "Portugal",
        tagline: "Land of Explorers - Fado music, golden coastlines & timeless history",
        heroImage: "https://cdn.yourholiday.me/static/dynimg/destination/20/600x300/2750340-2750339_portugal.jpg",
        packages: [
          {
            id: 23001,
            nights: 4,
            duration: "4N/5D",
            price: 59999,
            badge: "Bestseller",
            name: "Lisbon Escape",
            image: "https://cdn.yourholiday.me/static/dynimg/destination/20/600x300/2750340-2750339_portugal.jpg",
            highlights: [
              "Return flights from Mumbai/Delhi included",
              "Lisbon - Belem Tower & Jeronimos Monastery",
              "Sintra - UNESCO palaces & Pena Palace",
              "Alfama district & Fado music evening",
              "All transfers & daily breakfast included"
            ],
            groupSize: "2 - 20 People",
            transport: "Flight + Coach",
            accommodation: "3* / 4* Hotels",
            itinerary: [
              { day: 1, title: "Arrival - Lisbon", description: "Arrive at Lisbon Airport. Check-in. Evening Alfama district walk & Fado music dinner." },
              { day: 2, title: "Lisbon City Tour", description: "Belem Tower, Jeronimos Monastery, Monument to the Discoveries & LX Factory." },
              { day: 3, title: "Sintra Day Trip", description: "Pena Palace, Moorish Castle, Quinta da Regaleira & Sintra village walk." },
              { day: 4, title: "Cascais & Estoril", description: "Cascais fishing village, Estoril Casino & Cabo da Roca - westernmost point of Europe." },
              { day: 5, title: "Departure", description: "Breakfast at hotel. Transfer to Lisbon Airport. Tour ends with beautiful memories." }
            ]
          },
          {
            id: 23002,
            nights: 5,
            duration: "5N/6D",
            price: 77999,
            badge: "Popular",
            name: "Algarve Dreams",
            image: "https://cdn.yourholiday.me/static/dynimg/destination/20/600x300/2750340-2750339_portugal.jpg",
            highlights: [
              "Return flights from Mumbai/Delhi included",
              "Lisbon & Algarve dual coverage",
              "Algarve - Ponta da Piedade golden cliffs",
              "Benagil Sea Cave boat tour",
              "All transfers & daily breakfast included"
            ],
            groupSize: "2 - 20 People",
            transport: "Flight + Coach",
            accommodation: "4* Hotels",
            itinerary: [
              { day: 1, title: "Arrival - Lisbon", description: "Arrive & check-in. Evening Alfama district & Fado music dinner." },
              { day: 2, title: "Lisbon City Tour", description: "Belem Tower, Jeronimos Monastery, Sintra Pena Palace & Cascais." },
              { day: 3, title: "Drive to Algarve", description: "Drive to Algarve. Lagos old town, Ponta da Piedade golden cliffs & Meia Praia beach." },
              { day: 4, title: "Benagil Cave & Albufeira", description: "Benagil Sea Cave boat tour. Albufeira old town & Falesia beach." },
              { day: 5, title: "Sagres & Cape St. Vincent", description: "Sagres Fortress & Cape St. Vincent - southwesternmost point of Europe." },
              { day: 6, title: "Departure", description: "Breakfast. Transfer to Faro Airport. Tour ends." }
            ]
          },
          {
            id: 23003,
            nights: 6,
            duration: "6N/7D",
            price: 99999,
            name: "Portugal Explorer",
            image: "https://cdn.yourholiday.me/static/dynimg/destination/20/600x300/2750340-2750339_portugal.jpg",
            highlights: [
              "Return flights from Mumbai/Delhi included",
              "Lisbon, Porto & Algarve full circuit",
              "Porto - Douro Valley wine tasting",
              "Ribeira district & Dom Luis Bridge",
              "All meals, transfers & sightseeing included"
            ],
            groupSize: "2 - 15 People",
            transport: "Flight + Coach + Train",
            accommodation: "4* Hotels",
            itinerary: [
              { day: 1, title: "Arrival - Lisbon", description: "Arrive & check-in. Evening Alfama district & Fado music dinner." },
              { day: 2, title: "Lisbon City Tour", description: "Belem Tower, Jeronimos Monastery & Monument to the Discoveries." },
              { day: 3, title: "Sintra & Cascais", description: "Pena Palace, Moorish Castle & Cabo da Roca. Cascais fishing village." },
              { day: 4, title: "Train to Porto", description: "Train to Porto. Ribeira district, Dom Luis Bridge & Livraria Lello bookshop." },
              { day: 5, title: "Douro Valley", description: "Douro Valley wine country - vineyard tour, wine tasting & river cruise." },
              { day: 6, title: "Algarve", description: "Drive to Algarve. Ponta da Piedade, Benagil Cave & Albufeira beach." },
              { day: 7, title: "Departure", description: "Breakfast. Transfer to Faro Airport. Tour ends." }
            ]
          },
          {
            id: 23004,
            nights: 7,
            duration: "7N/8D",
            price: 129999,
            badge: "Premium",
            name: "Iberian Journey",
            image: "https://cdn.yourholiday.me/static/dynimg/destination/20/600x300/2750340-2750339_portugal.jpg",
            highlights: [
              "Return flights from Mumbai/Delhi included",
              "Lisbon, Sintra, Porto, Douro Valley & Algarve",
              "Private Douro Valley wine cruise",
              "Azores Islands day trip (optional)",
              "All meals, transfers & exclusive experiences"
            ],
            groupSize: "2 - 10 People",
            transport: "Flight + Private Coach + Train",
            accommodation: "4* / 5* Hotels",
            itinerary: [
              { day: 1, title: "Arrival - Lisbon", description: "Luxury hotel check-in. Evening Alfama district & Fado music dinner." },
              { day: 2, title: "Lisbon City Tour", description: "Belem Tower, Jeronimos Monastery, LX Factory & Chiado neighbourhood." },
              { day: 3, title: "Sintra & Cascais", description: "Pena Palace, Quinta da Regaleira, Moorish Castle & Cabo da Roca." },
              { day: 4, title: "Train to Porto", description: "Train to Porto. Ribeira district, Dom Luis Bridge & Livraria Lello." },
              { day: 5, title: "Douro Valley Private Cruise", description: "Private Douro Valley wine cruise - vineyards, wine tasting & riverside lunch." },
              { day: 6, title: "Algarve", description: "Drive to Algarve. Ponta da Piedade, Benagil Cave & Lagos old town." },
              { day: 7, title: "Sagres & Cape St. Vincent", description: "Sagres Fortress, Cape St. Vincent & Albufeira beach leisure." },
              { day: 8, title: "Departure", description: "Breakfast. Transfer to Faro Airport. Tour ends with beautiful memories." }
            ]
          }
        ]
      },
      "sri lanka": {
        name: "Sri Lanka",
        tagline: "Pearl of the Orient - ancient temples, tea hills & golden beaches",
        heroImage: "https://cdn.yourholiday.me/static/dynimg/destination/93/600x300/2210565-2210564_srilanka.jpg",
        packages: [
          {
            id: 24001,
            nights: 4,
            duration: "4N/5D",
            price: 24999,
            badge: "Bestseller",
            name: "Ceylon Highlights",
            image: "https://cdn.yourholiday.me/static/dynimg/destination/93/600x300/2210565-2210564_srilanka.jpg",
            highlights: [
              "Return flights from Mumbai/Delhi included",
              "Sigiriya Rock Fortress - UNESCO World Heritage",
              "Dambulla Cave Temple & Kandy Temple of Tooth",
              "Nuwara Eliya tea plantation visit",
              "All transfers & daily breakfast included"
            ],
            groupSize: "2 - 20 People",
            transport: "Flight + Coach",
            accommodation: "3* / 4* Hotels",
            itinerary: [
              { day: 1, title: "Arrival - Colombo", description: "Arrive at Bandaranaike International Airport. Check-in. Evening Colombo city drive & welcome dinner." },
              { day: 2, title: "Sigiriya & Dambulla", description: "Sigiriya Rock Fortress climb. Dambulla Cave Temple with ancient Buddhist murals." },
              { day: 3, title: "Kandy", description: "Drive to Kandy. Temple of the Sacred Tooth Relic, Kandy Lake & cultural dance show." },
              { day: 4, title: "Nuwara Eliya Tea Country", description: "Drive through tea plantations. Tea factory visit & tasting. Gregory Lake walk." },
              { day: 5, title: "Departure", description: "Breakfast at hotel. Transfer to Colombo Airport. Tour ends with beautiful memories." }
            ]
          },
          {
            id: 24002,
            nights: 5,
            duration: "5N/6D",
            price: 32999,
            badge: "Popular",
            name: "Tea Trail",
            image: "https://cdn.yourholiday.me/static/dynimg/destination/93/600x300/2210565-2210564_srilanka.jpg",
            highlights: [
              "Return flights from Mumbai/Delhi included",
              "Sigiriya, Kandy & Nuwara Eliya coverage",
              "Yala National Park - leopard & elephant safari",
              "Bentota beach & water sports",
              "All transfers & daily breakfast included"
            ],
            groupSize: "2 - 20 People",
            transport: "Flight + Coach",
            accommodation: "4* Hotels",
            itinerary: [
              { day: 1, title: "Arrival - Colombo", description: "Arrive & check-in. Evening Colombo city drive & welcome dinner." },
              { day: 2, title: "Sigiriya & Dambulla", description: "Sigiriya Rock Fortress & Dambulla Cave Temple." },
              { day: 3, title: "Kandy & Tea Country", description: "Temple of the Tooth, Kandy Lake & Nuwara Eliya tea plantation." },
              { day: 4, title: "Yala National Park", description: "Drive to Yala. Jeep safari - leopards, elephants, crocodiles & exotic birds." },
              { day: 5, title: "Bentota Beach", description: "Drive to Bentota. Beach leisure, water sports & Madu River boat safari." },
              { day: 6, title: "Departure", description: "Breakfast. Transfer to Colombo Airport. Tour ends." }
            ]
          },
          {
            id: 24003,
            nights: 6,
            duration: "6N/7D",
            price: 42999,
            name: "Sri Lanka Explorer",
            image: "https://cdn.yourholiday.me/static/dynimg/destination/93/600x300/2210565-2210564_srilanka.jpg",
            highlights: [
              "Return flights from Mumbai/Delhi included",
              "Colombo, Sigiriya, Kandy, Nuwara Eliya & Galle",
              "Galle Fort - UNESCO Dutch colonial heritage",
              "Whale watching at Mirissa",
              "All meals, transfers & sightseeing included"
            ],
            groupSize: "2 - 15 People",
            transport: "Flight + Coach",
            accommodation: "4* Hotels",
            itinerary: [
              { day: 1, title: "Arrival - Colombo", description: "Arrive & check-in. Evening Colombo city drive & welcome dinner." },
              { day: 2, title: "Sigiriya & Dambulla", description: "Sigiriya Rock Fortress & Dambulla Cave Temple." },
              { day: 3, title: "Kandy", description: "Temple of the Tooth, Kandy Lake, Peradeniya Botanical Gardens & cultural show." },
              { day: 4, title: "Nuwara Eliya", description: "Tea plantation & factory visit. Gregory Lake & Horton Plains National Park." },
              { day: 5, title: "Galle Fort", description: "Drive to Galle. UNESCO Galle Fort, Dutch Reformed Church & lighthouse." },
              { day: 6, title: "Mirissa Whale Watching", description: "Morning whale watching cruise at Mirissa. Afternoon Unawatuna beach." },
              { day: 7, title: "Departure", description: "Breakfast. Transfer to Colombo Airport. Tour ends." }
            ]
          },
          {
            id: 24004,
            nights: 7,
            duration: "7N/8D",
            price: 56999,
            badge: "Premium",
            name: "Grand Ceylon",
            image: "https://cdn.yourholiday.me/static/dynimg/destination/93/600x300/2210565-2210564_srilanka.jpg",
            highlights: [
              "Return flights from Mumbai/Delhi included",
              "Colombo, Sigiriya, Kandy, Nuwara Eliya, Yala & Galle",
              "Yala National Park leopard safari",
              "Luxury train ride - Kandy to Ella",
              "All meals, transfers & exclusive experiences"
            ],
            groupSize: "2 - 10 People",
            transport: "Flight + Private Coach + Train",
            accommodation: "4* / 5* Hotels",
            itinerary: [
              { day: 1, title: "Arrival - Colombo", description: "Luxury hotel check-in. Evening Colombo city drive & welcome dinner." },
              { day: 2, title: "Sigiriya & Dambulla", description: "Sigiriya Rock Fortress & Dambulla Cave Temple." },
              { day: 3, title: "Kandy", description: "Temple of the Tooth, Kandy Lake & Peradeniya Botanical Gardens." },
              { day: 4, title: "Scenic Train to Ella", description: "Luxury train ride Kandy to Ella - one of the world's most scenic rail journeys." },
              { day: 5, title: "Ella & Nuwara Eliya", description: "Nine Arch Bridge, Little Adam's Peak trek & tea plantation visit." },
              { day: 6, title: "Yala National Park", description: "Drive to Yala. Jeep safari - leopards, elephants & exotic wildlife." },
              { day: 7, title: "Galle & Mirissa", description: "Galle Fort UNESCO heritage. Mirissa whale watching & Unawatuna beach." },
              { day: 8, title: "Departure", description: "Breakfast. Transfer to Colombo Airport. Tour ends with beautiful memories." }
            ]
          }
        ]
      }
    };
  }
  static {
    this.\u0275fac = function DataService_Factory(t) {
      return new (t || _DataService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DataService, factory: _DataService.\u0275fac, providedIn: "root" });
  }
};

// node_modules/@angular/forms/fesm2022/forms.mjs
var BaseControlValueAccessor = class _BaseControlValueAccessor {
  constructor(_renderer, _elementRef) {
    this._renderer = _renderer;
    this._elementRef = _elementRef;
    this.onChange = (_) => {
    };
    this.onTouched = () => {
    };
  }
  /**
   * Helper method that sets a property on a target element using the current Renderer
   * implementation.
   * @nodoc
   */
  setProperty(key, value) {
    this._renderer.setProperty(this._elementRef.nativeElement, key, value);
  }
  /**
   * Registers a function called when the control is touched.
   * @nodoc
   */
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  /**
   * Registers a function called when the control value changes.
   * @nodoc
   */
  registerOnChange(fn) {
    this.onChange = fn;
  }
  /**
   * Sets the "disabled" property on the range input element.
   * @nodoc
   */
  setDisabledState(isDisabled) {
    this.setProperty("disabled", isDisabled);
  }
  static {
    this.\u0275fac = function BaseControlValueAccessor_Factory(t) {
      return new (t || _BaseControlValueAccessor)(\u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ElementRef));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _BaseControlValueAccessor
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BaseControlValueAccessor, [{
    type: Directive
  }], () => [{
    type: Renderer2
  }, {
    type: ElementRef
  }], null);
})();
var BuiltInControlValueAccessor = class _BuiltInControlValueAccessor extends BaseControlValueAccessor {
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275BuiltInControlValueAccessor_BaseFactory;
      return function BuiltInControlValueAccessor_Factory(t) {
        return (\u0275BuiltInControlValueAccessor_BaseFactory || (\u0275BuiltInControlValueAccessor_BaseFactory = \u0275\u0275getInheritedFactory(_BuiltInControlValueAccessor)))(t || _BuiltInControlValueAccessor);
      };
    })();
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _BuiltInControlValueAccessor,
      features: [\u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BuiltInControlValueAccessor, [{
    type: Directive
  }], null, null);
})();
var NG_VALUE_ACCESSOR = new InjectionToken(ngDevMode ? "NgValueAccessor" : "");
var CHECKBOX_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CheckboxControlValueAccessor),
  multi: true
};
var CheckboxControlValueAccessor = class _CheckboxControlValueAccessor extends BuiltInControlValueAccessor {
  /**
   * Sets the "checked" property on the input element.
   * @nodoc
   */
  writeValue(value) {
    this.setProperty("checked", value);
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275CheckboxControlValueAccessor_BaseFactory;
      return function CheckboxControlValueAccessor_Factory(t) {
        return (\u0275CheckboxControlValueAccessor_BaseFactory || (\u0275CheckboxControlValueAccessor_BaseFactory = \u0275\u0275getInheritedFactory(_CheckboxControlValueAccessor)))(t || _CheckboxControlValueAccessor);
      };
    })();
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _CheckboxControlValueAccessor,
      selectors: [["input", "type", "checkbox", "formControlName", ""], ["input", "type", "checkbox", "formControl", ""], ["input", "type", "checkbox", "ngModel", ""]],
      hostBindings: function CheckboxControlValueAccessor_HostBindings(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275listener("change", function CheckboxControlValueAccessor_change_HostBindingHandler($event) {
            return ctx.onChange($event.target.checked);
          })("blur", function CheckboxControlValueAccessor_blur_HostBindingHandler() {
            return ctx.onTouched();
          });
        }
      },
      features: [\u0275\u0275ProvidersFeature([CHECKBOX_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckboxControlValueAccessor, [{
    type: Directive,
    args: [{
      selector: "input[type=checkbox][formControlName],input[type=checkbox][formControl],input[type=checkbox][ngModel]",
      host: {
        "(change)": "onChange($event.target.checked)",
        "(blur)": "onTouched()"
      },
      providers: [CHECKBOX_VALUE_ACCESSOR]
    }]
  }], null, null);
})();
var DEFAULT_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => DefaultValueAccessor),
  multi: true
};
function _isAndroid() {
  const userAgent = getDOM() ? getDOM().getUserAgent() : "";
  return /android (\d+)/.test(userAgent.toLowerCase());
}
var COMPOSITION_BUFFER_MODE = new InjectionToken(ngDevMode ? "CompositionEventMode" : "");
var DefaultValueAccessor = class _DefaultValueAccessor extends BaseControlValueAccessor {
  constructor(renderer, elementRef, _compositionMode) {
    super(renderer, elementRef);
    this._compositionMode = _compositionMode;
    this._composing = false;
    if (this._compositionMode == null) {
      this._compositionMode = !_isAndroid();
    }
  }
  /**
   * Sets the "value" property on the input element.
   * @nodoc
   */
  writeValue(value) {
    const normalizedValue = value == null ? "" : value;
    this.setProperty("value", normalizedValue);
  }
  /** @internal */
  _handleInput(value) {
    if (!this._compositionMode || this._compositionMode && !this._composing) {
      this.onChange(value);
    }
  }
  /** @internal */
  _compositionStart() {
    this._composing = true;
  }
  /** @internal */
  _compositionEnd(value) {
    this._composing = false;
    this._compositionMode && this.onChange(value);
  }
  static {
    this.\u0275fac = function DefaultValueAccessor_Factory(t) {
      return new (t || _DefaultValueAccessor)(\u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(COMPOSITION_BUFFER_MODE, 8));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _DefaultValueAccessor,
      selectors: [["input", "formControlName", "", 3, "type", "checkbox"], ["textarea", "formControlName", ""], ["input", "formControl", "", 3, "type", "checkbox"], ["textarea", "formControl", ""], ["input", "ngModel", "", 3, "type", "checkbox"], ["textarea", "ngModel", ""], ["", "ngDefaultControl", ""]],
      hostBindings: function DefaultValueAccessor_HostBindings(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275listener("input", function DefaultValueAccessor_input_HostBindingHandler($event) {
            return ctx._handleInput($event.target.value);
          })("blur", function DefaultValueAccessor_blur_HostBindingHandler() {
            return ctx.onTouched();
          })("compositionstart", function DefaultValueAccessor_compositionstart_HostBindingHandler() {
            return ctx._compositionStart();
          })("compositionend", function DefaultValueAccessor_compositionend_HostBindingHandler($event) {
            return ctx._compositionEnd($event.target.value);
          });
        }
      },
      features: [\u0275\u0275ProvidersFeature([DEFAULT_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DefaultValueAccessor, [{
    type: Directive,
    args: [{
      selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]",
      // TODO: vsavkin replace the above selector with the one below it once
      // https://github.com/angular/angular/issues/3011 is implemented
      // selector: '[ngModel],[formControl],[formControlName]',
      host: {
        "(input)": "$any(this)._handleInput($event.target.value)",
        "(blur)": "onTouched()",
        "(compositionstart)": "$any(this)._compositionStart()",
        "(compositionend)": "$any(this)._compositionEnd($event.target.value)"
      },
      providers: [DEFAULT_VALUE_ACCESSOR]
    }]
  }], () => [{
    type: Renderer2
  }, {
    type: ElementRef
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [COMPOSITION_BUFFER_MODE]
    }]
  }], null);
})();
function isEmptyInputValue(value) {
  return value == null || (typeof value === "string" || Array.isArray(value)) && value.length === 0;
}
function hasValidLength(value) {
  return value != null && typeof value.length === "number";
}
var NG_VALIDATORS = new InjectionToken(ngDevMode ? "NgValidators" : "");
var NG_ASYNC_VALIDATORS = new InjectionToken(ngDevMode ? "NgAsyncValidators" : "");
var EMAIL_REGEXP = /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
function minValidator(min) {
  return (control) => {
    if (isEmptyInputValue(control.value) || isEmptyInputValue(min)) {
      return null;
    }
    const value = parseFloat(control.value);
    return !isNaN(value) && value < min ? {
      "min": {
        "min": min,
        "actual": control.value
      }
    } : null;
  };
}
function maxValidator(max) {
  return (control) => {
    if (isEmptyInputValue(control.value) || isEmptyInputValue(max)) {
      return null;
    }
    const value = parseFloat(control.value);
    return !isNaN(value) && value > max ? {
      "max": {
        "max": max,
        "actual": control.value
      }
    } : null;
  };
}
function requiredValidator(control) {
  return isEmptyInputValue(control.value) ? {
    "required": true
  } : null;
}
function requiredTrueValidator(control) {
  return control.value === true ? null : {
    "required": true
  };
}
function emailValidator(control) {
  if (isEmptyInputValue(control.value)) {
    return null;
  }
  return EMAIL_REGEXP.test(control.value) ? null : {
    "email": true
  };
}
function minLengthValidator(minLength) {
  return (control) => {
    if (isEmptyInputValue(control.value) || !hasValidLength(control.value)) {
      return null;
    }
    return control.value.length < minLength ? {
      "minlength": {
        "requiredLength": minLength,
        "actualLength": control.value.length
      }
    } : null;
  };
}
function maxLengthValidator(maxLength) {
  return (control) => {
    return hasValidLength(control.value) && control.value.length > maxLength ? {
      "maxlength": {
        "requiredLength": maxLength,
        "actualLength": control.value.length
      }
    } : null;
  };
}
function patternValidator(pattern) {
  if (!pattern)
    return nullValidator;
  let regex;
  let regexStr;
  if (typeof pattern === "string") {
    regexStr = "";
    if (pattern.charAt(0) !== "^")
      regexStr += "^";
    regexStr += pattern;
    if (pattern.charAt(pattern.length - 1) !== "$")
      regexStr += "$";
    regex = new RegExp(regexStr);
  } else {
    regexStr = pattern.toString();
    regex = pattern;
  }
  return (control) => {
    if (isEmptyInputValue(control.value)) {
      return null;
    }
    const value = control.value;
    return regex.test(value) ? null : {
      "pattern": {
        "requiredPattern": regexStr,
        "actualValue": value
      }
    };
  };
}
function nullValidator(control) {
  return null;
}
function isPresent(o) {
  return o != null;
}
function toObservable(value) {
  const obs = isPromise(value) ? from(value) : value;
  if ((typeof ngDevMode === "undefined" || ngDevMode) && !isSubscribable(obs)) {
    let errorMessage = `Expected async validator to return Promise or Observable.`;
    if (typeof value === "object") {
      errorMessage += " Are you using a synchronous validator where an async validator is expected?";
    }
    throw new RuntimeError(-1101, errorMessage);
  }
  return obs;
}
function mergeErrors(arrayOfErrors) {
  let res = {};
  arrayOfErrors.forEach((errors) => {
    res = errors != null ? __spreadValues(__spreadValues({}, res), errors) : res;
  });
  return Object.keys(res).length === 0 ? null : res;
}
function executeValidators(control, validators) {
  return validators.map((validator) => validator(control));
}
function isValidatorFn(validator) {
  return !validator.validate;
}
function normalizeValidators(validators) {
  return validators.map((validator) => {
    return isValidatorFn(validator) ? validator : (c) => validator.validate(c);
  });
}
function compose(validators) {
  if (!validators)
    return null;
  const presentValidators = validators.filter(isPresent);
  if (presentValidators.length == 0)
    return null;
  return function(control) {
    return mergeErrors(executeValidators(control, presentValidators));
  };
}
function composeValidators(validators) {
  return validators != null ? compose(normalizeValidators(validators)) : null;
}
function composeAsync(validators) {
  if (!validators)
    return null;
  const presentValidators = validators.filter(isPresent);
  if (presentValidators.length == 0)
    return null;
  return function(control) {
    const observables = executeValidators(control, presentValidators).map(toObservable);
    return forkJoin(observables).pipe(map(mergeErrors));
  };
}
function composeAsyncValidators(validators) {
  return validators != null ? composeAsync(normalizeValidators(validators)) : null;
}
function mergeValidators(controlValidators, dirValidator) {
  if (controlValidators === null)
    return [dirValidator];
  return Array.isArray(controlValidators) ? [...controlValidators, dirValidator] : [controlValidators, dirValidator];
}
function getControlValidators(control) {
  return control._rawValidators;
}
function getControlAsyncValidators(control) {
  return control._rawAsyncValidators;
}
function makeValidatorsArray(validators) {
  if (!validators)
    return [];
  return Array.isArray(validators) ? validators : [validators];
}
function hasValidator(validators, validator) {
  return Array.isArray(validators) ? validators.includes(validator) : validators === validator;
}
function addValidators(validators, currentValidators) {
  const current = makeValidatorsArray(currentValidators);
  const validatorsToAdd = makeValidatorsArray(validators);
  validatorsToAdd.forEach((v) => {
    if (!hasValidator(current, v)) {
      current.push(v);
    }
  });
  return current;
}
function removeValidators(validators, currentValidators) {
  return makeValidatorsArray(currentValidators).filter((v) => !hasValidator(validators, v));
}
var AbstractControlDirective = class {
  constructor() {
    this._rawValidators = [];
    this._rawAsyncValidators = [];
    this._onDestroyCallbacks = [];
  }
  /**
   * @description
   * Reports the value of the control if it is present, otherwise null.
   */
  get value() {
    return this.control ? this.control.value : null;
  }
  /**
   * @description
   * Reports whether the control is valid. A control is considered valid if no
   * validation errors exist with the current value.
   * If the control is not present, null is returned.
   */
  get valid() {
    return this.control ? this.control.valid : null;
  }
  /**
   * @description
   * Reports whether the control is invalid, meaning that an error exists in the input value.
   * If the control is not present, null is returned.
   */
  get invalid() {
    return this.control ? this.control.invalid : null;
  }
  /**
   * @description
   * Reports whether a control is pending, meaning that async validation is occurring and
   * errors are not yet available for the input value. If the control is not present, null is
   * returned.
   */
  get pending() {
    return this.control ? this.control.pending : null;
  }
  /**
   * @description
   * Reports whether the control is disabled, meaning that the control is disabled
   * in the UI and is exempt from validation checks and excluded from aggregate
   * values of ancestor controls. If the control is not present, null is returned.
   */
  get disabled() {
    return this.control ? this.control.disabled : null;
  }
  /**
   * @description
   * Reports whether the control is enabled, meaning that the control is included in ancestor
   * calculations of validity or value. If the control is not present, null is returned.
   */
  get enabled() {
    return this.control ? this.control.enabled : null;
  }
  /**
   * @description
   * Reports the control's validation errors. If the control is not present, null is returned.
   */
  get errors() {
    return this.control ? this.control.errors : null;
  }
  /**
   * @description
   * Reports whether the control is pristine, meaning that the user has not yet changed
   * the value in the UI. If the control is not present, null is returned.
   */
  get pristine() {
    return this.control ? this.control.pristine : null;
  }
  /**
   * @description
   * Reports whether the control is dirty, meaning that the user has changed
   * the value in the UI. If the control is not present, null is returned.
   */
  get dirty() {
    return this.control ? this.control.dirty : null;
  }
  /**
   * @description
   * Reports whether the control is touched, meaning that the user has triggered
   * a `blur` event on it. If the control is not present, null is returned.
   */
  get touched() {
    return this.control ? this.control.touched : null;
  }
  /**
   * @description
   * Reports the validation status of the control. Possible values include:
   * 'VALID', 'INVALID', 'DISABLED', and 'PENDING'.
   * If the control is not present, null is returned.
   */
  get status() {
    return this.control ? this.control.status : null;
  }
  /**
   * @description
   * Reports whether the control is untouched, meaning that the user has not yet triggered
   * a `blur` event on it. If the control is not present, null is returned.
   */
  get untouched() {
    return this.control ? this.control.untouched : null;
  }
  /**
   * @description
   * Returns a multicasting observable that emits a validation status whenever it is
   * calculated for the control. If the control is not present, null is returned.
   */
  get statusChanges() {
    return this.control ? this.control.statusChanges : null;
  }
  /**
   * @description
   * Returns a multicasting observable of value changes for the control that emits every time the
   * value of the control changes in the UI or programmatically.
   * If the control is not present, null is returned.
   */
  get valueChanges() {
    return this.control ? this.control.valueChanges : null;
  }
  /**
   * @description
   * Returns an array that represents the path from the top-level form to this control.
   * Each index is the string name of the control on that level.
   */
  get path() {
    return null;
  }
  /**
   * Sets synchronous validators for this directive.
   * @internal
   */
  _setValidators(validators) {
    this._rawValidators = validators || [];
    this._composedValidatorFn = composeValidators(this._rawValidators);
  }
  /**
   * Sets asynchronous validators for this directive.
   * @internal
   */
  _setAsyncValidators(validators) {
    this._rawAsyncValidators = validators || [];
    this._composedAsyncValidatorFn = composeAsyncValidators(this._rawAsyncValidators);
  }
  /**
   * @description
   * Synchronous validator function composed of all the synchronous validators registered with this
   * directive.
   */
  get validator() {
    return this._composedValidatorFn || null;
  }
  /**
   * @description
   * Asynchronous validator function composed of all the asynchronous validators registered with
   * this directive.
   */
  get asyncValidator() {
    return this._composedAsyncValidatorFn || null;
  }
  /**
   * Internal function to register callbacks that should be invoked
   * when directive instance is being destroyed.
   * @internal
   */
  _registerOnDestroy(fn) {
    this._onDestroyCallbacks.push(fn);
  }
  /**
   * Internal function to invoke all registered "on destroy" callbacks.
   * Note: calling this function also clears the list of callbacks.
   * @internal
   */
  _invokeOnDestroyCallbacks() {
    this._onDestroyCallbacks.forEach((fn) => fn());
    this._onDestroyCallbacks = [];
  }
  /**
   * @description
   * Resets the control with the provided value if the control is present.
   */
  reset(value = void 0) {
    if (this.control)
      this.control.reset(value);
  }
  /**
   * @description
   * Reports whether the control with the given path has the error specified.
   *
   * @param errorCode The code of the error to check
   * @param path A list of control names that designates how to move from the current control
   * to the control that should be queried for errors.
   *
   * @usageNotes
   * For example, for the following `FormGroup`:
   *
   * ```
   * form = new FormGroup({
   *   address: new FormGroup({ street: new FormControl() })
   * });
   * ```
   *
   * The path to the 'street' control from the root form would be 'address' -> 'street'.
   *
   * It can be provided to this method in one of two formats:
   *
   * 1. An array of string control names, e.g. `['address', 'street']`
   * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
   *
   * If no path is given, this method checks for the error on the current control.
   *
   * @returns whether the given error is present in the control at the given path.
   *
   * If the control is not present, false is returned.
   */
  hasError(errorCode, path) {
    return this.control ? this.control.hasError(errorCode, path) : false;
  }
  /**
   * @description
   * Reports error data for the control with the given path.
   *
   * @param errorCode The code of the error to check
   * @param path A list of control names that designates how to move from the current control
   * to the control that should be queried for errors.
   *
   * @usageNotes
   * For example, for the following `FormGroup`:
   *
   * ```
   * form = new FormGroup({
   *   address: new FormGroup({ street: new FormControl() })
   * });
   * ```
   *
   * The path to the 'street' control from the root form would be 'address' -> 'street'.
   *
   * It can be provided to this method in one of two formats:
   *
   * 1. An array of string control names, e.g. `['address', 'street']`
   * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
   *
   * @returns error data for that particular error. If the control or error is not present,
   * null is returned.
   */
  getError(errorCode, path) {
    return this.control ? this.control.getError(errorCode, path) : null;
  }
};
var ControlContainer = class extends AbstractControlDirective {
  /**
   * @description
   * The top-level form directive for the control.
   */
  get formDirective() {
    return null;
  }
  /**
   * @description
   * The path to this group.
   */
  get path() {
    return null;
  }
};
var NgControl = class extends AbstractControlDirective {
  constructor() {
    super(...arguments);
    this._parent = null;
    this.name = null;
    this.valueAccessor = null;
  }
};
var AbstractControlStatus = class {
  constructor(cd) {
    this._cd = cd;
  }
  get isTouched() {
    return !!this._cd?.control?.touched;
  }
  get isUntouched() {
    return !!this._cd?.control?.untouched;
  }
  get isPristine() {
    return !!this._cd?.control?.pristine;
  }
  get isDirty() {
    return !!this._cd?.control?.dirty;
  }
  get isValid() {
    return !!this._cd?.control?.valid;
  }
  get isInvalid() {
    return !!this._cd?.control?.invalid;
  }
  get isPending() {
    return !!this._cd?.control?.pending;
  }
  get isSubmitted() {
    return !!this._cd?.submitted;
  }
};
var ngControlStatusHost = {
  "[class.ng-untouched]": "isUntouched",
  "[class.ng-touched]": "isTouched",
  "[class.ng-pristine]": "isPristine",
  "[class.ng-dirty]": "isDirty",
  "[class.ng-valid]": "isValid",
  "[class.ng-invalid]": "isInvalid",
  "[class.ng-pending]": "isPending"
};
var ngGroupStatusHost = __spreadProps(__spreadValues({}, ngControlStatusHost), {
  "[class.ng-submitted]": "isSubmitted"
});
var NgControlStatus = class _NgControlStatus extends AbstractControlStatus {
  constructor(cd) {
    super(cd);
  }
  static {
    this.\u0275fac = function NgControlStatus_Factory(t) {
      return new (t || _NgControlStatus)(\u0275\u0275directiveInject(NgControl, 2));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _NgControlStatus,
      selectors: [["", "formControlName", ""], ["", "ngModel", ""], ["", "formControl", ""]],
      hostVars: 14,
      hostBindings: function NgControlStatus_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275classProp("ng-untouched", ctx.isUntouched)("ng-touched", ctx.isTouched)("ng-pristine", ctx.isPristine)("ng-dirty", ctx.isDirty)("ng-valid", ctx.isValid)("ng-invalid", ctx.isInvalid)("ng-pending", ctx.isPending);
        }
      },
      features: [\u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgControlStatus, [{
    type: Directive,
    args: [{
      selector: "[formControlName],[ngModel],[formControl]",
      host: ngControlStatusHost
    }]
  }], () => [{
    type: NgControl,
    decorators: [{
      type: Self
    }]
  }], null);
})();
var NgControlStatusGroup = class _NgControlStatusGroup extends AbstractControlStatus {
  constructor(cd) {
    super(cd);
  }
  static {
    this.\u0275fac = function NgControlStatusGroup_Factory(t) {
      return new (t || _NgControlStatusGroup)(\u0275\u0275directiveInject(ControlContainer, 10));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _NgControlStatusGroup,
      selectors: [["", "formGroupName", ""], ["", "formArrayName", ""], ["", "ngModelGroup", ""], ["", "formGroup", ""], ["form", 3, "ngNoForm", ""], ["", "ngForm", ""]],
      hostVars: 16,
      hostBindings: function NgControlStatusGroup_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275classProp("ng-untouched", ctx.isUntouched)("ng-touched", ctx.isTouched)("ng-pristine", ctx.isPristine)("ng-dirty", ctx.isDirty)("ng-valid", ctx.isValid)("ng-invalid", ctx.isInvalid)("ng-pending", ctx.isPending)("ng-submitted", ctx.isSubmitted);
        }
      },
      features: [\u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgControlStatusGroup, [{
    type: Directive,
    args: [{
      selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]",
      host: ngGroupStatusHost
    }]
  }], () => [{
    type: ControlContainer,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }]
  }], null);
})();
var formControlNameExample = `
  <div [formGroup]="myGroup">
    <input formControlName="firstName">
  </div>

  In your class:

  this.myGroup = new FormGroup({
      firstName: new FormControl()
  });`;
var formGroupNameExample = `
  <div [formGroup]="myGroup">
      <div formGroupName="person">
        <input formControlName="firstName">
      </div>
  </div>

  In your class:

  this.myGroup = new FormGroup({
      person: new FormGroup({ firstName: new FormControl() })
  });`;
var formArrayNameExample = `
  <div [formGroup]="myGroup">
    <div formArrayName="cities">
      <div *ngFor="let city of cityArray.controls; index as i">
        <input [formControlName]="i">
      </div>
    </div>
  </div>

  In your class:

  this.cityArray = new FormArray([new FormControl('SF')]);
  this.myGroup = new FormGroup({
    cities: this.cityArray
  });`;
var ngModelGroupExample = `
  <form>
      <div ngModelGroup="person">
        <input [(ngModel)]="person.name" name="firstName">
      </div>
  </form>`;
var ngModelWithFormGroupExample = `
  <div [formGroup]="myGroup">
      <input formControlName="firstName">
      <input [(ngModel)]="showMoreControls" [ngModelOptions]="{standalone: true}">
  </div>
`;
function controlParentException() {
  return new RuntimeError(1050, `formControlName must be used with a parent formGroup directive.  You'll want to add a formGroup
      directive and pass it an existing FormGroup instance (you can create one in your class).

    Example:

    ${formControlNameExample}`);
}
function ngModelGroupException() {
  return new RuntimeError(1051, `formControlName cannot be used with an ngModelGroup parent. It is only compatible with parents
      that also have a "form" prefix: formGroupName, formArrayName, or formGroup.

      Option 1:  Update the parent to be formGroupName (reactive form strategy)

      ${formGroupNameExample}

      Option 2: Use ngModel instead of formControlName (template-driven strategy)

      ${ngModelGroupExample}`);
}
function missingFormException() {
  return new RuntimeError(1052, `formGroup expects a FormGroup instance. Please pass one in.

      Example:

      ${formControlNameExample}`);
}
function groupParentException() {
  return new RuntimeError(1053, `formGroupName must be used with a parent formGroup directive.  You'll want to add a formGroup
    directive and pass it an existing FormGroup instance (you can create one in your class).

    Example:

    ${formGroupNameExample}`);
}
function arrayParentException() {
  return new RuntimeError(1054, `formArrayName must be used with a parent formGroup directive.  You'll want to add a formGroup
      directive and pass it an existing FormGroup instance (you can create one in your class).

      Example:

      ${formArrayNameExample}`);
}
var disabledAttrWarning = `
  It looks like you're using the disabled attribute with a reactive form directive. If you set disabled to true
  when you set up this control in your component class, the disabled attribute will actually be set in the DOM for
  you. We recommend using this approach to avoid 'changed after checked' errors.

  Example:
  // Specify the \`disabled\` property at control creation time:
  form = new FormGroup({
    first: new FormControl({value: 'Nancy', disabled: true}, Validators.required),
    last: new FormControl('Drew', Validators.required)
  });

  // Controls can also be enabled/disabled after creation:
  form.get('first')?.enable();
  form.get('last')?.disable();
`;
var asyncValidatorsDroppedWithOptsWarning = `
  It looks like you're constructing using a FormControl with both an options argument and an
  async validators argument. Mixing these arguments will cause your async validators to be dropped.
  You should either put all your validators in the options object, or in separate validators
  arguments. For example:

  // Using validators arguments
  fc = new FormControl(42, Validators.required, myAsyncValidator);

  // Using AbstractControlOptions
  fc = new FormControl(42, {validators: Validators.required, asyncValidators: myAV});

  // Do NOT mix them: async validators will be dropped!
  fc = new FormControl(42, {validators: Validators.required}, /* Oops! */ myAsyncValidator);
`;
function ngModelWarning(directiveName) {
  return `
  It looks like you're using ngModel on the same form field as ${directiveName}.
  Support for using the ngModel input property and ngModelChange event with
  reactive form directives has been deprecated in Angular v6 and will be removed
  in a future version of Angular.

  For more information on this, see our API docs here:
  https://angular.io/api/forms/${directiveName === "formControl" ? "FormControlDirective" : "FormControlName"}#use-with-ngmodel
  `;
}
function describeKey(isFormGroup, key) {
  return isFormGroup ? `with name: '${key}'` : `at index: ${key}`;
}
function noControlsError(isFormGroup) {
  return `
    There are no form controls registered with this ${isFormGroup ? "group" : "array"} yet. If you're using ngModel,
    you may want to check next tick (e.g. use setTimeout).
  `;
}
function missingControlError(isFormGroup, key) {
  return `Cannot find form control ${describeKey(isFormGroup, key)}`;
}
function missingControlValueError(isFormGroup, key) {
  return `Must supply a value for form control ${describeKey(isFormGroup, key)}`;
}
var VALID = "VALID";
var INVALID = "INVALID";
var PENDING = "PENDING";
var DISABLED = "DISABLED";
function pickValidators(validatorOrOpts) {
  return (isOptionsObj(validatorOrOpts) ? validatorOrOpts.validators : validatorOrOpts) || null;
}
function coerceToValidator(validator) {
  return Array.isArray(validator) ? composeValidators(validator) : validator || null;
}
function pickAsyncValidators(asyncValidator, validatorOrOpts) {
  if (typeof ngDevMode === "undefined" || ngDevMode) {
    if (isOptionsObj(validatorOrOpts) && asyncValidator) {
      console.warn(asyncValidatorsDroppedWithOptsWarning);
    }
  }
  return (isOptionsObj(validatorOrOpts) ? validatorOrOpts.asyncValidators : asyncValidator) || null;
}
function coerceToAsyncValidator(asyncValidator) {
  return Array.isArray(asyncValidator) ? composeAsyncValidators(asyncValidator) : asyncValidator || null;
}
function isOptionsObj(validatorOrOpts) {
  return validatorOrOpts != null && !Array.isArray(validatorOrOpts) && typeof validatorOrOpts === "object";
}
function assertControlPresent(parent, isGroup, key) {
  const controls = parent.controls;
  const collection = isGroup ? Object.keys(controls) : controls;
  if (!collection.length) {
    throw new RuntimeError(1e3, typeof ngDevMode === "undefined" || ngDevMode ? noControlsError(isGroup) : "");
  }
  if (!controls[key]) {
    throw new RuntimeError(1001, typeof ngDevMode === "undefined" || ngDevMode ? missingControlError(isGroup, key) : "");
  }
}
function assertAllValuesPresent(control, isGroup, value) {
  control._forEachChild((_, key) => {
    if (value[key] === void 0) {
      throw new RuntimeError(1002, typeof ngDevMode === "undefined" || ngDevMode ? missingControlValueError(isGroup, key) : "");
    }
  });
}
var AbstractControl = class {
  /**
   * Initialize the AbstractControl instance.
   *
   * @param validators The function or array of functions that is used to determine the validity of
   *     this control synchronously.
   * @param asyncValidators The function or array of functions that is used to determine validity of
   *     this control asynchronously.
   */
  constructor(validators, asyncValidators) {
    this._pendingDirty = false;
    this._hasOwnPendingAsyncValidator = false;
    this._pendingTouched = false;
    this._onCollectionChange = () => {
    };
    this._parent = null;
    this.pristine = true;
    this.touched = false;
    this._onDisabledChange = [];
    this._assignValidators(validators);
    this._assignAsyncValidators(asyncValidators);
  }
  /**
   * Returns the function that is used to determine the validity of this control synchronously.
   * If multiple validators have been added, this will be a single composed function.
   * See `Validators.compose()` for additional information.
   */
  get validator() {
    return this._composedValidatorFn;
  }
  set validator(validatorFn) {
    this._rawValidators = this._composedValidatorFn = validatorFn;
  }
  /**
   * Returns the function that is used to determine the validity of this control asynchronously.
   * If multiple validators have been added, this will be a single composed function.
   * See `Validators.compose()` for additional information.
   */
  get asyncValidator() {
    return this._composedAsyncValidatorFn;
  }
  set asyncValidator(asyncValidatorFn) {
    this._rawAsyncValidators = this._composedAsyncValidatorFn = asyncValidatorFn;
  }
  /**
   * The parent control.
   */
  get parent() {
    return this._parent;
  }
  /**
   * A control is `valid` when its `status` is `VALID`.
   *
   * @see {@link AbstractControl.status}
   *
   * @returns True if the control has passed all of its validation tests,
   * false otherwise.
   */
  get valid() {
    return this.status === VALID;
  }
  /**
   * A control is `invalid` when its `status` is `INVALID`.
   *
   * @see {@link AbstractControl.status}
   *
   * @returns True if this control has failed one or more of its validation checks,
   * false otherwise.
   */
  get invalid() {
    return this.status === INVALID;
  }
  /**
   * A control is `pending` when its `status` is `PENDING`.
   *
   * @see {@link AbstractControl.status}
   *
   * @returns True if this control is in the process of conducting a validation check,
   * false otherwise.
   */
  get pending() {
    return this.status == PENDING;
  }
  /**
   * A control is `disabled` when its `status` is `DISABLED`.
   *
   * Disabled controls are exempt from validation checks and
   * are not included in the aggregate value of their ancestor
   * controls.
   *
   * @see {@link AbstractControl.status}
   *
   * @returns True if the control is disabled, false otherwise.
   */
  get disabled() {
    return this.status === DISABLED;
  }
  /**
   * A control is `enabled` as long as its `status` is not `DISABLED`.
   *
   * @returns True if the control has any status other than 'DISABLED',
   * false if the status is 'DISABLED'.
   *
   * @see {@link AbstractControl.status}
   *
   */
  get enabled() {
    return this.status !== DISABLED;
  }
  /**
   * A control is `dirty` if the user has changed the value
   * in the UI.
   *
   * @returns True if the user has changed the value of this control in the UI; compare `pristine`.
   * Programmatic changes to a control's value do not mark it dirty.
   */
  get dirty() {
    return !this.pristine;
  }
  /**
   * True if the control has not been marked as touched
   *
   * A control is `untouched` if the user has not yet triggered
   * a `blur` event on it.
   */
  get untouched() {
    return !this.touched;
  }
  /**
   * Reports the update strategy of the `AbstractControl` (meaning
   * the event on which the control updates itself).
   * Possible values: `'change'` | `'blur'` | `'submit'`
   * Default value: `'change'`
   */
  get updateOn() {
    return this._updateOn ? this._updateOn : this.parent ? this.parent.updateOn : "change";
  }
  /**
   * Sets the synchronous validators that are active on this control.  Calling
   * this overwrites any existing synchronous validators.
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   * If you want to add a new validator without affecting existing ones, consider
   * using `addValidators()` method instead.
   */
  setValidators(validators) {
    this._assignValidators(validators);
  }
  /**
   * Sets the asynchronous validators that are active on this control. Calling this
   * overwrites any existing asynchronous validators.
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   * If you want to add a new validator without affecting existing ones, consider
   * using `addAsyncValidators()` method instead.
   */
  setAsyncValidators(validators) {
    this._assignAsyncValidators(validators);
  }
  /**
   * Add a synchronous validator or validators to this control, without affecting other validators.
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   * Adding a validator that already exists will have no effect. If duplicate validator functions
   * are present in the `validators` array, only the first instance would be added to a form
   * control.
   *
   * @param validators The new validator function or functions to add to this control.
   */
  addValidators(validators) {
    this.setValidators(addValidators(validators, this._rawValidators));
  }
  /**
   * Add an asynchronous validator or validators to this control, without affecting other
   * validators.
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   * Adding a validator that already exists will have no effect.
   *
   * @param validators The new asynchronous validator function or functions to add to this control.
   */
  addAsyncValidators(validators) {
    this.setAsyncValidators(addValidators(validators, this._rawAsyncValidators));
  }
  /**
   * Remove a synchronous validator from this control, without affecting other validators.
   * Validators are compared by function reference; you must pass a reference to the exact same
   * validator function as the one that was originally set. If a provided validator is not found,
   * it is ignored.
   *
   * @usageNotes
   *
   * ### Reference to a ValidatorFn
   *
   * ```
   * // Reference to the RequiredValidator
   * const ctrl = new FormControl<string | null>('', Validators.required);
   * ctrl.removeValidators(Validators.required);
   *
   * // Reference to anonymous function inside MinValidator
   * const minValidator = Validators.min(3);
   * const ctrl = new FormControl<string | null>('', minValidator);
   * expect(ctrl.hasValidator(minValidator)).toEqual(true)
   * expect(ctrl.hasValidator(Validators.min(3))).toEqual(false)
   *
   * ctrl.removeValidators(minValidator);
   * ```
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   * @param validators The validator or validators to remove.
   */
  removeValidators(validators) {
    this.setValidators(removeValidators(validators, this._rawValidators));
  }
  /**
   * Remove an asynchronous validator from this control, without affecting other validators.
   * Validators are compared by function reference; you must pass a reference to the exact same
   * validator function as the one that was originally set. If a provided validator is not found, it
   * is ignored.
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   * @param validators The asynchronous validator or validators to remove.
   */
  removeAsyncValidators(validators) {
    this.setAsyncValidators(removeValidators(validators, this._rawAsyncValidators));
  }
  /**
   * Check whether a synchronous validator function is present on this control. The provided
   * validator must be a reference to the exact same function that was provided.
   *
   * @usageNotes
   *
   * ### Reference to a ValidatorFn
   *
   * ```
   * // Reference to the RequiredValidator
   * const ctrl = new FormControl<number | null>(0, Validators.required);
   * expect(ctrl.hasValidator(Validators.required)).toEqual(true)
   *
   * // Reference to anonymous function inside MinValidator
   * const minValidator = Validators.min(3);
   * const ctrl = new FormControl<number | null>(0, minValidator);
   * expect(ctrl.hasValidator(minValidator)).toEqual(true)
   * expect(ctrl.hasValidator(Validators.min(3))).toEqual(false)
   * ```
   *
   * @param validator The validator to check for presence. Compared by function reference.
   * @returns Whether the provided validator was found on this control.
   */
  hasValidator(validator) {
    return hasValidator(this._rawValidators, validator);
  }
  /**
   * Check whether an asynchronous validator function is present on this control. The provided
   * validator must be a reference to the exact same function that was provided.
   *
   * @param validator The asynchronous validator to check for presence. Compared by function
   *     reference.
   * @returns Whether the provided asynchronous validator was found on this control.
   */
  hasAsyncValidator(validator) {
    return hasValidator(this._rawAsyncValidators, validator);
  }
  /**
   * Empties out the synchronous validator list.
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   */
  clearValidators() {
    this.validator = null;
  }
  /**
   * Empties out the async validator list.
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   */
  clearAsyncValidators() {
    this.asyncValidator = null;
  }
  /**
   * Marks the control as `touched`. A control is touched by focus and
   * blur events that do not change the value.
   *
   * @see {@link markAsUntouched()}
   * @see {@link markAsDirty()}
   * @see {@link markAsPristine()}
   *
   * @param opts Configuration options that determine how the control propagates changes
   * and emits events after marking is applied.
   * * `onlySelf`: When true, mark only this control. When false or not supplied,
   * marks all direct ancestors. Default is false.
   */
  markAsTouched(opts = {}) {
    this.touched = true;
    if (this._parent && !opts.onlySelf) {
      this._parent.markAsTouched(opts);
    }
  }
  /**
   * Marks the control and all its descendant controls as `touched`.
   * @see {@link markAsTouched()}
   */
  markAllAsTouched() {
    this.markAsTouched({
      onlySelf: true
    });
    this._forEachChild((control) => control.markAllAsTouched());
  }
  /**
   * Marks the control as `untouched`.
   *
   * If the control has any children, also marks all children as `untouched`
   * and recalculates the `touched` status of all parent controls.
   *
   * @see {@link markAsTouched()}
   * @see {@link markAsDirty()}
   * @see {@link markAsPristine()}
   *
   * @param opts Configuration options that determine how the control propagates changes
   * and emits events after the marking is applied.
   * * `onlySelf`: When true, mark only this control. When false or not supplied,
   * marks all direct ancestors. Default is false.
   */
  markAsUntouched(opts = {}) {
    this.touched = false;
    this._pendingTouched = false;
    this._forEachChild((control) => {
      control.markAsUntouched({
        onlySelf: true
      });
    });
    if (this._parent && !opts.onlySelf) {
      this._parent._updateTouched(opts);
    }
  }
  /**
   * Marks the control as `dirty`. A control becomes dirty when
   * the control's value is changed through the UI; compare `markAsTouched`.
   *
   * @see {@link markAsTouched()}
   * @see {@link markAsUntouched()}
   * @see {@link markAsPristine()}
   *
   * @param opts Configuration options that determine how the control propagates changes
   * and emits events after marking is applied.
   * * `onlySelf`: When true, mark only this control. When false or not supplied,
   * marks all direct ancestors. Default is false.
   */
  markAsDirty(opts = {}) {
    this.pristine = false;
    if (this._parent && !opts.onlySelf) {
      this._parent.markAsDirty(opts);
    }
  }
  /**
   * Marks the control as `pristine`.
   *
   * If the control has any children, marks all children as `pristine`,
   * and recalculates the `pristine` status of all parent
   * controls.
   *
   * @see {@link markAsTouched()}
   * @see {@link markAsUntouched()}
   * @see {@link markAsDirty()}
   *
   * @param opts Configuration options that determine how the control emits events after
   * marking is applied.
   * * `onlySelf`: When true, mark only this control. When false or not supplied,
   * marks all direct ancestors. Default is false.
   */
  markAsPristine(opts = {}) {
    this.pristine = true;
    this._pendingDirty = false;
    this._forEachChild((control) => {
      control.markAsPristine({
        onlySelf: true
      });
    });
    if (this._parent && !opts.onlySelf) {
      this._parent._updatePristine(opts);
    }
  }
  /**
   * Marks the control as `pending`.
   *
   * A control is pending while the control performs async validation.
   *
   * @see {@link AbstractControl.status}
   *
   * @param opts Configuration options that determine how the control propagates changes and
   * emits events after marking is applied.
   * * `onlySelf`: When true, mark only this control. When false or not supplied,
   * marks all direct ancestors. Default is false.
   * * `emitEvent`: When true or not supplied (the default), the `statusChanges`
   * observable emits an event with the latest status the control is marked pending.
   * When false, no events are emitted.
   *
   */
  markAsPending(opts = {}) {
    this.status = PENDING;
    if (opts.emitEvent !== false) {
      this.statusChanges.emit(this.status);
    }
    if (this._parent && !opts.onlySelf) {
      this._parent.markAsPending(opts);
    }
  }
  /**
   * Disables the control. This means the control is exempt from validation checks and
   * excluded from the aggregate value of any parent. Its status is `DISABLED`.
   *
   * If the control has children, all children are also disabled.
   *
   * @see {@link AbstractControl.status}
   *
   * @param opts Configuration options that determine how the control propagates
   * changes and emits events after the control is disabled.
   * * `onlySelf`: When true, mark only this control. When false or not supplied,
   * marks all direct ancestors. Default is false.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges`
   * observables emit events with the latest status and value when the control is disabled.
   * When false, no events are emitted.
   */
  disable(opts = {}) {
    const skipPristineCheck = this._parentMarkedDirty(opts.onlySelf);
    this.status = DISABLED;
    this.errors = null;
    this._forEachChild((control) => {
      control.disable(__spreadProps(__spreadValues({}, opts), {
        onlySelf: true
      }));
    });
    this._updateValue();
    if (opts.emitEvent !== false) {
      this.valueChanges.emit(this.value);
      this.statusChanges.emit(this.status);
    }
    this._updateAncestors(__spreadProps(__spreadValues({}, opts), {
      skipPristineCheck
    }));
    this._onDisabledChange.forEach((changeFn) => changeFn(true));
  }
  /**
   * Enables the control. This means the control is included in validation checks and
   * the aggregate value of its parent. Its status recalculates based on its value and
   * its validators.
   *
   * By default, if the control has children, all children are enabled.
   *
   * @see {@link AbstractControl.status}
   *
   * @param opts Configure options that control how the control propagates changes and
   * emits events when marked as untouched
   * * `onlySelf`: When true, mark only this control. When false or not supplied,
   * marks all direct ancestors. Default is false.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges`
   * observables emit events with the latest status and value when the control is enabled.
   * When false, no events are emitted.
   */
  enable(opts = {}) {
    const skipPristineCheck = this._parentMarkedDirty(opts.onlySelf);
    this.status = VALID;
    this._forEachChild((control) => {
      control.enable(__spreadProps(__spreadValues({}, opts), {
        onlySelf: true
      }));
    });
    this.updateValueAndValidity({
      onlySelf: true,
      emitEvent: opts.emitEvent
    });
    this._updateAncestors(__spreadProps(__spreadValues({}, opts), {
      skipPristineCheck
    }));
    this._onDisabledChange.forEach((changeFn) => changeFn(false));
  }
  _updateAncestors(opts) {
    if (this._parent && !opts.onlySelf) {
      this._parent.updateValueAndValidity(opts);
      if (!opts.skipPristineCheck) {
        this._parent._updatePristine();
      }
      this._parent._updateTouched();
    }
  }
  /**
   * Sets the parent of the control
   *
   * @param parent The new parent.
   */
  setParent(parent) {
    this._parent = parent;
  }
  /**
   * The raw value of this control. For most control implementations, the raw value will include
   * disabled children.
   */
  getRawValue() {
    return this.value;
  }
  /**
   * Recalculates the value and validation status of the control.
   *
   * By default, it also updates the value and validity of its ancestors.
   *
   * @param opts Configuration options determine how the control propagates changes and emits events
   * after updates and validity checks are applied.
   * * `onlySelf`: When true, only update this control. When false or not supplied,
   * update all direct ancestors. Default is false.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges`
   * observables emit events with the latest status and value when the control is updated.
   * When false, no events are emitted.
   */
  updateValueAndValidity(opts = {}) {
    this._setInitialStatus();
    this._updateValue();
    if (this.enabled) {
      this._cancelExistingSubscription();
      this.errors = this._runValidator();
      this.status = this._calculateStatus();
      if (this.status === VALID || this.status === PENDING) {
        this._runAsyncValidator(opts.emitEvent);
      }
    }
    if (opts.emitEvent !== false) {
      this.valueChanges.emit(this.value);
      this.statusChanges.emit(this.status);
    }
    if (this._parent && !opts.onlySelf) {
      this._parent.updateValueAndValidity(opts);
    }
  }
  /** @internal */
  _updateTreeValidity(opts = {
    emitEvent: true
  }) {
    this._forEachChild((ctrl) => ctrl._updateTreeValidity(opts));
    this.updateValueAndValidity({
      onlySelf: true,
      emitEvent: opts.emitEvent
    });
  }
  _setInitialStatus() {
    this.status = this._allControlsDisabled() ? DISABLED : VALID;
  }
  _runValidator() {
    return this.validator ? this.validator(this) : null;
  }
  _runAsyncValidator(emitEvent) {
    if (this.asyncValidator) {
      this.status = PENDING;
      this._hasOwnPendingAsyncValidator = true;
      const obs = toObservable(this.asyncValidator(this));
      this._asyncValidationSubscription = obs.subscribe((errors) => {
        this._hasOwnPendingAsyncValidator = false;
        this.setErrors(errors, {
          emitEvent
        });
      });
    }
  }
  _cancelExistingSubscription() {
    if (this._asyncValidationSubscription) {
      this._asyncValidationSubscription.unsubscribe();
      this._hasOwnPendingAsyncValidator = false;
    }
  }
  /**
   * Sets errors on a form control when running validations manually, rather than automatically.
   *
   * Calling `setErrors` also updates the validity of the parent control.
   *
   * @param opts Configuration options that determine how the control propagates
   * changes and emits events after the control errors are set.
   * * `emitEvent`: When true or not supplied (the default), the `statusChanges`
   * observable emits an event after the errors are set.
   *
   * @usageNotes
   *
   * ### Manually set the errors for a control
   *
   * ```
   * const login = new FormControl('someLogin');
   * login.setErrors({
   *   notUnique: true
   * });
   *
   * expect(login.valid).toEqual(false);
   * expect(login.errors).toEqual({ notUnique: true });
   *
   * login.setValue('someOtherLogin');
   *
   * expect(login.valid).toEqual(true);
   * ```
   */
  setErrors(errors, opts = {}) {
    this.errors = errors;
    this._updateControlsErrors(opts.emitEvent !== false);
  }
  /**
   * Retrieves a child control given the control's name or path.
   *
   * @param path A dot-delimited string or array of string/number values that define the path to the
   * control. If a string is provided, passing it as a string literal will result in improved type
   * information. Likewise, if an array is provided, passing it `as const` will cause improved type
   * information to be available.
   *
   * @usageNotes
   * ### Retrieve a nested control
   *
   * For example, to get a `name` control nested within a `person` sub-group:
   *
   * * `this.form.get('person.name');`
   *
   * -OR-
   *
   * * `this.form.get(['person', 'name'] as const);` // `as const` gives improved typings
   *
   * ### Retrieve a control in a FormArray
   *
   * When accessing an element inside a FormArray, you can use an element index.
   * For example, to get a `price` control from the first element in an `items` array you can use:
   *
   * * `this.form.get('items.0.price');`
   *
   * -OR-
   *
   * * `this.form.get(['items', 0, 'price']);`
   */
  get(path) {
    let currPath = path;
    if (currPath == null)
      return null;
    if (!Array.isArray(currPath))
      currPath = currPath.split(".");
    if (currPath.length === 0)
      return null;
    return currPath.reduce((control, name) => control && control._find(name), this);
  }
  /**
   * @description
   * Reports error data for the control with the given path.
   *
   * @param errorCode The code of the error to check
   * @param path A list of control names that designates how to move from the current control
   * to the control that should be queried for errors.
   *
   * @usageNotes
   * For example, for the following `FormGroup`:
   *
   * ```
   * form = new FormGroup({
   *   address: new FormGroup({ street: new FormControl() })
   * });
   * ```
   *
   * The path to the 'street' control from the root form would be 'address' -> 'street'.
   *
   * It can be provided to this method in one of two formats:
   *
   * 1. An array of string control names, e.g. `['address', 'street']`
   * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
   *
   * @returns error data for that particular error. If the control or error is not present,
   * null is returned.
   */
  getError(errorCode, path) {
    const control = path ? this.get(path) : this;
    return control && control.errors ? control.errors[errorCode] : null;
  }
  /**
   * @description
   * Reports whether the control with the given path has the error specified.
   *
   * @param errorCode The code of the error to check
   * @param path A list of control names that designates how to move from the current control
   * to the control that should be queried for errors.
   *
   * @usageNotes
   * For example, for the following `FormGroup`:
   *
   * ```
   * form = new FormGroup({
   *   address: new FormGroup({ street: new FormControl() })
   * });
   * ```
   *
   * The path to the 'street' control from the root form would be 'address' -> 'street'.
   *
   * It can be provided to this method in one of two formats:
   *
   * 1. An array of string control names, e.g. `['address', 'street']`
   * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
   *
   * If no path is given, this method checks for the error on the current control.
   *
   * @returns whether the given error is present in the control at the given path.
   *
   * If the control is not present, false is returned.
   */
  hasError(errorCode, path) {
    return !!this.getError(errorCode, path);
  }
  /**
   * Retrieves the top-level ancestor of this control.
   */
  get root() {
    let x = this;
    while (x._parent) {
      x = x._parent;
    }
    return x;
  }
  /** @internal */
  _updateControlsErrors(emitEvent) {
    this.status = this._calculateStatus();
    if (emitEvent) {
      this.statusChanges.emit(this.status);
    }
    if (this._parent) {
      this._parent._updateControlsErrors(emitEvent);
    }
  }
  /** @internal */
  _initObservables() {
    this.valueChanges = new EventEmitter();
    this.statusChanges = new EventEmitter();
  }
  _calculateStatus() {
    if (this._allControlsDisabled())
      return DISABLED;
    if (this.errors)
      return INVALID;
    if (this._hasOwnPendingAsyncValidator || this._anyControlsHaveStatus(PENDING))
      return PENDING;
    if (this._anyControlsHaveStatus(INVALID))
      return INVALID;
    return VALID;
  }
  /** @internal */
  _anyControlsHaveStatus(status) {
    return this._anyControls((control) => control.status === status);
  }
  /** @internal */
  _anyControlsDirty() {
    return this._anyControls((control) => control.dirty);
  }
  /** @internal */
  _anyControlsTouched() {
    return this._anyControls((control) => control.touched);
  }
  /** @internal */
  _updatePristine(opts = {}) {
    this.pristine = !this._anyControlsDirty();
    if (this._parent && !opts.onlySelf) {
      this._parent._updatePristine(opts);
    }
  }
  /** @internal */
  _updateTouched(opts = {}) {
    this.touched = this._anyControlsTouched();
    if (this._parent && !opts.onlySelf) {
      this._parent._updateTouched(opts);
    }
  }
  /** @internal */
  _registerOnCollectionChange(fn) {
    this._onCollectionChange = fn;
  }
  /** @internal */
  _setUpdateStrategy(opts) {
    if (isOptionsObj(opts) && opts.updateOn != null) {
      this._updateOn = opts.updateOn;
    }
  }
  /**
   * Check to see if parent has been marked artificially dirty.
   *
   * @internal
   */
  _parentMarkedDirty(onlySelf) {
    const parentDirty = this._parent && this._parent.dirty;
    return !onlySelf && !!parentDirty && !this._parent._anyControlsDirty();
  }
  /** @internal */
  _find(name) {
    return null;
  }
  /**
   * Internal implementation of the `setValidators` method. Needs to be separated out into a
   * different method, because it is called in the constructor and it can break cases where
   * a control is extended.
   */
  _assignValidators(validators) {
    this._rawValidators = Array.isArray(validators) ? validators.slice() : validators;
    this._composedValidatorFn = coerceToValidator(this._rawValidators);
  }
  /**
   * Internal implementation of the `setAsyncValidators` method. Needs to be separated out into a
   * different method, because it is called in the constructor and it can break cases where
   * a control is extended.
   */
  _assignAsyncValidators(validators) {
    this._rawAsyncValidators = Array.isArray(validators) ? validators.slice() : validators;
    this._composedAsyncValidatorFn = coerceToAsyncValidator(this._rawAsyncValidators);
  }
};
var FormGroup = class extends AbstractControl {
  /**
   * Creates a new `FormGroup` instance.
   *
   * @param controls A collection of child controls. The key for each child is the name
   * under which it is registered.
   *
   * @param validatorOrOpts A synchronous validator function, or an array of
   * such functions, or an `AbstractControlOptions` object that contains validation functions
   * and a validation trigger.
   *
   * @param asyncValidator A single async validator or array of async validator functions
   *
   */
  constructor(controls, validatorOrOpts, asyncValidator) {
    super(pickValidators(validatorOrOpts), pickAsyncValidators(asyncValidator, validatorOrOpts));
    (typeof ngDevMode === "undefined" || ngDevMode) && validateFormGroupControls(controls);
    this.controls = controls;
    this._initObservables();
    this._setUpdateStrategy(validatorOrOpts);
    this._setUpControls();
    this.updateValueAndValidity({
      onlySelf: true,
      // If `asyncValidator` is present, it will trigger control status change from `PENDING` to
      // `VALID` or `INVALID`. The status should be broadcasted via the `statusChanges` observable,
      // so we set `emitEvent` to `true` to allow that during the control creation process.
      emitEvent: !!this.asyncValidator
    });
  }
  registerControl(name, control) {
    if (this.controls[name])
      return this.controls[name];
    this.controls[name] = control;
    control.setParent(this);
    control._registerOnCollectionChange(this._onCollectionChange);
    return control;
  }
  addControl(name, control, options = {}) {
    this.registerControl(name, control);
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
    this._onCollectionChange();
  }
  /**
   * Remove a control from this group. In a strongly-typed group, required controls cannot be
   * removed.
   *
   * This method also updates the value and validity of the control.
   *
   * @param name The control name to remove from the collection
   * @param options Specifies whether this FormGroup instance should emit events after a
   *     control is removed.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges` observables emit events with the latest status and value when the control is
   * removed. When false, no events are emitted.
   */
  removeControl(name, options = {}) {
    if (this.controls[name])
      this.controls[name]._registerOnCollectionChange(() => {
      });
    delete this.controls[name];
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
    this._onCollectionChange();
  }
  setControl(name, control, options = {}) {
    if (this.controls[name])
      this.controls[name]._registerOnCollectionChange(() => {
      });
    delete this.controls[name];
    if (control)
      this.registerControl(name, control);
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
    this._onCollectionChange();
  }
  contains(controlName) {
    return this.controls.hasOwnProperty(controlName) && this.controls[controlName].enabled;
  }
  /**
   * Sets the value of the `FormGroup`. It accepts an object that matches
   * the structure of the group, with control names as keys.
   *
   * @usageNotes
   * ### Set the complete value for the form group
   *
   * ```
   * const form = new FormGroup({
   *   first: new FormControl(),
   *   last: new FormControl()
   * });
   *
   * console.log(form.value);   // {first: null, last: null}
   *
   * form.setValue({first: 'Nancy', last: 'Drew'});
   * console.log(form.value);   // {first: 'Nancy', last: 'Drew'}
   * ```
   *
   * @throws When strict checks fail, such as setting the value of a control
   * that doesn't exist or if you exclude a value of a control that does exist.
   *
   * @param value The new value for the control that matches the structure of the group.
   * @param options Configuration options that determine how the control propagates changes
   * and emits events after the value changes.
   * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
   * updateValueAndValidity} method.
   *
   * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
   * false.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges`
   * observables emit events with the latest status and value when the control value is updated.
   * When false, no events are emitted.
   */
  setValue(value, options = {}) {
    assertAllValuesPresent(this, true, value);
    Object.keys(value).forEach((name) => {
      assertControlPresent(this, true, name);
      this.controls[name].setValue(value[name], {
        onlySelf: true,
        emitEvent: options.emitEvent
      });
    });
    this.updateValueAndValidity(options);
  }
  /**
   * Patches the value of the `FormGroup`. It accepts an object with control
   * names as keys, and does its best to match the values to the correct controls
   * in the group.
   *
   * It accepts both super-sets and sub-sets of the group without throwing an error.
   *
   * @usageNotes
   * ### Patch the value for a form group
   *
   * ```
   * const form = new FormGroup({
   *    first: new FormControl(),
   *    last: new FormControl()
   * });
   * console.log(form.value);   // {first: null, last: null}
   *
   * form.patchValue({first: 'Nancy'});
   * console.log(form.value);   // {first: 'Nancy', last: null}
   * ```
   *
   * @param value The object that matches the structure of the group.
   * @param options Configuration options that determine how the control propagates changes and
   * emits events after the value is patched.
   * * `onlySelf`: When true, each change only affects this control and not its parent. Default is
   * true.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges` observables emit events with the latest status and value when the control value
   * is updated. When false, no events are emitted. The configuration options are passed to
   * the {@link AbstractControl#updateValueAndValidity updateValueAndValidity} method.
   */
  patchValue(value, options = {}) {
    if (value == null)
      return;
    Object.keys(value).forEach((name) => {
      const control = this.controls[name];
      if (control) {
        control.patchValue(
          /* Guaranteed to be present, due to the outer forEach. */
          value[name],
          {
            onlySelf: true,
            emitEvent: options.emitEvent
          }
        );
      }
    });
    this.updateValueAndValidity(options);
  }
  /**
   * Resets the `FormGroup`, marks all descendants `pristine` and `untouched` and sets
   * the value of all descendants to their default values, or null if no defaults were provided.
   *
   * You reset to a specific form state by passing in a map of states
   * that matches the structure of your form, with control names as keys. The state
   * is a standalone value or a form state object with both a value and a disabled
   * status.
   *
   * @param value Resets the control with an initial value,
   * or an object that defines the initial value and disabled state.
   *
   * @param options Configuration options that determine how the control propagates changes
   * and emits events when the group is reset.
   * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
   * false.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges`
   * observables emit events with the latest status and value when the control is reset.
   * When false, no events are emitted.
   * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
   * updateValueAndValidity} method.
   *
   * @usageNotes
   *
   * ### Reset the form group values
   *
   * ```ts
   * const form = new FormGroup({
   *   first: new FormControl('first name'),
   *   last: new FormControl('last name')
   * });
   *
   * console.log(form.value);  // {first: 'first name', last: 'last name'}
   *
   * form.reset({ first: 'name', last: 'last name' });
   *
   * console.log(form.value);  // {first: 'name', last: 'last name'}
   * ```
   *
   * ### Reset the form group values and disabled status
   *
   * ```
   * const form = new FormGroup({
   *   first: new FormControl('first name'),
   *   last: new FormControl('last name')
   * });
   *
   * form.reset({
   *   first: {value: 'name', disabled: true},
   *   last: 'last'
   * });
   *
   * console.log(form.value);  // {last: 'last'}
   * console.log(form.get('first').status);  // 'DISABLED'
   * ```
   */
  reset(value = {}, options = {}) {
    this._forEachChild((control, name) => {
      control.reset(value ? value[name] : null, {
        onlySelf: true,
        emitEvent: options.emitEvent
      });
    });
    this._updatePristine(options);
    this._updateTouched(options);
    this.updateValueAndValidity(options);
  }
  /**
   * The aggregate value of the `FormGroup`, including any disabled controls.
   *
   * Retrieves all values regardless of disabled status.
   */
  getRawValue() {
    return this._reduceChildren({}, (acc, control, name) => {
      acc[name] = control.getRawValue();
      return acc;
    });
  }
  /** @internal */
  _syncPendingControls() {
    let subtreeUpdated = this._reduceChildren(false, (updated, child) => {
      return child._syncPendingControls() ? true : updated;
    });
    if (subtreeUpdated)
      this.updateValueAndValidity({
        onlySelf: true
      });
    return subtreeUpdated;
  }
  /** @internal */
  _forEachChild(cb) {
    Object.keys(this.controls).forEach((key) => {
      const control = this.controls[key];
      control && cb(control, key);
    });
  }
  /** @internal */
  _setUpControls() {
    this._forEachChild((control) => {
      control.setParent(this);
      control._registerOnCollectionChange(this._onCollectionChange);
    });
  }
  /** @internal */
  _updateValue() {
    this.value = this._reduceValue();
  }
  /** @internal */
  _anyControls(condition) {
    for (const [controlName, control] of Object.entries(this.controls)) {
      if (this.contains(controlName) && condition(control)) {
        return true;
      }
    }
    return false;
  }
  /** @internal */
  _reduceValue() {
    let acc = {};
    return this._reduceChildren(acc, (acc2, control, name) => {
      if (control.enabled || this.disabled) {
        acc2[name] = control.value;
      }
      return acc2;
    });
  }
  /** @internal */
  _reduceChildren(initValue, fn) {
    let res = initValue;
    this._forEachChild((control, name) => {
      res = fn(res, control, name);
    });
    return res;
  }
  /** @internal */
  _allControlsDisabled() {
    for (const controlName of Object.keys(this.controls)) {
      if (this.controls[controlName].enabled) {
        return false;
      }
    }
    return Object.keys(this.controls).length > 0 || this.disabled;
  }
  /** @internal */
  _find(name) {
    return this.controls.hasOwnProperty(name) ? this.controls[name] : null;
  }
};
function validateFormGroupControls(controls) {
  const invalidKeys = Object.keys(controls).filter((key) => key.includes("."));
  if (invalidKeys.length > 0) {
    console.warn(`FormGroup keys cannot include \`.\`, please replace the keys for: ${invalidKeys.join(",")}.`);
  }
}
var FormRecord = class extends FormGroup {
};
var CALL_SET_DISABLED_STATE = new InjectionToken("CallSetDisabledState", {
  providedIn: "root",
  factory: () => setDisabledStateDefault
});
var setDisabledStateDefault = "always";
function controlPath(name, parent) {
  return [...parent.path, name];
}
function setUpControl(control, dir, callSetDisabledState = setDisabledStateDefault) {
  if (typeof ngDevMode === "undefined" || ngDevMode) {
    if (!control)
      _throwError(dir, "Cannot find control with");
    if (!dir.valueAccessor)
      _throwMissingValueAccessorError(dir);
  }
  setUpValidators(control, dir);
  dir.valueAccessor.writeValue(control.value);
  if (control.disabled || callSetDisabledState === "always") {
    dir.valueAccessor.setDisabledState?.(control.disabled);
  }
  setUpViewChangePipeline(control, dir);
  setUpModelChangePipeline(control, dir);
  setUpBlurPipeline(control, dir);
  setUpDisabledChangeHandler(control, dir);
}
function cleanUpControl(control, dir, validateControlPresenceOnChange = true) {
  const noop = () => {
    if (validateControlPresenceOnChange && (typeof ngDevMode === "undefined" || ngDevMode)) {
      _noControlError(dir);
    }
  };
  if (dir.valueAccessor) {
    dir.valueAccessor.registerOnChange(noop);
    dir.valueAccessor.registerOnTouched(noop);
  }
  cleanUpValidators(control, dir);
  if (control) {
    dir._invokeOnDestroyCallbacks();
    control._registerOnCollectionChange(() => {
    });
  }
}
function registerOnValidatorChange(validators, onChange) {
  validators.forEach((validator) => {
    if (validator.registerOnValidatorChange)
      validator.registerOnValidatorChange(onChange);
  });
}
function setUpDisabledChangeHandler(control, dir) {
  if (dir.valueAccessor.setDisabledState) {
    const onDisabledChange = (isDisabled) => {
      dir.valueAccessor.setDisabledState(isDisabled);
    };
    control.registerOnDisabledChange(onDisabledChange);
    dir._registerOnDestroy(() => {
      control._unregisterOnDisabledChange(onDisabledChange);
    });
  }
}
function setUpValidators(control, dir) {
  const validators = getControlValidators(control);
  if (dir.validator !== null) {
    control.setValidators(mergeValidators(validators, dir.validator));
  } else if (typeof validators === "function") {
    control.setValidators([validators]);
  }
  const asyncValidators = getControlAsyncValidators(control);
  if (dir.asyncValidator !== null) {
    control.setAsyncValidators(mergeValidators(asyncValidators, dir.asyncValidator));
  } else if (typeof asyncValidators === "function") {
    control.setAsyncValidators([asyncValidators]);
  }
  const onValidatorChange = () => control.updateValueAndValidity();
  registerOnValidatorChange(dir._rawValidators, onValidatorChange);
  registerOnValidatorChange(dir._rawAsyncValidators, onValidatorChange);
}
function cleanUpValidators(control, dir) {
  let isControlUpdated = false;
  if (control !== null) {
    if (dir.validator !== null) {
      const validators = getControlValidators(control);
      if (Array.isArray(validators) && validators.length > 0) {
        const updatedValidators = validators.filter((validator) => validator !== dir.validator);
        if (updatedValidators.length !== validators.length) {
          isControlUpdated = true;
          control.setValidators(updatedValidators);
        }
      }
    }
    if (dir.asyncValidator !== null) {
      const asyncValidators = getControlAsyncValidators(control);
      if (Array.isArray(asyncValidators) && asyncValidators.length > 0) {
        const updatedAsyncValidators = asyncValidators.filter((asyncValidator) => asyncValidator !== dir.asyncValidator);
        if (updatedAsyncValidators.length !== asyncValidators.length) {
          isControlUpdated = true;
          control.setAsyncValidators(updatedAsyncValidators);
        }
      }
    }
  }
  const noop = () => {
  };
  registerOnValidatorChange(dir._rawValidators, noop);
  registerOnValidatorChange(dir._rawAsyncValidators, noop);
  return isControlUpdated;
}
function setUpViewChangePipeline(control, dir) {
  dir.valueAccessor.registerOnChange((newValue) => {
    control._pendingValue = newValue;
    control._pendingChange = true;
    control._pendingDirty = true;
    if (control.updateOn === "change")
      updateControl(control, dir);
  });
}
function setUpBlurPipeline(control, dir) {
  dir.valueAccessor.registerOnTouched(() => {
    control._pendingTouched = true;
    if (control.updateOn === "blur" && control._pendingChange)
      updateControl(control, dir);
    if (control.updateOn !== "submit")
      control.markAsTouched();
  });
}
function updateControl(control, dir) {
  if (control._pendingDirty)
    control.markAsDirty();
  control.setValue(control._pendingValue, {
    emitModelToViewChange: false
  });
  dir.viewToModelUpdate(control._pendingValue);
  control._pendingChange = false;
}
function setUpModelChangePipeline(control, dir) {
  const onChange = (newValue, emitModelEvent) => {
    dir.valueAccessor.writeValue(newValue);
    if (emitModelEvent)
      dir.viewToModelUpdate(newValue);
  };
  control.registerOnChange(onChange);
  dir._registerOnDestroy(() => {
    control._unregisterOnChange(onChange);
  });
}
function setUpFormContainer(control, dir) {
  if (control == null && (typeof ngDevMode === "undefined" || ngDevMode))
    _throwError(dir, "Cannot find control with");
  setUpValidators(control, dir);
}
function cleanUpFormContainer(control, dir) {
  return cleanUpValidators(control, dir);
}
function _noControlError(dir) {
  return _throwError(dir, "There is no FormControl instance attached to form control element with");
}
function _throwError(dir, message) {
  const messageEnd = _describeControlLocation(dir);
  throw new Error(`${message} ${messageEnd}`);
}
function _describeControlLocation(dir) {
  const path = dir.path;
  if (path && path.length > 1)
    return `path: '${path.join(" -> ")}'`;
  if (path?.[0])
    return `name: '${path}'`;
  return "unspecified name attribute";
}
function _throwMissingValueAccessorError(dir) {
  const loc = _describeControlLocation(dir);
  throw new RuntimeError(-1203, `No value accessor for form control ${loc}.`);
}
function _throwInvalidValueAccessorError(dir) {
  const loc = _describeControlLocation(dir);
  throw new RuntimeError(1200, `Value accessor was not provided as an array for form control with ${loc}. Check that the \`NG_VALUE_ACCESSOR\` token is configured as a \`multi: true\` provider.`);
}
function isPropertyUpdated(changes, viewModel) {
  if (!changes.hasOwnProperty("model"))
    return false;
  const change = changes["model"];
  if (change.isFirstChange())
    return true;
  return !Object.is(viewModel, change.currentValue);
}
function isBuiltInAccessor(valueAccessor) {
  return Object.getPrototypeOf(valueAccessor.constructor) === BuiltInControlValueAccessor;
}
function syncPendingControls(form, directives) {
  form._syncPendingControls();
  directives.forEach((dir) => {
    const control = dir.control;
    if (control.updateOn === "submit" && control._pendingChange) {
      dir.viewToModelUpdate(control._pendingValue);
      control._pendingChange = false;
    }
  });
}
function selectValueAccessor(dir, valueAccessors) {
  if (!valueAccessors)
    return null;
  if (!Array.isArray(valueAccessors) && (typeof ngDevMode === "undefined" || ngDevMode))
    _throwInvalidValueAccessorError(dir);
  let defaultAccessor = void 0;
  let builtinAccessor = void 0;
  let customAccessor = void 0;
  valueAccessors.forEach((v) => {
    if (v.constructor === DefaultValueAccessor) {
      defaultAccessor = v;
    } else if (isBuiltInAccessor(v)) {
      if (builtinAccessor && (typeof ngDevMode === "undefined" || ngDevMode))
        _throwError(dir, "More than one built-in value accessor matches form control with");
      builtinAccessor = v;
    } else {
      if (customAccessor && (typeof ngDevMode === "undefined" || ngDevMode))
        _throwError(dir, "More than one custom value accessor matches form control with");
      customAccessor = v;
    }
  });
  if (customAccessor)
    return customAccessor;
  if (builtinAccessor)
    return builtinAccessor;
  if (defaultAccessor)
    return defaultAccessor;
  if (typeof ngDevMode === "undefined" || ngDevMode) {
    _throwError(dir, "No valid value accessor for form control with");
  }
  return null;
}
function removeListItem$1(list, el) {
  const index = list.indexOf(el);
  if (index > -1)
    list.splice(index, 1);
}
function _ngModelWarning(name, type, instance, warningConfig) {
  if (warningConfig === "never")
    return;
  if ((warningConfig === null || warningConfig === "once") && !type._ngModelWarningSentOnce || warningConfig === "always" && !instance._ngModelWarningSent) {
    console.warn(ngModelWarning(name));
    type._ngModelWarningSentOnce = true;
    instance._ngModelWarningSent = true;
  }
}
var formDirectiveProvider$1 = {
  provide: ControlContainer,
  useExisting: forwardRef(() => NgForm)
};
var resolvedPromise$1 = (() => Promise.resolve())();
var NgForm = class _NgForm extends ControlContainer {
  constructor(validators, asyncValidators, callSetDisabledState) {
    super();
    this.callSetDisabledState = callSetDisabledState;
    this.submitted = false;
    this._directives = /* @__PURE__ */ new Set();
    this.ngSubmit = new EventEmitter();
    this.form = new FormGroup({}, composeValidators(validators), composeAsyncValidators(asyncValidators));
  }
  /** @nodoc */
  ngAfterViewInit() {
    this._setUpdateStrategy();
  }
  /**
   * @description
   * The directive instance.
   */
  get formDirective() {
    return this;
  }
  /**
   * @description
   * The internal `FormGroup` instance.
   */
  get control() {
    return this.form;
  }
  /**
   * @description
   * Returns an array representing the path to this group. Because this directive
   * always lives at the top level of a form, it is always an empty array.
   */
  get path() {
    return [];
  }
  /**
   * @description
   * Returns a map of the controls in this group.
   */
  get controls() {
    return this.form.controls;
  }
  /**
   * @description
   * Method that sets up the control directive in this group, re-calculates its value
   * and validity, and adds the instance to the internal list of directives.
   *
   * @param dir The `NgModel` directive instance.
   */
  addControl(dir) {
    resolvedPromise$1.then(() => {
      const container = this._findContainer(dir.path);
      dir.control = container.registerControl(dir.name, dir.control);
      setUpControl(dir.control, dir, this.callSetDisabledState);
      dir.control.updateValueAndValidity({
        emitEvent: false
      });
      this._directives.add(dir);
    });
  }
  /**
   * @description
   * Retrieves the `FormControl` instance from the provided `NgModel` directive.
   *
   * @param dir The `NgModel` directive instance.
   */
  getControl(dir) {
    return this.form.get(dir.path);
  }
  /**
   * @description
   * Removes the `NgModel` instance from the internal list of directives
   *
   * @param dir The `NgModel` directive instance.
   */
  removeControl(dir) {
    resolvedPromise$1.then(() => {
      const container = this._findContainer(dir.path);
      if (container) {
        container.removeControl(dir.name);
      }
      this._directives.delete(dir);
    });
  }
  /**
   * @description
   * Adds a new `NgModelGroup` directive instance to the form.
   *
   * @param dir The `NgModelGroup` directive instance.
   */
  addFormGroup(dir) {
    resolvedPromise$1.then(() => {
      const container = this._findContainer(dir.path);
      const group = new FormGroup({});
      setUpFormContainer(group, dir);
      container.registerControl(dir.name, group);
      group.updateValueAndValidity({
        emitEvent: false
      });
    });
  }
  /**
   * @description
   * Removes the `NgModelGroup` directive instance from the form.
   *
   * @param dir The `NgModelGroup` directive instance.
   */
  removeFormGroup(dir) {
    resolvedPromise$1.then(() => {
      const container = this._findContainer(dir.path);
      if (container) {
        container.removeControl(dir.name);
      }
    });
  }
  /**
   * @description
   * Retrieves the `FormGroup` for a provided `NgModelGroup` directive instance
   *
   * @param dir The `NgModelGroup` directive instance.
   */
  getFormGroup(dir) {
    return this.form.get(dir.path);
  }
  /**
   * Sets the new value for the provided `NgControl` directive.
   *
   * @param dir The `NgControl` directive instance.
   * @param value The new value for the directive's control.
   */
  updateModel(dir, value) {
    resolvedPromise$1.then(() => {
      const ctrl = this.form.get(dir.path);
      ctrl.setValue(value);
    });
  }
  /**
   * @description
   * Sets the value for this `FormGroup`.
   *
   * @param value The new value
   */
  setValue(value) {
    this.control.setValue(value);
  }
  /**
   * @description
   * Method called when the "submit" event is triggered on the form.
   * Triggers the `ngSubmit` emitter to emit the "submit" event as its payload.
   *
   * @param $event The "submit" event object
   */
  onSubmit($event) {
    this.submitted = true;
    syncPendingControls(this.form, this._directives);
    this.ngSubmit.emit($event);
    return $event?.target?.method === "dialog";
  }
  /**
   * @description
   * Method called when the "reset" event is triggered on the form.
   */
  onReset() {
    this.resetForm();
  }
  /**
   * @description
   * Resets the form to an initial value and resets its submitted status.
   *
   * @param value The new value for the form.
   */
  resetForm(value = void 0) {
    this.form.reset(value);
    this.submitted = false;
  }
  _setUpdateStrategy() {
    if (this.options && this.options.updateOn != null) {
      this.form._updateOn = this.options.updateOn;
    }
  }
  _findContainer(path) {
    path.pop();
    return path.length ? this.form.get(path) : this.form;
  }
  static {
    this.\u0275fac = function NgForm_Factory(t) {
      return new (t || _NgForm)(\u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10), \u0275\u0275directiveInject(CALL_SET_DISABLED_STATE, 8));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _NgForm,
      selectors: [["form", 3, "ngNoForm", "", 3, "formGroup", ""], ["ng-form"], ["", "ngForm", ""]],
      hostBindings: function NgForm_HostBindings(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275listener("submit", function NgForm_submit_HostBindingHandler($event) {
            return ctx.onSubmit($event);
          })("reset", function NgForm_reset_HostBindingHandler() {
            return ctx.onReset();
          });
        }
      },
      inputs: {
        options: [InputFlags.None, "ngFormOptions", "options"]
      },
      outputs: {
        ngSubmit: "ngSubmit"
      },
      exportAs: ["ngForm"],
      features: [\u0275\u0275ProvidersFeature([formDirectiveProvider$1]), \u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgForm, [{
    type: Directive,
    args: [{
      selector: "form:not([ngNoForm]):not([formGroup]),ng-form,[ngForm]",
      providers: [formDirectiveProvider$1],
      host: {
        "(submit)": "onSubmit($event)",
        "(reset)": "onReset()"
      },
      outputs: ["ngSubmit"],
      exportAs: "ngForm"
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [CALL_SET_DISABLED_STATE]
    }]
  }], {
    options: [{
      type: Input,
      args: ["ngFormOptions"]
    }]
  });
})();
function removeListItem(list, el) {
  const index = list.indexOf(el);
  if (index > -1)
    list.splice(index, 1);
}
function isFormControlState(formState) {
  return typeof formState === "object" && formState !== null && Object.keys(formState).length === 2 && "value" in formState && "disabled" in formState;
}
var FormControl = class FormControl2 extends AbstractControl {
  constructor(formState = null, validatorOrOpts, asyncValidator) {
    super(pickValidators(validatorOrOpts), pickAsyncValidators(asyncValidator, validatorOrOpts));
    this.defaultValue = null;
    this._onChange = [];
    this._pendingChange = false;
    this._applyFormState(formState);
    this._setUpdateStrategy(validatorOrOpts);
    this._initObservables();
    this.updateValueAndValidity({
      onlySelf: true,
      // If `asyncValidator` is present, it will trigger control status change from `PENDING` to
      // `VALID` or `INVALID`.
      // The status should be broadcasted via the `statusChanges` observable, so we set
      // `emitEvent` to `true` to allow that during the control creation process.
      emitEvent: !!this.asyncValidator
    });
    if (isOptionsObj(validatorOrOpts) && (validatorOrOpts.nonNullable || validatorOrOpts.initialValueIsDefault)) {
      if (isFormControlState(formState)) {
        this.defaultValue = formState.value;
      } else {
        this.defaultValue = formState;
      }
    }
  }
  setValue(value, options = {}) {
    this.value = this._pendingValue = value;
    if (this._onChange.length && options.emitModelToViewChange !== false) {
      this._onChange.forEach((changeFn) => changeFn(this.value, options.emitViewToModelChange !== false));
    }
    this.updateValueAndValidity(options);
  }
  patchValue(value, options = {}) {
    this.setValue(value, options);
  }
  reset(formState = this.defaultValue, options = {}) {
    this._applyFormState(formState);
    this.markAsPristine(options);
    this.markAsUntouched(options);
    this.setValue(this.value, options);
    this._pendingChange = false;
  }
  /**  @internal */
  _updateValue() {
  }
  /**  @internal */
  _anyControls(condition) {
    return false;
  }
  /**  @internal */
  _allControlsDisabled() {
    return this.disabled;
  }
  registerOnChange(fn) {
    this._onChange.push(fn);
  }
  /** @internal */
  _unregisterOnChange(fn) {
    removeListItem(this._onChange, fn);
  }
  registerOnDisabledChange(fn) {
    this._onDisabledChange.push(fn);
  }
  /** @internal */
  _unregisterOnDisabledChange(fn) {
    removeListItem(this._onDisabledChange, fn);
  }
  /** @internal */
  _forEachChild(cb) {
  }
  /** @internal */
  _syncPendingControls() {
    if (this.updateOn === "submit") {
      if (this._pendingDirty)
        this.markAsDirty();
      if (this._pendingTouched)
        this.markAsTouched();
      if (this._pendingChange) {
        this.setValue(this._pendingValue, {
          onlySelf: true,
          emitModelToViewChange: false
        });
        return true;
      }
    }
    return false;
  }
  _applyFormState(formState) {
    if (isFormControlState(formState)) {
      this.value = this._pendingValue = formState.value;
      formState.disabled ? this.disable({
        onlySelf: true,
        emitEvent: false
      }) : this.enable({
        onlySelf: true,
        emitEvent: false
      });
    } else {
      this.value = this._pendingValue = formState;
    }
  }
};
var isFormControl = (control) => control instanceof FormControl;
var AbstractFormGroupDirective = class _AbstractFormGroupDirective extends ControlContainer {
  /** @nodoc */
  ngOnInit() {
    this._checkParentType();
    this.formDirective.addFormGroup(this);
  }
  /** @nodoc */
  ngOnDestroy() {
    if (this.formDirective) {
      this.formDirective.removeFormGroup(this);
    }
  }
  /**
   * @description
   * The `FormGroup` bound to this directive.
   */
  get control() {
    return this.formDirective.getFormGroup(this);
  }
  /**
   * @description
   * The path to this group from the top-level directive.
   */
  get path() {
    return controlPath(this.name == null ? this.name : this.name.toString(), this._parent);
  }
  /**
   * @description
   * The top-level directive for this group if present, otherwise null.
   */
  get formDirective() {
    return this._parent ? this._parent.formDirective : null;
  }
  /** @internal */
  _checkParentType() {
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275AbstractFormGroupDirective_BaseFactory;
      return function AbstractFormGroupDirective_Factory(t) {
        return (\u0275AbstractFormGroupDirective_BaseFactory || (\u0275AbstractFormGroupDirective_BaseFactory = \u0275\u0275getInheritedFactory(_AbstractFormGroupDirective)))(t || _AbstractFormGroupDirective);
      };
    })();
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _AbstractFormGroupDirective,
      features: [\u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbstractFormGroupDirective, [{
    type: Directive
  }], null, null);
})();
function modelParentException() {
  return new RuntimeError(1350, `
    ngModel cannot be used to register form controls with a parent formGroup directive.  Try using
    formGroup's partner directive "formControlName" instead.  Example:

    ${formControlNameExample}

    Or, if you'd like to avoid registering this form control, indicate that it's standalone in ngModelOptions:

    Example:

    ${ngModelWithFormGroupExample}`);
}
function formGroupNameException() {
  return new RuntimeError(1351, `
    ngModel cannot be used to register form controls with a parent formGroupName or formArrayName directive.

    Option 1: Use formControlName instead of ngModel (reactive strategy):

    ${formGroupNameExample}

    Option 2:  Update ngModel's parent be ngModelGroup (template-driven strategy):

    ${ngModelGroupExample}`);
}
function missingNameException() {
  return new RuntimeError(1352, `If ngModel is used within a form tag, either the name attribute must be set or the form
    control must be defined as 'standalone' in ngModelOptions.

    Example 1: <input [(ngModel)]="person.firstName" name="first">
    Example 2: <input [(ngModel)]="person.firstName" [ngModelOptions]="{standalone: true}">`);
}
function modelGroupParentException() {
  return new RuntimeError(1353, `
    ngModelGroup cannot be used with a parent formGroup directive.

    Option 1: Use formGroupName instead of ngModelGroup (reactive strategy):

    ${formGroupNameExample}

    Option 2:  Use a regular form tag instead of the formGroup directive (template-driven strategy):

    ${ngModelGroupExample}`);
}
var modelGroupProvider = {
  provide: ControlContainer,
  useExisting: forwardRef(() => NgModelGroup)
};
var NgModelGroup = class _NgModelGroup extends AbstractFormGroupDirective {
  constructor(parent, validators, asyncValidators) {
    super();
    this.name = "";
    this._parent = parent;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
  }
  /** @internal */
  _checkParentType() {
    if (!(this._parent instanceof _NgModelGroup) && !(this._parent instanceof NgForm) && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw modelGroupParentException();
    }
  }
  static {
    this.\u0275fac = function NgModelGroup_Factory(t) {
      return new (t || _NgModelGroup)(\u0275\u0275directiveInject(ControlContainer, 5), \u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _NgModelGroup,
      selectors: [["", "ngModelGroup", ""]],
      inputs: {
        name: [InputFlags.None, "ngModelGroup", "name"]
      },
      exportAs: ["ngModelGroup"],
      features: [\u0275\u0275ProvidersFeature([modelGroupProvider]), \u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgModelGroup, [{
    type: Directive,
    args: [{
      selector: "[ngModelGroup]",
      providers: [modelGroupProvider],
      exportAs: "ngModelGroup"
    }]
  }], () => [{
    type: ControlContainer,
    decorators: [{
      type: Host
    }, {
      type: SkipSelf
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }], {
    name: [{
      type: Input,
      args: ["ngModelGroup"]
    }]
  });
})();
var formControlBinding$1 = {
  provide: NgControl,
  useExisting: forwardRef(() => NgModel)
};
var resolvedPromise = (() => Promise.resolve())();
var NgModel = class _NgModel extends NgControl {
  constructor(parent, validators, asyncValidators, valueAccessors, _changeDetectorRef, callSetDisabledState) {
    super();
    this._changeDetectorRef = _changeDetectorRef;
    this.callSetDisabledState = callSetDisabledState;
    this.control = new FormControl();
    this._registered = false;
    this.name = "";
    this.update = new EventEmitter();
    this._parent = parent;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
    this.valueAccessor = selectValueAccessor(this, valueAccessors);
  }
  /** @nodoc */
  ngOnChanges(changes) {
    this._checkForErrors();
    if (!this._registered || "name" in changes) {
      if (this._registered) {
        this._checkName();
        if (this.formDirective) {
          const oldName = changes["name"].previousValue;
          this.formDirective.removeControl({
            name: oldName,
            path: this._getPath(oldName)
          });
        }
      }
      this._setUpControl();
    }
    if ("isDisabled" in changes) {
      this._updateDisabled(changes);
    }
    if (isPropertyUpdated(changes, this.viewModel)) {
      this._updateValue(this.model);
      this.viewModel = this.model;
    }
  }
  /** @nodoc */
  ngOnDestroy() {
    this.formDirective && this.formDirective.removeControl(this);
  }
  /**
   * @description
   * Returns an array that represents the path from the top-level form to this control.
   * Each index is the string name of the control on that level.
   */
  get path() {
    return this._getPath(this.name);
  }
  /**
   * @description
   * The top-level directive for this control if present, otherwise null.
   */
  get formDirective() {
    return this._parent ? this._parent.formDirective : null;
  }
  /**
   * @description
   * Sets the new value for the view model and emits an `ngModelChange` event.
   *
   * @param newValue The new value emitted by `ngModelChange`.
   */
  viewToModelUpdate(newValue) {
    this.viewModel = newValue;
    this.update.emit(newValue);
  }
  _setUpControl() {
    this._setUpdateStrategy();
    this._isStandalone() ? this._setUpStandalone() : this.formDirective.addControl(this);
    this._registered = true;
  }
  _setUpdateStrategy() {
    if (this.options && this.options.updateOn != null) {
      this.control._updateOn = this.options.updateOn;
    }
  }
  _isStandalone() {
    return !this._parent || !!(this.options && this.options.standalone);
  }
  _setUpStandalone() {
    setUpControl(this.control, this, this.callSetDisabledState);
    this.control.updateValueAndValidity({
      emitEvent: false
    });
  }
  _checkForErrors() {
    if (!this._isStandalone()) {
      this._checkParentType();
    }
    this._checkName();
  }
  _checkParentType() {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      if (!(this._parent instanceof NgModelGroup) && this._parent instanceof AbstractFormGroupDirective) {
        throw formGroupNameException();
      } else if (!(this._parent instanceof NgModelGroup) && !(this._parent instanceof NgForm)) {
        throw modelParentException();
      }
    }
  }
  _checkName() {
    if (this.options && this.options.name)
      this.name = this.options.name;
    if (!this._isStandalone() && !this.name && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw missingNameException();
    }
  }
  _updateValue(value) {
    resolvedPromise.then(() => {
      this.control.setValue(value, {
        emitViewToModelChange: false
      });
      this._changeDetectorRef?.markForCheck();
    });
  }
  _updateDisabled(changes) {
    const disabledValue = changes["isDisabled"].currentValue;
    const isDisabled = disabledValue !== 0 && booleanAttribute(disabledValue);
    resolvedPromise.then(() => {
      if (isDisabled && !this.control.disabled) {
        this.control.disable();
      } else if (!isDisabled && this.control.disabled) {
        this.control.enable();
      }
      this._changeDetectorRef?.markForCheck();
    });
  }
  _getPath(controlName) {
    return this._parent ? controlPath(controlName, this._parent) : [controlName];
  }
  static {
    this.\u0275fac = function NgModel_Factory(t) {
      return new (t || _NgModel)(\u0275\u0275directiveInject(ControlContainer, 9), \u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10), \u0275\u0275directiveInject(NG_VALUE_ACCESSOR, 10), \u0275\u0275directiveInject(ChangeDetectorRef, 8), \u0275\u0275directiveInject(CALL_SET_DISABLED_STATE, 8));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _NgModel,
      selectors: [["", "ngModel", "", 3, "formControlName", "", 3, "formControl", ""]],
      inputs: {
        name: "name",
        isDisabled: [InputFlags.None, "disabled", "isDisabled"],
        model: [InputFlags.None, "ngModel", "model"],
        options: [InputFlags.None, "ngModelOptions", "options"]
      },
      outputs: {
        update: "ngModelChange"
      },
      exportAs: ["ngModel"],
      features: [\u0275\u0275ProvidersFeature([formControlBinding$1]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgModel, [{
    type: Directive,
    args: [{
      selector: "[ngModel]:not([formControlName]):not([formControl])",
      providers: [formControlBinding$1],
      exportAs: "ngModel"
    }]
  }], () => [{
    type: ControlContainer,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALUE_ACCESSOR]
    }]
  }, {
    type: ChangeDetectorRef,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [ChangeDetectorRef]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [CALL_SET_DISABLED_STATE]
    }]
  }], {
    name: [{
      type: Input
    }],
    isDisabled: [{
      type: Input,
      args: ["disabled"]
    }],
    model: [{
      type: Input,
      args: ["ngModel"]
    }],
    options: [{
      type: Input,
      args: ["ngModelOptions"]
    }],
    update: [{
      type: Output,
      args: ["ngModelChange"]
    }]
  });
})();
var \u0275NgNoValidate = class _\u0275NgNoValidate {
  static {
    this.\u0275fac = function \u0275NgNoValidate_Factory(t) {
      return new (t || _\u0275NgNoValidate)();
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _\u0275NgNoValidate,
      selectors: [["form", 3, "ngNoForm", "", 3, "ngNativeValidate", ""]],
      hostAttrs: ["novalidate", ""]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(\u0275NgNoValidate, [{
    type: Directive,
    args: [{
      selector: "form:not([ngNoForm]):not([ngNativeValidate])",
      host: {
        "novalidate": ""
      }
    }]
  }], null, null);
})();
var NUMBER_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => NumberValueAccessor),
  multi: true
};
var NumberValueAccessor = class _NumberValueAccessor extends BuiltInControlValueAccessor {
  /**
   * Sets the "value" property on the input element.
   * @nodoc
   */
  writeValue(value) {
    const normalizedValue = value == null ? "" : value;
    this.setProperty("value", normalizedValue);
  }
  /**
   * Registers a function called when the control value changes.
   * @nodoc
   */
  registerOnChange(fn) {
    this.onChange = (value) => {
      fn(value == "" ? null : parseFloat(value));
    };
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275NumberValueAccessor_BaseFactory;
      return function NumberValueAccessor_Factory(t) {
        return (\u0275NumberValueAccessor_BaseFactory || (\u0275NumberValueAccessor_BaseFactory = \u0275\u0275getInheritedFactory(_NumberValueAccessor)))(t || _NumberValueAccessor);
      };
    })();
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _NumberValueAccessor,
      selectors: [["input", "type", "number", "formControlName", ""], ["input", "type", "number", "formControl", ""], ["input", "type", "number", "ngModel", ""]],
      hostBindings: function NumberValueAccessor_HostBindings(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275listener("input", function NumberValueAccessor_input_HostBindingHandler($event) {
            return ctx.onChange($event.target.value);
          })("blur", function NumberValueAccessor_blur_HostBindingHandler() {
            return ctx.onTouched();
          });
        }
      },
      features: [\u0275\u0275ProvidersFeature([NUMBER_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NumberValueAccessor, [{
    type: Directive,
    args: [{
      selector: "input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]",
      host: {
        "(input)": "onChange($event.target.value)",
        "(blur)": "onTouched()"
      },
      providers: [NUMBER_VALUE_ACCESSOR]
    }]
  }], null, null);
})();
var RADIO_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => RadioControlValueAccessor),
  multi: true
};
function throwNameError() {
  throw new RuntimeError(1202, `
      If you define both a name and a formControlName attribute on your radio button, their values
      must match. Ex: <input type="radio" formControlName="food" name="food">
    `);
}
var RadioControlRegistry = class _RadioControlRegistry {
  constructor() {
    this._accessors = [];
  }
  /**
   * @description
   * Adds a control to the internal registry. For internal use only.
   */
  add(control, accessor) {
    this._accessors.push([control, accessor]);
  }
  /**
   * @description
   * Removes a control from the internal registry. For internal use only.
   */
  remove(accessor) {
    for (let i = this._accessors.length - 1; i >= 0; --i) {
      if (this._accessors[i][1] === accessor) {
        this._accessors.splice(i, 1);
        return;
      }
    }
  }
  /**
   * @description
   * Selects a radio button. For internal use only.
   */
  select(accessor) {
    this._accessors.forEach((c) => {
      if (this._isSameGroup(c, accessor) && c[1] !== accessor) {
        c[1].fireUncheck(accessor.value);
      }
    });
  }
  _isSameGroup(controlPair, accessor) {
    if (!controlPair[0].control)
      return false;
    return controlPair[0]._parent === accessor._control._parent && controlPair[1].name === accessor.name;
  }
  static {
    this.\u0275fac = function RadioControlRegistry_Factory(t) {
      return new (t || _RadioControlRegistry)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _RadioControlRegistry,
      factory: _RadioControlRegistry.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RadioControlRegistry, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var RadioControlValueAccessor = class _RadioControlValueAccessor extends BuiltInControlValueAccessor {
  constructor(renderer, elementRef, _registry, _injector) {
    super(renderer, elementRef);
    this._registry = _registry;
    this._injector = _injector;
    this.setDisabledStateFired = false;
    this.onChange = () => {
    };
    this.callSetDisabledState = inject(CALL_SET_DISABLED_STATE, {
      optional: true
    }) ?? setDisabledStateDefault;
  }
  /** @nodoc */
  ngOnInit() {
    this._control = this._injector.get(NgControl);
    this._checkName();
    this._registry.add(this._control, this);
  }
  /** @nodoc */
  ngOnDestroy() {
    this._registry.remove(this);
  }
  /**
   * Sets the "checked" property value on the radio input element.
   * @nodoc
   */
  writeValue(value) {
    this._state = value === this.value;
    this.setProperty("checked", this._state);
  }
  /**
   * Registers a function called when the control value changes.
   * @nodoc
   */
  registerOnChange(fn) {
    this._fn = fn;
    this.onChange = () => {
      fn(this.value);
      this._registry.select(this);
    };
  }
  /** @nodoc */
  setDisabledState(isDisabled) {
    if (this.setDisabledStateFired || isDisabled || this.callSetDisabledState === "whenDisabledForLegacyCode") {
      this.setProperty("disabled", isDisabled);
    }
    this.setDisabledStateFired = true;
  }
  /**
   * Sets the "value" on the radio input element and unchecks it.
   *
   * @param value
   */
  fireUncheck(value) {
    this.writeValue(value);
  }
  _checkName() {
    if (this.name && this.formControlName && this.name !== this.formControlName && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throwNameError();
    }
    if (!this.name && this.formControlName)
      this.name = this.formControlName;
  }
  static {
    this.\u0275fac = function RadioControlValueAccessor_Factory(t) {
      return new (t || _RadioControlValueAccessor)(\u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(RadioControlRegistry), \u0275\u0275directiveInject(Injector));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _RadioControlValueAccessor,
      selectors: [["input", "type", "radio", "formControlName", ""], ["input", "type", "radio", "formControl", ""], ["input", "type", "radio", "ngModel", ""]],
      hostBindings: function RadioControlValueAccessor_HostBindings(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275listener("change", function RadioControlValueAccessor_change_HostBindingHandler() {
            return ctx.onChange();
          })("blur", function RadioControlValueAccessor_blur_HostBindingHandler() {
            return ctx.onTouched();
          });
        }
      },
      inputs: {
        name: "name",
        formControlName: "formControlName",
        value: "value"
      },
      features: [\u0275\u0275ProvidersFeature([RADIO_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RadioControlValueAccessor, [{
    type: Directive,
    args: [{
      selector: "input[type=radio][formControlName],input[type=radio][formControl],input[type=radio][ngModel]",
      host: {
        "(change)": "onChange()",
        "(blur)": "onTouched()"
      },
      providers: [RADIO_VALUE_ACCESSOR]
    }]
  }], () => [{
    type: Renderer2
  }, {
    type: ElementRef
  }, {
    type: RadioControlRegistry
  }, {
    type: Injector
  }], {
    name: [{
      type: Input
    }],
    formControlName: [{
      type: Input
    }],
    value: [{
      type: Input
    }]
  });
})();
var RANGE_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => RangeValueAccessor),
  multi: true
};
var RangeValueAccessor = class _RangeValueAccessor extends BuiltInControlValueAccessor {
  /**
   * Sets the "value" property on the input element.
   * @nodoc
   */
  writeValue(value) {
    this.setProperty("value", parseFloat(value));
  }
  /**
   * Registers a function called when the control value changes.
   * @nodoc
   */
  registerOnChange(fn) {
    this.onChange = (value) => {
      fn(value == "" ? null : parseFloat(value));
    };
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275RangeValueAccessor_BaseFactory;
      return function RangeValueAccessor_Factory(t) {
        return (\u0275RangeValueAccessor_BaseFactory || (\u0275RangeValueAccessor_BaseFactory = \u0275\u0275getInheritedFactory(_RangeValueAccessor)))(t || _RangeValueAccessor);
      };
    })();
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _RangeValueAccessor,
      selectors: [["input", "type", "range", "formControlName", ""], ["input", "type", "range", "formControl", ""], ["input", "type", "range", "ngModel", ""]],
      hostBindings: function RangeValueAccessor_HostBindings(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275listener("change", function RangeValueAccessor_change_HostBindingHandler($event) {
            return ctx.onChange($event.target.value);
          })("input", function RangeValueAccessor_input_HostBindingHandler($event) {
            return ctx.onChange($event.target.value);
          })("blur", function RangeValueAccessor_blur_HostBindingHandler() {
            return ctx.onTouched();
          });
        }
      },
      features: [\u0275\u0275ProvidersFeature([RANGE_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RangeValueAccessor, [{
    type: Directive,
    args: [{
      selector: "input[type=range][formControlName],input[type=range][formControl],input[type=range][ngModel]",
      host: {
        "(change)": "onChange($event.target.value)",
        "(input)": "onChange($event.target.value)",
        "(blur)": "onTouched()"
      },
      providers: [RANGE_VALUE_ACCESSOR]
    }]
  }], null, null);
})();
var NG_MODEL_WITH_FORM_CONTROL_WARNING = new InjectionToken(ngDevMode ? "NgModelWithFormControlWarning" : "");
var formControlBinding = {
  provide: NgControl,
  useExisting: forwardRef(() => FormControlDirective)
};
var FormControlDirective = class _FormControlDirective extends NgControl {
  /**
   * @description
   * Triggers a warning in dev mode that this input should not be used with reactive forms.
   */
  set isDisabled(isDisabled) {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      console.warn(disabledAttrWarning);
    }
  }
  static {
    this._ngModelWarningSentOnce = false;
  }
  constructor(validators, asyncValidators, valueAccessors, _ngModelWarningConfig, callSetDisabledState) {
    super();
    this._ngModelWarningConfig = _ngModelWarningConfig;
    this.callSetDisabledState = callSetDisabledState;
    this.update = new EventEmitter();
    this._ngModelWarningSent = false;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
    this.valueAccessor = selectValueAccessor(this, valueAccessors);
  }
  /** @nodoc */
  ngOnChanges(changes) {
    if (this._isControlChanged(changes)) {
      const previousForm = changes["form"].previousValue;
      if (previousForm) {
        cleanUpControl(
          previousForm,
          this,
          /* validateControlPresenceOnChange */
          false
        );
      }
      setUpControl(this.form, this, this.callSetDisabledState);
      this.form.updateValueAndValidity({
        emitEvent: false
      });
    }
    if (isPropertyUpdated(changes, this.viewModel)) {
      if (typeof ngDevMode === "undefined" || ngDevMode) {
        _ngModelWarning("formControl", _FormControlDirective, this, this._ngModelWarningConfig);
      }
      this.form.setValue(this.model);
      this.viewModel = this.model;
    }
  }
  /** @nodoc */
  ngOnDestroy() {
    if (this.form) {
      cleanUpControl(
        this.form,
        this,
        /* validateControlPresenceOnChange */
        false
      );
    }
  }
  /**
   * @description
   * Returns an array that represents the path from the top-level form to this control.
   * Each index is the string name of the control on that level.
   */
  get path() {
    return [];
  }
  /**
   * @description
   * The `FormControl` bound to this directive.
   */
  get control() {
    return this.form;
  }
  /**
   * @description
   * Sets the new value for the view model and emits an `ngModelChange` event.
   *
   * @param newValue The new value for the view model.
   */
  viewToModelUpdate(newValue) {
    this.viewModel = newValue;
    this.update.emit(newValue);
  }
  _isControlChanged(changes) {
    return changes.hasOwnProperty("form");
  }
  static {
    this.\u0275fac = function FormControlDirective_Factory(t) {
      return new (t || _FormControlDirective)(\u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10), \u0275\u0275directiveInject(NG_VALUE_ACCESSOR, 10), \u0275\u0275directiveInject(NG_MODEL_WITH_FORM_CONTROL_WARNING, 8), \u0275\u0275directiveInject(CALL_SET_DISABLED_STATE, 8));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _FormControlDirective,
      selectors: [["", "formControl", ""]],
      inputs: {
        form: [InputFlags.None, "formControl", "form"],
        isDisabled: [InputFlags.None, "disabled", "isDisabled"],
        model: [InputFlags.None, "ngModel", "model"]
      },
      outputs: {
        update: "ngModelChange"
      },
      exportAs: ["ngForm"],
      features: [\u0275\u0275ProvidersFeature([formControlBinding]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormControlDirective, [{
    type: Directive,
    args: [{
      selector: "[formControl]",
      providers: [formControlBinding],
      exportAs: "ngForm"
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALUE_ACCESSOR]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [NG_MODEL_WITH_FORM_CONTROL_WARNING]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [CALL_SET_DISABLED_STATE]
    }]
  }], {
    form: [{
      type: Input,
      args: ["formControl"]
    }],
    isDisabled: [{
      type: Input,
      args: ["disabled"]
    }],
    model: [{
      type: Input,
      args: ["ngModel"]
    }],
    update: [{
      type: Output,
      args: ["ngModelChange"]
    }]
  });
})();
var formDirectiveProvider = {
  provide: ControlContainer,
  useExisting: forwardRef(() => FormGroupDirective)
};
var FormGroupDirective = class _FormGroupDirective extends ControlContainer {
  constructor(validators, asyncValidators, callSetDisabledState) {
    super();
    this.callSetDisabledState = callSetDisabledState;
    this.submitted = false;
    this._onCollectionChange = () => this._updateDomValue();
    this.directives = [];
    this.form = null;
    this.ngSubmit = new EventEmitter();
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
  }
  /** @nodoc */
  ngOnChanges(changes) {
    this._checkFormPresent();
    if (changes.hasOwnProperty("form")) {
      this._updateValidators();
      this._updateDomValue();
      this._updateRegistrations();
      this._oldForm = this.form;
    }
  }
  /** @nodoc */
  ngOnDestroy() {
    if (this.form) {
      cleanUpValidators(this.form, this);
      if (this.form._onCollectionChange === this._onCollectionChange) {
        this.form._registerOnCollectionChange(() => {
        });
      }
    }
  }
  /**
   * @description
   * Returns this directive's instance.
   */
  get formDirective() {
    return this;
  }
  /**
   * @description
   * Returns the `FormGroup` bound to this directive.
   */
  get control() {
    return this.form;
  }
  /**
   * @description
   * Returns an array representing the path to this group. Because this directive
   * always lives at the top level of a form, it always an empty array.
   */
  get path() {
    return [];
  }
  /**
   * @description
   * Method that sets up the control directive in this group, re-calculates its value
   * and validity, and adds the instance to the internal list of directives.
   *
   * @param dir The `FormControlName` directive instance.
   */
  addControl(dir) {
    const ctrl = this.form.get(dir.path);
    setUpControl(ctrl, dir, this.callSetDisabledState);
    ctrl.updateValueAndValidity({
      emitEvent: false
    });
    this.directives.push(dir);
    return ctrl;
  }
  /**
   * @description
   * Retrieves the `FormControl` instance from the provided `FormControlName` directive
   *
   * @param dir The `FormControlName` directive instance.
   */
  getControl(dir) {
    return this.form.get(dir.path);
  }
  /**
   * @description
   * Removes the `FormControlName` instance from the internal list of directives
   *
   * @param dir The `FormControlName` directive instance.
   */
  removeControl(dir) {
    cleanUpControl(
      dir.control || null,
      dir,
      /* validateControlPresenceOnChange */
      false
    );
    removeListItem$1(this.directives, dir);
  }
  /**
   * Adds a new `FormGroupName` directive instance to the form.
   *
   * @param dir The `FormGroupName` directive instance.
   */
  addFormGroup(dir) {
    this._setUpFormContainer(dir);
  }
  /**
   * Performs the necessary cleanup when a `FormGroupName` directive instance is removed from the
   * view.
   *
   * @param dir The `FormGroupName` directive instance.
   */
  removeFormGroup(dir) {
    this._cleanUpFormContainer(dir);
  }
  /**
   * @description
   * Retrieves the `FormGroup` for a provided `FormGroupName` directive instance
   *
   * @param dir The `FormGroupName` directive instance.
   */
  getFormGroup(dir) {
    return this.form.get(dir.path);
  }
  /**
   * Performs the necessary setup when a `FormArrayName` directive instance is added to the view.
   *
   * @param dir The `FormArrayName` directive instance.
   */
  addFormArray(dir) {
    this._setUpFormContainer(dir);
  }
  /**
   * Performs the necessary cleanup when a `FormArrayName` directive instance is removed from the
   * view.
   *
   * @param dir The `FormArrayName` directive instance.
   */
  removeFormArray(dir) {
    this._cleanUpFormContainer(dir);
  }
  /**
   * @description
   * Retrieves the `FormArray` for a provided `FormArrayName` directive instance.
   *
   * @param dir The `FormArrayName` directive instance.
   */
  getFormArray(dir) {
    return this.form.get(dir.path);
  }
  /**
   * Sets the new value for the provided `FormControlName` directive.
   *
   * @param dir The `FormControlName` directive instance.
   * @param value The new value for the directive's control.
   */
  updateModel(dir, value) {
    const ctrl = this.form.get(dir.path);
    ctrl.setValue(value);
  }
  /**
   * @description
   * Method called with the "submit" event is triggered on the form.
   * Triggers the `ngSubmit` emitter to emit the "submit" event as its payload.
   *
   * @param $event The "submit" event object
   */
  onSubmit($event) {
    this.submitted = true;
    syncPendingControls(this.form, this.directives);
    this.ngSubmit.emit($event);
    return $event?.target?.method === "dialog";
  }
  /**
   * @description
   * Method called when the "reset" event is triggered on the form.
   */
  onReset() {
    this.resetForm();
  }
  /**
   * @description
   * Resets the form to an initial value and resets its submitted status.
   *
   * @param value The new value for the form.
   */
  resetForm(value = void 0) {
    this.form.reset(value);
    this.submitted = false;
  }
  /** @internal */
  _updateDomValue() {
    this.directives.forEach((dir) => {
      const oldCtrl = dir.control;
      const newCtrl = this.form.get(dir.path);
      if (oldCtrl !== newCtrl) {
        cleanUpControl(oldCtrl || null, dir);
        if (isFormControl(newCtrl)) {
          setUpControl(newCtrl, dir, this.callSetDisabledState);
          dir.control = newCtrl;
        }
      }
    });
    this.form._updateTreeValidity({
      emitEvent: false
    });
  }
  _setUpFormContainer(dir) {
    const ctrl = this.form.get(dir.path);
    setUpFormContainer(ctrl, dir);
    ctrl.updateValueAndValidity({
      emitEvent: false
    });
  }
  _cleanUpFormContainer(dir) {
    if (this.form) {
      const ctrl = this.form.get(dir.path);
      if (ctrl) {
        const isControlUpdated = cleanUpFormContainer(ctrl, dir);
        if (isControlUpdated) {
          ctrl.updateValueAndValidity({
            emitEvent: false
          });
        }
      }
    }
  }
  _updateRegistrations() {
    this.form._registerOnCollectionChange(this._onCollectionChange);
    if (this._oldForm) {
      this._oldForm._registerOnCollectionChange(() => {
      });
    }
  }
  _updateValidators() {
    setUpValidators(this.form, this);
    if (this._oldForm) {
      cleanUpValidators(this._oldForm, this);
    }
  }
  _checkFormPresent() {
    if (!this.form && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw missingFormException();
    }
  }
  static {
    this.\u0275fac = function FormGroupDirective_Factory(t) {
      return new (t || _FormGroupDirective)(\u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10), \u0275\u0275directiveInject(CALL_SET_DISABLED_STATE, 8));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _FormGroupDirective,
      selectors: [["", "formGroup", ""]],
      hostBindings: function FormGroupDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275listener("submit", function FormGroupDirective_submit_HostBindingHandler($event) {
            return ctx.onSubmit($event);
          })("reset", function FormGroupDirective_reset_HostBindingHandler() {
            return ctx.onReset();
          });
        }
      },
      inputs: {
        form: [InputFlags.None, "formGroup", "form"]
      },
      outputs: {
        ngSubmit: "ngSubmit"
      },
      exportAs: ["ngForm"],
      features: [\u0275\u0275ProvidersFeature([formDirectiveProvider]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormGroupDirective, [{
    type: Directive,
    args: [{
      selector: "[formGroup]",
      providers: [formDirectiveProvider],
      host: {
        "(submit)": "onSubmit($event)",
        "(reset)": "onReset()"
      },
      exportAs: "ngForm"
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [CALL_SET_DISABLED_STATE]
    }]
  }], {
    form: [{
      type: Input,
      args: ["formGroup"]
    }],
    ngSubmit: [{
      type: Output
    }]
  });
})();
var formGroupNameProvider = {
  provide: ControlContainer,
  useExisting: forwardRef(() => FormGroupName)
};
var FormGroupName = class _FormGroupName extends AbstractFormGroupDirective {
  constructor(parent, validators, asyncValidators) {
    super();
    this.name = null;
    this._parent = parent;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
  }
  /** @internal */
  _checkParentType() {
    if (_hasInvalidParent(this._parent) && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw groupParentException();
    }
  }
  static {
    this.\u0275fac = function FormGroupName_Factory(t) {
      return new (t || _FormGroupName)(\u0275\u0275directiveInject(ControlContainer, 13), \u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _FormGroupName,
      selectors: [["", "formGroupName", ""]],
      inputs: {
        name: [InputFlags.None, "formGroupName", "name"]
      },
      features: [\u0275\u0275ProvidersFeature([formGroupNameProvider]), \u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormGroupName, [{
    type: Directive,
    args: [{
      selector: "[formGroupName]",
      providers: [formGroupNameProvider]
    }]
  }], () => [{
    type: ControlContainer,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }, {
      type: SkipSelf
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }], {
    name: [{
      type: Input,
      args: ["formGroupName"]
    }]
  });
})();
var formArrayNameProvider = {
  provide: ControlContainer,
  useExisting: forwardRef(() => FormArrayName)
};
var FormArrayName = class _FormArrayName extends ControlContainer {
  constructor(parent, validators, asyncValidators) {
    super();
    this.name = null;
    this._parent = parent;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
  }
  /**
   * A lifecycle method called when the directive's inputs are initialized. For internal use only.
   * @throws If the directive does not have a valid parent.
   * @nodoc
   */
  ngOnInit() {
    this._checkParentType();
    this.formDirective.addFormArray(this);
  }
  /**
   * A lifecycle method called before the directive's instance is destroyed. For internal use only.
   * @nodoc
   */
  ngOnDestroy() {
    if (this.formDirective) {
      this.formDirective.removeFormArray(this);
    }
  }
  /**
   * @description
   * The `FormArray` bound to this directive.
   */
  get control() {
    return this.formDirective.getFormArray(this);
  }
  /**
   * @description
   * The top-level directive for this group if present, otherwise null.
   */
  get formDirective() {
    return this._parent ? this._parent.formDirective : null;
  }
  /**
   * @description
   * Returns an array that represents the path from the top-level form to this control.
   * Each index is the string name of the control on that level.
   */
  get path() {
    return controlPath(this.name == null ? this.name : this.name.toString(), this._parent);
  }
  _checkParentType() {
    if (_hasInvalidParent(this._parent) && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw arrayParentException();
    }
  }
  static {
    this.\u0275fac = function FormArrayName_Factory(t) {
      return new (t || _FormArrayName)(\u0275\u0275directiveInject(ControlContainer, 13), \u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _FormArrayName,
      selectors: [["", "formArrayName", ""]],
      inputs: {
        name: [InputFlags.None, "formArrayName", "name"]
      },
      features: [\u0275\u0275ProvidersFeature([formArrayNameProvider]), \u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormArrayName, [{
    type: Directive,
    args: [{
      selector: "[formArrayName]",
      providers: [formArrayNameProvider]
    }]
  }], () => [{
    type: ControlContainer,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }, {
      type: SkipSelf
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }], {
    name: [{
      type: Input,
      args: ["formArrayName"]
    }]
  });
})();
function _hasInvalidParent(parent) {
  return !(parent instanceof FormGroupName) && !(parent instanceof FormGroupDirective) && !(parent instanceof FormArrayName);
}
var controlNameBinding = {
  provide: NgControl,
  useExisting: forwardRef(() => FormControlName)
};
var FormControlName = class _FormControlName extends NgControl {
  /**
   * @description
   * Triggers a warning in dev mode that this input should not be used with reactive forms.
   */
  set isDisabled(isDisabled) {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      console.warn(disabledAttrWarning);
    }
  }
  static {
    this._ngModelWarningSentOnce = false;
  }
  constructor(parent, validators, asyncValidators, valueAccessors, _ngModelWarningConfig) {
    super();
    this._ngModelWarningConfig = _ngModelWarningConfig;
    this._added = false;
    this.name = null;
    this.update = new EventEmitter();
    this._ngModelWarningSent = false;
    this._parent = parent;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
    this.valueAccessor = selectValueAccessor(this, valueAccessors);
  }
  /** @nodoc */
  ngOnChanges(changes) {
    if (!this._added)
      this._setUpControl();
    if (isPropertyUpdated(changes, this.viewModel)) {
      if (typeof ngDevMode === "undefined" || ngDevMode) {
        _ngModelWarning("formControlName", _FormControlName, this, this._ngModelWarningConfig);
      }
      this.viewModel = this.model;
      this.formDirective.updateModel(this, this.model);
    }
  }
  /** @nodoc */
  ngOnDestroy() {
    if (this.formDirective) {
      this.formDirective.removeControl(this);
    }
  }
  /**
   * @description
   * Sets the new value for the view model and emits an `ngModelChange` event.
   *
   * @param newValue The new value for the view model.
   */
  viewToModelUpdate(newValue) {
    this.viewModel = newValue;
    this.update.emit(newValue);
  }
  /**
   * @description
   * Returns an array that represents the path from the top-level form to this control.
   * Each index is the string name of the control on that level.
   */
  get path() {
    return controlPath(this.name == null ? this.name : this.name.toString(), this._parent);
  }
  /**
   * @description
   * The top-level directive for this group if present, otherwise null.
   */
  get formDirective() {
    return this._parent ? this._parent.formDirective : null;
  }
  _checkParentType() {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      if (!(this._parent instanceof FormGroupName) && this._parent instanceof AbstractFormGroupDirective) {
        throw ngModelGroupException();
      } else if (!(this._parent instanceof FormGroupName) && !(this._parent instanceof FormGroupDirective) && !(this._parent instanceof FormArrayName)) {
        throw controlParentException();
      }
    }
  }
  _setUpControl() {
    this._checkParentType();
    this.control = this.formDirective.addControl(this);
    this._added = true;
  }
  static {
    this.\u0275fac = function FormControlName_Factory(t) {
      return new (t || _FormControlName)(\u0275\u0275directiveInject(ControlContainer, 13), \u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10), \u0275\u0275directiveInject(NG_VALUE_ACCESSOR, 10), \u0275\u0275directiveInject(NG_MODEL_WITH_FORM_CONTROL_WARNING, 8));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _FormControlName,
      selectors: [["", "formControlName", ""]],
      inputs: {
        name: [InputFlags.None, "formControlName", "name"],
        isDisabled: [InputFlags.None, "disabled", "isDisabled"],
        model: [InputFlags.None, "ngModel", "model"]
      },
      outputs: {
        update: "ngModelChange"
      },
      features: [\u0275\u0275ProvidersFeature([controlNameBinding]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormControlName, [{
    type: Directive,
    args: [{
      selector: "[formControlName]",
      providers: [controlNameBinding]
    }]
  }], () => [{
    type: ControlContainer,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }, {
      type: SkipSelf
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALUE_ACCESSOR]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [NG_MODEL_WITH_FORM_CONTROL_WARNING]
    }]
  }], {
    name: [{
      type: Input,
      args: ["formControlName"]
    }],
    isDisabled: [{
      type: Input,
      args: ["disabled"]
    }],
    model: [{
      type: Input,
      args: ["ngModel"]
    }],
    update: [{
      type: Output,
      args: ["ngModelChange"]
    }]
  });
})();
var SELECT_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SelectControlValueAccessor),
  multi: true
};
function _buildValueString$1(id, value) {
  if (id == null)
    return `${value}`;
  if (value && typeof value === "object")
    value = "Object";
  return `${id}: ${value}`.slice(0, 50);
}
function _extractId$1(valueString) {
  return valueString.split(":")[0];
}
var SelectControlValueAccessor = class _SelectControlValueAccessor extends BuiltInControlValueAccessor {
  constructor() {
    super(...arguments);
    this._optionMap = /* @__PURE__ */ new Map();
    this._idCounter = 0;
    this._compareWith = Object.is;
  }
  /**
   * @description
   * Tracks the option comparison algorithm for tracking identities when
   * checking for changes.
   */
  set compareWith(fn) {
    if (typeof fn !== "function" && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw new RuntimeError(1201, `compareWith must be a function, but received ${JSON.stringify(fn)}`);
    }
    this._compareWith = fn;
  }
  /**
   * Sets the "value" property on the select element.
   * @nodoc
   */
  writeValue(value) {
    this.value = value;
    const id = this._getOptionId(value);
    const valueString = _buildValueString$1(id, value);
    this.setProperty("value", valueString);
  }
  /**
   * Registers a function called when the control value changes.
   * @nodoc
   */
  registerOnChange(fn) {
    this.onChange = (valueString) => {
      this.value = this._getOptionValue(valueString);
      fn(this.value);
    };
  }
  /** @internal */
  _registerOption() {
    return (this._idCounter++).toString();
  }
  /** @internal */
  _getOptionId(value) {
    for (const id of this._optionMap.keys()) {
      if (this._compareWith(this._optionMap.get(id), value))
        return id;
    }
    return null;
  }
  /** @internal */
  _getOptionValue(valueString) {
    const id = _extractId$1(valueString);
    return this._optionMap.has(id) ? this._optionMap.get(id) : valueString;
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275SelectControlValueAccessor_BaseFactory;
      return function SelectControlValueAccessor_Factory(t) {
        return (\u0275SelectControlValueAccessor_BaseFactory || (\u0275SelectControlValueAccessor_BaseFactory = \u0275\u0275getInheritedFactory(_SelectControlValueAccessor)))(t || _SelectControlValueAccessor);
      };
    })();
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _SelectControlValueAccessor,
      selectors: [["select", "formControlName", "", 3, "multiple", ""], ["select", "formControl", "", 3, "multiple", ""], ["select", "ngModel", "", 3, "multiple", ""]],
      hostBindings: function SelectControlValueAccessor_HostBindings(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275listener("change", function SelectControlValueAccessor_change_HostBindingHandler($event) {
            return ctx.onChange($event.target.value);
          })("blur", function SelectControlValueAccessor_blur_HostBindingHandler() {
            return ctx.onTouched();
          });
        }
      },
      inputs: {
        compareWith: "compareWith"
      },
      features: [\u0275\u0275ProvidersFeature([SELECT_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelectControlValueAccessor, [{
    type: Directive,
    args: [{
      selector: "select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]",
      host: {
        "(change)": "onChange($event.target.value)",
        "(blur)": "onTouched()"
      },
      providers: [SELECT_VALUE_ACCESSOR]
    }]
  }], null, {
    compareWith: [{
      type: Input
    }]
  });
})();
var NgSelectOption = class _NgSelectOption {
  constructor(_element, _renderer, _select) {
    this._element = _element;
    this._renderer = _renderer;
    this._select = _select;
    if (this._select)
      this.id = this._select._registerOption();
  }
  /**
   * @description
   * Tracks the value bound to the option element. Unlike the value binding,
   * ngValue supports binding to objects.
   */
  set ngValue(value) {
    if (this._select == null)
      return;
    this._select._optionMap.set(this.id, value);
    this._setElementValue(_buildValueString$1(this.id, value));
    this._select.writeValue(this._select.value);
  }
  /**
   * @description
   * Tracks simple string values bound to the option element.
   * For objects, use the `ngValue` input binding.
   */
  set value(value) {
    this._setElementValue(value);
    if (this._select)
      this._select.writeValue(this._select.value);
  }
  /** @internal */
  _setElementValue(value) {
    this._renderer.setProperty(this._element.nativeElement, "value", value);
  }
  /** @nodoc */
  ngOnDestroy() {
    if (this._select) {
      this._select._optionMap.delete(this.id);
      this._select.writeValue(this._select.value);
    }
  }
  static {
    this.\u0275fac = function NgSelectOption_Factory(t) {
      return new (t || _NgSelectOption)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(SelectControlValueAccessor, 9));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _NgSelectOption,
      selectors: [["option"]],
      inputs: {
        ngValue: "ngValue",
        value: "value"
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgSelectOption, [{
    type: Directive,
    args: [{
      selector: "option"
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: SelectControlValueAccessor,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }]
  }], {
    ngValue: [{
      type: Input,
      args: ["ngValue"]
    }],
    value: [{
      type: Input,
      args: ["value"]
    }]
  });
})();
var SELECT_MULTIPLE_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SelectMultipleControlValueAccessor),
  multi: true
};
function _buildValueString(id, value) {
  if (id == null)
    return `${value}`;
  if (typeof value === "string")
    value = `'${value}'`;
  if (value && typeof value === "object")
    value = "Object";
  return `${id}: ${value}`.slice(0, 50);
}
function _extractId(valueString) {
  return valueString.split(":")[0];
}
var SelectMultipleControlValueAccessor = class _SelectMultipleControlValueAccessor extends BuiltInControlValueAccessor {
  constructor() {
    super(...arguments);
    this._optionMap = /* @__PURE__ */ new Map();
    this._idCounter = 0;
    this._compareWith = Object.is;
  }
  /**
   * @description
   * Tracks the option comparison algorithm for tracking identities when
   * checking for changes.
   */
  set compareWith(fn) {
    if (typeof fn !== "function" && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw new RuntimeError(1201, `compareWith must be a function, but received ${JSON.stringify(fn)}`);
    }
    this._compareWith = fn;
  }
  /**
   * Sets the "value" property on one or of more of the select's options.
   * @nodoc
   */
  writeValue(value) {
    this.value = value;
    let optionSelectedStateSetter;
    if (Array.isArray(value)) {
      const ids = value.map((v) => this._getOptionId(v));
      optionSelectedStateSetter = (opt, o) => {
        opt._setSelected(ids.indexOf(o.toString()) > -1);
      };
    } else {
      optionSelectedStateSetter = (opt, o) => {
        opt._setSelected(false);
      };
    }
    this._optionMap.forEach(optionSelectedStateSetter);
  }
  /**
   * Registers a function called when the control value changes
   * and writes an array of the selected options.
   * @nodoc
   */
  registerOnChange(fn) {
    this.onChange = (element) => {
      const selected = [];
      const selectedOptions = element.selectedOptions;
      if (selectedOptions !== void 0) {
        const options = selectedOptions;
        for (let i = 0; i < options.length; i++) {
          const opt = options[i];
          const val = this._getOptionValue(opt.value);
          selected.push(val);
        }
      } else {
        const options = element.options;
        for (let i = 0; i < options.length; i++) {
          const opt = options[i];
          if (opt.selected) {
            const val = this._getOptionValue(opt.value);
            selected.push(val);
          }
        }
      }
      this.value = selected;
      fn(selected);
    };
  }
  /** @internal */
  _registerOption(value) {
    const id = (this._idCounter++).toString();
    this._optionMap.set(id, value);
    return id;
  }
  /** @internal */
  _getOptionId(value) {
    for (const id of this._optionMap.keys()) {
      if (this._compareWith(this._optionMap.get(id)._value, value))
        return id;
    }
    return null;
  }
  /** @internal */
  _getOptionValue(valueString) {
    const id = _extractId(valueString);
    return this._optionMap.has(id) ? this._optionMap.get(id)._value : valueString;
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275SelectMultipleControlValueAccessor_BaseFactory;
      return function SelectMultipleControlValueAccessor_Factory(t) {
        return (\u0275SelectMultipleControlValueAccessor_BaseFactory || (\u0275SelectMultipleControlValueAccessor_BaseFactory = \u0275\u0275getInheritedFactory(_SelectMultipleControlValueAccessor)))(t || _SelectMultipleControlValueAccessor);
      };
    })();
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _SelectMultipleControlValueAccessor,
      selectors: [["select", "multiple", "", "formControlName", ""], ["select", "multiple", "", "formControl", ""], ["select", "multiple", "", "ngModel", ""]],
      hostBindings: function SelectMultipleControlValueAccessor_HostBindings(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275listener("change", function SelectMultipleControlValueAccessor_change_HostBindingHandler($event) {
            return ctx.onChange($event.target);
          })("blur", function SelectMultipleControlValueAccessor_blur_HostBindingHandler() {
            return ctx.onTouched();
          });
        }
      },
      inputs: {
        compareWith: "compareWith"
      },
      features: [\u0275\u0275ProvidersFeature([SELECT_MULTIPLE_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelectMultipleControlValueAccessor, [{
    type: Directive,
    args: [{
      selector: "select[multiple][formControlName],select[multiple][formControl],select[multiple][ngModel]",
      host: {
        "(change)": "onChange($event.target)",
        "(blur)": "onTouched()"
      },
      providers: [SELECT_MULTIPLE_VALUE_ACCESSOR]
    }]
  }], null, {
    compareWith: [{
      type: Input
    }]
  });
})();
var \u0275NgSelectMultipleOption = class _\u0275NgSelectMultipleOption {
  constructor(_element, _renderer, _select) {
    this._element = _element;
    this._renderer = _renderer;
    this._select = _select;
    if (this._select) {
      this.id = this._select._registerOption(this);
    }
  }
  /**
   * @description
   * Tracks the value bound to the option element. Unlike the value binding,
   * ngValue supports binding to objects.
   */
  set ngValue(value) {
    if (this._select == null)
      return;
    this._value = value;
    this._setElementValue(_buildValueString(this.id, value));
    this._select.writeValue(this._select.value);
  }
  /**
   * @description
   * Tracks simple string values bound to the option element.
   * For objects, use the `ngValue` input binding.
   */
  set value(value) {
    if (this._select) {
      this._value = value;
      this._setElementValue(_buildValueString(this.id, value));
      this._select.writeValue(this._select.value);
    } else {
      this._setElementValue(value);
    }
  }
  /** @internal */
  _setElementValue(value) {
    this._renderer.setProperty(this._element.nativeElement, "value", value);
  }
  /** @internal */
  _setSelected(selected) {
    this._renderer.setProperty(this._element.nativeElement, "selected", selected);
  }
  /** @nodoc */
  ngOnDestroy() {
    if (this._select) {
      this._select._optionMap.delete(this.id);
      this._select.writeValue(this._select.value);
    }
  }
  static {
    this.\u0275fac = function \u0275NgSelectMultipleOption_Factory(t) {
      return new (t || _\u0275NgSelectMultipleOption)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(SelectMultipleControlValueAccessor, 9));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _\u0275NgSelectMultipleOption,
      selectors: [["option"]],
      inputs: {
        ngValue: "ngValue",
        value: "value"
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(\u0275NgSelectMultipleOption, [{
    type: Directive,
    args: [{
      selector: "option"
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: SelectMultipleControlValueAccessor,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }]
  }], {
    ngValue: [{
      type: Input,
      args: ["ngValue"]
    }],
    value: [{
      type: Input,
      args: ["value"]
    }]
  });
})();
function toInteger(value) {
  return typeof value === "number" ? value : parseInt(value, 10);
}
function toFloat(value) {
  return typeof value === "number" ? value : parseFloat(value);
}
var AbstractValidatorDirective = class _AbstractValidatorDirective {
  constructor() {
    this._validator = nullValidator;
  }
  /** @nodoc */
  ngOnChanges(changes) {
    if (this.inputName in changes) {
      const input = this.normalizeInput(changes[this.inputName].currentValue);
      this._enabled = this.enabled(input);
      this._validator = this._enabled ? this.createValidator(input) : nullValidator;
      if (this._onChange) {
        this._onChange();
      }
    }
  }
  /** @nodoc */
  validate(control) {
    return this._validator(control);
  }
  /** @nodoc */
  registerOnValidatorChange(fn) {
    this._onChange = fn;
  }
  /**
   * @description
   * Determines whether this validator should be active or not based on an input.
   * Base class implementation checks whether an input is defined (if the value is different from
   * `null` and `undefined`). Validator classes that extend this base class can override this
   * function with the logic specific to a particular validator directive.
   */
  enabled(input) {
    return input != null;
  }
  static {
    this.\u0275fac = function AbstractValidatorDirective_Factory(t) {
      return new (t || _AbstractValidatorDirective)();
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _AbstractValidatorDirective,
      features: [\u0275\u0275NgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbstractValidatorDirective, [{
    type: Directive
  }], null, null);
})();
var MAX_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => MaxValidator),
  multi: true
};
var MaxValidator = class _MaxValidator extends AbstractValidatorDirective {
  constructor() {
    super(...arguments);
    this.inputName = "max";
    this.normalizeInput = (input) => toFloat(input);
    this.createValidator = (max) => maxValidator(max);
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275MaxValidator_BaseFactory;
      return function MaxValidator_Factory(t) {
        return (\u0275MaxValidator_BaseFactory || (\u0275MaxValidator_BaseFactory = \u0275\u0275getInheritedFactory(_MaxValidator)))(t || _MaxValidator);
      };
    })();
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _MaxValidator,
      selectors: [["input", "type", "number", "max", "", "formControlName", ""], ["input", "type", "number", "max", "", "formControl", ""], ["input", "type", "number", "max", "", "ngModel", ""]],
      hostVars: 1,
      hostBindings: function MaxValidator_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275attribute("max", ctx._enabled ? ctx.max : null);
        }
      },
      inputs: {
        max: "max"
      },
      features: [\u0275\u0275ProvidersFeature([MAX_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MaxValidator, [{
    type: Directive,
    args: [{
      selector: "input[type=number][max][formControlName],input[type=number][max][formControl],input[type=number][max][ngModel]",
      providers: [MAX_VALIDATOR],
      host: {
        "[attr.max]": "_enabled ? max : null"
      }
    }]
  }], null, {
    max: [{
      type: Input
    }]
  });
})();
var MIN_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => MinValidator),
  multi: true
};
var MinValidator = class _MinValidator extends AbstractValidatorDirective {
  constructor() {
    super(...arguments);
    this.inputName = "min";
    this.normalizeInput = (input) => toFloat(input);
    this.createValidator = (min) => minValidator(min);
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275MinValidator_BaseFactory;
      return function MinValidator_Factory(t) {
        return (\u0275MinValidator_BaseFactory || (\u0275MinValidator_BaseFactory = \u0275\u0275getInheritedFactory(_MinValidator)))(t || _MinValidator);
      };
    })();
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _MinValidator,
      selectors: [["input", "type", "number", "min", "", "formControlName", ""], ["input", "type", "number", "min", "", "formControl", ""], ["input", "type", "number", "min", "", "ngModel", ""]],
      hostVars: 1,
      hostBindings: function MinValidator_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275attribute("min", ctx._enabled ? ctx.min : null);
        }
      },
      inputs: {
        min: "min"
      },
      features: [\u0275\u0275ProvidersFeature([MIN_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MinValidator, [{
    type: Directive,
    args: [{
      selector: "input[type=number][min][formControlName],input[type=number][min][formControl],input[type=number][min][ngModel]",
      providers: [MIN_VALIDATOR],
      host: {
        "[attr.min]": "_enabled ? min : null"
      }
    }]
  }], null, {
    min: [{
      type: Input
    }]
  });
})();
var REQUIRED_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => RequiredValidator),
  multi: true
};
var CHECKBOX_REQUIRED_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => CheckboxRequiredValidator),
  multi: true
};
var RequiredValidator = class _RequiredValidator extends AbstractValidatorDirective {
  constructor() {
    super(...arguments);
    this.inputName = "required";
    this.normalizeInput = booleanAttribute;
    this.createValidator = (input) => requiredValidator;
  }
  /** @nodoc */
  enabled(input) {
    return input;
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275RequiredValidator_BaseFactory;
      return function RequiredValidator_Factory(t) {
        return (\u0275RequiredValidator_BaseFactory || (\u0275RequiredValidator_BaseFactory = \u0275\u0275getInheritedFactory(_RequiredValidator)))(t || _RequiredValidator);
      };
    })();
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _RequiredValidator,
      selectors: [["", "required", "", "formControlName", "", 3, "type", "checkbox"], ["", "required", "", "formControl", "", 3, "type", "checkbox"], ["", "required", "", "ngModel", "", 3, "type", "checkbox"]],
      hostVars: 1,
      hostBindings: function RequiredValidator_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275attribute("required", ctx._enabled ? "" : null);
        }
      },
      inputs: {
        required: "required"
      },
      features: [\u0275\u0275ProvidersFeature([REQUIRED_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RequiredValidator, [{
    type: Directive,
    args: [{
      selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]",
      providers: [REQUIRED_VALIDATOR],
      host: {
        "[attr.required]": '_enabled ? "" : null'
      }
    }]
  }], null, {
    required: [{
      type: Input
    }]
  });
})();
var CheckboxRequiredValidator = class _CheckboxRequiredValidator extends RequiredValidator {
  constructor() {
    super(...arguments);
    this.createValidator = (input) => requiredTrueValidator;
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275CheckboxRequiredValidator_BaseFactory;
      return function CheckboxRequiredValidator_Factory(t) {
        return (\u0275CheckboxRequiredValidator_BaseFactory || (\u0275CheckboxRequiredValidator_BaseFactory = \u0275\u0275getInheritedFactory(_CheckboxRequiredValidator)))(t || _CheckboxRequiredValidator);
      };
    })();
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _CheckboxRequiredValidator,
      selectors: [["input", "type", "checkbox", "required", "", "formControlName", ""], ["input", "type", "checkbox", "required", "", "formControl", ""], ["input", "type", "checkbox", "required", "", "ngModel", ""]],
      hostVars: 1,
      hostBindings: function CheckboxRequiredValidator_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275attribute("required", ctx._enabled ? "" : null);
        }
      },
      features: [\u0275\u0275ProvidersFeature([CHECKBOX_REQUIRED_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckboxRequiredValidator, [{
    type: Directive,
    args: [{
      selector: "input[type=checkbox][required][formControlName],input[type=checkbox][required][formControl],input[type=checkbox][required][ngModel]",
      providers: [CHECKBOX_REQUIRED_VALIDATOR],
      host: {
        "[attr.required]": '_enabled ? "" : null'
      }
    }]
  }], null, null);
})();
var EMAIL_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => EmailValidator),
  multi: true
};
var EmailValidator = class _EmailValidator extends AbstractValidatorDirective {
  constructor() {
    super(...arguments);
    this.inputName = "email";
    this.normalizeInput = booleanAttribute;
    this.createValidator = (input) => emailValidator;
  }
  /** @nodoc */
  enabled(input) {
    return input;
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275EmailValidator_BaseFactory;
      return function EmailValidator_Factory(t) {
        return (\u0275EmailValidator_BaseFactory || (\u0275EmailValidator_BaseFactory = \u0275\u0275getInheritedFactory(_EmailValidator)))(t || _EmailValidator);
      };
    })();
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _EmailValidator,
      selectors: [["", "email", "", "formControlName", ""], ["", "email", "", "formControl", ""], ["", "email", "", "ngModel", ""]],
      inputs: {
        email: "email"
      },
      features: [\u0275\u0275ProvidersFeature([EMAIL_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EmailValidator, [{
    type: Directive,
    args: [{
      selector: "[email][formControlName],[email][formControl],[email][ngModel]",
      providers: [EMAIL_VALIDATOR]
    }]
  }], null, {
    email: [{
      type: Input
    }]
  });
})();
var MIN_LENGTH_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => MinLengthValidator),
  multi: true
};
var MinLengthValidator = class _MinLengthValidator extends AbstractValidatorDirective {
  constructor() {
    super(...arguments);
    this.inputName = "minlength";
    this.normalizeInput = (input) => toInteger(input);
    this.createValidator = (minlength) => minLengthValidator(minlength);
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275MinLengthValidator_BaseFactory;
      return function MinLengthValidator_Factory(t) {
        return (\u0275MinLengthValidator_BaseFactory || (\u0275MinLengthValidator_BaseFactory = \u0275\u0275getInheritedFactory(_MinLengthValidator)))(t || _MinLengthValidator);
      };
    })();
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _MinLengthValidator,
      selectors: [["", "minlength", "", "formControlName", ""], ["", "minlength", "", "formControl", ""], ["", "minlength", "", "ngModel", ""]],
      hostVars: 1,
      hostBindings: function MinLengthValidator_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275attribute("minlength", ctx._enabled ? ctx.minlength : null);
        }
      },
      inputs: {
        minlength: "minlength"
      },
      features: [\u0275\u0275ProvidersFeature([MIN_LENGTH_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MinLengthValidator, [{
    type: Directive,
    args: [{
      selector: "[minlength][formControlName],[minlength][formControl],[minlength][ngModel]",
      providers: [MIN_LENGTH_VALIDATOR],
      host: {
        "[attr.minlength]": "_enabled ? minlength : null"
      }
    }]
  }], null, {
    minlength: [{
      type: Input
    }]
  });
})();
var MAX_LENGTH_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => MaxLengthValidator),
  multi: true
};
var MaxLengthValidator = class _MaxLengthValidator extends AbstractValidatorDirective {
  constructor() {
    super(...arguments);
    this.inputName = "maxlength";
    this.normalizeInput = (input) => toInteger(input);
    this.createValidator = (maxlength) => maxLengthValidator(maxlength);
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275MaxLengthValidator_BaseFactory;
      return function MaxLengthValidator_Factory(t) {
        return (\u0275MaxLengthValidator_BaseFactory || (\u0275MaxLengthValidator_BaseFactory = \u0275\u0275getInheritedFactory(_MaxLengthValidator)))(t || _MaxLengthValidator);
      };
    })();
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _MaxLengthValidator,
      selectors: [["", "maxlength", "", "formControlName", ""], ["", "maxlength", "", "formControl", ""], ["", "maxlength", "", "ngModel", ""]],
      hostVars: 1,
      hostBindings: function MaxLengthValidator_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275attribute("maxlength", ctx._enabled ? ctx.maxlength : null);
        }
      },
      inputs: {
        maxlength: "maxlength"
      },
      features: [\u0275\u0275ProvidersFeature([MAX_LENGTH_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MaxLengthValidator, [{
    type: Directive,
    args: [{
      selector: "[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]",
      providers: [MAX_LENGTH_VALIDATOR],
      host: {
        "[attr.maxlength]": "_enabled ? maxlength : null"
      }
    }]
  }], null, {
    maxlength: [{
      type: Input
    }]
  });
})();
var PATTERN_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => PatternValidator),
  multi: true
};
var PatternValidator = class _PatternValidator extends AbstractValidatorDirective {
  constructor() {
    super(...arguments);
    this.inputName = "pattern";
    this.normalizeInput = (input) => input;
    this.createValidator = (input) => patternValidator(input);
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275PatternValidator_BaseFactory;
      return function PatternValidator_Factory(t) {
        return (\u0275PatternValidator_BaseFactory || (\u0275PatternValidator_BaseFactory = \u0275\u0275getInheritedFactory(_PatternValidator)))(t || _PatternValidator);
      };
    })();
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _PatternValidator,
      selectors: [["", "pattern", "", "formControlName", ""], ["", "pattern", "", "formControl", ""], ["", "pattern", "", "ngModel", ""]],
      hostVars: 1,
      hostBindings: function PatternValidator_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275attribute("pattern", ctx._enabled ? ctx.pattern : null);
        }
      },
      inputs: {
        pattern: "pattern"
      },
      features: [\u0275\u0275ProvidersFeature([PATTERN_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PatternValidator, [{
    type: Directive,
    args: [{
      selector: "[pattern][formControlName],[pattern][formControl],[pattern][ngModel]",
      providers: [PATTERN_VALIDATOR],
      host: {
        "[attr.pattern]": "_enabled ? pattern : null"
      }
    }]
  }], null, {
    pattern: [{
      type: Input
    }]
  });
})();
var SHARED_FORM_DIRECTIVES = [\u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, RangeValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, SelectMultipleControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinLengthValidator, MaxLengthValidator, PatternValidator, CheckboxRequiredValidator, EmailValidator, MinValidator, MaxValidator];
var TEMPLATE_DRIVEN_DIRECTIVES = [NgModel, NgModelGroup, NgForm];
var REACTIVE_DRIVEN_DIRECTIVES = [FormControlDirective, FormGroupDirective, FormControlName, FormGroupName, FormArrayName];
var \u0275InternalFormsSharedModule = class _\u0275InternalFormsSharedModule {
  static {
    this.\u0275fac = function \u0275InternalFormsSharedModule_Factory(t) {
      return new (t || _\u0275InternalFormsSharedModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _\u0275InternalFormsSharedModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(\u0275InternalFormsSharedModule, [{
    type: NgModule,
    args: [{
      declarations: SHARED_FORM_DIRECTIVES,
      exports: SHARED_FORM_DIRECTIVES
    }]
  }], null, null);
})();
var FormArray = class extends AbstractControl {
  /**
   * Creates a new `FormArray` instance.
   *
   * @param controls An array of child controls. Each child control is given an index
   * where it is registered.
   *
   * @param validatorOrOpts A synchronous validator function, or an array of
   * such functions, or an `AbstractControlOptions` object that contains validation functions
   * and a validation trigger.
   *
   * @param asyncValidator A single async validator or array of async validator functions
   *
   */
  constructor(controls, validatorOrOpts, asyncValidator) {
    super(pickValidators(validatorOrOpts), pickAsyncValidators(asyncValidator, validatorOrOpts));
    this.controls = controls;
    this._initObservables();
    this._setUpdateStrategy(validatorOrOpts);
    this._setUpControls();
    this.updateValueAndValidity({
      onlySelf: true,
      // If `asyncValidator` is present, it will trigger control status change from `PENDING` to
      // `VALID` or `INVALID`.
      // The status should be broadcasted via the `statusChanges` observable, so we set `emitEvent`
      // to `true` to allow that during the control creation process.
      emitEvent: !!this.asyncValidator
    });
  }
  /**
   * Get the `AbstractControl` at the given `index` in the array.
   *
   * @param index Index in the array to retrieve the control. If `index` is negative, it will wrap
   *     around from the back, and if index is greatly negative (less than `-length`), the result is
   * undefined. This behavior is the same as `Array.at(index)`.
   */
  at(index) {
    return this.controls[this._adjustIndex(index)];
  }
  /**
   * Insert a new `AbstractControl` at the end of the array.
   *
   * @param control Form control to be inserted
   * @param options Specifies whether this FormArray instance should emit events after a new
   *     control is added.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges` observables emit events with the latest status and value when the control is
   * inserted. When false, no events are emitted.
   */
  push(control, options = {}) {
    this.controls.push(control);
    this._registerControl(control);
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
    this._onCollectionChange();
  }
  /**
   * Insert a new `AbstractControl` at the given `index` in the array.
   *
   * @param index Index in the array to insert the control. If `index` is negative, wraps around
   *     from the back. If `index` is greatly negative (less than `-length`), prepends to the array.
   * This behavior is the same as `Array.splice(index, 0, control)`.
   * @param control Form control to be inserted
   * @param options Specifies whether this FormArray instance should emit events after a new
   *     control is inserted.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges` observables emit events with the latest status and value when the control is
   * inserted. When false, no events are emitted.
   */
  insert(index, control, options = {}) {
    this.controls.splice(index, 0, control);
    this._registerControl(control);
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
  }
  /**
   * Remove the control at the given `index` in the array.
   *
   * @param index Index in the array to remove the control.  If `index` is negative, wraps around
   *     from the back. If `index` is greatly negative (less than `-length`), removes the first
   *     element. This behavior is the same as `Array.splice(index, 1)`.
   * @param options Specifies whether this FormArray instance should emit events after a
   *     control is removed.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges` observables emit events with the latest status and value when the control is
   * removed. When false, no events are emitted.
   */
  removeAt(index, options = {}) {
    let adjustedIndex = this._adjustIndex(index);
    if (adjustedIndex < 0)
      adjustedIndex = 0;
    if (this.controls[adjustedIndex])
      this.controls[adjustedIndex]._registerOnCollectionChange(() => {
      });
    this.controls.splice(adjustedIndex, 1);
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
  }
  /**
   * Replace an existing control.
   *
   * @param index Index in the array to replace the control. If `index` is negative, wraps around
   *     from the back. If `index` is greatly negative (less than `-length`), replaces the first
   *     element. This behavior is the same as `Array.splice(index, 1, control)`.
   * @param control The `AbstractControl` control to replace the existing control
   * @param options Specifies whether this FormArray instance should emit events after an
   *     existing control is replaced with a new one.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges` observables emit events with the latest status and value when the control is
   * replaced with a new one. When false, no events are emitted.
   */
  setControl(index, control, options = {}) {
    let adjustedIndex = this._adjustIndex(index);
    if (adjustedIndex < 0)
      adjustedIndex = 0;
    if (this.controls[adjustedIndex])
      this.controls[adjustedIndex]._registerOnCollectionChange(() => {
      });
    this.controls.splice(adjustedIndex, 1);
    if (control) {
      this.controls.splice(adjustedIndex, 0, control);
      this._registerControl(control);
    }
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
    this._onCollectionChange();
  }
  /**
   * Length of the control array.
   */
  get length() {
    return this.controls.length;
  }
  /**
   * Sets the value of the `FormArray`. It accepts an array that matches
   * the structure of the control.
   *
   * This method performs strict checks, and throws an error if you try
   * to set the value of a control that doesn't exist or if you exclude the
   * value of a control.
   *
   * @usageNotes
   * ### Set the values for the controls in the form array
   *
   * ```
   * const arr = new FormArray([
   *   new FormControl(),
   *   new FormControl()
   * ]);
   * console.log(arr.value);   // [null, null]
   *
   * arr.setValue(['Nancy', 'Drew']);
   * console.log(arr.value);   // ['Nancy', 'Drew']
   * ```
   *
   * @param value Array of values for the controls
   * @param options Configure options that determine how the control propagates changes and
   * emits events after the value changes
   *
   * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
   * is false.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges`
   * observables emit events with the latest status and value when the control value is updated.
   * When false, no events are emitted.
   * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
   * updateValueAndValidity} method.
   */
  setValue(value, options = {}) {
    assertAllValuesPresent(this, false, value);
    value.forEach((newValue, index) => {
      assertControlPresent(this, false, index);
      this.at(index).setValue(newValue, {
        onlySelf: true,
        emitEvent: options.emitEvent
      });
    });
    this.updateValueAndValidity(options);
  }
  /**
   * Patches the value of the `FormArray`. It accepts an array that matches the
   * structure of the control, and does its best to match the values to the correct
   * controls in the group.
   *
   * It accepts both super-sets and sub-sets of the array without throwing an error.
   *
   * @usageNotes
   * ### Patch the values for controls in a form array
   *
   * ```
   * const arr = new FormArray([
   *    new FormControl(),
   *    new FormControl()
   * ]);
   * console.log(arr.value);   // [null, null]
   *
   * arr.patchValue(['Nancy']);
   * console.log(arr.value);   // ['Nancy', null]
   * ```
   *
   * @param value Array of latest values for the controls
   * @param options Configure options that determine how the control propagates changes and
   * emits events after the value changes
   *
   * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
   * is false.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges` observables emit events with the latest status and value when the control
   * value is updated. When false, no events are emitted. The configuration options are passed to
   * the {@link AbstractControl#updateValueAndValidity updateValueAndValidity} method.
   */
  patchValue(value, options = {}) {
    if (value == null)
      return;
    value.forEach((newValue, index) => {
      if (this.at(index)) {
        this.at(index).patchValue(newValue, {
          onlySelf: true,
          emitEvent: options.emitEvent
        });
      }
    });
    this.updateValueAndValidity(options);
  }
  /**
   * Resets the `FormArray` and all descendants are marked `pristine` and `untouched`, and the
   * value of all descendants to null or null maps.
   *
   * You reset to a specific form state by passing in an array of states
   * that matches the structure of the control. The state is a standalone value
   * or a form state object with both a value and a disabled status.
   *
   * @usageNotes
   * ### Reset the values in a form array
   *
   * ```ts
   * const arr = new FormArray([
   *    new FormControl(),
   *    new FormControl()
   * ]);
   * arr.reset(['name', 'last name']);
   *
   * console.log(arr.value);  // ['name', 'last name']
   * ```
   *
   * ### Reset the values in a form array and the disabled status for the first control
   *
   * ```
   * arr.reset([
   *   {value: 'name', disabled: true},
   *   'last'
   * ]);
   *
   * console.log(arr.value);  // ['last']
   * console.log(arr.at(0).status);  // 'DISABLED'
   * ```
   *
   * @param value Array of values for the controls
   * @param options Configure options that determine how the control propagates changes and
   * emits events after the value changes
   *
   * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
   * is false.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges`
   * observables emit events with the latest status and value when the control is reset.
   * When false, no events are emitted.
   * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
   * updateValueAndValidity} method.
   */
  reset(value = [], options = {}) {
    this._forEachChild((control, index) => {
      control.reset(value[index], {
        onlySelf: true,
        emitEvent: options.emitEvent
      });
    });
    this._updatePristine(options);
    this._updateTouched(options);
    this.updateValueAndValidity(options);
  }
  /**
   * The aggregate value of the array, including any disabled controls.
   *
   * Reports all values regardless of disabled status.
   */
  getRawValue() {
    return this.controls.map((control) => control.getRawValue());
  }
  /**
   * Remove all controls in the `FormArray`.
   *
   * @param options Specifies whether this FormArray instance should emit events after all
   *     controls are removed.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges` observables emit events with the latest status and value when all controls
   * in this FormArray instance are removed. When false, no events are emitted.
   *
   * @usageNotes
   * ### Remove all elements from a FormArray
   *
   * ```ts
   * const arr = new FormArray([
   *    new FormControl(),
   *    new FormControl()
   * ]);
   * console.log(arr.length);  // 2
   *
   * arr.clear();
   * console.log(arr.length);  // 0
   * ```
   *
   * It's a simpler and more efficient alternative to removing all elements one by one:
   *
   * ```ts
   * const arr = new FormArray([
   *    new FormControl(),
   *    new FormControl()
   * ]);
   *
   * while (arr.length) {
   *    arr.removeAt(0);
   * }
   * ```
   */
  clear(options = {}) {
    if (this.controls.length < 1)
      return;
    this._forEachChild((control) => control._registerOnCollectionChange(() => {
    }));
    this.controls.splice(0);
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
  }
  /**
   * Adjusts a negative index by summing it with the length of the array. For very negative
   * indices, the result may remain negative.
   * @internal
   */
  _adjustIndex(index) {
    return index < 0 ? index + this.length : index;
  }
  /** @internal */
  _syncPendingControls() {
    let subtreeUpdated = this.controls.reduce((updated, child) => {
      return child._syncPendingControls() ? true : updated;
    }, false);
    if (subtreeUpdated)
      this.updateValueAndValidity({
        onlySelf: true
      });
    return subtreeUpdated;
  }
  /** @internal */
  _forEachChild(cb) {
    this.controls.forEach((control, index) => {
      cb(control, index);
    });
  }
  /** @internal */
  _updateValue() {
    this.value = this.controls.filter((control) => control.enabled || this.disabled).map((control) => control.value);
  }
  /** @internal */
  _anyControls(condition) {
    return this.controls.some((control) => control.enabled && condition(control));
  }
  /** @internal */
  _setUpControls() {
    this._forEachChild((control) => this._registerControl(control));
  }
  /** @internal */
  _allControlsDisabled() {
    for (const control of this.controls) {
      if (control.enabled)
        return false;
    }
    return this.controls.length > 0 || this.disabled;
  }
  _registerControl(control) {
    control.setParent(this);
    control._registerOnCollectionChange(this._onCollectionChange);
  }
  /** @internal */
  _find(name) {
    return this.at(name) ?? null;
  }
};
function isAbstractControlOptions(options) {
  return !!options && (options.asyncValidators !== void 0 || options.validators !== void 0 || options.updateOn !== void 0);
}
var FormBuilder = class _FormBuilder {
  constructor() {
    this.useNonNullable = false;
  }
  /**
   * @description
   * Returns a FormBuilder in which automatically constructed `FormControl` elements
   * have `{nonNullable: true}` and are non-nullable.
   *
   * **Constructing non-nullable controls**
   *
   * When constructing a control, it will be non-nullable, and will reset to its initial value.
   *
   * ```ts
   * let nnfb = new FormBuilder().nonNullable;
   * let name = nnfb.control('Alex'); // FormControl<string>
   * name.reset();
   * console.log(name); // 'Alex'
   * ```
   *
   * **Constructing non-nullable groups or arrays**
   *
   * When constructing a group or array, all automatically created inner controls will be
   * non-nullable, and will reset to their initial values.
   *
   * ```ts
   * let nnfb = new FormBuilder().nonNullable;
   * let name = nnfb.group({who: 'Alex'}); // FormGroup<{who: FormControl<string>}>
   * name.reset();
   * console.log(name); // {who: 'Alex'}
   * ```
   * **Constructing *nullable* fields on groups or arrays**
   *
   * It is still possible to have a nullable field. In particular, any `FormControl` which is
   * *already* constructed will not be altered. For example:
   *
   * ```ts
   * let nnfb = new FormBuilder().nonNullable;
   * // FormGroup<{who: FormControl<string|null>}>
   * let name = nnfb.group({who: new FormControl('Alex')});
   * name.reset(); console.log(name); // {who: null}
   * ```
   *
   * Because the inner control is constructed explicitly by the caller, the builder has
   * no control over how it is created, and cannot exclude the `null`.
   */
  get nonNullable() {
    const nnfb = new _FormBuilder();
    nnfb.useNonNullable = true;
    return nnfb;
  }
  group(controls, options = null) {
    const reducedControls = this._reduceControls(controls);
    let newOptions = {};
    if (isAbstractControlOptions(options)) {
      newOptions = options;
    } else if (options !== null) {
      newOptions.validators = options.validator;
      newOptions.asyncValidators = options.asyncValidator;
    }
    return new FormGroup(reducedControls, newOptions);
  }
  /**
   * @description
   * Constructs a new `FormRecord` instance. Accepts a single generic argument, which is an object
   * containing all the keys and corresponding inner control types.
   *
   * @param controls A collection of child controls. The key for each child is the name
   * under which it is registered.
   *
   * @param options Configuration options object for the `FormRecord`. The object should have the
   * `AbstractControlOptions` type and might contain the following fields:
   * * `validators`: A synchronous validator function, or an array of validator functions.
   * * `asyncValidators`: A single async validator or array of async validator functions.
   * * `updateOn`: The event upon which the control should be updated (options: 'change' | 'blur'
   * | submit').
   */
  record(controls, options = null) {
    const reducedControls = this._reduceControls(controls);
    return new FormRecord(reducedControls, options);
  }
  /**
   * @description
   * Constructs a new `FormControl` with the given state, validators and options. Sets
   * `{nonNullable: true}` in the options to get a non-nullable control. Otherwise, the
   * control will be nullable. Accepts a single generic argument, which is the type  of the
   * control's value.
   *
   * @param formState Initializes the control with an initial state value, or
   * with an object that contains both a value and a disabled status.
   *
   * @param validatorOrOpts A synchronous validator function, or an array of
   * such functions, or a `FormControlOptions` object that contains
   * validation functions and a validation trigger.
   *
   * @param asyncValidator A single async validator or array of async validator
   * functions.
   *
   * @usageNotes
   *
   * ### Initialize a control as disabled
   *
   * The following example returns a control with an initial value in a disabled state.
   *
   * <code-example path="forms/ts/formBuilder/form_builder_example.ts" region="disabled-control">
   * </code-example>
   */
  control(formState, validatorOrOpts, asyncValidator) {
    let newOptions = {};
    if (!this.useNonNullable) {
      return new FormControl(formState, validatorOrOpts, asyncValidator);
    }
    if (isAbstractControlOptions(validatorOrOpts)) {
      newOptions = validatorOrOpts;
    } else {
      newOptions.validators = validatorOrOpts;
      newOptions.asyncValidators = asyncValidator;
    }
    return new FormControl(formState, __spreadProps(__spreadValues({}, newOptions), {
      nonNullable: true
    }));
  }
  /**
   * Constructs a new `FormArray` from the given array of configurations,
   * validators and options. Accepts a single generic argument, which is the type of each control
   * inside the array.
   *
   * @param controls An array of child controls or control configs. Each child control is given an
   *     index when it is registered.
   *
   * @param validatorOrOpts A synchronous validator function, or an array of such functions, or an
   *     `AbstractControlOptions` object that contains
   * validation functions and a validation trigger.
   *
   * @param asyncValidator A single async validator or array of async validator functions.
   */
  array(controls, validatorOrOpts, asyncValidator) {
    const createdControls = controls.map((c) => this._createControl(c));
    return new FormArray(createdControls, validatorOrOpts, asyncValidator);
  }
  /** @internal */
  _reduceControls(controls) {
    const createdControls = {};
    Object.keys(controls).forEach((controlName) => {
      createdControls[controlName] = this._createControl(controls[controlName]);
    });
    return createdControls;
  }
  /** @internal */
  _createControl(controls) {
    if (controls instanceof FormControl) {
      return controls;
    } else if (controls instanceof AbstractControl) {
      return controls;
    } else if (Array.isArray(controls)) {
      const value = controls[0];
      const validator = controls.length > 1 ? controls[1] : null;
      const asyncValidator = controls.length > 2 ? controls[2] : null;
      return this.control(value, validator, asyncValidator);
    } else {
      return this.control(controls);
    }
  }
  static {
    this.\u0275fac = function FormBuilder_Factory(t) {
      return new (t || _FormBuilder)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _FormBuilder,
      factory: _FormBuilder.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormBuilder, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var NonNullableFormBuilder = class _NonNullableFormBuilder {
  static {
    this.\u0275fac = function NonNullableFormBuilder_Factory(t) {
      return new (t || _NonNullableFormBuilder)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _NonNullableFormBuilder,
      factory: () => (() => inject(FormBuilder).nonNullable)(),
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NonNullableFormBuilder, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => inject(FormBuilder).nonNullable
    }]
  }], null, null);
})();
var UntypedFormBuilder = class _UntypedFormBuilder extends FormBuilder {
  group(controlsConfig, options = null) {
    return super.group(controlsConfig, options);
  }
  /**
   * Like `FormBuilder#control`, except the resulting control is untyped.
   */
  control(formState, validatorOrOpts, asyncValidator) {
    return super.control(formState, validatorOrOpts, asyncValidator);
  }
  /**
   * Like `FormBuilder#array`, except the resulting array is untyped.
   */
  array(controlsConfig, validatorOrOpts, asyncValidator) {
    return super.array(controlsConfig, validatorOrOpts, asyncValidator);
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275UntypedFormBuilder_BaseFactory;
      return function UntypedFormBuilder_Factory(t) {
        return (\u0275UntypedFormBuilder_BaseFactory || (\u0275UntypedFormBuilder_BaseFactory = \u0275\u0275getInheritedFactory(_UntypedFormBuilder)))(t || _UntypedFormBuilder);
      };
    })();
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _UntypedFormBuilder,
      factory: _UntypedFormBuilder.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UntypedFormBuilder, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var VERSION = new Version("17.3.12");
var FormsModule = class _FormsModule {
  /**
   * @description
   * Provides options for configuring the forms module.
   *
   * @param opts An object of configuration options
   * * `callSetDisabledState` Configures whether to `always` call `setDisabledState`, which is more
   * correct, or to only call it `whenDisabled`, which is the legacy behavior.
   */
  static withConfig(opts) {
    return {
      ngModule: _FormsModule,
      providers: [{
        provide: CALL_SET_DISABLED_STATE,
        useValue: opts.callSetDisabledState ?? setDisabledStateDefault
      }]
    };
  }
  static {
    this.\u0275fac = function FormsModule_Factory(t) {
      return new (t || _FormsModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _FormsModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
      imports: [\u0275InternalFormsSharedModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormsModule, [{
    type: NgModule,
    args: [{
      declarations: TEMPLATE_DRIVEN_DIRECTIVES,
      exports: [\u0275InternalFormsSharedModule, TEMPLATE_DRIVEN_DIRECTIVES]
    }]
  }], null, null);
})();
var ReactiveFormsModule = class _ReactiveFormsModule {
  /**
   * @description
   * Provides options for configuring the reactive forms module.
   *
   * @param opts An object of configuration options
   * * `warnOnNgModelWithFormControl` Configures when to emit a warning when an `ngModel`
   * binding is used with reactive form directives.
   * * `callSetDisabledState` Configures whether to `always` call `setDisabledState`, which is more
   * correct, or to only call it `whenDisabled`, which is the legacy behavior.
   */
  static withConfig(opts) {
    return {
      ngModule: _ReactiveFormsModule,
      providers: [{
        provide: NG_MODEL_WITH_FORM_CONTROL_WARNING,
        useValue: opts.warnOnNgModelWithFormControl ?? "always"
      }, {
        provide: CALL_SET_DISABLED_STATE,
        useValue: opts.callSetDisabledState ?? setDisabledStateDefault
      }]
    };
  }
  static {
    this.\u0275fac = function ReactiveFormsModule_Factory(t) {
      return new (t || _ReactiveFormsModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _ReactiveFormsModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
      imports: [\u0275InternalFormsSharedModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReactiveFormsModule, [{
    type: NgModule,
    args: [{
      declarations: [REACTIVE_DRIVEN_DIRECTIVES],
      exports: [\u0275InternalFormsSharedModule, REACTIVE_DRIVEN_DIRECTIVES]
    }]
  }], null, null);
})();

export {
  DataService,
  DefaultValueAccessor,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  ɵNgNoValidate,
  SelectControlValueAccessor,
  NgSelectOption,
  ɵNgSelectMultipleOption,
  RequiredValidator,
  FormsModule
};
/*! Bundled license information:

@angular/forms/fesm2022/forms.mjs:
  (**
   * @license Angular v17.3.12
   * (c) 2010-2024 Google LLC. https://angular.io/
   * License: MIT
   *)
*/
//# sourceMappingURL=chunk-FBYEDTVH.js.map
