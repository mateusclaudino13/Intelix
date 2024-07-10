import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Estado } from 'src/app/models/estado';



@Injectable({
  providedIn: 'root'
})
export class IntelixService {

  constructor(

    private readonly http: HttpClient

  ) { }

  public getEstado(): Observable<Estado> {
    return this.http.get<Estado>(`${environment.ESTADO_URL}`);
  }
}
