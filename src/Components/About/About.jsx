import React, { useRef } from "react";
import "./About.css";
import { BiArrowFromTop } from "react-icons/bi";

export default function About() {
  const aboutRef = useRef(null);
  const showAboutHandler = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div>
      <div
        className=" bg-cover h-screen relative bg-center"
        style={{ backgroundImage: "url('/usss.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-30 flex flex-col items-center justify-center text-white">
          <p className="text-4xl">About Us</p>
          <BiArrowFromTop
            onClick={showAboutHandler}
            size={50}
            className=" rounded-full my-8 border text-xl transform transition-transform duration-300 hover:animate-bounce"
          />
        </div>
      </div>
      <div className="container mx-auto py-12 px-4" ref={aboutRef}>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex items-center justify-center">
            <img
              src="/us4.webp"
              alt="About Us"
              className="rounded-lg shadow-md w-full h-[540px]"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-4">Who We Are</h3>
            <p className="text-gray-700 mb-4">
              Mahan Air, also known as Mahan Airlines, is a privately owned
              airline based in Tehran, Iran. It operates both domestic and
              international scheduled flights, offering various classes of
              travel including Business and Economy. Passengers can manage
              bookings, check in online, and stay informed about travel
              requirements through their services.
            </p>
            <h3 className="text-2xl font-bold mb-4">Our Mession</h3>
            <p className="text-gray-700 mb-4">
              Mahan Travel is associated with Mahan Air, which was established
              in 1992 as the first private airline in Iran, providing passenger
              and freight services. The airline places a focus on maintaining
              the health of staff and guests while ensuring a pleasant, clean
              environment for travelers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
