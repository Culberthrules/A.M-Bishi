interface ContactPayload {
  name: string;
  email: string;
  phone: string;
  product: string;
  message: string;
}

const jsonResponse = (body: { error?: string; success?: boolean }, status: number) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === 'object' && value !== null && !Array.isArray(value);

const readField = (value: unknown, maxLength: number): string | undefined =>
  typeof value === 'string' && value.trim().length > 0 && value.length <= maxLength
    ? value.trim()
    : undefined;

export default async function handler(request: Request): Promise<Response> {
  if (request.method !== 'POST') {
    return jsonResponse({ error: 'Method not allowed.' }, 405);
  }

  if (!request.headers.get('content-type')?.includes('application/json')) {
    return jsonResponse({ error: 'Expected a JSON request.' }, 415);
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return jsonResponse({ error: 'Invalid request body.' }, 400);
  }

  if (!isRecord(body)) {
    return jsonResponse({ error: 'Invalid request body.' }, 400);
  }

  const payload: ContactPayload | undefined = (() => {
    const name = readField(body.name, 120);
    const email = readField(body.email, 254);
    const phone = typeof body.phone === 'string' ? body.phone.trim() : '';
    const product = readField(body.product, 100);
    const message = readField(body.message, 5000);

    if (
      !name ||
      !email ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
      phone.length > 40 ||
      !product ||
      !message ||
      message.length < 10
    ) {
      return undefined;
    }

    return { name, email, phone, product, message };
  })();

  if (!payload) {
    return jsonResponse({ error: 'Please check the enquiry details and try again.' }, 400);
  }

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.error('Resend API key is missing.');
    return jsonResponse({ error: 'Email delivery is not configured right now.' }, 503);
  }

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'AMA BISHI Website <website@amabishi.co.uk>',
        to: ['enquiry@amabishi.co.uk'],
        reply_to: payload.email,
        subject: 'Website contact form enquiry',
        text: [
          `Name: ${payload.name}`,
          `Email: ${payload.email}`,
          `Phone: ${payload.phone || 'Not provided'}`,
          `Product of interest: ${payload.product}`,
          '',
          'Message:',
          payload.message,
        ].join('\n'),
      }),
      signal: AbortSignal.timeout(15000),
    });

    if (!response.ok) {
      const details = await response.text();
      console.error('Resend email request failed:', response.status, details);
      return jsonResponse(
        { error: 'We could not send your enquiry. Please try again or email enquiry@amabishi.co.uk.' },
        502
      );
    }
  } catch (error) {
    console.error(
      'Contact email delivery failed:',
      error instanceof Error ? error.message : 'Unknown Resend API error'
    );
    return jsonResponse(
      { error: 'We could not send your enquiry. Please try again or email enquiry@amabishi.co.uk.' },
      502
    );
  }

  return jsonResponse({ success: true }, 200);
}
