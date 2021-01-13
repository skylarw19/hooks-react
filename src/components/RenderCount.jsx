// Learn useRef in 11 Minutes tutorial from: https://www.youtube.com/watch?v=t2ypzz6gJm0&ab_channel=WebDevSimplified

import {useState, useRef, useEffect} from 'react'

const RenderCount = () => {
    const [name, setName] = useState("");
    
    // const [renderCount, setRenderCount] = useState(0);
    // useEffect(() => {
    //     setRenderCount(prevRenderCount => prevRenderCount +1)
    // })
    // ^This above code will not work
    // DON'T USE STATE TO RENDER COUNT (code above) b/c it will throw it into an infinte loop 
    // when you update the state, you cause the component to re-render
    // so the 1st time our component renders is gonna cause it to set the state (b/s of useEffect), which causes it to re-render,
    // which causes it to set state again, and so on.

    // Therefore STATE is NOT the way to do this. you must use REFS.
    // REFS are similar to state in that it persists b/w the renders of your component,
    // BUT REFS DO NOT CAUSE YOUR COMPONENT TO REUPDATE WHEN IT GETS CHANGED, unlike state

    const renderCount = useRef(0); 
    // this returns an obj with a current prop: {current: 0}
    // when the current prop is updated, that's what gets persisted b/w renders

    useEffect(() => {
        renderCount.current = renderCount.current +1;
    })
    // ^we can change this renderCount.current as much as we want and it will never re-render
    // Ref: similar to state, but doesn't cause it to render

    const inputRef = useRef()
    // useRef can also be used to access DOM nodes
    // when I do ref={inputRef}, whenever input is rendered on the screen, it will set ref=to that input DOM element
    
    const focusOnClick = () => {
        // console.log(inputRef.current) // since we set ref={inputRef}, then inputRef.current will equal that input element
        inputRef.current.focus()

        // you could do something like:
        // inputRef.current.value = 'Some Value'
        // and when you click the Focus button, it'd auto set your input value to 'Some Value'
        // but this wouldn't update state, so you NEVER wanna do this. 
        // ^that's BAD for code, makes it bad to code
    }

    return (  
        <>
            <h3>RenderCounter component</h3>
            <input value={name} onChange={e => setName(e.target.value)} />
            <div>My name is {name}</div>
            <div>I rendered {renderCount.current}</div>

            {/* useRef can also be used to access DOM nodes */}
            <input ref={inputRef}  />
            <button onClick={focusOnClick}>Focus</button>
            {/* // when I do ref={inputRef}, whenever input is rendered on the screen, it will set ref=to that input DOM element */}

        </>
    );
}
 
export default RenderCount;