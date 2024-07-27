import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { globalContext } from "./App";

function View({ path, title, price, reviewsrate, reviewscount, description, id }) {
    const { setdata } = useContext(globalContext);
    const nav = useNavigate();
    
    const handleClick = () => {
        const product = { id, path, title, price, reviewsrate, reviewscount, description, quantity: 1 };
        setdata(product);
        nav('/view');
    };

    return (
        <div style={{ 
            margin: 10, 
            padding: 20, 
            width: 300, 
            height: 300, 
            fontSize: 14, 
            backgroundColor: "white", 
            borderRadius: 10, 
            boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" 
        }}>
            <center>
                <img alt="Product" src={path} width={100} height={100} style={{ borderRadius: "50%" }} />
                <h3>{title}</h3>
                <h4>Rating: {reviewsrate} ({reviewscount} reviews)</h4>
            </center>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: 10 }}>
                <h3 style={{ margin: 0 }}>Price: {price}$</h3>
            </div>
            <hr />
            <center>
                <button onClick={handleClick} style={{ padding: "10px 20px", fontSize: 16 }}>View Product</button>
            </center>
        </div>
    );
}

export default View;
