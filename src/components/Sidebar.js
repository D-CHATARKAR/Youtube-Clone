import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const isMenuOpen= useSelector(store => store.app.isMenuOpen)
  if(!isMenuOpen) return null;
  return (
    <div className='w-[1000px] shadow-xl p-5 '>
      <ul>
        <div className='flex'>
        <svg class="h-6 w-6 text-black"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />  <polyline points="9 22 9 12 15 12 15 22" /></svg>
        <li className='text-lg'><Link to="/">
          Home</Link></li>
        </div>
        <div className='flex'>
        <svg class="h-6 w-6 text-black"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"> <polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
        <li className='text-lg'><Link to="/">
          Shorts</Link></li>
        </div>
         <div className='flex'>
        <svg class="h-6 w-6 text-black"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" /></svg>
        <li className='text-lg'><Link to="/">
          Videos</Link></li>
        </div>
        <div className='flex'>
        <svg class="h-6 w-6 text-black"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z"/>  <polyline points="12 8 12 12 14 14" />  <path d="M3.05 11a9 9 0 1 1 .5 4m-.5 5v-5h5" /> </svg>
        <li className='text-lg'><Link to="/">
          History</Link></li>
        </div>
        
      </ul>
      <h1 className='font-bold pt-5'>Subscriptions</h1>
      <ul>
         <div className='flex'>
        <svg class="h-6 w-6 text-black"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z"/> <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="6" cy="17" r="3" />  <circle cx="16" cy="17" r="3" />  <polyline points="9 17 9 4 19 4 19 17" />  <line x1="9" y1="8" x2="19" y2="8" /></svg>
        <li className='text-lg'><Link to="/">
          Music</Link></li>
        </div>
        <div className='flex'>
        <svg class="h-6 w-6 text-black"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="8" y1="21" x2="16" y2="21" />  <line x1="12" y1="17" x2="12" y2="21" />  <line x1="7" y1="4" x2="17" y2="4" />  <path d="M17 4v8a5 5 0 0 1 -10 0v-8" />  <circle cx="5" cy="9" r="2" />  <circle cx="19" cy="9" r="2" /> </svg>
        <li className='text-lg'><Link to="/">
          Sports</Link></li>
        </div>
         <div className='flex'>
        <svg class="h-6 w-6 text-black"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z"/>  <rect x="2" y="6" width="20" height="12" rx="2" />  <path d="M6 12h4m-2 -2v4" />  <line x1="15" y1="11" x2="15" y2="11.01" />  <line x1="18" y1="13" x2="18" y2="13.01" /> </svg>
        <li className='text-lg'><Link to="/">
          Gaming</Link></li>
        </div>
         <div className='flex'>
        <svg class="h-6 w-6 text-black"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z"/>  <rect x="4" y="4" width="16" height="16" rx="2" />  <line x1="8" y1="4" x2="8" y2="20" />  <line x1="16" y1="4" x2="16" y2="20" />  <line x1="4" y1="8" x2="8" y2="8" />  <line x1="4" y1="16" x2="8" y2="16" />  <line x1="4" y1="12" x2="20" y2="12" />  <line x1="16" y1="8" x2="20" y2="8" />  <line x1="16" y1="16" x2="20" y2="16" /> </svg>
        <li className='text-lg'><Link to="/">
          Movies</Link></li>
        </div>
      </ul>

      <h1 className='font-bold pt-5'>Watch later</h1>
      <ul>
      <div className='flex'>
        <svg class="h-6 w-6 text-black"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z"/> <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="6" cy="17" r="3" />  <circle cx="16" cy="17" r="3" />  <polyline points="9 17 9 4 19 4 19 17" />  <line x1="9" y1="8" x2="19" y2="8" /></svg>
        <li className='text-lg'><Link to="/">
          Music</Link></li>
        </div>
        <div className='flex'>
        <svg class="h-6 w-6 text-black"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="8" y1="21" x2="16" y2="21" />  <line x1="12" y1="17" x2="12" y2="21" />  <line x1="7" y1="4" x2="17" y2="4" />  <path d="M17 4v8a5 5 0 0 1 -10 0v-8" />  <circle cx="5" cy="9" r="2" />  <circle cx="19" cy="9" r="2" /> </svg>
        <li className='text-lg'><Link to="/">
          Sports</Link></li>
        </div>
         <div className='flex'>
        <svg class="h-6 w-6 text-black"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z"/>  <rect x="2" y="6" width="20" height="12" rx="2" />  <path d="M6 12h4m-2 -2v4" />  <line x1="15" y1="11" x2="15" y2="11.01" />  <line x1="18" y1="13" x2="18" y2="13.01" /> </svg>
        <li className='text-lg'><Link to="/">
          Gaming</Link></li>
        </div>
         <div className='flex'>
        <svg class="h-6 w-6 text-black"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z"/>  <rect x="4" y="4" width="16" height="16" rx="2" />  <line x1="8" y1="4" x2="8" y2="20" />  <line x1="16" y1="4" x2="16" y2="20" />  <line x1="4" y1="8" x2="8" y2="8" />  <line x1="4" y1="16" x2="8" y2="16" />  <line x1="4" y1="12" x2="20" y2="12" />  <line x1="16" y1="8" x2="20" y2="8" />  <line x1="16" y1="16" x2="20" y2="16" /> </svg>
        <li className='text-lg'><Link to="/">
          Movies</Link></li>
        </div>
        <div className='flex'>
        <svg class="h-6 w-6 text-black"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z"/> <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="6" cy="17" r="3" />  <circle cx="16" cy="17" r="3" />  <polyline points="9 17 9 4 19 4 19 17" />  <line x1="9" y1="8" x2="19" y2="8" /></svg>
        <li className='text-lg'><Link to="/">
          Music</Link></li>
        </div>
        <div className='flex'>
        <svg class="h-6 w-6 text-black"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="8" y1="21" x2="16" y2="21" />  <line x1="12" y1="17" x2="12" y2="21" />  <line x1="7" y1="4" x2="17" y2="4" />  <path d="M17 4v8a5 5 0 0 1 -10 0v-8" />  <circle cx="5" cy="9" r="2" />  <circle cx="19" cy="9" r="2" /> </svg>
        <li className='text-lg'><Link to="/">
          Sports</Link></li>
        </div>
         <div className='flex'>
        <svg class="h-6 w-6 text-black"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z"/>  <rect x="2" y="6" width="20" height="12" rx="2" />  <path d="M6 12h4m-2 -2v4" />  <line x1="15" y1="11" x2="15" y2="11.01" />  <line x1="18" y1="13" x2="18" y2="13.01" /> </svg>
        <li className='text-lg'><Link to="/">
          Gaming</Link></li>
        </div>
         <div className='flex'>
        <svg class="h-6 w-6 text-black"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z"/>  <rect x="4" y="4" width="16" height="16" rx="2" />  <line x1="8" y1="4" x2="8" y2="20" />  <line x1="16" y1="4" x2="16" y2="20" />  <line x1="4" y1="8" x2="8" y2="8" />  <line x1="4" y1="16" x2="8" y2="16" />  <line x1="4" y1="12" x2="20" y2="12" />  <line x1="16" y1="8" x2="20" y2="8" />  <line x1="16" y1="16" x2="20" y2="16" /> </svg>
        <li className='text-lg'><Link to="/">
          Movies</Link></li>
        </div>
      </ul>
    </div>
  )
}

export default Sidebar
