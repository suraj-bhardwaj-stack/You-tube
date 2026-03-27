import { useSelector } from "react-redux"
import useVideos from "./hooks/useVideos"
import VideoCard, { AdvideoCard } from "./VideoCard"
import { Link } from "react-router-dom"
const VideoContainer = () => {
   useVideos()
   const useVidoeData = useSelector(store => store.video.topVideos)
  if (!useVidoeData || useVidoeData.length === 0) {
    return <h1>Loading...</h1>;
    }

    
   
//    const { id, snippet , statistics} = useVidoeData
 
  
   
   


    return(
        <div className="video-container-wrapper mx-2 my-4 flex gap-0 flex-wrap justify-between">
            <div className="basis-[20%]">
                {useVidoeData && <AdvideoCard info={useVidoeData[0]}/>}
            </div>
            {
                useVidoeData.slice(1).map((videos) => <Link className="basis-[20%]"  key={videos.id} to={"/watch?v="+videos.id}><VideoCard  info={videos}/></Link>)
            }
        </div>
    )
}

export default VideoContainer