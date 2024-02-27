import React, { useEffect, useState } from 'react';
import { HiOutlineSearch } from 'react-icons/hi';
import { VscChromeClose } from 'react-icons/vsc';
import { SlMenu } from 'react-icons/sl';
import { useNavigate } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';

const Header = () => {
  const [show, setShow] = useState("bg-[#04152d] backdrop-filter backdrop-blur-lg bg-opacity-70");
  const [lastScrollY, setlastScrollY] = useState(0);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const navigate = useNavigate();
  // const location = useLocation();

  // useEffect(() => {
  //   winsow.scrollTo(0, 0)
  // }
  //   , [location])
  const controlNavbar = () => {
    console.log('window.scrollY:', window.scrollY);
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrollY) {
        console.log(window.scrollY);
        console.log(lastScrollY);
        setShow("transform -translate-y-16 transition duration-200 ease-in-out")
      }
      else {
        setShow("bg-[#04152d]")
      }
      setlastScrollY(window.scrollY)
    }

  }

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
  }, [lastScrollY])

  const openSearch = () => {
    setMobileMenu(false);

    setShowSearch(true);
  }

  const openMobileMenu = () => {
    console.log('clicked');

    setMobileMenu(true);

    console.log('clicked');

    console.log('mobileMenu:', mobileMenu);

  };

  const navigtionHandler = (event) => {
    if (event === "movies") {
      console.log('movies clicked')
      navigate('/explore/movies')
    }
    else if (event === "tv") {
      console.log('tv clicked')
      navigate('/explore/tv')
    }
    setMobileMenu(false)
  }
  return (
    <header className='z-[3] text-white fixed w-full '>

      <div className={`flex justify-between items-center h-12  w-full pt-2 pl-2 pr-2 bg-[#04152d]
       ${mobileMenu ? 'bg-[#04152d] h-32   w-full' : ' '} ${show}`}
      >
        <div className=''>
          <img src='/movix-logo.svg' alt='logo' className='w-24 h-24 ' />

        </div>


        <div className='flex gap-3 cursor-pointer '>


          {
            mobileMenu ? (

              <div className='flex flex-col  justify-start cursor-pointer'>
                <span className='text-sm font-semibold hover:text-red-900' onClick={() => {
                  navigtionHandler("movies")
                }}>Movies</span>
                <span className='text-sm font-semibold hover:text-red-900' onClick={() => {
                  navigtionHandler("tv")
                }}>TV Shows</span>
              </div>
            ) : (
              <div className='flex gap-2'>
                <span className='text-sm '>Movies</span>
                <span className='text-sm '>TV Shows</span>
              </div>
            )}




          <HiOutlineSearch onClick={openSearch} />

          {mobileMenu ? (
            <VscChromeClose onClick={() => {
              console.log('clicked')
              setMobileMenu(false)
            }} />
          ) : (
            <SlMenu onClick={openMobileMenu} />

          )}

        </div>

      </div>
      {
        showSearch &&

        <div className='flex border border-red-950 '>
          <input
            type='text'
            placeholder='Search for a movie, TV show, person...'
            className=' w-full p-6 border-none outline-none '

          />
          <VscChromeClose onClick={() => {

            setShowSearch(false)
          }} />
        </div>
      }
    </header>
  );
};

export default Header;





