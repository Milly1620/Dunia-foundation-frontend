import React, { useState } from "react";
import Button from "./Button";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactForm: React.FC<{ border?: boolean, className?: string }> = ({ border = true, className = "" }) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div
      className={` w-full ${className} ${
        border ? "border border-border py-6 px-[35px]" : ""
      }`}
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Field */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-main-black mb-2 poppins-medium"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Enter your name"
            className="w-full px-4 py-3 border border-input focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-colors duration-200 poppins-regular"
            required
          />
        </div>

        {/* Email Field */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-main-black mb-2 poppins-medium"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter your email"
            className="w-full px-4 py-3 border border-input focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-colors duration-200 poppins-regular"
            required
          />
        </div>

        {/* Subject Field */}
        <div>
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-main-black mb-2 poppins-medium"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            placeholder="Enter subject"
            className="w-full px-4 py-3 border border-input focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-colors duration-200 poppins-regular"
            required
          />
        </div>

        {/* Message Field */}
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-main-black mb-2 poppins-medium"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Write your message"
            rows={5}
            className="w-full px-4 py-3 border border-input focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-colors duration-200 poppins-regular resize-vertical"
            required
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="px-8 py-3"
          >
            Send message
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
