import React, { useState, useContext, useEffect } from 'react';
import { globalContext } from './App';

function Eight({ p }) {
    const { globalcount, setglobalcount } = useContext(globalContext);
    const mrp = useState(p); // Initialize mrp with the passed prop p
    const [number, setNumber] = useState(1);
    const {totalPrice, setTotalPrice} = useContext(globalContext); // Initialize total price with the passed prop p
    useEffect(() => {
        console.log("Mounted");
        console.log(number);
        console.log(number + 1);
        console.log(mrp * number);
        return () => {
            console.log("Unmounted");
        };
    }, []);

    useEffect(() => {
        console.log("Updated!!!");
        setTotalPrice(mrp * number); 
    }, [number, mrp]);

    const funcBtnClick = () => {
        console.log("Button Clicked");
        if (number > 1) {
            setNumber(prevNumber => {
                const newNumber = prevNumber - 1;
                setglobalcount(globalcount - 1);
                return newNumber;
            });
        }
    };

    const funcBtnClick1 = () => {
        console.log("Button Clicked");
        setNumber(prevNumber => {
            const newNumber = prevNumber + 1;
            setglobalcount(globalcount + 1);
            return newNumber;
        });
    };

    return (
        <div>
            <p>Price: Rs. {mrp}$</p>
            <p>Total: Rs. {totalPrice}$</p>
            <div>
                <div style={{ display: "flex", marginTop: -15 }}>
                    <button
                        className="btn btn-primary"
                        onClick={funcBtnClick}
                        style={{ margin: 20, padding: 5 }}>
                        <strong>-</strong>
                    </button>
                    <h3>{number}</h3>
                    <button
                        className="btn btn-primary"
                        onClick={funcBtnClick1}
                        style={{ margin: 20, padding: 5 }}>
                        <strong>+</strong>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Eight