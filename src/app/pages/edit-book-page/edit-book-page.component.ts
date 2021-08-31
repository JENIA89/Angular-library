import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Book } from 'src/app/shared/interfaces/book.interface';
import { BooksService } from 'src/app/shared/services/books.service';

@Component({
  selector: 'app-edit-book-page',
  templateUrl: './edit-book-page.component.html',
  styleUrls: ['./edit-book-page.component.scss']
})
export class EditBookPageComponent implements OnInit {

  book: Book
  form: FormGroup
  uSub: Subscription
  submitted: boolean = false

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bookService: BooksService
  ) { }

  ngOnInit(): void {
    this.renderEditForm()
  }

  renderEditForm(){
    this.route.params.pipe(
      switchMap((params: Params)=> {
        return this.bookService.getById(params['id'])})
    ).subscribe((book: Book)=>{
      this.book = book
      this.form = new FormGroup({
        title: new FormControl(book.title, Validators.required),
        isbn: new FormControl(book.isbn, [Validators.required, Validators.minLength(13)]),
        author: new FormControl(book.author, Validators.required),
      })
    })
  }

  onSubmit(){
    if(this.form.invalid) return

    this.submitted = true
    
    this.uSub = this.bookService.update({
      ...this.book,
      title: this.form.value.title,
      isbn: this.form.value.isbn,
      author: this.form.value.author,
      id: this.book.id
    }).subscribe(()=>{
      this.submitted = false
      this.router.navigate(['/librarian'])
    })
  }

  ngOnDestroy(){
    if(this.uSub){
      return this.uSub.unsubscribe()
    }
  }



}
