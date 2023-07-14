import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import {useSearchParams } from 'react-router-dom';
import Comments from './Comments';
import LiveChats from './LiveChats';


const Watchpage = () => {
    const [searchParams]=useSearchParams();
    console.log(searchParams.get('v'));
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(closeMenu())
    })
  return (
    <div className='flex flex-col p-5 w-full'>
    <div className='flex w-full'>
      <div>
      <iframe 
      width="1200" 
      height="500" 
      src={"https://www.youtube.com/embed/"+searchParams.get("v")}
      title="YouTube video player"
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
      </iframe>
    </div>
    <div className='w-full'>
      <LiveChats/>
    </div>
    </div>
    <Comments/>
    </div>
  )
}

export default Watchpage
