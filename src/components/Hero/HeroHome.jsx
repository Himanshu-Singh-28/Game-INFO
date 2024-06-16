import React from "react";
import Hero from "./Hero";
import './Hero.css';

const HeroHome = ({items}) => {
  return (
    <>
      <section className="home">
        <Hero items={items} />
      </section>
      <div className="mragin"></div>
    </>
  );
};

export default HeroHome;
