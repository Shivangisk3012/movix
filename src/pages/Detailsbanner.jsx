import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch';
import dayjs from 'dayjs';
import { AiOutlinePlayCircle } from 'react-icons/ai'
import VideoPop from './VideoPop';


const Detailsbanner = ({ videos, crew }) => {

  const { mediaType, id } = useParams();
  const { data, loading } = useFetch(`/${mediaType}/${id}`)
  console.log(data)
  const [show, setShow] = React.useState(false);
  
  const [videoId, setVideoId] = React.useState(null);
  console.log(show, videoId)
  const director = crew?.filter((item) => item.job === "Director")
  const writer = crew?.filter((item) => item.job === "screenplay" || item.job === "Writer" || item.job === "Story")
  return (

    <div className='text-white  border border-red-950  w-full h-full p-16 flex flex-col xl:flex-row xl:gap-10'>
      <div className=' xl:w-1/3 h-96'>

        <img src={`https://image.tmdb.org/t/p/original${data?.backdrop_path}`} alt="" className=' h-96 rounded-md ' />
      </div>
      <div className='flex flex-col gap-3 w-1/2'>

        <div className='mt-3 space-x-2 p-3'>
          <span className='text-xl font-serif'>{data?.title || data?.name}</span>
          <span>({dayjs(data?.release_date).format(" YYYY")})</span>
        </div>
        <div className=' text-gray-400 text-sm'>
          <span>{data?.tagline}</span>
        </div>
        <div className='flex justify-start items-center gap-3 on'>

          <AiOutlinePlayCircle className='text-4xl text-red-950 cursor-pointer' onClick={() => {
            console.log('clicked+++++')
            setShow(true)
            setVideoId(videos?.results[0]?.key)
          }} />
          
          {show && <VideoPop

            setShow={setShow}
            videoId={videoId}
            setVideoId={setVideoId} />

          }
          <span className='text-sm'>Play Trailer</span>
        </div>
        <div className='mt-3 flex flex-col gap-2'>
          <span className='text-lg'>Overview</span>
          <span className='justify-items-center text-sm whitespace-normal'>{data?.overview}</span>
        </div>
        <div className=' flex gap-3 border-b-gray-300-[0.1px] '>

          <span className='text-sm'>Status :</span>
          <span className='text-sm text-gray-400'>{data?.status}</span>
          <span className='text-sm'>ReleaseDate :</span>
          <span className='text-sm text-gray-400'>{dayjs(data?.release_date).format("MMM D, YYYY")}</span>
          <span className='text-sm'>Runtime : </span>
          <span className='text-sm text-gray-400'>{data?.runtime} mins</span>


        </div>
        {director?.length > 0 && (

          <div >
            <span className='text-lg'>Director :{"  "}</span>
            <span className='text-sm'>

              {director?.map((d, index) => (
                <span key={index} >{d.name}{director.length - 1 !== index && ", "}</span>

              ))}
            </span>

          </div>
        )}
        {writer?.length > 0 && (

          <div >
            <span className='text-lg'>Writer :{"  "}</span>
            <span className='text-sm'>

              {writer?.map((w, index) => (
                <span key={index} >{w.name}{writer.length - 1 !== index && ", "}</span>

              ))}
            </span>

          </div>
        )}

        {data?.created_by?.length > 0 && (

          <div >
            <span className='text-lg'>Creator :{"  "}</span>
            <span className='text-sm'>

              {data?.created_by?.map((w, index) => (
                <span key={index} >{w.name}{data?.created_by.length - 1 !== index && ", "}</span>

              ))}
            </span>

          </div>
        )}


      </div>
      {/* <VideoPop show={show} 
                 setShow={setShow} 
                 videoId={videoId}
                 setVideoId={setVideoId}/> */}

    </div>
  )
}

export default Detailsbanner