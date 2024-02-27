import React from 'react'
import useFetch from '../hooks/useFetch'
import Carousel from '../components/Carousel' 

const Similar = ({mediaType, id}) => {
  const {data, loading}= useFetch(`/${mediaType}/${id}/similar`)
  const title = mediaType === 'movie' ? 'Similar Movies' : 'Similar Shows'
  return (
    <div>

      <span className="text-white text-xl font-bold ml-4">{title}</span>
      {data && <Carousel Carouseldata={data.results}  />}
      
 </div>
  )
}

export default Similar