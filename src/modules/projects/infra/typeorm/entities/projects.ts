/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line no-shadow
import Employees from '@modules/employees/infra/typeorm/entities/Employees';
import Model from '@modules/model/infra/typeorm/entities/Model';

import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';


@Entity('projects')
export default class Projects {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @JoinColumn({name: 'id_employee' })
  @ManyToOne(() => Employees ,(employees) => employees.id)
  employees:Employees;

  @Column()
  id_employee: number;

  @Column()
  name_project: string;

  @Column()
  client: string;

  @Column()
  type_project: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;
}
