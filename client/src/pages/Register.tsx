import { useState } from 'react';
import { Link } from 'react-router-dom';

export const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md animate-fadeIn">
        <h1 className="text-3xl font-bold text-center text-yellow-500 mb-6">Registro</h1>
        <form>
          <input
            type="email"
            placeholder="Correo electrónico"
            className="w-full p-3 mb-4 border rounded-lg focus:ring-2 focus:ring-yellow-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Contraseña"
            className="w-full p-3 mb-6 border rounded-lg focus:ring-2 focus:ring-yellow-400"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="btn-primary w-full mb-4">
            Registrarse
          </button>
          <Link to="/" className="block text-center text-yellow-500 hover:underline">
            ¿Ya tienes cuenta? Inicia sesión
          </Link>
        </form>
      </div>
    </div>
  );
};