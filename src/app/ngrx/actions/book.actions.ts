import { createAction, props } from "@ngrx/store";
import { Book } from "src/app/shared/interfaces/book.interface";

export const getBook = createAction('[Book] getBook', props<{book: Book}>())
export const createBook = createAction('[Book] createBook', props<{book: Book}>())
export const updateBook = createAction('[Book] updateBook', props<{bookId: string}>())
export const deleteBook = createAction('[Book] deleteBook', props<{bookId: string}>())