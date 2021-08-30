import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {Reader} from './reader';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ReaderService {

  constructor(
    private http: HttpClient) {}

  getReaders(): Observable<Reader[]> {
    return this.http.get<Reader[]>('https://61263a3d3ab4100017a68e22.mockapi.io/users');
  }

  getReader(id: number): Observable<Reader> {
    return this.http.get<Reader>(`https://61263a3d3ab4100017a68e22.mockapi.io/users/${id}`);
  }

  // updateReader(): Observable<any>{
  //   return this.http.get<Reader>(`https://61263a3d3ab4100017a68e22.mockapi.io/users/${id}`);
  // }

  // delete(id: number):Observable<Reader>{
  //   return this.http.delete<Reader>(`https://61263a3d3ab4100017a68e22.mockapi.io/users/${id}`);
  // }

  //addReader():Observable<Reader>{
  //   return this.http.post <Reader>(`https://61263a3d3ab4100017a68e22.mockapi.io/users/${id}`);
  // }

}
