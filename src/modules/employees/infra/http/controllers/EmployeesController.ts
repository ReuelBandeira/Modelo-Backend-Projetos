/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable radix */
import { Request, Response } from 'express';
import { container } from 'tsyringe';
import AppError from '@shared/errors/AppError';
import CreateEmployeesService from '@modules/employees/services/CreateEmployeesService';
import UpdateEmployeesService from '@modules/employees/services/UpdateEmployeesService';
import DeleteEmployeesService from '@modules/employees/services/DeleteEmployeesService';
import EmployeesRepository from '../../typeorm/repositories/EmployeesRepository';

export default class EmployeesController {
  public async create(request: Request, response: Response): Promise<Response> {

    const {name,sector,activity} = request.body;

    const createEmployees = container.resolve(CreateEmployeesService);

    const Employeess = await createEmployees.execute({
      name,sector,activity
    });

    return response.status(201).json(Employeess);
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const employeesRepository = new EmployeesRepository();

    const { page } = request.query;

    const p = typeof page === 'string' ? parseInt(page):1;

    const {
      employees,
      totalPages,
      totalEmployees,

    } = await employeesRepository.findAllEmployees(
      p,
    );

    return response.json({
      employees,
      totalPages,
      totalEmployees,

    });
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { name } = request.query;

    const employeesRepository = new EmployeesRepository();

    const employee = await employeesRepository.findByNameSearch(String(name));

    if (!employee) {
      throw new AppError('This Employees does not exist', 404);
    }

    return response.json(employee);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { activity } = request.body;

    const idParsed = parseInt(id);
    const updateEmployees = container.resolve(UpdateEmployeesService);

    const Employee = await updateEmployees.execute({
      id: idParsed,
      activity,
    });

    return response.status(201).json(Employee);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const parsedId = parseInt(id);
    const deleteEmployees = container.resolve(DeleteEmployeesService);

    await deleteEmployees.execute({ id: parsedId });

    return response.status(204).json({});
  }

  public async findEmployees(request: Request, response: Response): Promise<Response> {
    const Employees = new EmployeesRepository();

    const employees_registers = await Employees.findAllRegisters();

    return response.json({
      employees_registers
    });
  }


}
