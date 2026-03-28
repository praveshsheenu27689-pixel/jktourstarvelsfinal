import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { LoaderComponent } from './components/loader/loader.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { StickyBarComponent } from './components/sticky-bar/sticky-bar.component';
import { HeroComponent } from './components/hero/hero.component';
import { DestinationsComponent } from './components/destinations/destinations.component';
import { DealsComponent } from './components/deals/deals.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { ScrollStoryComponent } from './components/scroll-story/scroll-story.component';
import { MapSectionComponent } from './components/map-section/map-section.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { BookingComponent } from './components/booking/booking.component';
import { AboutComponent } from './components/about/about.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { ScrollService } from './core/services/scroll.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, RouterOutlet,
    LoaderComponent, TopbarComponent, NavbarComponent, StickyBarComponent,
    HeroComponent, DestinationsComponent, DealsComponent, CategoriesComponent,
    ScrollStoryComponent, MapSectionComponent, TimelineComponent, GalleryComponent,
    TestimonialsComponent, BookingComponent, AboutComponent, NewsletterComponent,
    ContactComponent, FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  loading = true;
  selectedPackage = '';
  isHomePage = true;

  constructor(private scrollSvc: ScrollService, private router: Router) {}

  ngOnInit() {
    setTimeout(() => this.loading = false, 3300);
    this.router.events.pipe(filter(e => e instanceof NavigationEnd)).subscribe((e: any) => {
      this.isHomePage = e.url === '/' || e.url === '';
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    });
  }

  scrollTop(e: Event) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  scrollTo(id: string) { this.scrollSvc.scrollTo(id); }

  onBookPackage(pkgName: string) {
    this.selectedPackage = pkgName;
    setTimeout(() => this.scrollSvc.scrollTo('booking'), 50);
  }
}
