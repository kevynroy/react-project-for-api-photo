import React from ' react';

const Button = ({ text, onClick, disabled}) => {
    return (
        <button onclick={onClick} disabled={disabled}>
            {text}
        </button>
    );
};

export default Button;