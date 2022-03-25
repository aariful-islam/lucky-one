import { useEffect, useState } from 'react';
import Watch from '../Watch/Watch';
import './Shop.css'

const Shop = () => {
    const [watches, setWatches]=useState([])
    useEffect( ()=>{
        fetch('watch.json')
        .then(res=>res.json())
        .then(data=>setWatches(data))
    },[])
    
    
    return (

        <div>
            <h1 className='header'>Welcome to Smart Watch Shop </h1>
            <div className='shop'>
            <div className='watch'>
                {
                    watches.map(watch=> <Watch
                    watch={watch}
                    key={watch.id}
                    ></Watch>)
                }
                
            </div>
            <div className='cart'>
                <h3>Your Orders</h3>

            </div>

            </div>

            
            
        </div>
    );
};

export default Shop;