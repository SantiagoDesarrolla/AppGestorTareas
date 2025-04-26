import { useState } from 'react';
import { useTasks } from './TaskContext';

export const TaskForm = () => {
  const [title, setTitle] = useState('');
  const { addTask } = useTasks();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      addTask(title);
      setTitle('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Nueva tarea..."
          className="flex-1 p-3 border rounded-lg focus:ring-2 focus:ring-yellow-400"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit" className="btn-primary">
          Agregar
        </button>
      </div>
    </form>
  );
};