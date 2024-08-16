import React, { useEffect, useState } from 'react';
import { FLICK_FEED, MENU_CDN, USER_LOGO, YOUTUBE_SUGGESTION_API } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
import APP_LOGO from '../utils/APP_LOGO.png';  // Correct import statement for the image

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  
  console.log(searchQuery);

  useEffect(() => {
    // Set a timeout to fetch suggestions after 200ms
    const timer = setTimeout(() => {
      getSearchSuggestions();
    }, 200);

    // Clear the timeout if the component unmounts or if the effect is called again
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    console.log("API CALLS - " + searchQuery);
    const data = await fetch(YOUTUBE_SUGGESTION_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
  };

  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg bg-red-400">
      <div className="flex col-span-1">
        <img
          onClick={toggleMenuHandler}
          className="h-8 cursor-pointer"
          alt="menu"
          src={MENU_CDN}
        />
        <a href="/">
          <img
            className="h-10 px-4"
            alt="app-logo"
            src={APP_LOGO}  // Correct reference to the imported image
          />
        </a>
      </div>
      <div className="col-span-10 px-10">
        <div>
          <input
            className="px-5 w-1/2 border border-gray-400 p-2 rounded-l-full"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">
            🔍
          </button>
        </div>
        {showSuggestions && (
          <div className="fixed absolute bg-white py-2 px-2 w-[35rem] shadow-lg rounded-lg border border-gray-100">
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
      <div className="col-span-1">
        <img
          className="h-8"
          alt="user"
          src={USER_LOGO}
        />
      </div>
    </div>
  );
};

export default Head;
