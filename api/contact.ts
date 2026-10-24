declare const process: {
  env: Record<string, string | undefined>;
};

interface ContactRequest {
  method?: string;
  headers: Record<string, string | string[] | undefined>;
  body?: unknown;
}

interface ContactResponse {
  status(code: number): ContactResponse;
  json(body: unknown): ContactResponse;
}

interface ContactPayload {
  name: string;
  email: string;
  phone: string;
  product: string;
  message: string;
}

const jsonResponse = (
  response: ContactResponse,
  body: { error?: string; success?: boolean },
  status: number
) => response.status(status).json(body);

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === 'object' && value !== null && !Array.isArray(value);

const readField = (value: unknown, maxLength: number): string | undefined =>
  typeof value === 'string' && value.trim().length > 0 && value.length <= maxLength
    ? value.trim()
    : undefined;

export default async function handler(
  request: ContactRequest,
  response: ContactResponse
): Promise<void> {
  if (request.method !== 'POST') {
    jsonResponse(response, { error: 'Method not allowed.' }, 405);
    return;
  }

  const contentType = request.headers['content-type'];
  if (typeof contentType !== 'string' || !contentType.includes('application/json')) {
    jsonResponse(response, { error: 'Expected a JSON request.' }, 415);
    return;
  }

  if (!isRecord(request.body)) {
    jsonResponse(response, { error: 'Invalid request body.' }, 400);
    return;
  }

  const payload: ContactPayload | undefined = (() => {
    const name = readField(request.body.name, 120);
    const email = readField(request.body.email, 254);
    const phone = typeof request.body.phone === 'string' ? request.body.phone.trim() : '';
    const product = readField(request.body.product, 100);
    const message = readField(request.body.message, 5000);

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
    jsonResponse(response, { error: 'Please check the enquiry details and try again.' }, 400);
    return;
  }

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.error('Resend API key is missing.');
    jsonResponse(response, { error: 'Email delivery is not configured right now.' }, 503);
    return;
  }

  try {
    const resendResponse = await fetch('https://api.resend.com/emails', {
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

    if (!resendResponse.ok) {
      const details = await resendResponse.text();
      console.error('Resend email request failed:', resendResponse.status, details);
      jsonResponse(
        response,
        { error: 'We could not send your enquiry. Please try again or email enquiry@amabishi.co.uk.' },
        502
      );
      return;
    }
  } catch (error) {
    console.error(
      'Contact email delivery failed:',
      error instanceof Error ? error.message : 'Unknown Resend API error'
    );
    jsonResponse(
      response,
      { error: 'We could not send your enquiry. Please try again or email enquiry@amabishi.co.uk.' },
      502
    );
    return;
  }

  jsonResponse(response, { success: true }, 200);
}
