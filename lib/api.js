import axios from 'axios';

const API_BASE_URL = 'https://exchange-app-be.onrender.com/api';   //'http://localhost:5001/api';

const userId = '6779855f4c7aebc2509ebc79';

const apiService = {
    createSignal: async (signalData) => {
        signalData.userId = userId;
        try {
            const response = await axios.post(`${API_BASE_URL}/signal/create`, signalData);
            return response.data;
        } catch (error) {
            console.error('Error creating signal:', error);
            throw error;
        }
    },

    getAllSignals: async () => {
        try {
            const response = await axios.get(`${API_BASE_URL}/signal/list`);
            return response.data;
        } catch (error) {
            console.error('Error getting all signals:', error);
            throw error;
        }
    },

    getWalletDetails: async () => {
        try {
            const response = await axios.get(`${API_BASE_URL}/wallet/get-wallet/${userId}`);
            return response.data;
        } catch (error) {
            console.error('Error getting wallet details:', error);
            throw error;
        }
    },

    getUserDetails: async (userId) => {
        try {
            const response = await axios.get(`${API_BASE_URL}/getUserDetails`, {
                params: { userId }
            });
            return response.data;
        } catch (error) {
            console.error('Error getting user details:', error);
            throw error;    
        }
    },

    getCryptoData: async (cryptoId) => {
        try {
            const response = await axios.get(`${API_BASE_URL}/trading/crypto/all-markets`, {
                params: { cryptoId }
            });
            return response.data;
        } catch (error) {
            console.error('Error getting crypto data:', error);
            throw error;
        }
    },

    createTrade: async (tradeData) => {
        tradeData.userId = userId;
        try {
            const response = await axios.post(`${API_BASE_URL}/trading/create`, tradeData);
            return response.data;
        } catch (error) {
            console.error('Error creating trade:', error);
            throw error;
        }
    },

    getAllTrade: async () => {
        try {
            const response = await axios.get(`${API_BASE_URL}/trading/list`);
            return response.data;
        } catch (error) {
            console.error('Error getting all trades:', error);
            throw error;
        }
    }
};

export default apiService;