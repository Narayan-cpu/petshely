import { NextRequest, NextResponse } from 'next/server'; // Use NextRequest and NextResponse
import { db1 } from '../../../db/client'; // Your DB connection
import { donations } from '../../../db/schema'; // Donation schema from Drizzle
import { DonationInsert } from '../../../db/schema'; // Interface for the donation data

// Handle POST requests
export async function POST(req: NextRequest) {
  try {
    // Parse the request body as JSON
    const { name, email, amount }: DonationInsert = await req.json();

    // Check if the necessary fields are provided
    if (!name || !email || !amount) {
      return NextResponse.json({ error: 'Missing required fields: name, email, amount' }, { status: 400 });
    }

    // Insert the donation data into the Neon DB and capture the returned result
    const newDonation = await db1
      .insert(donations)
      .values({
        name,
        email,
        amount,
      })
      .returning(); // Returning the inserted record

    console.log('Inserted Donation:', newDonation); // Log the result for debugging

    // Check if the result of the insertion is as expected
    if (!newDonation || newDonation.length === 0) {
      return NextResponse.json({ error: 'Failed to insert donation into the database' }, { status: 500 });
    }

    // Generate the QR code URL (using a free QR code API)
    const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(
      `Donation by ${name} of ₹${amount}`
    )}`;

    // Generate a simple certificate text
    const certificateText = `This certifies that ${name} has donated ₹${amount}. Thank you for your support!`;

    // Respond with QR code URL and certificate text
    return NextResponse.json({ qrCode: qrCodeUrl, certificate: certificateText });
  } catch (error) {
    console.error('Error saving donation:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
