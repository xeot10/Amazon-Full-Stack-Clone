
import Carousel from './carousel';
import ProductCard from './ProductCard';
import AdCard1 from './card1';
import AdCard2 from './card2';
import AdCard3 from './card3';
import PrimeAds from './PrimeAds';
import keyboard from '../images/keyboard.jpg';
import product from '../images/adidas.png';



function Body(){
  return (
    <div className='body__'>
       <Carousel />
      <div className="body__adCards">
      <AdCard1 name={'Manthan'} img1={keyboard}/>
      <AdCard2 title={'from best in the buisness'} link={'#'}/>
      <AdCard3 />
      <AdCard2 title={'apple are best'}/>
      </div>
      <div className="body__adCards2">
      <PrimeAds />
        <div className="body__card2Ads">
          <AdCard2 title={'products you may like'} link="#"/>
          <AdCard3 />
        </div>
      </div>
      <div className="body__adCarousel1">
        <ProductCard pro={product} pro_name={'adidas red blue shoes'} price={'130$'}/>
        <ProductCard pro={product} pro_name={'adidas red blue shoes'} price={'130$'}/>
        <ProductCard pro={product} pro_name={'adidas red blue shoes'} price={'130$'}/>
        <ProductCard pro={product} pro_name={'adidas red blue shoes'} price={'130$'}/>
        <ProductCard pro={product} pro_name={'adidas red blue shoes'} price={'130$'}/>
        <ProductCard pro={product} pro_name={'adidas red blue shoes'} price={'130$'}/>
        <ProductCard pro={product} pro_name={'adidas red blue shoes'} price={'130$'}/>
        <ProductCard pro={product} pro_name={'adidas red blue shoes'} price={'130$'}/>
      </div>
      <div className="body__adCards2">
        <div className="body__card2Ads">
          <AdCard2 title={'products you may like'} link="#"/>
          <AdCard3 />
        </div>
        <PrimeAds />
      </div>
      <div className="body__adCards2">
      <AdCard2/>
      <AdCard2 title={'from best in the buisness'} link={'#'}/>
      <AdCard3 />
      <AdCard2 title={'apple are best'}/>
      </div>
    </div>
  )
}

export default Body;
