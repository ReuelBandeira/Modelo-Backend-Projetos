import AppError from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import Projects from '../infra/typeorm/entities/projects';
import IProjectsRepository from '../repositories/IProjectsRepository';

interface IRequest {
  id_employee: number;
  name_project: string;
  client: string;
  type_project: string;
}

@injectable()
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default class CreateProjectsService {
  constructor(
    @inject('ProjectsRepository')
    private ProjectsRepository: IProjectsRepository,
  ) {}

  async execute({id_employee,name_project,client,type_project}: IRequest): Promise<Projects> {
    // const checkDescriptionExist = await this.ProjectsRepository.findByName(description);

    // if (checkDescriptionExist) {
    //   throw new AppError(`Esse Projects já existe`);
    // }

    const projects = await this.ProjectsRepository.create({
      id_employee,
      name_project,
      client,
      type_project
    });

    return projects;
  }
}
