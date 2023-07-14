import React,{useEffect, useState} from 'react'
import ChatMessage from './ChatMessage';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import { generateRandomMsg, generateRandomNmae } from '../utils/helper';

const LiveChats = () => {
  const [liveText, setLiveText]=useState("");
    const dispatch = useDispatch();
    const chatMessages=useSelector((store)=> store.chat.messages);
    useEffect(()=>{
        const i = setInterval(()=>{
         dispatch(addMessage({
           name:generateRandomNmae(),
           message:generateRandomMsg(20),
         }));
        },1500);
        return () => clearInterval(i);
    },[]);
  return (
    <>
    <h1 className='font-bold underline p-2'>LiveChats</h1>
    <div className='ml-2 p-2 border border-black rounded-md'>
    <div className='  w-full h-[390px] overflow-y-scroll flex flex-col-reverse'>
      
        {chatMessages.map((c,i)=><ChatMessage
        key={i}
      name={c.name}
      text={c.message}
      />
      )}
      </div> 
      <form className='w-full px-2 ml-2 flex rounded-md'
            onSubmit={(e)=>{
              e.preventDefault();

              dispatch(
                addMessage({
                  name:"Dnyaneshwari",
                  message:liveText
                }
              ))
              setLiveText("");
            }}
      >
        <input 
        type="text"  
        className='w-72 p-2 border border-black rounded-md'
        value={liveText}
        onChange={(e)=>{
          setLiveText(e.target.value);
        }}
        />
        <button className='p-2 mx-2 bg-green-400 rounded-md'>Send</button>
      </form>
      </div>
      </>
  )
}

export default LiveChats;
