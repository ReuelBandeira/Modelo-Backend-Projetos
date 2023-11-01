/* eslint-disable no-param-reassign */
import AppError from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import Projects from '../infra/typeorm/entities/projects';
import IProjectsRepository from '../repositories/IProjectsRepository';

interface IRequest {
  id: number;
  name_project: string;
  client: string;
  type_project: string;
}

@injectable()
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default class UpdateProjectsService {
  constructor(
    @inject('ProjectsRepository')
    private ProjectsRepository: IProjectsRepository,
  ) {}

  async execute({id,name_project,client,type_project}: IRequest): Promise<Projects> {

    const projects = await this.ProjectsRepository.findById(id);

    if (!projects) {
      throw new AppError(`Está ação: ${id} não existe`);
    }

    Object.assign(projects, {
      name_project,client,type_project
    });

    await this.ProjectsRepository.update(projects);

    return projects;
  }
}
