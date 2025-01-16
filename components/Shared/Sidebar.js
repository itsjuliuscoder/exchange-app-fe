import React from 'react';
import Link from 'next/link';

const Sidebar = () => {
    return (
        <div className="w-64 h-full bg-gray-800 text-white">
            <h2 className="text-2xl font-bold p-4">Menu</h2>
            <ul className="space-y-2">
                <li className="p-4 hover:bg-gray-700">
                    <Link legacyBehavior href="/home">
                        <a>Home</a>
                    </Link>
                </li>
                <li className="p-4 hover:bg-gray-700">
                    <Link legacyBehavior href="/about">
                        <a>About</a>
                    </Link>
                </li>
                <li className="p-4 hover:bg-gray-700">
                    <Link legacyBehavior href="/services">
                        <a>Services</a>
                    </Link>
                </li>
                <li className="p-4 hover:bg-gray-700">
                    <Link legacyBehavior href="/contact">
                        <a>Contact</a>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
