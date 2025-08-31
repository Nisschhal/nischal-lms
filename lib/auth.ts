import { betterAuth } from "better-auth"
import { emailOTP } from "better-auth/plugins"
import { Resend } from "resend"

import { prismaAdapter } from "better-auth/adapters/prisma"
import { prisma } from "./db"
import { env } from "./env"
import resend from "./resend"
// If your Prisma file is located elsewhere, you can change the path

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql", // or "mysql", "postgresql", ...etc
  }),
  socialProviders: {
    github: {
      clientId: env.AUTH_GITHUB_CLIENT_ID,
      clientSecret: env.AUTH_GITHUB_CLIENT_SECRET,
    },
  },
  plugins: [
    emailOTP({
      async sendVerificationOTP({ email, otp, type }) {
        await resend.emails.send({
          from: "NischaLMS. <onboarding@resend.dev>",
          to: [email],
          subject: "NischaLMS - Verify your email",
          // react: EmailTemplate({ firstName: "John" }),
          html: `
            <div>
              <p>your OTP is  <strong>${otp}</strong></p>
            </div>
          `,
        })
      },
    }),
  ],
})
