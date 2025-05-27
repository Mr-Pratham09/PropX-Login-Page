import React from 'react'
import { useState } from 'react'
import { IoReturnUpBack } from 'react-icons/io5'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorMsg, setErrorMsg] = useState('')

    const isFormValid = email.trim() !== '' && password.trim() !== ''

    const handleLogin = (e) => {
        e.preventDefault();

        const storedUser = JSON.parse(localStorage.getItem('userData'));

        if (!storedUser) {
            setErrorMsg("No account found. Please register first.");
            return;
        }

        if (email === storedUser.email && password === storedUser.password) {
            localStorage.setItem('user', JSON.stringify({
                name: storedUser.fullName,
                email: storedUser.email
            }));

            alert("Login successful!");
            setErrorMsg("");

            window.location.href = "/loggedIn"
        } else {
            setErrorMsg("Invalid email or password.")
        }
    }

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white w-[375px] h-[98vh] p-6 rounded-2xl shadow-md">
                <div className="flex justify-between items-center mb-4">
                    <h1 className="w-2/4 text-start text-2xl font-bold">Signin to your PopX account</h1>
                    <button
                        onClick={() => (window.location.href = '/')}
                        className="text-white bg-[#6947de] cursor-pointer p-2 rounded-lg hover:bg-[#5b3ecf] transition"
                        title="Return to Landing Page"
                    >
                        <IoReturnUpBack size={24} />
                    </button>
                </div>
                <p className="text-gray-600 mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                    eu turpis molestie, dictum est a, mattis tellus.
                </p>

                <form className="space-y-5" onSubmit={handleLogin}>
                    <div>
                        <label className="block text-sm font-medium text-purple-700 mb-1">Email Address</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-purple-700 mb-1">Password</label>
                        <input
                            type="password"
                            placeholder="Enter password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none"
                        />
                    </div>

                    {errorMsg && <p className="text-red-500 text-sm -mt-2">{errorMsg}</p>}

                    <button
                        type="submit"
                        disabled={!isFormValid}
                        className={`w-full py-3 rounded-lg font-medium transition
              ${isFormValid ? 'bg-[#6947de] hover:bg-[#5b3ecf] text-white cursor-pointer' : 'bg-gray-300 text-gray-600 cursor-not-allowed'}`}
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login
