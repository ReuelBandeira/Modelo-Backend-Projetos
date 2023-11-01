import { container } from 'tsyringe';

import IProjectsRepository from '@modules/projects/repositories/IProjectsRepository';
import ProjectsRepository from '@modules/projects/infra/typeorm/repositories/ProjectsRepository';

import IEmployeesRepository from '@modules/employees/repositories/IEmployeesRepository';
import EmployeesRepository from '@modules/employees/infra/typeorm/repositories/EmployeesRepository';

container.registerSingleton<IProjectsRepository>(
  'ProjectsRepository',
  ProjectsRepository
);

container.registerSingleton<IEmployeesRepository>(
  'EmployeesRepository',
  EmployeesRepository
);
