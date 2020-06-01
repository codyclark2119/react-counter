import React from 'react';
import { useCountContext } from "../utils/GlobalState";

export default function ButtonPad() {
    const [state, dispatch] = useCountContext();

    return (
        <div>
            <button onClick={() => dispatch({ type: "add", payload: 1 })}>Up Button</button>
            <button onClick={() => dispatch({ type: "subtract", payload: 1 })}>Down Button</button>
            <button onClick={() => dispatch({ type: "reset" })}>Reset Button</button>
            <button onClick={() => dispatch({ type: "add", payload: 5 })}>Add 5</button>
            <button onClick={() => dispatch({ type: "add", payload: 1 })}>Up Button</button>
        </div>
    )
}
