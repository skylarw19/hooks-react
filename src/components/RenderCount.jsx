import {useState, useRef, useEffect} from 'react'

const RenderCount = () => {
    const [name, setName] = useState("");
    
    // const [renderCount, setRenderCount] = useState(0);
    // useEffect(() => {
    //     setRenderCount(prevRenderCount => prevRenderCount +1)
    // })
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

    
    return (  
        <>
            <input value={name} onChange={e => setName(e.target.value)} />
            <div>My name is {name}</div>
            <div>I rendered {renderCount.current}</div>
        </>
    );
}
 
export default RenderCount;