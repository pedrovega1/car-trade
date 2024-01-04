import React from "react";
import SliderCarModel from "../SliderCarModel";
import MainCards from "../Cards/MainCards";
import Contact from "../Cards/Contact";
import AllModels from "../Cards/AllModels";
import ShowCar from "../Cards/ShowCar";
import { Link } from "react-router-dom";
import Menu from "../Cards/Menu";
function Main() {
  return (
    <>
      <div className="max-w-[1840px] mx-auto p-3 mt-6 whitespace-nowrap  font-sans  ">
        <Menu/>

        <div className="mt-4 relative ">
          <img
            src="/img/main.png"
            className="object-cover shadow-inner  rounded-lg xl:w-full lg:w-full h-96 "
            alt="Main Image"
          />
            <h1 className="absolute bottom-4 left-4 transform font-bold xl:text-6xl lg:text-3xl md:text-2xl text-xl text-white">
            Перевозим автомобили <br /> из Южной Кореи
          </h1>
        </div>

        <div className="mt-8 ">
          <h2 className="text-2xl md:text-4xl ">
            Почему выгодно купить <br /> корейские автомобили <br /> у нашей
            компании?
          </h2>
        </div>

        <MainCards />
        {/* Обратная связь */}
        <div className="mt-24 mb-8 ">
          <h2 className="text-2xl md:text-4xl ">
            Свяжитесь с нами <br /> прямо сейчас
          </h2>
        </div>

        <Contact />
        {/* Обратная связь */}

        {/* ПОПУЛЯРНЫЕ МОДЕЛИ СЛАЙДЕР */}

        <div className="">
          <div className="mt-24 mb-24 ">
            <SliderCarModel />
          </div>
        </div>

        {/* ПОПУЛЯРНЫЕ МОДЕЛИ СЛАЙДЕР */}

        <div>
          <div className="mt-24 mb-24">
            <div className="flex flex-col ">
              <h2 className="text-xl md:text-2xl">Все модели</h2>
              <AllModels />
            </div>
          </div>
        </div>
        {/* ПОПУЛЯРНЫЕ МОДЕЛИ СЛАЙДЕР */}

        {/* Машины все */}
        <div>
          <ShowCar />
        </div>
      </div>
    </>
  );
}

export default Main;
