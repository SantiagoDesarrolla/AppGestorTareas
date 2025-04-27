import express from 'express';
import {
  getTasks,
  createTask,
  updateTask,
  deleteTask
} from '../controllers/task.controller.js';

const router = express.Router();

// RF05: Listar tareas
router.get('/', getTasks);

// RF04: Crear tarea
router.post('/', createTask);

// RF06 + RF07: Actualizar tarea (título o estado)
router.patch('/:id', updateTask);

// RF06: Eliminar tarea
router.delete('/:id', deleteTask);

export default router;