const VideoCard =({info})=>{

const {snippet={}, statistics={}} =info||{}
const {channelTitle,title,thumbnails}=snippet
    return(
        <div className="p-2 m-2 w-72 shadow-lg">
            <img alt="thumbnails" src={thumbnails?.high?.url} className="rounded-lg"/>
            <ul>
                <li className="font-bold py-2">{title}</li>
                <li>{channelTitle}</li>
                <li>{statistics?.viewCount} Views</li>
            </ul>
        </div>
    )
}

export default VideoCard;