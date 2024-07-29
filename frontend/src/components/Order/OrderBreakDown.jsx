import { FaArrowRight } from "react-icons/fa";

/**
 * Author: Raj Kamlesh Patel
 * Banner ID: B00978721
 * Email: rj227488@dal.ca
 */

function OrderBreakDown() {
  return (
    <div className="flex flex-col w-full gap-8 lg:w-5/6">
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl font-bold capitalize">total</h2>
        <span className="text-lg capitalize">payment</span>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between">
          <span className="capitalize text-md">cart total</span>
          <span className="text-md">$36.78</span>
        </div>
        <div className="flex justify-between">
          <span className="capitalize text-md">tax</span>
          <span className="text-md">$36.78</span>
        </div>
        <div className="my-0 divider"></div>
        <div className="flex justify-between">
          <span className="capitalize text-md">total amount</span>
          <span className="text-md">$36.78</span>
        </div>
      </div>
      <button
        className="w-full btn btn-primary"
        onClick={() => alert("Proceed to Checkout")}
      >
        <p className="flex items-center gap-2">
          <span>Checkout</span>
          <FaArrowRight />
        </p>
      </button>
    </div>
  );
}

export default OrderBreakDown;
