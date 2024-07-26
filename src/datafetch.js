import { useEffect, useState } from "react";
import Cart from './cart.js';
import axios from 'axios';
import Navigation from "./navigation.js";
import View from "./viewProduct.js";
function Datafetch() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchMyData = async () => {
            const response = await axios.get('https://fakestoreapi.com/products');
            const responseData = await response.data;
            setData(responseData);
            console.log(responseData);
        };
        fetchMyData();
    }, []); 

    return (
        <div>
            <Navigation/>
        <h1>Data Fetching</h1><br/>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
     {data.map((dataItem) => (
                <div >
                <View
                    key={dataItem.id} 
                    path={dataItem.image} 
                    title={dataItem.title} 
                    price={dataItem.price} 
                    reviewsrate={dataItem.rating.rate} 
                    reviewscount={dataItem.rating.count} 
                    width={500} 
                    height={600} 
                    description ={dataItem.description}
                />
                </div>
            ))}
        </div>
        </div>
    );
}

export default Datafetch;
