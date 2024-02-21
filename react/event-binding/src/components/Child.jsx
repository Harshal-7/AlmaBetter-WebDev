// ChildComponent.jsx

import React, { useState } from 'react';

function ChildComponent({ onChildClick }) {
    const [val,setVal] = useState("");

    const handleClick = () => {
        setVal("Hiii");
        onChildClick('Data to parent');
    };

    return (
        <div>
            <button className='mt-40 ml-40 w-40 bg-blue-600 p-2 text-white'
             onClick={handleClick}>
                Click me
            </button>
            <p className='mt-4 ml-44'>
                Val is : {val}
            </p>
        </div>
    );
};

export default ChildComponent