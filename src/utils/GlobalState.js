import React, { createContext, useReducer, useContext } from "react";

//Inits the context which creates a background state for the count
const CountContext = createContext();
//Destructures out the provider element that will pass the state and the dispatch functions
const { Provider } = CountContext;

//Parent reducer that takes in the base state and the action that tells you the type to specify what function to be preforming and payload which is the data provided from the front end
const countReducer = (state, action) => {
    let total;
    switch (action.type) {
        case "add":
            total = state.count + action.payload
            return { count: total, hist: [...state.hist, total] };
        case "subtract":
            total = state.count - action.payload
            return { count: total, hist: [...state.hist, total] };
        case "reset":
            return { count: 0, hist: [] };
        default:
            throw new Error(`Invalid action type: ${action.type}`);
    }
};

//A function that takes in an inital value for the count and the elements within the Provider element to pass through
const CountProvider = ({ value = 0, ...props }) => {
    //Struturing the state and dispatch variables with the countReducer function and an inital state value
    const [state, dispatch] = useReducer(countReducer, { count: value, hist: [] });
    //Returning an element to wrap around the counter to listen for dispatch calls and making sure to pass the internal elements through props
    return <Provider value={[state, dispatch]} {...props} />;
};

//A function that when called returns the values that are within state and the dispatch functions
const useCountContext = () => {
    return useContext(CountContext);
};

export { CountProvider, useCountContext };