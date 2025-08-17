'use server'
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (email: string, name: string, subject: string, message: string) => {
    await resend.emails.send({
        to: "wilsonprajnawira345@gmail.com",
        from: "0rcDev <onboarding@resend.dev>",
        subject: subject,
        html: `
        <p><strong>Nama: ${name}</strong></P>
        <p><strong>Email: ${email}</strong></P>
        <p><strong>Message: </strong>${message}</P>
        `
    })
}