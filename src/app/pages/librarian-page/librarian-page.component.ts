import { Component, OnDestroy, OnInit } from '@angular/core';
import { BooksService } from 'src/app/shared/services/books.service';
import { Subscription } from 'rxjs';
import { Book } from 'src/app/shared/interfaces/book.interface';

@Component({
  selector: 'app-librarian-page',
  templateUrl: './librarian-page.component.html',
  styleUrls: ['./librarian-page.component.scss']
})
export class LibrarianPageComponent implements OnInit, OnDestroy {

  pSub: Subscription
  dSub: Subscription
  bookData: Book[] = []

  constructor(private bookService: BooksService) { }

  ngOnInit(): void {
    this.renderTable()
  }

  renderTable(){
    this.dSub = this.bookService.getAll().subscribe((books)=>{
      this.bookData = books
    })
  }


  remove(id: string){
    this.dSub = this.bookService.delete(id).subscribe(()=>{
      this.bookData = this.bookData.filter(item=>item.id !== id)
    })

  }

  ngOnDestroy(){
    if(this.dSub){
      this.dSub.unsubscribe()
    }
    if(this.pSub){
      this.pSub.unsubscribe()
    }
  }  

}
