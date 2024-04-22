import React from "react";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Feature from "../../components/Feature";
import { features } from "../../helpers/features";
import "./home.css";

function Home() {
  return (
    <>
      <Header />
      <Banner />
      <div className="features">
        <h2 className="sr-only">Features</h2>
        {features.map((feature, index) => (
          <Feature
            image={feature.img}
            alt={feature.alt}
            title={feature.title}
            text={feature.text}
            key={index}
          />
        ))}
      </div>
      <Footer />
    </>
  );
}

export default Home;
