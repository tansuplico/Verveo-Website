import React, { useEffect, useState, useContext, useRef } from "react";
import { CartContext } from "../../Context/CartContext";
import "../Watches/Watches.css";

// Libraries
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

// Banner
import bannerVideo from "../Watches/videos/watches-banner-video.mp4";
import limitedBanner from "../Watches/images/watches-limited-banner.jpg";

import watchwide1 from "../Watches/images/watches-trojan-wide.jpg";
import watchwide2 from "../Watches/images/watches-emerald-wide.jpg";
import watchwide3 from "../Watches/images/watches-ruby-wide.jpg";
import watchwide4 from "../Watches/images/watches-atlas-wide.jpg";
import watchwide5 from "../Watches/images/watches-midas-wide.jpg";
import watchwide6 from "../Watches/images/watches-sterling-wide.jpg";

export default function Watches() {
  const {
    mainData,
    setMainData,
    itemsInCart,
    setItemsInCart,
    itemsInFavorite,
    setItemsInFavorite,
  } = useContext(CartContext);

  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  const [productCategorySelected, setProductCategorySelected] = useState(true);
  const [limitedCategorySelected, setLimitedCategorySelected] = useState(false);

  const [trojanVisible, setTrojanVisible] = useState(3);
  const [emeraldVisible, setEmeraldVisible] = useState(3);
  const [rubyVisible, setRubyVisible] = useState(3);
  const [atlasVisible, setAtlasVisible] = useState(3);
  const [midasVisible, setMidasVisible] = useState(3);
  const [sterlingVisible, setSterlingVisible] = useState(3);

  const [selectedWatch, setSelectedWatch] = useState("");
  const [watchSelected, setWatchSelected] = useState(false);

  const scrollRef = useRef(null);

  function scrollToFunction() {
    scrollRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function displayLimitedSection() {
    setProductCategorySelected(false);
    setLimitedCategorySelected(true);
  }

  function displayProductSection() {
    setProductCategorySelected(true);
    setLimitedCategorySelected(false);
  }

  // Display Overlay
  function displayOverlay(name) {
    setSelectedWatch(name);
    setWatchSelected(true);
  }

  // Add To Cart
  function addToCart(name) {
    if (!itemsInCart.includes(name)) {
      setItemsInCart((prevItems) => [...prevItems, name]);
    }
    setWatchSelected(false);
  }

  // Add To Favorites
  function addToFavorites(name) {
    setMainData((prevData) =>
      prevData.map((item) =>
        item.name === name ? { ...item, isFavorite: !item.isFavorite } : item
      )
    );

    if (
      !itemsInFavorite.includes(name) &&
      !mainData.find((item) => item.name === name)?.isFavorite
    ) {
      setItemsInFavorite((prevItems) => [...prevItems, name]);
    } else {
      setItemsInFavorite((prevItems) =>
        prevItems.filter((item) => item !== name)
      );
    }
  }

  // Trojan
  const trojanWatches = mainData.filter((data) => data.category === "Trojan");
  const trojanMaxLength = trojanWatches.length;

  const trojanElements = trojanWatches.slice(0, trojanVisible).map((data) => {
    return (
      <div className="watches-small-display" data-aos="zoom-in">
        <div
          className="watches-small-imagebox"
          onClick={() => displayOverlay(data.name)}
        >
          <img src={data.imageUrl} alt="" />
        </div>
        <div className="watches-small-textbox">
          <div className="watches-name-heart">
            <h2> {data.name} </h2>{" "}
            <i
              className={`fa-${data.isFavorite ? "solid" : "regular"} fa-heart`}
              style={{ color: `${data.isFavorite ? "red" : "black"}` }}
              onClick={() => addToFavorites(data.name)}
            ></i>
          </div>
          <h3> {data.model} </h3>
          <h3> {data.price} </h3>
        </div>
      </div>
    );
  });

  // Emerald
  const emeraldWatches = mainData.filter((data) => data.category === "Emerald");
  const emeraldMaxLength = trojanWatches.length;

  const emeraldElements = emeraldWatches
    .slice(0, emeraldVisible)
    .map((data) => {
      return (
        <div className="watches-small-display" data-aos="zoom-in">
          <div
            className="watches-small-imagebox"
            onClick={() => displayOverlay(data.name)}
          >
            <img src={data.imageUrl} alt="" />
          </div>
          <div className="watches-small-textbox">
            <div className="watches-name-heart">
              <h2> {data.name} </h2>{" "}
              <i
                className={`fa-${
                  data.isFavorite ? "solid" : "regular"
                } fa-heart`}
                style={{ color: `${data.isFavorite ? "red" : "black"}` }}
                onClick={() => addToFavorites(data.name)}
              ></i>
            </div>
            <h3> {data.model} </h3>
            <h3> ₱{data.price} </h3>
          </div>
        </div>
      );
    });

  // Ruby
  const rubyWatches = mainData.filter((data) => data.category === "Ruby");
  const rubyMaxLength = trojanWatches.length;

  const rubyElements = rubyWatches.slice(0, rubyVisible).map((data) => {
    return (
      <div className="watches-small-display" data-aos="zoom-in">
        <div
          className="watches-small-imagebox"
          onClick={() => displayOverlay(data.name)}
        >
          <img src={data.imageUrl} alt="" />
        </div>
        <div className="watches-small-textbox">
          <div className="watches-name-heart">
            <h2> {data.name} </h2>{" "}
            <i
              className={`fa-${data.isFavorite ? "solid" : "regular"} fa-heart`}
              style={{ color: `${data.isFavorite ? "red" : "black"}` }}
              onClick={() => addToFavorites(data.name)}
            ></i>
          </div>
          <h3> {data.model} </h3>
          <h3> {data.price} </h3>
        </div>
      </div>
    );
  });

  // Midas
  const midasWatches = mainData.filter((data) => data.category === "Midas");
  const midasMaxLength = midasWatches.length;

  const midasElements = midasWatches.slice(0, midasVisible).map((data) => {
    return (
      <div className="watches-small-display" data-aos="zoom-in">
        <div
          className="watches-small-imagebox"
          onClick={() => displayOverlay(data.name)}
        >
          <img src={data.imageUrl} alt="" />
        </div>
        <div className="watches-small-textbox">
          <div className="watches-name-heart">
            <h2> {data.name} </h2>{" "}
            <i
              className={`fa-${data.isFavorite ? "solid" : "regular"} fa-heart`}
              style={{ color: `${data.isFavorite ? "red" : "black"}` }}
              onClick={() => addToFavorites(data.name)}
            ></i>
          </div>
          <h3> {data.model} </h3>
          <h3> {data.price} </h3>
        </div>
      </div>
    );
  });

  // Atlas
  const atlasWatches = mainData.filter((data) => data.category === "Atlas");
  const atlasMaxLength = atlasWatches.length;

  const atlasElements = atlasWatches.slice(0, atlasVisible).map((data) => {
    return (
      <div className="watches-small-display" data-aos="zoom-in">
        <div
          className="watches-small-imagebox"
          onClick={() => displayOverlay(data.name)}
        >
          <img src={data.imageUrl} alt="" />
        </div>
        <div className="watches-small-textbox">
          <div className="watches-name-heart">
            <h2> {data.name} </h2>{" "}
            <i
              className={`fa-${data.isFavorite ? "solid" : "regular"} fa-heart`}
              style={{ color: `${data.isFavorite ? "red" : "black"}` }}
              onClick={() => addToFavorites(data.name)}
            ></i>
          </div>
          <h3> {data.model} </h3>
          <h3> {data.price} </h3>
        </div>
      </div>
    );
  });

  // Sterling
  const sterlingWatches = mainData.filter(
    (data) => data.category === "Sterling"
  );
  const sterlingMaxLength = sterlingWatches.length;

  const sterlingElements = sterlingWatches
    .slice(0, sterlingVisible)
    .map((data) => {
      return (
        <div className="watches-small-display" data-aos="zoom-in">
          <div
            className="watches-small-imagebox"
            onClick={() => displayOverlay(data.name)}
          >
            <img src={data.imageUrl} alt="" />
          </div>
          <div className="watches-small-textbox">
            <div className="watches-name-heart">
              <h2> {data.name} </h2>{" "}
              <i
                className={`fa-${
                  data.isFavorite ? "solid" : "regular"
                } fa-heart`}
                style={{ color: `${data.isFavorite ? "red" : "black"}` }}
                onClick={() => addToFavorites(data.name)}
              ></i>
            </div>
            <h3> {data.model} </h3>
            <h3> {data.price} </h3>
          </div>
        </div>
      );
    });

  // Limited
  const limitedWatches = mainData.filter((data) => data.category === "Limited");

  const limitedElements = limitedWatches
    .slice(0, limitedWatches.length)
    .map((data) => {
      return (
        <div className="watches-small-display" data-aos="zoom-in">
          <div
            className="watches-small-imagebox"
            onClick={() => displayOverlay(data.name)}
          >
            <img src={data.imageUrl} alt="" />
          </div>
          <div className="watches-small-textbox">
            <div className="watches-name-heart">
              <h2> {data.name} </h2>{" "}
              <i
                className={`fa-${
                  data.isFavorite ? "solid" : "regular"
                } fa-heart`}
                style={{ color: `${data.isFavorite ? "red" : "black"}` }}
                onClick={() => addToFavorites(data.name)}
              ></i>
            </div>
            <h3> {data.model} </h3>
            <h3> {data.price} </h3>
          </div>
        </div>
      );
    });

  const showMoreTrojan = (dataLength) => {
    setTrojanVisible(trojanVisible + dataLength);
  };

  const showMoreEmerald = (dataLength) => {
    setEmeraldVisible(emeraldVisible + dataLength);
  };

  const showMoreRuby = (dataLength) => {
    setRubyVisible(rubyVisible + dataLength);
  };

  const showMoreMidas = (dataLength) => {
    setMidasVisible(midasVisible + dataLength);
  };

  const showMoreAtlas = (dataLength) => {
    setAtlasVisible(atlasVisible + dataLength);
  };

  const showMoreSterling = (dataLength) => {
    setSterlingVisible(sterlingVisible + dataLength);
  };

  const watchOverlay = mainData
    .filter((data) => data.name === selectedWatch)
    .map((data) => {
      return (
        <>
          <div className="watch-overlay-container">
            <div className="watch-overlay-imagebox">
              <img src={data.imageUrl} alt="" />
            </div>
            <div className="watch-overlay-textbox">
              <h1> {data.name} </h1>
              <h3> {data.model} </h3>
              <h2> ₱{data.price} </h2>
              <p> {data.description} </p>
              <h4>
                {" "}
                Case Type: <span> {data.caseType} </span>{" "}
              </h4>
              <h4>
                {" "}
                Diameter: <span> {data.diameter} </span>{" "}
              </h4>
              <h4>
                {" "}
                Height: <span> {data.height} </span>{" "}
              </h4>

              <button onClick={() => addToCart(data.name)}>
                {" "}
                <span> Add to Cart </span>{" "}
              </button>
            </div>
          </div>
          {/* Overlay CSS is in Header.scss */}
          <div
            className="watch-overlay"
            onClick={() => setWatchSelected(false)}
          >
            {" "}
          </div>
        </>
      );
    });

  return (
    <>
      <Header data={mainData} itemsInCart={itemsInCart} />
      <div>
        <div className="watch-banner-pages-container">
          <video loop muted autoPlay>
            <source src={bannerVideo} type="video/mp4" />
          </video>
          <div className="watch-banner-pages-content">
            <h1> Our Watches </h1>
            <button onClick={scrollToFunction}>
              {" "}
              <span> Check Boutiques </span>{" "}
            </button>
          </div>
        </div>

        <div className="watches-content-container" ref={scrollRef}>
          <div className="watches-title">
            <h1> Watches </h1>
            <p> Find your perfect watch </p>
          </div>

          <div className="watches-category">
            <h3
              className={`category ${
                productCategorySelected ? "category-active" : ""
              }`}
              onClick={displayProductSection}
            >
              {" "}
              Products{" "}
            </h3>
            <span> &#9675; </span>
            <h3
              className={`category ${
                limitedCategorySelected ? "category-active" : ""
              }`}
              onClick={displayLimitedSection}
            >
              {" "}
              Limited{" "}
            </h3>
          </div>

          {productCategorySelected ? (
            <>
              <div className="watches-display-container" data-aos="fade-up">
                <div className="watches-display-content">
                  <div className="watches-wide-container">
                    <div
                      className="watches-wide-banner"
                      style={{ backgroundImage: `url(${watchwide1})` }}
                    >
                      {" "}
                    </div>
                    <div className="watches-wide-descbox">
                      <h1> Trojan </h1>
                      <p>
                        Introducing "Trojan," an exquisite black chronographic
                        luxury watch that embodies the perfect blend of timeless
                        elegance and cutting-edge craftsmanship. Elevate your
                        style with the distinguished allure of the "Trojan"
                        watch.
                      </p>
                    </div>
                  </div>

                  {trojanElements}
                </div>

                {trojanVisible >= trojanMaxLength ? (
                  ""
                ) : (
                  <button onClick={() => showMoreTrojan(trojanMaxLength)}>
                    {" "}
                    <span> Load More </span>{" "}
                  </button>
                )}
              </div>

              <div className="watches-display-container" data-aos="fade-up">
                <div className="watches-display-content">
                  <div className="watches-wide-container">
                    <div
                      className="watches-wide-banner"
                      style={{ backgroundImage: `url(${watchwide2})` }}
                    >
                      {" "}
                    </div>
                    <div className="watches-wide-descbox">
                      <h1> Emerald </h1>
                      <p>
                        Elegant and enchanting, the 'Emerald' chronographic
                        luxury watch is adorned in a captivating emerald green
                        hue. Its impeccable craftsmanship, combined with its
                        precise timekeeping capabilities, makes it a remarkable
                        timepiece that effortlessly exudes opulence and
                        sophistication
                      </p>
                    </div>
                  </div>

                  {emeraldElements}
                </div>

                {emeraldVisible >= emeraldMaxLength ? (
                  ""
                ) : (
                  <button onClick={() => showMoreEmerald(emeraldMaxLength)}>
                    {" "}
                    <span> Load More </span>{" "}
                  </button>
                )}
              </div>

              <div className="watches-display-container" data-aos="fade-up">
                <div className="watches-display-content">
                  <div className="watches-wide-container">
                    <div
                      className="watches-wide-banner"
                      style={{ backgroundImage: `url(${watchwide3})` }}
                    >
                      {" "}
                    </div>
                    <div className="watches-wide-descbox">
                      <h1> Ruby </h1>
                      <p>
                        "Ruby" is a breathtaking chronographic luxury watch,
                        radiating an aura of passion and prestige with its
                        striking ruby red hue. Meticulously crafted for those
                        with a taste for opulence, this timepiece effortlessly
                        blends sophistication and timeless allure.
                      </p>
                    </div>
                  </div>

                  {rubyElements}
                </div>

                {rubyVisible >= rubyMaxLength ? (
                  ""
                ) : (
                  <button onClick={() => showMoreRuby(rubyMaxLength)}>
                    {" "}
                    <span> Load More </span>{" "}
                  </button>
                )}
              </div>

              <div className="watches-display-container" data-aos="fade-up">
                <div className="watches-display-content">
                  <div className="watches-wide-container">
                    <div
                      className="watches-wide-banner"
                      style={{ backgroundImage: `url(${watchwide4})` }}
                    >
                      {" "}
                    </div>
                    <div className="watches-wide-descbox">
                      <h1> Atlas </h1>
                      <p>
                        "Atlas" is a mesmerizing ocean blue chronographic luxury
                        watch that embodies the spirit of exploration and
                        adventure. With its exquisite craftsmanship and precise
                        functionality, this timepiece is a symbol of timeless
                        elegance and impeccable performance.
                      </p>
                    </div>
                  </div>

                  {atlasElements}
                </div>

                {atlasVisible >= atlasMaxLength ? (
                  ""
                ) : (
                  <button onClick={() => showMoreAtlas(atlasMaxLength)}>
                    {" "}
                    <span> Load More </span>{" "}
                  </button>
                )}
              </div>

              <div className="watches-display-container" data-aos="fade-up">
                <div className="watches-display-content">
                  <div className="watches-wide-container">
                    <div
                      className="watches-wide-banner"
                      style={{ backgroundImage: `url(${watchwide5})` }}
                    >
                      {" "}
                    </div>
                    <div className="watches-wide-descbox">
                      <h1> Midas </h1>
                      <p>
                        "Midas" embodies opulence and luxury with its exquisite
                        design crafted from pure gold. This chronographic
                        timepiece showcases unrivaled craftsmanship and timeless
                        elegance, making it a symbol of prestige and
                        sophistication for those who appreciate the finest
                        things in life.
                      </p>
                    </div>
                  </div>

                  {midasElements}
                </div>

                {midasVisible >= midasMaxLength ? (
                  ""
                ) : (
                  <button onClick={() => showMoreMidas(midasMaxLength)}>
                    {" "}
                    <span> Load More </span>{" "}
                  </button>
                )}
              </div>

              <div className="watches-display-container" data-aos="fade-up">
                <div className="watches-display-content">
                  <div className="watches-wide-container">
                    <div
                      className="watches-wide-banner"
                      style={{ backgroundImage: `url(${watchwide6})` }}
                    >
                      {" "}
                    </div>
                    <div className="watches-wide-descbox">
                      <h1> Sterling </h1>
                      <p>
                        "Sterling" is an exquisite chronographic luxury watch
                        that showcases the timeless allure of pure silver. With
                        its impeccable craftsmanship and exceptional precision,
                        this timepiece epitomizes sophistication and refinement,
                        making it a coveted accessory for the discerning
                        individual.
                      </p>
                    </div>
                  </div>

                  {sterlingElements}
                </div>

                {sterlingVisible >= sterlingMaxLength ? (
                  ""
                ) : (
                  <button onClick={() => showMoreSterling(sterlingMaxLength)}>
                    {" "}
                    <span> Load More </span>{" "}
                  </button>
                )}
              </div>
              {watchSelected && watchOverlay}
            </>
          ) : (
            <>
              <div className="watches-limited-container" data-aos="fade-up">
                <div className="watches-wide-container">
                  <div
                    className="watches-limited-banner"
                    style={{ backgroundImage: `url(${limitedBanner})` }}
                  >
                    {" "}
                  </div>
                  <div className="watches-wide-descbox">
                    <h1> The Limited Chronographs </h1>
                    <p>
                      Our limited edition chronographic luxury watch is an
                      exquisite masterpiece that combines artistry, innovation,
                      and exclusivity. With meticulous attention to detail and a
                      unique design, this timepiece is a symbol of refined taste
                      and individuality, making it a prized possession for those
                      seeking elegance and distinction.
                    </p>
                  </div>
                </div>

                <h1 className="limited-title"> </h1>

                <div className="watches-display-container">
                  <div className="watches-display-content">
                    {limitedElements}
                  </div>
                </div>
              </div>
              {watchSelected && watchOverlay}
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
