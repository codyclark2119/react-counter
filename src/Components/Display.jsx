import React from 'react';
import { useCountContext } from "../utils/GlobalState";

function Display() {
    const [state, dispatch] = useCountContext();

    return (
        <section className="display">
            The count is {state.count}
            <aside>
                Your count history:
                <ol>
                    {state.hist.map(num => {
                      return <li>{num}</li>  
                    })}
                </ol>
            </aside>
        </section>
    )

}

export default Display;

