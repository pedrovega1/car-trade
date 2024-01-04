import React, { useState } from "react";
import "../../App.css";
function AllModels() {
  const [value, setValue] = useState(50); // начальное значение
  const [showFilters, setShowFilters] = useState(false);

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  return (
    <div className="p-2">
      <div className="flex flex-col">
        {/* Mobile: Burger Icon */}
        <div className="lg:hidden flex justify-end">
          <button className="text-xl text-black p-2" onClick={toggleFilters}>
            ☰
          </button>
        </div>
        {showFilters && (
          <div className="transition-all duration-300 ease-in-out">
            <div className="flex flex-col  items-center gap-6">
              <div className="grid grid-cols-3 gap-4">
                <div className="mb-4 md:mb-0">
                  <label className="block mb-2 text-neutral-700 md:text-base text-sm font-normal">
                    Марка
                  </label>
                  <select className="block w-full p-2.5 rounded-full shadow-lg bg-[#fffffff1] text-[#40404080]">
                    <option selected>KIA</option>
                    <option value="US">United States</option>
                  </select>
                </div>
                <div className="mb-4 md:mb-0">
                  <label className="block mb-2 text-neutral-700 md:text-base text-sm font-normal">
                    Модель
                  </label>
                  <select className="block w-full p-2.5 rounded-full shadow-lg bg-[#fffffff1] text-[#40404080]">
                    <option selected>K5</option>
                    <option value="US">United States</option>
                  </select>
                </div>
                <div className="mb-4 md:mb-0">
                  <label className="block mb-2 text-neutral-700 md:text-base text-sm font-normal">
                    Кузов
                  </label>
                  <select className="block w-full p-2.5 rounded-full shadow-lg bg-[#fffffff1] text-[#40404080]">
                    <option selected>Седан</option>
                    <option value="US">United States</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {" "}
                <div className="mb-4 md:mb-0">
                  <label className="block mb-2 text-neutral-700 md:text-base text-sm font-normal">
                    Тип двигателя
                  </label>
                  <select className="block w-full p-2.5 rounded-full shadow-lg bg-[#fffffff1] text-[#40404080]">
                    <option selected>Гибридный</option>
                    <option value="US">United States</option>
                  </select>
                </div>
                <div className="mb-4 md:mb-0">
                  <label className="block mb-2 text-neutral-700 md:text-base text-sm font-normal">
                    Привод
                  </label>
                  <select className="block w-full p-2.5 rounded-full shadow-lg bg-[#fffffff1] text-[#40404080]">
                    <option selected>Полный</option>
                    <option value="US">United States</option>
                  </select>
                </div>
                <div className="mb-4 md:mb-0">
                  <label className="block mb-2 text-neutral-700 md:text-base text-sm font-normal">
                    КПП
                  </label>
                  <select className="block w-full p-2.5 rounded-full shadow-lg bg-[#fffffff1] text-[#40404080]">
                    <option selected>Автомат</option>
                    <option value="US">Механика</option>
                  </select>
                </div>{" "}
              </div>

              <div className="mb-4 md:mb-0">
                <label className="block mb-2 text-neutral-700 md:text-base text-sm font-normal">
                  Год выпуска
                </label>
                <div className="flex">
                  <div>
                    <input
                      name="start"
                      type="text"
                      className="block w-full p-2.5 rounded-l-full shadow-lg bg-[#fffffff1] text-[#40404080]  border-r border-solid border-gray-300"
                      placeholder="От"
                    />
                  </div>
                  <div>
                    <input
                      name="start"
                      type="text"
                      className="block w-full p-2.5 rounded-r-full shadow-lg bg-[#fffffff1] text-[#40404080]"
                      placeholder="До"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col  items-center gap-6 mt-6">
              <div className="flex justify-between gap-12">
                <div className="w-full md:w-1/3 mb-4 md:mb-0">
                  <label className="block mb-2 text-neutral-700 md:text-base text-sm font-normal">
                    Цена от
                  </label>
                  <input
                    className="block w-full p-2.5 rounded-full shadow-lg bg-[#fffffff1] text-[#40404080]"
                    placeholder="1.000.000тг"
                  />
                </div>
                <div className="w-full md:w-1/3 mb-4 md:mb-0">
                  <label className="block mb-2 text-neutral-700 md:text-base text-sm font-normal">
                    Цена до
                  </label>
                  <input
                    className="block w-full p-2.5 rounded-full shadow-lg bg-[#fffffff1] text-[#40404080]"
                    placeholder="1.000.000тг"
                  />
                </div>
              </div>

              <div className="w-full md:w-1/2 lg:mt-8 mt-0">
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={value}
                  onChange={handleChange}
                  className="w-full h-2 bg-[#7171714D] rounded-lg appearance-none cursor-pointer"
                />
              </div>

              <div className="w-full  mt-8">
                <button className="bg-black text-white rounded-full py-2 px-12 md:px-36 w-full ">
                  Найти
                </button>
              </div>

              <div className="w-full ">
                <button className="border border-black text-black rounded-full py-2 px-12 md:px-36 w-full ">
                  Сбросить фильтр
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ПК РАЗРЕШЕНИЕ */}
        <div>
          <div className="hidden  lg:flex lg:flex-col s items-center  mt-6">
            <div className="flex gap-6 ">
              <div className="mb-4 md:mb-0">
                <label className="block mb-2 text-neutral-700 md:text-base text-sm font-normal">
                  Марка
                </label>
                <select className="block w-full p-2.5 rounded-full shadow-lg bg-[#fffffff1] text-[#40404080]">
                  <option selected>KIA</option>
                  <option value="US">United States</option>
                </select>
              </div>
              <div className="mb-4 md:mb-0">
                <label className="block mb-2 text-neutral-700 md:text-base text-sm font-normal">
                  Модель
                </label>
                <select className="block w-full p-2.5 rounded-full shadow-lg bg-[#fffffff1] text-[#40404080]">
                  <option selected>K5</option>
                  <option value="US">United States</option>
                </select>
              </div>
              <div className="mb-4 md:mb-0">
                <label className="block mb-2 text-neutral-700 md:text-base text-sm font-normal">
                  Кузов
                </label>
                <select className="block w-full p-2.5 rounded-full shadow-lg bg-[#fffffff1] text-[#40404080]">
                  <option selected>Седан</option>
                  <option value="US">United States</option>
                </select>
              </div>
              <div className="mb-4 md:mb-0">
                <label className="block mb-2 text-neutral-700 md:text-base text-sm font-normal">
                  Тип двигателя
                </label>
                <select className="block w-full p-2.5 rounded-full shadow-lg bg-[#fffffff1] text-[#40404080]">
                  <option selected>Гибридный</option>
                  <option value="US">United States</option>
                </select>
              </div>
              <div className="mb-4 md:mb-0">
                <label className="block mb-2 text-neutral-700 md:text-base text-sm font-normal">
                  Привод
                </label>
                <select className="block w-full p-2.5 rounded-full shadow-lg bg-[#fffffff1] text-[#40404080]">
                  <option selected className="">
                    Полный
                  </option>
                  <option value="US">United States</option>
                </select>
              </div>
              <div className="mb-4 md:mb-0">
                <label className="block mb-2 text-neutral-700 md:text-base text-sm font-normal">
                  КПП
                </label>
                <select className="block w-full p-2.5 rounded-full shadow-lg bg-[#fffffff1] text-[#40404080]">
                  <option selected>Автомат</option>
                  <option value="US">Механика</option>
                </select>
              </div>
              <div className="mb-4 md:mb-0">
                <label className="block mb-2 text-neutral-700 md:text-base text-sm font-normal">
                  Год выпуска
                </label>
                <div className="flex">
                  <div>
                    <input
                      name="start"
                      type="text"
                      className="block w-full p-2.5 rounded-l-full shadow-lg bg-[#fffffff1] text-[#40404080]  border-r border-solid border-gray-300"
                      placeholder="От"
                    />
                  </div>
                  <div>
                    <input
                      name="start"
                      type="text"
                      className="block w-full p-2.5 rounded-r-full shadow-lg bg-[#fffffff1] text-[#40404080]"
                      placeholder="До"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-6 mt-6">
              <div className="w-full md:w-1/3 mb-4 md:mb-0">
                <label className="block mb-2 text-neutral-700 md:text-base text-sm font-normal">
                  Цена от
                </label>
                <input
                  className="block w-full p-2.5 rounded-full shadow-lg bg-[#fffffff1] text-[#40404080]"
                  placeholder="1.000.000тг"
                />
              </div>

              <div className="w-full md:w-1/3 mt-8">
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={value}
                  onChange={handleChange}
                  className="w-full h-2 bg-[#7171714D] rounded-lg appearance-none cursor-pointer"
                />
              </div>

              <div className="w-full md:w-1/3 mb-4 md:mb-0">
                <label className="block mb-2 text-neutral-700 md:text-base text-sm font-normal">
                  Цена до
                </label>
                <input
                  className="block w-full p-2.5 rounded-full shadow-lg bg-[#fffffff1] text-[#40404080]"
                  placeholder="1.000.000тг"
                />
              </div>

              <div className="w-full md:w-1/3 mt-8">
                <button className="bg-black text-white rounded-full py-2 px-12 md:px-36">
                  Найти
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllModels;
