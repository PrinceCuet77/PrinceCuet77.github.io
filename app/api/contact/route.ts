import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Basic validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 },
      );
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 },
      );
    }

    // Character count validation (max 5000 chars)
    if (message.length > 5000) {
      return NextResponse.json(
        { error: 'Message exceeds 5000 characters limit' },
        { status: 400 },
      );
    }

    // Send email using Web3Forms (free, no SMTP setup needed)
    const web3formsResponse = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        access_key: process.env.WEB3FORMS_ACCESS_KEY,
        from_name: name,
        reply_to: email,
        subject: `Portfolio Contact: ${subject}`,
        message: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
      }),
    });

    const result = await web3formsResponse.json();
    if (!result.success) {
      return NextResponse.json(
        { error: 'Failed to send message. Please try again.' },
        { status: 500 },
      );
    }

    return NextResponse.json(
      { message: 'Message sent successfully' },
      { status: 200 },
    );
  } catch {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 },
    );
  }
}
