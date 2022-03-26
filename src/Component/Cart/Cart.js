import React from 'react';


const Cart = (props) => {

    const {name}=props.cart
    
    
    

    
    return (
        <div>
             <div className='cart'>
            
              <h3>{name}</h3>
           
            </div>
        

        </div>
       
    );
};

export default Cart;