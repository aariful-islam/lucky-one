import { useEffect, useState } from 'react';
import Watch from '../Watch/Watch';
import './Shop.css'

const Shop = () => {
    const [watches, setWatches]=useState([])
    const [cart,setCart]=useState([])
    useEffect( ()=>{
        fetch('watch.json')
        .then(res=>res.json())
        .then(data=>setWatches(data))
    },[])
    
    const handleAddToCart=(watch)=>{
        const newcart=[...cart,watch]
        
        setCart(newcart);
        console.log(cart)

    }
    
    return (

        <div>
            <h1 className='header'>Welcome to Smart Watch Shop </h1>
            <div className='shop'>
            <div className='watch'>
                {
                    watches.map(watch=> <Watch
                    watch={watch}
                    key={watch.id}
                    handleAddToCart={handleAddToCart}
                    ></Watch>)
                }
                
            </div>
            <div className='cart'>
                <h3>Your Orders</h3>
                {
                    cart.map(c=> <h4>{c.name}</h4>)
                }

            </div>

            </div>

            
            
        </div>
    );
};

export default Shop;