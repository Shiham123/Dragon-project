import moment from 'moment/moment';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BsCalendarEvent } from 'react-icons/bs';

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    fetch('/categories.json')
      .then((response) => response.json())
      .then((data) => setCategories(data));
  }, []);

  useEffect(() => {
    fetch('/news.json')
      .then((response) => response.json())
      .then((data) => setNewsData(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="space-y-4">
      <h2 className="text-[20x] text-black leading-[30px] font-bold">
        All Categories
      </h2>
      {categories.map((category) => {
        const { id, name } = category;
        return (
          <Link
            className="block ml-4 text-[20px] leading-[30px] font-medium text-grayOne"
            key={id}
            to={`/category/${id}`}
          >
            {name}
          </Link>
        );
      })}
      <div className="pt-12">
        {newsData.slice(0, 4).map((news) => {
          const { _id, title, category_id, image_url } = news;
          const matchCategory = categories.find(
            (category) => category.id == category_id
          );

          return (
            <div key={_id}>
              <h1 className="text-[20px] font-semibold text-black py-8">
                {title}
              </h1>
              <img src={image_url} alt="" />
              <div className="flex justify-between items-center">
                <p className="text-[16px] font-medium py-4">
                  {matchCategory && <span>{matchCategory.name}</span>}
                </p>
                <div className="flex justify-center items-center gap-1">
                  <BsCalendarEvent />
                  <p className="text-[16px] leading-26px font-medium text-grayOne">
                    {moment().format('MMM D, YYYY')}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LeftSideNav;
