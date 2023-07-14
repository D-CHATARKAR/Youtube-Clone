import React from 'react'
const commentsData=[
    
  {
     name:"Dnyaneshwari",
     text:"lorem ipsum Ky8lkX46j7n0Xtw8aUkVxevhlAP7wVdaeZ1oThrQdWIwlpZDKxg7pJ4O0mwunlhUQZreHqePeDzW0MsOevFXl4csWYQWsIcrWHElZaxVwPdrHoSLGtj",
     replies:[
         {
             name:"Dnyaneshwari",
             text:"lorem ipsum Ky8lkX46j7n0Xtw8aUkVxevhlAP7wVdaeZ1oThrQdWIwlpZDKxg7pJ4O0mwunlhUQZreHqePeDzW0MsOevFXl4csWYQWsIcrWHElZaxVwPdrHoSLGtj",
             replies:[{
             
              }]
         },
      ]
 },
 {
     name:"Dnyaneshwari",
     text:"lorem ipsum Ky8lkX46j7n0Xtw8aUkVxevhlAP7wVdaeZ1oThrQdWIwlpZDKxg7pJ4O0mwunlhUQZreHqePeDzW0MsOevFXl4csWYQWsIcrWHElZaxVwPdrHoSLGtj",
     replies:[{
     
      }]
 },
 {
     name:"Dnyaneshwari",
     text:"lorem ipsum Ky8lkX46j7n0Xtw8aUkVxevhlAP7wVdaeZ1oThrQdWIwlpZDKxg7pJ4O0mwunlhUQZreHqePeDzW0MsOevFXl4csWYQWsIcrWHElZaxVwPdrHoSLGtj",
     replies:[{
     
      }]
 },
]
const Comment=({data})=>{
  const {text, name, replies}=data;
    return (
    <div className='flex shadow-sm bg-gray-200 rounded-lg p-2 my-2'>
       <img 
       className="w-12 h-10"
       src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjocfAiPmkzqDQu_tmtXKQPauoSBwQIwT1iDtMsAPA2SPucnhwVz-k9-rplQqmWDUI5uA&usqp=CAU" 
        alt="user-icon" />
        

        <div className='px=3'>
          <p className='font-bold'>{name}</p>
          <p>{text}</p>
        </div>
    </div>
    )
};
 const CommentsList=({comments})=>{
     return comments.map((comment,index)=>(
      <div>
      <Comment key={index} data={comment}/>
      <div className="pl-5 ml-7 border border-l-black">
      <Comment key={index} data={comment}/>
      <Comment key={index} data={comment}/>
      <Comment key={index} data={comment}/>
      </div>
      </div>
     ));
 }
const Comments = () => {
  return (
    <div className='p-2 m-5'>
      <h1 className='text-2xl font-bold'>Comments</h1>
      <CommentsList comments={commentsData}/>
    </div>
  )
}

export default Comments;
