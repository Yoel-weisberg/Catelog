import React, { useState } from "react";
import { Frame } from "../../components/Frame";
import { Heart } from "../../icons/Heart";
import "./style.css";
import enemies from "../../data";

export const HomePage = () => {
  const [filter, setFilter] = useState("");

  const toggleFilter = (value) => {
    setFilter(filter === value ? "" : value); // Toggle filter
  };

  const filteredEnemies = filter
    ? enemies.filter((enemie) => enemie.org === filter)
    : enemies;

  return (
    <div className="home-page">
      <header className="header">
        <div className="frame-9">
          <a href="https://t.me/fckhamas69" target="_blank">
            <div className="text-wrapper-10">צור קשר</div>
          </a>
          <a href="https://buymeacoffee.com/fckhms" target="_blank">
            <div className="text-wrapper-11">תרמו לנו</div>
          </a>
        </div>
        <div className="basad">בס”ד</div>
        <div className="logo">זונות.cum</div>
      </header>

      <div className="HeroSection">
        <div className="frame-2">
          <div className="div-wrapper">
            <p className="div-2">
              <span className="text-wrapper-2">
                אהבה
                <br />
              </span>
              <span className="text-wrapper-3">בלי</span>
              <span className="text-wrapper-4">&nbsp;</span>
              <span className="text-wrapper-5">טריקים</span>
              <span className="text-wrapper-4">
                ,<br />
              </span>
              <span className="text-wrapper-3">בלי</span>
              <span className="text-wrapper-4">&nbsp;</span>
              <span className="text-wrapper-5">שטיקים</span>
            </p>
          </div>

          <Heart className="heart-instance" />

          <div className="frame-3">
            <div className="text-wrapper-6">לפריטים נוספים</div>
          </div>

          <img
            className="albedobase-XL-a-logo"
            alt="Albedobase XL a logo"
            src="/img/albedobase-xl-a-logo-containing-a-muslim-women-with-provocativ-0.png"
          />
        </div>
      </div>

      <div className="frame-4">
        <div className="categories">
          <div className="group-2">
            <div
              className={`frame-5 ${filter === "עזה" ? "selected" : ""}`}
              onClick={() => toggleFilter("עזה")}
            >
              <div className="text-wrapper-7">עזה</div>
            </div>

            <div
              className={`frame-5 ${filter === "לבנון" ? "selected" : ""}`}
              onClick={() => toggleFilter("לבנון")}
            >
              <div className="text-wrapper-8">לבנון</div>
            </div>

            <div
              className={`frame-5 ${filter === "איראן" ? "selected" : ""}`}
              onClick={() => toggleFilter("איראן")}
            >
              <div className="text-wrapper-7">איראן</div>
            </div>

            <div
              className={`frame-5 ${filter === "תימן" ? "selected" : ""}`}
              onClick={() => toggleFilter("תימן")}
            >
              <div className="text-wrapper-9">תימן</div>
            </div>
          </div>
        </div>

        <div className="divwrapper">
          <div className="frame-8">
            {filteredEnemies.map((enemie, index) => (
              <Frame
                key={index}
                image={enemie.image} // Adjust the index based on your sheet structure
                description={enemie.description} // Adjust the index based on your sheet structure
                phone={enemie.phone_number} // Adjust the index based on your sheet structure
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
