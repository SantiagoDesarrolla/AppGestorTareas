import { useEffect } from 'react';
import { useAuth } from './auth/AuthContext';
import { fetchTasks } from './services/task.service';

function App() {
  const { token } = useAuth();

  useEffect(() => {
    if (token) {
      // Ejemplo: Cargar tareas al iniciar
      fetchTasks().then(tasks => console.log('Tareas:', tasks));
    }
  }, [token]);

  return (
    <div className="App">
      {/* Tus rutas y componentes aquí */}
    </div>
  );
}

export default App;