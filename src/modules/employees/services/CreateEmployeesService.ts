import AppError from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import Employees from '../infra/typeorm/entities/Employees';
import IEmployeesRepository from '../repositories/IEmployeesRepository';

interface IRequest {
  name: string;
  sector: string;
  activity: string;
}

@injectable()
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default class CreateEmployeeService {
  constructor(
    @inject('EmployeesRepository')
    private employeesRepository: IEmployeesRepository,
  ) {}

  async execute({name,sector,activity}: IRequest): Promise<Employees> {

    const checkEmployeesExist = await this.employeesRepository.findByName(name);

    if (checkEmployeesExist) {
      throw new AppError(`Esse nome já existe`);
    }

    const employees = await this.employeesRepository.create({
      name,
      sector,
      activity
    });

    return employees;
  }
}
