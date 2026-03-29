import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../core/services/data.service';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit, OnDestroy {
  current = 0;
  private timer: any;

  constructor(public data: DataService) {}

  ngOnInit() { this.startAuto(); }
  ngOnDestroy() { clearInterval(this.timer); }

  startAuto() {
    this.timer = setInterval(() => this.next(), 5000);
  }

  next() {
    this.current = (this.current + 1) % this.data.testimonials.length;
  }

  prev() {
    this.current = (this.current - 1 + this.data.testimonials.length) % this.data.testimonials.length;
  }

  goTo(i: number) { this.current = i; }
}
