/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line no-shadow
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';


@Entity('employees')
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default class Employees {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  sector: string;

  @Column()
  activity: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;
}
