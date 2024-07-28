import OrderBreakDown from "../../components/Order/OrderBreakDown";
import OrderItems from "../../components/Order/OrderItems";

/**
 * Author: Raj Kamlesh Patel
 * Banner ID: B00978721
 * Email: rj227488@dal.ca
 */

function OrderCartPage() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col w-full max-w-5xl gap-5 px-4 my-10">
        <p className="mb-10 text-4xl font-bold">
          <span className="text-5xl text-primary">/</span>
          <span>Cart</span>
        </p>
        <div className="flex flex-col gap-8 lg:flex-row">
          <section className="flex-[1.5] flex flex-col gap-4">
            <OrderItems />
          </section>
          <section className="flex justify-end flex-1">
            <OrderBreakDown />
          </section>
        </div>
      </div>
    </div>
  );
}

export default OrderCartPage;
