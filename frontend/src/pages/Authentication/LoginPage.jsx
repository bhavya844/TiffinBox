import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Model from "../../components/Login/Modal";
import { toast } from "react-hot-toast";
import { useAuthContext } from "../../context/AuthenticationContext/AuthContext";
import { UserRoles } from "../../utils/UserRoles";
const LoginPage = () => {
  const [formData, setFormData] = useState({});
  const [openModel, setOpenModel] = useState(false)
  const navigate = useNavigate();
  const {userData, handleLoginSubmit}  = useAuthContext();

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

  useEffect(()=>{
    if(userData){
      if(userData.userRole === UserRoles.CUSTOMER){
        navigate("/customer/home-page")
      }else if(userData.userRole === UserRoles.FOOD_SERVICE_PROVIDER){
        navigate("/foodprovider/mealmenumanagement")
      }else if(userData.userRole === UserRoles.ADMIN){
        navigate("/admin/dashboard")
      }
    }
  }, [userData])


  return (
    <div>
      <div className="lg:w-2/5 px-10 w-full mx-auto mb-10 mt-6">
        <h4 className="text-center text-4xl font-medium" style={{ color: '#FFA500' }}>
          LOGIN
        </h4>

        <div>
          <form onSubmit={handleSubmit(handleLoginSubmit)} className="mt-6">
            <div className=" w-full flex flex-col gap-4">
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
                  className={`${getValues("email_id")
                    ? "border-orange-300"
                    : "border-gray-300"
                    } border px-3 py-2 mt-2 rounded-sm text-md w-full focus:outline-orange-400 ${errors.email_id ? "border-red-400" : "border-gray-300"
                    }`}
                />
                {errors.email_id && (
                  <span className="text-red-400 mt-2 block">
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
                  className={`${getValues("password")
                    ? "border-orange-300"
                    : "border-gray-300"
                    } ${errors.password ? "border-red-400" : "border-gray-300"
                    } border px-3 py-2 mt-2 rounded-sm text-md w-full focus:outline-orange-400`}
                />
                {errors.password && (
                  <span className="text-red-400 mt-2 block">
                    {errors.password.message}
                  </span>
                )}
              </div>
            </div>

            <Link to='/forgot-password' className="text-center block my-6 font-medium underline text-blue-500">Forgot Password</Link>
            <button
              type="submit"
              className="btn btn-secondary block py-3 min-w-48 mx-auto  rounded-md text-white font-semibold text-xl"
            >
              LOGIN
            </button>

            <h6 onClick={() => setOpenModel(true)} className="cursor-pointer text-center block my-6 font-medium underline text-blue-500"> Haven't register yet? Please click here. </h6>
          </form>
        </div>
      </div>

      {
        <Model isOpen={openModel} onClose={() => setOpenModel(false)}>
          <>
            <div className='flex justify-between md:justify-between items-center'>
              <div className='block w-full text-center'>
                <p className='text-center text-[20px] font-gilroy-bold' >I want to register my self as a :</p>
              </div>

              {/* <span className="cursor-pointer ml-4" onClick={() => {
                  setOpenModel(false)
              }}><RxCross2 className='mb-1 text-[30px] text-orange-500' /></span> */}
            </div>

            <div className="flex gap-10 justify-center items-center mt-8 px-6">
              <Link to='/customer-register' className="text-white min-w-[120px] mx-auto text-center py-3 rounded-sm font-medium text-lg" style={{ backgroundColor: '#FFA500' }}>Customer</Link>

              <Link to='/seller-register' className="text-white min-w-[120px] mx-auto text-center py-3 rounded-sm font-medium text-lg" style={{ backgroundColor: '#FFA500' }}>Seller</Link>
            </div>
          </>

        </Model>
      }
    </div>
  );
};

export default LoginPage;
