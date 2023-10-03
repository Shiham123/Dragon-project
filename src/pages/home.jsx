import BreakingNews from '../components/breaking';
import Header from '../components/header';
import LeftSideNav from '../components/leftSide';
import Navbar from '../components/navbar';
import RightSideNav from '../components/rightNav';

const Home = () => {
  return (
    <div>
      <Header />
      <BreakingNews />
      <Navbar />
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div>
          <LeftSideNav />
        </div>
        <div className="lg:col-span-2">
          <h2 className="text-4xl">News coming soon...</h2>
        </div>
        <div>
          <RightSideNav />
        </div>
      </div>
    </div>
  );
};

export default Home;
