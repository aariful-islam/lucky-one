import { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';



import Watch from '../Watch/Watch';
import './Shop.css'

const Shop = () => {
    const [watches, setWatches] = useState([])
    const [cart, setCart] = useState([])
    


    
    

    useEffect(() => {
        fetch('watch.json')
            .then(res => res.json())
            .then(data => setWatches(data))
    }, [])

    const handleAddToCart = (watch) => {
        const newcart = [...cart, watch]
        
        setCart(newcart);
    }
    const abc=()=>{
       const newcart=cart
        const names=(newcart.map(newName=>newName.name))
        const a= names[Math.floor(Math.random()*names.length)];
        
        console.log(a)
       // return a;
    }
    
   
  const resetCart=document.getElementById('cart')
  const reset=()=>{
      resetCart.innerHTML='';
  }


    return (

        <div>
            <h1 className='header'>Welcome to Smart Watch Shop </h1>
            <div className='shop'>
                <div className='watch'>
                    {
                        watches.map(watch => <Watch
                            watch={watch}
                            key={watch.id}
                            handleAddToCart={handleAddToCart}
                           
                        ></Watch>)
                    }
                    

                </div>
                <div className='cart'>
                <h1 style={{ color: "blue" }}>Your Orders</h1>
                    <div id='cart'>
                    
                    {
                        cart.map(singleCart => <Cart
                            cart={singleCart}
                            key={singleCart.id}
                            name={singleCart.name}
                        

                        ></Cart>)
                    }
                   

                    </div>
                    
                    
                    
                    
                    <button onClick={abc}> 
                        <p>Choose one watch</p>
                    </button> <br />
                    <button onClick={reset}>
                        <p>RESET Item</p>
                    </button>

                </div>

            </div>



        </div>
    );
    
    
};



export default Shop;