import React, { useEffect, useState } from "react";
import AtomicSpinner from "atomic-spinner";
import "./Details.scss";

const Details = () => {
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
      {" "}
      {isLoading ? (
        <AtomicSpinner />
      ) : (
        <div>
          <h1>Details</h1>
        </div>
      )}
    </>
  );
};

export default Details;
