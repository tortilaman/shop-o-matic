import React from "react";
import { useQuery, gql } from "@apollo/client";
import Accordion from "../Accordion";

const FoodLibrary = () => {
  const { loading, error, data } = useQuery(gql`
    {
      foodMany(filter: {}) {
        name
        products {
          name
        }
      }
    }
  `);

  if (loading) return <p>Loading...</p>;
  if (error) {
    // console.log(error);
    return <p>Error</p>;
  }

  const foodList = data.foodMany.map(({ name, products }) => {
    const renderedProducts = products.map(({ name }) => <li>{name}</li>);
    return (
      <div className="ml-6 mt-6">
        <Accordion title={name}>{renderedProducts}</Accordion>
      </div>
    );
  });

  return <div>{foodList}</div>;
};

export default FoodLibrary;
