import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="w-full bg-black font-sans">
        <nav className="flex max-w-[1840px]   mx-auto p-4 justify-between items-center">
          <Link to="/">
            {" "}
            <img src="/img/logo.png" alt="Logo" className="object-cover" />
          </Link>

          <div className="flex space-x-4 items-center ">
            <div className="hidden items-center xl:flex lg:flex md:flex mr-4 md:mr-8 ">
              <img src="/svg/phone.png" alt="Phone Icon" />
              <a href="tel:+77472334421" className="text-white ml-2">
                +7 (747) 233 44 21
              </a>
            </div>
            <div className="hidden items-center xl:flex lg:flex ">
              <img src="/svg/gps.svg" alt="GPS Icon" />
              <p className="text-white ml-2">Контакты</p>
            </div>
            <div className="hidden items-center xl:flex lg:flex ">
              <img src="/svg/favourite.svg" alt="Favorite Icon" />
              <p className="text-white ml-2">Избранное</p>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
