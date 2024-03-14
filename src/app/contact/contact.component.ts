import { Component, Input } from '@angular/core';
import { ScrollService } from '../scroll.service';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  @Input() localBooking: boolean = false;

  constructor(private scrollService: ScrollService) {}

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
}
