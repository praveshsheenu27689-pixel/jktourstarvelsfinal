import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollService } from '../../core/services/scroll.service';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-scroll-story',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './scroll-story.component.html',
  styleUrls: ['./scroll-story.component.scss']
})
export class ScrollStoryComponent implements AfterViewInit {
  stories = [
    {
      image: 'https://cdn.yourholiday.me/static/dynimg/destination/16/600x300/3598628-3598627_adobestock_47088158.jpg',
      tag: 'International',
      title: 'Dubai — City of Gold',
      text: 'Experience the dazzling skyline of Dubai — from the iconic Burj Khalifa to desert safaris and world-class shopping. Starting at just Rs. 39,999 per person.',
      stat1: 'Rs. 39,999', stat1Label: 'Starting Price',
      stat2: '4N / 5D',    stat2Label: 'Duration'
    },
    {
      image: 'https://cdn.yourholiday.me/static/dynimg/destination/21/600x300/2190173-2190172_europe-1-main-image.jpg',
      tag: 'Fixed Departure',
      title: 'Europe — A Grand Tour',
      text: 'Explore the timeless beauty of Europe — Paris, London, Switzerland, Rome and more. Fully guided group tours with all meals included.',
      stat1: 'Rs. 1,19,999', stat1Label: 'Starting Price',
      stat2: '10N / 11D',    stat2Label: 'Duration'
    },
    {
      image: 'https://cdn.yourholiday.me/static/dynimg/destination/48/600x300/3996290-3996289_bali-4.jpg',
      tag: 'International',
      title: 'Bali — Island of the Gods',
      text: 'Discover the magical island of Bali — lush rice terraces, ancient temples, pristine beaches and vibrant culture. A paradise for every traveler.',
      stat1: 'Rs. 29,999', stat1Label: 'Starting Price',
      stat2: '5N / 6D',    stat2Label: 'Duration'
    }
  ];

  constructor(private scrollSvc: ScrollService) {}

  ngAfterViewInit() {
    this.stories.forEach((_, i) => {
      const panel = `.story-panel-${i}`;
      gsap.fromTo(`${panel} .story-text-content`,
        { x: i % 2 === 0 ? -70 : 70, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: panel, start: 'top 65%', once: true } }
      );
      gsap.fromTo(`${panel} .story-img`,
        { x: i % 2 === 0 ? 70 : -70, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: panel, start: 'top 65%', once: true } }
      );
      gsap.fromTo(`${panel} .story-stat`,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.15, duration: 0.6, ease: 'power2.out',
          scrollTrigger: { trigger: panel, start: 'top 55%', once: true } }
      );
    });
  }

  goTo(id: string) { this.scrollSvc.scrollTo(id); }
}
