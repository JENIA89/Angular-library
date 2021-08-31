import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Book } from 'src/app/shared/interfaces/book.interface';
import { BooksService } from 'src/app/shared/services/books.service';

@Component({
  selector: 'app-create-book-page',
  templateUrl: './create-book-page.component.html',
  styleUrls: ['./create-book-page.component.scss']
})
export class CreateBookPageComponent implements OnInit {

  form: FormGroup

  constructor(private bookService: BooksService) { }

  ngOnInit(): void {
    this.initForm()
  }

  initForm(){
    this.form = new FormGroup({
      title: new FormControl(null, Validators.required),
      isbn: new FormControl(null, [Validators.required, Validators.minLength(13)]),
      author: new FormControl(null, Validators.required),
    })
  }

  onSubmit(){
    if(this.form.invalid) return

    const book: Book = {
      title: this.form.value.title,
      isbn: this.form.value.isbn,
      author: this.form.value.author,
    }

    this.bookService.create(book).subscribe(()=> this.form.reset())    
  }

}
