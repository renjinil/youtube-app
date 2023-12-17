import { useDispatch} from "react-redux";
import { toggleMenu } from "../utils/appSlice";


const Head =()=>{
    const dispach = useDispatch()
    const handleToggleMenu =()=>{
        dispach(toggleMenu())
    }
    return <div className="grid grid-flow-col p-5 m-2 shadow-lg">
       <div className="flex col-span-1">
        <img className="h-8" alt="menu" src="https://cdn2.iconfinder.com/data/icons/ios-tab-bar/25/Hamburger_Round-512.png" onClick={handleToggleMenu}/>
        <img className="h-8 mx-2" alt="yt-logo"  src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"/>
       </div>
       <div className="col-span-10 ">
        <input type="text" className="w-1/2 border border-gray-400 p-2 rounded-l-full"/>
        <button className=" border border-gray-400 p-2 rounded-r-full bg-gray-200">🔍</button>
       </div>

       <div className="col-span-1">
        <img  className="h-8" alt="user icon" src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png"/>
       </div>
    </div>
}

export default Head;