import { Link } from "react-router-dom";

const Sidebar =()=>{
    return <div className="w-48 p-5 shadow-lg">
         <ul>
            <li><Link to="/">Home</Link></li>
            <li>Shorts</li>
            <li>Videos</li>
            <li>Lives</li>
        </ul>
        <h1 className="font-bold pt-5">Subscription</h1>
        <ul>
            <li>Music</li>
            <li>Sports</li>
            <li>Gaming</li>
            <li>Movies</li>
        </ul>
        <h1 className="font-bold pt-5">Watch Later</h1>
        <ul>
            <li>Music</li>
            <li>Sports</li>
            <li>Gaming</li>
            <li>Movies</li>
        </ul>
    </div>
}

export default Sidebar;