const Comment =({data})=>{
    const {name,text,replies} =data
    return <div className="flex bg-gray-100  p-3 rounded-lg my-2">
       <img src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png" className="w-8 h-8"/>
       <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
       </div>
    </div>
}

export default Comment;