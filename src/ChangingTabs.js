import {useState} from 'react';
import Register from '../../day2project/src/register.js';
import Login from '../../day2project/src/login.js';
import Navigation from './navigation.js';
function Tabsfunctionality(){
    const [currentTab,setCurrentTab] = useState(true);
    const swit = () =>{
        setCurrentTab(true);
    }
    const swit1 = () =>{
        setCurrentTab(false);
    }
    return (<div>
        {/* <Navigation/> */}
        <div>
            <button style={{padding:8,marginLeft:500,fontSize:20,fontFamily:'cursive'}}onClick={swit}>Login</button>
            <button style={{padding:8,fontSize:20,fontFamily:'cursive',margin:30}}onClick={swit1}>Register</button><br/><br/>
            {
                currentTab?
                <div> <Login/></div>: <div><Register/></div>
            }
        </div>
    </div>
    )
}
export default Tabsfunctionality;