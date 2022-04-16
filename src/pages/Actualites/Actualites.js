import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import basketball from "../../images/basketball.jpg";
import football from "../../images/football.jpg";
import runner from "../../images/runner.jpg";
import "./index.css";

function Actualites() {
  const [index, setIndex] = useState(0);
  const [actualites, setActualites] = useState([]);
  const url = "http://localhost:8080/activity/getAll";
  const getImage = (titre) => {
    if (titre === "football") {
      return football;
    }
    if (titre === "basketball") {
      return basketball;
    }
    if (titre === "runner") {
      return runner;
    } else {
      return null;
    }
  };

  useEffect(() => {
    const lastIndex = actualites.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    } else if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, actualites]);
  useEffect(() => {
    let slider = setInterval(() => setIndex(index + 1), 3000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  const getActualites = async () => {
    try {
      const response = await fetch("http://localhost:8080/activity/getAll");
      const data = await response.json();
      setActualites(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getActualites();
  }, []);
  useEffect(() => {
    actualites && console.log(actualites);
  }, [actualites]);

  return (
    <section className="sectiony">
      <div className="titly">
        <h2>
          <span>/</span>actualités
        </h2>
      </div>
      <div className="underline" style={{ color: "#44aa95" }}></div>
      <div className="section-center">
        {actualites.map((act, actIndex) => {
          let position = "nextSlide";
          if (actIndex === index) {
            position = "activeSlide";
          }
          if (
            actIndex === index - 1 ||
            (index === 0 && actIndex === actualites.length - 1)
          ) {
            position = "lastSlide";
          }
          const { id, nombrePlaces, titre, latitude, longitude, description } =
            act;
          return (
            <article key={id} className={position}>
              <img src={getImage(titre)} alt={titre} className="img" />
              <h4>{titre}</h4>
              <p className="title">Nombre de Places : {nombrePlaces}</p>
              <p className="text">{description}</p>
              <FaQuoteRight className="icon" />
            </article>
          );
        })}
        <button
          className="prev"
          type="button"
          onClick={() => setIndex(index - 1)}
        >
          <FiChevronLeft />
        </button>
        <button
          className="next"
          type="button"
          onClick={() => setIndex(index + 1)}
        >
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default Actualites;
