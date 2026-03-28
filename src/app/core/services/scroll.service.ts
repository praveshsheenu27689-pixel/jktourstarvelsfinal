import { Injectable } from '@angular/core';
import { BehaviorSubject, fromEvent } from 'rxjs';
import { throttleTime, map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ScrollService {
  private sections = ['home', 'destinations', 'packages', 'categories', 'story', 'map', 'timeline', 'gallery', 'testimonials', 'booking', 'about', 'newsletter', 'contact'];
  activeSection$ = new BehaviorSubject<string>('home');

  init() {
    fromEvent(window, 'scroll').pipe(
      throttleTime(100),
      map(() => this.getActiveSection())
    ).subscribe(section => this.activeSection$.next(section));
  }

  private getActiveSection(): string {
    const scrollY = window.scrollY + 120;
    let active = 'home';
    for (const id of this.sections) {
      const el = document.getElementById(id);
      if (el && el.offsetTop <= scrollY) active = id;
    }
    return active;
  }

  scrollTo(id: string) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
