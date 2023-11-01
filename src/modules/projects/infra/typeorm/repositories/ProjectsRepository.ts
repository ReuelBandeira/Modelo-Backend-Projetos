import ICreateProjectsDTO from '@modules/projects/dtos/ICreateProjectsDTO';
import IProjectsRepository from '@modules/projects/repositories/IProjectsRepository';
import { getRepository, Like, Repository } from 'typeorm';
import Projects from '../entities/projects';

const TOTAL_PER_PAGE = 11;

export default class ProjectsRepository implements IProjectsRepository {

  private ormRepository: Repository<Projects>;

  constructor() {
    this.ormRepository = getRepository(Projects);

  }

  public async findById(id: number): Promise<Projects | undefined> {
    const projects = await this.ormRepository.findOne({
      where: { id },
    });

    return projects;
  }

  public async findByName(description: string): Promise<Projects | undefined> {
    const projects = await this.ormRepository.findOne({
      where: { description }
    });

    return projects;
  }

  public async findByNameSearch(
    client: string,
  ): Promise<(Projects | undefined)[] | undefined> {
    const projects = await this.ormRepository.find({
      where: { client: Like(`%${client}%`) },
    });

    return projects;
  }

  public async create(projectsData: ICreateProjectsDTO): Promise<Projects> {
    const projects = this.ormRepository.create(projectsData);
    await this.ormRepository.save(projects);

    return projects;
  }

  public async update(ProjectsData: Projects): Promise<Projects> {
    const projects = await this.ormRepository.save(ProjectsData);
    return projects;
  }

  public async findAllProjects(page=1,): Promise<Projects[]> {

    const projects = await this.ormRepository.find({
      relations: ['employees'],
      order: { id: 'DESC' },
      skip: (page - 1) * TOTAL_PER_PAGE,
      take: TOTAL_PER_PAGE,
    });

    const totalProjects = (await this.ormRepository.find()).length;

    return {
      projects,
      totalPages:totalProjects/ TOTAL_PER_PAGE,
      totalProjects,
    };

  }

  public async delete(id: number): Promise<void> {
    await this.ormRepository.softDelete({ id });
  }

  public async findAllRegisters(): Promise<Projects| Projects[]> {
    const projects = await this.ormRepository.find({
      relations: ['employees'],
      order: { id: 'DESC' },
    });
    return projects;
  }

}
