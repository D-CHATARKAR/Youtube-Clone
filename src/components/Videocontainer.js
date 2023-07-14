import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEO_API } from '../utils/constant';
import Videocard from './Videocard';
import { Link } from 'react-router-dom';

const Videocontainer = () => {
  const [videos,setvideos]=useState([]);
  useEffect(()=>{
    getVideos();
  },[]);
  const getVideos=async () =>{
    const data=await fetch(YOUTUBE_VIDEO_API);
    const json=await data.json();
    setvideos(json.items);
  }
  return (
    <div className='flex flex-wrap w-full ml-4'>
    {videos.map(video=> (
      <Link key={video.id} to={"/watch?v="+video.id}>
    <Videocard  info={video}/></Link> 
    ))} 
    </div>
  )
}

export default Videocontainer
