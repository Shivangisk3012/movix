import React from 'react'
import SwitchTab from './SwitchTab'
import Carousel from '../components/Carousel'
import { useState } from 'react'
import useFetch from '../hooks/useFetch'


const Trending = () => {
const [endpoint, setEndpoint] = useState('day') ;


const {data,loading} = useFetch(`/trending/all/${endpoint}`) 
console.log("data"+data);


    const onTabChanges = (tab) => {
        console.log("tab"+tab)
        setEndpoint(
            tab === "Day" ? "day" : "week") 
      }
  return (
    <div className=' '>
        <div className=' border border-orange-950  flex justify-between items-center p-2'>

        <span className='text-2xl font-semibold text-white'>Trending</span>

        <SwitchTab data={["Day","Week"]}  onTabChanges={onTabChanges}  />
       
        </div>
        {data && <Carousel Carouseldata={data.results}  />}
        </div>
  )
}

export default Trending