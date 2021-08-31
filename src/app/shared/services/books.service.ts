import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Book } from '../interfaces/book.interface';


@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Book[]>{
   return this.http.get<Book[]>( `${environment.dBUrl}/book`) 
  }

  getById(id: string):Observable<Book>{
    return this.http.get<Book>(`${environment.dBUrl}/book/${id}`) 
  }

  update(book: Book): Observable<Book>{
    return this.http.put<Book>(`${environment.dBUrl}/book/${book.id}`, book) 
  }

  create(book: Book): Observable<Book>{
    return this.http.post<Book>(`${environment.dBUrl}/book`, book)
  }

  delete(id: string): Observable<Book>{
    return this.http.delete<Book>(`${environment.dBUrl}/book/${id}`) 
  }

}
