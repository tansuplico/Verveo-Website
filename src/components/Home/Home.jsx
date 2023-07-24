import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

// Libraries
import AOS from "aos";
import "aos/dist/aos.css";

import imageBanner from "./images/verveo-banner.jpg";

// First
import goldWatch from "./images/gold-watch-first.jpg";

import watchBuilding from "./images/watch-building.jpg";
import watchStore from "./images/watch-store.jpg";

// Second
import sliderData from "./SliderData";
import limitedData from "./LimitedData";

// Buttons
import left from "./images/left.png";
import right from "./images/right.png";

// Third
import protect1 from "./images/fourth-first.jpg";
import protect2 from "./images/fourth-second.jpg";
import protect3 from "./images/fourth-third.jpg";

import { useState, useEffect } from "react";

export default function Home() {
  const windowWidth = window.matchMedia("(max-width: 500px)");

  // Verveo Collection Slider
  const [slideData] = useState(sliderData);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage] = useState(windowWidth.matches ? 1 : 3);
  const totalItems = slideData.length;

  const scrollRef = useRef(null);

  // Verveo Collection Buttons
  const [, setLeftBtnClicked] = useState(false);
  const [rightBtnClicked, setRightBtnClicked] = useState(false);

  // Limited Collection Slider
  const [limitData] = useState(limitedData);
  const [currentLimitedPage, setCurrentLimitedPage] = useState(0);
  const [limitedItemsPerPage] = useState(windowWidth.matches ? 1 : 3);
  const totalLimitedItems = limitData.length;

  // Limited Collection Buttons
  const [, setLeftLimitedBtnClicked] = useState(false);
  const [, setRightLimitedBtnClicked] = useState(false);

  // News Circle Slider
  const [currentSlideNews, setCurrentSlideNews] = useState(0);
  const [currentCircle, setCurrentCircle] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  function scrollToFunction() {
    scrollRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  // Verveo Collection Next Button
  const handleClickNext = () => {
    // Gets the remainder
    const nextPage = (currentPage + 1) % Math.ceil(totalItems / itemsPerPage);
    setCurrentPage(nextPage);
    setLeftBtnClicked(false);
    setRightBtnClicked(true);
  };

  // Verveo Collection Previous Button
  const handleClickPrev = () => {
    // Gets the remainder
    const prevPage =
      (currentPage - 1 + Math.ceil(totalItems / itemsPerPage)) %
      Math.ceil(totalItems / itemsPerPage);
    setCurrentPage(prevPage);
    setRightBtnClicked(false);
    setLeftBtnClicked(true);
  };

  // Limited Collection Next Button
  const handleLimitedClickNext = () => {
    // Gets the remainder
    const nextPage =
      (currentLimitedPage + 1) %
      Math.ceil(totalLimitedItems / limitedItemsPerPage);
    setCurrentLimitedPage(nextPage);
    setLeftLimitedBtnClicked(false);
    setRightLimitedBtnClicked(true);
  };

  // Limited Collection Previous Button
  const handleLimitedClickPrev = () => {
    // Gets the remainder
    const prevPage =
      (currentLimitedPage -
        1 +
        Math.ceil(totalLimitedItems / limitedItemsPerPage)) %
      Math.ceil(totalLimitedItems / limitedItemsPerPage);
    setCurrentLimitedPage(prevPage);
    setRightLimitedBtnClicked(false);
    setLeftLimitedBtnClicked(true);
  };

  // Modified Slice Data
  const displayedData = slideData.slice(
    // Slice Parameter
    currentPage * itemsPerPage, // Starting Display
    (currentPage + 1) * itemsPerPage // Ending Display
  );

  // Modified Slice Data
  const limitedDisplayData = limitData.slice(
    // Slice Parameter
    currentLimitedPage * limitedItemsPerPage, // Starting Display
    (currentLimitedPage + 1) * limitedItemsPerPage // Ending Display
  );

  // Scroll to the very top of the page
  function handleLinkClick() {
    window.scrollTo(0, 0);
  }

  // News Slider (768 w/h)
  function handleNewsClick(index) {
    setCurrentSlideNews(index);
    setCurrentCircle(index);
  }

  // Slider Component
  const slideElements = displayedData.map((data, index) => {
    return (
      <div
        className="home-collection-box"
        style={{
          animationName: rightBtnClicked ? "slideRightAnim" : "slideLeftAnim",
        }}
        key={`${data.category}-${index}`}
      >
        <div className="collection-imagebox">
          <img src={data.imageURL} alt="" />
        </div>
        <div className="collection-textbox">
          <h1> {data.category} </h1>
          <p> {data.name}</p>
          <Link to="./watches" onClick={handleLinkClick}>
            <button>
              <span> Details </span>
            </button>
          </Link>
        </div>
      </div>
    );
  });

  const limitedElements = limitedDisplayData.map((data, index) => {
    return (
      <div className="home-limited-box">
        <div className="limited-imagebox">
          <img src={data.limitedImageURL} alt="" />
        </div>
        <div className="limited-textbox">
          <h1> {data.limitedName} </h1>
          <p> {data.limitedCategory}</p>
          <Link to="./watches" onClick={handleLinkClick}>
            <button>
              <span> Details </span>
            </button>
          </Link>
        </div>
      </div>
    );
  });

  return (
    <>
      <div
        className="video-banner-container"
        style={{ backgroundImage: `url(${imageBanner})` }}
      >
        <div className="banner-content-container">
          <h1> Verveo </h1>
          <p>
            Experience the epitome of luxury craftsmanship in our exquisite
            collection of timepieces.
          </p>
          <span onClick={scrollToFunction}> Learn More </span>
        </div>
      </div>

      <div className="home-content-container" ref={scrollRef}>
        <div className="home-first-content">
          <div className="home-first-imagebox" data-aos="fade-up">
            <img src={goldWatch} alt="" />
          </div>

          <div className="home-first-textbox" data-aos="fade-up">
            <h1> Welcome to Verveo </h1>
            <p>
              Introducing Verveo, a distinguished luxury watch company with a
              rich history of excellence. For over two centuries, we have
              passionately crafted timepieces that harmonize artistry,
              precision, and sophistication.
            </p>
            <Link
              to="/brand"
              className="no-underline"
              onClick={handleLinkClick}
            >
              <button>
                <span> Discover </span>
              </button>
            </Link>
          </div>
        </div>

        <div className="home-stores-content">
          <div className="home-stores-contentbox">
            <div className="home-stores-box" data-aos="fade-up">
              <div className="home-store-imagebox">
                <img src={watchStore} alt="watch-store" />
              </div>
              <div className="home-store-textbox">
                <h1> Inside our Store </h1>
                <h2> </h2>
                <p>
                  Discover the epitome of luxury and refinement at Verveo, our
                  premier luxury watch store. Immerse yourself in a world of
                  exceptional craftsmanship.
                </p>
                <Link
                  to="/boutiques"
                  className="no-underline"
                  onClick={handleLinkClick}
                >
                  <button>
                    <span> Discover More </span>
                  </button>
                </Link>
              </div>
            </div>

            <div className="home-stores-box" data-aos="fade-up">
              <div className="home-store-imagebox">
                <img src={watchBuilding} alt="watch-building" />
              </div>
              <div className="home-store-textbox">
                <h1> Our Location </h1>
                <p>
                  Nestled in the heart of a bustling metropolis, Verveo's luxury
                  watch building stands as an architectural marvel, captivating
                  all who encounter its grandeur.
                </p>
                <Link
                  to="/boutiques"
                  className="no-underline"
                  onClick={handleLinkClick}
                >
                  <button>
                    <span> Discover More </span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="home-collection-content">
          <div className="home-collection-container" data-aos="fade-up">
            <div className="left" onClick={handleClickPrev} data-aos="zoom-in">
              <img src={left} alt="" />
            </div>
            <div className="right" onClick={handleClickNext} data-aos="zoom-in">
              <img src={right} alt="" />
            </div>
            {slideElements}
          </div>

          <div className="home-collection-textbox" data-aos="fade-up">
            <p> Featured </p>
            <h1> Verveo Collections </h1>
            <h2>
              a rare blend of craftsmanship and exclusivity, meticulously
              designed for discerning watch enthusiasts.
            </h2>
          </div>
        </div>

        <div className="home-limited-content">
          <div className="home-limited-textbox" data-aos="fade-up">
            <p> Featured </p>
            <h1> Limited Collection </h1>
            <h2>
              a rare blend of craftsmanship and exclusivity, meticulously
              designed for discerning watch enthusiasts.
            </h2>
          </div>

          <div className="home-limited-container" data-aos="fade-up">
            <div
              className="left"
              onClick={handleLimitedClickPrev}
              data-aos="zoom-in"
            >
              <img src={left} alt="" />
            </div>
            <div
              className="right"
              onClick={handleLimitedClickNext}
              data-aos="zoom-in"
            >
              <img src={right} alt="" />
            </div>
            {limitedElements}
          </div>
        </div>

        <div className="home-news-content">
          <h1 className="home-news-title" data-aos="fade-up">
            News & Stories
          </h1>
          <div className="home-news-content-box">
            <div
              className={` home-news-box ${
                currentSlideNews === 0 ? "active" : ""
              }`}
            >
              <div className="home-news-imagebox" data-aos="fade-up">
                <img src={protect1} alt="" />
              </div>
              <div className="home-news-textbox" data-aos="fade-up">
                <h1> LIMITED: CHRONO Dracula </h1>
                <h2> June 27, 2023 </h2>
                <p>
                  Unveiling CHRONO Dracula: A captivating limited watch
                  collection that mesmerizes with its intricate details and dark
                  elegance, embodying the essence of timeless sophistication and
                  mysterious allure.
                </p>
              </div>
            </div>

            <div
              className={` home-news-box ${
                currentSlideNews === 1 ? "active" : ""
              }`}
            >
              <div className="home-news-imagebox" data-aos="fade-up">
                <img src={protect2} alt="" />
              </div>
              <div className="home-news-textbox" data-aos="fade-up">
                <h1> Chronographs Enhancments </h1>
                <h2> June 19, 2023 </h2>
                <p>
                  Enhancing Luxury: Watchmakers revolutionize the repair
                  process, elevating the quality of luxury timepieces through
                  meticulous craftsmanship and innovative techniques, ensuring
                  unparalleled precision and longevity.
                </p>
              </div>
            </div>

            <div
              className={` home-news-box ${
                currentSlideNews === 2 ? "active" : ""
              }`}
            >
              <div className="home-news-imagebox">
                <img src={protect3} alt="" data-aos="fade-up" />
              </div>
              <div className="home-news-textbox" data-aos="fade-up">
                <h1> NEW: Trojan </h1>
                <h2> June 12, 2023 </h2>
                <p>
                  Introducing the Trojan Watch: A cutting-edge timepiece that
                  combines sleek design with advanced hacking capabilities,
                  raising concerns over cybersecurity and personal privacy.
                </p>
              </div>
            </div>
          </div>

          <div className="circles-container">
            <div
              onClick={() => handleNewsClick(0)}
              className={`circle ${currentCircle === 0 ? "circleActive" : ""}`}
            ></div>
            <div
              onClick={() => handleNewsClick(1)}
              className={`circle ${currentCircle === 1 ? "circleActive" : ""}`}
            ></div>
            <div
              onClick={() => handleNewsClick(2)}
              className={`circle ${currentCircle === 2 ? "circleActive" : ""}`}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
}
