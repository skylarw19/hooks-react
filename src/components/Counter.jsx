import { useState, useRef, useEffect} from 'react'

const Counter = () => {

    const counter = useRef(0);

    // if we do just counter.current = counter.current + 1 outside of the useEffect,
    // then the ref value would be updated during the render phase, which means the value can be incremented more than once.
    // therefore, refs should be modified in event handlers or in effects, not in render phase
    useEffect(() => {
        // every time the component has been re-rendered, the counter is incremented
        counter.current = counter.current + 1;
    });

    return (  
        <>
            <p>useEffect The component has been re-rendered {counter.current} times.</p>
        </>
    );
}
 
export default Counter;