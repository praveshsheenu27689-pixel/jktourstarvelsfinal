import { Component, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { DataService } from '../../core/services/data.service';
import { ScrollService } from '../../core/services/scroll.service';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface SubPkg { name: string; duration: string; nights: number; }

const SUB_PACKAGES: Record<string, SubPkg[]> = {
  'Andamans':    [ {name:'Andaman Escape',nights:4,duration:'4N/5D'},{name:'Island Bliss',nights:5,duration:'5N/6D'},{name:'Andaman Explorer',nights:6,duration:'6N/7D'},{name:'Grand Andaman',nights:7,duration:'7N/8D'} ],
  'Australia':   [ {name:'Sydney Sojourn',nights:4,duration:'4N/5D'},{name:'Coastal Wonders',nights:5,duration:'5N/6D'},{name:'Outback & Beyond',nights:6,duration:'6N/7D'},{name:'Ultimate Australia',nights:7,duration:'7N/8D'} ],
  'Bali':        [ {name:'Bali Breeze',nights:4,duration:'4N/5D'},{name:'Bali Serenity',nights:5,duration:'5N/6D'},{name:'Bali Splendour',nights:6,duration:'6N/7D'},{name:'Grand Bali',nights:7,duration:'7N/8D'} ],
  'Cambodia':    [ {name:'Angkor Discovery',nights:4,duration:'4N/5D'},{name:'Khmer Heritage',nights:5,duration:'5N/6D'},{name:'Cambodia Explorer',nights:6,duration:'6N/7D'},{name:'Mekong Journey',nights:7,duration:'7N/8D'} ],
  'Dubai':       [ {name:'Dubai Highlights',nights:4,duration:'4N/5D'},{name:'Desert Dreams',nights:5,duration:'5N/6D'},{name:'Dubai Luxe',nights:6,duration:'6N/7D'},{name:'Grand Dubai',nights:7,duration:'7N/8D'} ],
  'Europe':      [ {name:'European Glimpse',nights:4,duration:'4N/5D'},{name:'Classic Europe',nights:5,duration:'5N/6D'},{name:'European Wonders',nights:6,duration:'6N/7D'},{name:'Grand Europe',nights:7,duration:'7N/8D'} ],
  'Georgia':     [ {name:'Tbilisi Trails',nights:4,duration:'4N/5D'},{name:'Caucasus Charm',nights:5,duration:'5N/6D'},{name:'Georgia Explorer',nights:6,duration:'6N/7D'},{name:'Silk Road Journey',nights:7,duration:'7N/8D'} ],
  'Greece':      [ {name:'Athens Escape',nights:4,duration:'4N/5D'},{name:'Aegean Dreams',nights:5,duration:'5N/6D'},{name:'Greek Odyssey',nights:6,duration:'6N/7D'},{name:'Island Hopper',nights:7,duration:'7N/8D'} ],
  'Italy':       [ {name:'Roman Holiday',nights:4,duration:'4N/5D'},{name:'Tuscan Trails',nights:5,duration:'5N/6D'},{name:'Italian Splendour',nights:6,duration:'6N/7D'},{name:'Grand Italia',nights:7,duration:'7N/8D'} ],
  'Japan':       [ {name:'Tokyo Highlights',nights:4,duration:'4N/5D'},{name:'Sakura Trail',nights:5,duration:'5N/6D'},{name:'Japan Explorer',nights:6,duration:'6N/7D'},{name:'Land of Rising Sun',nights:7,duration:'7N/8D'} ],
  'Kazakhstan':  [ {name:'Almaty Escape',nights:4,duration:'4N/5D'},{name:'Steppe Wonders',nights:5,duration:'5N/6D'},{name:'Kazakhstan Explorer',nights:6,duration:'6N/7D'},{name:'Central Asia Grand',nights:7,duration:'7N/8D'} ],
  'Malaysia':    [ {name:'KL Highlights',nights:4,duration:'4N/5D'},{name:'Rainforest Retreat',nights:5,duration:'5N/6D'},{name:'Malaysia Explorer',nights:6,duration:'6N/7D'},{name:'Borneo & Beyond',nights:7,duration:'7N/8D'} ],
  'Maldives':    [ {name:'Maldives Bliss',nights:4,duration:'4N/5D'},{name:'Lagoon Escape',nights:5,duration:'5N/6D'},{name:'Overwater Paradise',nights:6,duration:'6N/7D'},{name:'Ultimate Maldives',nights:7,duration:'7N/8D'} ],
  'Mauritius':   [ {name:'Mauritius Escape',nights:4,duration:'4N/5D'},{name:'Island Serenity',nights:5,duration:'5N/6D'},{name:'Tropical Bliss',nights:6,duration:'6N/7D'},{name:'Grand Mauritius',nights:7,duration:'7N/8D'} ],
  'New Zealand': [ {name:'Kiwi Highlights',nights:4,duration:'4N/5D'},{name:'Fjord Explorer',nights:5,duration:'5N/6D'},{name:'Middle Earth Tour',nights:6,duration:'6N/7D'},{name:'Grand New Zealand',nights:7,duration:'7N/8D'} ],
  'Portugal':    [ {name:'Lisbon Escape',nights:4,duration:'4N/5D'},{name:'Algarve Dreams',nights:5,duration:'5N/6D'},{name:'Portugal Explorer',nights:6,duration:'6N/7D'},{name:'Iberian Journey',nights:7,duration:'7N/8D'} ],
  'Russia':      [ {name:'Moscow Highlights',nights:4,duration:'4N/5D'},{name:'Golden Ring',nights:5,duration:'5N/6D'},{name:'Trans-Siberian',nights:6,duration:'6N/7D'},{name:'Grand Russia',nights:7,duration:'7N/8D'} ],
  'Seychelles':  [ {name:'Seychelles Escape',nights:4,duration:'4N/5D'},{name:'Island Hopper',nights:5,duration:'5N/6D'},{name:'Tropical Paradise',nights:6,duration:'6N/7D'},{name:'Grand Seychelles',nights:7,duration:'7N/8D'} ],
  'Singapore':   [ {name:'City Highlights',nights:4,duration:'4N/5D'},{name:'Sentosa Escape',nights:5,duration:'5N/6D'},{name:'Singapore Explorer',nights:6,duration:'6N/7D'},{name:'Grand Singapore',nights:7,duration:'7N/8D'} ],
  'Spain':       [ {name:'Barcelona Escape',nights:4,duration:'4N/5D'},{name:'Andalusia Dreams',nights:5,duration:'5N/6D'},{name:'Spain Explorer',nights:6,duration:'6N/7D'},{name:'Iberian Grand Tour',nights:7,duration:'7N/8D'} ],
  'Sri Lanka':   [ {name:'Ceylon Highlights',nights:4,duration:'4N/5D'},{name:'Tea Trail',nights:5,duration:'5N/6D'},{name:'Sri Lanka Explorer',nights:6,duration:'6N/7D'},{name:'Grand Ceylon',nights:7,duration:'7N/8D'} ],
  'Switzerland': [ {name:'Swiss Highlights',nights:4,duration:'4N/5D'},{name:'Alpine Escape',nights:5,duration:'5N/6D'},{name:'Swiss Explorer',nights:6,duration:'6N/7D'},{name:'Grand Switzerland',nights:7,duration:'7N/8D'} ],
  'Thailand':    [ {name:'Bangkok Escape',nights:4,duration:'4N/5D'},{name:'Phuket Bliss',nights:5,duration:'5N/6D'},{name:'Thailand Explorer',nights:6,duration:'6N/7D'},{name:'Grand Thailand',nights:7,duration:'7N/8D'} ],
  'Turkey':      [ {name:'Istanbul Escape',nights:4,duration:'4N/5D'},{name:'Cappadocia Dreams',nights:5,duration:'5N/6D'},{name:'Turkey Explorer',nights:6,duration:'6N/7D'},{name:'Grand Turkey',nights:7,duration:'7N/8D'} ],
  'Vietnam':     [ {name:'Hanoi Highlights',nights:4,duration:'4N/5D'},{name:'Ha Long Escape',nights:5,duration:'5N/6D'},{name:'Vietnam Explorer',nights:6,duration:'6N/7D'},{name:'Grand Vietnam',nights:7,duration:'7N/8D'} ]
};

import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-destinations',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.scss']
})
export class DestinationsComponent implements AfterViewInit {
  showAll = false;
  selectedDest: { name: string; image: string } | null = null;
  subPackages: SubPkg[] = [];

  @Output() openDestTab = new EventEmitter<string>();

  constructor(public data: DataService, private scrollSvc: ScrollService, private router: Router) {}

  get visibleDestinations() {
    return this.showAll ? this.data.destinations : this.data.destinations.slice(0, 12);
  }

  ngAfterViewInit() {
    gsap.fromTo('.destinations .section-header',
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out',
        scrollTrigger: { trigger: '#destinations', start: 'top 80%', once: true } }
    );
    gsap.fromTo('.dest-card',
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.06, duration: 0.55, ease: 'power3.out',
        scrollTrigger: { trigger: '#destinations', start: 'top 75%', once: true } }
    );
  }

  openDest(dest: { name: string; image: string }) {
    const domesticKeys = ['andamans', 'goa', 'kerala', 'himachal pradesh', 'rajasthan', 'ladakh', 'uttarakhand', 'kashmir'];
    const routedIntlKeys = ['bali', 'dubai', 'thailand', 'singapore', 'europe', 'maldives', 'malaysia', 'switzerland', 'australia', 'japan', 'turkey', 'vietnam', 'cambodia', 'georgia', 'greece', 'italy', 'kazakhstan', 'new zealand', 'spain', 'russia', 'seychelles', 'mauritius', 'portugal', 'sri lanka'];
    const key = dest.name.toLowerCase();
    if (domesticKeys.includes(key)) {
      this.router.navigate(['/destination', key.replace(/\s+/g, '-')]);
    } else if (routedIntlKeys.includes(key)) {
      this.router.navigate(['/destination', key]);
    } else {
      this.openDestTab.emit(dest.name);
      this.scrollSvc.scrollTo('packages');
    }
  }

  goTo(id: string) { this.scrollSvc.scrollTo(id); }
}
