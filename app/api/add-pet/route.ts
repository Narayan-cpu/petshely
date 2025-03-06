import { db } from '@/db/client';
import { pets } from '@/db/schema';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, type, description } = body;

    // Insert the pet into the database
    await db.insert(pets).values({ name, type, description });

    return NextResponse.json({ message: 'Pet added successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Error adding pet:', error);
    return NextResponse.json({ error: 'Failed to add pet' }, { status: 500 });
  }
}