import React from 'react';
import { useState,useRef } from 'react';


const Demo2 = () => {

    const [increase,setIncrease]=useState(0);
    console.log("Rendering...");

    const ref = useRef(0);
    /** not like => ref = 0
     * ref = { current: 0 }
     *
     *
     * */

    let x=0;


return (
    <div className="m-4 p-2 w-96 h-96 border border-black ">
        <div className='p-2 m-4'>
            <button className='bg-green-100 p-2 m-4 border  border-black'
            onClick={()=>{
                x=x+1;
                console.log(x);
            }}
            >Increase x</button>
            <span className='font-bold pl-4'>Let X  :{x} </span>
        </div>
        <div className='p-2 m-4'>
        <button
        className='bg-green-100 p-2 m-4 border  border-black'
        onClick={()=>setIncrease(
            increase+1
        )}
        >Increase Y </button>
        <span className='font-bold pl-4'>State : {increase}</span>
        </div>
        <div className='p-2 m-4'>
            <button
            className='bg-green-100 p-2 m-4 border  border-black'
            onClick={()=>{
                ref.current=ref.current+1;
                console.log(ref.current);
            }}
            >Increase Ref</button>
            <span className='font-bold pl-4'
           >Ref :{ref.current}
            </span>
        </div>
    </div>
  )
}

export default Demo2