import React from 'react'
import './videoplayer.css'
import video  from  "../../image/video.mp4"

export default function Videoplayr({playstate, setplaystate}) {
  return (
    <div className={`video-player ${playstate?'' :'hide'}` }>
        <video src={video} autoPlay muted controls></video>
    </div>
  )
}
