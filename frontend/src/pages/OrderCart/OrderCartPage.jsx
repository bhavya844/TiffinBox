import { Link } from "react-router-dom";
import OrderBreakDown from "../../components/OrderCart/OrderBreakDown";
import OrderItems from "../../components/OrderCart/OrderItems";
import { useOrderCartContext } from "../../context/OrderCartContext/OrderCartContext";

/**
 * Author: Raj Kamlesh Patel
 * Banner ID: B00978721
 * Email: rj227488@dal.ca
 */

function OrderCartPage() {
  const { cart, loading } = useOrderCartContext();

  return (
    <div className="flex flex-col items-center min-h-dvh">
      <div className="flex flex-col w-full max-w-5xl gap-5 px-4 my-10">
        <p className="mb-10 text-4xl font-bold">
          <span className="text-5xl text-primary">/</span>
          <span>Cart</span>
        </p>
        {loading && (
          <div className="grid pt-20 place-content-center">
            <span className="text-center loading loading-dots loading-lg text-primary"></span>
          </div>
        )}
        {cart.cartItem === null && !loading && (
          <div className="grid flex-1 w-full h-full gap-8 place-content-center">
            <h2 className="text-3xl font-semibold">Your Cart is Empty</h2>
            <div
              className="text-center"
              onClick={() => alert("Redirect to Home Page")}
            >
              <Link to="#" role="button" className="btn btn-primary">
                Let's Order Something
              </Link>
            </div>
          </div>
        )}
        {cart?.cartItem !== null && !loading && (
          <div className="flex flex-col gap-8 lg:flex-row">
            <section className="flex-[1.5] flex flex-col gap-4">
              <OrderItems />
            </section>
            <section className="flex justify-end flex-1">
              <OrderBreakDown />
            </section>
          </div>
        )}
      </div>
    </div>
  );
}

export default OrderCartPage;
