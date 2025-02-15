// import React from 'react'
// import HomePageHeader from '../components/templates/Home/HomePageHeader.jsx'
// import LatestProducts from '../components/templates/Home/LatestProducts.jsx'

// const Home = () => {
//   return (
//     <div className='mb-96'>
//       <HomePageHeader />
//       <LatestProducts />
//     </div>
//   )
// }

// export default Home
'use client';
import React from 'react';

const handleSetCookie = async () => {
  const response = await fetch('https://green-coffee-server.vercel.app/api/set-cookie', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  });

  if (response.ok) {
    console.log('Cookie set successfully!');
  } else {
    console.error('Failed to set cookie!');
  }
}

const handleDeleteCookie = async () => {
  const response = await fetch('https://green-coffee-server.vercel.app/api/delete-cookie', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  });

  if (response.ok) {
    console.log('Cookie deleted successfully!');
  } else {
    console.error('Failed to delete cookie!');
  }
}

const HomePage = () => {
  return (
    <div className="w-full h-screen bg-gradient-to-r from-lime-500 to-sky-500 flex flex-col gap-8 justify-center items-center">
      <button onClick={handleSetCookie} className="px-6 py-3 bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold rounded-lg shadow-md hover:from-green-500 hover:to-blue-600 active:from-green-600 active:to-blue-700 transition duration-300 ease-in-out">
        Set Cookie
      </button>
      <button onClick={handleDeleteCookie} className="px-6 py-3 bg-gradient-to-r from-red-400 to-yellow-500 text-white font-semibold rounded-lg shadow-md hover:from-red-500 hover:to-yellow-600 active:from-red-600 active:to-yellow-700 transition duration-300 ease-in-out">
        Delete Cookie
      </button>
    </div>
  );
};

export default HomePage;
