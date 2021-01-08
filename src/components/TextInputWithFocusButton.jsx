import {useRef} from 'react'

const TextInputWithFocusButton = () => {
    const inputEl = useRef(null);
    const focusInput = () => {
        inputEl.current.focus()
    };

    return (  
        <>
            <input ref={inputEl} type="text" />
            <button onClick={focusInput} >Focus the input</button>
        </>
    );
}
 
export default TextInputWithFocusButton;