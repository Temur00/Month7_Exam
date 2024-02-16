import React, { useEffect, useState } from "react";
import AtomicSpinner from "atomic-spinner";
import { heroImg, justAboveHero } from "../../assets/index";
import "./Home.scss";

const Home = () => {
  // LOADING
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  // LOADING

  return (
    <>
      {isLoading ? (
        <AtomicSpinner />
      ) : (
        <div>
          <img src={heroImg} alt="heroImg" />
          <img src={justAboveHero} alt="justAboveHero" />
          Home
        </div>
      )}
    </>
  );
};

export default Home;
