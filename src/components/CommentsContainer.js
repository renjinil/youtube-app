import Comment from "./Comment";
import CommentsList from "./CommentsList";

const MockCommentsData=[
    {
        name:"Renjini",
        text:"Lorem ipsum comments get ready",
        replies:[]
    },
    {
        name:"Renjini",
        text:"Lorem ipsum comments get ready",
        replies:[
            {
                name:"Renjini",
                text:"Lorem ipsum comments get ready",
                replies:[ {
                    name:"Renjini",
                    text:"Lorem ipsum comments get ready",
                    replies:[ {
                        name:"Renjini",
                        text:"Lorem ipsum comments get ready",
                        replies:[ {
                            name:"Renjini",
                            text:"Lorem ipsum comments get ready",
                            replies:[]
                        }]
                    }]
                }]
            },
            {
                name:"Renjini",
                text:"Lorem ipsum comments get ready",
                replies:[ {
                    name:"Renjini",
                    text:"Lorem ipsum comments get ready",
                    replies:[ {
                        name:"Renjini",
                        text:"Lorem ipsum comments get ready",
                        replies:[]
                    }]
                }]
            }
        ]
    },
    {
        name:"Renjini",
        text:"Lorem ipsum comments get ready",
        replies:[{
            name:"Renjini",
            text:"Lorem ipsum comments get ready",
            replies:[]
        },
        {
            name:"Renjini",
            text:"Lorem ipsum comments get ready",
            replies:[]
        }]
    },
    {
        name:"Renjini",
        text:"Lorem ipsum comments get ready",
        replies:[{
            name:"Renjini",
            text:"Lorem ipsum comments get ready",
            replies:[]
        }]
    }
]


const CommentsContainer = ()=>{
    return <div className="m-2 p-5">
        <h1 className="text-2xl font-bold">Comments:</h1>
        <CommentsList comments={MockCommentsData} />
    </div>
}

export default CommentsContainer;