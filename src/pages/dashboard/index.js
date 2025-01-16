import React from 'react';
import Sidebar from '../../../components/Shared/Sidebar';
import Navbar from '../../../components/Shared/Navbar';
import Footer from '../../../components/Shared/Footer';
import Link from 'next/link';

const Dashboard = () => {
    return (
        <div className="flex flex-col h-screen">
          <Navbar  />
          <div className="flex flex-1">
            {/* <Sidebar className="bg-slate-500" /> */}
            <main className="flex-1 p-6 bg-gray-100">
                    <div className="container mx-auto">
                        <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <Link href="/buy" legacyBehavior>
                                <a className="block p-6 bg-white rounded-lg shadow hover:bg-blue-100 transition">
                                    <h2 className="text-xl font-bold mb-2 text-black">Buy</h2>
                                    <p className="text-gray-700">Purchase assets and securities.</p>
                                </a>
                            </Link>
                            <Link href="/sell" legacyBehavior>
                                <a className="block p-6 bg-white rounded-lg shadow hover:bg-blue-100 transition">
                                    <h2 className="text-xl font-bold mb-2 text-black">Sell</h2>
                                    <p className="text-gray-700">Sell your assets and securities.</p>
                                </a>
                            </Link>
                            <Link href="/trade-control" legacyBehavior>
                                <a className="block p-6 bg-white rounded-lg shadow hover:bg-blue-100 transition">
                                    <h2 className="text-xl font-bold mb-2 text-black">Trade Control</h2>
                                    <p className="text-gray-700">Manage and control your trades.</p>
                                </a>
                            </Link>
                            <Link href="/signals" legacyBehavior>
                                <a className="block p-6 bg-white rounded-lg shadow hover:bg-blue-100 transition">
                                    <h2 className="text-xl font-bold mb-2 text-black">Signals</h2>
                                    <p className="text-gray-700">Get trading signals.</p>
                                </a>
                            </Link>
                            <Link href="/view-signals" legacyBehavior>
                                <a className="block p-6 bg-white rounded-lg shadow hover:bg-blue-100 transition">
                                    <h2 className="text-xl font-bold mb-2 text-black">View Signals</h2>
                                    <p className="text-gray-700">View your trading signals.</p>
                                </a>
                            </Link>
                            <Link href="/deposit-request" legacyBehavior>
                                <a className="block p-6 bg-white rounded-lg shadow hover:bg-blue-100 transition">
                                    <h2 className="text-xl font-bold mb-2 text-black">Deposit Request</h2>
                                    <p className="text-gray-700">Request a deposit.</p>
                                </a>
                            </Link>
                            <Link href="/withdrawal-request" legacyBehavior>
                                <a className="block p-6 bg-white rounded-lg shadow hover:bg-blue-100 transition">
                                    <h2 className="text-xl font-bold mb-2 text-black">Withdrawal Request</h2>
                                    <p className="text-gray-700">Request a withdrawal.</p>
                                </a>
                            </Link>
                            <Link href="/wallet-management" legacyBehavior>
                                <a className="block p-6 bg-white rounded-lg shadow hover:bg-blue-100 transition">
                                    <h2 className="text-xl font-bold mb-2 text-black">Wallet Management</h2>
                                    <p className="text-gray-700">Manage your wallet.</p>
                                </a>
                            </Link>
                        </div>
                    </div>
                </main>
          </div>
          <Footer />
        </div>
      );
};

export default Dashboard;