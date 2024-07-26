import React,{useRef,useEffect, useContext} from 'react';
import { usercontext } from './home';
import { globalContext } from './App';
function Login()
{
    const firstRef = useRef(null);
    const secondRef = useRef(null);
    const {setlogin}=useContext(usercontext);
    const {globalUserObject} = useContext(globalContext);
    const formSubmit=(event)=>{
        event.preventDefault();
        if(firstRef.current.value===globalUserObject.id && secondRef.current.value===globalUserObject.pass)
            {
                alert("Correct");
                setlogin(true);
                localStorage.setItem("name","React JS");
                localStorage.setItem("branch","Your Branch");
            }
            else{
                alert("Incorrect");
            }
    }
useEffect(()=>{
    firstRef.current.focus();
})
    return (<div style={{margin:"auto",marginTop:20,borderRadius:10,backgroundColor:"#BCF1F8",border:"2px solid gray",width:450,display:"flex",flexDirection:"column",padding:30}}>
        <h1 style={{color:"white",textShadow:"1px 1px 8px #2E236C"}}>Login</h1>
        <p>Provide your credentials</p><br/>
        <form onSubmit={formSubmit} style={{fontSize:25,display:"flex",flexDirection : "column",justifyContent:"center"}}>
            <div style={{display:"flex",flexDirection : "column"}}>
                <label style={{fontSize:20,fontFamily:'cursive'}}>Enter Username : &nbsp;</label><br/>
                <input style={{fontSize:18,fontFamily:'cursive',}}type="text" placeholder="Enter Username" ref={firstRef}></input>
            </div><br/><br/>
            <div style={{display:"flex",flexDirection : "column"}}>
                <label style={{fontFamily:"cursive",fontSize:20}}>Enter Password : &nbsp;</label><br/>
                <input style={{fontSize:18,fontFamily:"revert"}}type="password" placeholder='Enter Password' ref={secondRef}></input>
            </div><br/><br/>
            <button style={{fontFamily:"cursive",backgroundColor:"black",color:"white",padding:2,borderRadius:10,fontSize:20,width:100,float:"right"}}type="submit">Login</button>
        </form>
    </div>
    )
}
export default Login;