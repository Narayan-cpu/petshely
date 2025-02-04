import { db } from '@/db/client'; // Import your database client
import { blogs } from '@/db/schema'; // Import your blog schema
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const formData = await request.json();
    const { title, content } = formData; // Extract title and content from the request body
    
    // Insert the blog into the database (without date/time fields)
    await db.insert(blogs).values({ title, content });

    return NextResponse.json({ message: 'Blog added successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Error adding blog:', error);
    return NextResponse.json({ error: 'Failed to add blog' }, { status: 500 });
  }
}



export async function GET() {
  try {
    const allBlogs = await db.select().from(blogs); // Select all blogs
    return NextResponse.json(allBlogs, { status: 200 });
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return NextResponse.json({ error: 'Failed to fetch blogs' }, { status: 500 });
  }
}
