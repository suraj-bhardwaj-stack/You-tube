import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useSearchParams } from "react-router-dom"
import { closeSideBar } from "./utils/appSlice"
import CommentContainer from "./CommentContainer"

const WatchPage = () =>{
    const dispatch = useDispatch()
    const [searchParam] = useSearchParams()
    const param = searchParam.get('v')
   

    useEffect(()=>{
        dispatch(closeSideBar())
    }, [])
    
    return(
        <div className="watchpage-wrapper mx-2 my-4">
            <div className="the-watch-video">
                <div className="iframe-box">
                    <iframe width="900" height="515" src={"https://www.youtube.com/embed/"+param+"?si=vLP8ugQLT_NYERHT&autoplay=1&mute=1"} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
                <div className="comment-section">
                    <CommentContainer/>
                </div>
            </div>
        </div>
    )
}

export default WatchPage