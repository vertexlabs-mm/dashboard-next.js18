import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
import { User } from './app/lib/definitions';
import { sql } from '@vercel/postgres';
import bcrypt from 'bcrypt';

async function getUser(email: string): Promise<User | undefined> {
  try {
    const user = await sql<User>`SELECT * FROM users WHERE email = ${email}`;
    return user.rows[0];
  } catch (error) {
    console.error('Error getting user:', error);
    throw new Error('Error getting user');
  }
}

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig, // passing in authConfig (spread into a new object) as its configuration
  providers: [
    credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);

        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;
          const user = await getUser(email);
          if (!user) return null;
          const passwordMatches = await bcrypt.compare(password, user.password);

          if (passwordMatches) return user;
        }

        console.error('Invalid credentials:', parsedCredentials.error);
        return null;
      },
    }),
  ],
});
