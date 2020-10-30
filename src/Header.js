
import React from 'react';
import './Header.css' ;
import SearchIcon from '@material-ui/icons/Search';
import { ShoppingBasket } from '@material-ui/icons';
import { Link } from 'react-router-dom' ;
import { useStateValue } from './StateProvider';

function Header() {

   const[{basket}, dispatch]=useStateValue();
    return (
        <div className="header">
          <Link to="/">
           <img  className="header_logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="no Image"/> 
            </Link>

           <div
           className="header_search">
               <input className="header_searchInput" type="Text" />
               <SearchIcon className="header_searchIcon" /> 
          </div> 

                   

             <div className="header_nav">

             <Link to="/login">
               <div className="header_option">
             <span className="header_lineone" >Hello Guest</span>
             <span className="header_linetwo" >Sign In</span>
             </div>
             </Link> 
      

           <div className="header_option">
           <span className="header_lineone" >Returns</span>
           <span className="header_linetwo" >Orders</span>
           </div>
           
           <div className="header_option">
           <span className="header_lineone" >Your</span>
           <span className="header_linetwo" >prime</span>
           </div>
           
           <Link to="/checkout">
           <div className="header_optionBasket">
             <ShoppingBasket />
    <span className="header_linetwo header_basketCount">{basket?.length}</span>
           </div>
           </Link>

          </div>
        </div>
    )
}

export default Header
