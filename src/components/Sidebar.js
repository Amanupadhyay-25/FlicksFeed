import React from 'react';
import { FaHome, FaRegClock, FaRegThumbsUp, FaHistory, FaVideo, FaBars } from 'react-icons/fa';
import { MdSubscriptions } from 'react-icons/md';
import { AiFillYoutube } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Sidebar = () => {

  const isMenuOpen=useSelector(store=>store.app.isMenuOpen);

  //early return
  if(!isMenuOpen) return null ;

  return (
    <div className='shadow-lg mx-4 px-6 text-black bg-pink-200 '>
      <ul className='space-y-4 cursor-pointer'>
        <li className='flex items-center'>
          <FaHome className='mr-2' />
         <Link to="/"> Home</Link>
        </li>
        <li className='flex items-center'>
          <FaVideo className='mr-2' />
          Shorts
        </li>
        <li className='flex items-center'>
          <MdSubscriptions className='mr-2' />
          Subscription
        </li>
      </ul>

      <hr className='my-4 border-gray-300' />

      <h1 className='font-bold text-xl py-2'>You</h1>
      <ul className='space-y-6'>
        <li className='flex items-center'>
          <AiFillYoutube className='mr-2' />
          Your channel
        </li>
        <li className='flex items-center'>
          <FaHistory className='mr-2' />
          History
        </li>
        <li className='flex items-center'>
          <FaBars className='mr-2' />
          Playlist
        </li>
        <li className='flex items-center'>
          <FaRegClock className='mr-2' />
          Watch Later
        </li>
        <li className='flex items-center'>
          <FaRegThumbsUp className='mr-2' />
          Liked Videos
        </li>
      </ul>

      <hr className='my-6 border-gray-300' />

      <h1 className='font-bold text-xl py-2'>Subscription</h1>
      <ul className='space-y-6'>
        <li className='flex items-center'>
          <MdSubscriptions className='mr-2' />
          edureka!
        </li>
        <li className='flex items-center'>
          <MdSubscriptions className='mr-2' />
          Akshay Saini
        </li>
        <li className='flex items-center'>
          <MdSubscriptions className='mr-2' />
          Prime Coding
        </li>
        <li className='flex items-center'>
          <MdSubscriptions className='mr-2' />
          T Series
        </li>
        <li className='flex items-center'>
          <MdSubscriptions className='mr-2' />
          Kritika Yadav
        </li>
        <li className='flex items-center'>
          <MdSubscriptions className='mr-2' />
          UR-Cristiano
        </li>
        <li className='flex items-center'>
          <MdSubscriptions className='mr-2' />
          Dhruv Rathee
        </li>
        <li className='flex items-center'>
          <MdSubscriptions className='mr-2' />
         Aman Upadhyay
        </li>
        <li className='flex items-center'>
          <MdSubscriptions className='mr-2' />
          Aaj Tak
        </li>
        <li className='flex items-center'>
          <MdSubscriptions className='mr-2' />
          Narendra Modi
        </li>
        <li className='flex items-center'>
          <MdSubscriptions className='mr-2' />
          Mohammad Shami
        </li>
        <li className='flex items-center'>
          <MdSubscriptions className='mr-2' />
         Star Sports
        </li>
        <li className='flex items-center'>
          <MdSubscriptions className='mr-2' />
          Movies OK 
        </li>
        <li className='flex items-center'>
          <MdSubscriptions className='mr-2' />
         The Divine Tales
        </li>
        <li className='flex items-center'>
          <MdSubscriptions className='mr-2' />
          Pujya Rajan Jee
        </li>
        <li className='flex items-center'>
          <MdSubscriptions className='mr-2' />
         Sony LIV
        </li>
        <li className='flex items-center'>
          <MdSubscriptions className='mr-2' />
          visa2explore
        </li>
        <li className='flex items-center'>
          <MdSubscriptions className='mr-2' />
         LatinHype
        </li>
        <li className='flex items-center'>
          <MdSubscriptions className='mr-2' />
          Crazy XYZ
        </li>
        <li className='flex items-center'>
          <MdSubscriptions className='mr-2' />
         CodeWithHarry
        </li>
        <li className='flex items-center'>
          <MdSubscriptions className='mr-2' />
          Bhajan Marg
        </li>
      </ul>

      <hr className='my-4 border-gray-300' />

      <h1 className='font-bold text-xl py-2'>Explore</h1>
      <ul className='space-y-6'>
        <li className='flex items-center'>
          <FaBars className='mr-2' />
          Trending
        </li>
        <li className='flex items-center'>
          <FaBars className='mr-2' />
          Shopping
        </li>
        <li className='flex items-center'>
          <FaBars className='mr-2' />
          Music
        </li>
        <li className='flex items-center'>
          <FaBars className='mr-2' />
          Movies
        </li>
        <li className='flex items-center'>
          <FaBars className='mr-2' />
          Live
        </li>
        <li className='flex items-center'>
          <FaBars className='mr-2' />
          Gaming
        </li>
        <li className='flex items-center'>
          <FaBars className='mr-2' />
          News
        </li>
        <li className='flex items-center'>
          <FaBars className='mr-2' />
          Sports
        </li>
        <li className='flex items-center'>
          <FaBars className='mr-2' />
          Courses
        </li>
        <li className='flex items-center'>
          <FaBars className='mr-2' />
          Fashion & Beauty
        </li>
        <li className='flex items-center'>
          <FaBars className='mr-2' />
          Podcasts
        </li>
        <li className='flex items-center'>
          <FaBars className='mr-2' />
         Ronaldo
        </li>
        <li className='flex items-center'>
          <FaBars className='mr-2' />
          Kolkata News
        </li>
        <li className='flex items-center'>
          <FaBars className='mr-2' />
          Viral Memes
        </li>
        <li className='flex items-center'>
          <FaBars className='mr-2' />
         Bhakti Song
        </li>
        <li className='flex items-center'>
          <FaBars className='mr-2' />
         Old Movie Song
        </li>
        <li className='flex items-center'>
          <FaBars className='mr-2' />
        Post
        </li>
        <li className='flex items-center'>
          <FaBars className='mr-2' />
         Tweet
        </li>
        <li className='flex items-center'>
          <FaBars className='mr-2' />
          Current Affairs
        </li>
        <li className='flex items-center'>
          <FaBars className='mr-2' />
         Janmashtami 
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
