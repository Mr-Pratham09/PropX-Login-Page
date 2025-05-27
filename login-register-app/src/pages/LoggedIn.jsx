import React from 'react';
import { useEffect, useState } from 'react';

const AccountSettings = () => {
  const [user, setUser] = useState({name: '', email: ''})

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem('user'))
    if (savedUser) {
      setUser(savedUser);
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('user')
    window.location.href = '/login'
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white h-[98vh] max-w-md w-full p-6 rounded-2xl shadow-md">

        {/* Top Bar: Title + Logout Button */}
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Account Settings</h1>
          <button
            onClick={handleLogout}
            className="bg-[#6947de] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#5b3ecf] transition cursor-pointer"
          >
            Logout
          </button>
        </div>

        <p className="text-gray-600 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod nisi non quam consequat fermentum.
        </p>

        <div className="flex items-center gap-4 p-4 border rounded-lg shadow-sm mb-6">
          <img
            src="https://imgs.search.brave.com/IPQath6lBxZCS9S-j03ewojtjnGQOiki9mQ5jrW7Yq4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vXzkzSDNx/YVlwN1VhTmowWXpB/Z192LUdCdnNndW44/dnRQdU5ZVHdzbkZM/Yy9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTlw/YldjdS9abkpsWlhC/cGF5NWpiMjB2L2NI/SmxiV2wxYlMxMlpX/TjAvYjNJdllYTnBZ/VzR0YldWdS9MV0Yy/WVhSaGNsODNPREUw/L0xUTTBOUzVxY0dj/X2MyVnQvZEQxaGFY/TmZhSGxpY21say9K/bmM5TnpRdw"
            alt="User Avatar"
            className="w-14 h-14 rounded-full object-cover border"
          />
          <div>
            <h4 className="text-lg font-semibold">{user.name}</h4>
            <p className="text-sm text-gray-600">{user.email}</p>
          </div>
        </div>

        <p className="text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean facilisis lorem a risus pharetra, in imperdiet
          ipsum tincidunt.
        </p>
      </div>
    </div>
  );
};

export default AccountSettings
