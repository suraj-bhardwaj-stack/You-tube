import { useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { makeid, nameGenerate } from "./helper";
import { useDispatch, useSelector } from "react-redux";
import { addLiveChat } from "./utils/chatSlice";

const LiveChat = () =>{
        const dispatch = useDispatch()
        const chatData = useSelector(store => store.chat.message)
        // if(!chatData) return
        const name = nameGenerate()
        const randomText = makeid(20)
        
        

        useEffect(()=>{
            const timer = setInterval(()=>{
                 dispatch(addLiveChat({name : nameGenerate() , randomText : makeid(20)}))
            },1000)
           
            return () => clearInterval(timer)
        },[dispatch])
        
        
    return(
        <div className="livechat-wrapper">
            {
                chatData.map((chat, i)=> <ChatMessage key={i} name={chat.name} text={chat.randomText}/>)
            }
            
            
        </div>
    )
}

export default LiveChat;