import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface GalleryItem { image: string; title: string; size: 'small' | 'medium' | 'large'; }

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements AfterViewInit {
  lightboxItem: GalleryItem | null = null;

  galleryImages: GalleryItem[] = [
    { image: 'https://cdn.yourholiday.me/static/dynimg/destination/16/600x300/3598628-3598627_adobestock_47088158.jpg',  title: 'Dubai',           size: 'large' },
    { image: 'https://cdn.yourholiday.me/static/dynimg/destination/48/600x300/3996290-3996289_bali-4.jpg',               title: 'Bali',            size: 'small' },
    { image: 'https://cdn.yourholiday.me/static/dynimg/destination/98/600x300/2750963-2750962_maldives.jpg',             title: 'Maldives',        size: 'small' },
    { image: 'https://cdn.yourholiday.me/static/dynimg/destination/21/600x300/2190173-2190172_europe-1-main-image.jpg',  title: 'Europe',          size: 'medium' },
    { image: 'https://cdn.yourholiday.me/static/dynimg/destination/32/600x300/3076721-3076720_thailand2.jpg',            title: 'Thailand',        size: 'medium' },
    { image: 'https://cdn.yourholiday.me/static/dynimg/destination/64/600x300/2750318-2750317_japan.jpg',                title: 'Japan',           size: 'small' },
    { image: 'https://cdn.yourholiday.me/static/dynimg/destination/74/600x300/2190187-2190186_zurich-switzerland-view-of-the-historic-city-center-with-famous-fraumunster-church-5.jpg', title: 'Switzerland', size: 'large' },
    { image: 'https://cdn.yourholiday.me/static/dynimg/destination/33/600x300/2210456-2210455_andaman.jpg',              title: 'Andamans',        size: 'small' },
    { image: 'https://cdn.yourholiday.me/static/dynimg/destination/58/600x300/3996296-3996295_singapore-stock-image.jpg', title: 'Singapore',      size: 'medium' },
    { image: 'https://cdn.yourholiday.me/static/dynimg/destination/45/600x300/2750974-2750973_turkey.jpg',               title: 'Turkey',          size: 'small' },
    { image: 'https://cdn.yourholiday.me/static/dynimg/destination/93/600x300/2210565-2210564_srilanka.jpg',             title: 'Sri Lanka',       size: 'small' },
    { image: 'https://cdn.yourholiday.me/static/dynimg/destination/70/600x300/2210601-2210600_mauritius.jpg',            title: 'Mauritius',       size: 'medium' },
    { image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/14/600x300/2228853-2228852_kerala-1.jpg',               title: 'Kerala',          size: 'large' },
    { image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/11/600x300/2228921-2228920_hp-3.jpg',                   title: 'Himachal Pradesh', size: 'small' },
    { image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/37/600x450/2185258-2185257_pexels-photo-209741.jpg',    title: 'Rajasthan',       size: 'small' },
    { image: 'https://cdn.yourholiday.me/static/dynimg/destination/35/600x300/3078047-3078046_vietnam.jpg',              title: 'Vietnam',         size: 'medium' }
  ];

  ngAfterViewInit() {
    // Use fromTo so items are always visible even if ScrollTrigger doesn't fire
    gsap.fromTo('.gallery-item',
      { scale: 0.9, opacity: 0 },
      {
        scale: 1, opacity: 1,
        stagger: 0.07, duration: 0.55, ease: 'power3.out',
        scrollTrigger: { trigger: '#gallery', start: 'top 80%', once: true }
      }
    );
  }

  openLightbox(item: GalleryItem) {
    this.lightboxItem = item;
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
      gsap.from('.lightbox-inner', { scale: 0.85, opacity: 0, duration: 0.4, ease: 'back.out(1.5)' });
    }, 10);
  }

  closeLightbox() {
    gsap.to('.lightbox-inner', {
      scale: 0.85, opacity: 0, duration: 0.25, ease: 'power2.in',
      onComplete: () => {
        this.lightboxItem = null;
        document.body.style.overflow = '';
      }
    });
  }
}
