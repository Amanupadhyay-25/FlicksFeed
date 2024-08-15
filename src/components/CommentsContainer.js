import React from 'react'
import { USER_LOGO } from '../utils/constant';


//this is the comment and some  reply for comment 3 
const CommentsData=[
  {
    name:"Aman",
    text:"This song is my favourite song ❤️",
    replies:[]
  },
  {
    name:"Gunjan",
    text:"This song is my bf fav song 😍",
    replies:[]
  },
  {
    name:"Priya",
    text:"Mohit Chauhan is my Fav Singer",
    replies:[
      {
        name:"Anju",
        text:"I used to listen it in my College Days",
        replies:[
          {
            name:"Yashika",
            text:"Yes this song is also my fav song in college",
            replies:[
              {
                name:"yash",
                text:"This song always gives my gossebumps❤️",
                replies:[
                  {
                    name:"Kunal",
                    text:"We used to perform on this son in school days❤️",
                    replies:[
                      {
                        name:"Aman",
                        text:"Hey I like your video ❤️",
                        replies:[
                          {
                            name:"Aman",
                            text:"Hey I like your video ❤️",
                            replies:[
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name:"Aman",
    text:"Hey I like your video ❤️",
    replies:[]
  },
  {
    name:"Aman",
    text:"Hey I like your video ❤️",
    replies:[]
  },
  {
    name:"Aman",
    text:"Hey I like your video ❤️",
    replies:[]
  },
  {
    name:"Aman",
    text:"Hey I like your video ❤️",
    replies:[]
  }
]


const Comments=({data})=>{
  const {name,text,replies}=data;
  return(
      <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg my-2">
        <img
        className='w-12 h-12'
        alt='userimage'
        src={USER_LOGO}/>
        <div className='px-3'>
        <p className='font-bold'>{name}</p>
        <p>{text}</p>
        </div>
      </div>
  )
}

const CommentsList=({comments})=>{
 return ( 
  //Recursion in Components
  comments.map((comment,index)=>(
    <div key={index}>
    <Comments data={comment}/>
    <div className='ml-5 border border-l-black pl-5'>
      <CommentsList comments={comment.replies} /> 
    </div>
    </div>
   )
  )
)
}

const CommentsContainer = () => {
  return (
    <div >
        <h1 className='font-bold text-2xl p-2'>Comments:</h1>
        <CommentsList comments={CommentsData}/>
    </div>
  )
}

export default CommentsContainer;