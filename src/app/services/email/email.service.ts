import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient) { }

  sendMail(email) {
    return this.http.get(environment.api + "recuperacao/" + email, { observe: 'response' });
  }
}
