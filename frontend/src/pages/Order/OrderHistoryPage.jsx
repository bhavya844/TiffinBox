import OrderCard from "../../components/Order/OrderCard";

/**
 * Author: Raj Kamlesh Patel
 * Banner ID: B00978721
 * Email: rj227488@dal.ca
 */

const data = {
  providerImage:
    "https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg",
  rName: "Tiffin service name",
  price: 36.78,
  date: "10 June 2024",
};

function OrderHistoryPage() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full max-w-5xl px-4 my-10">
        <p className="mb-10 text-4xl font-bold">
          <span className="text-5xl text-primary">/</span>
          <span>Order History</span>
        </p>
        <div className="flex flex-col gap-8">
          {[1, 2, 3].map((card) => {
            return <OrderCard key={card} order={data} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default OrderHistoryPage;
