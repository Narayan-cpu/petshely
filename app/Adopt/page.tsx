import { db } from "@/db/client";
import { pets } from "@/db/schema";

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
            <div className="mt-4">
              <h2 className="text-xl font-bold">{pet.name}</h2>
              <p className="text-gray-600">{pet.type}</p>
              <p className="mt-2 text-sm text-gray-700">{pet.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
