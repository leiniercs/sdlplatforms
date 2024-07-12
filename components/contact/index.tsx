"use client";
import { useTranslations } from "next-intl";
import { useCallback, useMemo, useState } from "react";
import { Button, Input, Spinner, Textarea } from "@nextui-org/react";
import { motion } from "framer-motion";
import { Poppins } from "next/font/google";
import { sendMessage } from "@/components/contact/sendmessage";
import { contact } from "@/components/common/contact";
import { FaSkullCrossbones, FaEnvelopeCircleCheck } from "react-icons/fa6";

const titleFont = Poppins({ subsets: ["latin"], weight: "700" });

export default function Contact() {
	const tContact = useTranslations("contact");
	const tHeader = useTranslations("header");
	const [name, setName] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [message, setMessage] = useState<string>("");
	const [isSendingMessage, setIsSendingMessage] = useState<boolean>(false);
	const [iconSubmissionReport, setIconSubmissionReport] =
		useState<JSX.Element>(<></>);
	const [submissionReportStyle, setSubmissionReportStyle] =
		useState<string>("");
	const [submissionReport, setSubmissionReport] = useState<string>("");
	let isSendButtonDisabled = useMemo<boolean>(
		() =>
			name.trim().length === 0 ||
			email.trim().length === 0 ||
			message.trim().length === 0 ||
			isSendingMessage === true,
		[name, email, message, isSendingMessage]
	);
	const motionFadeFromBellow = {
		initial: {
			y: "25%",
			opacity: 0
		},
		animate: {
			y: 0,
			opacity: 1,
			transition: { duration: 0.2, staggerChildren: 0.3 }
		}
	};

	const sendContactMessage = useCallback(async () => {
		try {
			await sendMessage(name, email, message);

			setIconSubmissionReport(
				<FaEnvelopeCircleCheck className="text-success" />
			);
			setSubmissionReportStyle("text-success");
			setSubmissionReport(tContact("messagesent"));
		} catch (e) {
			setSubmissionReportStyle("text-danger");
			setIconSubmissionReport(<FaSkullCrossbones className="text-danger" />);
			setSubmissionReport(tContact("errorsendingmessage"));
		} finally {
			setIsSendingMessage(false);
		}
	}, [name, email, message]);

	return (
		<section
			id="contact"
			className="relative flex flex-col items-center py-28 px-10 bg-slate-800"
		>
			<div className="w-full flex flex-col gap-16 items-center max-w-screen-lg">
				<motion.h1
					className={`text-2xl lg:text-4xl uppercase ${titleFont.className}`}
					variants={motionFadeFromBellow}
					initial="initial"
					whileInView="animate"
				>
					{tHeader("menuitems.contact")}
				</motion.h1>

				<div className="w-full flex flex-row flex-wrap">
					<div className="flex flex-col gap-4 w-full lg:max-w-[50%]">
						<h1
							className={`mb-4 text-lg lg:text-2xl uppercase ${titleFont.className}`}
						>
							{tContact("address")}
						</h1>
						<div className="flex flex-col gap-1">
							<span>{contact.address}</span>
							<span>
								P.O. Box {contact.pobox}, {contact.emirate},{" "}
								{contact.country}.
							</span>
						</div>
						<iframe
							className="w-full min-h-80 mt-4"
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.509718887014!2d55.374976276128315!3d25.118452634884243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f650004f24a1b%3A0xadcfb632edbf1318!2sSDL%20Platforms!5e0!3m2!1sen!2sae!4v1716308991586!5m2!1sen!2sae"
							allowFullScreen
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
						></iframe>
					</div>
					<form className="flex flex-col flex-wrap gap-4 w-full pt-16 lg:max-w-[50%] lg:pt-0 lg:pl-10">
						<h1
							className={`mb-4 text-lg lg:text-2xl uppercase ${titleFont.className}`}
						>
							{tContact("sendusmessage")}
						</h1>
						<Input
							isRequired
							isClearable
							type="name"
							autoComplete="name"
							maxLength={256}
							label={tContact("name.title")}
							placeholder={tContact("name.placeholder")}
							variant="faded"
							value={name}
							onValueChange={setName}
						/>
						<Input
							isRequired
							isClearable
							type="email"
							autoComplete="email"
							maxLength={128}
							label={tContact("email.title")}
							placeholder={tContact("email.placeholder")}
							variant="faded"
							value={email}
							onValueChange={setEmail}
						/>
						<Textarea
							isRequired
							isMultiline
							minRows={8}
							maxRows={8}
							maxLength={4096}
							label={tContact("message.title")}
							placeholder={tContact("message.placeholder")}
							variant="faded"
							value={message}
							onValueChange={setMessage}
						/>
						<div className="flex justify-between">
							<div className="flex flex-nowrap gap-3 items-center text-sm">
								{submissionReport.length > 0 && (
									<>
										{iconSubmissionReport}
										<span className={submissionReportStyle}>
											{submissionReport}
										</span>
									</>
								)}
							</div>
							<Button
								isDisabled={isSendButtonDisabled}
								type="submit"
								color="primary"
								size="lg"
								onPress={() => {
									setSubmissionReportStyle("");
									setIconSubmissionReport(<Spinner size="sm" />);
									setSubmissionReport(tContact("sendingmessage"));
									setIsSendingMessage(true);
									sendContactMessage();
								}}
							>
								{tContact("send")}
							</Button>
						</div>
					</form>
				</div>
			</div>
		</section>
	);
}
