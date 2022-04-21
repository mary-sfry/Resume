import React, { useState } from 'react';
import { useCart } from 'react-use-cart';
import {AddShoppingCart} from '@material-ui/icons';
import { IconButton } from '@material-ui/core';
import { js_number_format } from '../Helper/helperFunctions';

const MenuItem = ({ item }) => {
  const { addItem } = useCart()
  return (
    <div className='MenuItem'>
        <img className='MenuItem__pic' src={item.image} alt={item.name} title={item.name} />
        <div className='MenuItem__content'>
            <p className='MenuItem__name'>{item.name}</p>
            <p className='MenuItem__desc'>{item.description}</p>
            <p className='MenuItem__price'>{js_number_format(item.price)} تومان</p>
            <div className='MenuItem__addbtn'>
                <IconButton aria-label="" onClick={() => addItem(item)}><AddShoppingCart /></IconButton>
            </div>
        </div>
    </div>
  )
}

export default MenuItem