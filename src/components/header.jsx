import Logo from '../assets/logo.png';
import moment from 'moment/moment';

const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center my-8">
      <img src={Logo} alt="" />
      <p className="my-4">Journalism without fear or favour</p>
      <p className="text-xl">{moment().format('dddd, MMMM D, YYYY')}</p>
    </div>
  );
};

export default Header;
