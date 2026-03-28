import { Component, Input, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnChanges {
  @Input() prefilledPackage = '';

  submitted = false;
  form = {
    name: '', email: '', phone: '',
    destination: '', date: '', travelers: '2',
    budget: '', message: '', packageName: ''
  };

  ngOnChanges() {
    if (this.prefilledPackage) {
      this.form.packageName = this.prefilledPackage;
      this.form.destination = this.prefilledPackage;
    }
  }

  submit() {
    this.submitted = true;
    setTimeout(() => {
      gsap.fromTo('.success-msg', { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5, ease: 'back.out(1.7)' });
    }, 10);
  }

  reset() {
    this.submitted = false;
    this.form = { name: '', email: '', phone: '', destination: '', date: '', travelers: '2', budget: '', message: '', packageName: '' };
  }
}
