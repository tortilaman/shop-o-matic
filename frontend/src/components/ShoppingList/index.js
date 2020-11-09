// Packages
import React from "react";
import { useQuery, useMutation, gql } from "@apollo/client";
// Components
import SLItem from "./SLItem";

// CONSTANTS
const UPDATE_LIST_ITEM = gql`
  mutation UpdateShoppingListItem(
    $id: MongoID!
    $record: UpdateByIdListItemInput!
  ) {
    shoppingListUpdateById(_id: $id, record: $record) {
      record {
        completed
        item {
          name
        }
      }
    }
  }
`;

const GET_SHOPPING_LIST = gql`
  {
    shoppingListMany(filter: {}) {
      item {
        name
        favorite {
          name
          brand {
            name
          }
        }
      }
      quantity
      completed
      _id
    }
  }
`;

const ShoppingList = () => {
  const { loading, error, data, refetch } = useQuery(GET_SHOPPING_LIST, {
    fetchPolicy: "cache-and-network",
  });

  const [updateListItem] = useMutation(UPDATE_LIST_ITEM);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  // Map over shopping list items
  const shoppingList = data.shoppingListMany.map((elem) => {
    // Data
    const { item, quantity, completed, _id } = elem;

    // Update functions
    const toggleCompleted = async (e) => {
      await updateListItem({
        variables: { id: _id, record: { completed: !completed } },
      });
      refetch();
      // TODO: There must be a better way to do this than calling `refetch`. This is refreshing the data for everything instead of just this one item, that's not efficient at all.
    };
    return (
      <SLItem
        food={item.name}
        product={item.favorite.name}
        quantity={quantity}
        toggleCompleted={toggleCompleted}
        completed={completed}
        key={_id}
      />
    );
  });
  return <div>{shoppingList}</div>;
};

export default ShoppingList;
