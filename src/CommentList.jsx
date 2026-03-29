import Comment from "./Comment";

const CommentList = ({comment}) => {
   
    return(
        <div className="commentList-wrapper">
            <div className="comment-box-wrap">
                {
                comment.map((c , i) => <div key={i}>
                        <Comment key={i} comment={c}/>
                        <div className="pl-5 border-l-black border ml-5">
                            <CommentList comment={c.replies}/>
                        </div>
                    </div>
                    )
                }
            </div>
            
            
        </div>
    )
}

export default CommentList;