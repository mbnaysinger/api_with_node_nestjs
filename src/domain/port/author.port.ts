import { Author } from "../model/author.model";

export interface AuthorPort {

  findById(id: number): Promise<Author | null>;

  findAll(page: number, size: number): Promise<Author[]>;

  save(author: Author): Promise<Author>;

  delete(author: Author): Promise<void>;
}