import { Link, useParams } from "react-router-dom";

const SinglePendingRequest = () => {
  const { email } = useParams();

  return (
    <div className="container mx-auto px-6 py-6">
      <div className="grid grid-cols-1 gap-10">
        <div className="flex flex-row justify-between">
        <div>
          <h1 className="font-bold text-3xl">User Details</h1>
        </div>
        <div>
          <Link to="admin/pending-request">
            <button className="btn btn-neutral">Back</button>
          </Link>
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
                value="Jon"
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
                value="Targaryen"
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
                value="jon@j.com"
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
                value="1234567"
                className="input input-bordered w-full"
                readOnly
              />
            </div>
            <div className="form-control sm:col-span-2">
              <label className="label">
                <span className="label-text font-bold">Company/Restaurant Address</span>
              </label>
              <input
                type="text"
                value="123 Main St, Opposite Rogers Drive"
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
                value="Halifax"
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
                value="Nova Scotia"
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
                value="1234JFSJSDK12455"
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
