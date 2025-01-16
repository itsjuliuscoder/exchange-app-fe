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

    const [cryptoMarkets, setCryptoMarkets] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const data = await apiService.getCryptoData();
            setCryptoMarkets(data);
        };

        fetchData();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data Submitted:', formData);
        // Add your form submission logic here
    };

    return (
        <div className="flex flex-col h-screen">
          <Navbar  />
          <div className="flex flex-1">
            {/* <Sidebar className="bg-slate-500" /> */}
            <main className="flex-1 p-6 bg-gray-100">
                <div className="container mx-auto">
                    <h2 className="text-2xl font-bold mb-4">Trade</h2>
                    <div className="grid grid-cols-4 gap-4">
                        {/* x` */}
                    {cryptoMarkets.map((market, index) => (
                        <div key={index} className="border p-4 flex flex-col items-center">
                            <Image
                                src={market.image}
                                alt={market.name}
                                width={150}
                                height={150}
                                className="mb-4"
                            />
                            <h3 className="text-lg font-bold">{market.name}</h3>
                            <p className="text-gray-500">{market.symbol}</p>
                            <div className="flex space-x-2">
                                <a href="#" className="text-blue-500">Buy</a>
                                <a href="#" className="text-red-500">Sell</a>
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