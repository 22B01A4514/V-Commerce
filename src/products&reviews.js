import React, { useContext, useRef,useState } from 'react';
import Eight from './Components.js';
import Rev from './reviews.js';
import { globalContext } from './App.js';
import Navigation from './navigation.js';
function Details() {
    const [append,setappend] = useState([]);
    const firstRef = useRef(null);
    const {data} = useContext(globalContext);
    const {  setcard } = useContext(globalContext);
    const formSubmit = (event) => {
        event.preventDefault();
        console.log("Adding Review");
        setappend([...append,firstRef.current.value]);
        console.log(firstRef.current.value);
        firstRef.current.value = ""; 
    }
    const func = () =>{
        const obj = { path:data.path, title:data.title, price:data.price, reviewsrate:data.reviewsrate, reviewscount:data.reviewscount };
        setcard((prevcards)=>[...prevcards,obj]);
    }
    return (
        <div>
            <Navigation/>
        <div
            style={{padding: 10,border: '2px solid gray',boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
            <div>
                <h1 style={{ fontFamily: 'sans-serif' }}>Name</h1>
            </div>
            <div style={{ display: 'flex', flexFlow: 'row wrap' }}>
                <div>
                    <img alt="image"width={300} height={300} src={data.path} alt="Product" />
                </div>
                <div style={{ flex: 1, marginLeft: 20 }}>
                    <h2>Product Name</h2>
                    <p>
                        {/* Casual shirts are great for everyday wear and come in a few popular styles. Button-down shirts
                        are classic and can be dressed up or down. T-shirts are simple and comfortable, perfect for
                        lounging or casual outings. Polo shirts add a touch of style with their collar and buttons.
                        Henleys are similar to T-shirts but have a buttoned neck. Flannel shirts are soft and warm, often
                        with plaid patterns. Each type offers a relaxed look suitable for various activities. */}
                        {data.title}
                    </p>
                    <h3>Price : <span style={{fontWeight:"normal"}}>{data.price}$</span></h3>
                    {/* <Eight /> */}
                    <button onClick={func}>Add to cart</button>
                </div>
            </div>
            <hr />
            <div>
                <h2>Product Specifications</h2>
                <p style={{ fontFamily: 'verdana' }}>
                {data.description}    
                </p>
            </div>
            <hr />
            <h2>Your Review</h2>
            <form onSubmit={formSubmit}>
                <input type="text" ref={firstRef}/>
                <button type="submit">Submit</button>
             </form>
             
            <hr />
            <h2>Reviews</h2>
            {/* <Rev /> */}
            <div>
                <ul>
                    {
                    append.map((review,index) => (<li key={index}>
                        <strong>Reviewer Name </strong><br/>
                        {review}</li>))
                    }
                </ul>
             </div>
        </div>
        </div>
    );
}

export default Details;
