// app/api/add-pet/route.ts
import { db } from '@/db/client';
import { pets } from '@/db/schema';
import { NextResponse } from 'next/server';
import { writeFile } from 'fs/promises';
import path from 'path';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const name = formData.get('name') as string;
    const type = formData.get('type') as string;
    const description = formData.get('description') as string;
    const imageFile = formData.get('image') as File;
   

    // Handle image upload
    let imageUrl = '';
    if (imageFile) {
      const bytes = await imageFile.arrayBuffer();
      const buffer = Buffer.from(bytes);

      // Save the file to the public directory
      const filePath = path.join(process.cwd(), 'public', 'uploads', imageFile.name);
      await writeFile(filePath, buffer);

      // Generate the URL for the uploaded image
      imageUrl = `/uploads/${imageFile.name}`;
    }

    // Insert the pet into the database
    await db.insert(pets).values({ name, type, description, imageUrl,addedByEmail:'naiknarayan557@gmail.com' });

    return NextResponse.json({ message: 'Pet added successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Error adding pet:', error);
    return NextResponse.json({ error: 'Failed to add pet' }, { status: 500 });
  }
}