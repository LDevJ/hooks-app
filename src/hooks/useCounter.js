import { useState } from "react";


export const useCounter = (initialValue = 10) => {

    const [counter, setCounter] = useState(initialValue);

    const increment = (value = 1) => {
        setCounter( counter + value);
    }

    const decrement  = (value = 1) => {
        setCounter( counter - value);
    }

    const reset = () => {
        setCounter( initialValue);
    }

    const change = (value) => {
        setCounter( counter + value);
    }

    return {
        counter, increment, decrement, reset, change
    };
}