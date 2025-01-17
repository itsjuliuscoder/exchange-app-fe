import React, { useState, useEffect } from 'react';
import Navbar from '../../../components/Shared/Navbar';
import Sidebar from '../../../components/Shared/Sidebar';
import Footer from '../../../components/Shared/Footer';
import Image from 'next/image';
import apiService from '../../../lib/api';


const Trade = () => {

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

    const handleTrade = (action, signal) => {
        console.log(`Action: ${action}`, signal);
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

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data Submitted:', formData);
        // Add your form submission logic here
    };

    return (
        <div className="flex flex-col h-screen">
          <Navbar data={walletDetails} />
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
                                <p>Unit: {signal.units}</p>
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
          <Footer />
          
        </div>
    );
};

export default Trade;