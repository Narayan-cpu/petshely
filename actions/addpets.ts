'use server';

import { db } from '@/db/client';
import { pets } from '@/db/schema';

export async function addPet(name: string, type: string, description: string) {
  try {
    await db.insert(pets).values({ name, type, description });
    return { success: true, message: 'Pet added successfully!' };
  } catch {
    return { success: false, message: 'Failed to add pet.' };
  }
}
