import React from 'react'
import Carousel from '../components/Carousel'
import useFetch from '../hooks/useFetch'

const Recommendation = ({mediaType,id}) => {
  const {data, loading}= useFetch(`/${mediaType}/${id}/recommendations`)
  const title = mediaType === 'movie' ? 'Recommended Movies' : 'Recommended Shows'
  return (
    <div>
     
      <span className="text-white text-xl font-bold ml-4">{title}</span>
      {data && <Carousel Carouseldata={data.results}  />}
    </div>
  )
}

export default Recommendation