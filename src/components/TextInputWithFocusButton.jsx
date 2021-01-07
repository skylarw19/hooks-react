import {useRef} from 'react'

const TextInputWithFocusButton = () => {
    const inputEl = useRef(null);
    const onButtonClick = () => {
        inputEl.current.focus()
    };

    return (  
        <>
            <p>hello testing github auth</p>
            <input ref={inputEl} type="text" />
            <button onClick={onButtonClick} >Focus the input</button>
        </>
    );
}
 
export default TextInputWithFocusButton;