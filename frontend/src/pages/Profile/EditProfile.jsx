import React from 'react'
import { useNavigate } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';

const EditProfile = () => {

    const navigate = useNavigate();

    return (
        <div className='container px-4 sm:px-10 py-6 rounded-lg w-full sm:w-[90%] lg:w-[65%] mx-auto'>
            <h2 className="font-bold text-xl sm:text-2xl mb-6 py-3">Edit Profile</h2>
            <div className='py-4 flex flex-col space-x-0 lg:flex-row space-y-4 lg:space-y-0 lg:space-x-6'>
                <div className='w-full'>
                    <form>
                        <div className='flex flex-col space-x-0 md:flex-row space-y-4 md:space-y-0 md:space-x-6'>
                            <div className='w-full flex flex-col'>
                                <label htmlFor="firstname">First Name</label>
                                <input type="text" name='firstname' placeholder="First Name" className="input input-bordered w-full mt-4" />
                            </div>

                            <div className='w-full flex flex-col'>
                                <label htmlFor="lastname">Last Name</label>
                                <input type="text" name='lastname' placeholder="Last Name" className="input input-bordered w-full mt-4" />
                            </div>
                        </div>

                        <div className='flex flex-col space-x-0 md:flex-row space-y-4 md:space-y-0 md:space-x-6 mt-4'>
                            <div className='w-full flex flex-col'>
                                <label htmlFor="email">Email</label>
                                <input type="email" name='email' placeholder="Email" className="input input-bordered w-full mt-4" />
                            </div>

                            <div className='w-full flex flex-col'>
                                <label htmlFor="contact">Contact</label>
                                <input type="text" name='contact' placeholder="Contact" className="input input-bordered w-full mt-4" />
                            </div>
                        </div>

                        <div className='w-full flex flex-col mt-10'>
                            <label htmlFor="address">Address</label>
                            <input type="text" name='address' placeholder="Address" className="input input-bordered w-full mt-4" />
                        </div>

                        <div className='flex flex-col space-x-0 md:flex-row space-y-4 md:space-y-0 md:space-x-6 mt-10'>
                            <div className='w-full flex flex-col'>
                                <label htmlFor="city">City</label>
                                <input type="text" name='city' placeholder="City" className="input input-bordered w-full mt-4" />
                            </div>

                            <div className='w-full flex flex-col'>
                                <label htmlFor="zipcode">Zip code</label>
                                <input type="text" name='zipcode' placeholder="Zip code" className="input input-bordered w-full mt-4" />
                            </div>
                        </div>

                        <div className='flex flex-col space-x-0 md:flex-row space-y-4 md:space-y-0 md:space-x-6 mt-4'>
                            <div className='w-full flex flex-col'>
                                <label htmlFor="province">Province</label>
                                <input type="text" name='province' placeholder="Province" className="input input-bordered w-full mt-4" />
                            </div>

                            <div className='w-full flex flex-col'>
                                <label htmlFor="country">Country</label>
                                <input type="text" name='country' placeholder="Country" className="input input-bordered w-full mt-4" />
                            </div>
                        </div>

                        <div className='flex items-center space-x-8 mt-8 justify-center relative'>
                            <button className="btn absolute left-0 top-0" onClick={() => navigate('/view-profile')}>
                                <IoArrowBack />
                                Back
                            </button>
                            <button className="btn btn-secondary">Reset</button>
                            <button className="btn btn-secondary">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EditProfile