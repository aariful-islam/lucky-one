import React from 'react';
import './Watch.css'

const Watch = (props) => {
    const{name,price,img}=props.watch
    return (
        <div className='watchDetails'>
             <img className='watchImage' src={img} alt=""/>
            <h1 className='watchName'>Name : {name}</h1>
           
            <h4 className='watchPrice'>Price: {price}</h4>
            <button className='addToCartBtn'>
                <p>Add to cart</p>
            </button>
            
        </div>
    );
};

export default Watch;