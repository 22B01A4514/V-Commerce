import React, { useContext } from "react";
import { globalContext } from "./App";
import Eight from "./Components";
import Navigation from "./navigation";

function CardList() {
    const { card } = useContext(globalContext);
    return (
        <div>
            <Navigation />
            <h1>Cart</h1>
            {card.map((item, index) => (
                <div key={index} style={{ display: "flex", flexDirection: "row", marginBottom: 10 }}>
                    <img style={{ width: 140, height: 140 }} src={item.path} alt={item.title} />
                    <div style={{ padding: 10, marginLeft: 7, marginTop: -20 }}>
                        <h4>{item.title}</h4>
                        <Eight p={item.price} />
                    </div>
                </div>
            ))}
        </div>
    );
}

export default CardList;
