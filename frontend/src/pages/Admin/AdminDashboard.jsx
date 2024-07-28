import { useEffect } from "react";
import { useAdminContext } from "../../context/AdminContext/AdminContext";

const AdminDashboard = () => {

  const { analysisDetails, getAnalysis } = useAdminContext();

  useEffect(() => {
    getAnalysis();
  }, [])
  

  return (
    <div className="container mx-auto px-6 py-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-3 justify-stretch">
        <div className="card bg-base-100 shadow-md">
          <div className="card-body">
            <h1 className="card-title text-3xl">
              <p className="text-center">Total Users</p>
            </h1>
            <p className="font-semibold text-center">{analysisDetails?.totalUsers || 0}</p>
          </div>
        </div>
        <div className="card w-50 bg-base-100 shadow-md">
          <div className="card-body">
            <h1 className="card-title text-3xl">
              <p className="text-center">Total Orders</p>
            </h1>
            <p className="font-semibold text-center">{analysisDetails?.totalOrders || 0}</p>
          </div>
        </div>
        <div className="card w-50 bg-base-100 shadow-md">
          <div className="card-body">
            <h1 className="card-title text-3xl">
              <p className="text-center">Total Earnings</p>
            </h1>
            <p className="font-semibold text-center">${analysisDetails?.totalEarnings || 0}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
