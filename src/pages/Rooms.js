import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";

export default function Rooms() {
  return (
    <Hero hero="roomsHero">
      <Banner title="our rooms" subtitle="" />
      <Link to="/" className="btn-primary">
        return home
      </Link>
    </Hero>
  );
}
