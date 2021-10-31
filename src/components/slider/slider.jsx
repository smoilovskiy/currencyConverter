import React from "react";
import { Carousel } from "react-responsive-carousel";
import './slider.scss'


// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
  <Carousel
    autoPlay={true}
    showStatus={false}
    showThumbs={false}
  >

    <div className='slide1'>
      <div className='slide1__inner'>

        <div className='slide1__container--img1'>
          <img className='slide1__img1' alt="white-card" src="img/white-card.png" />
        </div>
        <div className='slide1__container--img2'>
          <img className='slide1__img2' alt="black-card" src="img/black-card.png" />
        </div>

        <p className='slide1__title'>Лига Банк</p>
        <p className='slide1__subtitle'>Кредиты на любой случай</p>
        <a className='slide1__link' href='##'>Рассчитать кредит</a>
      </div>
    </div>

    <div className='slide2'>
      <img alt="slide2" src="img/slide2-bg.jpg" />
      <p className='slide2__title'>Лига Банк</p>
      <p className='slide2__subtitle'>Ваша уверенность в завтрашнем дне</p>
    </div>

    <div className='slide3'>
      <img alt="slide3" src="img/slide3-bg.jpg" />
      <p className='slide3__title'>Лига Банк</p>
      <p className='slide3__subtitle'>Всегда рядом</p>
      <a className='slide3__link' href='##'>Найти отделение</a>
    </div>
  </Carousel>
);
