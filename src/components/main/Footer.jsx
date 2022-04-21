import React from 'react';
import { FaLinkedinIn, FaInstagram, FaGithub, FaRedditAlien } from "react-icons/fa";
import { Grid, IconButton, Divider } from '@material-ui/core';
import { arrow, delivery, prepare, order } from '../../components';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
      <Grid container>
          <Grid container className='footerUp'>
                <Grid item xs={12} sm={12} md={6} lg={4} className='service'>
                    <div>
                        <div>
                            <img src={order} alt="" />
                            <p className='service__title'>سفارش از منو</p>
                        </div>
                        <div>
                            <img className='service__arrow' src={arrow} alt="" />
                        </div>
                    </div>
                    <p>
                    در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                    </p>
                </Grid>

                <Grid item xs={12} sm={12} md={6} lg={4} className='service' >
                    <div>
                        <div>
                            <img src={prepare} alt="" />
                            <p className='service__title'>آماده سازی غذا</p>
                        </div>
                        <div>
                            <img className='service__arrow' src={arrow} alt="" />
                        </div>
                    </div>
                    <p>
                    در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                    </p>
                </Grid>

                <Grid item xs={12} sm={12} md={6} lg={4} className='service' >
                    <div>
                        <div>
                            <img src={delivery} alt="" />
                            <p className='service__title'>تحویل اکسپرس</p>
                        </div>
                    </div>
                    <p>
                    در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                    </p>
                </Grid>
          </Grid>
          <Grid container className='footerDown'>
            <Grid item xs={9} sm={8} md={7} lg={3} className='footerDown__con'>
                <IconButton className='footerDown__socialMedia'>
                    <FaLinkedinIn />
                </IconButton>
                <IconButton className='footerDown__socialMedia'>
                    <FaInstagram />
                </IconButton>
                <IconButton className='footerDown__socialMedia'>
                    <FaGithub />
                </IconButton>
                <IconButton className='footerDown__socialMedia'>
                    <FaRedditAlien />
                </IconButton>
            </Grid>
            <Grid container>
                <Grid item xs={11} sm={11} md={8} lg={4} className='footerDown__con'>
                    <span><Link to='/about-us' title='درباره ما'>درباره ما</Link></span>
                    <Divider className='footerDown__divider' orientation="vertical" flexItem />
                    <span><Link to='contact-us' title='تماس با ما'>تماس با ما</Link></span>
                    <Divider className='footerDown__divider' orientation="vertical" flexItem />
                    <span><Link to='FAQ' title='سوالات متداول'>سوالات متداول</Link></span>
                    <Divider className='footerDown__divider' orientation="vertical" flexItem />
                    <span><Link to='blog' title='وبلاگ'>وبلاگ</Link></span>
                </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} className='footerDown__copyRight'>
                <p>غذای سالم و خوشمزه درب منزل شما!</p>
                <p>استفاده از مطالب وب سایت فقط برای مقاصد غیرتجاری و با ذکر منبع و لینک بلامانع است. کلیه حقوق این سایت محفوظ هست.</p>
            </Grid>
          </Grid>
      </Grid>
  )
}

export default Footer