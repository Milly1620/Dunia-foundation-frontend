import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "./Button";
import { contactAPI, type ContactPayload } from "../utils/api";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactForm: React.FC<{ border?: boolean, className?: string }> = ({ border = true, className = "" }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{type: 'success' | 'error', message: string} | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitMessage(null);

    try {
      const payload: ContactPayload = {
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message,
      };

      await contactAPI.sendMessage(payload);

      setSubmitMessage({
        type: 'success',
        message: 'Thank you for your message! We\'ll get back to you soon.'
      });

      // Reset form after successful submission
      reset();

    } catch (error) {
      console.error('Contact form submission error:', error);
      setSubmitMessage({
        type: 'error',
        message: 'Sorry, there was an error sending your message. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className={` w-full ${className} ${
        border ? "border border-border py-6 px-[35px]" : ""
      }`}
    >
      {submitMessage && (
        <div className={`mb-6 p-4 rounded-md ${
          submitMessage.type === 'success'
            ? 'bg-green-50 text-green-800 border border-green-200'
            : 'bg-red-50 text-red-800 border border-red-200'
        }`}>
          {submitMessage.message}
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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
            {...register("name", { required: "Name is required" })}
            placeholder="Enter your name"
            className={`w-full px-4 py-3 border ${
              errors.name ? 'border-red-500' : 'border-input'
            } focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-colors duration-200 poppins-regular`}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
          )}
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
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address"
              }
            })}
            placeholder="Enter your email"
            className={`w-full px-4 py-3 border ${
              errors.email ? 'border-red-500' : 'border-input'
            } focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-colors duration-200 poppins-regular`}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
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
            {...register("subject", { required: "Subject is required" })}
            placeholder="Enter subject"
            className={`w-full px-4 py-3 border ${
              errors.subject ? 'border-red-500' : 'border-input'
            } focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-colors duration-200 poppins-regular`}
          />
          {errors.subject && (
            <p className="mt-1 text-sm text-red-600">{errors.subject.message}</p>
          )}
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
            {...register("message", { required: "Message is required" })}
            placeholder="Write your message"
            rows={5}
            className={`w-full px-4 py-3 border ${
              errors.message ? 'border-red-500' : 'border-input'
            } focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-colors duration-200 poppins-regular resize-vertical`}
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="px-8 py-3"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send message"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
