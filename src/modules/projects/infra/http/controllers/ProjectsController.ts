/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable radix */
import { Request, Response } from 'express';
import { container } from 'tsyringe';
import AppError from '@shared/errors/AppError';
import CreateProjectsService from '@modules/projects/services/CreateProjectsService';
import UpdateProjectsService from '@modules/projects/services/UpdateProjectsService';
import DeleteProjectsService from '@modules/projects/services/DeleteProjectsService';
import ProjectsRepository from '../../typeorm/repositories/ProjectsRepository';

export default class ProjectsController {

  public async create(request: Request, response: Response): Promise<Response> {

    const {id_employee,name_project,client,type_project} = request.body;

    const createProjects = container.resolve(CreateProjectsService);

    const projects = await createProjects.execute({
      id_employee,name_project,client,type_project
    });


    return response.status(201).json(projects);
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const projectsRepository = new ProjectsRepository();

    const { page } = request.query;

    const p = typeof page === 'string' ? parseInt(page):1;

    const {
      projects,
      totalPages,
      totalProjects,

    } = await projectsRepository.findAllProjects(
      p,
    );

    return response.json({
      projects,
      totalPages,
      totalProjects,

    });
  }

  public async show(request: Request, response: Response): Promise<Response> {

    const { client } = request.query;

    const projectsRepository = new ProjectsRepository();

    const projects = await projectsRepository.findByNameSearch(String(client));

    if (!projects) {
      throw new AppError('This Projects does not exist', 404);
    }

    return response.json(projects);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const {name_project,client,type_project} = request.body;

    const idParsed = parseInt(id);
    const updateProjects = container.resolve(UpdateProjectsService);

    const Projects = await updateProjects.execute({
      id: idParsed,
      name_project,
      client,
      type_project
    });

    return response.status(201).json(Projects);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const parsedId = parseInt(id);

    const deleteProjects = container.resolve(DeleteProjectsService);

    await deleteProjects.execute({ id: parsedId });

    return response.status(204).json({});
  }

  public async findProjects(request: Request, response: Response): Promise<Response> {

    const projects = new ProjectsRepository();

    const projects_registers = await projects.findAllRegisters();

    return response.json({
      projects_registers
    });
  }


}
