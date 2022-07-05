import React, { useReducer } from 'react'
import "./style.css";

const reducer = (state, action) => {
    if (action.type === 'INCR') {
        state = state + 1;
    }
    if (action.type === 'DEC') {
        state = state > 0 ? state - 1 : 0;
    }
    return state;
}

const UseReducer = () => {
    const initialData = 10;
    const [state, dispatch] = useReducer(reducer, initialData)

    return (
        <>
            <div className="center_div">
                <p>{state}</p>
                <div className="button2" onClick={() => dispatch({ type: 'INCR' })}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    INCR
                </div>
                <div
                    className="button2"
                    onClick={() => dispatch({ type: 'DEC' })}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    DECR
                </div>
            </div>
        </>
    )
}
export default UseReducer;
