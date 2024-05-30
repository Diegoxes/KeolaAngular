import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KeolaService {

  private apiUrl  = 'https://inclubtest.com:2053/api/payment/validate';

  constructor(private http:HttpClient) { 

  }

  getCharacters(params:any){
    return this.http.get(environment.baseUrl)
  }

  getCharactersId(id: string): Observable<any> {
    const url = `https://inclubtest.com:2053/api/payment/schedule/vouchers/${id}/1`;
    // console.log(this.http.get(url))
    return this.http.get(url);
  }

  validarPago(data: any) {
    console.log("data",data)
    return this.http.post<any>('https://inclubtest.com:2053/api/payment/validate', data);
  }


  
}
