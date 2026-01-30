
import React from "react";
import { Link } from "react-router-dom";
import Hero from "../Components/Hero/Hero";
import Banner from "../Components/Banner/Banner";

export default function Error() {
  return (
    <Hero>
      <Banner title="404" subtitle="Page Not Found">
        <Link to="/" className="btn-primary">
          Return Home
        </Link>
      </Banner>
    </Hero>
  );
}
