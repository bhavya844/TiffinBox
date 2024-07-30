import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAdminContext } from "../../context/AdminContext/AdminContext";

const SinglePendingRequest = () => {
  const navigate = useNavigate();
  const { foodServiceProviderId } = useParams();
  const {
    singleUserDetails,
    getSinglePendingRequest,
    approvePendingRequest,
    rejectPendingRequest,
  } = useAdminContext();

  const handleApprove = async (email) => {
    await approvePendingRequest(email);
    navigate("/admin/pending-request");
  };

  const handleReject = async (email) => {
    await rejectPendingRequest(email);
    navigate("/admin/pending-request");
  };

  useEffect(() => {
    getSinglePendingRequest(foodServiceProviderId);
  }, [foodServiceProviderId]);

  return (
    <div className="container px-6 py-6 mx-auto">
      <div className="grid grid-cols-1 gap-10">
        <div className="flex flex-row justify-between">
          <div>
            <h1 className="text-3xl font-bold">User Details</h1>
          </div>
          <div className="flex space-x-4">
            <button
              className="btn btn-success"
              onClick={() => handleApprove(singleUserDetails?.email)}
            >
              Accept
            </button>
            <button
              className="btn btn-error"
              onClick={() => handleReject(singleUserDetails?.email)}
            >
              Reject
            </button>
            <button
              className="btn btn-neutral"
              onClick={() => navigate("/admin/pending-request")}
            >
              Back
            </button>
          </div>
        </div>
        <form>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2">
            <div className="form-control">
              <label className="label">
                <span className="font-bold label-text">First Name</span>
              </label>
              <input
                type="text"
                value={singleUserDetails?.firstName || ""}
                className="w-full input input-bordered"
                readOnly
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="font-bold label-text">Last Name</span>
              </label>
              <input
                type="text"
                value={singleUserDetails?.lastName || ""}
                className="w-full input input-bordered"
                readOnly
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="font-bold label-text">Email</span>
              </label>
              <input
                type="email"
                value={singleUserDetails?.email || ""}
                className="w-full input input-bordered"
                readOnly
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="font-bold label-text">Contact Number</span>
              </label>
              <input
                type="text"
                value={singleUserDetails?.contact || ""}
                className="w-full input input-bordered"
                readOnly
              />
            </div>
            <div className="form-control sm:col-span-2">
              <label className="label">
                <span className="font-bold label-text">
                  Company/Restaurant Address
                </span>
              </label>
              <input
                type="text"
                value={singleUserDetails?.companyAddress || ""}
                className="w-full input input-bordered"
                readOnly
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="font-bold label-text">City</span>
              </label>
              <input
                type="text"
                value={singleUserDetails?.city || ""}
                className="w-full input input-bordered"
                readOnly
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="font-bold label-text">Province</span>
              </label>
              <input
                type="text"
                value={singleUserDetails?.province || ""}
                className="w-full input input-bordered"
                readOnly
              />
            </div>
            <div className="form-control sm:col-span-2">
              <label className="label">
                <span className="font-bold label-text">License Number</span>
              </label>
              <input
                type="text"
                value={singleUserDetails?.licenseNumber || ""}
                className="w-full input input-bordered"
                readOnly
              />
            </div>
          </div>
        </form>
        <div className="flex justify-start space-x-4">
          <button
            className="btn btn-success"
            onClick={() => approvePendingRequest(singleUserDetails?.email)}
          >
            Accept
          </button>
          <button className="btn btn-error">Reject</button>
        </div>
      </div>
    </div>
  );
};

export default SinglePendingRequest;
