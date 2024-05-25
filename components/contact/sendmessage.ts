"use server";
import nodemailer from "nodemailer";

export async function sendMessage(
	name: string,
	email: string,
	message: string
) {
	try {
		const nm = nodemailer.createTransport({
			host: process.env.SMTP_HOST || "",
			secure: false,
			requireTLS: true,
			auth: {
				user: process.env.SMTP_FROM || "",
				pass: process.env.SMTP_PASSWORD || ""
			}
		});

		await nm.sendMail({
			replyTo: `${name} <${email}>`,
			from: process.env.SMTP_FROM || "",
			to: process.env.SMTP_FROM || "",
			subject: `[SDL PLATFORMS] Message from ${name}`,
			text: message
		});
	} catch (e) {
		throw e;
	}
}
