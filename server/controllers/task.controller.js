import { Task } from '../models/Task';

export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ user: req.user.id });
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener tareas' });
  }
};

export const createTask = async (req, res) => {
  try {
    const task = new Task({
      title: req.body.title,
      user: req.user.id
    });
    await task.save();
    res.status(201).json(task);
  } catch (err) {
    res.status(400).json({ error: 'Error al crear tarea' });
  }
};