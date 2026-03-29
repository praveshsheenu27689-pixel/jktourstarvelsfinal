import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-business-tours',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './business-tours.component.html',
  styleUrl: './business-tours.component.scss'
})
export class BusinessToursComponent implements OnInit {

  categories = [
    { label: 'Beach',                image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/72/600x450/2185294-2185293_pexels-photo-1450353.jpg',       icon: 'fas fa-umbrella-beach', desc: 'Sun, sand & endless horizons' },
    { label: 'Family',               image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/23/600x450/2185310-2185309_pexels-photo-4205505.jpg',       icon: 'fas fa-users',          desc: 'Creating memories that last a lifetime' },
    { label: 'Luxury',               image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/99/600x450/2185274-2185273_pexels-photo-279574.jpg',        icon: 'fas fa-gem',            desc: 'Where every detail is perfection' },
    { label: 'Culture and Heritage', image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/37/600x450/2185258-2185257_pexels-photo-209741.jpg',        icon: 'fas fa-landmark',       desc: 'Discover the soul of civilizations' },
    { label: 'All Inclusive',        image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/62/600x450/2186114-2186113_pexels-photo-3184183.jpg',        icon: 'fas fa-infinity',       desc: 'Everything included — zero worries' },
    { label: 'Cultral Safaris',      image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/86/600x450/2186480-2186479_kenya-6.jpg',                    icon: 'fas fa-paw',            desc: 'Wild encounters & tribal traditions' },
    { label: 'Honeymoon',            image: 'https://cdn.yourholiday.me/static/dynimg/destination/54/1200x900/2188294-2188293_.jpg',                        icon: 'fas fa-heart',          desc: 'Begin your forever in paradise' },
    { label: 'Experiences',          image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/45/1200x900/3192010-3192009_aaron-sebastian-bfgeyps0znk-unsplash.jpg', icon: 'fas fa-star', desc: 'Beyond ordinary — extraordinary adventures' }
  ];

  constructor(private router: Router) {}

  ngOnInit() {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }

  navigate(label: string) {
    const key = label.toLowerCase().replace(/\s+/g, '-');
    this.router.navigate(['/experience', key]);
  }

  goHome() { this.router.navigate(['/']); }
}
