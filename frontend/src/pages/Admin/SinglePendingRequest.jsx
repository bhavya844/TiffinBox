import { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useAdminContext } from "../../context/AdminContext/AdminContext";
import Alert from "../../components/Alert";

const SinglePendingRequest = () => {
  const navigate = useNavigate();
  const { foodServiceProviderId } = useParams();
  const {
    singleUserDetails,
    getSinglePendingRequest,
    approvePendingRequest,
    alertMessage,
    alertVisible,
    hideAlert,
    alertStatus,
    rejectPendingRequest,
  } = useAdminContext();

  const handleApprove = async (email) => {
    await approvePendingRequest(email);
    setTimeout(() => {
      hideAlert();
      navigate("/admin/pending-request");
    }, 3000);
  };

  const handleReject = async (email) => {
    await rejectPendingRequest(email);
    setTimeout(() => {
      hideAlert();
      navigate("/admin/pending-request");
    }, 3000);
  };

  useEffect(() => {
    getSinglePendingRequest(foodServiceProviderId);
  }, [foodServiceProviderId]);

  return (
    <div className="container mx-auto px-6 py-6">
      {alertVisible && (
        <Alert
          message={alertMessage}
          visible={alertVisible}
          success={alertStatus}
        />
      )}
      <div className="grid grid-cols-1 gap-10">
        <div className="flex flex-row justify-between">
          <div>
            <h1 className="font-bold text-3xl">User Details</h1>
          </div>
          <div className="flex space-x-4">
            <button
              className="btn btn-success"
              onClick={() => handleApprove(singleUserDetails?.email)}
            >
              Accept
            </button>
            <button className="btn btn-error" onClick={() => handleReject(singleUserDetails?.email)}>Reject</button>
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
