import React, { useState, useEffect } from "react";
import Navbar from "../../../components/Shared/Navbar";
import Sidebar from "../../../components/Shared/Sidebar";
import Footer from "../../../components/Shared/Footer";
import apiService from "../../../lib/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ViewSignal = () => {
  const [signals, setSignals] = useState([]);
  const [walletDetails, setWalletDetails] = useState(null);

  useEffect(() => {
    const fetchSignals = async () => {
      try {
        const data = await apiService.getAllSignals();
        setSignals(data);
      } catch (error) {
        console.error("Error fetching signals:", error);
        toast.error("An error occurred while fetching signals.");
      }
    };

    const fetchWalletDetails = async () => {
      try {
        const data = await apiService.getWalletDetails();
        setWalletDetails(data);
      } catch (error) {
        console.error("Error fetching wallet details:", error);
      }
    };

    fetchWalletDetails();

    fetchSignals();
  }, []);

  return (
    <div className="flex flex-col h-screen">
      <Navbar data={walletDetails} />
      <ToastContainer />
      <div className="flex flex-1">
        {/* <Sidebar className="bg-slate-500" /> */}
        <main className="flex-1 p-6 bg-gray-100">
          <div className="container mx-auto">
            <h2 className="text-2xl font-bold mb-4">View Signals</h2>
            <table className="min-w-full bg-white">
              <thead>
                <tr className="bg-slate-300 text-white">
                  <th className="py-2 px-4 border-b text-left text-gray-600">
                    Symbol
                  </th>
                  <th className="py-2 px-4 border-b text-left text-gray-600">
                    Interval
                  </th>
                  <th className="py-2 px-4 border-b text-left text-gray-600">
                    Unit
                  </th>
                  <th className="py-2 px-4 border-b text-left text-gray-600">
                    Amount
                  </th>
                  <th className="py-2 px-4 border-b text-left text-gray-600">
                    Direction
                  </th>
                  <th className="py-2 px-4 border-b text-left text-gray-600">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="text-black">
                {signals.length === 0 ? (
                  <tr>
                    <td colSpan="6" className="py-2 px-4 border-b text-center">
                      No signals available.{" "}
                      <button className="ml-2 px-4 py-2 bg-blue-500 text-white rounded">
                        Create Signal
                      </button>
                    </td>
                  </tr>
                ) : (
                  signals.map((signal, index) => (
                    <tr key={index}>
                      <td className="py-2 px-4 border-b">{signal.symbol}</td>
                      <td className="py-2 px-4 border-b">{signal.interval}</td>
                      <td className="py-2 px-4 border-b">{signal.units}</td>
                      <td className="py-2 px-4 border-b">{signal.amount}</td>
                      <td className="py-2 px-4 border-b">{signal.direction}</td>
                      <td
                        className={`py-2 px-4 border-b ${
                          signal.status === "ongoing"
                            ? "text-yellow-500"
                            : "text-gray-600"
                        }`}
                      >
                        {signal.status}
                      </td>
                    </tr>
                  ))
                )}
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
