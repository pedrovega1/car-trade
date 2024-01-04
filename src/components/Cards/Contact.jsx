import React from 'react'

function Contact() {
  return (
    <div className="flex flex-col sm:flex-col lg:flex-row gap-4 shadow-2xl shadow-gray-400 rounded-2xl ">
    <form className="xl:w-1/3 lg:w-1/2 w-full ">
      <div className="px-8 py-12">
        {" "}
        <h1 className="text-base sm:text-xl  lg:text-xl xl:text-xl mb-4 font-medium ">
          Если у вас возникли вопросы,
          <br /> мы обязательно на них ответим!
        </h1>
        <div className="mb-6 w-full lg:w-2/3">
          <input
            type="text"
            name="user_name"
            className="border-b-2 border-gray-500 p-2 w-full focus:outline-none focus:border-blue-500 placeholder-black "
            placeholder="Ваше имя*"
            required=""
          />
        </div>
        <div className="mb-6  w-full lg:w-2/3">
          <input
            type="tel"
            name="user_phone"
            className="border-b-2 border-gray-500 p-2 w-full focus:outline-none focus:border-blue-500 placeholder-black"
            required=""
            placeholder="Номер телефона*"
          />
        </div>
        <div className="mb-6 w-full lg:w-2/3">
          <input
            type="text"
            name="organization"
            className="border-b-2 border-gray-500 p-2 w-full focus:outline-none focus:border-blue-500 placeholder-black"
            required=""
            placeholder="Вопрос который возник*"
          />
        </div>
        <div className="mb-6 w-full lg:w-2/3 flex items-center space-x-2">
          <img src="/svg/phoneblack.svg"></img>
          <a
            href="+77003360303"
            className="text-neutral-700 text-xl font-medium"
          >
            +7 700 336 03 03
          </a>
        </div>
        <div className="mb-6 w-full lg:w-2/3 flex items-center space-x-2  ">
          <img src="/svg/email.svg"></img>
          <p className="text-neutral-700 text-xl font-medium">
            greatcartrade@gmail.com
          </p>
        </div>
        <button
          value="Send"
          type="submit"
          className=" text-lg border   rounded-lg p-2  border-gray-500 font-medium  w-full lg:w-2/3"
        >
          Отправить
        </button>
      </div>
    </form>

    <img
      src="/img/contact.png"
      alt="Contact"
      className="xl:w-2/3 lg:w-1/2 xl:block lg:block hidden w-full object-fill rounded-lg"
    />
  </div>
  )
}

export default Contact