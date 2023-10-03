import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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
      <h2 className="text-2xl">All Categories</h2>
      {categories.map((category) => {
        const { id, name } = category;
        return (
          <Link
            className="block ml-4 text-xl font-semibold"
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
              <p className="text-[16px] font-medium py-4">
                {matchCategory && <span>{matchCategory.name}</span>}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LeftSideNav;
