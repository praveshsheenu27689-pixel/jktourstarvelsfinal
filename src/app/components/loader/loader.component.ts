import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import gsap from 'gsap';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="loader">
      <!-- Flying plane -->
      <div class="loader-plane">
        <svg class="plane-svg" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <!-- Main fuselage -->
          <ellipse cx="60" cy="60" rx="48" ry="12" fill="white" opacity="0.97"/>
          <!-- Nose cone -->
          <path d="M108 60 Q120 60 108 54 L96 60 L108 66 Q120 60 108 60Z" fill="white"/>
          <!-- Tail fin vertical -->
          <path d="M18 60 L12 38 L28 52 Z" fill="rgba(255,255,255,0.9)"/>
          <!-- Tail fin horizontal left -->
          <path d="M22 60 L8 68 L26 64 Z" fill="rgba(255,255,255,0.85)"/>
          <!-- Tail fin horizontal right -->
          <path d="M22 60 L8 52 L26 56 Z" fill="rgba(255,255,255,0.85)"/>
          <!-- Main wing left (upper) -->
          <path d="M72 58 L40 20 L52 56 Z" fill="rgba(255,255,255,0.95)"/>
          <!-- Main wing right (lower) -->
          <path d="M72 62 L40 100 L52 64 Z" fill="rgba(255,255,255,0.95)"/>
          <!-- Wing accent stripe -->
          <path d="M72 58 L52 56 L52 64 L72 62 Z" fill="rgba(245,166,35,0.85)"/>
          <!-- Engine left -->
          <ellipse cx="62" cy="50" rx="10" ry="4" fill="rgba(200,220,255,0.7)"/>
          <!-- Engine right -->
          <ellipse cx="62" cy="70" rx="10" ry="4" fill="rgba(200,220,255,0.7)"/>
          <!-- Windows row -->
          <circle cx="90" cy="57" r="2.5" fill="rgba(173,216,255,0.9)"/>
          <circle cx="82" cy="57" r="2.5" fill="rgba(173,216,255,0.9)"/>
          <circle cx="74" cy="57" r="2.5" fill="rgba(173,216,255,0.9)"/>
          <circle cx="66" cy="57" r="2.5" fill="rgba(173,216,255,0.9)"/>
          <circle cx="90" cy="63" r="2.5" fill="rgba(173,216,255,0.9)"/>
          <circle cx="82" cy="63" r="2.5" fill="rgba(173,216,255,0.9)"/>
          <circle cx="74" cy="63" r="2.5" fill="rgba(173,216,255,0.9)"/>
          <circle cx="66" cy="63" r="2.5" fill="rgba(173,216,255,0.9)"/>
          <!-- Fuselage stripe -->
          <rect x="28" y="58" width="80" height="4" rx="2" fill="rgba(245,166,35,0.6)"/>
        </svg>
      </div>
      <!-- Trail dots -->
      <div class="trail t1"></div>
      <div class="trail t2"></div>
      <div class="trail t3"></div>
      <!-- Clouds -->
      <div class="cloud c1">☁</div>
      <div class="cloud c2">☁</div>
      <div class="cloud c3">☁</div>
      <!-- Brand -->
      <div class="loader-brand">
        <div class="brand-jk">JK</div>
        <div class="brand-sub">TOURS &amp; TRAVELS</div>
        <div class="brand-tagline">Your Journey, Our Passion</div>
      </div>
      <!-- Progress -->
      <div class="loader-bar"><div class="loader-fill"></div></div>
      <div class="loader-percent">0%</div>
    </div>
  `,
  styles: [`
    .loader {
      position: fixed; inset: 0; z-index: 9999;
      background: radial-gradient(ellipse at 30% 50%, #0d3b22 0%, #071a0f 100%);
      overflow: hidden;
    }
    /* Stars background */
    .loader::before {
      content: '';
      position: absolute; inset: 0;
      background-image:
        radial-gradient(1px 1px at 10% 20%, rgba(255,255,255,0.6) 0%, transparent 100%),
        radial-gradient(1px 1px at 30% 60%, rgba(255,255,255,0.4) 0%, transparent 100%),
        radial-gradient(1px 1px at 55% 15%, rgba(255,255,255,0.5) 0%, transparent 100%),
        radial-gradient(1px 1px at 75% 40%, rgba(255,255,255,0.3) 0%, transparent 100%),
        radial-gradient(1px 1px at 90% 70%, rgba(255,255,255,0.5) 0%, transparent 100%),
        radial-gradient(1px 1px at 20% 80%, rgba(255,255,255,0.4) 0%, transparent 100%),
        radial-gradient(1px 1px at 65% 85%, rgba(255,255,255,0.3) 0%, transparent 100%),
        radial-gradient(2px 2px at 45% 45%, rgba(245,166,35,0.4) 0%, transparent 100%);
    }
    /* Plane */
    .loader-plane {
      position: absolute;
      bottom: 12%; left: -220px;
      z-index: 3;
      filter: drop-shadow(0 0 32px rgba(245,166,35,0.95)) drop-shadow(0 0 80px rgba(255,255,255,0.5));
    }
    .plane-svg { width: 200px; height: 200px; }
    /* Trail dots */
    .trail {
      position: absolute;
      border-radius: 50%;
      background: rgba(245,166,35,0.5);
      bottom: 18%;
      z-index: 2;
      filter: blur(2px);
    }
    .t1 { width: 8px; height: 8px; left: -40px; }
    .t2 { width: 5px; height: 5px; left: -70px; opacity: 0.6; }
    .t3 { width: 3px; height: 3px; left: -95px; opacity: 0.3; }
    /* Clouds */
    .cloud {
      position: absolute;
      font-size: 2.5rem;
      opacity: 0.12;
      color: #fff;
      z-index: 1;
      animation: cloudDrift 8s ease-in-out infinite;
    }
    .c1 { top: 20%; left: 10%; animation-delay: 0s; font-size: 3rem; }
    .c2 { top: 35%; right: 15%; animation-delay: 2s; font-size: 2rem; }
    .c3 { top: 60%; left: 25%; animation-delay: 4s; font-size: 1.8rem; }
    @keyframes cloudDrift {
      0%, 100% { transform: translateX(0); }
      50% { transform: translateX(20px); }
    }
    /* Brand — centered */
    .loader-brand {
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      color: #fff;
      z-index: 4;
    }
    .brand-jk {
      font-size: 5rem; font-weight: 900; line-height: 1;
      font-family: 'Georgia', serif;
      background: linear-gradient(135deg, #ffffff 20%, #f5a623 80%);
      -webkit-background-clip: text; -webkit-text-fill-color: transparent;
      letter-spacing: 8px;
      text-shadow: none;
    }
    .brand-sub {
      font-size: 0.9rem; letter-spacing: 6px;
      text-transform: uppercase;
      color: rgba(255,255,255,0.75);
      margin-top: 0.3rem;
    }
    .brand-tagline {
      font-size: 0.75rem; letter-spacing: 2px;
      color: rgba(245,166,35,0.8);
      margin-top: 0.5rem;
      font-style: italic;
    }
    /* Progress bar */
    .loader-bar {
      position: absolute;
      bottom: 8%; left: 50%; transform: translateX(-50%);
      width: 280px; height: 3px;
      background: rgba(255,255,255,0.12);
      border-radius: 2px; overflow: hidden;
      z-index: 4;
    }
    .loader-fill {
      height: 100%; width: 0;
      background: linear-gradient(90deg, #f5a623, #fff 80%);
      border-radius: 2px;
    }
    .loader-percent {
      position: absolute;
      bottom: calc(8% + 14px); left: 50%; transform: translateX(-50%);
      font-size: 0.78rem; font-weight: 700;
      color: #f5a623; letter-spacing: 2px;
      z-index: 4;
    }
  `]
})
export class LoaderComponent implements AfterViewInit {
  ngAfterViewInit() {
    const pctEl = document.querySelector('.loader-percent') as HTMLElement;
    const vw = window.innerWidth;
    const vh = window.innerHeight;

    // Clouds drift in
    gsap.fromTo('.cloud', { opacity: 0, x: -30 }, { opacity: 0.12, x: 0, stagger: 0.4, duration: 1, ease: 'power2.out' });

    // Brand entrance — letters split
    gsap.fromTo('.brand-jk',
      { opacity: 0, y: 30, letterSpacing: '20px' },
      { opacity: 1, y: 0, letterSpacing: '8px', duration: 0.8, ease: 'power3.out', delay: 0.2 }
    );
    gsap.fromTo('.brand-sub',
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out', delay: 0.6 }
    );
    gsap.fromTo('.brand-tagline',
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out', delay: 0.9 }
    );

    // Fly plane from bottom-left to top-right
    gsap.to('.loader-plane', {
      x: vw + 200,
      y: -(vh * 0.8),
      duration: 2.2,
      ease: 'power1.inOut',
      delay: 0.3
    });
    gsap.to(['.t1','.t2','.t3'], {
      x: vw + 200,
      y: -(vh * 0.8),
      duration: 2.2,
      ease: 'power1.inOut',
      delay: 0.3,
      stagger: 0.06
    });

    // Progress bar
    gsap.to('.loader-fill', {
      width: '100%', duration: 2.4, ease: 'power2.inOut', delay: 0.1,
      onUpdate: function() {
        const el = document.querySelector('.loader-fill') as HTMLElement;
        if (el && pctEl) {
          const w = parseFloat(el.style.width || '0');
          pctEl.textContent = Math.min(Math.round(w), 100) + '%';
        }
      }
    });

    // Exit wipe
    gsap.to('.loader', {
      clipPath: 'inset(0 0 100% 0)',
      duration: 0.7, ease: 'power3.inOut', delay: 2.7
    });
  }
}
