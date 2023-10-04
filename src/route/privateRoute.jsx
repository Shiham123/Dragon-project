import { useContext } from 'react';
import { AppContext } from '../context/useContext';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from '@material-tailwind/react';

const PrivateRoute = ({ children }) => {
  const context = useContext(AppContext);
  const location = useLocation();

  const { user, loading } = context;
  const routeLocation = location.pathname;

  if (loading) {
    return <Spinner />;
  }

  if (user) {
    return children;
  }

  return <Navigate state={routeLocation} to="/login"></Navigate>;
};

export default PrivateRoute;
