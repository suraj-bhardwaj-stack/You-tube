import { YOU_TUBE_API_KEY } from '../utils/constent';
import { useEffect } from "react";
import { callTopVideos } from '../utils/videoSlice'
import { useDispatch } from 'react-redux';

const useVideos = () =>{
    const dispatch = useDispatch()
     const videoHandler = async () => {
            try{
                const data = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet,statistics&chart=mostPopular&regionCode=IN&maxResults=50&key=${YOU_TUBE_API_KEY}`);
                const json = await data.json()
                
                
                dispatch(callTopVideos(json.items))
            }catch(err){
              
                
            }
        }

useEffect(()=>{
    videoHandler()
}, [])
}

export default useVideos;