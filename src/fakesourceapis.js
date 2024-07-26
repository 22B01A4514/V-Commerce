import React from 'react';
import axios from "axios";
import {useState,useEffect} from 'react';
function FakeSourceApis() {
    const [data,setData] = useState([]);
    useEffect(()=>{
        const fetchData = async() => {
            const response = await axios.get('https://fakestoreapi.com/users');
            setData(response.data);
            const responseData = await response.data;
            console.log(responseData);
        }
        fetchData();
    })
    return (
        <div>
            <h1>Fake Source APIs</h1>
            <table style={{fontSize:20,border:"2px solid black",borderCollapse:"collapse",padding:10,margin:5,width:'100vh',height:'100vh',justifyItems:'center'}}>
                <thead>
                        <tr style={{border:"2px solid black",borderCollapse:"collapse",padding:5,margin:5}}>
                        <th>firstname</th>
                        <th>email</th>
                        <th>username</th>
                        <th>city</th>
                        <th>zipcode</th>
                        <th>Phone</th>
                        </tr>
                </thead>
                <tbody style={{fontSize:20,border:"2px solid black",borderCollapse:"collapse"}}>
                        {data.map((dataItem) => (
                            <tr style={{border:"2px solid black",borderCollapse:"collapse",padding:10,margin:5}}>
                                <td>{dataItem.name.firstname}</td>
                                <td>{dataItem.email}</td>
                                <td>{dataItem.username}</td>
                                <td>{dataItem.address.city}</td>
                                <td>{dataItem.address.zipcode}</td>
                                <td>{dataItem.phone}</td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );
}
export default FakeSourceApis;