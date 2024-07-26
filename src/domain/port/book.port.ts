import { Book } from "../model/book.model";

export interface BookPort {
    
  findById(id: number): Promise<Book | null>;

  findAll(page: number, size: number): Promise<Book[]>;

  save(book: Book): Promise<Book>;

  delete(book: Book): Promise<void>;
}