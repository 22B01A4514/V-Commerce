import React, { useContext, useRef, useState } from 'react';
import { globalContext } from './App.js';
import Navigation from './navigation.js';

function Details() {
    const [append, setAppend] = useState([]);
    const firstRef = useRef(null);
    const { data, setcard, globalcount, setglobalcount, globalprice, setglobalprice } = useContext(globalContext);

    const formSubmit = (event) => {
        event.preventDefault();
        if (firstRef.current.value.trim() !== '') {
            setAppend([...append, firstRef.current.value]);
            firstRef.current.value = "";
        }
    };

    const addToCart = () => {
        const obj = {
            id: data.id,
            path: data.path,
            title: data.title,
            price: data.price,
            reviewsrate: data.reviewsrate,
            reviewscount: data.reviewscount,
            description: data.description,
            quantity: 1
        };

        setcard((prevCards) => {
            const existingProduct = prevCards.find((product) => product.id === obj.id);
            if (existingProduct) {
                const updatedCards = prevCards.map((product) =>
                    product.id === obj.id
                        ? { ...product, quantity: product.quantity + 1 }
                        : product
                );
                setglobalprice(globalprice + obj.price);
                return updatedCards;
            } else {
                setglobalprice(globalprice + obj.price);
                return [...prevCards, obj];
            }
        });

        setglobalcount(globalcount + 1);
    };

    return (
        <div>
            <Navigation />
            <div style={{ padding: 10, border: '2px solid gray', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', margin: '20px auto', width: '80%' }}>
                <div>
                    <h1 style={{ fontFamily: 'sans-serif' }}>Product Details</h1>
                </div>
                <div style={{ display: 'flex', flexFlow: 'row wrap', alignItems: 'center' }}>
                    <div>
                        <img alt="product" width={300} height={300} src={data.path} />
                    </div>
                    <div style={{ flex: 1, marginLeft: 20 }}>
                        <h2>{data.title}</h2>
                        <p>{data.description}</p>
                        <h3>Price: <span style={{ fontWeight: "normal" }}>{data.price}$</span></h3>
                        <button onClick={addToCart} style={{ padding: '10px 20px', fontSize: '16px' }}>Add to cart</button>
                    </div>
                </div>
                <hr />
                <div>
                    <h2>Product Specifications</h2>
                    <p style={{ fontFamily: 'verdana' }}>{data.description}</p>
                </div>
                <hr />
                <h2>Your Review</h2>
                <form onSubmit={formSubmit}>
                    <input type="text" ref={firstRef} style={{ padding: '10px', marginRight: '10px', borderRadius: '5px', border: '1px solid gray' }} />
                    <button type="submit" style={{ padding: '10px 20px', fontSize: '16px' }}>Submit</button>
                </form>
                <hr />
                <h2>Reviews</h2>
                <div>
                    <ul>
                        {append.map((review, index) => (
                            <li key={index}>
                                <strong>Reviewer Name</strong><br />
                                {review}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Details;
