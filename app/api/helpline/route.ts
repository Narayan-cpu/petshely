import { db2 } from '@/db/client';
import { helpline } from '@/db/schema';
import { eq } from 'drizzle-orm';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const place = searchParams.get('place');

  if (!place) {
    return NextResponse.json({ error: 'Place is required' }, { status: 400 });
  }

  // Fetch data including the new "name" column
  const numbers = await db2
    .select()
    .from(helpline)
    .where(eq(helpline.place, place));

  return NextResponse.json({ place, numbers }); // Ensure structure remains correct
}

export async function POST(request: Request) {
  const { place, helplineNumber, name } = await request.json();

  if (!place || !helplineNumber || !name) {
    return NextResponse.json(
      { error: 'Place, helpline number, and name are required' },
      { status: 400 }
    );
  }

  const newHelpline = await db2
    .insert(helpline)
    .values({ place, helplineNumber, name }) // Include the "name" column
    .returning();

  return NextResponse.json(newHelpline);
}
