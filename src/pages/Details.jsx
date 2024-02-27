import React from 'react'
import Detailsbanner from './Detailsbanner'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch';
import Cast from './Cast';
import Similar from './Similar';
import VideoSection from './VideoSection';
import Recommendation from './Recommendation';

const Details = () => {
  const { mediaType, id } = useParams();
  const {data , loading}= useFetch(`/${mediaType}/${id}/videos`)
  const {data:credit , loading:creditloading}= useFetch(`/${mediaType}/${id}/credits`)




  return (
    <div>
      <Detailsbanner video ={data?.results?.[0]} crew={credit?.crew}/>
      <Cast data={credit?.cast} loading={creditloading}/>
      <VideoSection data={data} loading={loading} />
       
      <Similar mediaType={mediaType}  id={id}/>
      <Recommendation mediaType={mediaType} id={id}/>

      
    </div>
  )
}

export default Details