import { Component, OnInit, OnDestroy, HostListener, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../../core/services/data.service';
import { ScrollService } from '../../core/services/scroll.service';
import { Subscription } from 'rxjs';
import gsap from 'gsap';

interface SearchResult { name: string; type: string; image: string; section: string; }

import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {
  scrolled = false;
  mobileOpen = false;
  searchOpen = false;
  activeMenu: string | null = null;
  activeSection = 'home';
  searchQuery = '';
  searchResults: SearchResult[] = [];
  private sub!: Subscription;

  domesticDestinations = [
    { name: 'Andamans',         image: 'https://cdn.yourholiday.me/static/dynimg/destination/33/600x300/2210456-2210455_andaman.jpg' },
    { name: 'Goa',              image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/76/600x300/2210775-2210774_goa-pack1.jpg' },
    { name: 'Kerala',           image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/14/600x300/2228853-2228852_kerala-1.jpg' },
    { name: 'Himachal Pradesh', image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/11/600x300/2228921-2228920_hp-3.jpg' },
    { name: 'Rajasthan',        image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/37/600x450/2185258-2185257_pexels-photo-209741.jpg' },
    { name: 'Ladakh',           image: 'https://static.toiimg.com/photo/msid-52005539/52005539.jpg' },
    { name: 'Uttarakhand',      image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/21/600x300/2228887-2228886_manali-1.jpg' },
    { name: 'Kashmir',          image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/28/600x300/2210839-2210838_hampi.jpg' }
  ];

  internationalDestinations = [
    { name: 'Bali',        image: 'https://cdn.yourholiday.me/static/dynimg/destination/48/600x300/3996290-3996289_bali-4.jpg' },
    { name: 'Dubai',       image: 'https://cdn.yourholiday.me/static/dynimg/destination/16/600x300/3598628-3598627_adobestock_47088158.jpg' },
    { name: 'Thailand',    image: 'https://cdn.yourholiday.me/static/dynimg/destination/32/600x300/3076721-3076720_thailand2.jpg' },
    { name: 'Singapore',   image: 'https://cdn.yourholiday.me/static/dynimg/destination/58/600x300/3996296-3996295_singapore-stock-image.jpg' },
    { name: 'Europe',      image: 'https://cdn.yourholiday.me/static/dynimg/destination/21/600x300/2190173-2190172_europe-1-main-image.jpg' },
    { name: 'Maldives',    image: 'https://cdn.yourholiday.me/static/dynimg/destination/98/600x300/2750963-2750962_maldives.jpg' },
    { name: 'Malaysia',    image: 'https://cdn.yourholiday.me/static/dynimg/destination/64/600x300/3160627-3160626_tourist-places-in-malaysia.jpg' },
    { name: 'Switzerland', image: 'https://cdn.yourholiday.me/static/dynimg/destination/74/600x300/2190187-2190186_zurich-switzerland-view-of-the-historic-city-center-with-famous-fraumunster-church-5.jpg' },
    { name: 'Australia',   image: 'https://cdn.yourholiday.me/static/dynimg/destination/58/600x300/2210344-2210343_australia.jpg' },
    { name: 'Japan',       image: 'https://cdn.yourholiday.me/static/dynimg/destination/64/600x300/2750318-2750317_japan.jpg' },
    { name: 'Turkey',      image: 'https://cdn.yourholiday.me/static/dynimg/destination/45/600x300/2750974-2750973_turkey.jpg' },
    { name: 'Vietnam',     image: 'https://cdn.yourholiday.me/static/dynimg/destination/35/600x300/3078047-3078046_vietnam.jpg' }
  ];

  popularTags = ['Dubai', 'Bali', 'Europe', 'Thailand', 'Andaman', 'Kerala', 'Singapore', 'Maldives'];

  constructor(public data: DataService, private scrollSvc: ScrollService, private router: Router) {}

  ngOnInit() {
    this.scrollSvc.init();
    this.sub = this.scrollSvc.activeSection$.subscribe(s => this.activeSection = s);
    setTimeout(() => {
      gsap.fromTo('.navbar', { y: -80, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' });
      gsap.fromTo('.nav-link', { y: -20, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.08, duration: 0.5, ease: 'power2.out', delay: 0.2 });
    }, 3400);
  }

  ngOnDestroy() { this.sub?.unsubscribe(); }

  @HostListener('window:scroll')
  onScroll() { this.scrolled = window.scrollY > 60; }

  @HostListener('document:click')
  onDocClick() { this.searchOpen = false; this.activeMenu = null; }

  toggleMobile() {
    this.mobileOpen = !this.mobileOpen;
    if (this.mobileOpen) {
      setTimeout(() => {
        gsap.fromTo('.mobile-nav-item',
          { x: -30, opacity: 0 },
          { x: 0, opacity: 1, stagger: 0.07, duration: 0.4, ease: 'power2.out' }
        );
      }, 10);
    }
  }

  toggleSearch(e: Event) {
    e.stopPropagation();
    this.searchOpen = !this.searchOpen;
    if (this.searchOpen) {
      this.searchQuery = '';
      this.searchResults = [];
      setTimeout(() => {
        gsap.fromTo('.search-panel', { y: -10, opacity: 0 }, { y: 0, opacity: 1, duration: 0.3, ease: 'power2.out' });
        const input = document.querySelector('.search-panel input') as HTMLInputElement;
        input?.focus();
      }, 10);
    }
  }

  onSearch() {
    const q = this.searchQuery.toLowerCase().trim();
    if (!q) { this.searchResults = []; return; }

    const results: SearchResult[] = [];

    // Domestic destinations
    this.domesticDestinations.forEach(d => {
      if (d.name.toLowerCase().includes(q)) {
        results.push({ name: d.name, type: 'Domestic Destination', image: d.image, section: 'domestic:' + d.name });
      }
    });

    // International destinations
    this.internationalDestinations.forEach(d => {
      if (d.name.toLowerCase().includes(q)) {
        results.push({ name: d.name, type: 'International Destination', image: d.image, section: 'international:' + d.name });
      }
    });

    // All destinations fallback
    this.data.destinations.forEach(d => {
      if (d.name.toLowerCase().includes(q) && !results.find(r => r.name === d.name)) {
        results.push({ name: d.name, type: 'Destination', image: d.image, section: 'dest:' + d.name });
      }
    });

    const allPkgs = [
      ...this.data.domesticPackages,
      ...this.data.internationalPackages,
      ...this.data.europePackages,
      ...this.data.andamanPackages
    ];
    allPkgs.forEach(p => {
      if (p.title.toLowerCase().includes(q) || p.itinerary.toLowerCase().includes(q)) {
        results.push({ name: p.title, type: p.category + ' Package', image: p.image, section: 'home:packages' });
      }
    });

    this.searchResults = results.slice(0, 6);
  }

  doSearch() {
    if (this.searchResults.length > 0) {
      this.selectResult(this.searchResults[0]);
    } else {
      this.navigateToSection('destinations');
      this.searchOpen = false;
    }
  }

  selectResult(r: SearchResult) {
    this.searchOpen = false;
    this.searchQuery = '';
    this.searchResults = [];

    if (r.section.startsWith('domestic:')) {
      const name = r.section.replace('domestic:', '');
      this.navigateDomestic(name);
    } else if (r.section.startsWith('international:')) {
      const name = r.section.replace('international:', '');
      this.navigateInternational(name);
    } else if (r.section.startsWith('dest:')) {
      const name = r.section.replace('dest:', '');
      const key = name.toLowerCase().replace(/\s+/g, '-');
      this.router.navigate(['/destination', key]);
    } else if (r.section.startsWith('home:')) {
      const sectionId = r.section.replace('home:', '');
      this.navigateToSection(sectionId);
    } else {
      this.navigateToSection(r.section);
    }
  }

  navigateContact() {
    this.mobileOpen = false;
    this.activeMenu = null;
    this.router.navigate(['/contact']);
  }

  navigateServices() {
    this.mobileOpen = false;
    this.activeMenu = null;
    this.router.navigate(['/services']);
  }

  navigateAbout() {
    this.mobileOpen = false;
    this.activeMenu = null;
    this.router.navigate(['/about']);
  }

  navigateBusinessTours() {
    this.mobileOpen = false;
    this.activeMenu = null;
    this.router.navigate(['/business-tours']);
  }

  navigateDestinations(type: 'domestic' | 'international') {
    this.mobileOpen = false;
    this.searchOpen = false;
    this.activeMenu = null;
    this.router.navigate(['/destinations', type]).then(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    });
  }

  navigateDomestic(name: string) {
    const key = name.toLowerCase().replace(/\s+/g, '-');
    this.router.navigate(['/destination', key]);
    this.mobileOpen = false;
    this.activeMenu = null;
  }

  navigateInternational(name: string) {
    const key = name.toLowerCase().replace(/\s+/g, '-');
    this.router.navigate(['/destination', key]);
    this.mobileOpen = false;
    this.activeMenu = null;
  }

  navigateExperience(label: string) {
    const key = label.toLowerCase().replace(/\s+/g, '-');
    this.router.navigate(['/experience', key]);
    this.mobileOpen = false;
    this.activeMenu = null;
  }

  goHome() {
    this.router.navigate(['/']);
    this.mobileOpen = false;
    this.activeMenu = null;
  }

  quickSearch(tag: string) {
    this.searchQuery = tag;
    this.onSearch();
  }

  clearSearch() {
    this.searchQuery = '';
    this.searchResults = [];
  }

  openMega(key: string) {
    this.activeMenu = key;
    setTimeout(() => {
      gsap.fromTo('.mega-item',
        { y: -10, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.04, duration: 0.3, ease: 'power2.out' }
      );
    }, 10);
  }

  closeMega() { this.activeMenu = null; }

  // Navigate to a home page section from anywhere
  navigateToSection(id: string) {
    this.mobileOpen = false;
    this.searchOpen = false;
    this.activeMenu = null;
    const isHome = this.router.url === '/' || this.router.url === '';
    if (isHome) {
      this.scrollSvc.scrollTo(id);
    } else {
      this.router.navigate(['/']).then(() => {
        setTimeout(() => this.scrollSvc.scrollTo(id), 400);
      });
    }
  }

  scrollTo(id: string) {
    this.navigateToSection(id);
  }
}
