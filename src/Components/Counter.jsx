import React from 'react';
import Display from './Display';
import ButtonPad from './ButtonPad';
import { CountProvider } from "../utils/GlobalState";

function Counter() {
    return (
        <CountProvider>
            <div className="counter">
                <Display/>
                <ButtonPad/>
            </div>
        </CountProvider>
    )
}

export default Counter;