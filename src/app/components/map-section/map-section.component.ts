import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollService } from '../../core/services/scroll.service';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-map-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './map-section.component.html',
  styleUrls: ['./map-section.component.scss']
})
export class MapSectionComponent implements AfterViewInit {
  activeRegion: any = null;

  regions = [
    { id: 1, name: 'Dubai',     flag: '🇦🇪', x: 56, y: 44,
      tours: 8,  desc: 'City of Gold — Burj Khalifa, Desert Safari, Shopping Malls.',
      price: 'From ₹39,999',
      image: 'https://cdn.yourholiday.me/static/dynimg/destination/16/600x300/3598628-3598627_adobestock_47088158.jpg' },
    { id: 2, name: 'Europe',    flag: '🇪🇺', x: 44, y: 26,
      tours: 4,  desc: 'Paris, London, Switzerland, Rome — Grand Tour packages.',
      price: 'From ₹1,19,999',
      image: 'https://cdn.yourholiday.me/static/dynimg/destination/21/600x300/2190173-2190172_europe-1-main-image.jpg' },
    { id: 3, name: 'Thailand',  flag: '🇹🇭', x: 74, y: 46,
      tours: 6,  desc: 'Bangkok, Phuket, Chiang Mai — tropical paradise.',
      price: 'From ₹19,999',
      image: 'https://cdn.yourholiday.me/static/dynimg/destination/32/600x300/3076721-3076720_thailand2.jpg' },
    { id: 4, name: 'Singapore', flag: '🇸🇬', x: 77, y: 55,
      tours: 5,  desc: 'Gardens by the Bay, Sentosa, Universal Studios.',
      price: 'From ₹44,999',
      image: 'https://cdn.yourholiday.me/static/dynimg/destination/58/600x300/3996296-3996295_singapore-stock-image.jpg' },
    { id: 5, name: 'Bali',      flag: '🇮🇩', x: 80, y: 60,
      tours: 4,  desc: 'Temples, rice terraces, beaches — Island of the Gods.',
      price: 'From ₹29,999',
      image: 'https://cdn.yourholiday.me/static/dynimg/destination/48/600x300/3996290-3996289_bali-4.jpg' },
    { id: 6, name: 'Maldives',  flag: '🇲🇻', x: 63, y: 57,
      tours: 3,  desc: 'Overwater bungalows, crystal lagoons, coral reefs.',
      price: 'From ₹49,999',
      image: 'https://cdn.yourholiday.me/static/dynimg/destination/98/600x300/2750963-2750962_maldives.jpg' },
    { id: 7, name: 'Australia', flag: '🇦🇺', x: 84, y: 70,
      tours: 3,  desc: 'Sydney Opera House, Great Barrier Reef, Outback.',
      price: 'From ₹1,29,999',
      image: 'https://cdn.yourholiday.me/static/dynimg/destination/58/600x300/2210344-2210343_australia.jpg' },
    { id: 8, name: 'Andamans', flag: '🇮🇳', x: 70, y: 50,
      tours: 8,  desc: 'Radhanagar Beach, Havelock Island, coral reefs.',
      price: 'From ₹16,836',
      image: 'https://cdn.yourholiday.me/static/dynimg/destination/33/600x300/2210456-2210455_andaman.jpg' }
  ];

  constructor(private scrollSvc: ScrollService) {}

  ngAfterViewInit() {
    gsap.fromTo('.map-section .section-header',
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out',
        scrollTrigger: { trigger: '#map', start: 'top 80%', once: true } }
    );
    gsap.fromTo('.region-marker',
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, stagger: 0.1, duration: 0.5, ease: 'back.out(2)',
        scrollTrigger: { trigger: '#map', start: 'top 70%', once: true } }
    );
    gsap.fromTo('.map-dest-item',
      { x: 40, opacity: 0 },
      { x: 0, opacity: 1, stagger: 0.08, duration: 0.5, ease: 'power3.out',
        scrollTrigger: { trigger: '#map', start: 'top 70%', once: true } }
    );
  }

  selectRegion(r: any) {
    this.activeRegion = this.activeRegion?.id === r.id ? null : r;
    if (this.activeRegion) {
      setTimeout(() => {
        gsap.from('.marker-popup', { scale: 0.8, opacity: 0, duration: 0.3, ease: 'back.out(1.7)' });
      }, 10);
    }
  }

  goTo(id: string) { this.scrollSvc.scrollTo(id); }
}
