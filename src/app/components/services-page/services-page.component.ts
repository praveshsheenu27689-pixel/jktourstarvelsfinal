import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-services-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services-page.component.html',
  styleUrl: './services-page.component.scss'
})
export class ServicesPageComponent implements OnInit, AfterViewInit {

  stats = [
    { num: '5000+', label: 'Happy Travellers' },
    { num: '50+',   label: 'Destinations' },
    { num: '15+',   label: 'Years Experience' },
    { num: '98%',   label: 'Satisfaction Rate' }
  ];

  steps = [
    { title: 'Choose Your Destination',  desc: 'Browse 50+ domestic & international destinations. Pick your dream holiday spot.', icon: 'fas fa-map-marker-alt' },
    { title: 'Select a Package',         desc: 'Choose from curated packages or request a fully customized itinerary.',           icon: 'fas fa-suitcase-rolling' },
    { title: 'Contact Our Team',         desc: 'Our experienced travel agents guide you through every detail of your trip.',       icon: 'fas fa-headset' },
    { title: 'Confirm & Book',           desc: 'Confirm your itinerary, make payment and receive all travel documents.',           icon: 'fas fa-check-circle' },
    { title: 'Pack Your Bags',           desc: 'We handle hotels, transfers & sightseeing. You just need to show up!',            icon: 'fas fa-plane-departure' },
    { title: 'Enjoy Your Holiday',       desc: 'Experience your dream holiday with 24/7 support from JK Tours, Pune.',            icon: 'fas fa-star' }
  ];

  whyUs = [
    { icon: 'fas fa-shield-alt',  title: '100% Safe & Secure',   desc: 'Verified hotels, licensed guides & insured travel.' },
    { icon: 'fas fa-tag',         title: 'Best Price Guarantee', desc: 'We match any lower price you find elsewhere.' },
    { icon: 'fas fa-headset',     title: '24/7 Support',         desc: 'Round-the-clock assistance throughout your trip.' },
    { icon: 'fas fa-undo',        title: 'Free Cancellation',    desc: 'Flexible booking with hassle-free cancellation.' }
  ];

  constructor(private router: Router) {}

  ngOnInit() {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }

  ngAfterViewInit() {
    // Hero content
    gsap.fromTo('.sp-hero-content', { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.2 });

    // Stats counter animation
    gsap.fromTo('.sp-stat',
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.12, duration: 0.7, ease: 'back.out(1.7)',
        scrollTrigger: { trigger: '.sp-stats', start: 'top 85%', once: true } });

    // Steps — alternating left/right slide
    this.steps.forEach((_, i) => {
      const dir = i % 2 === 0 ? -80 : 80;
      gsap.fromTo(`.sp-step:nth-child(${i + 1})`,
        { x: dir, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: `.sp-step:nth-child(${i + 1})`, start: 'top 82%', once: true } });
    });

    // Step icons spin on scroll
    gsap.fromTo('.sp-step-icon',
      { rotation: -180, scale: 0 },
      { rotation: 0, scale: 1, stagger: 0.1, duration: 0.7, ease: 'back.out(2)',
        scrollTrigger: { trigger: '.sp-steps', start: 'top 80%', once: true } });

    // Why us cards bounce in
    gsap.fromTo('.sp-why-card',
      { scale: 0.7, opacity: 0, y: 30 },
      { scale: 1, opacity: 1, y: 0, stagger: 0.12, duration: 0.65, ease: 'back.out(1.8)',
        scrollTrigger: { trigger: '.sp-why-grid', start: 'top 82%', once: true } });

    // CTA slide up
    gsap.fromTo('.sp-cta',
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: '.sp-cta', start: 'top 88%', once: true } });

    // Floating plane animation
    gsap.to('.sp-plane', {
      y: -18, rotation: 5,
      duration: 2.5, ease: 'sine.inOut',
      yoyo: true, repeat: -1
    });
  }

  goHome() { this.router.navigate(['/']); }
  goBooking() { this.router.navigate(['/']).then(() => setTimeout(() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' }), 400)); }
}
