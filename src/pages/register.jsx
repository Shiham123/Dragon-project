import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Button,
} from '@material-tailwind/react';

import swal from 'sweetalert';

import Navbar from '../components/navbar';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from '../context/useContext';

const Register = () => {
  const context = useContext(AppContext);
  const { signInEmailPassword, emailVerification } = context;

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const emailValue = formData.get('email');
    const passwordValue = formData.get('password');

    signInEmailPassword(emailValue, passwordValue)
      .then((result) => {
        console.log(result);
        swal({
          text: 'check your email!',
          icon: 'success',
        });
        emailVerification()
          .then((result) => console.log(result))
          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center pt-8">
        <form onSubmit={handleSubmit}>
          <Card className="w-96">
            <CardHeader
              variant="gradient"
              color="gray"
              className="mb-4 grid h-28 place-items-center"
            >
              <Typography variant="h3" className="text-black">
                Register
              </Typography>
            </CardHeader>
            <CardBody className="flex flex-col gap-4">
              <Input label="Email" name="email" size="lg" />
              <Input label="Password" size="lg" name="password" />
            </CardBody>
            <CardFooter className="pt-0">
              <Button
                variant="gradient"
                fullWidth
                className="text-black"
                type="submit"
              >
                Sign In
              </Button>
              <Typography variant="small" className="mt-6 flex justify-center">
                Already have an account
                <Typography
                  as="a"
                  href="#signup"
                  variant="small"
                  color="blue-gray"
                  className="ml-1 font-bold"
                >
                  <Link to="/login">Login</Link>
                </Typography>
              </Typography>
            </CardFooter>
          </Card>
        </form>
      </div>
    </div>
  );
};

export default Register;
