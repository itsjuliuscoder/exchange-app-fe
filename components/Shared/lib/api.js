const axios = require('axios');

const apiClient = axios.create({
    baseURL: 'http://localhost:5001/api',
    headers: {
        'Content-Type': 'application/json'
    }
});

const userId = "6779855f4c7aebc2509ebc79";

const apiService = {
    getAllCryptoMarkets: async () => {
        try {
            const response = await apiClient.get('/trades/crypto/all-markets');
            return response.data;
        } catch (error) {
            console.error('GET all crypto markets request failed:', error);
            throw error;
        }
    },

    createTrade: async (tradeData) => {
        try {
            const response = await apiClient.post('/trade/create', tradeData);
            return response.data;
        } catch (error) {
            console.error('POST create trade request failed:', error);
            throw error;
        }
    },

    createTradeOutcome: async (tradeOutcomeData) => {
        try {
            const response = await apiClient.post('/trade-outcomes', tradeOutcomeData);
            return response.data;
        } catch (error) {
            console.error('POST create trade outcome request failed:', error);
            throw error;
        }
    },

    getWalletDetails: async () => {
        try {
            const response = await apiClient.get('/wallet');
            return response.data;
        } catch (error) {
            console.error('GET wallet details request failed:', error);
            throw error;
        }
    },

    getUserDetails: async () => {
        try {
            const response = await apiClient.get('/user');
            return response.data;
        } catch (error) {
            console.error('GET user details request failed:', error);
            throw error;
        }
    }
};

module.exports = apiService;