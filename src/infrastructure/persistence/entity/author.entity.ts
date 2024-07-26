import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToMany,
    JoinColumn,
  } from 'typeorm';
  import { Auditable } from './auditable.entity';
  import { BookEntity } from './book.entity';
  
  @Entity('authors')
  export class AuthorEntity extends Auditable {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    name: string;
  
    @OneToMany(() => BookEntity, (book) => book.author, {
      cascade: ['insert', 'update'],
      eager: false,
    })
    @JoinColumn()
    books: BookEntity[];
  }