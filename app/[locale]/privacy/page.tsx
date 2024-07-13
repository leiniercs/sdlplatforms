import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { Poppins } from "next/font/google";
import { contact } from "@/components/common/contact";

type CustomPageProps = {
	params: { locale: string };
};

const titleFont = Poppins({ subsets: ["latin"], weight: "700" });

export default async function Privacy({ params: { locale } }: CustomPageProps) {
	unstable_setRequestLocale(locale);
	const tPrivacy = await getTranslations("privacy");
	const privacy: { [key: string]: JSX.Element } = {
		en: (
			<>
				<p>
					This Privacy Policy describes how {contact.company} (the
					&quot;Site&quot;, &quot;we&quot;, &quot;us&quot;, or
					&quot;our&quot;) collects, uses, and discloses your personal
					information when you visit, use our services, or make a purchase
					from sdlplatforms.com (the &quot;Site&quot;) or otherwise
					communicate with us (collectively, the &quot;Services&quot;). For
					purposes of this Privacy Policy, &quot;you&quot; and
					&quot;your&quot; means you as the user of the Services, whether
					you are a customer, website visitor, or another individual whose
					information we have collected pursuant to this Privacy Policy.
				</p>
				<p>
					Please read this Privacy Policy carefully. By using and accessing
					any of the Services, you agree to the collection, use, and
					disclosure of your information as described in this Privacy
					Policy. If you do not agree to this Privacy Policy, please do not
					use or access any of the Services.
				</p>
				<p className="mt-3 font-semibold uppercase">
					Changes to This Privacy Policy
				</p>
				<p>
					We may update this Privacy Policy from time to time, including to
					reflect changes to our practices or for other operational, legal,
					or regulatory reasons. We will post the revised Privacy Policy on
					the Site, update the &quot;Last updated&quot; date and take any
					other steps required by applicable law.
				</p>
				<p className="mt-3 font-semibold uppercase">
					How We Collect and Use Your Personal Information
				</p>
				<p>
					To provide the Services, we collect and have collected over the
					past 12 months personal information about you from a variety of
					sources, as set out below. The information that we collect and
					use varies depending on how you interact with us.
				</p>
				<p>
					In addition to the specific uses set out below, we may use
					information we collect about you to communicate with you, provide
					the Services, comply with any applicable legal obligations,
					enforce any applicable terms of service, and to protect or defend
					the Services, our rights, and the rights of our users or others.
				</p>
				<p className="mt-3 font-semibold uppercase">
					What Personal Information We Collect
				</p>
				<p>
					The types of personal information we obtain about you depends on
					how you interact with our Site and use our Services. When we use
					the term &quot;personal information&quot;, we are referring to
					information that identifies, relates to, describes or can be
					associated with you. The following sections describe the
					categories and specific types of personal information we collect.
				</p>
				<p className="mt-3 font-semibold uppercase">
					Information We Collect Directly from You
				</p>
				<p>
					Information that you directly submit to us through our Services
					may include:
				</p>
				<ul>
					<li>
						Basic contact details including your name, address, phone
						number, email.
					</li>
					<li>
						Order information including your name, billing address,
						payment confirmation, email address, phone number.
					</li>
					<li>
						Account information including your username, password,
						security questions.
					</li>
					<li>
						Shopping information including the items you view, put in your
						cart or add to your wishlist.
					</li>
					<li>
						Customer support information including the information you
						choose to include in communications with us, for example, when
						sending a message through the Services.
					</li>
				</ul>
				<p>
					Some features of the Services may require you to directly provide
					us with certain information about yourself. You may elect not to
					provide this information, but doing so may prevent you from using
					or accessing these features.
				</p>
				<p className="mt-3 font-semibold uppercase">
					Information We Collect through Cookies
				</p>
				<p>
					We also automatically collect certain information about your
					interaction with the Services (&quot;Usage Data&quot;). To do
					this, we may use cookies, pixels and similar technologies
					(&quot;Cookies&quot;). Usage Data may include information about
					how you access and use our Site and your account, including
					device information, browser information, information about your
					network connection, your IP address and other information
					regarding your interaction with the Services.
				</p>
				<p className="mt-3 font-semibold uppercase">
					Information We Obtain from Third Parties
				</p>
				<p>
					Finally, we may obtain information about you from third parties,
					including from vendors and service providers who may collect
					information on our behalf, such as:
				</p>
				<ul>
					<li>Companies who support our Site and Services.</li>
					<li>
						Our payment processors, who collect payment information (e.g.,
						bank account, credit or debit card information, billing
						address) to process your payment in order to fulfill your
						orders and provide you with products or services you have
						requested, in order to perform our contract with you.
					</li>
				</ul>
				<p>
					Any information we obtain from third parties will be treated in
					accordance with this Privacy Policy. We are not responsible or
					liable for the accuracy of the information provided to us by
					third parties and are not responsible for any third party&apos;s
					policies or practices. For more information, see the section
					below, Third Party Websites and Links.
				</p>
				<p className="mt-3 font-semibold uppercase">
					How We Use Your Personal Information
				</p>
				<p>
					<strong>Providing Products and Services.</strong> We use your
					personal information to provide you with the Services in order to
					perform our contract with you, including to process your
					payments, fulfill your orders, to send notifications to you
					related to you account, purchases, returns, exchanges or other
					transactions, to create, maintain and otherwise manage your
					account, to arrange for shipping, facilitate any returns and
					exchanges and to enable you to post reviews.
				</p>
				<p>
					<strong>Security and Fraud Prevention.</strong> We use your
					personal information to detect, investigate or take action
					regarding possible fraudulent, illegal or malicious activity. If
					you choose to use the Services and register an account, you are
					responsible for keeping your account credentials safe. We highly
					recommend that you do not share your username, password, or other
					access details with anyone else. If you believe your account has
					been compromised, please contact us immediately.
				</p>
				<p>
					<strong>Communicating with you.</strong> We use your personal
					information to provide you with customer support and improve our
					Services. This is in our legitimate interests in order to be
					responsive to you, to provide effective services to you, and to
					maintain our business relationship with you.
				</p>
				<p className="mt-3 font-semibold uppercase">Cookies</p>
				<p>
					Like many websites, we use Cookies on our Site. We use Cookies to
					power and improve our Site and our Services (including to
					remember your actions and preferences). We may also permit third
					parties and services providers to use Cookies on our Site to
					better tailor the services, products and advertising on our Site
					and other websites.
				</p>
				<p>
					Most browsers automatically accept Cookies by default, but you
					can choose to set your browser to remove or reject Cookies
					through your browser controls. Please keep in mind that removing
					or blocking Cookies can negatively impact your user experience
					and may cause some of the Services, including certain features
					and general functionality, to work incorrectly or no longer be
					available.
				</p>
				<p className="mt-3 font-semibold uppercase">
					How We Disclose Personal Information
				</p>
				<p>
					In certain circumstances, we may disclose your personal
					information to third parties for legitimate purposes subject to
					this Privacy Policy. Such circumstances may include:
				</p>
				<ul>
					<li>
						With vendors or other third parties who perform services on
						our behalf (e.g., IT management, payment processing, customer
						support, cloud storage and fulfillment).
					</li>
					<li>
						When you direct, request us or otherwise consent to our
						disclosure of certain information to third parties, such as to
						ship you products or through your use of social media widgets
						or login integrations, with your consent.
					</li>
					<li>
						With our affiliates or otherwise within our corporate group,
						in our legitimate interests to run a successful business.
					</li>
					<li>
						In connection with a business transaction such as a merger or
						bankruptcy, to comply with any applicable legal obligations
						(including to respond to subpoenas, search warrants and
						similar requests), to enforce any applicable terms of service,
						and to protect or defend the Services, our rights, and the
						rights of our users or others.
					</li>
				</ul>
				<p>
					We have, in the past 12 months disclosed the following categories
					of personal information and sensitive personal information
					(denoted by *) about users for the purposes set out above in
					&quot;How we Collect and Use your Personal Information&quot; and
					&quot;How we Disclose Personal Information&quot;:
				</p>
				<p>Category Categories of Recipients</p>
				<ul>
					<li>
						Identifiers such as basic contact details and certain order
						and account information
					</li>
					<li>
						Commercial information such as order information, shopping
						information and customer support information
					</li>
				</ul>
				<p>
					Vendors and third parties who perform services on our behalf
					(such as Internet service providers, payment processors,
					fulfillment partners, customer support partners)
				</p>
				<p>
					We do not use or disclose sensitive personal information for the
					purposes of inferring characteristics about you.
				</p>
				<p>
					The Services may enable you to post product reviews and other
					user-generated content. If you choose to submit user generated
					content to any public area of the Services, this content will be
					public and accessible by anyone.
				</p>
				<p>
					We do not control who will have access to the information that
					you choose to make available to others, and cannot ensure that
					parties who have access to such information will respect your
					privacy or keep it secure. We are not responsible for the privacy
					or security of any information that you make publicly available,
					or for the accuracy, use or misuse of any information that you
					disclose or receive from third parties.
				</p>
				<p className="mt-3 font-semibold uppercase">
					Third Party Websites and Links
				</p>
				<p>
					Our Site may provide links to websites or other online platforms
					operated by third parties. If you follow links to sites not
					affiliated or controlled by us, you should review their privacy
					and security policies and other terms and conditions. We do not
					guarantee and are not responsible for the privacy or security of
					such sites, including the accuracy, completeness, or reliability
					of information found on these sites. Information you provide on
					public or semi-public venues, including information you share on
					third-party social networking platforms may also be viewable by
					other users of the Services and/or users of those third-party
					platforms without limitation as to its use by us or by a third
					party. Our inclusion of such links does not, by itself, imply any
					endorsement of the content on such platforms or of their owners
					or operators, except as disclosed on the Services.
				</p>
				<p>Children’s Data</p>
				<p>
					The Services are not intended to be used by children, and we do
					not knowingly collect any personal information about children. If
					you are the parent or guardian of a child who has provided us
					with their personal information, you may contact us using the
					contact details set out below to request that it be deleted.
				</p>
				<p>
					As of the Effective Date of this Privacy Policy, we do not have
					actual knowledge that we “share” or “sell” (as those terms are
					defined in applicable law) personal information of individuals
					under 16 years of age.
				</p>
				<p className="mt-3 font-semibold uppercase">
					Security and Retention of Your Information
				</p>
				<p>
					Please be aware that no security measures are perfect or
					impenetrable, and we cannot guarantee “perfect security.” In
					addition, any information you send to us may not be secure while
					in transit. We recommend that you do not use unsecure channels to
					communicate sensitive or confidential information to us.
				</p>
				<p>
					How long we retain your personal information depends on different
					factors, such as whether we need the information to maintain your
					account, to provide the Services, comply with legal obligations,
					resolve disputes or enforce other applicable contracts and
					policies.
				</p>
				<p className="mt-3 font-semibold uppercase">
					Your Rights and Choices
				</p>
				<p>
					Depending on where you live, you may have some or all of the
					rights listed below in relation to your personal information.
					However, these rights are not absolute, may apply only in certain
					circumstances and, in certain cases, we may decline your request
					as permitted by law.
				</p>
				<ul>
					<li>
						<strong>Right to Access / Know.</strong> You may have a right
						to request access to personal information that we hold about
						you, including details relating to the ways in which we use
						and share your information.
					</li>
					<li>
						<strong>Right to Delete.</strong> You may have a right to
						request that we delete personal information we maintain about
						you.
					</li>
					<li>
						<strong>Right to Correct.</strong> You may have a right to
						request that we correct inaccurate personal information we
						maintain about you.
					</li>
					<li>
						<strong>Right of Portability.</strong> You may have a right to
						receive a copy of the personal information we hold about you
						and to request that we transfer it to a third party, in
						certain circumstances and with certain exceptions.
					</li>
				</ul>
				<p>
					You may exercise any of these rights where indicated on our Site
					or by contacting us using the contact details provided below.
				</p>
				<p>
					We will not discriminate against you for exercising any of these
					rights. We may need to collect information from you to verify
					your identity, such as your email address or account information,
					before providing a substantive response to the request. In
					accordance with applicable laws, You may designate an authorized
					agent to make requests on your behalf to exercise your rights.
					Before accepting such a request from an agent, we will require
					that the agent provide proof you have authorized them to act on
					your behalf, and we may need you to verify your identity directly
					with us. We will respond to your request in a timely manner as
					required under applicable law.
				</p>
				<p className="mt-3 font-semibold uppercase">Complaints</p>
				<p>
					If you have complaints about how we process your personal
					information, please contact us using the contact details provided
					below. If you are not satisfied with our response to your
					complaint, depending on where you live you may have the right to
					appeal our decision by contacting us using the contact details
					set out below, or lodge your complaint with your local data
					protection authority.
				</p>
				<p className="mt-3 font-semibold uppercase">International Users</p>
				<p>
					Please note that we may transfer, store and process your personal
					information outside the country you live in, including the United
					States. Your personal information is also processed by staff and
					third party service providers and partners in these countries.
				</p>
				<p>
					If we transfer your personal information out of Europe, we will
					rely on recognized transfer mechanisms like the European
					Commission&apos;s Standard Contractual Clauses, or any equivalent
					contracts issued by the relevant competent authority of the UK,
					as relevant, unless the data transfer is to a country that has
					been determined to provide an adequate level of protection.
				</p>
				<p className="mt-3 font-semibold uppercase">Contact</p>
				<p>
					Should you have any questions about our privacy practices or this
					Privacy Policy, or if you would like to exercise any of the
					rights available to you, please call {contact.phone} or email us
					at {contact.email} or contact us at {contact.address}, P.O. Box{" "}
					{contact.pobox}, {contact.emirate}, {contact.country}.
				</p>
			</>
		),
		es: <></>
	};

	return (
		<main>
			<section
				id="terms"
				className="relative flex flex-col items-center py-20 px-10"
			>
				<div className="flex flex-col gap-3 w-full max-w-screen-lg">
					<h1
						className={`text-2xl lg:text-4xl uppercase ${titleFont.className}`}
					>
						{tPrivacy("title")}
					</h1>
					{privacy[locale]}
				</div>
			</section>
		</main>
	);
}
