import { NextResponse } from 'next/server';
import  db  from '../../../lib/db'; // Your Supabase/Firebase/Prisma client
import { appointmentSchema } from '../../../lib/validators';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    // 1. Validate the data (Zod)
    const validatedData = appointmentSchema.parse(body);

    // 2. Save to Database
    const appointment = await db.appointment.create({
      data: validatedData,
    });

    // 3. Return Success (The frontend will handle the WhatsApp redirect)
    return NextResponse.json({ success: true, id: appointment.id });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to book appointment' }, { status: 400 });
  }
}