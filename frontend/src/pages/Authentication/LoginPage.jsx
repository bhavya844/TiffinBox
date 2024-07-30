import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Model from "../../components/Login/Modal";
import { toast } from "react-hot-toast";
import { useAuthContext } from "../../context/AuthenticationContext/AuthContext";
import { UserRoles } from "../../utils/UserRoles";
const LoginPage = () => {
  const [formData, setFormData] = useState({});
  const [openModel, setOpenModel] = useState(false);
  const navigate = useNavigate();
  const { userData, handleLoginSubmit } = useAuthContext();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    getValues,
    formState: { errors },
  } = useForm();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    if (userData) {
      if (userData.userRole === UserRoles.CUSTOMER) {
        navigate("/customer/home-page");
      } else if (userData.userRole === UserRoles.FOOD_SERVICE_PROVIDER) {
        navigate("/foodprovider/mealmenumanagement");
      } else if (userData.userRole === UserRoles.ADMIN) {
        navigate("/admin/dashboard");
      }
    }
  }, [userData]);

  return (
    <div>
      <div className="w-full px-10 mx-auto mt-6 mb-10 lg:w-2/5 min-h-dvh">
        <h4
          className="text-4xl font-medium text-center"
          style={{ color: "#FFA500" }}
        >
          LOGIN
        </h4>

        <div>
          <form onSubmit={handleSubmit(handleLoginSubmit)} className="mt-6">
            <div className="flex flex-col w-full gap-4 ">
              <div className="w-full">
                <label htmlFor="email" className="mb-2 text-lg text-gray-800">
                  Email address
                </label>
                <input
                  type="email"
                  {...register("email_id", {
                    required: "* This is required",
                    onChange: handleChange,
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3,}$/,
                      message: "Invalid email address format",
                    },
                  })}
                  className={`${
                    getValues("email_id")
                      ? "border-orange-300"
                      : "border-gray-300"
                  } border px-3 py-2 mt-2 rounded-sm text-md w-full focus:outline-orange-400 ${
                    errors.email_id ? "border-red-400" : "border-gray-300"
                  }`}
                />
                {errors.email_id && (
                  <span className="block mt-2 text-red-400">
                    {errors.email_id.message}
                  </span>
                )}
              </div>

              <div className="w-full">
                <label
                  htmlFor="password"
                  className="mb-2 text-lg text-gray-800"
                >
                  Password
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: "* This is required",
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters long",
                    },
                    // pattern: {
                    //   value: /^(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z\d\s])[a-zA-Z\d\S]{8,}$/,
                    //   message: "Password must contain at least one uppercase letter, one number, and one special character",
                    // },
                    onChange: handleChange,
                  })}
                  className={`${
                    getValues("password")
                      ? "border-orange-300"
                      : "border-gray-300"
                  } ${
                    errors.password ? "border-red-400" : "border-gray-300"
                  } border px-3 py-2 mt-2 rounded-sm text-md w-full focus:outline-orange-400`}
                />
                {errors.password && (
                  <span className="block mt-2 text-red-400">
                    {errors.password.message}
                  </span>
                )}
              </div>
            </div>

            <Link
              to="/forgot-password"
              className="block my-6 font-medium text-center text-blue-500 underline"
            >
              Forgot Password
            </Link>
            <button
              type="submit"
              className="block py-3 mx-auto text-xl font-semibold text-white rounded-md btn btn-secondary min-w-48"
            >
              LOGIN
            </button>

            <h6
              onClick={() => setOpenModel(true)}
              className="block my-6 font-medium text-center text-blue-500 underline cursor-pointer"
            >
              {" "}
              Haven't register yet? Please click here.{" "}
            </h6>
          </form>
        </div>
      </div>

      {
        <Model isOpen={openModel} onClose={() => setOpenModel(false)}>
          <>
            <div className="flex items-center justify-between md:justify-between">
              <div className="block w-full text-center">
                <p className="text-center text-[20px] font-gilroy-bold">
                  I want to register my self as a :
                </p>
              </div>

              {/* <span className="ml-4 cursor-pointer" onClick={() => {
                  setOpenModel(false)
              }}><RxCross2 className='mb-1 text-[30px] text-orange-500' /></span> */}
            </div>

            <div className="flex items-center justify-center gap-10 px-6 mt-8">
              <Link
                to="/customer-register"
                className="text-white min-w-[120px] mx-auto text-center py-3 rounded-sm font-medium text-lg"
                style={{ backgroundColor: "#FFA500" }}
              >
                Customer
              </Link>

              <Link
                to="/seller-register"
                className="text-white min-w-[120px] mx-auto text-center py-3 rounded-sm font-medium text-lg"
                style={{ backgroundColor: "#FFA500" }}
              >
                Seller
              </Link>
            </div>
          </>
        </Model>
      }
    </div>
  );
};

export default LoginPage;
