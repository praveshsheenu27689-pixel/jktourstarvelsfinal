import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../core/services/data.service';

@Component({
  selector: 'app-destinations-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './destinations-list.component.html',
  styleUrl: './destinations-list.component.scss'
})
export class DestinationsListComponent implements OnInit {
  type: 'domestic' | 'international' = 'domestic';

  domesticDestinations = [
    { name: 'Andamans',         image: 'https://cdn.yourholiday.me/static/dynimg/destination/33/600x300/2210456-2210455_andaman.jpg' },
    { name: 'Goa',              image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/76/600x300/2210775-2210774_goa-pack1.jpg' },
    { name: 'Kerala',           image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/14/600x300/2228853-2228852_kerala-1.jpg' },
    { name: 'Himachal Pradesh', image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/11/600x300/2228921-2228920_hp-3.jpg' },
    { name: 'Rajasthan',        image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/37/600x450/2185258-2185257_pexels-photo-209741.jpg' },
    { name: 'Ladakh',           image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/99/600x300/3191480-3191479_azin-javadzadeh-wmpyrpas7dq-unsplash.jpg' },
    { name: 'Uttarakhand',      image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/21/600x300/2228887-2228886_manali-1.jpg' },
    { name: 'Kashmir',          image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/28/600x300/2210839-2210838_hampi.jpg' }
  ];

  internationalDestinations = [
    { name: 'Bali',        image: 'https://cdn.yourholiday.me/static/dynimg/destination/48/600x300/3996290-3996289_bali-4.jpg' },
    { name: 'Dubai',       image: 'https://cdn.yourholiday.me/static/dynimg/destination/16/600x300/3598628-3598627_adobestock_47088158.jpg' },
    { name: 'Thailand',    image: 'https://cdn.yourholiday.me/static/dynimg/destination/32/600x300/3076721-3076720_thailand2.jpg' },
    { name: 'Singapore',   image: 'https://cdn.yourholiday.me/static/dynimg/destination/58/600x300/3996296-3996295_singapore-stock-image.jpg' },
    { name: 'Europe',      image: 'https://cdn.yourholiday.me/static/dynimg/destination/21/600x300/2190173-2190172_europe-1-main-image.jpg' },
    { name: 'Maldives',    image: 'https://cdn.yourholiday.me/static/dynimg/destination/98/600x300/2750963-2750962_maldives.jpg' },
    { name: 'Malaysia',    image: 'https://cdn.yourholiday.me/static/dynimg/destination/64/600x300/3160627-3160626_tourist-places-in-malaysia.jpg' },
    { name: 'Switzerland', image: 'https://cdn.yourholiday.me/static/dynimg/destination/74/600x300/2190187-2190186_zurich-switzerland-view-of-the-historic-city-center-with-famous-fraumunster-church-5.jpg' },
    { name: 'Australia',   image: 'https://cdn.yourholiday.me/static/dynimg/destination/58/600x300/2210344-2210343_australia.jpg' },
    { name: 'Japan',       image: 'https://cdn.yourholiday.me/static/dynimg/destination/64/600x300/2750318-2750317_japan.jpg' },
    { name: 'Turkey',      image: 'https://cdn.yourholiday.me/static/dynimg/destination/45/600x300/2750974-2750973_turkey.jpg' },
    { name: 'Vietnam',     image: 'https://cdn.yourholiday.me/static/dynimg/destination/35/600x300/3078047-3078046_vietnam.jpg' },
    { name: 'Cambodia',    image: 'https://cdn.yourholiday.me/static/dynimg/destination/60/600x300/3160621-3160620_cambodia.jpg' },
    { name: 'Georgia',     image: 'https://cdn.yourholiday.me/static/dynimg/destination/7/600x300/2185866-2185865_georgia-main-image.jpg' },
    { name: 'Greece',      image: 'https://cdn.yourholiday.me/static/dynimg/destination/5/600x300/2750959-2750958_greece.jpg' },
    { name: 'Italy',       image: 'https://cdn.yourholiday.me/static/dynimg/destination/79/600x300/2750961-2750960_italy.jpg' },
    { name: 'Kazakhstan',  image: 'https://cdn.yourholiday.me/static/dynimg/destination/58/600x300/2750322-2750321_kazakhstan.jpg' },
    { name: 'New Zealand', image: 'https://cdn.yourholiday.me/static/dynimg/destination/48/600x300/2190141-2190140_rock-formations-on-wharariki-beach-new-zealand--1.jpg' }
  ];

  get destinations() {
    return this.type === 'domestic' ? this.domesticDestinations : this.internationalDestinations;
  }

  get title() {
    return this.type === 'domestic' ? 'Domestic Destinations' : 'International Destinations';
  }

  get subtitle() {
    return this.type === 'domestic'
      ? 'Explore the best of India with JK Tours & Travels'
      : 'Discover the world with JK Tours & Travels';
  }

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    this.route.paramMap.subscribe(params => {
      const t = params.get('type');
      this.type = t === 'international' ? 'international' : 'domestic';
    });
  }

  openDest(name: string) {
    const key = name.toLowerCase().replace(/\s+/g, '-');
    this.router.navigate(['/destination', key]);
  }

  goHome() { this.router.navigate(['/']); }
}
