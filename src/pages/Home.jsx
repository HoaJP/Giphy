import React from "react";
import { GifState } from "../context/GifContext";
import { useEffect } from "react";
import Gif from "../components/Gif";
import FilterGif from "../components/FilterGif";

const Home = () => {
  const { gf, gifs, setGifs, filter } = GifState();
  const fetchTrendingGIFs = async () => {
    const { data } = await gf.trending({
      limit: 20,
      type: filter,
      rating: "g",
    });
    // console.log(data);
    
    setGifs(data);
  };
  useEffect(() => {
    fetchTrendingGIFs();
  }, [filter]);

  return (
    <div className="">
      <img
        src="/banner.gif"
        alt="earth banner"
        className="mt-2 rounded w-full"
      />
      <FilterGif showTrending/>

      <div className="columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-2">
        {gifs.map((gif)=>{
          return <Gif gif={gif} key={gif?.id}/>
        })}
      </div>
    </div>    
  );
};

export default Home;
