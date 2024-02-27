import { Component, OnInit } from '@angular/core';
import Cookies from 'js-cookie';

@Component({
  selector: 'app-cookie-consent',
  templateUrl: './cookie-consent.component.html',
  styleUrls: ['./cookie-consent.component.css'],
})
export class CookieConsentComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.checkCookieConsent();
  }

  checkCookieConsent() {
    var cookieConsent = Cookies.get('cookieConsent');
    var consentBar = document.getElementById('cookieConsent');

    if (!cookieConsent) {
      consentBar.style.display = 'block';

      document
        .getElementById('acceptCookies')
        .addEventListener('click', function () {
          Cookies.set('cookieConsent', 'accepted', { expires: 30 }); // Set cookie for 30 days
          consentBar.style.display = 'none';
        });
    }
  }
}
