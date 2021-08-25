import { Book } from './../../shared/interfaces';
import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/shared/services/books.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-librarian-page',
  templateUrl: './librarian-page.component.html',
  styleUrls: ['./librarian-page.component.scss']
})
export class LibrarianPageComponent implements OnInit {

  bookData$: Observable<Book[]>

  constructor(private bookService: BooksService) { }

  ngOnInit(): void {
   this.bookData$ = this.bookService.getAll()
   
  }

}
