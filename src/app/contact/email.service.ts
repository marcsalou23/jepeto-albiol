import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  private apiUrl = 'http://localhost:3000/api/send-email';

  constructor(private http: HttpClient) {}

  sendEmail(name: string, email: string, message: string) {
    return this.http.post(this.apiUrl, { name, email, message });
  }
}
