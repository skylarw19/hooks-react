import {useRef} from 'react'

const TextInputWithFocusButton = () => {
    const inputEl = useRef(null);
    const focusInput = () => {
        inputEl.current.focus()
    };

    return (  
        <>
            <h3>TextInputWithFocusButton</h3>
            <input ref={inputEl} type="text" />
            <button onClick={focusInput} >Focus the input</button>
            <br/>
        </>
    );
}
 
export default TextInputWithFocusButton;