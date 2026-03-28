import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import gsap from 'gsap';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  sent = false;
  form = { name: '', email: '', subject: '', message: '' };

  send() {
    this.sent = true;
    gsap.from('.contact-success', { y: 20, opacity: 0, duration: 0.5, ease: 'power3.out' });
  }
}
