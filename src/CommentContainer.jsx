import Comment from "./Comment";
import CommentList from "./CommentList";

const CommentContainer = () =>{
    const commentData = [
        {
            name: "Suraj",
            text: "You are good developer",
            replies : [
                {
                    name: "Mukesh",
                    text: "You are good developer",
                    replies : [
                        {
                            name: "Vamp",
                            text: "You are good developer",
                            replies : [
                                {
                                    name: "Yatharth",
                                    text: "You are good developer",
                                    replies : []
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            name: "Suraj",
            text: "You are good developer",
            replies : []
        },
        {
            name: "Suraj",
            text: "You are good developer",
            replies : []
        },
        {
            name: "Suraj",
            text: "You are good developer",
            replies : []
        },
        {
            name: "Suraj",
            text: "You are good developer",
            replies : []
        },
        {
            name: "Suraj",
            text: "You are good developer",
            replies : []
        }
    ]

    return(
        <div className="commentContainer-wrapper">
            <div className="comment-head">
                <strong>5 Comments</strong>
                <CommentList comment={commentData}/>
            </div>
        </div>
    )
}

export default CommentContainer;