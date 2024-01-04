import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// IndividualCar component for rendering each car image
const IndividualCar = ({ src, alt }) => (
  // Inside IndividualCar component
  <div className="flex justify-center items-center">
    <img src={src} alt={alt} className="w-full h-auto px-1 rounded-xl" />
  </div>
);

const IndividualCarInfo = ({ model, price }) => (
  <div>
    <p className="text-sm font-semibold">{model}</p>
    <p className="text-xs text-gray-500">{price}</p>
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
    centerPadding: "80px",
    slidesToShow: 3,
    speed: 500,
    arrows: false,
    afterChange: (current) => {
      if (navSliderRef.current) {
        navSliderRef.current.slickGoTo(current);
      }
    },
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
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
    <div className="mt-8 p-8">
      <h2 className="text-xl md:text-2xl">
        Популярные
        <br /> модели
      </h2>
      <div className="flex flex-row mt-8 w-full">
        {/* Navigation Slider */}А
        <div className="md:w-1/4">
          <Slider ref={navSliderRef} {...navSliderSettings}>
            {carImages.map((car, index) => (
              <div key={index} className="flex">
                <div className="w-3/4">
                  <IndividualCar {...car} />
                </div>
                <div className="w-1/4">
                  <IndividualCarInfo {...car} />
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Main Slider */}
        <div className="md:w-1/2">
          <div style={{ marginTop: "10px" }}>
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
                <IndividualCar {...car} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default SliderCarModel;
