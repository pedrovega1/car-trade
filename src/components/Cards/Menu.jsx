import React from "react";
import { Link } from "react-router-dom";
function Menu() {
  return (
    <div className="hidden lg:flex md:flex-col xl:flex-row lg:flex-row justify-between text-base font-medium text-[#404040]  overflow-y-auto ">
      {/* Section 1: Популярные модели, Весь каталог, Как мы работаем */}
      <div className="flex items-center  xl:mb-0 lg:mb-0 mb-2 ">
        <div className="rounded-l-full border-r border-solid bg-white border-gray-300  shadow-inner hover:bg-black hover:text-white cursor-pointer px-2 py-2 lg:px-4 xl:px-4">
          Популярные модели
        </div>
        <Link to="/catalog">
          {" "}
          <div className="border-r border-solid border-gray-300 bg-white  shadow-inner px-2 py-2 lg:px-4 xl:px-4 hover:bg-black hover:text-white cursor-pointer">
            Весь каталог
          </div>
        </Link>

        <div className="rounded-r-full text-center bg-white  px-1 py-2   shadow-inner  lg:px-4 hover:bg-black hover:text-white cursor-pointer">
          Как мы работаем
        </div>
      </div>

      {/* Section 2: О компании, Отзывы, Поиск */}
      <div className=" flex items-center ">
        <div className="rounded-l-full border-r border-solid bg-white border-gray-300  shadow-inner px-2 py-2 lg:px-4 xl:px-4 hover:bg-black hover:text-white cursor-pointer">
          О компании
        </div>
        <div className="border-r border-solid bg-white border-gray-300 text-center  shadow-inner px-2 py-2 lg:px-4 xl:px-4 hover:bg-black hover:text-white cursor-pointer">
          Отзывы
        </div>
        <div>
          <input
            type="search"
            placeholder="Поиск"
            className="rounded-r-full text-center bg-white  shadow-inner px-2 py-2 lg:px-12 xl:px-12 focus:outline-none cursor-text"
          />
        </div>
      </div>
    </div>
  );
}

export default Menu;
