/**
 * Central site configuration — contact details, registration, and assets.
 * Single source of truth used across Header, Footer, Contact, and Certifications.
 */

export const SITE = {
  name: 'A.M.A BISHI',
  tagline: 'Pure African Naturals',

  phone: {
    display: '+44 (0) 7730 039 6424',
    href: 'tel:+4477300396424',
  },

  emails: {
    enquiry: 'enquiry@amabishi.co.uk',
    info: 'info@amabishi.co.uk',
    sales: 'sales@amabishi.co.uk',
    support: 'support@amabishi.co.uk',
    contact: 'contact@amabishi.co.uk',
  },

  registration: {
    uk: { country: 'United Kingdom', number: '17377630' },
    nigeria: { country: 'Nigeria', number: '9687107' },
  },
} as const;

export interface Certificate {
  src: string;
  title: string;
  description: string;
  issuer: string;
}

export const CERTIFICATES: Certificate[] = [
  {
    src: '/docs/certificates/sesame-specification.jpg',
    title: 'Sesame Seed Physiochemical Specification',
    description:
      'Export-grade quality standards covering oil content, purity, moisture, and food safety parameters.',
    issuer: 'Agro Lab Kano',
  },
  {
    src: '/docs/certificates/sesame-certificate-of-analysis.jpg',
    title: 'Certificate of Analysis — Sesame Seeds',
    description:
      'Independent laboratory analysis confirming purity, moisture, oil content, and aflatoxin levels.',
    issuer: 'Famousa Lab',
  },
];
