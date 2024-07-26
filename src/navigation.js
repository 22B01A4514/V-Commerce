import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { globalContext } from './App';

function Navigation() {
    const { globalcount } = useContext(globalContext);

    return (
        <div style={{ backgroundColor: 'rgba(200,20,200,0.4)', color: 'white', padding: 10 }}>
            <div style={{display: 'flex',justifyContent: 'space-around',flexDirection: 'row',textDecoration: 'none'}}>
                
                <Link to="/" style={ {textDecoration:'none',color: 'black',padding: '10px'}}>
                    Home
                </Link>

                <Link to="/products" style={{ textDecoration: 'none',color: 'black',padding: '10px'}}>
                    Products
                </Link>

                <Link to="/CardList" style={{ textDecoration: 'none',color: 'black',padding: '10px'}}>
                    Cart ({globalcount})
                </Link>

                <Link to="/Profile" style={{ textDecoration: 'none',color: 'black',padding: '10px'}}>
                    Profile
                </Link>
                
            </div>
        </div>
    );
}

export default Navigation;
