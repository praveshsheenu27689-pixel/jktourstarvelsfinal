import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { DataService } from '../../core/services/data.service';
import { ScrollService } from '../../core/services/scroll.service';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements AfterViewInit {
  constructor(public data: DataService, private scrollSvc: ScrollService, private router: Router) {}

  ngAfterViewInit() {
    gsap.fromTo('.cat-card',
      { scale: 0.7, opacity: 0 },
      { scale: 1, opacity: 1, stagger: 0.08, duration: 0.6, ease: 'back.out(1.7)',
        scrollTrigger: { trigger: '#categories', start: 'top 75%', once: true } }
    );
  }

  navigate(label: string) {
    const key = label.toLowerCase().replace(/\s+/g, '-');
    this.router.navigate(['/experience', key]);
  }
}
