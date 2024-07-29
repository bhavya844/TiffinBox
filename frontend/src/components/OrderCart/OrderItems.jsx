import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useOrderCartContext } from "../../context/OrderCartContext/OrderCartContext";

/**
 * Author: Raj Kamlesh Patel
 * Banner ID: B00978721
 * Email: rj227488@dal.ca
 */

function OrderItems() {
  const { cart, increaseQuantity, decreaseQuantity } = useOrderCartContext();
  const { cartItem } = cart;

  return (
    <div className="flex flex-col items-center w-full overflow-hidden rounded-md shadow-md md:flex-row bg-slate-50">
      <figure className="w-full md:w-48">
        <img
          src="https://picsum.photos/300"
          alt="Shoes"
          className="object-cover w-full h-40 -z-10 md:h-full md:w-80"
        />
      </figure>
      <div className="grid items-center flex-1 w-full p-4 md:w-auto md:grid-cols-2">
        <div className="flex flex-col gap-1">
          <h2 className="text-xl font-bold">{cartItem.companyName}</h2>
          <span className="text-slate-500">{cartItem.mealName}</span>
          <span className="font-semibold">
            {cartItem.mealPrice}{" "}
            <div className="capitalize badge badge-info">trial</div>
          </span>
        </div>
        <div className="flex gap-1 my-4 md:my-0 md:mr-4 justify-self-center md:justify-self-end">
          <button
            className="btn btn-circle btn-primary btn-sm"
            onClick={decreaseQuantity}
          >
            <FaMinus className="text-base-200" />
          </button>
          <input
            type="text"
            name=""
            id=""
            value={cart?.quantity}
            className="w-10 text-center text-black border-1 border-neutral input input-sm"
          />
          <button
            className="btn btn-circle btn-primary btn-sm"
            onClick={increaseQuantity}
          >
            <FaPlus className="text-base-200" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default OrderItems;
