import React, { useState } from 'react';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';
import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';


const Carousel = ({ Carouseldata }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

const navigate = useNavigate();
  const scrollRef = React.createRef();

  const handleScroll = () => {
    const container = scrollRef.current;
    if (container) {
      const scrollLeft = container.scrollLeft;
      setScrollPosition(scrollLeft);

      // Check if left arrow should be shown
      if (scrollLeft > 0) {
        setShowLeftArrow(true);
      } else {
        setShowLeftArrow(false);
      }

      // Check if right arrow should be shown
      if (container.scrollWidth - container.clientWidth === scrollLeft) {
        setShowRightArrow(false);
      } else {
        setShowRightArrow(true);
      }
    }
  };

  const scrollLeft = () => {
    const container = scrollRef.current;
    if (container) {
      container.scrollTo({
        left: scrollPosition - 300, // Adjust the scroll amount as needed
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    const container = scrollRef.current;
    if (container) {
      container.scrollTo({
        left: scrollPosition + 300, // Adjust the scroll amount as needed
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="text-white m-3 flex gap-2 w-full ml-4 mr-6">
      <div className="flex gap-2 relative w-full">
        {showLeftArrow && (
          <BsFillArrowLeftCircleFill
            className="cursor-pointer  absolute left-0 top-14 h-20 w-10"
            onClick={scrollLeft}
          />
        )}
        <div
          className="flex gap-3 items-center overflow-x-scroll w-full scrollbar-hide"
          onScroll={handleScroll}
          ref={scrollRef}
        >
          {Carouseldata &&
            Carouseldata.map((item, index) => {
              return (
                <div key={item.id} className=' flex flex-col gap-3'>
                  <div className="flex gap-3 w-48 ">
                    <img
                      src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                      alt=""
                      className="h-56 w-60 cursor-pointer" onClick={() => { navigate(`/${item.media_type}/${item.id}`) }}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="text-sm font-semibold">{item.title || item.name }</span>
                    <span className="text-sm text-slate-500">{dayjs(item.release_date).format("MMM D, YYYY")}</span>
                    </div>
                </div>
              );
            })}
        </div>
        {showRightArrow && (
          <BsFillArrowRightCircleFill
            className="cursor-pointer absolute right-0 top-14 h-20 w-10"
            onClick={scrollRight}
          />
        )}
      </div>
    </div>
  );
};

export default Carousel;
