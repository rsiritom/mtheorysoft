import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Banner from "../components/Banner";

const home = () => {
  return (
    <>
      <Hero>
        <Banner
          title="MtheorySoft"
          subtitle="We make global useful and funny apps">
          <Link to="/productlist" className="btn-primary">
            Our Apps
          </Link>
        </Banner>
      </Hero>

    </>
  );
};

export default home;
