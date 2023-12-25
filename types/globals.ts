
import * as z from 'zod';

export const formSchema = z.object({
  fullName: z.string(),
  email: z.string().email(),
  username: z
    .string()
    .min(9)
    .max(20, 'Username must be between 9 and 20 characters'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  goal: z.string(),
  interest: z.enum([
    'recycling',
    'renewableEnergy',
    'sustainableLiving',
    'plasticFreeLiving',
    'zeroKitchenWaste',
  ]),
  avatar: z.string(),
});

export interface SignupFormData {
  fullName: string;
  email: string;
  username: string;
  password: string;
  goal: string;
  interest: string;
  avatar: string;
}


export interface LoginFormData {
  email: string;
  password: string;
}
