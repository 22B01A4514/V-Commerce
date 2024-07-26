import React, { createContext, useState } from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Tabsfunctionality from './ChangingTabs';
import Details from './products&reviews.js';
import Datafetch from './datafetch.js';
import Home from './home.js';
import Eight from './Components.js';
import Register from './register.js';
import Profile from './profile.js';
import CardList from './MainCart.js';
// import Login from './login.js';
// import Tabsfunctionality from './ChangingTabs.js';
export const globalContext = createContext()
function App(){

    const [globalcount,setglobalcount] =useState(0);
    const [globalUserObject,setGlobalUserObject] = useState({});
    const [card,setcard] = useState({});
    return (<globalContext.Provider value={{globalcount,setglobalcount,globalUserObject,setGlobalUserObject,card,setcard}}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/products" element={<Datafetch/>}/>
                    <Route path="/CardList" element={<CardList/>}/>
                    <Route path="/Profile" element={<Profile/>}/>
                </Routes>
            </BrowserRouter>
        </globalContext.Provider>
    )
}
export default App;