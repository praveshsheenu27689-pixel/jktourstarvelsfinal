import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollService } from '../../core/services/scroll.service';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-deals',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.scss']
})
export class DealsComponent implements OnInit, OnDestroy, AfterViewInit {
  private timer: any;
  countdown = { days: 0, hours: 0, mins: 0, secs: 0 };

  deals = [
    {
      title: 'Dubai on a Budget',
      image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/98/600x300/2211579-2211578_dubai-pac1.jpg',
      discount: '30% OFF',
      originalPrice: 40767,
      salePrice: 28536,
      duration: '4N / 5D',
      validity: 'Limited Seats',
      tag: 'Best Seller',
      link: 'packages'
    },
    {
      title: 'Andaman Island Delight',
      image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/16/600x300/3032141-3032140_hero-anadaman-19-1-min.jpg',
      discount: '25% OFF',
      originalPrice: 37685,
      salePrice: 28264,
      duration: '4N / 5D',
      validity: 'Fixed Departure',
      tag: 'Popular',
      link: 'packages'
    },
    {
      title: 'Stunning Kerala Budget',
      image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/14/600x300/2228853-2228852_kerala-1.jpg',
      discount: '20% OFF',
      originalPrice: 20703,
      salePrice: 16562,
      duration: '5N / 6D',
      validity: 'Book Now',
      tag: 'Couples Special',
      link: 'packages'
    }
  ];

  constructor(private scrollSvc: ScrollService) {}

  ngOnInit() { this.startCountdown(); }
  ngOnDestroy() { clearInterval(this.timer); }

  ngAfterViewInit() {
    gsap.fromTo('.deals-header',
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out',
        scrollTrigger: { trigger: '#deals', start: 'top 80%', once: true } }
    );
    gsap.fromTo('.countdown-box',
      { scale: 0.7, opacity: 0 },
      { scale: 1, opacity: 1, stagger: 0.1, duration: 0.5, ease: 'back.out(1.7)',
        scrollTrigger: { trigger: '#deals', start: 'top 75%', once: true } }
    );
    gsap.fromTo('.deal-card',
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.15, duration: 0.7, ease: 'power3.out',
        scrollTrigger: { trigger: '#deals', start: 'top 70%', once: true } }
    );
  }

  startCountdown() {
    const target = new Date();
    target.setDate(target.getDate() + 7);
    this.timer = setInterval(() => {
      const diff = target.getTime() - Date.now();
      if (diff <= 0) { clearInterval(this.timer); return; }
      this.countdown = {
        days:  Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        mins:  Math.floor((diff % 3600000) / 60000),
        secs:  Math.floor((diff % 60000) / 1000)
      };
    }, 1000);
  }

  goTo(id: string) { this.scrollSvc.scrollTo(id); }
}
