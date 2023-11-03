import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Horaire } from 'src/app/models/horaire/horaire.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HoraireService {

  apiUrl: string; 

  constructor(private http: HttpClient) {
    this.apiUrl = environment.apiUrl + '/horaire/';
  }

  getAllHoraires() {
    return this.http.get<Array<Horaire>>(this.apiUrl);
  }

  createHoraire (horaire : Horaire) {
    return this.http.post(this.apiUrl, horaire.serialize());
  }

  deleteHoraireById (id : number) {
    return this.http.delete(this.apiUrl + '/' + id);
  }

  updateHoraire (id : number, horaire : Horaire) {
    return this.http.put(this.apiUrl + '/' + id, horaire.serialize());
  }

}