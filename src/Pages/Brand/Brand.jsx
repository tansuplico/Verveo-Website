import React, { useEffect, useRef } from "react";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import "../Brand/Brand.css";

import banner from "./images/brand-banner.jpg";

import collections from "./images/brand-collections.png";
import history from "./images/watch-history.jpg";
import watchArmTwo from "./images/watch-arm-2.jpg";
import team from "./images/brand-team.jpg";

import AOS from "aos";
import "aos/dist/aos.css";

export default function Brand() {
  const scrollRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  function scrollToFunction() {
    scrollRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <div>
      <Header />
      <div
        className="boutique-banner-pages-container"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="boutique-banner-pages-content">
          <h1> Our Brand </h1>
          <button onClick={scrollToFunction}>
            {" "}
            <span> Find Out </span>{" "}
          </button>
        </div>
      </div>

      <div
        className="brand-content-container"
        data-aos="fade-up"
        ref={scrollRef}
      >
        <div className="brand-quote">
          <h1>
            Each tick tells a story, each moment captured in timeless
            sophistication.
            <br />
            Discover the art of horology and redefine your moments.
          </h1>
        </div>

        <div className="brand-about-content">
          <div className="brand-about-imagebox">
            <img src={collections} alt="collections" />
          </div>
          <div className="brand-about-textbox">
            <h2> About Verveo </h2>
            <h3>
              At Verveo, we set the standard for luxury chronograph watches.
              Since our establishment, we have been at the forefront of
              precision timing innovations, capturing every moment with
              unparalleled accuracy. From the wrists of legendary drivers to
              yours, Verveo watches leave an indelible mark on time and redefine
              the essence of each era. As pioneers in motorsports sponsorship
              and the creators of the extraordinary Mikrograph, five times more
              precise than any other mechanical chronograph, we continue to
              shape the history of timekeeping.
            </h3>
            <span> Learn More </span>
          </div>
        </div>

        <div className="brand-history-content" data-aos="fade-up">
          <div className="brand-history-textbox">
            <h2> The History of Verveo </h2>
            <h3>
              Founded in 1873, Verveo has a rich and illustrious history that
              spans over 150 years, solidifying our position as a venerable
              institution in the luxury watch industry. Since our inception, we
              have been synonymous with exceptional craftsmanship, timeless
              elegance, and unwavering commitment to quality. Throughout our
              150-year journey, Verveo has remained at the forefront of
              technological advancements, consistently pushing boundaries and
              setting new standards in precision and reliability.
            </h3>
            <span> Learn More </span>
          </div>
          <div className="brand-history-imagebox">
            <img src={history} alt="history" />
          </div>
        </div>

        <div className="brand-about-content" data-aos="fade-up">
          <div className="brand-about-imagebox">
            <img src={watchArmTwo} alt="watch-arm" />
          </div>
          <div className="brand-about-textbox">
            <h2> One Step Ahead </h2>
            <h3>
              When knowledge, through our Verveo Institute, and savoir-faire
              combine to continue a living history that is centuries-old. Two
              disciplines, one single momentum. To make records and then break
              them. To capture time in the perfect split-second. Every single
              second is another step towards victory. To take the turn and know
              how to master the now. Now is when the future is made.
            </h3>
            <span> Learn More </span>
          </div>
        </div>

        <div className="brand-history-content" data-aos="fade-up">
          <div className="brand-history-textbox">
            <h2> The Verveo Team </h2>
            <h3>
              Our team is a dynamic and cohesive group of individuals, driven by
              a shared passion for luxury watches and uncompromising quality.
              Each team member brings diverse backgrounds and expertise,
              including design, craftsmanship, marketing, and customer service,
              enabling us to deliver exceptional experiences to our valued
              clients. Collaboration and teamwork are at the heart of our
              company culture as we foster an environment that encourages
              innovation, creativity, and continuous growth.
            </h3>
            <span> Learn More </span>
          </div>
          <div className="brand-history-imagebox">
            <img src={team} alt="team" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
