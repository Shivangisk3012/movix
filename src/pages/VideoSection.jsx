import React from 'react'

const VideoSection = ({data, loading}) => {
  return (
    <div>
         <div  className='mt-2 flex flex-col gap-2'>
            <div className='text-xl font-bold text-white ' > Offical Videos</div>
            <div className='flex gap-2'>

            {data?.results?.map((video) => (
                <div key={video.id} className=''>
                    <img src={`https://img.youtube.com/vi/${video.key}/mqdefault.jpg`} alt={video.id} />
                </div>
                ))
                
            }
            </div>
            </div>
    </div>
  )
}

export default VideoSection