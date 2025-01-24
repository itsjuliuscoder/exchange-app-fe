import React from "react";

const SellAssetsPage = () => {
  const [formData, setFormData] = useState({
    userId: "",
    signalId: "",
    interval: "",
    units: "",
    amount: "",
    tradeType: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
      userId: payload.userId,
      signalId: payload.signalId,
      tradeType: payload.tradeType,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);

    try {
      const response = await apiService.createTrade(formData);
      if (response) {
        toast.success("Trade created successfully!");
      }
      console.log("Trade created:", response);
      setFormData({
        userId: "",
        signalId: "",
        interval: "",
        units: "",
        amount: "",
        tradeType: "",
      });
      setTimeout(() => {
        router.push("/trade-history");
      }, 3000);
    } catch (error) {
      toast.error("An error occurred while creating the trade.");
      setFormData({
        userId: "",
        signalId: "",
        interval: "",
        units: "",
        amount: "",
        tradeType: "",
      });
    }
  };

  return (
    <div className="bg-white w-full h-[100svh]">
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
          <h2 className="text-gray-500 text-2xl font-semibold mb-4">Buy</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="amount"
              >
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
              <label className="block text-sm font-medium text-gray-700">
                Units
              </label>
              <select
                name="units"
                value={formData.units}
                onChange={handleChange}
                className="mt-1 block w-full p-2 text-gray-500 border border-gray-300 rounded-md"
              >
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
              <label className="block text-sm font-medium text-gray-700">
                Interval
              </label>
              <select
                name="interval"
                value={formData.interval}
                onChange={handleChange}
                className="mt-1 block w-full p-2 text-gray-500 border border-gray-300 rounded-md"
              >
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
    </div>
  );
};

export default SellAssetsPage;
