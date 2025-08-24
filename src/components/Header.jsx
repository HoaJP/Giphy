import React, { useEffect } from "react";
import { useState } from "react";
import { HiEllipsisVertical, HiMiniBars3BottomRight } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { GifState } from "../context/GifContext";
import GifSearch from "./GifSearch";

const Header = () => {
  const [categories, setCategories] = useState([]);
  const [showCategories, setShowCategories] = useState(false);

  const { gf, filter, setFilter, favorites } = GifState();
  const fetchGifCategories = async () => {
    const { data } = await gf.categories();
    setCategories(data);
  };
  useEffect(() => {
    fetchGifCategories();
  }, []);
  return (
    <nav>
      <div className="fixed top-0 left-0 w-full z-50 bg-gray-950  shadow-md">
        <div className="relative flex gap-4 justify-between items-center mb-2 px-4">
          <Link to="/" className="flex gap-2">
            <img src="/logo.svg" className="w-8" alt="GIPHY LOGO" />
            <h1 className="text-5xl font-bold tracking-tight cursor-pointer">
              GIPHY
            </h1>
          </Link>
          {/* render categories */}
          <div className="font-bold text-md flex gap-2 items-center">
            {categories?.slice(0, 5)?.map((category) => {
              return (
                <Link
                  key={category.name}
                  to={`/${category.name_encoded}`}
                  className="px-4 py-1 border-b-4 hidden lg:block hover:bg-gradient-to-r hover:from-teal-600 hover:via-blue-600 hover:to-pink-600"
                >
                  {category.name}
                </Link>
              );
            })}
            <button onClick={() => setShowCategories(!showCategories)}>
              <HiEllipsisVertical
                size={35}
                className="py-0.5 border-b-4 hidden lg:block hover:bg-gradient-to-r hover:from-teal-600 hover:via-blue-600 hover:to-pink-600"
              />
            </button>
            {favorites.length > 0 && (
              <div className="h-9 bg-gray-700 pt-1.5 px-6 cursor-pointer rounded">
                <Link to="/favorites">Favorite GIFs</Link>
              </div>
            )}
            <button onClick={() => setShowCategories(!showCategories)}>
              <HiMiniBars3BottomRight
                className="text-sky-400 block lg:hidden"
                size={30}
              />
            </button>
          </div>
          {showCategories && (
            <div className="absolute right-0 top-14 px-10 pt-6 pb-9 w-full z-20 bg-gradient-to-r from-teal-600 via-blue-600 to-pink-600">
              <span className="text-3xl font-extrabold">Categories</span>
              <hr className="bg-gray-100 opacity-50 my-5" />
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                {categories?.map((category) => {
                  return (
                    <Link
                      key={category.name}
                      to={`/${category.name_encoded}`}
                      className="font-bold"
                      onClick={() => setShowCategories(!showCategories)}
                    >
                      {category.name}
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* search: không fixed */}
      <div className="pt-24">
        {/* thêm padding-top bằng đúng chiều cao header để tránh bị che */}
        <GifSearch />
      </div>
    </nav>
  );

};

export default Header;
