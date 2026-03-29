import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollService } from '../../core/services/scroll.service';

@Component({
  selector: 'app-sticky-bar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="sticky-bar" [class.visible]="visible">
      <div class="container sticky-inner">
        <div class="sticky-brand">
          <span class="sticky-logo">✈ J K Tours And Travels</span>
          <span class="sticky-tagline">Pune | Global Travel Experts</span>
        </div>
        <div class="sticky-offers">
          <span class="sticky-offer"><i class="fas fa-tag"></i> Up to 30% OFF</span>
          <span class="sticky-offer"><i class="fas fa-shield-alt"></i> Free Cancellation</span>
          <span class="sticky-offer"><i class="fas fa-headset"></i> 24/7 Support</span>
        </div>
        <div class="sticky-actions">
          <button class="sticky-call" (click)="goTo('contact')">
            <i class="fas fa-phone"></i> Call Now
          </button>
          <button class="btn btn-accent btn-sm" (click)="goTo('booking')">
            <i class="fas fa-calendar-check"></i> Book Now
          </button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .sticky-bar {
      position: fixed; bottom: -80px; left: 0; right: 0;
      z-index: 998;
      background: rgba(10,46,26,0.97);
      backdrop-filter: blur(12px);
      border-top: 2px solid var(--accent);
      padding: 0.75rem 0;
      transition: bottom 0.4s cubic-bezier(0.4,0,0.2,1);
      box-shadow: 0 -4px 24px rgba(0,0,0,0.2);
      &.visible { bottom: 0; }
    }
    .sticky-inner {
      display: flex; align-items: center;
      justify-content: space-between; gap: 1.5rem; flex-wrap: wrap;
    }
    .sticky-brand {
      display: flex; flex-direction: column;
      @media (max-width: 768px) { display: none; }
    }
    .sticky-logo { font-size: 1rem; font-weight: 700; color: #fff; font-family: 'Playfair Display', serif; }
    .sticky-tagline { font-size: 0.7rem; color: var(--accent); letter-spacing: 1px; text-transform: uppercase; }
    .sticky-offers {
      display: flex; gap: 1.5rem; flex-wrap: wrap;
      @media (max-width: 600px) { display: none; }
    }
    .sticky-offer {
      display: flex; align-items: center; gap: 0.4rem;
      font-size: 0.82rem; color: rgba(255,255,255,0.85); font-weight: 500;
      i { color: var(--accent); font-size: 0.75rem; }
    }
    .sticky-actions { display: flex; align-items: center; gap: 0.75rem; }
    .sticky-call {
      display: flex; align-items: center; gap: 0.4rem;
      color: rgba(255,255,255,0.85); font-size: 0.88rem; font-weight: 600;
      padding: 0.5rem 1rem; border-radius: 50px;
      border: 1.5px solid rgba(255,255,255,0.25);
      transition: all 0.3s; cursor: pointer; background: none; font-family: var(--font-body);
      &:hover { border-color: var(--accent); color: var(--accent); }
      i { font-size: 0.8rem; }
    }
  `]
})
export class StickyBarComponent {
  visible = false;
  constructor(private scrollSvc: ScrollService) {}

  @HostListener('window:scroll')
  onScroll() { this.visible = window.scrollY > window.innerHeight * 0.6; }

  goTo(id: string) { this.scrollSvc.scrollTo(id); }
}
