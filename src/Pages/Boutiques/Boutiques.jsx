import React, { useState, useEffect, useRef } from "react";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import boutiquesData from "./BoutiquesData";
import berlin from "./images/berlin-building.jpg";

import "./Boutiques.css";

import AOS from "aos";
import "aos/dist/aos.css";

export default function Boutiques() {
  const [isHovered, setIsHovered] = useState(null);

  const scrollRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  function hoverImage(index) {
    setIsHovered(index);
  }

  function unhoverImage() {
    setIsHovered(null);
  }

  function scrollToFunction() {
    scrollRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  const boutiquesElement = boutiquesData.map((data, index) => {
    return (
      <div className="boutique-location-content" data-aos="fade-up">
        <div className="boutique-imagebox">
          <img
            onMouseOver={() => hoverImage(index)}
            onMouseOut={unhoverImage}
            src={isHovered === index ? data.hoveredImageUrl : data.imageUrl}
            alt="boutiques"
          />
        </div>
        <div className="boutique-textbox">
          <h1> {data.city} </h1>
          <h3>
            {data.street}, {data.city}, {data.country}
          </h3>
          <p>{data.description}</p>
          <a href={data.link} target="_blank" rel="noreferrer">
            <button>
              <span> Check Location </span>
            </button>
          </a>
        </div>
      </div>
    );
  });

  return (
    <div>
      <Header />
      <div
        className="boutique-banner-pages-container"
        style={{ backgroundImage: `url(${berlin})` }}
      >
        <div className="boutique-banner-pages-content">
          <h1> Our Boutiques </h1>
          <button onClick={scrollToFunction}>
            <span> Check Boutiques </span>
          </button>
        </div>
      </div>
      <div className="boutique-container">
        <div className="boutique-title">
          <h1> Visit our Locations </h1>
          <p ref={scrollRef}>
            Discover the world of Verveo at our exclusive boutique locations.
            Step into our elegant stores, each meticulously designed to provide
            a luxurious and immersive environment where you can explore our
            exquisite collection of timepieces.
          </p>
        </div>

        <div className="boutique-content">{boutiquesElement}</div>
      </div>
      <Footer />
    </div>
  );
}
