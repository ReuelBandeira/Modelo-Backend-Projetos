/* eslint-disable no-param-reassign */
import AppError from '@shared/errors/AppError';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { inject, injectable } from 'tsyringe';
import Employees from '../infra/typeorm/entities/Employees';
import IEmployeesRepository from '../repositories/IEmployeesRepository';

interface IRequest {
  id: number;
  activity: string;
}

@injectable()
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default class UpdateEmployeesService {
  constructor(
    @inject('EmployeesRepository')
    private EmployeesRepository: IEmployeesRepository,
  ) {}

  async execute({ id,activity }: IRequest): Promise<Employees> {

    const employees = await this.EmployeesRepository.findById(id);

    if (!employees) {
      throw new AppError(`Este registro: ${id} não existe`);
    }

    Object.assign(employees, {
      activity,
    });

    await this.EmployeesRepository.update(employees);

    return employees;
  }
}
