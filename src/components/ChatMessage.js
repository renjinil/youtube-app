const ChatMessage=({name, message})=>{
    return <div className="flex item-center p-2">
        <img src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png" className="w-8 h-8"/>
        <span className="font-bold px-2">{name}</span>
        <span>{message}</span>
    </div>
}

export default ChatMessage;