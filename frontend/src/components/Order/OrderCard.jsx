import { Link } from "react-router-dom";

/**
 * Author: Raj Kamlesh Patel
 * Banner ID: B00978721
 * Email: rj227488@dal.ca
 */

function OrderCard({ order }) {
  return (
    <section className="shadow card md:card-side bg-base-100">
      <figure>
        <img
          src={order.providerImage}
          alt="Album"
          className="object-cover w-full h-52 md:h-full md:w-80"
        />
      </figure>
      <div className="card-body">
        <h2 className="text-3xl card-title">{order.rName}</h2>
        <p className="flex flex-col gap-2">
          <span className="text-2xl">${order.price}</span>
          <span className="text-gray-500 text-md">{order.date}</span>
        </p>
        <div className="justify-end card-actions">
          <Link to="/order-details" className="btn btn-primary">
            View
          </Link>
        </div>
      </div>
    </section>
  );
}

export default OrderCard;
