import { v4 as uuidv4 } from 'uuid';
import pasta from './assets/images/meals/pasta.png';
import Burger from './assets/images/icons/Burger.png';
import Cafe from './assets/images/icons/Cafe.png';
import Soup from './assets/images/icons/Soup.png';
import Pizza from './assets/images/icons/Pizza.png';
import desert from './assets/images/icons/desert.png';
import International from './assets/images/icons/International.png';
import Fried from './assets/images/icons/Fried.png';
import soupfood from './assets/images/icons/soup-food.png';
import seafood from './assets/images/icons/sea-food.png';
import fastfood from './assets/images/icons/fast-food.png';
//deseret
import cake from './assets/images/New folder/cake.png';

//soup
import mashroom from './assets/images/meals/soup/mashroom-soup.png';
import tomato from './assets/images/meals/soup/tomato-soup.png';
import milk from './assets/images/meals/soup/milk-soup.png';
import rice from './assets/images/meals/soup/rice-soup.png';

//cafe
import coffee from './assets/images/meals/desert/coffee.png';

//fried

import friedChicken from './assets/images/meals/fried/fried-chicken.png';


const data = {
    menuTitle : [
        {id: uuidv4(), menuTitle: "دسر", icon: Cafe},
        {id: uuidv4(), menuTitle: "سوپ", icon: "", icon: Soup},
        {id: uuidv4(), menuTitle: "دریایی", icon: "", icon:International},
        {id: uuidv4(), menuTitle: "سوخاری", icon: "", icon: Fried},
        {id: uuidv4(), menuTitle: "پیتزا", icon: "", icon: Pizza},
        {id: uuidv4(), menuTitle: "ساندویچ", icon: "", icon: Burger},
    ],
    desertArr : [
        {id: uuidv4(), name: 'کیک هویج', description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ', price: '25000', image: pasta},
        {id: uuidv4(), name: 'اسموتی آناناس', description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ', price: '32000', image: pasta},
        {id: uuidv4(), name: 'شیک قهوه', description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ', price: '35000', image: pasta},
        {id: uuidv4(), name: 'بستنی سنتی', description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ', price: '24000', image: pasta},
    ],
    soupArr : [
        {id: uuidv4(), name: 'سوپ گوجه', description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ', price: '60000', image: tomato},
        {id: uuidv4(), name: 'سوپ قارچ', description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ', price: '58000', image: mashroom},
        {id: uuidv4(), name: 'سوپ شیر', description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ', price: '75000', image: milk},
        {id: uuidv4(), name: 'سوپ برنج و سبزیجات', description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ', price: '65000', image: rice},
    ],
    italianArr : [
        {id: uuidv4(), name: 'بشقاب دریایی', description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ', price: '80000', image: pasta},
        {id: uuidv4(), name: 'شاه میگو کبابی', description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ', price: '16000', image: pasta},
        {id: uuidv4(), name: 'ماهی سالمون گریل شده', description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ', price: '17000', image: pasta},
        {id: uuidv4(), name: 'شنیسل شیرماهی', description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ', price: '18000', image: pasta},
    ],
    friedArr : [
        {id: uuidv4(), name: 'مرغ سوخاری', description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ', price: '80000', image: friedChicken},
        {id: uuidv4(), name: 'پیاز سوخاری', description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ', price: '16000', image: pasta},
        {id: uuidv4(), name: 'سیب زمینی سوخاری', description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ', price: '17000', image: pasta},
        {id: uuidv4(), name: 'قارچ سوخاری', description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ', price: '18000', image: pasta},
    ],
    pizzaArr : [
        {id: uuidv4(), name: 'پیتزا پپرونی', description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ', price: '80000', image: pasta},
        {id: uuidv4(), name: 'پیتزا مخلوط', description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ', price: '16000', image: pasta},
        {id: uuidv4(), name: 'پیتزا گوشت و قارچ', description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ', price: '17000', image: pasta},
        {id: uuidv4(), name: 'پیتزا رست بیف', description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ', price: '18000', image: pasta},
    ],
    BurgerArr : [
        {id: uuidv4(), name: 'هات داگ تنوری', description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ', price: '80000', image: pasta},
        {id: uuidv4(), name: 'همبرگر ویژه', description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ', price: '16000', image: pasta},
        {id: uuidv4(), name: 'چیزبرگر با قارچ', description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ', price: '17000', image: pasta},
        {id: uuidv4(), name: 'مغز و زبان', description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ', price: '18000', image: pasta},
    ],
    mostChoosen : [
        {id: uuidv4(), name: 'فست فود', image: fastfood},
        {id: uuidv4(), name: 'دریایی', image: seafood},
        {id: uuidv4(), name: 'سوپ', image: soupfood},
        {id: uuidv4(), name: 'دسر', image: desert}
    ],
    fastfoodArr : [
        {id: uuidv4(), name: 'پیتزا رست بیف', description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ', price: 78000, image: pasta},
        {id: uuidv4(), name: 'مرغ سوخاری', description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ', price: 125000, image: pasta},
        {id: uuidv4(), name: 'همبرگر ویژه', description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ', price: 552000, image: pasta},
        {id: uuidv4(), name: 'چیزبرگر با قارچ', description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ', price: 1250000, image: pasta},
      ],
    seafoodArr : [
        {id: uuidv4(), name: 'بشقاب دریایی', description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ', price: 78000, image: pasta},
        {id: uuidv4(), name: 'شاه میگو کبابی', description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ', price: 125000, image: pasta},
        {id: uuidv4(), name: 'ماهی سالمون گریل شده', description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ', price: 552000, image: pasta},
        {id: uuidv4(), name: 'شنیسل شیرماهی', description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ', price: 1250000, image: pasta},
    ],
    soupfoodArr : [
        {id: uuidv4(), name: 'سوپ گوجه', description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ', price: 78000, image: pasta},
        {id: uuidv4(), name: 'سوپ قارچ', description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ', price: 125000, image: pasta},
        {id: uuidv4(), name: 'سوپ شیر', description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ', price: 552000, image: pasta},
        {id: uuidv4(), name: 'سوپ برنج و سبزیجات', description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ', price: 1250000, image: pasta},
      ],
    desertfoodArr : [
        {id: uuidv4(), name: 'کیک هویج', description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ', price: 78000, image: pasta},
        {id: uuidv4(), name: 'اسموتی آناناس', description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ', price: 125000, image: pasta},
        {id: uuidv4(), name: 'شیک قهوه', description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ', price: 552000, image: pasta},
        {id: uuidv4(), name: 'بستنی سنتی', description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ', price: 1250000, image: pasta},
    ],
    
}
export default data;