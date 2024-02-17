import React, { useEffect, useState } from "react";
import AtomicSpinner from "atomic-spinner";
import { heroImg, aboveChicken, belowGraph } from "../../assets/index";
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
        <main>
          <section className="container">
            <div className="left-side">
              <p className="whole-users">------ OVER 1000 USERS</p>
              <p className="color_change ">Enjoy Foods All Over The World</p>
              <p>
                EatLy help you set saving goals, earn cash back offers, Go to
                disclaimer for more details and get paychecks up to two days
                early. Get a $20 bonus.
              </p>
              <div>
                <button>Get Started</button>
              </div>
            </div>
            <div className="right-side">
              <div className="above-img">
                <img src={aboveChicken} alt="above-img" />
                <div className="chicken-texts">
                  <p>Chicken Hell</p>
                  <p>On The Way</p>
                  <p>3:09 PM</p>
                </div>
              </div>
              <div className="circle-img">
                <img className="food-img" src={heroImg} alt="heroImg" />
              </div>
              <img className="graph" src={belowGraph} alt="graph-img" />
            </div>
          </section>
        </main>
      )}
    </>
  );
};

export default Home;
