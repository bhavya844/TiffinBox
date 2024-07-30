import { Link } from "react-router-dom";

/**
 * Author: Raj Kamlesh Patel
 * Banner ID: B00978721
 * Email: rj227488@dal.ca
 */

function OrderCard({ order }) {
  return (
    <section
      className={`shadow card md:card-side bg-base-100 ${
        order.orderStatus === "DELIVERED" && "bg-slate-300"
      }`}
    >
      <figure className="h-60">
        <img
          src={order.mealImage}
          alt="Album"
          className="w-full h-full object-fit md:w-80"
        />
      </figure>
      <div className="card-body">
        <h2 className="text-3xl card-title">{order.companyName}</h2>
        <p className="flex flex-col gap-2">
          <span className="text-2xl">${order.amount}</span>
          <span className="text-gray-500 text-md">{order.orderDate}</span>
        </p>
        <div className="justify-end card-actions">
          <Link
            to={`/customer/order-track/${order.orderId}`}
            className="btn btn-neutral"
          >
            Track Order
          </Link>
          <Link
            to={`/customer/order-details/${order.orderId}`}
            className="btn btn-primary"
          >
            View
          </Link>
        </div>
      </div>
    </section>
  );
}

export default OrderCard;
