import { useContext, useEffect } from "react";
import { globalContext } from "./App";
import Navigation from "./navigation";
function Profile() {
    const { globalUserObject} = useContext(globalContext);
    useEffect(()=>{
        const name = localStorage.getItem("name");
        const branch = localStorage.getItem("branch");
        console.log(name);
        console.log(branch)
    })
    return (
        <div style={{justifyContent:"center",alignItems:"center",alignContent:"center",margin:30}}>
            <Navigation/><br/>
        <div style={{border: "2px solid gray", borderRadius: 20, width: 500, padding: 30, height: 400,margin:'auto',marginTop:69,boxShadow:"0 4px 8px 0 rgba(20, 20, 200, 0.2), 0 6px 20px 0 rgba(200, 20, 200, 0.19)"}}>
            <h1>Details</h1>

            <div style={{ display: "flex", flexDirection: "row" }}>
                <h3><label>College ID :  </label></h3>
                <h3 style={{ fontWeight: "normal" }}>{globalUserObject.id}</h3>
            </div>

            <div style={{ display: "flex", flexDirection: "row" }}>
                <h3><label>email ID : &nbsp;</label></h3>
                <h3 style={{ fontWeight: "normal" }}>{globalUserObject.mail}</h3>
            </div>

            <div style={{ display: "flex", flexDirection: "row" }}>
                <h3><label>Gender : &nbsp;</label></h3>
                <h3 style={{ fontWeight: "normal" }}>{globalUserObject.gender}</h3>
            </div>

            <div style={{ display: "flex", flexDirection: "row" }}>
                <h3><label>Password : &nbsp;</label></h3>
                <h3 style={{ fontWeight: "normal" }}>{globalUserObject.pass}</h3>
            </div>

            <div style={{ display: "flex", flexDirection: "row" }}>
                <h3><label>branchValue : &nbsp;</label></h3>
                <h3 style={{ fontWeight: "normal" }}>{globalUserObject.branchValue}</h3>
            </div>
        </div>
        </div>
    );
}

export default Profile;
