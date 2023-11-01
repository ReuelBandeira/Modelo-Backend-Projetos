
import { Router } from 'express';
import ProjectsController from '../controllers/ProjectsController';

const ProjectsRouter = Router();

const projectsController = new ProjectsController();

ProjectsRouter.post('/', projectsController.create);
ProjectsRouter.get('/', projectsController.index);
ProjectsRouter.get('/search', projectsController.show);
ProjectsRouter.put('/:id', projectsController.update);
ProjectsRouter.delete('/:id', projectsController.delete);
ProjectsRouter.get('/find/registers', projectsController.findProjects);


export default ProjectsRouter;
