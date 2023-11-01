
import { Router } from 'express';
import EmployeesController from '../controllers/EmployeesController';


const EmployeesRouter = Router();

const employeesController = new EmployeesController();

EmployeesRouter.post('/', employeesController.create);
EmployeesRouter.get('/', employeesController.index);
EmployeesRouter.get('/search', employeesController.show);
EmployeesRouter.put('/:id', employeesController.update);
EmployeesRouter.delete('/:id', employeesController.delete);
EmployeesRouter.get('/find/registers', employeesController.findEmployees);


export default EmployeesRouter;
