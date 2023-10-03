import { Link } from 'react-router-dom';
import Navbar from '../components/navbar';

import { Card, Input, Button, Typography } from '@material-tailwind/react';

const LoginPage = () => {
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

          <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
            <div className="mb-4 flex flex-col gap-6">
              <label htmlFor="email">Email</label>
              <Input size="lg" />
              <label htmlFor="password">Password</label>
              <Input type="password" size="lg" />
            </div>

            <Button className="mt-6 text-white bg-black" fullWidth>
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
