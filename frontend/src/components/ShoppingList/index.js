// Packages
import React from "react";
import { useQuery, useMutation, gql } from "@apollo/client";
// Components
import SLItem from "./SLItem";
import AddItem from "./AddItem";

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

    const changeQuantity = async (quantity) => {
      await updateListItem({
        variables: { id: _id, record: { quantity: quantity } },
      });
      refetch();
      // TODO: Again, there must be a better way.
    };

    // Render
    return (
      <SLItem
        food={item.name}
        product={item.favorite.name}
        quantity={quantity}
        toggleCompleted={toggleCompleted}
        changeQuantity={changeQuantity}
        completed={completed}
        key={_id}
      />
    );
  });

  return (
    <div className="flex flex-col flex-no-wrap">
      <AddItem />
      <div className="flex flex-row flex-no-wrap mt-4 ml-16 pl-1 font-medium text-xl">
        <span className="w-auto ml-2 flex-grow">Item</span>
        <span className="">Quantity</span>
      </div>
      {shoppingList}
    </div>
  );
};

export default ShoppingList;
