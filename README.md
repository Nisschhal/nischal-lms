## Dependencies

- Install pnpm if you don't have it, based on your OS, [https://pnpm.io/installation](https://pnpm.io/installation)

- Use pnpm to create next project `pnpm create next-app@latest project-name` , [https://nextjs.org/docs/app/getting-started/installation](https://nextjs.org/docs/app/getting-started/installation)

- Install shadcn ui, [https://ui.shadcn.com/](https://ui.shadcn.com/)
  - `pnpm dlx shadcn@latest init`
- Add all shadcn compnents for ease of use, `pnpm dlx shadcn@latest add --all`

- Install next-theme for dark mode, [https://ui.shadcn.com/docs/dark-mode/next](https://ui.shadcn.com/docs/dark-mode/next)
  - `pnpm add next-themes`
  - `add components/theme-provider.tsx` as shown in the instructions

## Better Auth Implementation

- Install and Setup Better Auth for secure login, [https://www.better-auth.com/docs/installation](https://www.better-auth.com/docs/installation)
  - `pnpm add better-auth`

# nischal-lms

## Database Prisma Setup

- Install Prisma, [https://www.prisma.io/docs/guides/embed-studio-nextjs](https://www.prisma.io/docs/guides/embed-studio-nextjs)
  OR
  - `pnpm i @prisma/client`
  - `pnpm i -D prisma`
  - `pnpm dlx prisma init`

## Better Auth Setup with Github

- Follow the instructions [https://www.better-auth.com/docs/installation](https://www.better-auth.com/docs/installation)

  - `pnpm add better-auth`
  - Add `BETTER_AUTH_SECRET=random_string` and `BETTER_AUTH_URL=http://localhost:3000 #Base URL of your app` to `.env`
  - create `auth.ts` in `app/lib/auth.ts` and copy the code from the instructions
  - Configure `auth.ts` as shown in the instructions for postgres and github

  # neon is used for postgres and github is used for social providers

  - once the db is configured run `npx @better-auth/cli generate` && `npx @better-auth/cli migrate`

- Add `GITHUB_CLIENT_ID` and `GITHUB_CLIENT_SECRET` to `.env`

## T3 Env setup

- Follow the instructions [https://env.t3.gg/docs/nextjs](https://env.t3.gg/docs/nextjs)
  - run `pnpm add @t3-oss/env-nextjs zod`
