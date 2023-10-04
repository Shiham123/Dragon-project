import Header from '../components/header';
import Navbar from '../components/navbar';
import RightSideNav from '../components/rightNav';

const Details = () => {
  return (
    <>
      <Header />
      <Navbar />
      <div className="grid lg:grid-cols-3">
        <div className="col-span-2">this is it</div>
        <RightSideNav />
      </div>
    </>
  );
};

export default Details;
