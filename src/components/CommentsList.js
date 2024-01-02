import Comment from "./Comment";

const CommentsList =({comments})=>{
    return comments?.map((cmmnt)=> {
        return <div>
            <Comment data={cmmnt} />
            <div className="mx-5">
             <CommentsList comments={cmmnt?.replies} />
            </div>
        </div>
       
    }

  )
}

export default CommentsList;