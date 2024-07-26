import React, { createContext, useState } from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Details from './products&reviews.js';
import Datafetch from './datafetch.js';
import Home from './home.js';
import Profile from './profile.js';
import CardList from './MainCart.js';
import Payment from './payment.js';

export const globalContext = createContext()
function App(){

    const [globalcount,setglobalcount] =useState(1);
    const [globalUserObject,setGlobalUserObject] = useState({});
    const [card,setcard] = useState([]);
    const [data,setdata] = useState([]);
    const [totalPrice, setTotalPrice] = useState([]);
    return (<globalContext.Provider value={{globalcount,setglobalcount,globalUserObject,setGlobalUserObject,card,setcard,data,setdata,totalPrice, setTotalPrice}}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/products" element={<Datafetch/>}/>
                    <Route path="/CardList" element={<CardList/>}/>
                    <Route path="/Profile" element={<Profile/>}/>
                    <Route path="/view" element={<Details/>}/>
                    <Route path="/payment" element={<Payment/>}/>
                </Routes>
            </BrowserRouter>
        </globalContext.Provider>
    )
}
export default App;