import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollService } from '../../core/services/scroll.service';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements AfterViewInit {

  stats = [
    { num: '5000+', label: 'Happy Travellers' },
    { num: '25+',   label: 'Destinations' },
    { num: '15+',   label: 'Years Experience' },
    { num: '98%',   label: 'Satisfaction Rate' }
  ];

  timelineSteps = [
    { title: 'Choose Your Destination',  desc: 'Browse 25+ domestic & international destinations. Pick your dream holiday spot.', icon: 'fas fa-map-marker-alt' },
    { title: 'Select a Package',         desc: 'Choose from curated packages or request a fully customized itinerary.', icon: 'fas fa-suitcase-rolling' },
    { title: 'Contact Our Team',         desc: 'Our experienced travel agents guide you through every detail of your trip.', icon: 'fas fa-headset' },
    { title: 'Confirm & Book',           desc: 'Confirm your itinerary, make payment and receive all travel documents.', icon: 'fas fa-check-circle' },
    { title: 'Pack Your Bags',           desc: 'We handle hotels, transfers & sightseeing. You just need to show up!', icon: 'fas fa-plane-departure' },
    { title: 'Enjoy Your Holiday',       desc: 'Experience your dream holiday with 24/7 support from JK Tours, Pune.', icon: 'fas fa-star' }
  ];

  whyUs = [
    { icon: 'fas fa-shield-alt',   title: '100% Safe & Secure',    desc: 'Verified hotels, licensed guides & insured travel.' },
    { icon: 'fas fa-tag',          title: 'Best Price Guarantee',  desc: 'We match any lower price you find elsewhere.' },
    { icon: 'fas fa-headset',      title: '24/7 Support',          desc: 'Round-the-clock assistance throughout your trip.' },
    { icon: 'fas fa-undo',         title: 'Free Cancellation',     desc: 'Flexible booking with hassle-free cancellation.' }
  ];

  constructor(private scrollSvc: ScrollService) {}

  ngAfterViewInit() {
    // Section header
    gsap.fromTo('.timeline-section .section-header',
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out',
        scrollTrigger: { trigger: '#timeline', start: 'top 80%', once: true } }
    );

    // Stats bar
    gsap.fromTo('.tl-stat',
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.1, duration: 0.6, ease: 'power3.out',
        scrollTrigger: { trigger: '.tl-stats', start: 'top 85%', once: true } }
    );

    // Steps
    gsap.fromTo('.tl-step',
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.12, duration: 0.65, ease: 'power3.out',
        scrollTrigger: { trigger: '.tl-steps', start: 'top 80%', once: true } }
    );

    // Why us cards
    gsap.fromTo('.tl-why-card',
      { scale: 0.85, opacity: 0 },
      { scale: 1, opacity: 1, stagger: 0.1, duration: 0.55, ease: 'back.out(1.5)',
        scrollTrigger: { trigger: '.tl-why', start: 'top 85%', once: true } }
    );

    // CTA
    gsap.fromTo('.timeline-cta',
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out',
        scrollTrigger: { trigger: '.timeline-cta', start: 'top 90%', once: true } }
    );
  }

  goTo(id: string) { this.scrollSvc.scrollTo(id); }
}
