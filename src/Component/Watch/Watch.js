import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Watch.css'


const Watch = (props) => {
    const{name,price,img}=props.watch
    const {handleAddToCart}=props;
    return (
        <div className='watchDetails'>
             <img className='watchImage' src={img} alt=""/>
            <h1 className='watchName'>Name : {name}</h1>
           
            <h4 className='watchPrice'>Price: {price}</h4>
            <button onClick={()=>{handleAddToCart(props.watch)}} className='addToCartBtn'>
                <p className='btn-text'>Add to cart</p>
                <span> <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> </span>
            </button>
            
        </div>
    );
};

export default Watch;