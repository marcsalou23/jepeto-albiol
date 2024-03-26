import { Component, Input } from '@angular/core';
import { ScrollService } from '../scroll.service';
import { EmailService } from './email.service';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  @Input() localBooking: boolean = false;
  name: string = '';
  email: string = '';
  message: string = '';

  constructor(
    private scrollService: ScrollService,
    private emailService: EmailService
  ) {}

  openWhatsApp() {
    const url = 'https://wa.me/610269693';
    window.open(url, '_blank');
  }

  scrollTo(sectionId: string) {
    this.scrollService.scrollToSection(sectionId);
  }

  openLinkInNewTab() {
    const url =
      'https://www.airbnb.es/rooms/945766271880521378?guests=1&adults=1&s=67&unique_share_id=f7ca4270-2099-4e9a-adab-1682e1fe5186';
    window.open(url, '_blank');
  }

  submitForm() {
    this.emailService.sendEmail(this.name, this.email, this.message).subscribe(
      () => {
        console.log('Email sent successfully');
        this.name = '';
        this.email = '';
        this.message = '';
      },
      (error) => {
        console.error('Error sending email:', error);
      }
    );
  }
}
