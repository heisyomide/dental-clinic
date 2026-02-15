import { z } from 'zod';

// 1. Export the prices so the Payment Page can find them
export const DENTAL_PRICES = {
  "General Checkup": 10000,
  "Dental Implants": 150000,
  "Orthodontics": 200000,
  "Oral Surgery": 50000,
} as const; // 'as const' makes this a fixed reference

export const appointmentSchema = z.object({
  name: z.string().min(3, "Name required"),
  phone: z.string().min(11, "Phone required"),
  age: z.string().min(1, "Age required"),
  gender: z.enum(['Male', 'Female', 'Other']),
  service: z.enum(["General Checkup", "Dental Implants", "Orthodontics", "Oral Surgery"]),
  medicalHistory: z.string().min(5, "History required"),
  date: z.string().min(1, "Date required"),
  time: z.string().min(1, "Time required"),
  // We make this optional here so it doesn't fight the form, 
  // but it will default to 'Pending' in the database.
  paymentStatus: z.enum(['Pending', 'Completed']).optional(),
});

export type AppointmentInput = z.infer<typeof appointmentSchema>;