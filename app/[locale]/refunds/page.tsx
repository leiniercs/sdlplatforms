import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { Poppins } from "next/font/google";

type CustomPageProps = {
	params: { locale: string };
};

const titleFont = Poppins({ subsets: ["latin"], weight: "700" });

export default async function Refunds({ params: { locale } }: CustomPageProps) {
	unstable_setRequestLocale(locale);
	const tRefunds = await getTranslations("refunds");
	const refunds: { [key: string]: JSX.Element } = {
		en: (
			<>
				<p>
					We have a 7-day return policy, which means you have 7 days after
					paying for any product to request a return.
				</p>
				<p>
					To be eligible for a return, your just need to provide us with
					the digital receipt send by email of your purchase within 7 days
					after the payment. To start a return, you can contact us at{" "}
					<a href="mailto:contact@sdlplatforms.com">
						contact@sdlplatforms.com
					</a>
					. Please note that you will need to attach the digital receipt of
					your purchase in the email. If your return is accepted, we’ll
					transfer the 100% of amount of your purchase to the credit/debit
					card you used when made the purchase.
				</p>
				<p>
					You can always contact us for any return question at{" "}
					<a href="mailto:contact@sdlplatforms.com">
						contact@sdlplatforms.com
					</a>
					.
				</p>
				<p className="mt-3 font-semibold uppercase">
					Exceptions / non-returnable items
				</p>
				<p>
					If you request a refund after 7 days after the purchase of your
					product then it will not be refunded. Please get in touch if you
					have questions or concerns about your specific item.
				</p>
				<p className="mt-3 font-semibold uppercase">Refunds</p>
				<p>
					We will notify you once we’ve received your refund request. If
					approved, you’ll be automatically refunded on your original
					payment method within 7 business days. Please remember it can
					take some time for your bank or credit card company to process
					and post the refund too.
				</p>
				<p>
					If more than 15 business days have passed since we’ve approved
					your return, please contact us at{" "}
					<a href="mailto:contact@sdlplatforms.com">
						contact@sdlplatforms.com
					</a>
					.
				</p>
			</>
		),
		es: (
			<>
				<p>
					Tenemos una política de devolución de 7 días, lo que significa
					que tienes 7 días después de pagar por cualquier producto para
					solicitar una devolución.
				</p>
				<p>
					Para ser elegible para una devolución, solo necesitas
					proporcionarnos el recibo digital que te enviamos por correo
					electrónico de tu compra dentro de los 7 días posteriores al
					pago. Para iniciar una devolución, puedes contactarnos a{" "}
					<a href="mailto:contact@sdlplatforms.com">
						contact@sdlplatforms.com
					</a>
					. Por favor, ten en cuenta que deberás adjuntar el recibo digital
					de tu compra en el correo electrónico. Si tu devolución es
					aceptada, te transferiremos el 100% del monto de tu compra a la
					tarjeta de crédito/débito que usaste para realizar la compra.
				</p>
				<p>
					Siempre puedes contactarnos para cualquier pregunta sobre
					devoluciones a{" "}
					<a href="mailto:contact@sdlplatforms.com">
						contact@sdlplatforms.com
					</a>
					.
				</p>
				<p className="mt-3 font-semibold uppercase">
					Excepciones / Artículos no retornables
				</p>
				<p>
					Si solicitas un reembolso después de 7 días de la compra de tu
					producto, no se te reembolsará. Por favor, ponte en contacto con
					nosotros si tienes preguntas o dudas sobre tu artículo
					específico.
				</p>
				<p className="mt-3 font-semibold uppercase">Reembolsos</p>
				<p>
					Te notificaremos una vez que hayamos recibido tu solicitud de
					reembolso. Si se aprueba, se te reembolsará automáticamente en tu
					método de pago original dentro de los 7 días hábiles. Por favor,
					recuerda que tu banco o compañía de tarjeta de crédito también
					puede tardar un tiempo en procesar y publicar el reembolso.
				</p>
				<p>
					Si han pasado más de 15 días hábiles desde que aprobamos tu
					devolución, contáctanos a{" "}
					<a href="mailto:contact@sdlplatforms.com">
						contact@sdlplatforms.com
					</a>
					.
				</p>
			</>
		)
	};

	return (
		<main>
			<section
				id="terms"
				className="relative flex flex-col items-center py-20 px-10"
			>
				<div className="flex flex-col gap-3 w-full max-w-screen-lg">
					<h1
						className={`mb-3 text-2xl lg:text-4xl uppercase ${titleFont.className}`}
					>
						{tRefunds("title")}
					</h1>
					{refunds[locale]}
				</div>
			</section>
		</main>
	);
}
