import React from 'react';
import { Grid } from '@material-ui/core';
import { useCart } from 'react-use-cart';
import { js_number_format } from '../Helper/helperFunctions';
import { Link } from 'react-router-dom';

const Cart = () => {


  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart
  } = useCart()


  if(isEmpty) return (
    <Grid container className='screenCenterFix'>
      <Grid item xs={11} sm={11} md={8} lg={8} className='GridX'>
        <div className='empty-cart'>
          <h1>سبد خرید شما خالی است</h1>
          <p>شما می توانید یک یا چند سفارش را به سبد خرید خود اضافه کنید. 
            <Link className='link' to="/">(افزودن سفارش)</Link>
          </p>
        </div>
      </Grid>
    </Grid>
)
  return (
    <Grid container className='main costumizeCart'>
      
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <h1 className='title'>
          <span>سبد خرید شما</span>
        </h1>
      </Grid>
      {
        items.map((item)=>(
          <Grid item xs={12} sm={6} md={4} lg={4} className='cart-con'>
            <div className='cart'>
            <span className='cart__del' onClick={() =>removeItem(item.id)}>×</span>
              <div className='cart__pic-con'>
                <img className='cart__pic' src={item.image} alt="pasta" />
              </div>
              <div className='cart__content'>
                <p className='cart__name'>{item.name}</p>
                <small>{item.description}</small>
                <div className='cart__action'>
                  <div className='cart__price'>
                    <span>{js_number_format(item.quantity * item.price)} تومان</span>
                  </div>
                  <div className='cart__number'>
                    <button onClick={() => updateItemQuantity(item.id , item.quantity - 1)}>-</button>
                    <input type="text" disabled value={item.quantity} />
                    <button onClick={() => updateItemQuantity(item.id , item.quantity + 1)}>+</button>
                  </div>
                </div>
              </div>
            </div>
          </Grid>
        ))
      }
      <Grid container className='cart__fixedBox'>
        <Grid item xs={12} sm={6} md={6} lg={6} className='cart__fixedBoxR'>
          <p>مبلغ قابل پرداخت: <span>{js_number_format(cartTotal)} تومان</span></p>
          <small>هزینه ارسال بر اساس آدرس، زمان تحویل، وزن و حجم مرسوله محاسبه می شود.</small>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6} className='cart__fixedBoxL'>
          <div>
            <button className='btn-success' onClick={()=> emptyCart()}>خالی کردن سبد خرید</button>
            <button className='btn-danger'>پرداخت</button>
          </div>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Cart