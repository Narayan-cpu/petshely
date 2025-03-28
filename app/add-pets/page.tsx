"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function AddPetPage() {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const petData = {
      name,
      type,
      description,
    };

    try {
      const response = await fetch("/api/add-pet", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(petData),
      });

      if (response.ok) {
        alert("Pet added successfully!");
        setName("");
        setType("");
        setDescription("");
      } else {
        alert("Failed to add pet. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8 flex justify-center">
        Add a Pet for Adoption
      </h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Name</label>
          <Input
            placeholder="Enter Pet Name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border rounded-lg"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Type</label>
          <Input
            placeholder="Example : Dog (Breed)"
            type="text"
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full p-2 border rounded-lg"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Description</label>
          <Textarea
            placeholder="Enter Contact details and other information"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border rounded-lg"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600"
        >
          Add Pet
        </button>
      </form>
    </div>
  );
}
