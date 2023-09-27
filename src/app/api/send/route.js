import EmailTemplate from '../../../components/EmailTemplate';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const emailFrom = process.env.EMAIL_FROM

export async function POST(req) {
    const info = await req.json()
    try {
        const data = await resend.emails.send({
            from: `CONTACTO <${emailFrom}>`,
            to: ['seba.iron28@gmail.com'],
            subject: 'CONTACTO PORTAFOLIO WEB',
            react: EmailTemplate(info),
            text: "contacto por portafolio web"
        });

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error });
    }
}
