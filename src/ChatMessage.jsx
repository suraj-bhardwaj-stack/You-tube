import userIcon from './assets/user.png'
const ChatMessage = ({name ,text})=>{
    return(
        <div className="chat-message-wrapper flex gap-3 py-2 px-2 bg-slate-200 m-2 rounded">
            <div className="author-img">
                <img className='w-8' src={userIcon} alt="userIcon" />
            </div>
            <div className='flex items-center gap-2'>
                <strong>@{name}</strong>
                <p className='text-xs'>{text}</p>
            </div>
        </div>
    )
}

export default ChatMessage;