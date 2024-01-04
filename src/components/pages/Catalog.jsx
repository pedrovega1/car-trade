import React from "react";
import { Link } from "react-router-dom";
import Menu from "../Cards/Menu";
import SliderCarModel from "../SliderCarModel";
import AllModels from "../Cards/AllModels";
import ShowCar from "../Cards/ShowCar";
function Catalog() {
  return (
    <div className="max-w-[1840px] mx-auto p-3 mt-6 whitespace-nowrap  font-sans ">
      <Menu />

      <div className="mt-12 relative ">
        <img
          src="/img/catalog.png"
          className="object-cover shadow-inner  rounded-lg h-96 w-full  "
          alt="Main Image"
        />
        <h1 className="absolute bottom-4 left-4 transform font-semibold xl:text-6xl lg:text-3xl md:text-2xl text-lg text-white whitespace-pre-line">
          Откройте каталог автомобилей
          <br /> прямо сейчас!
        </h1>
      </div>

      <div className="">
        <div className="mt-24 mb-24 ">
          <SliderCarModel />
        </div>
      </div>

      <div>
        <div className="mt-24 mb-24">
          <div className="flex flex-col ">
            <h2 className="text-xl md:text-2xl">Все модели</h2>
            <AllModels />
          </div>
        </div>
      </div>

      <div>
        <ShowCar />
      </div>
    </div>
  );
}

export default Catalog;
