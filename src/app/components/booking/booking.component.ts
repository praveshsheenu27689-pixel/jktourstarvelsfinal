import { Component, Input, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
<<<<<<< HEAD
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from '../../core/services/api.service';
=======
>>>>>>> 18aafcba21d516c54cdc1d453584d2eb2657d085
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-booking',
  standalone: true,
<<<<<<< HEAD
  imports: [CommonModule, FormsModule, HttpClientModule],
=======
  imports: [CommonModule, FormsModule],
>>>>>>> 18aafcba21d516c54cdc1d453584d2eb2657d085
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnChanges {
  @Input() prefilledPackage = '';

  submitted = false;
<<<<<<< HEAD
  loading = false;
  form = {
    name: '', email: '', phone: '',
    destination: '', travelDate: '', travelers: '2',
    budget: '', message: '', packageName: ''
  };

  constructor(private api: ApiService) {}

=======
  form = {
    name: '', email: '', phone: '',
    destination: '', date: '', travelers: '2',
    budget: '', message: '', packageName: ''
  };

>>>>>>> 18aafcba21d516c54cdc1d453584d2eb2657d085
  ngOnChanges() {
    if (this.prefilledPackage) {
      this.form.packageName = this.prefilledPackage;
      this.form.destination = this.prefilledPackage;
    }
  }

  submit() {
<<<<<<< HEAD
    this.loading = true;
    this.api.submitBooking(this.form).subscribe({
      next: () => {
        this.loading = false;
        this.submitted = true;
        setTimeout(() => {
          gsap.fromTo('.success-msg', { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5, ease: 'back.out(1.7)' });
        }, 10);
      },
      error: () => {
        this.loading = false;
        this.submitted = true;
        setTimeout(() => {
          gsap.fromTo('.success-msg', { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5, ease: 'back.out(1.7)' });
        }, 10);
      }
    });
=======
    this.submitted = true;
    setTimeout(() => {
      gsap.fromTo('.success-msg', { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5, ease: 'back.out(1.7)' });
    }, 10);
>>>>>>> 18aafcba21d516c54cdc1d453584d2eb2657d085
  }

  reset() {
    this.submitted = false;
<<<<<<< HEAD
    this.form = { name: '', email: '', phone: '', destination: '', travelDate: '', travelers: '2', budget: '', message: '', packageName: '' };
=======
    this.form = { name: '', email: '', phone: '', destination: '', date: '', travelers: '2', budget: '', message: '', packageName: '' };
>>>>>>> 18aafcba21d516c54cdc1d453584d2eb2657d085
  }
}
