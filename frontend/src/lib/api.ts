import axios from 'axios';
import { PaymentFormData, PaymentResponse } from '../types/payment';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export const processPayment = async (data: PaymentFormData): Promise<PaymentResponse> => {
  try {
    const response = await axios.post(`${API_URL}/api/process-payment`, data);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response.data.message || 'Payment processing failed');
    }
    throw new Error('Network error occurred');
  }
};