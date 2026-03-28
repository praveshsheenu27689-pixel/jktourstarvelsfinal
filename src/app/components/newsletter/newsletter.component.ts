import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import gsap from 'gsap';

@Component({
  selector: 'app-newsletter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section class="newsletter" id="newsletter">
      <div class="container">
        <div class="newsletter-inner">
          <div class="newsletter-text">
            <span class="nl-tag"><i class="fas fa-envelope"></i> Newsletter</span>
            <h2>Get Exclusive Travel Deals</h2>
            <p>Subscribe to receive early bird offers, seasonal discounts, and travel inspiration for worldwide tours.</p>
          </div>
          <div class="newsletter-form" *ngIf="!subscribed">
            <div class="nl-input-wrap">
              <input type="email" [(ngModel)]="email" placeholder="Enter your email address">
              <button class="btn btn-accent" (click)="subscribe()">
                <i class="fas fa-paper-plane"></i> Subscribe
              </button>
            </div>
            <p class="nl-note"><i class="fas fa-lock"></i> No spam. Unsubscribe anytime.</p>
          </div>
          <div class="nl-success" *ngIf="subscribed">
            <i class="fas fa-check-circle"></i>
            <p>You're subscribed! Watch your inbox for amazing deals.</p>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .newsletter {
      background: linear-gradient(135deg, #f5a623 0%, #d4891a 100%);
      padding: 4rem 0;
    }
    .newsletter-inner {
      display: flex; align-items: center; justify-content: space-between;
      gap: 3rem; flex-wrap: wrap;
    }
    .newsletter-text { flex: 1; min-width: 280px; }
    .nl-tag {
      display: inline-flex; align-items: center; gap: 0.4rem;
      background: rgba(255,255,255,0.2); color: #fff;
      font-size: 0.8rem; font-weight: 600; letter-spacing: 1px;
      text-transform: uppercase; padding: 0.35rem 0.9rem;
      border-radius: 50px; margin-bottom: 0.75rem;
    }
    h2 { color: #fff; margin-bottom: 0.75rem; }
    p { color: rgba(255,255,255,0.85); }
    .newsletter-form { flex: 1; min-width: 320px; }
    .nl-input-wrap {
      display: flex; gap: 0.5rem;
      background: rgba(255,255,255,0.15); border-radius: 50px;
      padding: 0.4rem 0.4rem 0.4rem 1.2rem;
    }
    input {
      flex: 1; background: none; border: none; outline: none;
      color: #fff; font-size: 0.95rem; font-family: var(--font-body);
      &::placeholder { color: rgba(255,255,255,0.65); }
    }
    .nl-note {
      font-size: 0.78rem; color: rgba(255,255,255,0.7);
      margin-top: 0.6rem; display: flex; align-items: center; gap: 0.3rem;
    }
    .nl-success {
      display: flex; align-items: center; gap: 1rem;
      color: #fff; font-size: 1rem;
      i { font-size: 2rem; }
    }
  `]
})
export class NewsletterComponent {
  email = '';
  subscribed = false;

  subscribe() {
    if (this.email) {
      this.subscribed = true;
      gsap.from('.nl-success', { scale: 0.8, opacity: 0, duration: 0.5, ease: 'back.out(1.7)' });
    }
  }
}
