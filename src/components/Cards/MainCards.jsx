import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Cards() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    focusOnSelect: true,
    slidesToShow: 3, // По умолчанию 3 карточки на экране
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1440, // Максимальная ширина монитора
        settings: {
          slidesToShow: 3,
          // При 1440 отображать 2 карточки
        },
      },
      {
        breakpoint: 1024, // Максимальная ширина планшета
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          autoplay: true,
        },
      },
      {
        breakpoint: 768, // Максимальная ширина планшета
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          autoplay: true, // При 768 отображать 1 карточку
        },
      },
      {
        breakpoint: 480, // Максимальная ширина мобильного устройства
        settings: {
          slidesToShow: 1,
          autoplay: true, // При мобильном устройстве отображать 1 карточку
        },
      },
    ],
  };

  return (
    <div className="overflow-hidden">
      <Slider {...settings} className="mt-8">
        {/* Card 1 */}
        <div className="relative   px-2 md:px-1 overflow-hidden">
          <img
            src="/img/slider1.png"
            className="object-cover"
            alt="Main Image"
          />
          <div className="absolute top-4 left-4 transform font-medium lg:text-2xl text-lg text-white max-w-full overflow-hidden">
            Приятные цены
          </div>
          <p className="absolute bottom-4 left-4 transform font-medium lg:text-base  text-white max-w-full overflow-hidden whitespace-pre-line">
            Работаем с каждым клиентом индивидуально, анализируя их потребности,
            поможем найти самый подходящий и выгодный для клиента вариант и по
            качеству, и по цене.
          </p>
        </div>

        {/* Card 2 */}
        <div className="relative  px-2 md:px-1 overflow-hidden">
          <img
            src="/img/slider2.png"
            className="object-cover"
            alt="Main Image"
          />
          <div className="absolute top-4 left-4 transform font-medium lg:text-2xl text-lg text-white max-w-full overflow-hidden">
            Наличие опыта
          </div>
          <p className="absolute bottom-4 left-4 transform font-medium lg:text-base  text-white max-w-full overflow-hidden whitespace-pre-line">
            За 4 лет своей деятельности мы продали более +4000 автомобилей
            разных марок: Rolls- Royce, Bentley (Continental, Bentayga), Range
            Rover, Mercedes Benz, Toyota, Hyundai, Kia, BMW, Genesis.
          </p>
        </div>

        {/* Card 3 */}
        <div className="relative px-2 md:px-1 overflow-hidden">
          <img
            src="/img/slider3.png"
            className="object-cover"
            alt="Main Image"
          />
          <div className="absolute top-4 left-4 transform font-medium lg:text-2xl text-lg text-white max-w-full overflow-hidden ">
            Специальные условия
          </div>
          <p className="absolute bottom-4 left-4 transform font-medium lg:text-base  text-white max-w-full overflow-hidden whitespace-pre-line">
            Доставим ваш автомобиль за 20-30 дней в любую 
            точку РК, офис находится в городе Алматы, что 
            выгодно растаможить и поставить на учёт.
          </p>
        </div>
      </Slider>
    </div>
  );
}

export default Cards;
