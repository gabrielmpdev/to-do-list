import React from 'react';

interface ButtonTestProps {
    value: string
    onClick: () => void;
    background: string
    Class: string
}

const ButtonTest = ({value , onClick , background, Class }: ButtonTestProps) => {
    const buttonStyle = {
        backgroundColor: background,
        NameClass: Class
    }
    return <button onClick={onClick} style={buttonStyle} className={buttonStyle.NameClass}> {value} </button>


}

export default ButtonTest