// Learn useRef in 11 Minutes tutorial from: https://www.youtube.com/watch?v=t2ypzz6gJm0&ab_channel=WebDevSimplified
// from minute 8

import {useState, useRef, useEffect} from 'react'

const PrevState = () => {
    const [name, setName] = useState("")
    const prevName = useRef("")

    useEffect(() => {
        prevName.current = name;
    }, [name])
    // want to run this every time name changes, so 2nd argument is [name]
    // altho I tried it without a 2nd arg, and it looks like it still works??

    return ( 
        <>
            <h3>PrevState component</h3>
            <input onChange={e => setName(e.target.value)} />
            <p>My name is {name} and it used to be {prevName.current}</p>
        </> 
    );
}
 
export default PrevState;