import ICreateProjectsDTO from '../dtos/ICreateProjectsDTO';
import Projects from '../infra/typeorm/entities/projects';

export default interface IProjectsRepository {
  findById(id: number): Promise<Projects | undefined>;
  findByNameSearch(
    client: string,
  ): Promise<(Projects | undefined)[] | undefined>;
  findByName(descriptiom: string): Promise<Projects | undefined>;
  findAllProjects(): Promise<Projects[]>;
  create(data: ICreateProjectsDTO): Promise<Projects>;
  update(projects: Projects): Promise<Projects>;
  delete(id: number): Promise<void>;

}
