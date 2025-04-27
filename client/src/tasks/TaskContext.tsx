import { createContext, useContext, useState, ReactNode } from 'react';
import { fetchTasks, createTask, updateTask, deleteTask } from '../services/task.service';

interface Task {
  _id: string;
  title: string;
  completed: boolean;
  user: string;
}

interface TaskContextType {
  tasks: Task[];
  addTask: (title: string) => Promise<void>;
  toggleTask: (id: string) => Promise<void>;
  deleteTask: (id: string) => Promise<void>;
  loadTasks: () => Promise<void>;
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const TaskProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const loadTasks = async () => {
    const tasks = await fetchTasks();
    setTasks(tasks);
  };

  const addTask = async (title: string) => {
    const newTask = await createTask(title);
    setTasks([...tasks, newTask]);
  };

  const toggleTask = async (id: string) => {
    const updatedTask = await updateTask(id, { completed: !tasks.find(t => t._id === id)?.completed });
    setTasks(tasks.map(task => task._id === id ? updatedTask : task));
  };

  const deleteTask = async (id: string) => {
    await deleteTask(id);
    setTasks(tasks.filter(task => task._id !== id));
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, toggleTask, deleteTask, loadTasks }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) throw new Error('useTasks debe usarse dentro de TaskProvider');
  return context;
};

