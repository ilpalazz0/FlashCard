import React, {useState} from 'react'

    const CountButton = (props) => {

    const [cnt, setcnt]  = useState(0);

    const handleClick = () => {
        setcnt(cnt+props.incrementBy);
    };

    const handleClick2 = () => {
        setcnt(cnt-props.incrementBy);
    };

    const buttonStyle = {
        background: props.buttonColor,
        borderRadius: props.borderRadius
    }

    return ( 
    <div>
        <button style={buttonStyle} onClick={handleClick}>+{props.incrementBy}</button>
        <div>{cnt}</div>
        <button style={buttonStyle} onClick={handleClick2}>-{props.incrementBy}</button>
    </div>
    )

    
}

export default CountButton