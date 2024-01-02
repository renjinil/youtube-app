import { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessages } from "../utils/chatSlice";

const LiveChat =()=>{
const dispatch =useDispatch()
const [liveMessage,setLiveMessage] = useState()
const chatMessages= useSelector(store=>store?.chat?.messages)
    useEffect(()=>{
        const i= setInterval(()=>{
            dispatch(addMessages({
                name: (Math.random() + 1).toString(36).substring(7),
                message:"namaste react utuube 👀"
            }))
        },2000)
        return ()=>{
            clearInterval(i)
        }
    },[])
    return <> <div className="mx-2 p-2 border border-black h-[470px] w-full bg-gray-50 rounded-lg overflow-y-scroll flex flex-col-reverse">
        {chatMessages?.map(c=><ChatMessage name={c.name} message={c.message}/>)}
    </div>
    <form className="border border-black w-full" onSubmit={(e)=>{
        e.preventDefault();
        dispatch(addMessages({
            name:"Renjini",
            message:liveMessage
        }))
        setLiveMessage("")
    }}>
        <input type="text" className="w-96 p-2" value={liveMessage} onChange={(e)=>setLiveMessage(e.target.value)}/>
        <button className="px-2 mx-2 bg-green-100">send</button>
    </form>
    </>
}

export default LiveChat;