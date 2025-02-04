'use client'; // Mark as a Client Component

import { useState } from 'react';
import Image from 'next/image';

export default function DonateForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [donation, setDonation] = useState(1);
  const [qrCode, setQrCode] = useState<string | null>(null);
  const [certificate, setCertificate] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Send data to the API route
      const response = await fetch('/api/donate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, amount: donation }),
      });

      if (response.ok) {
        const data = await response.json();
        setQrCode(data.qrCode); // Set QR code URL
        setCertificate(data.certificate); // Set certificate text
      } else {
        alert('Failed to submit donation.');
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred.');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-rp-6  ">
      <div className="rounded-xl shadow-lg p-8 w-full max-w-md space-y-6 transform transition-all duration-500 hover:scale-105 animate-fade-in hover:shadow-[0_0_10px_5px_rgba(128,0,255,0.7)] ">
        <h2 className="text-3xl font-bold text-center text-gray-800">Donate to Petshely</h2>
        <p className="text-lg text-center text-gray-500">Your contribution helps stray pets find a home!</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full p-3 rounded-md border-2 border-gray-300 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition duration-300"
            />
          </div>

          <div className="relative">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 rounded-md border-2 border-gray-300 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition duration-300"
            />
          </div>

          <div className="relative">
            <input
              type="number"
              placeholder="Amount"
              value={donation}
              onChange={(e) => setDonation(Number(e.target.value))}
              min="1"
              required
              className="w-full p-3 rounded-md border-2 border-gray-300 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition duration-300"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 focus:outline-none transition duration-300"
          >
            Donate ₹{donation}
          </button>
          <p>Your 1rs saving life of a pet.</p>
        </form>

        {qrCode && (
          <div className="mt-6 text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Thank you for your donation!</h3>
            <p className="text-lg text-gray-500 mb-4">Scan this QR code for your donation.</p>
            <Image src="/images/Donate.jpg" width={200} height={200} alt="QR Code" className="mx-auto rounded-lg shadow-md" />
          </div>
        )}

        {certificate && (
          <div className="mt-6 text-center bg-green-100 p-4 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-800">Certificate of Donation</h3>
            <p className="text-lg text-gray-700 mt-2">{certificate}</p>
          </div>
        )}
      </div>
    </div>
  );
}
