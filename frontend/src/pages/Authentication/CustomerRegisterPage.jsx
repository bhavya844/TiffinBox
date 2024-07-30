import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { IoIosArrowDown } from "react-icons/io";

const CustomerRegisterPage = () => {

  const [formData, setFormData] = useState({});

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    getValues,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission logic here
    toast.success("Register successfulllyyy")
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

 
  const handlecontact_numberChange = (e) => {
    const value = e.target.value.replace(/[^+\d\sx]/g, "").replace(/\s+/g, ' ');
    const formattedValue = formatPhoneNumber(value);
    setValue("contact_number",formattedValue);
};

const formatPhoneNumber = (value) => {
    // Remove any previous formatting
    value = value.replace(/[^\d+]/g, '');

    // Check for country code and extensions
    let countryCode = '';
    let ext = '';

    // Handling country code
    if (value.startsWith('1')) {
        countryCode = '+1';
        value = value.substring(1);
    } else if (value.startsWith('+1')) {
        countryCode = '+1';
        value = value.substring(2);
    }

    // Handling extensions
    let extIndex = value.indexOf('ext');
    if (extIndex !== -1) {
        ext = value.substring(extIndex + 3); // Getting the digits after "ext"
        value = value.substring(0, extIndex); // Getting the number part
    }

    // Extract area code, first part, and second part of the phone number
    let areaCode = value.substring(0, 3);
    let firstPart = value.substring(3, 6);
    let secondPart = value.substring(6, 10);

    // Format the phone number
    let formattedNumber = `${countryCode}(${areaCode})-${firstPart}(${secondPart})`;

    if (ext) {
        formattedNumber += ` ext ${ext}`;
    }

    return formattedNumber;
  };

  return (
    <div>
      <div className="lg:w-3/5 px-10 w-full mx-auto mb-10 mt-6">
        <h4 className="text-center text-4xl font-medium" style={{ color: '#FFA500' }}>
          Register as a Customer
        </h4>

        <div>
          <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
            <div className=" w-full flex flex-col gap-4">

              <div className="flex lg:flex-row flex-col gap-6">
                <div className="w-full">
                  <label htmlFor="first_name" className="mb-2 text-lg text-gray-800">First name</label>
                  <input
                    {...register("first_name", {
                      required: '* This is required',
                      onChange: handleChange,
                    })}
                    className={`${getValues("first_name")
                      ? "border-orange-300"
                      : "border-gray-300"
                      } ${errors.first_name ? "border-red-400" : "border-gray-300"
                      } border px-3 py-2 rounded-sm text-md w-full focus:outline-orange-400`}
                  />

                  {errors.first_name && (
                    <span className="text-red-400 mt-2 block">
                      {errors.first_name.message}
                    </span>
                  )}
                </div>

                <div className="w-full">
                  <label htmlFor="last_name" className="mb-2 text-lg text-gray-800">Last name</label>
                  <input
                    {...register("last_name", {
                      required: '* This is required',
                      onChange: handleChange,
                    })}

                    className={`${getValues("last_name")
                      ? "border-orange-300"
                      : "border-gray-300"
                      } ${errors.first_name ? "border-red-400" : "border-gray-300"} border px-3 py-2 rounded-sm text-md w-full focus:outline-orange-400`}
                  />
                  {errors.last_name && (
                    <span className="text-red-400 mt-2 block">
                      {errors.last_name.message}
                    </span>
                  )}
                </div>
              </div>

              <div className="flex lg:flex-row flex-col gap-6">
                <div className="w-full">
                  <label htmlFor="email" className="mb-2 text-lg text-gray-800">Email address</label>
                  <input
                    type="email"
                    {...register("email_id", {
                      required: '* This is required',
                      onChange: handleChange,
                      pattern: {
                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3,}$/,
                        message: "Invalid email address format"
                      }
                    })}
                    className={`${getValues("email_id") ? "border-orange-300" : "border-gray-300"
                      } border px-3 py-2 rounded-sm text-md w-full focus:outline-orange-400 ${errors.email_id ? "border-red-400" : "border-gray-300"
                      }`}
                  />
                  {errors.email_id && (
                    <span className="text-red-400 mt-2 block">
                      {errors.email_id.message}
                    </span>
                  )}
                </div>

                <div className="w-full">
                  <label htmlFor="contact_number" className="mb-2 text-lg text-gray-800">Contact number</label>
                  <input
                    onChangeCapture={handlecontact_numberChange}
                    {...register("contact_number", {
                      required: '* This is required',
                      onChange: handleChange,
                      pattern: /^\d{10,}$/,
                      message: "Invalid Phone Number"
                    })}
                    className={`${getValues("contact_number") ? "border-orange-300" : "border-gray-300"
                      } border px-3 py-2 rounded-sm text-md w-full focus:outline-orange-400 ${errors.contact_number ? "border-red-400" : "border-gray-300"
                      }`}
                  />
                  {errors.contact_number && (
                    <span className="text-red-400 mt-2 block">
                      {errors.contact_number.message}
                    </span>
                  )}
                </div>
              </div>


              <div className="flex lg:flex-row flex-col gap-6">
                <div className="w-full">
                  <label htmlFor="street_address" className="mb-2 text-lg text-gray-800">Street Address</label>
                  <input
                    {...register("street_address", {
                      required: '* This is required',
                      onChange: handleChange,
                    })}
                    className={`${getValues("street_address")
                      ? "border-orange-300"
                      : "border-gray-300"
                      } ${errors.street_address ? "border-red-400" : "border-gray-300"
                      } border px-3 py-2 rounded-sm text-md w-full focus:outline-orange-400`}
                  />

                  {errors.street_address && (
                    <span className="text-red-400 mt-2 block">
                      {errors.street_address.message}
                    </span>
                  )}
                </div>

                {/* <div className="w-full">
                  <label htmlFor="street_no" className="mb-2 text-lg text-gray-800">Street no.</label>
                  <input
                    {...register("street_no", {
                      required: '* This is required',
                      onChange: handleChange,
                    })}

                    className={`${getValues("street_no")
                      ? "border-orange-300"
                      : "border-gray-300"
                      } ${errors.street_no ? "border-red-500" : "border-gray-300"} border px-3 py-2 rounded-sm text-md w-full focus:outline-orange-600`}
                  />
                  {errors.street_no && (
                    <span className="text-red-500 mt-2 block">
                      {errors.street_no.message}
                    </span>
                  )}
                </div>

                <div className="w-full">
                  <label htmlFor="apt_no" className="mb-2 text-lg text-gray-800">Apt./Home No.</label>
                  <input
                    {...register("apt_no", {
                      required: '* This is required',
                      onChange: handleChange,
                    })}

                    className={`${getValues("apt_no")
                      ? "border-orange-300"
                      : "border-gray-300"
                      } ${errors.apt_no ? "border-red-500" : "border-gray-300"} border px-3 py-2 rounded-sm text-md w-full focus:outline-orange-600`}
                  />
                  {errors.apt_no && (
                    <span className="text-red-500 mt-2 block">
                      {errors.apt_no.message}
                    </span>
                  )}
                </div> */}
              </div>


              <div className="flex lg:flex-row flex-col gap-6">
                <div className="w-full">
                  <div className='relative w-full'>
                    <label htmlFor="city_name" className=" text-lg text-gray-800">City name</label>
                    <input
                      {...register("city_name", {
                        required: '* This is required',
                        onChange: handleChange,
                      })}
                      className={`${getValues("city_name")
                        ? "border-orange-300"
                        : "border-gray-300"
                        } ${errors.first_name ? "border-red-400" : "border-gray-300"
                        } border px-3 py-2 mt-2 rounded-sm text-md w-full focus:outline-orange-400`}
                    />

                  </div>

                  {errors.city_name && (
                    <span className="text-red-400 mt-2 block">
                      {errors.city_name.message}
                    </span>
                  )}
                </div>

                <div className="w-full">
                  <div className='relative w-full'>
                    <label htmlFor="province" className="mb-3 text-lg text-gray-800">Province name</label>
                    <select className={`${getValues('province') ? 'border-orange-300' : 'border-gray-300'} w-full text-black  focus:outline-orange-400 appearance-none px-3 py-2 mt-2 bg-white border border-gray-200 rounded-sm`} {...register('province', { required: '* This is required', onChange: handleChange })}>
                      <option className='pt-4 ' value="">select</option > {/* this value should be blank this is use for title add province from down*/}

                      <option className='pt-4 ' value="Ontario">Alberta</option >
                      <option className='pt-4 ' value="Province 55">British Columbia</option >
                      <option className='pt-4 ' value="Province 58">Manitoba</option >
                      <option className='pt-4 ' value="Province 58">New Brunswick</option >
                      <option className='pt-4 ' value="Province 58">Newfoundland</option >
                      <option className='pt-4 ' value="Province 58">Northwest Territories</option >
                      <option className='pt-4 ' value="Province 58">Nova Scotia</option >
                      <option className='pt-4 ' value="Province 58">Nunavut</option >
                      <option className='pt-4 ' value="Province 58">Ontario</option >
                      <option className='pt-4 ' value="Province 58">Prince Edward Island</option >
                      <option className='pt-4 ' value="Province 58">Quebec</option >
                      <option className='pt-4 ' value="Province 58">Saskatchwan</option >
                      <option className='pt-4 ' value="Province 58">Yukon</option >

                    </select>
                    <IoIosArrowDown className='absolute top-[62%] right-6 text-xl text-gray-500' />

                  </div>

                  {errors.province && (
                    <span className="text-red-400 mt-2 block">
                      {errors.province.message}
                    </span>
                  )}
                </div>

                <div className="w-full">
                  <label htmlFor="postal_code" className="text-lg text-gray-800">Postal code</label>
                  <input
                    type="text"
                    {...register("postal_code", {
                      required: '* This is required',
                      onChange: handleChange,
                      pattern: {
                        value: /^[A-Za-z][0-9][A-Za-z][0-9][A-Za-z][0-9]$/,
                        message: 'Please enter valid postal code',
                      },
                    })}
                    className={`${getValues("postal_code")
                      ? "border-orange-300"
                      : "border-gray-300"
                      } border px-3 py-2 rounded-sm text-md mt-2 w-full focus:outline-orange-400 ${errors.postal_code ? "border-red-400" : "border-gray-300"
                      }
                    `}
                  />

                  {errors.postal_code && (
                    <span className="text-red-400 mt-2 block">
                      {errors.postal_code.message}
                    </span>
                  )}
                </div>
              </div>

              <div className="w-full">
                <label htmlFor="password" className="mb-2 text-lg text-gray-800">Password</label>
                <input
                  type="password"
                  {...register("password", {
                    required: '* This is required',
                    minLength: {
                      value: 8,
                      message: 'Password must be at least 8 characters long',
                    },
                    pattern: {
                      value: /^(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z\d\s])[a-zA-Z\d\S]{8,}$/,
                      message: "Password must contain at least one uppercase letter, one number, and one special character",
                    },
                    onChange: handleChange,
                  })}

                  className={`${getValues("password")
                    ? "border-orange-300"
                    : "border-gray-300"
                    } ${errors.password ? "border-red-400" : "border-gray-300"} border px-3 py-2 rounded-sm text-md w-full focus:outline-orange-400`}
                />
                {errors.password && (
                  <span className="text-red-500 mt-2 block">
                    {errors.password.message}
                  </span>
                )}
              </div>


              <div className="w-full">
                <label htmlFor="confirm_password" className="mb-2 text-lg text-gray-800">Confirm Password</label>
                <input
                  type="password"
                  {...register("confirm_password", {
                    required: '* This is required',
                    validate: {
                      matchesPassword: (value) => {
                        const { password } = getValues();
                        return password === value || 'Passwords do not match';
                      },
                    },
                    minLength: {
                      value: 8,
                      message: 'Password must be at least 8 characters long',
                    },
                    pattern: {
                      value: /^(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z\d\s])[a-zA-Z\d\S]{8,}$/,
                      message: "Password must contain at least one uppercase letter, one number, and one special character",
                    },
                    onChange: handleChange,
                  })}

                  className={`${getValues("confirm_password")
                    ? "border-orange-300"
                    : "border-gray-300"
                    } ${errors.confirm_password ? "border-red-400" : "border-gray-300"} border px-3 py-2 rounded-sm text-md w-full focus:outline-orange-600`}
                />
                {errors.confirm_password && (
                  <span className="text-red-400 mt-2 block">
                    {errors.confirm_password.message}
                  </span>
                )}
              </div>


            </div>
            <button
              type="submit"
              className="btn btn-secondary block py-3 min-w-48 mx-auto mt-6 rounded-md text-white font-semibold"
            >
              REGISTER
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CustomerRegisterPage;
