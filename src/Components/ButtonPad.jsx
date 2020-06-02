import React from 'react';
import { useCountContext } from "../utils/GlobalState";

export default function ButtonPad() {
    const [state, dispatch] = useCountContext();

    return (
        <div>
            <button onClick={() => dispatch({ type: "add", payload: 1 })}><i class="fas fa-arrow-up"></i></button>
            <button onClick={() => dispatch({ type: "subtract", payload: 1 })}><i class="fas fa-arrow-down"></i></button>
            <button onClick={() => dispatch({ type: "reset" })}><i class="fas fa-retweet"></i></button>
            <button onClick={() => dispatch({ type: "add", payload: 5 })}><i class="fas fa-arrow-up"></i>5</button>
        </div>
    )
}
