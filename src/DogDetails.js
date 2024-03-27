import React from "react";
import { Navigate, Link, useParams } from "react-router-dom";

const DogDetails = ({ dogs }) => {
  const { name } = useParams();

  if (!dogs.includes(name.toLowerCase())) return <Navigate to="/dogs" />;
  return (
    <div>
      <h2>{name}</h2>
      <Link to="/dogs">Home</Link>
    </div>
  );
};

export default DogDetails;
