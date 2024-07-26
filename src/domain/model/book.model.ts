import { Author } from './author.model';
import { LocalDate, LocalDateTime } from '@js-joda/core';

export class Book {
  private readonly id: number;
  private readonly title: string;
  private readonly isbn: string;
  private readonly publishedDate: LocalDate;
  private readonly author: Author;
  private readonly createdAt: LocalDateTime;
  private readonly updatedAt: LocalDateTime;
  private readonly createdBy: string;
  private readonly updatedBy: string;
  private readonly version: number;

  public constructor(builder: BookBuilder) {
    this.id = builder.id;
    this.title = builder.title;
    this.isbn = builder.isbn;
    this.publishedDate = builder.publishedDate;
    this.author = builder.author;
    this.createdAt = builder.createdAt;
    this.updatedAt = builder.updatedAt;
    this.createdBy = builder.createdBy;
    this.updatedBy = builder.updatedBy;
    this.version = builder.version;
  }

  getId(): number {
    return this.id;
  }

  getTitle(): string {
    return this.title;
  }

  getIsbn(): string {
    return this.isbn;
  }

  getPublishedDate(): LocalDate {
    return this.publishedDate;
  }

  getAuthor(): Author {
    return this.author;
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

  getAuthorId(): number | null {
    return this.author ? this.author.getId() : null;
  }

  static builder(): BookBuilder {
    return new BookBuilder();
  }

  static builderFrom(book: Book): BookBuilder {
    return new BookBuilder(book);
  }
}

export class BookBuilder {
  id: number;
  title: string;
  isbn: string;
  publishedDate: LocalDate;
  author: Author;
  createdAt: LocalDateTime;
  updatedAt: LocalDateTime;
  createdBy: string;
  updatedBy: string;
  version: number;

  constructor(book?: Book) {
    if (book) {
      this.id = book.getId();
      this.title = book.getTitle();
      this.isbn = book.getIsbn();
      this.publishedDate = book.getPublishedDate();
      this.author = book.getAuthor();
      this.createdAt = book.getCreatedAt();
      this.updatedAt = book.getUpdatedAt();
      this.createdBy = book.getCreatedBy();
      this.updatedBy = book.getUpdatedBy();
      this.version = book.getVersion();
    }
  }

  setId(id: number): BookBuilder {
    this.id = id;
    return this;
  }

  setTitle(title: string): BookBuilder {
    this.title = title;
    return this;
  }

  setIsbn(isbn: string): BookBuilder {
    this.isbn = isbn;
    return this;
  }

  setPublishedDate(publishedDate: LocalDate): BookBuilder {
    this.publishedDate = publishedDate;
    return this;
  }

  setAuthor(author: Author): BookBuilder {
    this.author = author;
    return this;
  }

  setCreatedAt(createdAt: LocalDateTime): BookBuilder {
    this.createdAt = createdAt;
    return this;
  }

  setUpdatedAt(updatedAt: LocalDateTime): BookBuilder {
    this.updatedAt = updatedAt;
    return this;
  }

  setCreatedBy(createdBy: string): BookBuilder {
    this.createdBy = createdBy;
    return this;
  }

  setUpdatedBy(updatedBy: string): BookBuilder {
    this.updatedBy = updatedBy;
    return this;
  }

  setVersion(version: number): BookBuilder {
    this.version = version;
    return this;
  }

  build(): Book {
    return new Book(this);
  }
}