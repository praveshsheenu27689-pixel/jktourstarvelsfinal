import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../core/services/data.service';
import { ScrollService } from '../../core/services/scroll.service';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="topbar" *ngIf="visible">
      <div class="container topbar-inner">
        <div class="topbar-left">
          <span class="topbar-item">
            <i class="fas fa-tag"></i>
            <span>Holiday Deals</span>
          </span>
        </div>
        <div class="topbar-marquee">
          <div class="marquee-track">
            <span *ngFor="let w of data.typewriterWords">🎉 {{ w }} &nbsp;&nbsp;&nbsp;</span>
            <span *ngFor="let w of data.typewriterWords">🎉 {{ w }} &nbsp;&nbsp;&nbsp;</span>
          </div>
        </div>
        <div class="topbar-right">
          <button class="topbar-contact" (click)="goTo('contact')">
            <i class="fas fa-phone"></i> Contact Us
          </button>
          <button class="topbar-close" (click)="visible=false">
            <i class="fas fa-times"></i>
          </button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .topbar {
      background: var(--primary-dark);
      color: rgba(255,255,255,0.9);
      font-size: 0.78rem;
      padding: 0.45rem 0;
      position: relative;
      z-index: 1001;
    }
    .topbar-inner { display: flex; align-items: center; gap: 1.5rem; }
    .topbar-left {
      display: flex; align-items: center; gap: 0.5rem; flex-shrink: 0;
      @media (max-width: 768px) { display: none; }
    }
    .topbar-item { display: flex; align-items: center; gap: 0.35rem; font-weight: 600;
      i { color: var(--accent); } }
    .topbar-marquee {
      flex: 1; overflow: hidden;
      mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
    }
    .marquee-track {
      display: flex; white-space: nowrap;
      animation: marqueeScroll 35s linear infinite;
      span { color: rgba(255,255,255,0.85); font-weight: 500; padding-right: 2rem; }
    }
    @keyframes marqueeScroll {
      from { transform: translateX(0); }
      to { transform: translateX(-50%); }
    }
    .topbar-right { display: flex; align-items: center; gap: 0.75rem; flex-shrink: 0; }
    .topbar-contact {
      display: flex; align-items: center; gap: 0.35rem;
      background: var(--accent); color: #fff;
      padding: 0.25rem 0.75rem; border-radius: 50px;
      font-size: 0.75rem; font-weight: 600; transition: background 0.2s;
      cursor: pointer; border: none; font-family: var(--font-body);
      &:hover { background: var(--accent-dark); }
      @media (max-width: 600px) { display: none; }
    }
    .topbar-close {
      color: rgba(255,255,255,0.6); font-size: 0.75rem;
      padding: 0.2rem 0.4rem; transition: color 0.2s;
      &:hover { color: #fff; }
    }
  `]
})
export class TopbarComponent {
  visible = true;
  constructor(public data: DataService, private scrollSvc: ScrollService) {}
  goTo(id: string) { this.scrollSvc.scrollTo(id); }
}
