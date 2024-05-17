import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Nave } from './nave'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavesService {



  constructor(private http: HttpClient) { }

  getNaves(): Observable<Nave[]> {
    return this.http.get<Nave[]>("https://raw.githubusercontent.com/2603-Uniandes/jsons/main/2024-10%20Star%20Wars/spaceships.json");
  }

}
