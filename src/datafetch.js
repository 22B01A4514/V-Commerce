import { useEffect, useState } from "react";
import axios from 'axios';
import Navigation from "./navigation.js";
import View from "./viewProduct.js";

function Datafetch() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchMyData = async () => {
            try {
                const response = await axios.get('https://fakestoreapi.com/products');
                setData(response.data); 
                console.log(response.data); 
            } catch (error) {
                console.error('Error fetching data:', error); 
            }
        };
        fetchMyData();
    }, []);

    return (
        <div>
            <Navigation />
            <h1>Data Fetching</h1>
            <br />
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                {data.map((item) => (
                    <div key={item.id} style={{ margin: 10 }}>
                        <View
                            path={item.image}
                            title={item.title}
                            price={item.price}
                            reviewsrate={item.rating.rate}
                            reviewscount={item.rating.count}
                            description={item.description}
                            id={item.id} 
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Datafetch;
