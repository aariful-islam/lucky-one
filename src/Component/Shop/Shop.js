import React, { useEffect, useState } from 'react';
import './Shop.css'

const Shop = () => {
    const [watch, setWatch]=useState([])
    useEffect( ()=>{
        fetch('watch.json')
        .then(res=>res.json())
        .then(data=>console.log(data))
    },[])
    return (
        <div>
            <h1>Welcome to Smart Watch Shop </h1>

            <div className='watch'>

            </div>
            <div className='cart'>

            </div>
            
        </div>
    );
};

export default Shop;