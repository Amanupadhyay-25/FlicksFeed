import React, { useEffect, useState } from 'react'
import { FLICK_FEED, MENU_CDN, USER_LOGO, YOUTUBE_SUGGESTION_API } from '../utils/constant'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';

const Head = () => {
  const [searchQuery,setSearchQuery]=useState("");
  const [suggestions,setSuggestions]=useState([]);
  const [showSuggestions,setShowSuggestions]=useState(false);
  console.log(searchQuery);

  useEffect(()=>{
  //Make a api call 


  //make a api call after every 200ms 
  //but if the difference between 2 API calls is <200ms 
  //decline the API Call
  const timer=setTimeout(()=>{
    getSearchSuggestions();
  },200);

  return ()=>{
    clearTimeout(timer);
  };
  
  },[searchQuery]);
  


  const getSearchSuggestions=async ()=>{
    console.log("API CALLS -" + searchQuery) 
    const data=await fetch(YOUTUBE_SUGGESTION_API+searchQuery);
    const json=await data.json();
    setSuggestions(json[1]);

  }

 const dispatch=useDispatch();

const toggleMenuHandler=()=>{
  dispatch(toggleMenu());
}

  return (
    <div className='grid grid-flow-col p-5 m-2 shadow-lg' >
      <div className='flex col-span-1 '>
        <img 
        onClick={()=>toggleMenuHandler()}
       className=' h-8 cursor-pointer'
        alt='hamburger menu'
        src={MENU_CDN}
        />
        <img
       className='h-8 mx-2 cursor-pointer '
        alt='youtube-logo'
        src={FLICK_FEED}
        />
        </div>
        <div className='col-span-10 text-center'>
        <div>
        <input
        value={searchQuery}
        className='px-5 w-1/2 border border-gray-400 p-2 rounded-l-full'
        type='text'
        onChange={(e)=>setSearchQuery(e.target.value)}
        onFocus={()=>setShowSuggestions(true)}
        onBlur={()=>setShowSuggestions(false)}
        />
        <button className='border border-gray-400 px-5 py-2 rounded-r-3xl bg-gray-200'>🔍</button>
        </div>
        {showSuggestions && (
          <div className="fixed bg-white py-2 px-2 w-[37rem] shadow-lg rounded-lg border border-gray-100">
            <ul>
              {suggestions.map((s) => (
                <li key={s} className="py-2 px-3 shadow-sm hover:bg-gray-100">
                  🔍 {s}
                </li>
              ))}
            </ul>
          </div>
        )}

        </div>
        <div className='col-span-1'>
          <img
           className=' h-8'
          alt='user-logo'
          src={USER_LOGO}
          />
        </div>
      </div>
  )
}

export default Head