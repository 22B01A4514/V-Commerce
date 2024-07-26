import React, { useState, useEffect, useContext } from "react";
import { globalContext } from "./App";

function Eight() {
    const { globalcount, setglobalcount } = useContext(globalContext);
    const [number, setNumber] = useState(0);
    const { card } = useContext(globalContext);
    const cost = card.price || 0; 
    const [number1, setNumber1] = useState(cost);

    useEffect(() => {
        console.log("Mounted");
        console.log(globalcount);
        console.log(globalcount + 1);
        console.log(number + 1);

        return () => {
            console.log("Unmounted");
        };
    }, []); 

    useEffect(() => {
        console.log("Updated!!!");
        setNumber1(number * cost);
    }, [number, cost]);

    const funcBtnClick = () => {
        console.log("Button Clicked");
        console.log(globalcount + 1);
        setNumber(prevNumber => prevNumber + 1);
        setglobalcount(globalcount + 1);
    };

    const funcBtnClick1 = () => {
        console.log("Button Clicked");
        if (number > 0) {
            console.log(globalcount + 1);
            setNumber(prevNumber => prevNumber - 1);
            setglobalcount(globalcount - 1);
        }
    };

    return (
        <div>
            <h4>Cost: <span style={{ fontWeight: "normal" }}>{number1}$</span></h4>
            <div>
                <div style={{ display: "flex", flexFlow: "row", marginLeft: -24, marginTop: -29 }}>
                    <button style={{ margin: 29, padding: 5 }} className="btn btn-primary" onClick={funcBtnClick}>+</button>
                    <h1>{globalcount}</h1>
                    <button style={{ margin: 29, padding: 5 }} className="btn btn-primary" onClick={funcBtnClick1}>-</button>
                </div>
            </div>
        </div>
    );
}

export default Eight;
