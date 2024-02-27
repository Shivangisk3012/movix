import React from 'react'
import {IoCloseCircleOutline} from 'react-icons/io5'
import ReactPlayer from 'react-player/youtube'


const VideoPop = ({setShow, videoId, setVideoId}) => {
    const hidepopup = () => {
        console.log("clicked")
        setShow(false)
        setVideoId(null)
    }
  return (
    <div className={ `z-4 h-72 w-60 fixed top-0 left-0 `}>
     <IoCloseCircleOutline onClick={hidepopup}/>
     <ReactPlayer
        url={`https://www.youtube.com/watch?v=${videoId}`}
        width="100%"
        height="100%"
        controls={true}
        // playing={true}
        className="react-player"
        />
    </div>
  )
}

export default VideoPop