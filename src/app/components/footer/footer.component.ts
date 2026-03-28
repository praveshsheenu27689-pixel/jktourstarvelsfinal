import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../core/services/data.service';
import { ScrollService } from '../../core/services/scroll.service';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements AfterViewInit {
  currentYear = new Date().getFullYear();

  constructor(public data: DataService, private scrollSvc: ScrollService) {}

  ngAfterViewInit() {
    gsap.from('.footer-col', {
      scrollTrigger: { trigger: 'footer', start: 'top 85%' },
      y: 40, opacity: 0, stagger: 0.12, duration: 0.7, ease: 'power3.out'
    });
  }

  goTo(id: string) { this.scrollSvc.scrollTo(id); }
}
