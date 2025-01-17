import React, { useState } from 'react';

const WithdrawPage = () => {
    const [amount, setAmount] = useState('');
    const [account, setAccount] = useState('');

    const handleWithdraw = () => {
        // Add your withdraw logic here
        console.log(`Withdrawing ${amount} from account ${account}`);
    };

    return (
        <div>
            <h1>Withdraw Funds</h1>
            <form onSubmit={(e) => { e.preventDefault(); handleWithdraw(); }}>
                <div>
                    <label htmlFor="amount">Amount:</label>
                    <input
                        type="number"
                        id="amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="account">Account:</label>
                    <input
                        type="text"
                        id="account"
                        value={account}
                        onChange={(e) => setAccount(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Withdraw</button>
            </form>
        </div>
    );
};

export default WithdrawPage;