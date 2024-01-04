import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// IndividualCar component for rendering each car image
const IndividualCar = ({ src, alt }) => (
  <div className="flex justify-center items-center">
    <img src={src} alt={alt} className="w-full h-auto px-2 rounded-xl" />
  </div>
);

const IndividualCarInfo = ({ model, price }) => (
  <div className="text-center">
    <p className="text-base text-neutral-900">{model}</p>
    <p className="font-semibold  text-neutral-900">{price}</p>
  </div>
);

function SliderCarModel() {
  const mainSliderRef = useRef(null);
  const navSliderRef = useRef(null);

  const carImages = [
    {
      src: "/img/models/car2.png",
      alt: "Car 2",
      model: "Kia K5 2.0 LPI AT Deluxe",
      price: "$30,000",
    },
    {
      src: "/img/models/car3.png",
      alt: "Car 3",
      model: "Kia K5 2.0 LPI AT Deluxe",
      price: "$40,000",
    },
    {
      src: "/img/models/car4.png",
      alt: "Car 4",
      model: "Model 4",
      price: "$50,000",
    },
    {
      src: "/img/models/car6.png",
      alt: "Car 6",
      model: "Kia K5 2.0 LPI AT Deluxe",
      price: "$60,000",
    },
  ];

  const mainSliderSettings = {
    infinite: true,
    dots: true,
  
    centerPadding: "30px",
    slidesToShow: 3,
    focusOnSelect: true,
    speed: 500,
    arrows: false,
    afterChange: (current) => {
      if (navSliderRef.current) {
        navSliderRef.current.slickGoTo(current);
      }
    },
    responsive: [
      {
        breakpoint: 640, // Добавлен новый breakpoint для планшетов менее 600px
        settings: {
          slidesToShow: 1, // Показывать только 1 слайд на планшетах менее 600px
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1368,
        settings: {
          slidesToShow: 4,
        },
      },
    ],
  };

  const navSliderSettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: mainSliderRef.current,
    focusOnSelect: true,
    arrows: false,
  };

  const next = () => {
    if (mainSliderRef.current) {
      mainSliderRef.current.slickNext();
    }
  };

  const previous = () => {
    if (mainSliderRef.current) {
      mainSliderRef.current.slickPrev();
    }
  };

  return (
    <div className="mt-8 p-8 shadow-xl rounded-xl ">
      <h2 className="text-xl md:text-2xl">
        Популярные
        <br /> модели
      </h2>
      <div className="flex flex-col md:flex-row mt-8 max-w-screen-2xl  mx-auto">
        {/* Navigation Slider */}
        <div className="md:w-1/2 lg:w-1/3 xl:w-1/4 md:block hidden">
          <Slider ref={navSliderRef} {...navSliderSettings} className="">
            {carImages.map((car, index) => (
              <div key={index}>
                <div className="flex items-center ">
                  <IndividualCar {...car} />
                </div>
                <div className="w-1/4 flex  ">
                  <IndividualCarInfo {...car} />
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Main Slider */}
        <div className="md:w-1/2 xl:w-2/3  lg:w-2/4 relative">
          <div className="absolute -top-8 right-0 z-50">
            <button className="button px-2" onClick={previous}>
              <img src="/svg/leftarrow.svg" alt="Previous" />
            </button>
            <button className="button px-2" onClick={next}>
              <img src="/svg/rightarrow.svg" alt="Next" />
            </button>
          </div>

          <Slider ref={mainSliderRef} {...mainSliderSettings}>
            {/* Map through carImages array to generate slides dynamically */}
            {carImages.map((car, index) => (
              <div key={index}>
                <div className="">
                  <IndividualCar {...car} />
                </div>
                <div className="">
                  <IndividualCarInfo {...car} />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default SliderCarModel;
