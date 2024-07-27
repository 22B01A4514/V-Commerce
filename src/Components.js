import React, { useState, useContext, useEffect } from 'react';
import { globalContext } from './App';

function Eight({ p, q }) {
    const { globalcount, setglobalcount, globalprice, setglobalprice } = useContext(globalContext);
    const [mrp, setMrp] = useState(p); 
    const [number, setNumber] = useState(q);
    const [totalPrice, setTotalPrice] = useState(p); 

    useEffect(()=> {
        setTotalPrice(mrp * number);
    },[number, mrp]);
    
    const funcBtnClick = () => {
        if (number > 1) {
            setNumber(prevNumber => {
                const newNumber = prevNumber - 1;
                setglobalcount(globalcount - 1);
                setglobalprice(globalprice - mrp);
                return newNumber;
            });
        }
    };

    const funcBtnClick1 = () => {
        setNumber(prevNumber => {
            const newNumber = prevNumber + 1;
            setglobalcount(globalcount + 1);
            setglobalprice(globalprice + mrp);
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

export default Eight;
