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

// API endpoints
export const donationAPI = {
  create: (data: DonationPayload) => api.post("/donations/", data),
};

export const contactAPI = {
  sendMessage: (data: ContactPayload) => api.post("/contact/", data),
};

export default api;
