import React, { useState } from 'react';

const DepositPage = () => {
    const [amount, setAmount] = useState('');
    const [message, setMessage] = useState('');

    const handleWithdraw = () => {
        // Add your withdraw logic here
        setMessage(`You have successfully withdrawn ${amount}`);
    };

    return (
        <div>
            <h1>Withdraw</h1>
            <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter amount"
            />
            <button onClick={handleWithdraw}>Withdraw</button>
            {message && <p>{message}</p>}
        </div>
    );
};

export default DepositPage;