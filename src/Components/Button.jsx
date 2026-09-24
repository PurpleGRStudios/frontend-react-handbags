import React from 'react';


function Button({text, disabled}) {
    return (
        <button
            onClick={() => console.log(text)}
            disabled={disabled}
        >
            {text}
            </button>
    );
}


export default Button;