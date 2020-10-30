import React from 'react' ;
import './Product.css' ;
import Home from "./Home";
import { useStateValue } from './StateProvider';
import  reducer from './reducer.js' ;

function Product({id,title,image,price,rating}) {
    // set all dispatch(like id,title,image,price,rating ) data to basket
    const[{basket}, dispatch]=useStateValue();
    
    console.log('this is a basket',basket)
    const addToBasket = () =>{  
                       dispatch({
                           type:'ADD_To_Basket',
                           item:{
                               id:id,
                               title:title,
                               image:image,
                               price:price,
                               rating:rating,
                           },
 
                                   });
    }
    return (
        <div className="product" >
            <div className="product_info">
                  <p>{title}</p>
                 <p className='product_price'>
                    <small>$</small>
                    <strong>{price}</strong>
                 </p>
                 <div className="porduct_star">
                     {Array(rating).fill().map(( _, i ) =>( <p>⭐</p> ))}
                    
                 </div>
            </div>

               <img  src={image} /> 
               <button onClick={addToBasket}>Add to Basket</button>

                 

           
        </div>
    );
}

export default Product
