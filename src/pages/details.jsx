import { useLoaderData, useParams } from 'react-router-dom';
import Header from '../components/header';
import Navbar from '../components/navbar';
import RightSideNav from '../components/rightNav';

const Details = () => {
  const { id } = useParams();
  const loader = useLoaderData();

  return (
    <>
      <Header />
      <Navbar />
      <div className="grid lg:grid-cols-4">
        <div className="col-span-3">
          <h1>this is news details router</h1>
          <h1>{id}</h1>
        </div>
        <RightSideNav />
      </div>
    </>
  );
};

export default Details;
