import React from "react";
import imageData from "../../components/data/carData";

function ShowCar() {
  return (
    <div>
      <div className="grid xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2 grid-cols-2 gap-4  p-4">
        {imageData.map((image) => (
          <div key={image.id} className="text-left relative">
            <img src="/svg/heart.svg" className="absolute right-4 top-4" />
            <img src={image.src} alt={image.alt} className="rounded-xl" />
            <h3 className="text-base font-normal text-neutral-900">
              {image.carName}
            </h3>
            <p className="font-semibold text-neutral-900">{image.price}</p>
          </div>
        ))}
      </div>
      <center>
        {" "}
        <button className="text-center text-base font-medium text-neutral-700">
          <p>Показать еще...</p>
        </button>
      </center>
    </div>
  );
}

export default ShowCar;
