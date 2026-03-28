import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../core/services/data.service';
import { ScrollService } from '../../core/services/scroll.service';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements AfterViewInit {
  whyUs = [
    { icon: 'fas fa-user-tie',  title: 'Expert Travel Agents',     desc: 'Our team of experienced travel agents will save you huge on your dream holidays.' },
    { icon: 'fas fa-tags',      title: 'Best Price in the Market', desc: 'We travel across the world to find you the best price for your dream holidays.' },
    { icon: 'fas fa-sliders-h', title: 'Fully Customized Tours',   desc: 'Tours can be fully customized. We create a tour itinerary just for you.' },
    { icon: 'fas fa-headset',   title: 'Helpful Support Team',     desc: 'Contact our helpful team anytime — we are always here to assist you.' }
  ];

  constructor(public data: DataService, private scrollSvc: ScrollService) {}

  ngAfterViewInit() {
    gsap.fromTo('.customize-text',
      { x: -60, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: '#about', start: 'top 70%', once: true } }
    );
    gsap.fromTo('.customize-img',
      { x: 60, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: '#about', start: 'top 70%', once: true } }
    );
    gsap.fromTo('.why-card',
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.12, duration: 0.6, ease: 'power3.out',
        scrollTrigger: { trigger: '.why-grid', start: 'top 75%', once: true } }
    );
  }

  goTo(id: string) { this.scrollSvc.scrollTo(id); }
}
