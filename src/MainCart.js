import React, { useContext } from "react";
import { globalContext } from "./App";
import Eight from "./Components";
import Navigation from "./navigation";
import { useNavigate } from "react-router-dom";

function CardList() {
    const { card } = useContext(globalContext);
    const { globalprice } = useContext(globalContext);
    const nav = useNavigate();
    
    const func = () => {
        nav('/payment');
    };

    return (
        <div>
            <Navigation />
            <h1>Cart</h1>
            {card.map((item, index) => (
                <div key={index} style={{ display: "flex", flexDirection: "row", marginBottom: 10, boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", borderRadius: 20, border: "2px solid gray", width: 500, padding: 10 }}>
                    <img alt="product" style={{ width: 140, height: 120 }} src={item.path} />
                    <div style={{ padding: 10, marginLeft: 7, marginTop: -20 }}>
                        <h4>{item.title}</h4>
                        <Eight p={item.price} q={item.quantity} />
                    </div>
                </div>
            ))}

            <div style={{
                border: "2px solid black", 
                borderRadius: 20, 
                float: "right", 
                padding: 20, 
                boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                position: "absolute",
                marginTop: 150,
                top: 0,
                right: 0
            }}>
                <h3>Total Cart Price: <span style={{ fontWeight: "normal" }}>{globalprice}$</span></h3>
                <center><button style={{ padding: 7 }} onClick={func}>Place Order</button></center>
            </div>
        </div>
    );
}

export default CardList;
