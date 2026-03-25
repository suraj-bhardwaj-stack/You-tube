import { useSelector } from "react-redux"
import useVideos from "./hooks/useVideos"
import VideoCard from "./VideoCard"
import { Link } from "react-router-dom"
const VideoContainer = () => {
   useVideos()
   const useVidoeData = useSelector(store => store.video.topVideos)
  if (!useVidoeData || useVidoeData.length === 0) {
    return <h1>Loading...</h1>;
    }

    console.log(useVidoeData ,"kkk");
    
   
   const { id, snippet , statistics} = useVidoeData
  console.log(id);
  
   
   


    return(
        <div className="video-container-wrapper mx-2 my-4 flex gap-0 flex-wrap justify-between">
            {
                useVidoeData.map((videos) => <Link className="basis-[20%]" to={"/watch?v="+videos.id}><VideoCard id={videos.id} snippet={videos.snippet} statistics={videos.statistics}/></Link>)
            }
        </div>
    )
}

export default VideoContainer