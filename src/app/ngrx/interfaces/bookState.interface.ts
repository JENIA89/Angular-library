import { Book } from "src/app/shared/interfaces/book.interface";

export interface BookState {
    books: Book[];
    editBookId: string;
}