import React, { useEffect } from "react";
import "./style.scss";

const Animation = () => {
  const positionImage = () => {
    const imgElement = document.getElementById("parallax-image");
    const position = parseInt(window.scrollY / 5);
    imgElement.style.top = `-${position}px`;
  };

  const scrollEffect = () => {
    window.addEventListener("scroll", () => positionImage());
  };

  useEffect(() => {
    positionImage();
    scrollEffect();
  }, []);

  return (
    <div className="">
      <div className="w-full h-screen bg-[#60656a] flex items-center justify-center">
        <h1 className="text-5xl font-varela font-bold text-white text-center">
          Scroll Down..!
        </h1>
      </div>
      <div id="parallax" className="parallax-container">
        <img
          src="https://images.unsplash.com/photo-1444723121867-7a241cacace9"
          // src="/images/programming-wallpaper.jpg"
          id="parallax-image"
          alt=""
        />
        <div className="parallax-content flex gap-12 flex-col items-center justify-center">
          <h1 className="text-5xl font-varela font-bold text-white text-center">
            @Magnifiqqq
          </h1>
          <a
            href="https://instagram.com/magnifiqqq"
            className="text-white border border-white px-10 py-4 font-varela text-xl hover:bg-white hover:text-black"
          >
            Follow Me
          </a>
        </div>
      </div>

      <div className="w-full h-screen bg-[#60656a] flex items-center justify-center">
        <h1 className="text-5xl font-varela font-bold text-white text-center">
          Scroll Up..!
        </h1>
      </div>
    </div>
  );
};

export default Animation;
