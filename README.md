# A.M-Bishi

Official website for **A.M.A BISHI** — Pure African Naturals. Premium quality ingredients sourced from Africa, registered in Nigeria and the United Kingdom.

## Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Contact form email

The contact form sends enquiries through the Vercel serverless function in `api/contact.ts`
using Resend. Verify `amabishi.co.uk` in Resend, then configure `RESEND_API_KEY` as an
environment variable in the Vercel project settings. Never add the API key to the frontend or
commit it. For local development, use `vercel dev` with this variable configured locally.

The function sends enquiries to `enquiry@amabishi.co.uk` from
`website@amabishi.co.uk`; replies go to the visitor's email address.

## Project structure

- `src/components/` — Page sections (Hero, About, Products, Certifications, Reviews, Contact, Footer)
- `src/constants/site.ts` — Contact details, registration numbers, and certificate paths
- `public/images/` — Product photography
- `public/docs/certificates/` — Quality certificates and lab analysis documents
