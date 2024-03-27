import React from "react";
import { Link } from "react-router-dom";

const DogList = () => {
  return (
    <div>
      <h1>Click on a dogs name for more info</h1>
      <ul>
        <Link to={"/dogs/duke"}>Duke</Link>
        <Link to={"/dogs/perry"}>Perry</Link>
        <Link to={"/dogs/tubby"}>Tubby</Link>
      </ul>
    </div>
  );
};

export default DogList;
