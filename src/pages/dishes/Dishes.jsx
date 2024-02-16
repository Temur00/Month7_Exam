import React, { useEffect, useState } from "react";
import AtomicSpinner from "atomic-spinner";
import "./Dishes.scss";

const Dishes = () => {
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
          <h1>Dishes</h1>
        </div>
      )}
    </>
  );
};

export default Dishes;
