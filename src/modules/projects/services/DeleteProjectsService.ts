import Projects from '@modules/projects/infra/typeorm/entities/projects';
import AppError from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import IProjectsRepository from '../repositories/IProjectsRepository';

interface IRequest {
  id: number;
}

@injectable()
export default class DeleteProjectsService {
  constructor(
    @inject('ProjectsRepository')
    private ProjectsRepository: IProjectsRepository,
  ) {}

  async execute({ id }: IRequest): Promise<Projects> {

    const projects= await this.ProjectsRepository.findById(id);

    if (!projects) {
      throw new AppError(`A ação com o id: ${id} não existe.`);
    }

    await this.ProjectsRepository.delete(id);

    return projects;
  }
}
