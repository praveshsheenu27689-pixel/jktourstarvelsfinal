import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
<<<<<<< HEAD
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from '../../core/services/api.service';
=======
>>>>>>> 18aafcba21d516c54cdc1d453584d2eb2657d085
import gsap from 'gsap';

@Component({
  selector: 'app-contact',
  standalone: true,
<<<<<<< HEAD
  imports: [CommonModule, FormsModule, HttpClientModule],
=======
  imports: [CommonModule, FormsModule],
>>>>>>> 18aafcba21d516c54cdc1d453584d2eb2657d085
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  sent = false;
<<<<<<< HEAD
  loading = false;
  form = { name: '', email: '', subject: '', message: '' };

  constructor(private api: ApiService) {}

  send() {
    this.loading = true;
    this.api.submitContact(this.form).subscribe({
      next: () => {
        this.loading = false;
        this.sent = true;
        gsap.from('.contact-success', { y: 20, opacity: 0, duration: 0.5, ease: 'power3.out' });
      },
      error: () => {
        this.loading = false;
        this.sent = true;
        gsap.from('.contact-success', { y: 20, opacity: 0, duration: 0.5, ease: 'power3.out' });
      }
    });
=======
  form = { name: '', email: '', subject: '', message: '' };

  send() {
    this.sent = true;
    gsap.from('.contact-success', { y: 20, opacity: 0, duration: 0.5, ease: 'power3.out' });
>>>>>>> 18aafcba21d516c54cdc1d453584d2eb2657d085
  }
}
