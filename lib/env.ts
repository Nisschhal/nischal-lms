import { createEnv } from "@t3-oss/env-nextjs"
import { z } from "zod"

export const env = createEnv({
  server: {
    DATABASE_URL: z.string().url(), // Database URL for Prisma
    AUTH_GITHUB_CLIENT_ID: z.string().min(1),
    AUTH_GITHUB_CLIENT_SECRET: z.string().min(1), // GitHub client ID and secret for GitHub authentication
    BETTER_AUTH_SECRET: z.string().min(1), // Better Auth secret for authentication
    BETTER_AUTH_URL: z.string().url(), // Better Auth base URL for authentication
    RESEND_API_KEY: z.string().min(1), // Resend API key for email sending
    ARCJET_API_KEY: z.string().min(1), // Arcjet API key for Web Security: rate limiting, spam & bot protection, and fraud detection
  },
  experimental__runtimeEnv: {},
})
