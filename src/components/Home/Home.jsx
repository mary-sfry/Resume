import React, {useState} from 'react';
import { Grid } from '@material-ui/core';
import { bg } from '../../components';
import { MenuTitle, Footer, Card, Menu } from '../../components';
import data from '../../data';

const Home = () => {
    const [mainItem, setMainItemArr] = useState(data.desertArr);
    const [MostChoosenArr, setMostChoosenArr] = useState(data.fastfoodArr);
    const [selectedMenuItem , setselectedMenuItem] = useState('دسر');
    const [selectedMostChoosen , setselectedMostChoosen] = useState('فست فود');
    
    const mainItemHandler = (item) => {
        switch(item.menuTitle){
            case "دسر":
                setMainItemArr(data.desertArr);
                setselectedMenuItem('دسر');
                break;
            case "سوپ":
                setMainItemArr(data.soupArr);
                setselectedMenuItem('سوپ');
                break;
            case "دریایی":
                setMainItemArr(data.italianArr);
                setselectedMenuItem('دریایی');
                break;
            case "سوخاری":
                setMainItemArr(data.friedArr);
                setselectedMenuItem('سوخاری');
                break;
            case "پیتزا":
                setMainItemArr(data.pizzaArr);
                setselectedMenuItem('پیتزا');
                break;
            case "ساندویچ":
                setMainItemArr(data.BurgerArr);
                setselectedMenuItem('ساندویچ');
                break;
        }
    }

    const MostChoosenHandler = (item) => {
        switch(item){
            case "فست فود":
                setMostChoosenArr(data.fastfoodArr);
                setselectedMostChoosen('فست فود');
                break;
            case "دریایی":
                setMostChoosenArr(data.seafoodArr);
                setselectedMostChoosen('دریایی');
                break;
            case "سوپ":
                setMostChoosenArr(data.soupfoodArr);
                setselectedMostChoosen('سوپ');
                break;
            case "دسر":
                setMostChoosenArr(data.desertfoodArr);
                setselectedMostChoosen('دسر');
                break;
        }
    }


  return (
      <main>
          <Grid container className="main">
            <Grid item xs={12} sm={12} md={12} lg={6} className='Homebanner-R' >
                <div>
                    <p> خوش آمدید</p>
                    <h1> سفارش آنلاین غذا </h1>
                    <p>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.                
                    </p>
                    <a id='orders' href='#orders' title='ثبت سفارش' className='addbtn'>ثبت سفارش</a>
                </div>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={6} className='Homebanner-L'>
                <img src={bg} alt="سفارش آنلاین غذا" title='سفارش آنلاین غذا' />
            </Grid>

            <Grid container className='menuTitle-box'>
                {
                    data.menuTitle.map((item) => (
                        <Grid item key={item.id} xs={4} sm={6} md={4} lg={2} align="center"
                        onClick={() => mainItemHandler(item)}>
                            <MenuTitle item={item} selectedMenuItem={selectedMenuItem}/>
                        </Grid>
                    ))
                }
            </Grid>

            <Menu mainItemArr={mainItem} />
        
            <Grid className='most-choosen' item xs={12} sm={12} md={4} lg={4} >
                <p className='most-choosen__title'>پرطرفدارهای هفته گذشته</p>
                <Grid container>
                    {
                        data.mostChoosen.map((item)=>(
                            <Grid item xs={3} sm={3} md={3} lg={3} className='most-choosen__box'
                            onClick={()=>MostChoosenHandler(item.name)} key={item.id}>
                                <img src={item.image} alt={item.name} title={item.name} />
                                <p className={`most-choosen__item ${selectedMostChoosen == item.name ? 'most-choosen__active' : '' }`}>{item.name}</p>
                            </Grid>
                        ))
                    }
                </Grid>
            </Grid>

            <Grid container className='most-choosen__content'>
                {
                    MostChoosenArr.map((product)=>(
                        <Card key={product.id} product={product} />
                    ))
                }
            </Grid>
            <Footer />
        </Grid>
      </main>
  )
}

export default Home;