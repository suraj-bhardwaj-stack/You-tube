import userIcon from './assets/user.png'
const Comment = ({comment}) =>{
  
    
    return(
        <div className="single-comment-wrapper">
            <div className="cmt-box flex gap-2 items-start my-2">
                <img className='w-8 mt-2' src={userIcon} alt="icon" />
                <div className="details">
                    <strong>{comment.name}</strong>
                    <p>{comment.text}</p>
                </div>
            </div>
        </div>
    )
}

export default Comment;