import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.scss'
})
export class ContactPageComponent implements OnInit, AfterViewInit {

  sent = false;
  form = { name: '', email: '', subject: '', message: '' };

  infoCards = [
    { icon: 'fas fa-map-marker-alt', title: 'Our Office',      lines: ['J K Tours And Travels', 'Pune, Maharashtra, India'] },
    { icon: 'fas fa-phone',          title: 'Call Us',         lines: ['+91 94224 21993', '+91 98220 12346'] },
    { icon: 'fas fa-envelope',       title: 'Email Us',        lines: ['info@jktourstravels.in'] },
    { icon: 'fas fa-clock',          title: 'Working Hours',   lines: ['Mon–Sat: 9:00 AM – 7:00 PM', 'Sunday: 10:00 AM – 4:00 PM'] }
  ];

  constructor(private router: Router) {}

  ngOnInit() {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }

  ngAfterViewInit() {
    // Hero
    gsap.fromTo('.cp-hero-content',
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.2 });

    // Info cards stagger from left
    gsap.fromTo('.cp-info-card',
      { x: -60, opacity: 0 },
      { x: 0, opacity: 1, stagger: 0.12, duration: 0.7, ease: 'power3.out',
        scrollTrigger: { trigger: '.cp-info-cards', start: 'top 82%', once: true } });

    // Form slides from right
    gsap.fromTo('.cp-form-wrap',
      { x: 80, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: '.cp-form-wrap', start: 'top 82%', once: true } });

    // Map fade in
    gsap.fromTo('.cp-map',
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out',
        scrollTrigger: { trigger: '.cp-map', start: 'top 88%', once: true } });

    // Icon pulse on info cards
    gsap.fromTo('.cp-card-icon',
      { scale: 0, rotation: -90 },
      { scale: 1, rotation: 0, stagger: 0.1, duration: 0.6, ease: 'back.out(2)',
        scrollTrigger: { trigger: '.cp-info-cards', start: 'top 82%', once: true } });
  }

  send() {
    this.sent = true;
    gsap.fromTo('.cp-success',
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.6, ease: 'back.out(1.7)' });
  }

  goHome() { this.router.navigate(['/']); }
}
