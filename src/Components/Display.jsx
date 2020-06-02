import React from 'react';
import { useCountContext } from "../utils/GlobalState";

function Display() {
    const [state, dispatch] = useCountContext();

    return (
        <section className="display">
            <div id='counter'>{state.count}</div>
            Your count history:
            <aside id='history'>
                <div >
                    {state.hist.map(num => {
                      return <p>{`${num}`}</p>  
                    })}
                </div>
            </aside>
        </section>
    )

}

export default Display;

