import { useState } from "react";

export const useCount = (initialVal = 0) => {
    const [state, setState] = useState(initialVal);

    const increase = () => {
        setState((prev) => prev + 1);
    };

    const decrease = () => {
        setState((prev) => prev - 1);
    };

    const restart = () => {
        setState(0);
    };

    return [state, increase, decrease, restart];
};