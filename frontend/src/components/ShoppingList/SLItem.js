import React, { useState } from "react";

const SLItem = (props) => {
  const {
    food,
    product,
    quantity,
    toggleCompleted,
    completed,
    changeQuantity,
  } = props;

  const [quantityState, setQuantityState] = useState(quantity);

  const handleQuantityChange = (e) => {
    setQuantityState(e.target.value);
  };

  return (
    <div className="p-2 flex flex-row items-center mx-6">
      <input type="checkbox" onChange={toggleCompleted} checked={completed} />
      <div className="h-full ml-4"></div>
      {/* Item Description */}
      <div className=" w-auto ml-2 flex-grow">
        <p className="text-indigo-500 font-medium">{food}</p>
        <p className="text-gray-600">{product}</p>
      </div>
      <div className="self-end">
        {/* Quantity Field */}
        <input
          value={quantityState}
          onKeyDown={(e) => {
            console.log(e.code);
            if (e.code === "Enter") changeQuantity(quantityState);
          }}
          onBlur={(e) => {
            if (e.target.value !== props.quantity)
              changeQuantity(quantityState);
          }}
          onChange={handleQuantityChange}
        />
      </div>
      <div className="self-end">
        <button>Delete</button>
      </div>
    </div>
  );
};

export default SLItem;
