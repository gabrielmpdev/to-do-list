import React from 'react';

interface ButtonTestProps {
    value: string
    onClick: () => void;
    background: string
}

const ButtonTest = ({value , onClick , background}: ButtonTestProps) => {
    const buttonStyle = {
        backgroundColor: background
    }
    return <button onClick={onClick} style={buttonStyle}> {value} </button>


}

export default ButtonTest