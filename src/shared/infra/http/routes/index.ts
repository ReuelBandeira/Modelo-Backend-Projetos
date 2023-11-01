import { Router } from 'express';



import employeeRouter from '@modules/employees/infra/http/routes/employees.routes';
import projectsRouter from '@modules/projects/infra/http/routes/projects.routes';

const routes = Router();


routes.use('/employee', employeeRouter);
routes.use('/projects', projectsRouter);

export default routes;
