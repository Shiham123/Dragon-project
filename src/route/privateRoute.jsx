import { useContext } from 'react';
import { AppContext } from '../context/useContext';
import { Navigate } from 'react-router-dom';
import { Spinner } from '@material-tailwind/react';

const PrivateRoute = ({ children }) => {
  const context = useContext(AppContext);
  const { user, loading } = context;

  if (loading) {
    return <Spinner />;
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login"></Navigate>;
};

export default PrivateRoute;
