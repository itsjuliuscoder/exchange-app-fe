import React, { useState, useEffect } from 'react';
import Navbar from '../../../components/Shared/Navbar';
import Sidebar from '../../../components/Shared/Sidebar';
import Footer from '../../../components/Shared/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import apiService from '../../../lib/api';
import { useRouter } from 'next/router';


const SignalForm = () => {
    const [formData, setFormData] = useState({
        symbol: '',
        interval: '',
        unit: '',
        amount: '',
        direction: ''
    });

    const [walletDetails, setWalletDetails] = useState(null);
    const router = useRouter();

    useEffect(() => {
        const fetchWalletDetails = async () => {
            try {
                const data = await apiService.getWalletDetails();
                setWalletDetails(data);
            } catch (error) {
                console.error('Error fetching wallet details:', error);
            }
        };

        fetchWalletDetails();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await apiService.createSignal(formData);
            if (response){
                toast.success('Signal created successfully!');
            }
            console.log('Signal created:', response);
            setFormData({
                symbol: '',
                interval: '',
                unit: '',
                amount: '',
                direction: ''
            });
            setTimeout(() => {
                router.push('/view-signals');
            }, 3000);
        } catch (error) {
            toast.error('An error occurred while creating the signal.');
            setFormData({
                symbol: '',
                interval: '',
                unit: '',
                amount: '',
                direction: ''
            });
        }
        console.log('Form Data Submitted:', formData);
        // Add your form submission logic here
    };

    return (
        <div className="flex flex-col h-screen">
          <Navbar data={walletDetails} />
          <ToastContainer />
          <div className="flex flex-1">
            {/* <Sidebar className="bg-slate-500" /> */}
            <main className="flex-1 p-6 bg-gray-100">
                <div className="container mx-auto">
                <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
                    <div className="mb-4">
                        <label htmlFor="symbol" className="block text-gray-700 font-bold mb-2">Symbol</label>
                        <input
                            type="text"
                            id="symbol"
                            name="symbol"
                            value={formData.symbol}
                            onChange={handleChange}
                            className="w-full text-black px-3 py-2 border rounded"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="interval" className="block text-gray-700 font-bold mb-2">Interval</label>
                        <input
                            type="text"
                            id="interval"
                            name="interval"
                            value={formData.interval}
                            onChange={handleChange}
                            className="w-full px-3 text-black py-2 border rounded"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="unit" className="block text-gray-700 font-bold mb-2">Unit</label>
                        <input
                            type="text"
                            id="unit"
                            name="unit"
                            value={formData.unit}
                            onChange={handleChange}
                            className="w-full px-3 text-black py-2 border rounded"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="amount" className="block text-gray-700 font-bold mb-2">Amount</label>
                        <input
                            type="number"
                            id="amount"
                            name="amount"
                            value={formData.amount}
                            onChange={handleChange}
                            className="w-full px-3 text-black py-2 border rounded"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="direction" className="block text-gray-700 font-bold mb-2">Direction</label>
                        <select
                            id="direction"
                            name="direction"
                            value={formData.direction}
                            onChange={handleChange}
                            className="w-full px-3 text-black py-2 border rounded"
                            required
                        >
                            <option value="">Select Direction</option>
                            <option value="buy">Buy</option>
                            <option value="sell">Sell</option>
                        </select>
                    </div>
                    <div className="flex justify-end">
                        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
                            Submit
                        </button>
                    </div>
                </form>
                </div>
            </main>
          </div>
          <Footer />
        </div>
    );
};

export default SignalForm;