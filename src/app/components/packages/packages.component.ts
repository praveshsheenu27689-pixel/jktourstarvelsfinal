import { Component, AfterViewInit, Output, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataService, Package } from '../../core/services/data.service';
import { ScrollService } from '../../core/services/scroll.service';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface SubPkg { name: string; duration: string; nights: number; price: number; }

const DEST_SUBPKGS: Record<string, SubPkg[]> = {
  'Bali':        [{name:'Bali Breeze',nights:4,duration:'4N/5D',price:12387},{name:'Bali Serenity',nights:5,duration:'5N/6D',price:15917},{name:'Bali Splendour',nights:6,duration:'6N/7D',price:27169},{name:'Grand Bali',nights:7,duration:'7N/8D',price:40695}],
  'Dubai':       [{name:'Dubai Highlights',nights:4,duration:'4N/5D',price:28536},{name:'Desert Dreams',nights:5,duration:'5N/6D',price:40397},{name:'Dubai Luxe',nights:6,duration:'6N/7D',price:44900},{name:'Grand Dubai',nights:7,duration:'7N/8D',price:62000}],
  'Thailand':    [{name:'Bangkok Escape',nights:4,duration:'4N/5D',price:22500},{name:'Phuket Bliss',nights:5,duration:'5N/6D',price:28500},{name:'Thailand Explorer',nights:6,duration:'6N/7D',price:42000},{name:'Grand Thailand',nights:7,duration:'7N/8D',price:55000}],
  'Singapore':   [{name:'City Highlights',nights:4,duration:'4N/5D',price:32500},{name:'Sentosa Escape',nights:5,duration:'5N/6D',price:42000},{name:'Singapore Explorer',nights:6,duration:'6N/7D',price:58000},{name:'Grand Singapore',nights:7,duration:'7N/8D',price:82000}],
  'Andamans':    [{name:'Andaman Escape',nights:4,duration:'4N/5D',price:16836},{name:'Island Bliss',nights:5,duration:'5N/6D',price:22000},{name:'Andaman Explorer',nights:6,duration:'6N/7D',price:27755},{name:'Grand Andaman',nights:7,duration:'7N/8D',price:34000}],
  'Australia':   [{name:'Sydney Sojourn',nights:4,duration:'4N/5D',price:85000},{name:'Coastal Wonders',nights:5,duration:'5N/6D',price:105000},{name:'Outback & Beyond',nights:6,duration:'6N/7D',price:125000},{name:'Ultimate Australia',nights:7,duration:'7N/8D',price:145000}],
  'Cambodia':    [{name:'Angkor Discovery',nights:4,duration:'4N/5D',price:28000},{name:'Khmer Heritage',nights:5,duration:'5N/6D',price:35000},{name:'Cambodia Explorer',nights:6,duration:'6N/7D',price:42000},{name:'Mekong Journey',nights:7,duration:'7N/8D',price:52000}],
  'Europe':      [{name:'European Glimpse',nights:4,duration:'4N/5D',price:120000},{name:'Classic Europe',nights:5,duration:'5N/6D',price:180000},{name:'European Wonders',nights:6,duration:'6N/7D',price:229628},{name:'Grand Europe',nights:7,duration:'7N/8D',price:320000}],
  'Georgia':     [{name:'Tbilisi Trails',nights:4,duration:'4N/5D',price:32000},{name:'Caucasus Charm',nights:5,duration:'5N/6D',price:40000},{name:'Georgia Explorer',nights:6,duration:'6N/7D',price:50000},{name:'Silk Road Journey',nights:7,duration:'7N/8D',price:62000}],
  'Greece':      [{name:'Athens Escape',nights:4,duration:'4N/5D',price:65000},{name:'Aegean Dreams',nights:5,duration:'5N/6D',price:82000},{name:'Greek Odyssey',nights:6,duration:'6N/7D',price:98000},{name:'Island Hopper',nights:7,duration:'7N/8D',price:115000}],
  'Italy':       [{name:'Roman Holiday',nights:4,duration:'4N/5D',price:72000},{name:'Tuscan Trails',nights:5,duration:'5N/6D',price:90000},{name:'Italian Splendour',nights:6,duration:'6N/7D',price:108000},{name:'Grand Italia',nights:7,duration:'7N/8D',price:125000}],
  'Japan':       [{name:'Tokyo Highlights',nights:4,duration:'4N/5D',price:85000},{name:'Sakura Trail',nights:5,duration:'5N/6D',price:105000},{name:'Japan Explorer',nights:6,duration:'6N/7D',price:125000},{name:'Land of Rising Sun',nights:7,duration:'7N/8D',price:145000}],
  'Kazakhstan':  [{name:'Almaty Escape',nights:4,duration:'4N/5D',price:38000},{name:'Steppe Wonders',nights:5,duration:'5N/6D',price:48000},{name:'Kazakhstan Explorer',nights:6,duration:'6N/7D',price:58000},{name:'Central Asia Grand',nights:7,duration:'7N/8D',price:70000}],
  'Malaysia':    [{name:'KL Highlights',nights:4,duration:'4N/5D',price:35000},{name:'Rainforest Retreat',nights:5,duration:'5N/6D',price:45000},{name:'Malaysia Explorer',nights:6,duration:'6N/7D',price:58000},{name:'Borneo & Beyond',nights:7,duration:'7N/8D',price:72000}],
  'Maldives':    [{name:'Maldives Bliss',nights:4,duration:'4N/5D',price:49999},{name:'Lagoon Escape',nights:5,duration:'5N/6D',price:65000},{name:'Overwater Paradise',nights:6,duration:'6N/7D',price:82000},{name:'Ultimate Maldives',nights:7,duration:'7N/8D',price:98000}],
  'Mauritius':   [{name:'Mauritius Escape',nights:4,duration:'4N/5D',price:55000},{name:'Island Serenity',nights:5,duration:'5N/6D',price:70000},{name:'Tropical Bliss',nights:6,duration:'6N/7D',price:85000},{name:'Grand Mauritius',nights:7,duration:'7N/8D',price:100000}],
  'New Zealand': [{name:'Kiwi Highlights',nights:4,duration:'4N/5D',price:95000},{name:'Fjord Explorer',nights:5,duration:'5N/6D',price:115000},{name:'Middle Earth Tour',nights:6,duration:'6N/7D',price:135000},{name:'Grand New Zealand',nights:7,duration:'7N/8D',price:155000}],
  'Portugal':    [{name:'Lisbon Escape',nights:4,duration:'4N/5D',price:62000},{name:'Algarve Dreams',nights:5,duration:'5N/6D',price:78000},{name:'Portugal Explorer',nights:6,duration:'6N/7D',price:95000},{name:'Iberian Journey',nights:7,duration:'7N/8D',price:112000}],
  'Russia':      [{name:'Moscow Highlights',nights:4,duration:'4N/5D',price:58000},{name:'Golden Ring',nights:5,duration:'5N/6D',price:72000},{name:'Trans-Siberian',nights:6,duration:'6N/7D',price:88000},{name:'Grand Russia',nights:7,duration:'7N/8D',price:105000}],
  'Seychelles':  [{name:'Seychelles Escape',nights:4,duration:'4N/5D',price:72000},{name:'Island Hopper',nights:5,duration:'5N/6D',price:90000},{name:'Tropical Paradise',nights:6,duration:'6N/7D',price:108000},{name:'Grand Seychelles',nights:7,duration:'7N/8D',price:125000}],
  'Spain':       [{name:'Barcelona Escape',nights:4,duration:'4N/5D',price:68000},{name:'Andalusia Dreams',nights:5,duration:'5N/6D',price:85000},{name:'Spain Explorer',nights:6,duration:'6N/7D',price:102000},{name:'Iberian Grand Tour',nights:7,duration:'7N/8D',price:120000}],
  'Sri Lanka':   [{name:'Ceylon Highlights',nights:4,duration:'4N/5D',price:28000},{name:'Tea Trail',nights:5,duration:'5N/6D',price:36000},{name:'Sri Lanka Explorer',nights:6,duration:'6N/7D',price:45000},{name:'Grand Ceylon',nights:7,duration:'7N/8D',price:55000}],
  'Switzerland': [{name:'Swiss Highlights',nights:4,duration:'4N/5D',price:95000},{name:'Alpine Escape',nights:5,duration:'5N/6D',price:118000},{name:'Swiss Explorer',nights:6,duration:'6N/7D',price:140000},{name:'Grand Switzerland',nights:7,duration:'7N/8D',price:162000}],
  'Turkey':      [{name:'Istanbul Escape',nights:4,duration:'4N/5D',price:48000},{name:'Cappadocia Dreams',nights:5,duration:'5N/6D',price:60000},{name:'Turkey Explorer',nights:6,duration:'6N/7D',price:72000},{name:'Grand Turkey',nights:7,duration:'7N/8D',price:85000}],
  'Vietnam':     [{name:'Hanoi Highlights',nights:4,duration:'4N/5D',price:32000},{name:'Ha Long Escape',nights:5,duration:'5N/6D',price:42000},{name:'Vietnam Explorer',nights:6,duration:'6N/7D',price:52000},{name:'Grand Vietnam',nights:7,duration:'7N/8D',price:62000}],
};

@Component({
  selector: 'app-packages',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.scss']
})
export class PackagesComponent implements AfterViewInit, OnChanges {
  activeTab = 'Bali';
  @Input() activeDestTab = '';

  ngOnChanges(changes: SimpleChanges) {
    if (changes['activeDestTab'] && changes['activeDestTab'].currentValue) {
      this.setTab(changes['activeDestTab'].currentValue);
    }
  }
  selectedPkg: Package | null = null;
  showBookingDialog = false;
  bookingSubmitted = false;
  bookingForm = { name: '', phone: '', email: '', date: '', travelers: '2', message: '' };
  // Sub-package modal (for destination-based view)
  selectedDestTab: string | null = null;
  selectedSubPkg: SubPkg | null = null;
  showSubBookingDialog = false;
  subBookingSubmitted = false;
  subBookingForm = { name: '', phone: '', email: '', date: '', travelers: '2', message: '' };

  @Output() bookPackage = new EventEmitter<string>();

  tabs = [
    { key: 'Andamans',    label: 'Andamans',    flag: '🇮🇳' },
    { key: 'Bali',        label: 'Bali',        flag: '🇮🇩' },
    { key: 'Cambodia',    label: 'Cambodia',    flag: '🇰🇭' },
    { key: 'Dubai',       label: 'Dubai',       flag: '🇦🇪' },
    { key: 'Europe',      label: 'Europe',      flag: '🇪🇺' },
    { key: 'Georgia',     label: 'Georgia',     flag: '🇬🇪' },
    { key: 'Greece',      label: 'Greece',      flag: '🇬🇷' },
    { key: 'Italy',       label: 'Italy',       flag: '🇮🇹' },
    { key: 'Japan',       label: 'Japan',       flag: '🇯🇵' },
    { key: 'Kazakhstan',  label: 'Kazakhstan',  flag: '🇰🇿' },
    { key: 'Malaysia',    label: 'Malaysia',    flag: '🇲🇾' },
    { key: 'Maldives',    label: 'Maldives',    flag: '🇲🇻' },
    { key: 'Mauritius',   label: 'Mauritius',   flag: '🇲🇺' },
    { key: 'New Zealand', label: 'New Zealand', flag: '🇳🇿' },
    { key: 'Portugal',    label: 'Portugal',    flag: '🇵🇹' },
    { key: 'Russia',      label: 'Russia',      flag: '🇷🇺' },
    { key: 'Seychelles',  label: 'Seychelles',  flag: '🇸🇨' },
    { key: 'Singapore',   label: 'Singapore',   flag: '🇸🇬' },
    { key: 'Spain',       label: 'Spain',       flag: '🇪🇸' },
    { key: 'Sri Lanka',   label: 'Sri Lanka',   flag: '🇱🇰' },
    { key: 'Switzerland', label: 'Switzerland', flag: '🇨🇭' },
    { key: 'Thailand',    label: 'Thailand',    flag: '🇹🇭' },
    { key: 'Turkey',      label: 'Turkey',      flag: '🇹🇷' },
    { key: 'Vietnam',     label: 'Vietnam',     flag: '🇻🇳' },
    { key: 'Australia',   label: 'Australia',   flag: '🇦🇺' },
  ];

  get activeTabFlag(): string {
    return this.tabs.find(t => t.key === this.activeTab)?.flag || '';
  }

  get currentSubPackages(): SubPkg[] {
    return DEST_SUBPKGS[this.activeTab] || [];
  }

  inclusions = [
    { icon: 'fas fa-plane',        label: 'Flights' },
    { icon: 'fas fa-hotel',        label: 'Hotels' },
    { icon: 'fas fa-utensils',     label: 'Meals' },
    { icon: 'fas fa-bus',          label: 'Transfers' },
    { icon: 'fas fa-camera',       label: 'Sightseeing' },
    { icon: 'fas fa-user-tie',     label: 'Tour Guide' },
    { icon: 'fas fa-shield-alt',   label: 'Travel Insurance' },
    { icon: 'fas fa-headset',      label: '24/7 Support' }
  ];

  constructor(public data: DataService, private scrollSvc: ScrollService) {}

  get currentPackages(): Package[] {
    switch (this.activeTab) {
      case 'Dubai':     return this.data.dubaiPackages;
      case 'Thailand':  return this.data.thailandPackages;
      case 'Singapore': return this.data.singaporePackages;
      case 'Bali':      return this.data.baliPackages;
      default:          return [];
    }
  }

  ngAfterViewInit() {
    gsap.fromTo('.packages .section-header',
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out',
        scrollTrigger: { trigger: '#packages', start: 'top 80%', once: true } }
    );
  }

  setTab(key: string) {
    this.activeTab = key;
    this.selectedPkg = null;
    this.showBookingDialog = false;
    setTimeout(() => {
      gsap.fromTo('.sub-pkg-card',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.08, duration: 0.4, ease: 'power3.out' }
      );
    }, 50);
  }

  // Called from destinations component via scrollService event
  setTabAndScroll(key: string) {
    this.setTab(key);
    this.scrollSvc.scrollTo('packages');
  }

  openSubBooking(pkg: SubPkg) {
    this.selectedSubPkg = pkg;
    this.showSubBookingDialog = true;
    this.subBookingSubmitted = false;
    this.subBookingForm = { name: '', phone: '', email: '', date: '', travelers: '2', message: '' };
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
      gsap.from('.pkg-booking-dialog', { y: 40, opacity: 0, duration: 0.4, ease: 'power3.out' });
    }, 10);
  }

  closeSubBooking() {
    gsap.to('.pkg-booking-dialog', { y: 20, opacity: 0, duration: 0.25, ease: 'power2.in',
      onComplete: () => { this.showSubBookingDialog = false; this.selectedSubPkg = null; document.body.style.overflow = ''; }
    });
  }

  submitSubBooking() {
    this.subBookingSubmitted = true;
    gsap.from('.pkg-booking-success', { scale: 0.8, opacity: 0, duration: 0.4, ease: 'back.out(1.7)' });
  }

  openDetail(pkg: Package) {
    this.selectedPkg = pkg;
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
      gsap.from('.pkg-modal', { y: 60, opacity: 0, duration: 0.45, ease: 'power3.out' });
    }, 10);
  }

  closeDetail() {
    gsap.to('.pkg-modal', {
      y: 40, opacity: 0, duration: 0.3, ease: 'power2.in',
      onComplete: () => { this.selectedPkg = null; document.body.style.overflow = ''; }
    });
  }

  bookNow() {
    this.showBookingDialog = true;
    this.bookingSubmitted = false;
    this.bookingForm = { name: '', phone: '', email: '', date: '', travelers: '2', message: '' };
    setTimeout(() => {
      gsap.from('.pkg-booking-dialog', { y: 40, opacity: 0, duration: 0.4, ease: 'power3.out' });
    }, 10);
  }

  closeBookingDialog() {
    gsap.to('.pkg-booking-dialog', { y: 20, opacity: 0, duration: 0.25, ease: 'power2.in',
      onComplete: () => { this.showBookingDialog = false; document.body.style.overflow = ''; }
    });
  }

  submitBooking() {
    this.bookingSubmitted = true;
    gsap.from('.pkg-booking-success', { scale: 0.8, opacity: 0, duration: 0.4, ease: 'back.out(1.7)' });
  }

  getHighlights(pkg: Package): string[] {
    const map: Record<string, string[]> = {
      'Dubai':     ['Return international flights from Mumbai/Delhi','Visa on arrival / visa assistance included','Premium hotel stays with daily breakfast','All transfers, city tours & desert safari included','Dhow cruise, Burj Khalifa & top attractions covered'],
      'Bali':      ['Return international flights from Mumbai/Delhi','Visa on arrival assistance included','Premium hotel stays with daily breakfast','All transfers & guided sightseeing included','Water sports, temple visits & cultural shows'],
      'Thailand':  ['Return international flights from Mumbai/Delhi','Visa on arrival assistance included','Premium hotel stays with daily breakfast','All transfers & guided sightseeing included','Temples, islands, elephant sanctuary & night markets'],
      'Singapore': ['Return international flights from Mumbai/Delhi','Visa assistance & documentation support','Premium hotel stays with daily breakfast','All transfers & guided city tours included','Universal Studios, Gardens by the Bay & top attractions'],
    };
    return map[pkg.category] || ['Return flights included','Premium hotel stays','Daily breakfast','All transfers & sightseeing','Expert tour guide throughout'];
  }

  getItinerary(pkg: Package): { title: string; desc: string }[] {
    const nights = this.getDurationNights(pkg);
    const days: { title: string; desc: string }[] = [];
    const stops = pkg.itinerary.split(',').map(s => s.trim().replace(/\d+N$/, '').trim());
    const airports: Record<string, string> = {
      'Dubai': 'Dubai International Airport', 'Thailand': 'Suvarnabhumi Airport, Bangkok',
      'Singapore': 'Changi Airport, Singapore', 'Bali': 'Ngurah Rai Airport'
    };
    const cityName = airports[pkg.category] || pkg.category;
    const perDay = Math.ceil(stops.length / Math.max(nights - 1, 1));
    for (let i = 0; i < nights + 1; i++) {
      const dayAttractions = stops.slice((i - 1) * perDay, i * perDay).join(', ');
      if (i === 0) days.push({ title: `Arrival – ${pkg.category}`, desc: `Arrive at ${cityName}, check-in to hotel. Evening at leisure. Welcome dinner.` });
      else if (i === nights) days.push({ title: `Departure – ${pkg.category}`, desc: `Breakfast at hotel. Check-out and transfer to airport. Tour ends with beautiful memories.` });
      else days.push({ title: `Day ${i + 1} – ${dayAttractions || stops[0]}`, desc: `Visit ${dayAttractions || stops[0]}. Expert guide accompanies throughout. Meals included.` });
    }
    return days;
  }

  getDuration(pkg: Package): string {
    const n = this.getDurationNights(pkg);
    return `${n} Nights / ${n + 1} Days`;
  }

  private getDurationNights(pkg: Package): number {
    const stops = pkg.itinerary.split(',');
    let total = 0;
    stops.forEach(s => { const m = s.match(/(\d+)N/); if (m) total += parseInt(m[1]); });
    if (total) return total;
    const titleMatch = pkg.title.match(/(\d+)N/);
    if (titleMatch) return parseInt(titleMatch[1]);
    if (pkg.category === 'Bali') return 5;
    if (pkg.category === 'Dubai') return 4;
    if (pkg.category === 'Thailand') return 6;
    if (pkg.category === 'Singapore') return 5;
    return 4;
  }

  goTo(id: string) { this.scrollSvc.scrollTo(id); }
}
