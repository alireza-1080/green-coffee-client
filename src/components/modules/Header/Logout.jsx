'use client';
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

const Logout = () => {
  const router = useRouter();

  const handleLogout = async () => {
    const response = await fetch('/api/users/logout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    });

    if (response.ok) {
      toast.success('Logged out successfully');
      router.refresh();
    }
  };

  return (
    <div
      onClick={handleLogout}
      className={`bg-gray-800 py-2 px-4 md:py-3 md:px-5 rounded-md group/item cursor-pointer`}
    >
      <li className="flex justify-between gap-4 md:gap-6">
        <h6 className="min-w-fit text-red-500 group-hover/item:text-red-600">
          Logout
        </h6>
        <Image
          className="w-4"
          width={20}
          height={20}
          src="/png/sign-out-alt-red-500.png"
          alt="sign-out-alt"
        ></Image>
      </li>
    </div>
  );
};

export default Logout;
