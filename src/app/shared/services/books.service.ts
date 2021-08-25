import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Book[]>{
   return this.http.get<Book[]>('https://61263a3d3ab4100017a68e22.mockapi.io/book') 
  }
}
