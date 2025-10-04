'use client';

/**
 * Donation Module Component
 *
 * Prominent donation section with preset amounts and custom option
 */

import { useState } from 'react';
import Container from '@/components/ui/Container';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';
import Button from '@/components/ui/Button';

const donationAmounts = [25, 50, 100, 250, 500, 1000];

interface DonationModuleProps {
  className?: string;
}

export default function DonationModule({ className = '' }: DonationModuleProps) {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(100);
  const [customAmount, setCustomAmount] = useState('');
  const [isCustom, setIsCustom] = useState(false);

  const handleDonate = () => {
    const amount = isCustom ? customAmount : selectedAmount;
    console.log('Donating:', amount);
    // Redirect to payment processor (Stripe, PayPal, ActBlue, etc.)
    alert(`Proceeding to donate $${amount}. This would redirect to payment processor.`);
  };

  return (
    <section className={`py-16 lg:py-24 bg-gradient-to-br from-[#1a3a2e] via-[#0f2318] to-[#0d1f16] ${className}`}>
      <Container>
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Support Our Work
            </h2>
            <p className="text-xl text-stone-200">
              Help us bring practical solutions directly to Oregon voters
            </p>
          </div>

          {/* Donation Card */}
          <Card className="shadow-2xl">
            <CardHeader>
              <CardTitle className="text-2xl">Make a Contribution</CardTitle>
              <CardDescription>
                Your donation powers our grassroots democracy initiatives
              </CardDescription>
            </CardHeader>
            <CardContent>
              {/* Preset Amounts */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Select Amount
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {donationAmounts.map((amount) => (
                    <button
                      key={amount}
                      type="button"
                      onClick={() => {
                        setSelectedAmount(amount);
                        setIsCustom(false);
                      }}
                      className={`py-4 px-4 rounded-lg border-2 font-semibold transition-all cursor-pointer ${
                        selectedAmount === amount && !isCustom
                          ? 'border-emerald-800 bg-emerald-50 text-emerald-800'
                          : 'border-gray-300 hover:border-emerald-800'
                      }`}
                    >
                      ${amount}
                    </button>
                  ))}
                </div>
              </div>

              {/* Custom Amount */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Or Enter Custom Amount
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-3.5 text-gray-500 font-semibold">
                    $
                  </span>
                  <input
                    type="number"
                    min="1"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      setIsCustom(true);
                      setSelectedAmount(null);
                    }}
                    onFocus={() => setIsCustom(true)}
                    className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-600 focus:border-transparent"
                    placeholder="Enter amount"
                  />
                </div>
              </div>

              {/* Recurring Option */}
              <div className="mb-6 p-4 bg-emerald-50 rounded-lg">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-5 h-5 text-emerald-700 border-gray-300 rounded focus:ring-emerald-600"
                  />
                  <span className="ml-3 text-sm font-medium text-gray-700">
                    Make this a monthly recurring donation
                  </span>
                </label>
              </div>

              {/* Donate Button */}
              <Button
                variant="primary"
                size="lg"
                className="w-full bg-gradient-to-r from-emerald-700 to-emerald-800 hover:from-emerald-800 hover:to-emerald-900"
                onClick={handleDonate}
              >
                Donate {isCustom && customAmount ? `$${customAmount}` : selectedAmount ? `$${selectedAmount}` : ''} Now
              </Button>

              {/* Disclaimer */}
              <p className="text-xs text-gray-500 text-center mt-4">
                Contributions are not tax-deductible. By proceeding, you agree to our terms.
              </p>
            </CardContent>
          </Card>

          {/* Impact Statement */}
          <div className="mt-8 text-center">
            <p className="text-stone-300 text-sm">
              <strong className="text-white">100% of your donation</strong> goes directly to supporting ballot initiatives,
              <br />signature gathering, and voter education in Oregon.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
