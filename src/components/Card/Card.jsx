import React from 'react';
import { Grid } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import { useCart } from "react-use-cart";
import { js_number_format } from '../Helper/helperFunctions';

import { pasta } from '../../components';

const Card = ({  product }) => {
    const {addItem} = useCart();
    
  return (
    <Grid item xs={12} sm={12} md={6} lg={3} className='card'>
        <div className='card__con'>
            <div className='card__pic'>
                <img src={product.image} alt={product.name} title={product.name} />
            </div>
            <div className='card__content'>
                <p>{product.name}</p>
                <p>{js_number_format(product.price)} تومان</p>
                <button className='add-to-cart' onClick={() => addItem(product)}>
                    <AddShoppingCart />&nbsp; افزودن به سبد خرید
                </button>
            </div>
        </div>
    </Grid>
  )
}

export default Card