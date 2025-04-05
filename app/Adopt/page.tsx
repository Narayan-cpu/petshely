'use client';

import { useState, useEffect } from 'react';
import PetList from '@/components/PetList'; // Component to display pets

const PetPage = () => {
  interface Pet {
    id: number;
    name: string;
    type: string;
    description: string;
  }

  const [pets, setPets] = useState<Pet[]>([]);

  const fetchPets = async () => {
    try {
      const res = await fetch('/api/pets');
      if (res.ok) {
        const data = await res.json();
        setPets(data);
      } else {
        console.error('Failed to fetch pets');
      }
    } catch (err) {
      console.error('Error fetching pets:', err);
    }
  };

  useEffect(() => {
    fetchPets();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Available Pets</h1>
      <PetList pets={pets} />
    </div>
  );
};

export default PetPage;
