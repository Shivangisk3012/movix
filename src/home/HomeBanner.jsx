import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import useFetch from '../hooks/useFetch'


// import '../../src/components/ContentWrapper.jsx'
// import '../../src/components/Img.jsx'

const HomeBanner = () => {
  const [query, setQuery] = useState('')
  const [backgroundImage, setBackgroundImage] = useState('')

  const navigate = useNavigate();
  const { data, loading } = useFetch("/movie/upcoming")
  console.log("data in homebanner" + data);


  // in place of useFetch hook we can use below code
  // console.log("url" + url);
  //   const [data, setData] = useState(null);
  //   const [loading, setLoading] = useState(true);
  //   const [error, setError] = useState(null);

  //   useEffect(() => {
  //       setLoading(true);
  //       setError(null);

  //       fetchDataFromApi(url)
  //           .then((res) => {
  //               console.log("res" + res);
  //               setLoading(false);
  //               setData(res);
  //           })
  //           .catch((err) => {
  //               setLoading(false);
  //               setError("Something went wrong!");
  //           });
  //   }, [url]);

  console.log("data in homebanner" + data);


  useEffect(() => {
    let bg = `https://image.tmdb.org/t/p/original${data?.results[Math.floor(Math.random() * 19)]?.backdrop_path}`
    setBackgroundImage(bg);
  }, [data])

  const searchQueryHandler = (event) => {
    if (event.key === "Enter" && query.length > 0) {
      navigate('/search/${query}')

    }
  }
  return (
    <div className='relative text-center text-white h-full before:absolute 
     before:left-0 before:w-full before:bottom-0 before:h-[100%]  before:bg-gradient-to-b from-transparent from-30% via-[#04152d] 
     to-[#04152d] before:opacity-90  before:z-[1] '>
      {/* Background Image */}
      <div className='absolute top-0 left-0 w-full h-full '>
        <img src={backgroundImage} className='w-full h-full  -z-10' alt="Background" />
      </div>

      {/* Linear Gradient Below Image */}
      {/* <div className=' before:absolute before:bottom-[-70px] before:left-0 before:w-full before:h-[50%] before:bg-gradient-to-b from-transparent via-transparent
    to-[#04152d] before:blur-lg before:opacity-80 before:z-1'>
      </div> */}

      {/* Content */}
      <div className='flex flex-col justify-center items-center gap-3 relative pt-24 w-full z-[2]'>
        <span className='text-5xl font-semibold text-opacity-70'>Welcome.</span>
        <span className='text-lg text-opacity-70 '>
          Millions of movies, TV shows, and people to discover.
          <br /> Explore now.
        </span>
        <div className='mt-6 w-full'>
          <input
            type='text'
            placeholder='Search for a movie, TV show, person...'
            className='md:w-[50%] rounded-r-lg md:rounded-l-full w-[70%] rounded-full p-[20px] 
            border-none outline-none'
            onKeyUp={searchQueryHandler}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className='w-[20%] bg-gradient-to-r from-[#da2f68] to-[#f89e00]
           p-[21px] pl-2 rounded-l-lg rounded-r-full md:w-[10%] border-none outline-none'>
            Search
          </button>
        </div>
      </div>
    </div>

  )
}
export default HomeBanner