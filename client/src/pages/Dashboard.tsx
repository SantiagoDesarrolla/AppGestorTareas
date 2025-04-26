import { TaskForm } from '../tasks/TaskForm';
import { TaskList } from '../tasks/TaskList';
import { useAuth } from '../auth/AuthContext';

export const Dashboard = () => {
  const { logout } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-yellow-500">Mis Tareas</h1>
          <button onClick={logout} className="btn-primary">
            Cerrar Sesión
          </button>
        </header>
        <TaskForm />
        <TaskList />
      </div>
    </div>
  );
};