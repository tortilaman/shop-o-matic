import React from "react";

const SLItem = (props) => {
  const { food, product, quantity, toggleCompleted, completed } = props;

  return (
    <div className="p-2 flex flex-row items-center mx-6">
      <input type="checkbox" onChange={toggleCompleted} checked={completed} />
      <div className="h-full ml-4"></div>
      <div className=" w-auto ml-2 flex-grow">
        <p className="text-indigo-500 font-medium">{food}</p>
        <p className="text-gray-600">{product}</p>
      </div>
      <div className="self-end">{quantity}</div>
    </div>
  );
};

export default SLItem;
