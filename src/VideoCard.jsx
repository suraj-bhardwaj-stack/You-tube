import channelIcon from './assets/channel-icon.png'
const VideoCard = ({id , snippet , statistics}) => {
     console.log(id);
   console.log( snippet );
   console.log( statistics);
    return (
        <div className="videoCard-wrapper cursor-pointer  mt-2 py-2 px-2 hover:bg-slate-100 rounded-lg">
            <div className="the-img rounded">
                <img className="rounded-lg w-full" src={snippet.thumbnails.medium.url} alt="thumbnails" />
            </div>
            <div className="video-info mt-3 flex items-start gap-2">
                <img src={channelIcon} className="w-8 h-8 rounded-[50%]"  alt="channelIcon"/>
                <div className="title">
                        <strong className='text-[14px]'>{snippet.title.slice(0, 50)}...</strong>
                        <h2 className='text-[12px] text-gray-700 font-medium mt-1'>{snippet.channelTitle}</h2>
                </div>
            </div>
        </div>
    )
}

export default VideoCard