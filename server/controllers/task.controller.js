import Task from '../models/Task.js';

// Obtener todas las tareas del usuario (RF05)
export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ user: req.user.id }).sort({ createdAt: -1 });
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ 
      error: 'Error al obtener tareas',
      details: process.env.NODE_ENV === 'development' ? err.message : undefined
    });
  }
};

// Crear nueva tarea (RF04)
export const createTask = async (req, res) => {
  try {
    const task = new Task({
      title: req.body.title,
      user: req.user.id
    });
    await task.save();
    res.status(201).json(task);
  } catch (err) {
    res.status(400).json({ 
      error: 'Error al crear tarea',
      details: err.message 
    });
  }
};

// Actualización flexible (RF06 + RF07)
export const updateTask = async (req, res) => {
  try {
    const { title, completed } = req.body;
    const task = await Task.findOneAndUpdate(
      { _id: req.params.id, user: req.user.id },
      { title, completed },
      { new: true, runValidators: true }
    );

    if (!task) {
      return res.status(404).json({ error: 'Tarea no encontrada' });
    }

    res.json(task);
  } catch (err) {
    res.status(400).json({ 
      error: 'Error al actualizar tarea',
      details: err.message 
    });
  }
};

// Eliminar tarea (RF06)
export const deleteTask = async (req, res) => {
  try {
    const task = await Task.findOneAndDelete({
      _id: req.params.id,
      user: req.user.id
    });

    if (!task) {
      return res.status(404).json({ error: 'Tarea no encontrada' });
    }

    res.json({ 
      message: 'Tarea eliminada',
      deletedTask: { _id: task._id, title: task.title }
    });
  } catch (err) {
    res.status(500).json({ 
      error: 'Error al eliminar tarea',
      details: process.env.NODE_ENV === 'development' ? err.message : undefined
    });
  }
};