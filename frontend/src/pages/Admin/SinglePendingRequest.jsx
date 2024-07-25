import { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useAdminContext } from "../../context/AdminContext/AdminContext";

const SinglePendingRequest = () => {
  const navigate = useNavigate();
  const { foodServiceProviderId } = useParams();
  const { singleUserDetails, getSinglePendingRequest } = useAdminContext();

  useEffect(() => {
    getSinglePendingRequest(foodServiceProviderId);
  }, [foodServiceProviderId]);

  return (
    <div className="container mx-auto px-6 py-6">
      <div className="grid grid-cols-1 gap-10">
        <div className="flex flex-row justify-between">
          <div>
            <h1 className="font-bold text-3xl">User Details</h1>
          </div>
          <div>
            <button
              className="btn btn-neutral"
              onClick={() => navigate("/admin/pending-request")}
            >
              Back
            </button>
          </div>
        </div>
        <form>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">First Name</span>
              </label>
              <input
                type="text"
                value={singleUserDetails?.firstName || ""}
                className="input input-bordered w-full"
                readOnly
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Last Name</span>
              </label>
              <input
                type="text"
                value={singleUserDetails?.lastName || ""}
                className="input input-bordered w-full"
                readOnly
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Email</span>
              </label>
              <input
                type="email"
                value={singleUserDetails?.email || ""}
                className="input input-bordered w-full"
                readOnly
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Contact Number</span>
              </label>
              <input
                type="text"
                value={singleUserDetails?.contact || ""}
                className="input input-bordered w-full"
                readOnly
              />
            </div>
            <div className="form-control sm:col-span-2">
              <label className="label">
                <span className="label-text font-bold">
                  Company/Restaurant Address
                </span>
              </label>
              <input
                type="text"
                value={singleUserDetails?.companyAddress || ""}
                className="input input-bordered w-full"
                readOnly
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">City</span>
              </label>
              <input
                type="text"
                value={singleUserDetails?.city || ""}
                className="input input-bordered w-full"
                readOnly
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Province</span>
              </label>
              <input
                type="text"
                value={singleUserDetails?.province || ""}
                className="input input-bordered w-full"
                readOnly
              />
            </div>
            <div className="form-control sm:col-span-2">
              <label className="label">
                <span className="label-text font-bold">License Number</span>
              </label>
              <input
                type="text"
                value={singleUserDetails?.licenseNumber || ""}
                className="input input-bordered w-full"
                readOnly
              />
            </div>
          </div>
          <div className="mt-4 flex justify-start space-x-4">
            <button className="btn btn-success">Accept</button>
            <button className="btn btn-error">Reject</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SinglePendingRequest;
