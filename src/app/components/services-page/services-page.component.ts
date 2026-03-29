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

  services = [
    {
      icon: 'fas fa-map-marked-alt',
      title: 'Domestic Tour Packages',
      desc: 'Explore India with curated packages to Goa, Kerala, Rajasthan, Himachal, Andaman, Kashmir & more.',
      tags: ['Goa', 'Kerala', 'Rajasthan', 'Kashmir'],
      color: '#1E3A5F'
    },
    {
      icon: 'fas fa-globe-asia',
      title: 'International Tour Packages',
      desc: 'Discover the world with fully managed international tours to Bali, Dubai, Thailand, Europe & beyond.',
      tags: ['Bali', 'Dubai', 'Thailand', 'Europe'],
      color: '#FF7A00'
    },
    {
      icon: 'fas fa-hotel',
      title: 'Hotel Booking',
      desc: 'Best-rate hotel reservations across 3-star, 4-star & 5-star properties worldwide with instant confirmation.',
      tags: ['3 Star', '4 Star', '5 Star', 'Resorts'],
      color: '#0ea5e9'
    },
    {
      icon: 'fas fa-passport',
      title: 'Visa Assistance',
      desc: 'End-to-end visa documentation support for tourist, business & transit visas across 50+ countries.',
      tags: ['Tourist Visa', 'Business Visa', 'Transit', 'Express'],
      color: '#8b5cf6'
    },
    {
      icon: 'fas fa-plane-departure',
      title: 'Flight Booking',
      desc: 'Domestic & international flight bookings at the best fares with flexible date options and seat selection.',
      tags: ['Domestic', 'International', 'Charter', 'Group'],
      color: '#10b981'
    },
    {
      icon: 'fas fa-car',
      title: 'Airport Transfers',
      desc: 'Comfortable and punctual airport pickup & drop services with AC vehicles and professional drivers.',
      tags: ['Pickup', 'Drop', 'AC Cab', '24/7'],
      color: '#f59e0b'
    },
    {
      icon: 'fas fa-heart',
      title: 'Honeymoon Packages',
      desc: 'Romantic getaways crafted for couples — private villas, candlelit dinners & unforgettable experiences.',
      tags: ['Maldives', 'Bali', 'Kashmir', 'Coorg'],
      color: '#ec4899'
    },
    {
      icon: 'fas fa-briefcase',
      title: 'Corporate & MICE Tours',
      desc: 'Seamless corporate travel, team outings, conferences and incentive tours managed end-to-end.',
      tags: ['Team Outing', 'Conference', 'Incentive', 'MICE'],
      color: '#6366f1'
    },
    {
      icon: 'fas fa-pray',
      title: 'Pilgrimage Tours',
      desc: 'Spiritual journeys to Char Dham, Shirdi, Tirupati, Vaishno Devi and other sacred destinations.',
      tags: ['Char Dham', 'Shirdi', 'Tirupati', 'Vaishno Devi'],
      color: '#d97706'
    },
    {
      icon: 'fas fa-bus',
      title: 'Group Tours',
      desc: 'Budget-friendly group departures every month with fixed itineraries, experienced guides & great company.',
      tags: ['Fixed Departure', 'Budget', 'Guided', 'Monthly'],
      color: '#14b8a6'
    },
    {
      icon: 'fas fa-umbrella-beach',
      title: 'Beach & Adventure Tours',
      desc: 'Sun, sand and thrills — beach holidays, water sports, trekking, camping and adventure packages.',
      tags: ['Trekking', 'Camping', 'Water Sports', 'Beach'],
      color: '#0284c7'
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'Travel Insurance',
      desc: 'Comprehensive travel insurance covering medical emergencies, trip cancellations and lost baggage.',
      tags: ['Medical', 'Cancellation', 'Baggage', 'Emergency'],
      color: '#16a34a'
    }
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

    // Service cards stagger
    gsap.fromTo('.sp-service-card',
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.08, duration: 0.6, ease: 'power3.out',
        scrollTrigger: { trigger: '.sp-services-grid', start: 'top 82%', once: true } });

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
