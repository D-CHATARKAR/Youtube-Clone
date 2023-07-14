import React from 'react'

const videocard = ({info}) => {
    
    const {statistics, snippet}=info;
    const {channelTitle, title, thumbnails}=snippet;
  return (
    <div className='p-2 m-2 shadow-2xl w-[340px] h-80 rounded-xl'>
    <img className='rounded-lg' src={thumbnails.medium.url} alt={title} />
    <ul>
        <li className='font-bold py-2'>{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount}</li>
    </ul>
    </div>
  )
}

export default videocard
