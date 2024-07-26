import Tabsfunctionality from "./ChangingTabs";
import { createContext } from 'react';
import { useState } from 'react';
import {Link} from 'react-router-dom';
import Navigation from "./navigation";
export const usercontext = createContext();

function Home(){
    const [globalcount,setglobalcount] = useState();
    const [islogin,setlogin] = useState(false);
    return(<usercontext.Provider value={{islogin,setlogin,globalcount,setglobalcount}}>
        <div>
              {  islogin?
              <div>
                <Navigation/>
                    <h1>Logged in </h1>
                        <Link to='/Products'>Products</Link>
                </div>:
                    <Tabsfunctionality/>
              }
        </div>
        </usercontext.Provider>
    );
}
export default Home;