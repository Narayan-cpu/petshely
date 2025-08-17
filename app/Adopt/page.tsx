export default async function AdoptPage() {
  const allPets = await db.select().from(pets);
  console.log("ALL PETS:", allPets); // check server logs

  if (allPets.length === 0) {
    return <p className="p-8 text-center text-red-500">No pets found in DB</p>;
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Adopt a Pet</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {allPets.map((pet) => (
          <div key={pet.id} className="p-6 shadow-lg rounded-lg">
            <h2 className="text-xl font-bold">{pet.name}</h2>
            <p className="text-gray-600">{pet.type}</p>
            <p className="mt-2 text-sm text-gray-700">{pet.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
