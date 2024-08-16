import React, { useEffect } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux';
import { addMessages } from '../utils/chatSlice';
import { generateRandomName, makeRandomMessage } from '../utils/helper';

const LiveChat = () => {
    // Initialize the dispatch function to send actions to the Redux store
    const dispatch = useDispatch();

    // Extract the current chat messages from the Redux store
    const showMessages = useSelector(store => store.chat.messages);

    // useEffect hook to set up the interval when the component mounts
    useEffect(() => {
        // Create an interval that dispatches a new message every 2 seconds
        const i = setInterval(() => {
            dispatch(addMessages({
                name: generateRandomName(),         // Generate a random name for the message sender
                message: makeRandomMessage(15) + "💜", // Generate a random message with a heart emoji
            }));
        }, 200); // 200 milliseconds = 2 seconds

        // Cleanup function that clears the interval when the component unmounts or updates
        return () => clearInterval(i);
    }, []); // Empty dependency array means this effect runs only once after the initial render

    // JSX for rendering the chat messages
    return (
        <div className="w-full h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
            {
                // Map over the messages array and render each message as a ChatMessage component
                showMessages.map((c, i) => (
                    <ChatMessage 
                        key={i}               // Unique key for each message (using the index i)
                        name={c.name}         // Pass the sender's name as a prop
                        message={c.message}   // Pass the message content as a prop
                    />
                ))
            }
        </div>
    )
}

export default LiveChat;
