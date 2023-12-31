import { useEffect, useState } from 'react';
import BreakingNews from '../components/breaking';
import Header from '../components/header';
import LeftSideNav from '../components/leftSide';
import Navbar from '../components/navbar';
import RightSideNav from '../components/rightNav';

import { AiFillEye } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';

const Home = () => {
  const [originalNewsData, setOriginalNewsData] = useState([]);
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    fetch('/news.json')
      .then((response) => response.json())
      .then((data) => {
        setOriginalNewsData(data);
        setNewsData(data);
      })
      .catch((error) => console.log(error));
  }, []);

  const categoryId = (id) => {
    const filterData = originalNewsData.filter(
      (data) => data.category_id === id
    );
    setNewsData(filterData);
    swal({
      text: `Filter category based on id ${id}`,
      icon: 'success',
    });
  };

  return (
    <div>
      <Header />
      <BreakingNews />
      <Navbar />
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div>
          <LeftSideNav categoryId={categoryId} />
        </div>
        <div className="lg:col-span-2">
          <h2 className="text-[20px] font-bold leading-[30px] text-black">
            Dragon news home
          </h2>
          {newsData &&
            newsData.map((data) => {
              const { title, _id, image_url, details, total_view } = data;
              return (
                <div
                  key={_id}
                  className="border border-blue-gray-200 my-4 rounded-lg p-4"
                >
                  <h1 className="text-[20px] font-bold leading-[25px] text-black">
                    {title}
                  </h1>
                  <img src={image_url} alt="" />

                  {details.length > 200 ? (
                    <p className="text-[16px] font-normal leading-[36px] text-gray">
                      {details.slice(0, 200)}
                      <Link to={`/details/${_id}`}>
                        <span className="text-green-500 uppercase font-semibold cursor-pointer px-2">
                          Read more
                        </span>
                      </Link>
                    </p>
                  ) : (
                    <p className="text-[16px] font-normal leading-[36px] text-gray">
                      {details}
                    </p>
                  )}

                  <br />
                  <hr className="opacity-20" />
                  <div className="flex justify-between my-4">
                    <div className="rating">
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                        checked
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                    </div>
                    <div className="flex gap-2 items-center">
                      <AiFillEye className="text-gray" />
                      <span className="text-[16px] font-medium leading-[26px] text-gray">
                        {total_view}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
        <div>
          <RightSideNav />
        </div>
      </div>
    </div>
  );
};

export default Home;
