import { db } from '@/db/client';
import { pets } from '@/db/schema';
import { eq } from 'drizzle-orm';
import Image from 'next/image';

interface AdoptionPageProps {
  params: { id: string };
}

export default async function AdoptionPage({ params }: AdoptionPageProps) {
  const pet = await db.select().from(pets).where(eq(pets.id, Number(params.id)));

  if (!pet[0]) {
    return <div>Pet not found</div>;
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Adoption Details</h1>
      <div className="max-w-2xl mx-auto shadow-lg rounded-lg p-6">
        <div className="relative w-full h-96">
          {pet[0].imageUrl ? (
            <Image
              src={pet[0].imageUrl}
              alt={pet[0].name}
              width={600}
              height={400}
              className="object-cover rounded-t-lg"
            />
          ) : (
            <div className="w-full h-full bg-gray-200 flex items-center justify-center rounded-t-lg">
              <span className="text-gray-500">No Image Available</span>
            </div>
          )}
        </div>
        <div className="mt-6">
          <h2 className="text-2xl font-bold">{pet[0].name}</h2>
          <p className="text-gray-600">{pet[0].type}</p>
          <p className="mt-4 text-gray-700">{pet[0].description}</p>
        </div>
      </div>
    </div>
  );
}
