import React from "react";
import Menu from "../../Cards/Menu";
import { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function CatalogID() {
  const [open, setOpen] = React.useState(1);
  const accordionData = [
    {
      id: 1,
      title: "Общая информация",
      content:
        "We're not always in the position that we want to be at. We're constantly growing. We're constantly making mistakes. We're constantly trying to express ourselves and actualize our dreams.",
    },
    {
      id: 2,
      title: "Размеры, мм",
      content:
        "We're not always in the position that we want to be at. We're constantly growing. We're constantly making mistakes. We're constantly trying to express ourselves and actualize our dreams.",
    },
    {
      id: 3,
      title: "Объём и масса",
      content:
        "We're not always in the position that we want to be at. We're constantly growing. We're constantly making mistakes. We're constantly trying to express ourselves and actualize our dreams.",
    },
    {
      id: 4,
      title: "Трансмиссия",
    },
    {
      id: 5,
      title: "Подвеска и тормоза",
    },
    {
      id: 6,
      title: "Эксплуатационные показатели",
    },
    {
      id: 7,
      title: "Двигатель",
    },
  ];

  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  return (
    <div className="max-w-[1840px] mx-auto p-3 mt-6 whitespace-nowrap  font-sans ">
      <Menu />

      <div className="mt-24">
        {/* <h1 className="text-8xl font-bold">Rolls-Royce Ghost</h1> */}
        <div className="xl:flex lg:flex md:flex   mt-8 gap-4  items-center">
          {/* ОПИСАНИЕ */}
          <div className="  xl:w-1/2 lg:w-1/2 md:w-2/3 w-full shadow-inner rounded-xl ">
            <div>
              <h2 className=" p-4 xl:text-4xl lg:text-2xl md:text-xl text-lg font-bold whitespace-pre-line">
                Технические характеристики <br />
                Rolls-Royce Ghoste
              </h2>
            </div>
            <div className="flex gap-12 p-4 items-center ">
              <div className="">
                <div className="mb-10">
                  <h3 className="text-lg text-neutral-700">Объем</h3>
                  <p className="text-lg font-normal text-black">6.8л</p>
                </div>
                <div>
                  <h3 className="text-lg text-neutral-700">Топливо</h3>
                  <p className="text-lg font-normal text-black">АИ-95</p>
                </div>
              </div>

              <div>
                <div className="mb-10">
                  <h3 className="text-lg text-neutral-700">Мощность</h3>
                  <p className="text-lg font-normal text-black">600 л.с.</p>
                </div>
                <div>
                  <h3 className="text-lg text-neutral-700">Привод</h3>
                  <p className="text-lg font-normal text-black">Полный</p>
                </div>
              </div>
            </div>

            <div className="p-4 flex flex-col">
              <div className="flex justify-between items-center">
                <div className="">
                  <h3 className="text-lg text-neutral-700">Коробка</h3>
                  <p className="text-lg font-normal text-black">Автомат</p>
                </div>
                <div>
                  <h3 className="text-lg text-neutral-700">Разгон</h3>
                  <p className="text-lg font-normal text-black">4.7 с</p>
                </div>
                <div className="">
                  <h3 className="text-lg text-neutral-700">Пробег</h3>
                  <p className="text-lg font-normal text-black">12.000 км</p>
                </div>
              </div>
              <div className="flex justify-between items-center mt-10">
                <div className="">
                  <h3 className="text-lg text-neutral-700">Тип двигателя</h3>
                  <p className="text-lg font-normal text-black">Бензиновый</p>
                </div>
                <div className="pr-10">
                  <h3 className="text-lg text-neutral-700">Расход</h3>
                  <p className="text-lg font-normal text-black">15.8 л</p>
                </div>
                <div>
                  <h3 className="text-lg text-neutral-700">Состояние</h3>
                  <p className="text-lg font-normal text-black">Идеальное</p>
                </div>
              </div>
            </div>
          </div>

          {/* ИЗОБРАЖЕНИЯ */}
          <div className=" mt-4 lg:flex  lg:w-3/4 md:w-1/2 w-full   items-center gap-3  ">
            <div className="mb-4">
              <img
                src="/img/catalog/carimage1.png"
                className="xl:w-full  object-cover"
              ></img>
            </div>
            <div className="grid grid-cols-2 grid-rows-2 gap-4">
              <img
                src="/img/catalog/carimage2.png"
                className="w-full object-cover"
              ></img>
              <img
                src="/img/catalog/carimage3.png"
                className="w-full object-cover"
              ></img>
              <img
                src="/img/catalog/carimage4.png"
                className="w-full object-cover"
              ></img>
              <img
                src="/img/catalog/carimage5.png"
                className="w-full object-cover"
              ></img>
            </div>
          </div>
        </div>

        {/* Кнопка и аккордеоны */}
        <div className="mt-[30px] flex flex-col justify-between items-center">
          <button className="bg-black text-white text-center w-full py-2.5 px-4 rounded-xl text-lg">
            Сделать заказ
          </button>
          <div className="w-full mx-auto mt-[28px]">
            <Accordion open={open === 1}>
              <AccordionHeader
                onClick={() => handleOpen(1)}
                className="text-black text-lg font-normal"
              >
                Общая информация
              </AccordionHeader>
              <AccordionBody className="whitespace-pre-line text-base">
                We&apos;re not always in the position that we want to be at.
                We&apos;re constantly growing. We&apos;re constantly making
                mistakes. We&apos;re constantly trying to express ourselves and
                actualize our dreams.
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 2}>
              <AccordionHeader
                onClick={() => handleOpen(2)}
                className="text-black text-lg font-normal"
              >
                Размеры, мм
              </AccordionHeader>
              <AccordionBody className="whitespace-pre-line text-base">
                We&apos;re not always in the position that we want to be at.
                We&apos;re constantly growing. We&apos;re constantly making
                mistakes. We&apos;re constantly trying to express ourselves and
                actualize our dreams.
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 3}>
              <AccordionHeader
                onClick={() => handleOpen(3)}
                className="text-black text-lg font-normal"
              >
                Объём и масса
              </AccordionHeader>
              <AccordionBody className="whitespace-pre-line">
                We&apos;re not always in the position that we want to be at.
                We&apos;re constantly growing. We&apos;re constantly making
                mistakes. We&apos;re constantly trying to express ourselves and
                actualize our dreams.
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 4}>
              <AccordionHeader
                onClick={() => handleOpen(4)}
                className="text-black text-lg font-normal"
              >
                Трансмиссия
              </AccordionHeader>
              <AccordionBody className="whitespace-pre-line text-base">
                We&apos;re not always in the position that we want to be at.
                We&apos;re constantly growing. We&apos;re constantly making
                mistakes. We&apos;re constantly trying to express ourselves and
                actualize our dreams.
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 5}>
              <AccordionHeader
                onClick={() => handleOpen(5)}
                className="text-black text-lg font-normal"
              >
                Подвеска и тормоза
              </AccordionHeader>
              <AccordionBody className="whitespace-pre-line text-base">
                We&apos;re not always in the position that we want to be at.
                We&apos;re constantly growing. We&apos;re constantly making
                mistakes. We&apos;re constantly trying to express ourselves and
                actualize our dreams.
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 6}>
              <AccordionHeader
                onClick={() => handleOpen(6)}
                className="text-black text-lg font-normal"
              >
                Эксплуатационные показатели
              </AccordionHeader>
              <AccordionBody className="whitespace-pre-line text-base">
                We&apos;re not always in the position that we want to be at.
                We&apos;re constantly growing. We&apos;re constantly making
                mistakes. We&apos;re constantly trying to express ourselves and
                actualize our dreams.
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 7}>
              <AccordionHeader
                onClick={() => handleOpen(7)}
                className="text-black text-lg font-normal"
              >
                Двигатель
              </AccordionHeader>
              <AccordionBody className="whitespace-pre-line text-base">
                We&apos;re not always in the position that we want to be at.
                We&apos;re constantly growing. We&apos;re constantly making
                mistakes. We&apos;re constantly trying to express ourselves and
                actualize our dreams.
              </AccordionBody>
            </Accordion>
          </div>
        </div>

        {/* Вид салона */}
        <div className="mt-[50px] ">
          <h1 className="text-xl text-neutral-900 mb-[30px]">Вид салона</h1>
          <div className="flex flex-col gap-3">
            <div className="flex gap-4 items-center">
              <img src="/img/catalog/salon1.png" className="" />

              <div className="">
                <img src="/img/catalog/salon2.png" />
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <div className="">
                {" "}
                <img src="/img/catalog/salon4.png" />
              </div>
              <div className="">
                <img src="/img/catalog/salon3.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CatalogID;
