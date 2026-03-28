import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.scss'
})
export class AboutPageComponent implements OnInit, AfterViewInit {

  stats = [
    { value: '10+',   label: 'Years Experience' },
    { value: '5000+', label: 'Happy Travellers' },
    { value: '50+',   label: 'Destinations' },
    { value: '100%',  label: 'Satisfaction' }
  ];

  constructor(private router: Router) {}

  ngOnInit() {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }

  ngAfterViewInit() {
    // Hero content flies up
    gsap.fromTo('.ap-hero-content',
      { y: 70, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.2 });

    // Stats bounce in one by one
    gsap.fromTo('.ap-stat',
      { y: 50, opacity: 0, scale: 0.8 },
      { y: 0, opacity: 1, scale: 1, stagger: 0.12, duration: 0.7, ease: 'back.out(1.8)',
        scrollTrigger: { trigger: '.ap-stats', start: 'top 85%', once: true } });

    // Stat values count-up feel
    gsap.fromTo('.ap-stat-value',
      { opacity: 0, scale: 0.5 },
      { opacity: 1, scale: 1, stagger: 0.1, duration: 0.6, ease: 'back.out(2)',
        scrollTrigger: { trigger: '.ap-stats', start: 'top 85%', once: true } });

    // About text slides from left
    gsap.fromTo('.ap-about-text',
      { x: -80, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: '.ap-about-block', start: 'top 78%', once: true } });

    // About image slides from right with slight rotation
    gsap.fromTo('.ap-about-img',
      { x: 80, opacity: 0, rotation: 3 },
      { x: 0, opacity: 1, rotation: 0, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: '.ap-about-block', start: 'top 78%', once: true } });

    // Paragraphs stagger in
    gsap.fromTo('.ap-about-text p',
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.15, duration: 0.6, ease: 'power2.out',
        scrollTrigger: { trigger: '.ap-about-text', start: 'top 75%', once: true } });

    // Button pop
    gsap.fromTo('.ap-about-text .btn',
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.5, ease: 'back.out(2)',
        scrollTrigger: { trigger: '.ap-about-text', start: 'top 70%', once: true } });

    // Floating image parallax on scroll
    gsap.to('.ap-about-img img', {
      yPercent: -8,
      ease: 'none',
      scrollTrigger: { trigger: '.ap-about-section', start: 'top bottom', end: 'bottom top', scrub: true }
    });
  }

  goHome() { this.router.navigate(['/']); }
  goContact() { this.router.navigate(['/contact']); }
}
