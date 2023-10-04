import { useLoaderData, useParams } from 'react-router-dom';
import Header from '../components/header';
import Navbar from '../components/navbar';
import RightSideNav from '../components/rightNav';

const Details = () => {
  const { id } = useParams();
  const loader = useLoaderData();

  const findData = loader.find((data) => data._id === id);

  return (
    <>
      <Header />
      <Navbar />
      <div className="grid lg:grid-cols-4">
        <div className="col-span-3">
          {findData ? (
            <div>
              <img src={findData.image_url} alt="" />
            </div>
          ) : (
            <p>Data not found</p>
          )}
        </div>
        <RightSideNav />
      </div>
    </>
  );
};

export default Details;
