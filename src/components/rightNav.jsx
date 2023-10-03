import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaTwitter,
} from 'react-icons/fa';

import qZoneOne from '../assets/qZone1.png';
import qZoneTwo from '../assets/qZone2.png';
import qZoneThree from '../assets/qZone3.png';

import { useContext } from 'react';
import { AppContext } from '../context/useContext';

const RightSideNav = () => {
  const context = useContext(AppContext);
  const { googleSignIn, githubSignIn } = context;

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };

  const handleGithubSignIn = () => {
    githubSignIn()
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <div className="space-y-4 mb-6">
        <h2 className="text-2xl">Login with</h2>
        <button className="btn btn-outline px-10" onClick={handleGoogleSignIn}>
          <FaGoogle />
          Login with google
        </button>
        <button className="btn btn-outline px-10" onClick={handleGithubSignIn}>
          <FaGithub />
          Login with github
        </button>
      </div>
      <div className="p-4 space-y-4">
        <h2 className="text-3xl">Find us on</h2>
        <a
          href=""
          className="p-4 flex text-lg items-center border rounded-t-lg"
        >
          <FaFacebook className="mr-3" />
          <span>Faceboook</span>
        </a>
        <a href="" className="p-4 flex text-lg items-center border">
          <FaInstagram className="mr-3" />
          <span>Instagram</span>
        </a>
        <a
          href=""
          className="p-4 flex text-lg items-center border rounded-b-lg"
        >
          <FaTwitter className="mr-3" />
          <span>Twitter</span>
        </a>
      </div>
      {/* Q zone */}
      <div className="p-4 space-y-4 mb-6">
        <h2 className="text-3xl">Q Zone</h2>
        <img src={qZoneOne} alt="" />
        <img src={qZoneTwo} alt="" />
        <img src={qZoneThree} alt="" />
      </div>
    </div>
  );
};

export default RightSideNav;
