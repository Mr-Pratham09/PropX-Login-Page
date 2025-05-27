import React from 'react'
import { useNavigate } from "react-router-dom"


const Landing = () => {

    const navigate = useNavigate();

    const routes = [
        {
            label: "Create Account",
            path: "/register",
            background: "#6947de",
            color: "white"
        },
        {
            label: "Already Registered? Login",
            path: "/login",
            background: "#c8b8ff",
            color: "black"
        },
    ]

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
            <div className="bg-white h-[98vh] w-[375px] p-6 rounded-2xl shadow-md text-center flex flex-col justify-end">
                <div className='text-start'>
                    <h1 className="text-2xl font-bold mb-2">Welcome to PopX</h1>
                    <p className="text-gray-600 mb-6">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                        eu turpis molestie, dictum est a, mattis tellus.
                    </p>
                    {routes.map((route) => (
                        <button key={route.path}
                            onClick={() => navigate(route.path)}
                            style={{background: route.background, color: route.color}}
                            className={`w-full text-white py-3 rounded-lg mb-4 font-medium cursor-pointer`}
                        >{route.label}
                        </button>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default Landing