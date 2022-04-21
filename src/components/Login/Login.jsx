import React from 'react';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <Grid container className='screenCenterFix'>
      <Grid item xs={11} sm={5} md={4} lg={3} className='GridX'>
        <div className='login'>
          <h1><Link to="/" style={{color: 'black'}}>logo</Link></h1>
          <h3>ورود | ثبت نام</h3>
          <small>سلام!</small> <br />
          <small>لطفا شماره موبایل یا ایمیل خود را وارد کنید</small>
          <div>
            <input className='login__input' type="text" />
            <input className='login__btn' type='button' value="ورود" />
          </div>
          <p>با ورود به دیجی کالا <span className='link'>شرایط</span> و <span className='link'>حریم خصوصی</span> را می پذیرم</p>
        </div>
      </Grid>
    </Grid>
  )
}

export default Login