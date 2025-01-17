import React, { useState, useEffect } from 'react';
import Navbar from '../../../components/Shared/Navbar';
import Sidebar from '../../../components/Shared/Sidebar';
import Footer from '../../../components/Shared/Footer';
import Image from 'next/image';
import apiService from '../../../lib/api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';


const Trade = () => {
    const router = useRouter();
    const [formData, setFormData] = useState({
        userId: '',
        signalId: '',
        interval: '',
        units: '',
        amount: '',
        tradeType: ''
    });

    const [payload, setPayload] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
            userId: payload.userId,
            signalId: payload.signalId,
            tradeType: payload.tradeType
        });
    };

    const handleTrade = (action, signal) => {
        console.log(`Action: ${action}`, signal);
        setOpenModal(true);
        const payload = {
            userId: signal.userId,
            signalId: signal._id,
            tradeType: action,
        }
        setPayload(payload);
        // Add your trade logic here
    };

    const [cryptoMarkets, setCryptoMarkets] = useState([]);
    const [signalData, setSignalData] = useState([]);
    const [walletDetails, setWalletDetails] = useState(null);
    const [openDropdown, setOpenDropdown] = useState(null);
    const [openModal, setOpenModal] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const data = await apiService.getAllSignals();
            console.log(data);
            setSignalData(data);
        };

        const fetchWalletDetails = async () => {
            try {
                const data = await apiService.getWalletDetails();
                setWalletDetails(data);
            } catch (error) {
                console.error('Error fetching wallet details:', error);
            }
        };

        fetchWalletDetails();

        fetchData();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Form Data Submitted:', formData);
        // Add your form submission logic here
        try {
            const response = await apiService.createTrade(formData);
            if (response){
                toast.success('Trade created successfully!');
            }
            console.log('Trade created:', response);
            setFormData({
                userId: '',
                signalId: '',
                interval: '',
                units: '',
                amount: '',
                tradeType: ''
            });
            setTimeout(() => {
                router.push('/trade-history');
            }, 3000);
        } catch (error) {
            toast.error('An error occurred while creating the trade.');
            setFormData({
                userId: '',
                signalId: '',
                interval: '',
                units: '',
                amount: '',
                tradeType: ''
            });
        }
    };

    return (
        <div className="flex flex-col h-screen">
          <Navbar data={walletDetails} />
          <ToastContainer />
          <div className="flex flex-1">
            {/* <Sidebar className="bg-slate-500" /> */}
            <main className="flex-1 p-6 bg-gray-100">
                <div className="container mx-auto">
                    <h2 className="text-2xl font-bold mb-4">Trade</h2>
                    <div className="grid grid-cols-4 gap-4">
                        {signalData.map((signal, index) => (
                            <div key={index} className="p-4 bg-white text-black rounded shadow">
                                <h3 className="text-xl font-semibold">{signal.symbol}</h3>
                                <p>Interval: {signal.interval}</p>
                                <p>Units: {signal.units}</p>
                                <p>Amount: {signal.amount}</p>
                                <p>Direction: {signal.direction}</p>
                                <div className="flex space-x-8">
                                    <a href="#" className="text-blue-500" onClick={() => handleTrade('buy', signal)}>Buy</a>
                                    <a href="#" className="text-red-500 float-right" onClick={() => handleTrade('sell', signal)}>Sell</a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
          </div>
          {openModal && (
            <div className="fixed inset-0 flex items-center justify-center z-50">
                <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
                <h2 className="text-2xl font-semibold mb-4">Create New Trade</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="amount">
                                Amount
                            </label>
                            <input
                                type="text"
                                name="amount"
                                id="amount"
                                value={formData.amount}
                                onChange={handleChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                        <div className="col-span-1">
                            <label className="block text-sm font-medium text-gray-700">Units</label>
                            <select name="units" value={formData.units} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md">
                                <option value="">Select Units</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                                {/* Add more category as needed */}
                            </select>
                        </div>
                        <div className="col-span-1">
                            <label className="block text-sm font-medium text-gray-700">Interval</label>
                            <select name="interval" value={formData.interval} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md">
                                <option value="">Select Interval</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                {/* Add more services as needed */}
                            </select>
                        </div>
                        <div className="flex items-center mt-4 justify-between">
                                <button
                                    type="submit"
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                >
                                    Open Trade
                                </button>
                                <button
                                            type="button"
                                            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                            onClick={() => setOpenModal(false)}
                                        >
                                    Cancel
                                </button>
                        </div>
                    </form>
                </div>
            </div>
          )}
          <Footer />
          
        </div>
    );
};

export default Trade;