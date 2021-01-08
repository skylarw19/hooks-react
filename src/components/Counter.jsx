import { useState, useRef, useEffect} from 'react'

const Counter = () => {

    const counter = useRef(0);

    useEffect(() => {
        counter.current = counter.current + 1;
    });

    return (  
        <>
            <p>The component has been re-rendered {counter.current} times.</p>
        </>
    );
}
 
export default Counter;