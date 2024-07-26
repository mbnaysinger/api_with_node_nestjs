import {
    CreateDateColumn,
    UpdateDateColumn,
    VersionColumn,
    Column,
    PrimaryGeneratedColumn,
    BaseEntity,
  } from 'typeorm';
  import { Exclude } from 'class-transformer';
  
  export abstract class Auditable extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ name: 'created_by', nullable: true, update: false })
    createdBy: string;
  
    @CreateDateColumn({ name: 'created_at', type: 'timestamp', update: false })
    createdAt: Date;
  
    @Column({ name: 'updated_by', nullable: true })
    updatedBy: string;
  
    @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
    updatedAt: Date;
  
    @VersionColumn()
    version: number;
  
    @Column({ default: false })
    @Exclude()
    deleted: boolean;
  }