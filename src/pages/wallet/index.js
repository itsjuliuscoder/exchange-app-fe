import React, { useEffect, useState } from "react";
import { MdOutlinePerson } from "react-icons/md";
import apiService from "../../../lib/api";

const WalletManagementPage = () => {
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    (async () => {
      const data = await apiService.getWalletDetails();
      setUserDetails(data);
    })();
  }, []);

  return (
    <div className="bg-white h-[100svh] flex justify-center items-center text-black">
      <div className="w-1/2">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-black text-5xl font-semibold">Profile</h2>
          <p className="text-black text-xl">
            {" "}
            Dashboard /<span className="text-blue-400"> wallet</span>
          </p>
        </div>
        <div className="bg-gray-300 w-full flex flex-col items-center h-fit py-6 px-8">
          <div className="bg-white w-fit px-8 py-8 rounded-full mb-2">
            <MdOutlinePerson color="#000" size={48} />
          </div>
          <div className="flex flex-col items-center justify-center mb-6">
            <h2 className="text-black text-2xl font-semibold">
              {userDetails?.user.name}
            </h2>
            <p>{userDetails?.user.email}</p>
          </div>
          <div className="flex items-center gap-10 px-6 py-4 border-2 border-black rounded-md">
            <div className="text-xl font-semibold">
              {userDetails?.walletType}{" "}
              <span className="text-gray-500"> Wallet</span>
            </div>
            <div className="text-xl font-semibold">
              {userDetails?.balance} <span className="text-gray-500"> USD</span>
            </div>
            <div className="text-xl font-semibold">
              {userDetails?.user.accountType}{" "}
              <span className="text-gray-500"> Account</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletManagementPage;
