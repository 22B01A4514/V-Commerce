import React, { useContext } from "react";
import Details from "./products&reviews"; 
import { useNavigate } from "react-router-dom";
import { globalContext } from "./App";
function View({path, title, price, reviewsrate, reviewscount,description }) {
    const {data,setdata} = useContext(globalContext);
    const nav = useNavigate();
    const func = () => {
        nav('/view');
        const obj = {path,title,price, reviewsrate, reviewscount,description};
        setdata(obj);
    };

    return (
        <div style={{ margin: 4, padding: 3, width: 300, height: 300, fontSize: 10, backgroundColor: "white", borderRadius: 10, boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }}>
            <center>
                <img alt="image" src={path} width={100} height={100} style={{ borderRadius: 200 }} />
                <h3>{title}</h3>
                <h3>Rating: {reviewsrate}</h3>
            </center>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <h3><pre>price: {price}$</pre></h3><br/>
                {/* <p>Description: {description}$</p> */}
            </div>
            <hr />
            <center>
                <button onClick={func}>View Product</button>
            </center>
        </div>
    );
}

export default View;
