import React, { useState } from 'react';
import Navbar from '../../../components/Shared/Navbar';
import Sidebar from '../../../components/Shared/Sidebar';
import Footer from '../../../components/Shared/Footer';


const ViewSignal = () => {
    const [formData, setFormData] = useState({
        symbol: '',
        interval: '',
        unit: '',
        amount: '',
        direction: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data Submitted:', formData);
        // Add your form submission logic here
    };

    return (
        <div className="flex flex-col h-screen">
          <Navbar  />
          <div className="flex flex-1">
            <Sidebar className="bg-slate-500" />
            <main className="flex-1 p-6 bg-gray-100">
                <div className="container mx-auto">
                    <h2 className="text-2xl font-bold mb-4">Created Signals</h2>
                    <table className="min-w-full bg-white">
                        <thead className="bg-gray-200">
                            <tr>
                                <th className="py-2 px-4 border-b text-left text-gray-600">Symbol</th>
                                <th className="py-2 px-4 border-b text-left text-gray-600">Interval</th>
                                <th className="py-2 px-4 border-b text-left text-gray-600">Unit</th>
                                <th className="py-2 px-4 border-b text-left text-gray-600">Amount</th>
                                <th className="py-2 px-4 border-b text-left text-gray-600">Direction</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Replace the following with dynamic data */}
                            <tr>
                                <td className="py-2 px-4 border-b">BTC</td>
                                <td className="py-2 px-4 border-b">1h</td>
                                <td className="py-2 px-4 border-b">USD</td>
                                <td className="py-2 px-4 border-b">50000</td>
                                <td className="py-2 px-4 border-b">Buy</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b">ETH</td>
                                <td className="py-2 px-4 border-b">4h</td>
                                <td className="py-2 px-4 border-b">USD</td>
                                <td className="py-2 px-4 border-b">4000</td>
                                <td className="py-2 px-4 border-b">Sell</td>
                            </tr>
                            {/* Add more rows as needed */}
                        </tbody>
                    </table>
                </div>
            </main>
          </div>
          <Footer />
        </div>
    );
};

export default ViewSignal;