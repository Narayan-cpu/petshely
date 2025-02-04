'use client';

import { useState, useEffect } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function HelplinePage() {
  const [place, setPlace] = useState('');
  const [numbers, setNumbers] = useState<{ name: string; helplineNumber: string }[]>([]);

  useEffect(() => {
    if (place) {
      fetch(`/api/helpline?place=${place}`)
        .then((res) => res.json())
        .then((data) => {
          console.log("API Response:", data);

          if (Array.isArray(data.numbers)) {
            setNumbers(data.numbers.map((item: { name: string; helplineNumber: string }) => ({
              name: item.name, // Extract the new "name" column
              helplineNumber: item.helplineNumber,
            })));
          } else {
            console.error("Unexpected API response:", data);
            setNumbers([]);
          }
        })
        .catch((error) => console.error("Fetch error:", error));
    } else {
      setNumbers([]);
    }
  }, [place]);

  return (
    <div className="min-h-screen  p-6">
      <div className="max-w-4xl mx-auto  p-8 rounded-lg shadow-xl animate__animated animate__fadeInUp">
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">Helpline Numbers</h1>
        
        <Select onValueChange={setPlace}>
          <SelectTrigger className="w-full max-w-md mx-auto 0 rounded-md shadow-md focus:ring-2 focus:ring-indigo-500 transition duration-300 ease-in-out">
            <SelectValue placeholder="Select a place" />
          </SelectTrigger>
          <SelectContent className=" rounded-md shadow-md p-2 mt-1">
            <SelectItem value="Banglore" className="hover:bg-indigo-100 p-2 rounded-md transition duration-200">Banglore</SelectItem>
            <SelectItem value="Delhi" className="hover:bg-indigo-100 p-2 rounded-md transition duration-200">Delhi</SelectItem>
            <SelectItem value="Hyderabad" className="hover:bg-indigo-100 p-2 rounded-md transition duration-200">Hyderabad</SelectItem>
            <SelectItem value="Pune" className="hover:bg-indigo-100 p-2 rounded-md transition duration-200">Pune</SelectItem>
            <SelectItem value="Mumbai" className="hover:bg-indigo-100 p-2 rounded-md transition duration-200">Mumbai</SelectItem>
            <SelectItem value="Chennai" className="hover:bg-indigo-100 p-2 rounded-md transition duration-200">Chennai</SelectItem>
          </SelectContent>
        </Select>

        <div className="mt-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Helpline Numbers for {place || '...'}
          </h2>
          {numbers.length > 0 ? (
            <ul className="space-y-4">
              {numbers.map((item, index) => (
                <li key={index} className="flex justify-between items-center p-4 bg-gray-50 rounded-md shadow-md hover:bg-indigo-50 transition duration-300 ease-in-out">
                  <span className="font-medium text-gray-700">{item.name}</span>
                  <span className="text-indigo-600">{item.helplineNumber}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-center text-gray-500 mt-4">No helpline numbers available.</p>
          )}
        </div>
      </div>
   </div>
  );
}
