import { useEffect } from "react";
// import { globalContext } from "./App";
import Navigation from "./navigation";

function Payment() {
    // const { globalUserObject, setGlobalUserObject } = useContext(globalContext);

    useEffect(() => {
        const name = localStorage.getItem("name");
        const branch = localStorage.getItem("branch");
        console.log(name);
        console.log(branch);
    }, []);

    return (
        <div>
        <Navigation />
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", margin: 30 }}>
            <div style={{ 
                border: "2px solid gray", 
                borderRadius: 20, 
                width: 500, 
                padding: 30, 
                height: "auto",
                margin: 'auto', 
                marginTop: 69, 
                boxShadow: "0 4px 8px 0 rgba(20, 20, 200, 0.2), 0 6px 20px 0 rgba(200, 20, 200, 0.19)" 
            }}>
                <h1>Payment Details</h1>
                <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                    <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                        <h3 style={{ flex: "0 0 150px" }}><label>Card name:</label></h3>
                        <input style={{ flex: "1", padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}></input>
                    </div>
                    <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                        <h3 style={{ flex: "0 0 150px" }}><label>Card Number:</label></h3>
                        <input style={{ flex: "1", padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}></input>
                    </div>
                    <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                        <h3 style={{ flex: "0 0 150px" }}><label>Expiry date:</label></h3>
                        <input style={{ flex: "1", padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}></input>
                    </div>
                    <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                        <h3 style={{ flex: "0 0 150px" }}><label>CVV:</label></h3>
                        <input style={{ flex: "1", padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}></input>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Payment;
