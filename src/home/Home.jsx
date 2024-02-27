import React from 'react'
import HomeBanner from './HomeBanner'
import Trending from './Trending'
import Popular from './Popular'
import TopRated from './TopRated'

const Home = () => {
  return (
    <>
    <HomeBanner />
   {/* <div style={{height:1000}}>

   </div> */}
   <Trending />
   <Popular />
   <TopRated />
    </>
  )
}

export default Home