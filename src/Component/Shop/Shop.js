import { useEffect, useState } from 'react';

import Cart from '../Cart/Cart';



import Watch from '../Watch/Watch';
import './Shop.css'

const Shop = () => {
    const [watches, setWatches] = useState([])
    const [cart, setCart] = useState([])
    const [random,setRandom]=useState([])
    

    useEffect(() => {
        fetch('watch.json')
            .then(res => res.json())
            .then(data => setWatches(data))
    }, [])

    const handleAddToCart = (watch) => {
        
     const newcart = [...cart, watch]
       
        setCart(newcart);
    }
    const handleRandom=()=>{
       const newcart=cart
        const names=(newcart.map(newName=>newName.name))
        const randomWatch= names[Math.floor(Math.random()*names.length)];
        setRandom(randomWatch);
       
    }
    
   
  
  const reset=()=>{
      //resetCart.innerHTML='';
       setCart([])
       setRandom([])
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
                    
                    
                    
                    
                    <button onClick={handleRandom}> 
                        <p>Choose one watch</p>
                    </button> <br />
                    <h1> 
                    {random}

                    </h1>    
                    <button onClick={reset}>
                        <p>RESET Item</p>
                    </button>

                </div>

            </div>
            <h1>How react works?</h1>
            <p>
                Answer: React is a javascript library and it uses for building usuer interface. React basically maintains a tree and this tree is able to do efficient diff computations on the nodes. In react every compents return JSX and its syntex is similiar to html but not real html. We can write javascript code with {} within jsx. React main virtual dom and when we want to change dom element ,react just rerender the elements which we want to change, react don't rerender the whole dom. For this website run faster.
            </p>
            <h1>State vs Props</h1>
                    <p>Answe :In state We can define state in the component itself , In props we can pass properties from parent component.
                        State are mututable and props are immutable.
                        State change can be asynchronus, props are read only.
                        State can not be accessed by child component, and props can be asccessed by child component.
                        State can not make component reuseable, props make component reuseable.
                        State can be modified using setState, props can not be modified.
                    </p>
              



        </div>
    );
    
    
};



export default Shop;