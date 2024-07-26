import { useContext } from "react"
import { globalContext } from "./App"
import Eight from "./Components";
import Navigation from "./navigation";

function CardList(){
    const {card, setcard} = useContext(globalContext);
    return (<div>
            <Navigation/>
                <h1>Cart</h1>
                <div style={{display:"flex",flexDirection:"row"}}>
                <img style={{width:140,height:140}}src={card.path}></img>
                    <div style={{padding:10,marginLeft:7,marginTop:-20}}>
                        <h4>{card.title}</h4>
                        <h4>Price: <span style={{fontWeight:"normal"}}>{card.price}</span></h4>
                        <Eight/>
                    </div>
                </div>
            </div>)
}
export default CardList

{/* <div style={{margin:4,padding:3,width:260,height:300,fontSize:10,backgroundColor:"white",borderRadius:10,boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
                <center><img style={{width:100,height:100}}src={card.path}></img></center>
                <h2>{card.title}</h2>
                <div style={{display:"flex",flexDirection:"row"}}>
                <h2>Price: &nbsp;</h2>
                <h2>{card.price}</h2>
                </div>
                <p>{card.reviewscount}</p>
                <p>{card.reviewsrate}</p>
                </div> */}