"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaBell } from "react-icons/fa";
import { accounting } from "accounting";

const Navbar = ({ data }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const router = useRouter();


  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('userDetails');
    router.push('/');
  };


return (
    <nav className="bg-black text-gray-200 p-4">
        <div className="container mx-auto flex justify-between items-center bg-black">
            <div className="text-2xl font-bold font-[family-name:var(--font-geist-poppins)]">
                <Link href="/" legacyBehavior>
                    <a>Exchange Trade App</a>
                </Link>
            </div>
            <div className="flex-1 flex justify-center space-x-4">
                <Link href="/dashboard" legacyBehavior>
                    <a className="px-4 py-2 rounded-lg hover:bg-gray-200">Dashboard</a>
                </Link>
                <Link href="/securities" legacyBehavior>
                    <a className="px-4 py-2 rounded-lg hover:bg-gray-200">Securities</a>
                </Link>
                <Link href="/trade" legacyBehavior>
                    <a className="px-4 py-2 rounded-lg hover:bg-gray-200">Trade</a>
                </Link>
                <Link href="/signals" legacyBehavior>
                    <a className="px-4 py-2 rounded-lg hover:bg-gray-400">Signals</a>
                </Link>
                <Link href="/view-signals" legacyBehavior>
                    <a className="px-4 py-2 rounded-lg hover:bg-gray-400">Trade Signals</a>
                </Link>
                <Link href="/trade-history" legacyBehavior>
                    <a className="px-4 py-2 rounded-lg hover:bg-gray-400">Trade History</a>
                </Link>
            </div>
            <div className="flex items-center space-x-4 font-[family-name:var(--font-geist-poppins)]">
                <button className="px-4 py-2 bg-blue-500 rounded-lg hover:bg-blue-700 text-white font-bold">
                    {data && data.balance ? accounting.formatMoney(data.balance) : '50,000'}
                </button>
            </div>
        </div>
    </nav>
);
};

export default Navbar;