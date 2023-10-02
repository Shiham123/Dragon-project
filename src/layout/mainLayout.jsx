import { Outlet } from 'react-router-dom';
import Navbar from '../components/navbar';

const MainLayout = () => {
  return (
    <div className="max-w-6xl mx-auto font-poppins">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
