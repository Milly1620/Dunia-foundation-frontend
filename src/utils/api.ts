import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000, // 10 seconds timeout
});

api.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Type definitions for API payloads
export interface DonationPayload {
  amount: number;
  country: string;
  donation_type: "one-time" | "monthly";
  email: string;
  first_name: string;
  is_anonymous: boolean;
  last_name: string;
  notes?: string;
  phone_number: string;
  program_id: number;
}

export interface ContactPayload {
  email: string;
  message: string;
  name: string;
  subject: string;
}

export interface Program {
  id: number;
  name: string;
  description: string;
  amount: number;
  is_active: boolean;
  created_at: string;
  updated_at: string | null;
}

export interface PaystackResponse {
  success: boolean;
  message: string;
  donation_id: number;
  payment_reference: string;
  authorization_url: string;
  access_code: string;
}

// API endpoints
export const donationAPI = {
  create: (data: DonationPayload) => api.post<PaystackResponse>("/donations/", data),
};

export const contactAPI = {
  sendMessage: (data: ContactPayload) => api.post("/contact/", data),
};

export const programsAPI = {
  getAll: () => api.get<Program[]>("/programs/"),
};

export default api;
