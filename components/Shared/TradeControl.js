import React, { useState } from 'react';

const TradeControl = () => {
    const [tradeId, setTradeId] = useState('');
    const [outcome, setOutcome] = useState('');
    const [assetValue, setAssetValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle the form submission logic here
        console.log(`Trade ID: ${tradeId}, Outcome: ${outcome}, Asset Value: ${assetValue}`);
        // You can make an API call to the backend to update the trade outcome and asset value
    };

    return (
        <div className="trade-control">
            <h2>Trade Control</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="tradeId">Trade ID:</label>
                    <input
                        type="text"
                        id="tradeId"
                        value={tradeId}
                        onChange={(e) => setTradeId(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="outcome">Outcome (win/loss):</label>
                    <input
                        type="text"
                        id="outcome"
                        value={outcome}
                        onChange={(e) => setOutcome(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="assetValue">Asset Value:</label>
                    <input
                        type="text"
                        id="assetValue"
                        value={assetValue}
                        onChange={(e) => setAssetValue(e.target.value)}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default TradeControl;