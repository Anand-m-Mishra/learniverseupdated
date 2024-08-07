import React from 'react';
import axios from 'axios';

const Logout = () => {
  const handleLogout = async () => {
    try {
      await axios.get('/api/v1/users/logout', {}, {
        withCredentials: true // Ensure cookies are sent with the request
      });
      console.log('Logout successful');
      // Handle successful logout (e.g., redirect or update UI)
      window.location.href = '/login'; // Redirect to login page or any other page
    } catch (error) {
      console.error('Logout failed:', error.response?.data || error.message);
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="md:w-32 bg-red-700 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-red-500 transition ease-in-out duration-300 active:scale-75 active:bg-red-400"
    >
      Logout
    </button>
  );
};

export default Logout;
