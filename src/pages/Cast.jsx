import React from 'react'
import useFetch from '../hooks/useFetch'
import { useParams } from 'react-router-dom'

const Cast = (data,loading) => {
    const { mediaType, id } = useParams();

    const {data:cast , loading:castloading}= useFetch(`/${mediaType}/${id}/credits`)

  return (
    <div className='p-3 mt-3'>
        <div className='text-white text-lg flex flex-col gap-3'>
            <div> Cast</div>
            <div className='flex gap-3 justify-around'>
                {cast?.cast?.map((item) => (
                    <div className='flex flex-col gap-2'>
                        <div className='rounded-[50%] h-[5rem] w-[5rem] border border-red-800'>

                        <img src={`https://image.tmdb.org/t/p/original${item?.profile_path}`} alt="" className='h-full w-full rounded-[50%] object-fit' />
                        </div>
                        <span className='text-sm'>{item?.name}</span>
                        <span className='text-xs text-slate-400'>{item?.character}</span>
                    </div>
                ))}
</div>
        </div>


    </div>
  )
}

export default Cast