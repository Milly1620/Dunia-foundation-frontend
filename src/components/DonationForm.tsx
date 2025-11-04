import React, { useState, useEffect, useRef } from "react";
import { useForm, Controller } from "react-hook-form";
import Button from "./Button";
import ToggleButtonGroup from "./ToggleButtonGroup";
import DonationAmountCard from "./DonationAmountCard";
import InputField from "./InputField";
import SelectField from "./SelectField";
import TextareaField from "./TextareaField";
import CheckboxField from "./CheckboxField";
import { useNavigate } from "react-router-dom";
import { donationAPI, programsAPI, type DonationPayload, type Program } from "../utils/api";

interface DonationFormData {
  donationType: 'one-time' | 'monthly';
  selectedAmount: string;
  customAmount: string;
  selectedProgram: string; // This will store the program ID as string
  isAnonymous: boolean;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  notes: string;
}


const DonationForm: React.FC = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{type: 'success' | 'error', message: string} | null>(null);
  const [programs, setPrograms] = useState<Program[]>([]);
  const [loadingPrograms, setLoadingPrograms] = useState(true);
  const errorMessageRef = useRef<HTMLDivElement>(null);

  const {
    control,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<DonationFormData>({
    defaultValues: {
      donationType: "one-time",
      selectedAmount: "",
      customAmount: "",
      selectedProgram: "",
      isAnonymous: false,
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      country: "Ghana",
      notes: "",
    },
  });

  const watchedValues = watch();

  // Fetch programs on component mount
  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        setLoadingPrograms(true);
        const response = await programsAPI.getAll();
        // Filter only active programs
        const activePrograms = response.data.filter(program => program.is_active);
        setPrograms(activePrograms);
      } catch (error) {
        console.error('Failed to fetch programs:', error);
        // Fallback to empty array if fetch fails
        setPrograms([]);
      } finally {
        setLoadingPrograms(false);
      }
    };

    fetchPrograms();
  }, []);

  // Generate program options from fetched programs
  const programOptions = [
    { value: "", label: "Where needed most" }, // Default option
    ...programs.map(program => ({
      value: program.id.toString(),
      label: program.name
    }))
  ];

  const handleAmountSelect = (amount: string) => {
    setValue("selectedAmount", amount);
    setValue("customAmount", ""); // Clear custom amount when selecting preset
  };


  const onSubmit = async (data: DonationFormData) => {
    setIsSubmitting(true);
    setSubmitMessage(null);

    try {
      // Determine the final amount (either selected preset or custom)
      const finalAmount = data.customAmount ?
        Number.parseFloat(data.customAmount) :
        Number.parseFloat(data.selectedAmount.replace('$', ''));

      // Use the selected program ID directly, or default to first available program
      let programId: number;
      if (data.selectedProgram) {
        programId = Number.parseInt(data.selectedProgram, 10);
      } else if (programs.length > 0) {
        programId = programs[0].id;
      } else {
        programId = 1; // Fallback to 1 if no programs available
      }

      const payload: DonationPayload = {
        amount: finalAmount,
        country: data.country,
        donation_type: data.donationType,
        email: data.email,
        first_name: data.firstName,
        is_anonymous: data.isAnonymous,
        last_name: data.lastName,
        notes: data.notes || undefined,
        phone_number: data.phone,
        program_id: programId,
      };

      // Initialize payment with backend
      const response = await donationAPI.create(payload);
      const paystackData = response.data;

      if (paystackData.success) {
        // Show success message briefly before redirecting
        setSubmitMessage({
          type: 'success',
          message: 'Redirecting to payment gateway...'
        });

        // Redirect to Paystack checkout page
        setTimeout(() => {
          globalThis.location.href = paystackData.authorization_url;
        }, 1500);
      } else {
        throw new Error(paystackData.message || 'Failed to initialize payment');
      }

    } catch (error: unknown) {
      console.error('Donation submission error:', error);

      // Parse API error response
      let errorMessage = 'Sorry, there was an error processing your donation. Please try again.';

      if (error && typeof error === 'object' && 'response' in error) {
        const axiosError = error as { response?: { data?: { detail?: string; message?: string } } };
        if (axiosError.response?.data?.detail) {
          // Handle specific API error format: {"detail": "Failed to create donation: Donation amount must be greater than 0"}
          errorMessage = axiosError.response.data.detail.replace('Failed to create donation: ', '');
        } else if (axiosError.response?.data?.message) {
          errorMessage = axiosError.response.data.message;
        }
      } else if (error instanceof Error) {
        errorMessage = error.message;
      }

      setSubmitMessage({
        type: 'error',
        message: errorMessage
      });

      // Scroll to error message
      setTimeout(() => {
        errorMessageRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        });
      }, 100);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="max-w-[853px] mx-auto bg-white py-6 px-[35px]"
      style={{ boxShadow: "0px 3px 10px 0px #D7FFD866" }}
    >
      {submitMessage && (
        <div
          ref={errorMessageRef}
          className={`mb-4 p-4 rounded-md ${
            submitMessage.type === 'success'
              ? 'bg-green-50 text-green-800 border border-green-200'
              : 'bg-red-50 text-red-800 border border-red-200'
          }`}
        >
          {submitMessage.message}
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        {/* Donation Type Section */}
        <div className="space-y-6">
          <h2 className="md:text-[35px] text-[24px] poppins-semibold text-primary border-b border-[#D4D4D8] pb-4">
            Donation Type
          </h2>

          <Controller
            name="donationType"
            control={control}
            render={({ field }) => (
              <ToggleButtonGroup
                options={donationOptions}
                value={field.value}
                onChange={field.onChange}
              />
            )}
          />

          {/* Donation Amount Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-3 md:gap-6 gap-4">
            {amountCards.map((card) => (
              <DonationAmountCard
                key={card.amount}
                amount={card.amount}
                description={card.description}
                isSelected={watchedValues.selectedAmount === card.amount}
                onClick={() => handleAmountSelect(card.amount)}
              />
            ))}
          </div>
        </div>

        {/* Custom Amount & Program Selection */}
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Controller
              name="customAmount"
              control={control}
              render={({ field }) => (
                <InputField
                  label="Custom amount"
                  name={field.name}
                  value={field.value}
                  onChange={field.onChange}
                  placeholder="GHS Enter custom amount"
                  // prefix="GHS"
                />
              )}
            />

            <Controller
              name="selectedProgram"
              control={control}
              render={({ field }) => (
                <SelectField
                  label="Choose program to support"
                  name={field.name}
                  value={field.value}
                  onChange={field.onChange}
                  options={programOptions}
                  placeholder={loadingPrograms ? "Loading programs..." : "Where needed most"}
                  disabled={loadingPrograms}
                />
              )}
            />
          </div>

          <Controller
            name="isAnonymous"
            control={control}
            render={({ field }) => (
              <CheckboxField
                label="Anonymous donations"
                name={field.name}
                checked={field.value}
                onChange={field.onChange}
              />
            )}
          />
        </div>

        {/* Donor Information Section */}
        <div className="space-y-6">
          <h2 className="text-[24px] poppins-semibold text-primary border-b border-[#D4D4D8] pb-2">
            Donor Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Controller
              name="firstName"
              control={control}
              rules={{ required: "First name is required" }}
              render={({ field }) => (
                <InputField
                  label="First name"
                  name={field.name}
                  value={field.value}
                  onChange={field.onChange}
                  placeholder="Enter your first name"
                  required
                  error={errors.firstName?.message}
                />
              )}
            />

            <Controller
              name="lastName"
              control={control}
              rules={{ required: "Last name is required" }}
              render={({ field }) => (
                <InputField
                  label="Last name"
                  name={field.name}
                  value={field.value}
                  onChange={field.onChange}
                  placeholder="Enter your last name"
                  required
                  error={errors.lastName?.message}
                />
              )}
            />

            <Controller
              name="email"
              control={control}
              rules={{
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address"
                }
              }}
              render={({ field }) => (
                <InputField
                  label="Email"
                  name={field.name}
                  type="email"
                  value={field.value}
                  onChange={field.onChange}
                  placeholder="Enter your email"
                  required
                  error={errors.email?.message}
                />
              )}
            />

            <Controller
              name="phone"
              control={control}
              render={({ field }) => (
                <InputField
                  label="Phone number"
                  name={field.name}
                  type="tel"
                  value={field.value}
                  onChange={field.onChange}
                  placeholder="Enter your phone number"
                  error={errors.phone?.message}
                />
              )}
            />

            <div className="md:col-span-2">
              <Controller
                name="country"
                control={control}
                render={({ field }) => (
                  <SelectField
                    label="Country"
                    name={field.name}
                    value={field.value}
                    onChange={field.onChange}
                    options={countryOptions}
                  />
                )}
              />
            </div>

            <div className="md:col-span-2">
              <Controller
                name="notes"
                control={control}
                render={({ field }) => (
                  <TextareaField
                    label="Notes (Optional)"
                    name={field.name}
                    value={field.value}
                    onChange={field.onChange}
                    placeholder="Enter item description"
                    rows={4}
                  />
                )}
              />
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-end">
          <Button
            type="button"
            variant="secondary"
            size="lg"
            onClick={() => navigate("/")}
            disabled={isSubmitting}
          >
            Go to home
          </Button>

          <Button
            type="submit"
            variant="primary"
            size="lg"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Processing..." : "Make Donation"}
          </Button>
        </div>
      </form>
    </div>
  );
};

const donationOptions = [
  { value: "one-time", label: "One-time" },
  { value: "monthly", label: "Monthly" },
];

const amountCards = [
  { amount: "GHS 50", description: "Educational materials" },
  { amount: "GHS 50", description: "Clean water access" },
  { amount: "GHS 100", description: "Healthcare support" },
  { amount: "GHS 250", description: "Skill Development" },
  { amount: "GHS 500", description: "Infrastructure Development" },
  { amount: "GHS 1000", description: "Agriculture Aid" }
];


const countryOptions = [
  { value: "Ghana", label: "Ghana" },
  { value: "Nigeria", label: "Nigeria" },
  { value: "Kenya", label: "Kenya" },
  { value: "South Africa", label: "South Africa" },
  { value: "Other", label: "Other" },
];

export default DonationForm;
