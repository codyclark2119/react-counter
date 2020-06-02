import React from 'react';
import FlipNumbers from 'react-flip-numbers';
import { useCountContext } from "../utils/GlobalState";

function Display() {
    const [state, dispatch] = useCountContext();

    return (
        <section className="display">
            <div id='counter'><FlipNumbers height={60} width={60} numberStyle={{fontSize: '10px'}} color="white" background="black" play perspective={200} numbers={state.count.toString()} /></div>
            <u>Your count history:</u>
            <aside id='history'>
                <div >
                    {state.hist.map((num, i) => {
                      return <p>{`${i + 1}. ${num}`}</p>  
                    })}
                </div>
            </aside>
        </section>
    )

}

export default Display;

