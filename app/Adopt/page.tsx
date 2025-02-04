// app/adopt/page.tsx
import { db } from '@/db/client';
import { pets } from '@/db/schema';
import Image from 'next/image';
import Link from 'next/link';

export default async function AdoptPage() {
  const allPets = await db.select().from(pets);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Adopt a Pet</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {allPets.map((pet) => (
          <div
            key={pet.id}
            className="p-6 shadow-lg rounded-lg hover:shadow-[0_0_20px_5px_rgba(128,0,255,0.5)] transition-all duration-300 transform hover:scale-105"
          >
            <div className="relative w-full h-64">
              {pet.imageUrl ? (
                <Image
                  src={pet.imageUrl}
                  alt={pet.name}
                  width={300} // Fixed width
                  height={200} // Fixed height
                  className="object-cover rounded-t-lg"
                />
              ) : (
                <div className="w-full h-full bg-gray-200 flex items-center justify-center rounded-t-lg">
                  <span className="text-gray-500">No Image Available</span>
                </div>
              )}
            </div>
            <div className="mt-4">
              <h2 className="text-xl font-bold">{pet.name}</h2>
              <p className="text-gray-600">{pet.type}</p>
              <p className="mt-2 text-sm text-gray-700">{pet.description}</p>
            </div>
            <div className="mt-6 text-center">
              <Link
                href={`/adoption/${pet.id}`}
                className="bg-purple-600  px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors duration-300"
              >
                Adopt Now
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}