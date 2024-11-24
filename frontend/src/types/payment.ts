export interface PaymentFormData {
    cardNumber: string;
    expiryDate: string;
    cvv: string;
    amount: string;
  }
  
  export interface PaymentResponse {
    success: boolean;
    message: string;
    payment_intent_id?: string;
  }
  