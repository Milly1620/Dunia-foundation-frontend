import React, { useState } from "react";
import Button from "./Button";
import ToggleButtonGroup from "./ToggleButtonGroup";
import DonationAmountCard from "./DonationAmountCard";
import InputField from "./InputField";
import SelectField from "./SelectField";
import TextareaField from "./TextareaField";
import CheckboxField from "./CheckboxField";
import { useNavigate } from "react-router-dom";

interface DonationData {
  donationType: string;
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
  const [donationData, setDonationData] = useState<DonationData>({
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
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    setDonationData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleAmountSelect = (amount: string) => {
    setDonationData((prev) => ({
      ...prev,
      selectedAmount: amount,
      customAmount: "", // Clear custom amount when selecting preset
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Donation submitted:", donationData);
    // Handle donation submission here
  };

  return (
    <div
      className="max-w-[853px] mx-auto bg-white py-6 px-[35px]"
      style={{ boxShadow: "0px 3px 10px 0px #D7FFD866" }}
    >
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Donation Type Section */}
        <div className="space-y-6">
          <h2 className="md:text-[35px] text-[24px] poppins-semibold text-primary border-b border-[#D4D4D8] pb-4">
            Donation Type
          </h2>

          <ToggleButtonGroup
            options={donationOptions}
            value={donationData.donationType}
            onChange={(value) =>
              setDonationData((prev) => ({ ...prev, donationType: value }))
            }
          />

          {/* Donation Amount Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-3 md:gap-6 gap-4">
            {amountCards.map((card) => (
              <DonationAmountCard
                key={card.amount}
                amount={card.amount}
                description={card.description}
                isSelected={donationData.selectedAmount === card.amount}
                onClick={() => handleAmountSelect(card.amount)}
              />
            ))}
          </div>
        </div>

        {/* Custom Amount & Program Selection */}
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InputField
              label="Custom amount"
              name="customAmount"
              value={donationData.customAmount}
              onChange={handleInputChange}
              placeholder="Enter custom amount"
              prefix="$"
            />

            <SelectField
              label="Choose program to support"
              name="selectedProgram"
              value={donationData.selectedProgram}
              onChange={handleInputChange}
              options={programOptions}
              placeholder="Where needed most"
            />
          </div>

          <CheckboxField
            label="Anonymous donations"
            name="isAnonymous"
            checked={donationData.isAnonymous}
            onChange={handleInputChange}
          />
        </div>

        {/* Donor Information Section */}
        <div className="space-y-6">
          <h2 className="text-[24px] poppins-semibold text-primary border-b border-[#D4D4D8] pb-2">
            Donor Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InputField
              label="First name"
              name="firstName"
              value={donationData.firstName}
              onChange={handleInputChange}
              placeholder="Enter your first name"
              required
            />

            <InputField
              label="Last name"
              name="lastName"
              value={donationData.lastName}
              onChange={handleInputChange}
              placeholder="Enter your last name"
              required
            />

            <InputField
              label="Email"
              name="email"
              type="email"
              value={donationData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              required
            />

            <InputField
              label="Phone number"
              name="phone"
              type="tel"
              value={donationData.phone}
              onChange={handleInputChange}
              placeholder="Enter your phone number"
            />

            <div className="md:col-span-2">
              <SelectField
                label="Country"
                name="country"
                value={donationData.country}
                onChange={handleInputChange}
                options={countryOptions}
              />
            </div>

            <div className="md:col-span-2">
              <TextareaField
                label="Notes (Optional)"
                name="notes"
                value={donationData.notes}
                onChange={handleInputChange}
                placeholder="Enter item description"
                rows={4}
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
          >
            Go to home
          </Button>

          <Button type="submit" variant="primary" size="lg">
            Make Donation
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
