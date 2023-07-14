import React from 'react'

const ChatMessage = ({name,text}) => {
  return (
    <div className='flex items-center shadow-sm p-2'>
      <img className='h-8 '
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjocfAiPmkzqDQu_tmtXKQPauoSBwQIwT1iDtMsAPA2SPucnhwVz-k9-rplQqmWDUI5uA&usqp=CAU" 
      alt="user-icon"
       />
       <span className='font-bold px-2'>{name}</span>
       <span>{text}</span>
    </div>
  )
}

export default ChatMessage
