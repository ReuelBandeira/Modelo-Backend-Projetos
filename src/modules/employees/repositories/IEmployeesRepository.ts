import ICreateEmployeesDTO from '../dtos/ICreateEmployeesDTO';
import Employees from '../infra/typeorm/entities/Employees';

export default interface IEmployeesRepository {
  findById(id: number): Promise<Employees | undefined>;
  findByNameSearch(
    employees: string,
  ): Promise<(Employees | undefined)[] | undefined>;
  findByName(name: string): Promise<Employees | undefined>;
  findAllEmployees(): Promise<Employees | Employees[]>;
  create(data: ICreateEmployeesDTO): Promise<Employees>;
  update(employees: Employees): Promise<Employees>;
  delete(id: number): Promise<void>;

}
