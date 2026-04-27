# 2nd Chance Website

> Everyone deserves it.

Built with Next.js 14, Tailwind CSS, and Sanity CMS.

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Set up environment variables

```bash
cp .env.local.example .env.local
```

Fill in the values in `.env.local`:

| Variable | Where to get it |
|----------|----------------|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | [sanity.io](https://sanity.io) → New Project |
| `NEXT_PUBLIC_SANITY_DATASET` | Leave as `production` |
| `SANITY_API_TOKEN` | Sanity dashboard → API → Tokens |
| `RESEND_API_KEY` | [resend.com](https://resend.com) → API Keys |
| `CONTACT_EMAIL` | Your email address |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | [stripe.com](https://stripe.com) → Developers → API keys |
| `STRIPE_SECRET_KEY` | Stripe dashboard → Developers → API keys |

### 3. Add the logo

Place your logo file as `public/logo.png`.

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### 5. Access the CMS

Go to [http://localhost:3000/studio](http://localhost:3000/studio) to add blog posts, events and team members.

---

## Deploying to Vercel (Free)

1. Push the project to GitHub
2. Go to [vercel.com](https://vercel.com) → Import Project → select your repo
3. Add all environment variables from `.env.local` in Vercel's dashboard
4. Click Deploy

That's it — Vercel auto-deploys every time you push to `main`.

## Pages

| Path | Description |
|------|-------------|
| `/` | Homepage |
| `/about` | About, mission, team |
| `/events` | Upcoming events |
| `/blog` | News and blog posts |
| `/volunteer` | Volunteer application form |
| `/contact` | Contact form |
| `/donate` | Donation page |
| `/studio` | Sanity CMS (password protected in production) |
