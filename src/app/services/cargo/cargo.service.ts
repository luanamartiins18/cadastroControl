import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cargo } from 'src/app/models/cargo/cargo.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CargoService {

  constructor(private http: HttpClient) { }

  getCargo() {
    return this.http.get<Array<Cargo>>(environment.api + "cargo");
  }
}
