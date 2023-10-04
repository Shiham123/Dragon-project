import { Link, useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../components/navbar';

import { Card, Input, Button, Typography } from '@material-tailwind/react';
import { useContext } from 'react';
import { AppContext } from '../context/useContext';

const LoginPage = () => {
  const context = useContext(AppContext);
  const location = useLocation();
  const navigate = useNavigate();

  const { logInEmailPassword } = context;

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const emailValue = formData.get('email');
    const passwordValue = formData.get('password');

    logInEmailPassword(emailValue, passwordValue)
      .then((result) => {
        console.log(result);
        navigate(location?.state ? location.state : '/');
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center my-8">
        <Card color="transparent" shadow={false}>
          <Typography
            variant="h4"
            color="blue-gray"
            className="m-auto text-center"
          >
            Login your account
          </Typography>

          <form
            className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
            onSubmit={handleSubmit}
          >
            <div className="mb-4 flex flex-col gap-6">
              <label htmlFor="email">Email</label>
              <Input size="lg" name="email" />
              <label htmlFor="password">Password</label>
              <Input type="password" size="lg" name="password" />
            </div>

            <Button
              className="mt-6 text-white bg-black"
              fullWidth
              type="submit"
            >
              Login
            </Button>
            <Typography color="gray" className="mt-4 text-center font-normal">
              not have a account
              <Link to="/register" className="font-medium text-gray-900">
                Register
              </Link>
            </Typography>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default LoginPage;
