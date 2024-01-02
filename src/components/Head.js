import { useDispatch, useSelector} from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";



const Head =()=>{
    const dispach = useDispatch()
    const searchCache= useSelector(store=>store?.search)
    const [searchQuery,setSearchQuery] =useState("")
    const [suggestions, setSuggestions] = useState([])
    const [showSuggestions,setShowSggestions]= useState(false)
    console.log({searchCache,ds:searchCache[searchQuery]})
    useEffect(()=>{

        const timer=setTimeout(()=>{
            if(searchCache[searchQuery]){
                setSuggestions(searchCache[searchQuery])
            }else{
                getSearchAPI()}
            }
           
        ,200)
        return()=>{
            clearTimeout(timer)
        }
    },[searchQuery])
    const getSearchAPI=async ()=>{
        const data =await fetch(YOUTUBE_SEARCH_API + searchQuery);
        const jsondata= await data?.json()
        setSuggestions(jsondata[1])
        dispach(cacheResults({
            [searchQuery]:jsondata[1]
        }))
    }

    const handleToggleMenu =()=>{
        dispach(toggleMenu())
    }
    return <div className="grid grid-flow-col p-5 m-2 shadow-lg">
       <div className="flex col-span-1">
        <img className="h-8 cursor-pointer" alt="menu" src="https://cdn2.iconfinder.com/data/icons/ios-tab-bar/25/Hamburger_Round-512.png" onClick={handleToggleMenu}/>
         <img className="h-8 mx-2" alt="yt-logo"  src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"/>
       </div>
       <div className="col-span-10 ">
        <div>
        <input type="text" className="w-1/2 border border-gray-400 py-2 rounded-l-full px-5"
         value={searchQuery} 
         onChange={(e)=>setSearchQuery(e.target.value)}
         onFocus={()=>setShowSggestions(true)}
         onBlur={()=>setShowSggestions(false)}
         />
        <button className=" border border-gray-400 p-2 rounded-r-full bg-gray-200">🔍</button>
        {showSuggestions&&
        <div className="absolute bg-white px-5 py-2 border border-gray-100 rounded-lg shadow-lg w-[34rem]">
            <ul>
                {suggestions?.map(s=> <li className="py-2 hover:bg-gray-100">🔍 {s}</li>)}
            </ul>
        </div>}
        </div>
       </div>

       <div className="col-span-1">
        <img  className="h-8" alt="user icon" src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png"/>
       </div>
    </div>
}

export default Head;