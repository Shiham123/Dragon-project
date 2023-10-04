import { Link, useLoaderData, useParams } from 'react-router-dom';
import Header from '../components/header';
import Navbar from '../components/navbar';
import RightSideNav from '../components/rightNav';

import { AiOutlineArrowLeft } from 'react-icons/ai';
import Footer from '../components/footer';

const Details = () => {
  const { id } = useParams();
  const loader = useLoaderData();

  const findData = loader.find((data) => data._id === id);

  const { image_url, title, details } = findData;

  return (
    <>
      <Header />
      <Navbar />
      <div className="grid lg:grid-cols-4">
        <div className="col-span-3">
          {findData && (
            <div>
              <img src={image_url} alt="" className="object-contain px-8" />
              <h1 className="text-[25px] leading-[46px] text-black font-bold py-8">
                {title}
              </h1>
              <p className="text-[16px] leading-[26px] text-gray font-normal">
                {details}
              </p>
            </div>
          )}
          <Link to="/">
            <button className="bg-[#D72050] text-white py-2 px-4 my-4 text-[20px] leading-[30px] font-medium flex justify-center items-center gap-6">
              <AiOutlineArrowLeft />
              <span>All news in this category</span>
            </button>
          </Link>
          <Footer />
        </div>
        <RightSideNav />
      </div>
    </>
  );
};

export default Details;
