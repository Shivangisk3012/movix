import React from 'react'
import SwitchTab from './SwitchTab'
import Carousel from '../components/Carousel'
import { useState } from 'react'
import useFetch from '../hooks/useFetch'


const TopRated = () => {
const [endpoint, setEndpoint] = useState('movie') ;


const {data,loading} = useFetch(`/${endpoint}/top_rated`) 
console.log("data"+data);


    const onTabChanges = (tab) => {
        console.log("tab"+tab)
        setEndpoint(
            tab === "Movie" ? "movie" : "tv") 
      }
  return (
    <div className=' '>
        <div className=' border border-orange-950  flex justify-between items-center p-2'>

        <span className='text-2xl font-semibold text-white'>TopRated</span>

        <SwitchTab data={["Movie","TvShow"]}  onTabChanges={onTabChanges}  />
       
        </div>
        {data && <Carousel Carouseldata={data.results}  />}
        </div>
  )
}

export default TopRated