import { Book } from "./book.model";
import { LocalDateTime } from '@js-joda/core';

export class Author {
  private readonly id: number;
  private readonly name: string;
  private readonly books: ReadonlySet<Book>;
  private readonly createdAt: LocalDateTime;
  private readonly updatedAt: LocalDateTime;
  private readonly createdBy: string;
  private readonly updatedBy: string;
  private readonly version: number;

  public constructor(builder: AuthorBuilder) {
    this.id = builder.id;
    this.name = builder.name;
    this.books = new Set(builder.books);
    this.createdAt = builder.createdAt;
    this.updatedAt = builder.updatedAt;
    this.createdBy = builder.createdBy;
    this.updatedBy = builder.updatedBy;
    this.version = builder.version;
  }

  getId(): number {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  getBooks(): ReadonlySet<Book> {
    return this.books;
  }

  getCreatedAt(): LocalDateTime {
    return this.createdAt;
  }

  getUpdatedAt(): LocalDateTime {
    return this.updatedAt;
  }

  getCreatedBy(): string {
    return this.createdBy;
  }

  getUpdatedBy(): string {
    return this.updatedBy;
  }

  getVersion(): number {
    return this.version;
  }

  static builder(): AuthorBuilder {
    return new AuthorBuilder();
  }

  static builderFrom(author: Author): AuthorBuilder {
    return new AuthorBuilder(author);
  }
}

export class AuthorBuilder {
  id: number;
  name: string;
  books: Set<Book> = new Set();
  createdAt: LocalDateTime;
  updatedAt: LocalDateTime;
  createdBy: string;
  updatedBy: string;
  version: number;

  constructor(author?: Author) {
    if (author) {
      this.id = author.getId();
      this.name = author.getName();
      this.books = new Set(author.getBooks());
      this.createdAt = author.getCreatedAt();
      this.updatedAt = author.getUpdatedAt();
      this.createdBy = author.getCreatedBy();
      this.updatedBy = author.getUpdatedBy();
      this.version = author.getVersion();
    }
  }

  setId(id: number): AuthorBuilder {
    this.id = id;
    return this;
  }

  setName(name: string): AuthorBuilder {
    this.name = name;
    return this;
  }

  setBooks(books: Set<Book>): AuthorBuilder {
    this.books = books;
    return this;
  }

  setCreatedAt(createdAt: LocalDateTime): AuthorBuilder {
    this.createdAt = createdAt;
    return this;
  }

  setUpdatedAt(updatedAt: LocalDateTime): AuthorBuilder {
    this.updatedAt = updatedAt;
    return this;
  }

  setCreatedBy(createdBy: string): AuthorBuilder {
    this.createdBy = createdBy;
    return this;
  }

  setUpdatedBy(updatedBy: string): AuthorBuilder {
    this.updatedBy = updatedBy;
    return this;
  }

  setVersion(version: number): AuthorBuilder {
    this.version = version;
    return this;
  }

  build(): Author {
    return new Author(this);
  }
}