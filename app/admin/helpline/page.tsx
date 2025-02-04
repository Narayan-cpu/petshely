'use client';

import { Input } from '@/components/ui/input';
import { useState, useEffect } from 'react';

export default function AdminHelplinePage() {
  const [place, setPlace] = useState('');
  const [helplineNumber, setHelplineNumber] = useState('');
  const [name, setName] = useState('');
  const [isHydrated, setIsHydrated] = useState(false); // Prevent hydration mismatch

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch('/api/helpline', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ place, helplineNumber, name }),
    });

    if (response.ok) {
      alert('Helpline number added successfully!');
      setPlace('');
      setHelplineNumber('');
      setName('');
    } else {
      alert('Failed to add helpline number.');
    }
  };

  if (!isHydrated) return null; // Prevent hydration error by delaying rendering

  return (
    <div>
      <h1>Add Helpline Number</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Place:</label>
          <Input
            type="text"
            value={place}
            onChange={(e) => setPlace(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Helpline Number:</label>
          <Input
            type="text"
            value={helplineNumber}
            onChange={(e) => setHelplineNumber(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Number</button>
      </form>
    </div>
  );
}
