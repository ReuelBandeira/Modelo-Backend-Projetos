import ICreateEmployeesDTO from '@modules/employees/dtos/ICreateEmployeesDTO';
import IEmployeesRepository from '@modules/employees/repositories/IEmployeesRepository';
import { getRepository, Like, Repository } from 'typeorm';
import Employees from '../entities/Employees';

const TOTAL_PER_PAGE = 11;

export default class EmployeesDowntimeRepository implements IEmployeesRepository {
  private ormRepository: Repository<Employees>;

  constructor() {
    this.ormRepository = getRepository(Employees);

  }

  public async findById(id: number): Promise<Employees | undefined> {
    const employees = await this.ormRepository.findOne({
      where: { id },
    });

    return employees;
  }

  public async findByName(name: string): Promise<Employees | undefined> {
    const employees = await this.ormRepository.findOne({
      where: {name}
    });

    return employees;
  }

  public async findByNameSearch(
    name: string,
  ): Promise<(Employees | undefined)[] | undefined> {
    const employee = await this.ormRepository.find({
      where: { name: Like(`%${name}%`) },
    });

    return employee;
  }

  public async create(EmployeesData: ICreateEmployeesDTO): Promise<Employees> {
    const employees = this.ormRepository.create(EmployeesData);
    await this.ormRepository.save(employees);

    return employees;
  }

  public async update(EmployeesData: Employees): Promise<Employees> {
    const employees = await this.ormRepository.save(EmployeesData);
    return employees;
  }

  public async findAllEmployees(page=1,): Promise<Employees | Employees[]> {
    const employees = await this.ormRepository.find({
      order: { id: 'DESC' },
      skip: (page - 1) * TOTAL_PER_PAGE,
      take: TOTAL_PER_PAGE,
    });

    const totalEmployees = (await this.ormRepository.find()).length;

    return {
      employees,
      totalPages:totalEmployees/ TOTAL_PER_PAGE,
      totalEmployees,

    };
  }

  public async delete(id: number): Promise<void> {
    await this.ormRepository.softDelete({ id });
  }

  public async findAllRegisters(): Promise<Employees| Employees[]> {
    const employees = await this.ormRepository.find({
      order: { id: 'DESC' },
    });
    return employees;
  }

}
