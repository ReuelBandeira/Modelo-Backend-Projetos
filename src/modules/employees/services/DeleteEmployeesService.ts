import Employees from '@modules/employees/infra/typeorm/entities/Employees';
import AppError from '@shared/errors/AppError';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { inject, injectable } from 'tsyringe';
import IEmployeesRepository from '../repositories/IEmployeesRepository';

interface IRequest {
  id: number;
}

@injectable()
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default class DeleteEmployeesService {
  constructor(

    @inject('EmployeesRepository')
    private employeesRepository: IEmployeesRepository,
  ) {}

  async execute({ id }: IRequest): Promise<Employees> {

    const employees= await this.employeesRepository.findById(id);

    if (!employees) {
      throw new AppError(`O usuario com o id: ${id} não existe.`);
    }

    await this.employeesRepository.delete(id);

    return employees;
  }
}
