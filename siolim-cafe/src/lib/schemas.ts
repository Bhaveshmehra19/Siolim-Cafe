import { z } from "zod";
const email = z.string().trim().email("Enter a valid email address.").max(254);
const name = z.string().trim().min(2, "Please enter at least 2 characters.").max(80);
export const reservationSchema = z.object({ name, email, phone: z.string().trim().min(7, "Enter a valid phone number.").max(20).regex(/^[+()0-9 .-]+$/, "Enter a valid phone number."), guests: z.coerce.number().int().min(1).max(20), date: z.string().min(1, "Choose a date."), time: z.string().min(1, "Choose a time."), message: z.string().trim().max(500).optional().default("") });
export const contactSchema = z.object({ name, email, subject: z.string().trim().min(3, "Please add a subject.").max(120), message: z.string().trim().min(10, "Please write at least 10 characters.").max(2000) });
export type ReservationInput = z.infer<typeof reservationSchema>;
export type ContactInput = z.infer<typeof contactSchema>;
