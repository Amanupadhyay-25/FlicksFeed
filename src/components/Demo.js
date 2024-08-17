import React, { useState, useMemo } from 'react';
import { findPrime } from '../utils/helper';

const Demo = () => {
    // State for managing the input text
    const [text, setText] = useState("");
    // State for toggling between dark and light theme
    const [darkTheme, setDarkTheme] = useState(false);

    console.log("Rendering...");

    // useMemo is used here to memoize the result of the findPrime function
    // This prevents recalculating the prime number on every render
    // Only recalculates when the 'text' dependency changes
    const prime = useMemo(() => {
        // Compute the prime number based on the current text value
        return findPrime(text);
    }, [text]); // Dependency array: recompute when 'text' changes

    return (
        <div className={
            // Base class names for the container
            "m-4 p-2 w-96 h-96 border border-black " +
            // Conditionally add dark theme classes based on 'darkTheme' state
            (darkTheme ? "bg-gray-900 text-white" : "")
        }>
            <div>
                {/* Button to toggle between dark and light theme */}
                <button
                    className="m-10 p-2 bg-green-200"
                    onClick={() => setDarkTheme(!darkTheme)} // Toggle darkTheme state on click
                >
                    Toggle
                </button>
            </div>
            <div>
                {/* Input field for entering the number */}
                <input
                    type='number'
                    className='border border-black w-72'
                    onChange={(e) => setText(e.target.value)} // Update text state on input change
                />
            </div>
            <div>
                {/* Display the computed nth prime number */}
                <h1 className="mt-4 font-bold text-xl">nth Prime: {prime}</h1>
            </div>
        </div>
    );
}

export default Demo;
