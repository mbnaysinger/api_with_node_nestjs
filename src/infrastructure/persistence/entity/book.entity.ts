import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
  } from 'typeorm';
  import { AuthorEntity } from './author.entity';
  import { Auditable } from './auditable.entity';
  
  @Entity('books')
  export class BookEntity extends Auditable {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    title: string;
  
    @Column()
    isbn: string;
  
    @Column({ type: 'date' })
    publishedDate: Date;
  
    @ManyToOne(() => AuthorEntity, (author) => author.books, {
      eager: false,
    })
    @JoinColumn({ name: 'author_id' })
    author: AuthorEntity;
  }