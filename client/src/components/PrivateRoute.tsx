import { useAuth } from '../auth/AuthContext';
import { Navigate } from 'react-router-dom';

interface PrivateRouteProps {
  element: React.ReactElement;
}

export const PrivateRoute = ({ element }: PrivateRouteProps) => {
  const { token } = useAuth();
  return token ? element : <Navigate to="/" replace />;
};