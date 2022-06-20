import "./counter.scss"
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset, incrementByAmount } from './counterSlice';
import { useState } from "react";

const Counter = () => {
    const { count } = useSelector((state) => state.counter);
    const dispatch = useDispatch();

    const [incrementAmount, setIncrementAmount] = useState(0);

    const addValue = Number(incrementAmount) || 0;

    const resetAll = () => {
        setIncrementAmount(0);
        dispatch(reset());
    }

    const add = () => {
        dispatch(increment());
    };

    const sub = () => {
        dispatch(decrement());
    };

    const handleChange = (e) => {
        setIncrementAmount(e.target.value)
    }



    return (
        <div className="counter">
            <div className='count'>{count}</div>
            <div className="btn">
                <button onClick={add}>+</button>
                <button onClick={sub}>-</button>
            </div>

            <input
                type="text"
                value={incrementAmount}
                onChange={handleChange}
            />

            <div>
                <button onClick={() => dispatch(incrementByAmount(addValue))}>Add Amount</button>
                <button onClick={resetAll}>Reset All</button>
            </div>
        </div>
    )
}

export default Counter