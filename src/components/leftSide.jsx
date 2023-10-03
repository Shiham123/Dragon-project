import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('/categories.json')
      .then((response) => response.json())
      .then((data) => setCategories(data));
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
    </div>
  );
};

export default LeftSideNav;
