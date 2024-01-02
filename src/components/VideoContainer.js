import { useEffect, useState } from "react";
import { YOUTUBE_API_URL } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer =()=>{
    const [videos,setVideos] = useState([])
useEffect(()=>{
    getVideos()
},[])
const getVideos = async()=>{
    const data= await fetch(YOUTUBE_API_URL)
    const jsonData = await data.json();
    setVideos(jsonData?.items)
}
    return <div className="flex flex-wrap">
        {videos?.map(video=>
        <Link to={"/watch?v="+video.id}  key={video?.id}><VideoCard info={video}/></Link>
        )} 
    </div>
}

export default VideoContainer;