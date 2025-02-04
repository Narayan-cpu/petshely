import { db } from '@/db/client';
import { pets } from '@/db/schema';
import { eq } from 'drizzle-orm';
import Image from 'next/image';

interface AdoptionPageProps {
  params: { id: string };
}

export default async function AdoptionPage({ params }: AdoptionPageProps) {
  const petId = parseInt(params.id, 10);
  if (isNaN(petId)) {
    return <div>Invalid pet ID</div>;
  }

  const pet = await db.select().from(pets).where(eq(pets.id, petId)).then((res) => res[0] || null);

  if (!pet) {
    return <div>Pet not found</div>;
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Adoption Details</h1>
      <div className="max-w-2xl mx-auto shadow-lg rounded-lg p-6">
        <div className="relative w-full h-96">
          {pet.imageUrl ? (
            <Image
              src={pet.imageUrl}
              alt={pet.name}
              layout="fill"
              objectFit="cover"
              className="rounded-t-lg"
            />
          ) : (
            <div className="w-full h-full bg-gray-200 rounded-t-lg"></div>
          )}
        </div>
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">{pet.name}</h2>
          <p className="text-gray-700 mb-4">{pet.description}</p>
          <p className="text-gray-700">Age: {pet.age}</p>
        </div>
      </div>
    </div>
  );
}
