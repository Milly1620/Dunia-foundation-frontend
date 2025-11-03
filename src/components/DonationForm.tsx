import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Button from "./Button";
import ToggleButtonGroup from "./ToggleButtonGroup";
import DonationAmountCard from "./DonationAmountCard";
import InputField from "./InputField";
import SelectField from "./SelectField";
import TextareaField from "./TextareaField";
import CheckboxField from "./CheckboxField";
import { useNavigate } from "react-router-dom";
import { donationAPI, type DonationPayload } from "../utils/api";

interface DonationFormData {
  donationType: 'one-time' | 'monthly';
  selectedAmount: string;
  customAmount: string;
  selectedProgram: string;
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
        parseFloat(data.customAmount) :
        parseFloat(data.selectedAmount.replace('$', ''));

      // Map program selection to program_id (you may need to adjust this mapping)
      const programIdMapping: Record<string, number> = {
        'where-needed': 1,
        'education': 2,
        'healthcare': 3,
        'wash': 4,
        'agriculture': 5,
        'women-youth': 6,
        'community': 7,
        'emergency': 8,
      };

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
        program_id: programIdMapping[data.selectedProgram] || 1,
      };

      await donationAPI.create(payload);

      setSubmitMessage({
        type: 'success',
        message: 'Thank you for your donation! Your contribution has been received successfully.'
      });

      // Reset form or redirect after successful submission
      setTimeout(() => {
        navigate('/');
      }, 3000);

    } catch (error) {
      console.error('Donation submission error:', error);
      setSubmitMessage({
        type: 'error',
        message: 'Sorry, there was an error processing your donation. Please try again.'
      });
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
        <div className={`mb-4 p-4 rounded-md ${
          submitMessage.type === 'success'
            ? 'bg-green-50 text-green-800 border border-green-200'
            : 'bg-red-50 text-red-800 border border-red-200'
        }`}>
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
                  placeholder="Enter custom amount"
                  prefix="$"
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
                  placeholder="Where needed most"
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
  { amount: "$25", description: "Educational materials" },
  { amount: "$50", description: "Clean water access" },
  { amount: "$100", description: "Healthcare support" },
  { amount: "$250", description: "Skill Development" },
  { amount: "$500", description: "Infrastructure Development" },
  { amount: "$1000", description: "Clean water access" },
];

const programOptions = [
  { value: "where-needed", label: "Where needed most" },
  { value: "education", label: "Education & Literacy" },
  { value: "healthcare", label: "Healthcare Access" },
  { value: "wash", label: "WASH Projects" },
  { value: "agriculture", label: "Agricultural Development" },
  { value: "women-youth", label: "Women & Youth Empowerment" },
  { value: "community", label: "Community Development" },
  { value: "emergency", label: "Emergency Response" },
];

const countryOptions = [
  { value: "Ghana", label: "Ghana" },
  { value: "Nigeria", label: "Nigeria" },
  { value: "Kenya", label: "Kenya" },
  { value: "South Africa", label: "South Africa" },
  { value: "Other", label: "Other" },
];

export default DonationForm;
