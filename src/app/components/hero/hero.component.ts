import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataService } from '../../core/services/data.service';
import { ScrollService } from '../../core/services/scroll.service';
import gsap from 'gsap';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit, OnDestroy, AfterViewInit {
  searchData = { destination: '', date: '', duration: '5_6', travelers: '1' };
  typedText = '';
  private typeIndex = 0;
  private charIndex = 0;
  private typeTimer: any;

  constructor(public data: DataService, private scrollSvc: ScrollService) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.animateHero();
    setTimeout(() => this.startTypewriter(), 3500);
  }

  ngOnDestroy() { clearTimeout(this.typeTimer); }

  scrollTo(id: string) { this.scrollSvc.scrollTo(id); }

  animateHero() {
    const tl = gsap.timeline({ delay: 2.9 });
    tl.from('.hero-tag',      { y: 40, opacity: 0, duration: 0.7, ease: 'power3.out' })
      .from('.hero-title',    { y: 60, opacity: 0, duration: 0.9, ease: 'power3.out' }, '-=0.3')
      .from('.hero-subtitle', { y: 30, opacity: 0, duration: 0.6, ease: 'power2.out' }, '-=0.4')
      .from('.hero-ctas .btn',{ y: 20, opacity: 0, stagger: 0.15, duration: 0.5, ease: 'back.out(1.5)' }, '-=0.3')
      .from('.search-form',   { y: 50, opacity: 0, scale: 0.96, duration: 0.8, ease: 'back.out(1.4)' }, '-=0.2')
      .from('.scroll-hint',   { opacity: 0, duration: 0.5 }, '-=0.2');
  }

  startTypewriter() {
    const word = this.data.typewriterWords[this.typeIndex];
    if (this.charIndex < word.length) {
      this.typedText += word[this.charIndex++];
      this.typeTimer = setTimeout(() => this.startTypewriter(), 80);
    } else {
      this.typeTimer = setTimeout(() => this.eraseTypewriter(), 2200);
    }
  }

  eraseTypewriter() {
    if (this.typedText.length > 0) {
      this.typedText = this.typedText.slice(0, -1);
      this.typeTimer = setTimeout(() => this.eraseTypewriter(), 45);
    } else {
      this.charIndex = 0;
      this.typeIndex = (this.typeIndex + 1) % this.data.typewriterWords.length;
      this.typeTimer = setTimeout(() => this.startTypewriter(), 400);
    }
  }
}
