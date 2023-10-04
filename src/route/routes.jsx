import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layout/mainLayout';
import ErrorPage from '../pages/error';
import Home from '../pages/home';
import Career from '../pages/career';
import About from '../pages/about';
import LoginPage from '../pages/login';
import Register from '../pages/register';
import Details from '../pages/details';
import PrivateRoute from './privateRoute';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/career', element: <Career /> },
      { path: '/about', element: <About /> },
      { path: '/login', element: <LoginPage /> },
      { path: '/register', element: <Register /> },
      {
        path: '/details',
        element: (
          <PrivateRoute>
            <Details />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default routes;
