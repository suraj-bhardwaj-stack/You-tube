import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useSearchParams } from "react-router-dom"
import { closeSideBar } from "./utils/appSlice"
import CommentContainer from "./CommentContainer"
import LiveChat from "./LiveChat"
import { addLiveChat } from "./utils/chatSlice"

const WatchPage = () =>{
    const dispatch = useDispatch()
    const [LiveMessage , setLiveMessage] = useState("")
    const [searchParam] = useSearchParams()
    const param = searchParam.get('v')
   

    useEffect(()=>{
        dispatch(closeSideBar())
    }, [])

    const addComment = (e) =>{
        e.preventDefault()
        setLiveMessage(e.target.value)
        dispatch(addLiveChat({name:"suraj" , randomText:LiveMessage}))
    }
    
    
    return(
        <div className="watchpage-wrapper mx-2 my-4 w-full">
            <div className="the-watch-video flex justify-between">
                <div className="iframe-box basis-[70%] w-[70%]">
                    <iframe width="100%" height="515" src={"https://www.youtube.com/embed/"+param+"?si=vLP8ugQLT_NYERHT&autoplay=1&mute=1"} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                <div className="comment-section">
                    <CommentContainer/>
                </div>
                </div>
                <div className="chat-wrapper basis-[28%]">
                    <div className="live-chat  h-[460px] w-[full] border border-1 border-black flex flex-col-reverse overflow-y-scroll">
                        <LiveChat/>
                    </div>
                    <div className="live-comment mt-2">
                        <form className="flex justify-between" onSubmit={addComment}>
                            <input className="border-1 border border-black w-[80%] p-2 rounded-sm" value={ LiveMessage || ""} onChange={(e)=>{setLiveMessage(e.target.value)}} type="text" placeholder="Add Comment" />
                            <button className="bg-gray-200 py-1 px-5 rounded font-semibold">Add </button>
                        </form>
                    </div>
                </div>
                
            </div>
                
            
        </div>
    )
}

export default WatchPage