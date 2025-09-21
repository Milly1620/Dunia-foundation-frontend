import { useState } from "react";

function DonatePage() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState("");
  const [donationType, setDonationType] = useState("one-time");

  const presetAmounts = [25, 50, 100, 250, 500, 1000];

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount("");
  };

  const handleCustomAmountChange = (value: string) => {
    setCustomAmount(value);
    setSelectedAmount(null);
  };

  const handleDonate = () => {
    const amount = selectedAmount || parseFloat(customAmount);
    if (amount && amount > 0) {
      // Here you would integrate with your payment processor
      alert(
        `Thank you for your donation of $${amount}! This would normally redirect to payment processing.`
      );
    }
  };

  return (
    <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Make a Difference Today
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Your generous donation helps us continue our mission to create
              positive change in communities around the world.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Donation Form */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Donation Details
              </h2>

              {/* Donation Type */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Donation Type
                </label>
                <div className="flex space-x-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="donationType"
                      value="one-time"
                      checked={donationType === "one-time"}
                      onChange={(e) => setDonationType(e.target.value)}
                      className="mr-2"
                    />
                    One-time
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="donationType"
                      value="monthly"
                      checked={donationType === "monthly"}
                      onChange={(e) => setDonationType(e.target.value)}
                      className="mr-2"
                    />
                    Monthly
                  </label>
                </div>
              </div>

              {/* Amount Selection */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Select Amount
                </label>
                <div className="grid grid-cols-3 gap-3 mb-4">
                  {presetAmounts.map((amount) => (
                    <button
                      key={amount}
                      onClick={() => handleAmountSelect(amount)}
                      className={`p-3 rounded-lg border-2 transition-colors ${
                        selectedAmount === amount
                          ? "border-blue-500 bg-blue-50 text-blue-700"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      ${amount}
                    </button>
                  ))}
                </div>

                {/* Custom Amount */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Or enter custom amount
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                      $
                    </span>
                    <input
                      type="number"
                      value={customAmount}
                      onChange={(e) => handleCustomAmountChange(e.target.value)}
                      placeholder="0.00"
                      className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              {/* Donate Button */}
              <button
                onClick={handleDonate}
                disabled={!selectedAmount && !customAmount}
                className="w-full bg-green-600 text-white py-4 px-6 rounded-lg hover:bg-green-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors font-medium text-lg"
              >
                {donationType === "monthly"
                  ? "Start Monthly Donation"
                  : "Donate Now"}
              </button>
            </div>

            {/* Impact Information */}
            <div className="space-y-8">
              {/* Impact Stats */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-6">
                  Your Impact
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">$25</span>
                    <span className="text-sm text-gray-500">
                      Provides school supplies for 1 child
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">$50</span>
                    <span className="text-sm text-gray-500">
                      Feeds a family for 1 week
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">$100</span>
                    <span className="text-sm text-gray-500">
                      Supports healthcare for 5 people
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">$250</span>
                    <span className="text-sm text-gray-500">
                      Funds a women's empowerment workshop
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">$500</span>
                    <span className="text-sm text-gray-500">
                      Renovates a classroom
                    </span>
                  </div>
                </div>
              </div>

              {/* Why Donate */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Why Donate?
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>100% of donations go directly to programs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Transparent reporting on fund usage</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Tax-deductible receipts provided</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Regular updates on impact</span>
                  </li>
                </ul>
              </div>

              {/* Contact Info */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Questions?
                </h3>
                <p className="text-gray-600 mb-4">
                  Have questions about donating or need assistance?
                </p>
                <div className="space-y-2 text-sm">
                  <p>
                    <strong>Email:</strong> donations@sesafoundation.org
                  </p>
                  <p>
                    <strong>Phone:</strong> +1 (555) 123-4567
                  </p>
                  <p>
                    <strong>Hours:</strong> Mon-Fri, 9AM-5PM EST
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default DonatePage;
