import React from 'react'
import { useState } from 'react'
import { IoReturnUpBack } from 'react-icons/io5'

const Register = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        phone: '',
        email: '',
        password: '',
        company: '',
        agency: ''
    })

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })

        setErrors({
            ...errors,
            [e.target.name]: ''
        })
    }

    const validate = () => {
        const newErrors = {};
        if (!formData.fullName) newErrors.fullName = 'Full Name is required';
        if (!formData.phone) newErrors.phone = 'Phone Number is required';
        if (!formData.email) newErrors.email = 'Email is required';
        if (!formData.password) newErrors.password = 'Password is required';
        if (!formData.company) newErrors.company = 'Company Name is required';
        if (!formData.agency) newErrors.agency = 'Please select if you are an agency';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validate()) return;

        localStorage.setItem('userData', JSON.stringify(formData));

        alert('Account created successfully!');
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white w-[375px] h-[98vh] p-6 rounded-2xl shadow-md overflow-y-auto">
                <div className="flex justify-between items-center mb-4">
                    <h1 className="w-2/4 text-start text-2xl font-bold">Create your PopX account</h1>
                    <button
                        onClick={() => (window.location.href = '/')}
                        className="text-white bg-[#6947de] cursor-pointer p-2 rounded-lg hover:bg-[#5b3ecf] transition"
                        title="Return to Landing Page"
                    >
                        <IoReturnUpBack size={24} />
                    </button>
                </div>

                <form className="space-y-5" onSubmit={handleSubmit}>
                    <div>
                        <label className="block text-sm font-medium text-purple-700 mb-1">Full Name</label>
                        <input
                            type="text"
                            name="fullName"
                            placeholder="Enter your name"
                            value={formData.fullName}
                            onChange={handleChange}
                            className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none"
                        />
                        {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-purple-700 mb-1">Phone Number</label>
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Enter your phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none"
                        />
                        {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-purple-700 mb-1">Email Address</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none"
                        />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-purple-700 mb-1">Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none"
                        />
                        {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-purple-700 mb-1">Company Name</label>
                        <input
                            type="text"
                            name="company"
                            placeholder="Enter company name"
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none"
                        />
                        {errors.company && <p className="text-red-500 text-sm">{errors.company}</p>}
                    </div>

                    <div>
                        <p className="text-sm font-medium text-gray-700 mb-2">Are you an Agency?</p>
                        <div className="flex gap-6">
                            <label className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    name="agency"
                                    value="Yes"
                                    checked={formData.agency === "Yes"}
                                    onChange={handleChange}
                                    className="cursor-pointer accent-purple-700"
                                />
                                Yes
                            </label>
                            <label className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    name="agency"
                                    value="No"
                                    checked={formData.agency === "No"}
                                    onChange={handleChange}
                                    className="cursor-pointer accent-purple-700"
                                />
                                No
                            </label>
                        </div>
                        {errors.agency && <p className="text-red-500 text-sm mt-1">{errors.agency}</p>}
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-[#6947de] hover:bg-[#5b3ecf] text-white py-3 rounded-lg font-medium cursor-pointer"
                    >
                        Create Account
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Register
