import React, { ChangeEvent, useState } from "react";
import { useNavigate } from 'react-router-dom';

const ViewProfile = () => {
    const defaultImage = "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp";
    const [avatar, setAvatar] = useState(defaultImage);

    const handleImageChange = (e) => {
        const file = e.target.files?.[0];
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setAvatar(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleReset = () => {
        setAvatar(defaultImage);
    };
    const navigate = useNavigate();

    return (
        <div>
            <div className="container px-5 py-6 rounded-lg mx-auto w-full md:w-3/4 lg:w-[65%]">
                <h2 className="font-bold text-xl sm:text-2xl mb-6 sm:text-left sm:ml-8 text-center py-3 px-4">My Profile</h2>
                <div>
                    <div className="py-4 flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-6">
                        <div className="text-center md:px-10">
                            <div className="avatar">
                                <div className="w-48 rounded-xl relative">
                                    <img className="h-full w-full" src={avatar} alt="Avatar" />
                                </div>
                            </div>
                            <div className="relative mt-4">
                                <input
                                    type="file"
                                    name="photo"
                                    id="upload-photo"
                                    className="absolute opacity-0 z-[-1]"
                                    style={{ cursor: "pointer" }}
                                    onChange={handleImageChange}
                                    accept="image/*"
                                />
                                <label
                                    htmlFor="upload-photo"
                                    className="cursor-pointer text-black font-medium btn btn-secondary rounded-lg py-2 px-4"
                                >
                                    Change Avatar
                                </label>
                            </div>
                        </div>
                        <div className="lg:w-3/4 pt-6 lg:pt-0">
                            <form>
                                <div className="flex flex-col space-x-0 md:flex-row space-y-4 md:space-y-0 md:space-x-6 ">
                                    <div className="w-full flex flex-col">
                                        <label htmlFor="firstname">First Name</label>
                                        <input
                                            type="text"
                                            name="firstname"
                                            placeholder="First Name"
                                            readOnly
                                            value={'Kunj'}
                                            className="bg-zinc-300 focus:outline-none border-0 text-black input input-bordered w-full mt-4"
                                        />
                                    </div>
                                    <div className="w-full flex flex-col">
                                        <label htmlFor="lastname">Last Name</label>
                                        <input
                                            type="text"
                                            name="lastname"
                                            placeholder="Last Name"
                                            readOnly
                                            value={'Pathak'}
                                            className="bg-zinc-300 focus:outline-none border-0 input input-bordered w-full mt-4"
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col space-x-0 md:flex-row space-y-4 md:space-y-0 md:space-x-6 mt-4">
                                    <div className="w-full flex flex-col">
                                        <label htmlFor="email">Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Email"
                                            readOnly
                                            value={'kunj@gmail.com'}
                                            className="bg-zinc-300 focus:outline-none border-0 input input-bordered w-full mt-4"
                                        />
                                    </div>
                                    <div className="w-full flex flex-col">
                                        <label htmlFor="contact">Contact</label>
                                        <input
                                            type="tel"
                                            name="contact"
                                            placeholder="Contact"
                                            readOnly
                                            value="98465 13123"
                                            className="bg-zinc-300 focus:outline-none border-0 input input-bordered w-full mt-4"
                                        />
                                    </div>
                                </div>
                                <div className="w-full flex flex-col mt-10">
                                    <label htmlFor="address">Address</label>
                                    <input
                                        type="text"
                                        name="address"
                                        placeholder="Address"
                                        readOnly
                                        value={'718, Ogilvie street'}
                                        className="bg-zinc-300 focus:outline-none border-0 input input-bordered w-full mt-4"
                                    />
                                </div>
                                <div className="flex flex-col space-x-0 md:flex-row space-y-4 md:space-y-0 md:space-x-6 mt-10">
                                    <div className="w-full flex flex-col">
                                        <label htmlFor="city">City</label>
                                        <input
                                            type="text"
                                            name="city"
                                            placeholder="City"
                                            readOnly
                                            value={'Haliflax'}
                                            className="bg-zinc-300 focus:outline-none border-0 input input-bordered w-full mt-4"
                                        />
                                    </div>
                                    <div className="w-full flex flex-col">
                                        <label htmlFor="zip code">Zip code</label>
                                        <input
                                            type="text"
                                            name="zip code"
                                            placeholder="Zip code"
                                            readOnly
                                            value={'B3H 1B9'}
                                            className="bg-zinc-300 focus:outline-none border-0 input input-bordered w-full mt-4"
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col space-x-0 md:flex-row space-y-4 md:space-y-0 md:space-x-6 mt-4">
                                    <div className="w-full flex flex-col">
                                        <label htmlFor="province">Province</label>
                                        <input
                                            type="text"
                                            name="province"
                                            placeholder="Province"
                                            readOnly
                                            value={'Nova Scotia'}
                                            className="bg-zinc-300 focus:outline-none border-0 input input-bordered w-full mt-4"
                                        />
                                    </div>
                                    <div className="w-full flex flex-col">
                                        <label htmlFor="country">Country</label>
                                        <input
                                            type="text"
                                            name="country"
                                            placeholder="Country"
                                            readOnly
                                            value={'Canada'}
                                            className="bg-zinc-300 focus:outline-none border-0 input input-bordered w-full mt-4"
                                        />
                                    </div>
                                </div>
                                <div className='flex space-x-6 mt-8 align-baseline'>
                                    <button className="btn btn-secondary rounded-lg py-2 px-4" onClick={() => navigate('/edit-profile')}>Edit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewProfile;