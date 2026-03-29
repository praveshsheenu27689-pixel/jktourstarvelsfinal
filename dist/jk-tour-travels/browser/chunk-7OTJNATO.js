import {
  ActivatedRoute,
  Router
} from "./chunk-SDN65SGC.js";
import {
  CommonModule,
  NgForOf,
  NgIf,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-U7W74ZSJ.js";

// src/app/components/category-page/category-page.component.ts
function CategoryPageComponent_div_0_li_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275element(1, "i", 32);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const h_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", h_r3, " ");
  }
}
function CategoryPageComponent_div_0_div_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33)(1, "div", 34);
    \u0275\u0275element(2, "i");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h4");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const f_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275classMap(f_r4.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(f_r4.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(f_r4.desc);
  }
}
function CategoryPageComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "section", 3);
    \u0275\u0275element(2, "div", 4);
    \u0275\u0275elementStart(3, "div", 5)(4, "button", 6);
    \u0275\u0275listener("click", function CategoryPageComponent_div_0_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goHome());
    });
    \u0275\u0275element(5, "i", 7);
    \u0275\u0275text(6, " Back ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 8);
    \u0275\u0275element(8, "i", 9);
    \u0275\u0275text(9, " Business Tour");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "h1");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p", 10);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "section", 11)(15, "div", 12)(16, "div", 13)(17, "div", 14)(18, "h2");
    \u0275\u0275text(19, "About This Experience");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "p");
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 15)(23, "h4");
    \u0275\u0275element(24, "i", 16);
    \u0275\u0275text(25, " What's Covered");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "ul");
    \u0275\u0275template(27, CategoryPageComponent_div_0_li_27_Template, 3, 1, "li", 17);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "div", 18)(29, "div", 19)(30, "div", 20);
    \u0275\u0275element(31, "i", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "h3");
    \u0275\u0275text(33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "p");
    \u0275\u0275text(35, "Talk to our travel experts and get a customized itinerary tailored to your preferences and budget.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "a", 22);
    \u0275\u0275element(37, "i", 23);
    \u0275\u0275text(38, " Call: +91 94224 21993 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "a", 24);
    \u0275\u0275element(40, "i", 25);
    \u0275\u0275text(41, " WhatsApp Us ");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(42, "section", 26)(43, "div", 12)(44, "div", 27)(45, "span", 28);
    \u0275\u0275element(46, "i", 29);
    \u0275\u0275text(47, " Why Choose Us");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "h2");
    \u0275\u0275text(49, "What Makes It Special");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "div", 30);
    \u0275\u0275template(51, CategoryPageComponent_div_0_div_51_Template, 7, 4, "div", 31);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-image", "url(" + ctx_r1.exp.heroImage + ")");
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r1.exp.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.exp.tagline);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.exp.description);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngForOf", ctx_r1.exp.highlights);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("Plan Your ", ctx_r1.exp.name, "");
    \u0275\u0275advance(18);
    \u0275\u0275property("ngForOf", ctx_r1.exp.features);
  }
}
function CategoryPageComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275element(1, "i", 36);
    \u0275\u0275elementStart(2, "h2");
    \u0275\u0275text(3, "Experience not found");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 37);
    \u0275\u0275listener("click", function CategoryPageComponent_ng_template_1_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goHome());
    });
    \u0275\u0275text(5, "Go Home");
    \u0275\u0275elementEnd()();
  }
}
var CategoryPageComponent = class _CategoryPageComponent {
  constructor(route, router) {
    this.route = route;
    this.router = router;
    this.exp = null;
    this.notFound = false;
    this.experiences = {
      "beach": {
        name: "Beach Holidays",
        tagline: "Sun, sand & endless horizons",
        heroImage: "https://cdn.yourholiday.me/static/dynimg/itinerary/72/600x450/2185294-2185293_pexels-photo-1450353.jpg",
        description: "Escape to the world's most breathtaking beaches. From the turquoise lagoons of the Maldives to the golden shores of Goa and the exotic beaches of Bali \u2014 we craft the perfect beach holiday tailored just for you.",
        highlights: ["Maldives overwater villas", "Bali beach resorts", "Goa beach shacks & water sports", "Andaman coral reefs", "Phuket island hopping", "Seychelles private beaches"],
        features: [
          { icon: "fas fa-umbrella-beach", title: "Private Beach Access", desc: "Exclusive beach resorts with private access and stunning ocean views." },
          { icon: "fas fa-water", title: "Water Sports", desc: "Snorkeling, scuba diving, parasailing, jet skiing and more." },
          { icon: "fas fa-ship", title: "Island Hopping", desc: "Explore multiple islands on curated boat tours and cruises." },
          { icon: "fas fa-fish", title: "Marine Life", desc: "Discover vibrant coral reefs and exotic marine ecosystems." }
        ]
      },
      "family": {
        name: "Family Holidays",
        tagline: "Creating memories that last a lifetime",
        heroImage: "https://cdn.yourholiday.me/static/dynimg/itinerary/23/600x450/2185310-2185309_pexels-photo-4205505.jpg",
        description: "Family travel is our specialty. We design holidays that delight every age \u2014 from thrilling theme parks for kids to cultural experiences for adults. Safe, comfortable and unforgettable family adventures await.",
        highlights: ["Universal Studios Singapore", "Dubai theme parks", "Bali family resorts", "Kerala houseboat", "Rajasthan heritage tours", "Himachal snow adventures"],
        features: [
          { icon: "fas fa-child", title: "Kid-Friendly Activities", desc: "Theme parks, wildlife safaris and interactive cultural experiences." },
          { icon: "fas fa-hotel", title: "Family Resorts", desc: "Spacious family rooms and suites with dedicated kids' facilities." },
          { icon: "fas fa-shield-alt", title: "Safe & Secure", desc: "Vetted accommodations and licensed guides for complete peace of mind." },
          { icon: "fas fa-utensils", title: "All-Inclusive Meals", desc: "Curated menus with options for all dietary preferences." }
        ]
      },
      "luxury": {
        name: "Luxury Travel",
        tagline: "Where every detail is perfection",
        heroImage: "https://cdn.yourholiday.me/static/dynimg/itinerary/99/600x450/2185274-2185273_pexels-photo-279574.jpg",
        description: "Indulge in the finest travel experiences the world has to offer. Private villas, Michelin-starred dining, exclusive yacht charters and bespoke itineraries \u2014 luxury travel redefined by JK Tours & Travels.",
        highlights: ["Maldives water villas", "Dubai 5-star hotels", "Swiss luxury trains", "Private yacht charters", "Exclusive spa retreats", "VIP airport transfers"],
        features: [
          { icon: "fas fa-gem", title: "5-Star Accommodations", desc: "Handpicked luxury hotels, private villas and overwater bungalows." },
          { icon: "fas fa-concierge-bell", title: "Personal Concierge", desc: "24/7 dedicated concierge service throughout your journey." },
          { icon: "fas fa-plane", title: "Business Class Flights", desc: "Premium cabin upgrades and private jet options available." },
          { icon: "fas fa-spa", title: "Wellness & Spa", desc: "World-class spa treatments and wellness retreats included." }
        ]
      },
      "culture-and-heritage": {
        name: "Culture & Heritage",
        tagline: "Discover the soul of civilizations",
        heroImage: "https://cdn.yourholiday.me/static/dynimg/itinerary/37/600x450/2185258-2185257_pexels-photo-209741.jpg",
        description: "Immerse yourself in the rich tapestry of world cultures. From the ancient forts of Rajasthan to the temples of Kyoto, the ruins of Rome to the monasteries of Ladakh \u2014 every journey is a lesson in history.",
        highlights: ["Rajasthan forts & palaces", "Rome & Vatican City", "Kyoto temples", "Ladakh monasteries", "Angkor Wat Cambodia", "Istanbul Grand Bazaar"],
        features: [
          { icon: "fas fa-landmark", title: "UNESCO Heritage Sites", desc: "Guided tours of the world's most significant cultural landmarks." },
          { icon: "fas fa-book", title: "Expert Historians", desc: "Knowledgeable local guides who bring history to life." },
          { icon: "fas fa-palette", title: "Art & Architecture", desc: "Explore museums, galleries and architectural marvels." },
          { icon: "fas fa-drum", title: "Cultural Shows", desc: "Kathakali, Kecak fire dance, Rajasthani folk performances and more." }
        ]
      },
      "all-inclusive-holidays": {
        name: "All Inclusive Holidays",
        tagline: "Everything included \u2014 zero worries",
        heroImage: "https://cdn.yourholiday.me/static/dynimg/itinerary/62/600x450/2186114-2186113_pexels-photo-3184183.jpg",
        description: "The ultimate stress-free holiday experience. Flights, hotels, meals, transfers, sightseeing \u2014 everything is taken care of. Just pack your bags and enjoy every moment without worrying about a single detail.",
        highlights: ["Flights included", "Hotel stays covered", "All meals provided", "Airport transfers", "Guided sightseeing", "Travel insurance"],
        features: [
          { icon: "fas fa-plane", title: "Return Flights", desc: "Return flights from Mumbai/Delhi included in all packages." },
          { icon: "fas fa-hotel", title: "Hotel Stays", desc: "Premium hotel accommodations throughout your journey." },
          { icon: "fas fa-utensils", title: "All Meals", desc: "Breakfast, lunch and dinner included at quality restaurants." },
          { icon: "fas fa-bus", title: "All Transfers", desc: "Airport, hotel and sightseeing transfers fully covered." }
        ]
      },
      "cultral-safaris": {
        name: "Cultural Safaris",
        tagline: "Wild encounters & tribal traditions",
        heroImage: "https://cdn.yourholiday.me/static/dynimg/itinerary/86/600x450/2186480-2186479_kenya-6.jpg",
        description: "Experience the raw beauty of wildlife and the richness of tribal cultures. From tiger safaris in Ranthambore to elephant encounters in Chiang Mai \u2014 these are journeys that connect you with nature and humanity.",
        highlights: ["Ranthambore tiger safari", "Jim Corbett National Park", "Chiang Mai elephant sanctuary", "Wayanad wildlife", "Kaziranga rhino safari", "Sundarbans mangroves"],
        features: [
          { icon: "fas fa-paw", title: "Wildlife Safaris", desc: "Expert naturalist-guided jeep safaris in national parks." },
          { icon: "fas fa-leaf", title: "Eco-Tourism", desc: "Responsible travel that supports local conservation efforts." },
          { icon: "fas fa-camera", title: "Photography Tours", desc: "Dedicated wildlife photography sessions at golden hours." },
          { icon: "fas fa-users", title: "Tribal Experiences", desc: "Authentic interactions with indigenous communities." }
        ]
      },
      "honeymoon": {
        name: "Honeymoon Packages",
        tagline: "Begin your forever in paradise",
        heroImage: "https://cdn.yourholiday.me/static/dynimg/destination/54/1200x900/2188294-2188293_.jpg",
        description: "Your love story deserves the most magical backdrop. From candlelit dinners on Maldivian beaches to gondola rides in Venice, from Bali's romantic rice terraces to Kashmir's shikara rides on Dal Lake \u2014 we make your honeymoon unforgettable.",
        highlights: ["Maldives water villas", "Bali romantic resorts", "Kashmir houseboat", "Paris city of love", "Santorini Greece", "Coorg coffee estates"],
        features: [
          { icon: "fas fa-heart", title: "Romantic Setups", desc: "Flower decorations, candle light dinners and couple spa sessions." },
          { icon: "fas fa-ring", title: "Honeymoon Specials", desc: "Exclusive honeymoon packages with complimentary surprises." },
          { icon: "fas fa-camera", title: "Couple Photoshoots", desc: "Professional photography sessions at scenic locations." },
          { icon: "fas fa-bed", title: "Luxury Suites", desc: "Premium couple suites with ocean views and private pools." }
        ]
      },
      "experiences": {
        name: "Unique Experiences",
        tagline: "Beyond ordinary \u2014 extraordinary adventures",
        heroImage: "https://cdn.yourholiday.me/static/dynimg/itinerary/45/1200x900/3192010-3192009_aaron-sebastian-bfgeyps0znk-unsplash.jpg",
        description: "Travel is not just about places \u2014 it's about experiences that transform you. Hot air balloon rides over Cappadocia, bungee jumping in Rishikesh, stargazing in Ladakh, cooking classes in Thailand \u2014 we curate moments that become stories.",
        highlights: ["Hot air balloon Cappadocia", "Bungee jumping Rishikesh", "Stargazing Ladakh", "Cooking class Thailand", "Paragliding Bir Billing", "Scuba diving Andamans"],
        features: [
          { icon: "fas fa-parachute-box", title: "Adventure Sports", desc: "Skydiving, bungee jumping, paragliding and white water rafting." },
          { icon: "fas fa-star", title: "Once-in-a-Lifetime", desc: "Curated bucket-list experiences you'll treasure forever." },
          { icon: "fas fa-mountain", title: "Trekking & Hiking", desc: "Guided treks through Himalayas, Alps and tropical rainforests." },
          { icon: "fas fa-utensils", title: "Culinary Tours", desc: "Street food walks, cooking classes and farm-to-table experiences." }
        ]
      }
    };
  }
  ngOnInit() {
    const name = this.route.snapshot.paramMap.get("name")?.toLowerCase().replace(/\s+/g, "-") ?? "";
    this.exp = this.experiences[name] ?? null;
    if (!this.exp)
      this.notFound = true;
  }
  goHome() {
    this.router.navigate(["/"]);
  }
  static {
    this.\u0275fac = function CategoryPageComponent_Factory(t) {
      return new (t || _CategoryPageComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CategoryPageComponent, selectors: [["app-category-page"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 3, vars: 2, consts: [["notFoundTpl", ""], ["class", "cat-page", 4, "ngIf", "ngIfElse"], [1, "cat-page"], [1, "cp-hero"], [1, "cp-hero-overlay"], [1, "cp-hero-content"], [1, "cp-back", 3, "click"], [1, "fas", "fa-arrow-left"], [1, "cp-hero-tag"], [1, "fas", "fa-th"], [1, "cp-tagline"], [1, "cp-desc-section"], [1, "container"], [1, "cp-desc-grid"], [1, "cp-desc-left"], [1, "cp-highlights"], [1, "fas", "fa-check-circle"], [4, "ngFor", "ngForOf"], [1, "cp-desc-right"], [1, "cp-cta-card"], [1, "cp-cta-icon"], [1, "fas", "fa-headset"], ["href", "tel:+919422421993", 1, "btn", "btn-primary"], [1, "fas", "fa-phone"], ["href", "https://wa.me/919422421993", "target", "_blank", 1, "btn", "btn-outline"], [1, "fab", "fa-whatsapp"], [1, "cp-features-section"], [1, "section-header"], [1, "section-tag"], [1, "fas", "fa-star"], [1, "cp-features-grid"], ["class", "cp-feature-card", 4, "ngFor", "ngForOf"], [1, "fas", "fa-map-marker-alt"], [1, "cp-feature-card"], [1, "cp-feature-icon"], [1, "cp-notfound"], [1, "fas", "fa-compass"], [1, "btn", "btn-primary", 3, "click"]], template: function CategoryPageComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, CategoryPageComponent_div_0_Template, 52, 8, "div", 1)(1, CategoryPageComponent_ng_template_1_Template, 6, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const notFoundTpl_r6 = \u0275\u0275reference(2);
        \u0275\u0275property("ngIf", ctx.exp)("ngIfElse", notFoundTpl_r6);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf], styles: ["\n\n.cp-hero[_ngcontent-%COMP%] {\n  height: 65vh;\n  min-height: 420px;\n  background-size: cover;\n  background-position: center;\n  position: relative;\n  display: flex;\n  align-items: flex-end;\n}\n.cp-hero[_ngcontent-%COMP%]   .cp-hero-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      to top,\n      rgba(0, 0, 0, 0.78) 0%,\n      rgba(0, 0, 0, 0.2) 60%,\n      transparent 100%);\n}\n.cp-hero[_ngcontent-%COMP%]   .cp-hero-content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  padding: 3rem 2rem;\n  max-width: 1280px;\n  width: 100%;\n  margin: 0 auto;\n  animation: fadeInUp 0.7s ease both;\n}\n.cp-hero[_ngcontent-%COMP%]   .cp-hero-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: clamp(2.2rem, 5vw, 3.8rem);\n  color: #fff;\n  margin: 0.5rem 0 0.4rem;\n  text-shadow: 0 2px 12px rgba(0, 0, 0, 0.4);\n}\n.cp-hero[_ngcontent-%COMP%]   .cp-hero-content[_ngcontent-%COMP%]   .cp-tagline[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.85);\n  font-size: 1.1rem;\n  font-style: italic;\n}\n.cp-hero[_ngcontent-%COMP%]   .cp-back[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n  color: rgba(255, 255, 255, 0.9);\n  font-size: 0.85rem;\n  font-weight: 600;\n  background: rgba(255, 255, 255, 0.15);\n  -webkit-backdrop-filter: blur(8px);\n  backdrop-filter: blur(8px);\n  border: 1px solid rgba(255, 255, 255, 0.3);\n  padding: 0.45rem 1rem;\n  border-radius: 50px;\n  cursor: pointer;\n  transition: var(--transition);\n  margin-bottom: 1rem;\n}\n.cp-hero[_ngcontent-%COMP%]   .cp-back[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.25);\n}\n.cp-hero[_ngcontent-%COMP%]   .cp-hero-tag[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.35rem;\n  background: var(--accent);\n  color: #fff;\n  font-size: 0.72rem;\n  font-weight: 700;\n  letter-spacing: 2px;\n  text-transform: uppercase;\n  padding: 0.35rem 0.9rem;\n  border-radius: 50px;\n  margin-bottom: 0.6rem;\n}\n.cp-desc-section[_ngcontent-%COMP%] {\n  padding: 5rem 0;\n  background: var(--bg-white);\n}\n.cp-desc-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 340px;\n  gap: 3rem;\n  align-items: start;\n}\n@media (max-width: 900px) {\n  .cp-desc-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.cp-desc-left[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n  color: var(--text-dark);\n  margin-bottom: 1rem;\n}\n.cp-desc-left[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: var(--text-mid);\n  line-height: 1.8;\n  margin-bottom: 2rem;\n}\n.cp-highlights[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 1rem;\n  font-weight: 700;\n  color: var(--text-dark);\n  margin-bottom: 1rem;\n}\n.cp-highlights[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--primary);\n}\n.cp-highlights[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 0.6rem;\n}\n@media (max-width: 600px) {\n  .cp-highlights[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.cp-highlights[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.88rem;\n  color: var(--text-mid);\n  padding: 0.5rem 0.75rem;\n  background: var(--bg-light);\n  border-radius: var(--radius-sm);\n  border-left: 3px solid var(--primary);\n}\n.cp-highlights[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--accent);\n  font-size: 0.75rem;\n  flex-shrink: 0;\n}\n.cp-cta-card[_ngcontent-%COMP%] {\n  background: var(--bg-light);\n  border-radius: var(--radius-lg);\n  padding: 2rem;\n  text-align: center;\n  border: 1px solid var(--border);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1rem;\n  position: sticky;\n  top: 100px;\n}\n.cp-cta-card[_ngcontent-%COMP%]   .cp-cta-icon[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  border-radius: 50%;\n  background: var(--primary);\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.5rem;\n}\n.cp-cta-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  color: var(--text-dark);\n  margin: 0;\n}\n.cp-cta-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: var(--text-mid);\n  line-height: 1.6;\n  margin: 0;\n}\n.cp-cta-card[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  width: 100%;\n  justify-content: center;\n}\n.cp-features-section[_ngcontent-%COMP%] {\n  padding: 5rem 0;\n  background: var(--bg-light);\n}\n.cp-features-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 1.5rem;\n}\n@media (max-width: 900px) {\n  .cp-features-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 500px) {\n  .cp-features-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.cp-feature-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: var(--radius-md);\n  padding: 2rem 1.5rem;\n  text-align: center;\n  box-shadow: var(--shadow-sm);\n  border: 1px solid var(--border);\n  transition: transform 0.35s, box-shadow 0.35s;\n}\n.cp-feature-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-6px);\n  box-shadow: var(--shadow-md);\n}\n.cp-feature-card[_ngcontent-%COMP%]   .cp-feature-icon[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  background: var(--primary-glow);\n  color: var(--primary);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.4rem;\n  margin: 0 auto 1rem;\n  transition: background 0.3s, color 0.3s;\n}\n.cp-feature-card[_ngcontent-%COMP%]:hover   .cp-feature-icon[_ngcontent-%COMP%] {\n  background: var(--primary);\n  color: #fff;\n}\n.cp-feature-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: var(--text-dark);\n  margin-bottom: 0.5rem;\n  font-family: var(--font-body);\n}\n.cp-feature-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  color: var(--text-mid);\n  line-height: 1.6;\n  margin: 0;\n}\n.cp-notfound[_ngcontent-%COMP%] {\n  min-height: 60vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 1rem;\n  color: var(--text-mid);\n}\n.cp-notfound[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 4rem;\n  color: var(--border);\n}\n.cp-notfound[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n/*# sourceMappingURL=category-page.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CategoryPageComponent, { className: "CategoryPageComponent", filePath: "src\\app\\components\\category-page\\category-page.component.ts", lineNumber: 21 });
})();
export {
  CategoryPageComponent
};
//# sourceMappingURL=chunk-7OTJNATO.js.map
