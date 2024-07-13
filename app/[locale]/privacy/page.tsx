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
					at {contact.email} or contact us at {contact.address}, P.O. Box
					{contact.pobox}, {contact.emirate}, {contact.country}.
				</p>
			</>
		),
		es: (
			<>
				<p>
					Esta Política de Privacidad describe cómo {contact.company}
					(el &quot;Sitio&quot;, &quot;nosotros&quot;, &quot;nos&quot; o
					&quot;nuestro&quot;) recopila, utiliza y divulga su información
					personal cuando visita, utiliza nuestros servicios o realiza una
					compra en sdlplatforms.com (el &quot;Sitio&quot;) o se comunica
					de otra manera con nosotros (colectivamente, los
					&quot;Servicios&quot;). Para los fines de esta Política de
					Privacidad, &quot;usted&quot; y &quot;sus&quot; significan usted
					como usuario de los Servicios, ya sea que sea un cliente,
					visitante del sitio web u otra persona cuya información hemos
					recopilado de acuerdo con esta Política de Privacidad.
				</p>
				<p>
					Por favor, lea esta Política de Privacidad cuidadosamente. Al
					utilizar y acceder a cualquiera de los Servicios, usted acepta la
					recopilación, uso y divulgación de su información según se
					describe en esta Política de Privacidad. Si no está de acuerdo
					con esta Política de Privacidad, por favor no utilice ni acceda a
					ninguno de los Servicios.
				</p>
				<p className="mt-3 font-semibold uppercase">
					Cambios a Esta Política de Privacidad
				</p>
				<p>
					Podemos actualizar esta Política de Privacidad de vez en cuando,
					incluyendo para reflejar cambios en nuestras prácticas u otras
					razones operativas, legales o regulatorias. Publicaremos la
					Política de Privacidad revisada en el Sitio, actualizaremos la
					fecha de &quot;Última actualización&quot; y tomaremos cualquier
					otra medida requerida por la ley aplicable.
				</p>
				<p className="mt-3 font-semibold uppercase">
					Cómo Recopilamos y Usamos su Información Personal
				</p>
				<p>
					Para proporcionar los Servicios, recopilamos y hemos recopilado
					en los últimos 12 meses información personal sobre usted de una
					variedad de fuentes, como se describe a continuación. La
					información que recopilamos y usamos varía dependiendo de cómo
					interactúe con nosotros.
				</p>
				<p>
					Además de los usos específicos establecidos a continuación,
					podemos utilizar la información que recopilamos sobre usted para
					comunicarnos con usted, proporcionar los Servicios, cumplir con
					cualquier obligación legal aplicable, hacer cumplir cualquier
					término de servicio aplicable y proteger o defender los
					Servicios, nuestros derechos y los derechos de nuestros usuarios
					u otros.
				</p>
				<p className="mt-3 font-semibold uppercase">
					Qué Información Personal Recopilamos
				</p>
				<p>
					Los tipos de información personal que obtenemos sobre usted
					dependen de cómo interactúe con nuestro Sitio y utilice nuestros
					Servicios. Cuando usamos el término &quot;información
					personal&quot;, nos referimos a información que lo identifica, se
					relaciona con usted, describe o puede asociarse con usted. Las
					siguientes secciones describen las categorías y tipos específicos
					de información personal que recopilamos.
				</p>
				<p className="mt-3 font-semibold uppercase">
					Información que Recopilamos Directamente de Usted
				</p>
				<p>
					La información que envía directamente a través de nuestros
					Servicios puede incluir:
				</p>
				<ul>
					<li>
						Detalles de contacto básicos, incluyendo su nombre, dirección,
						número de teléfono, correo electrónico.
					</li>
					<li>
						Información de pedido, incluyendo su nombre, dirección de
						facturación, confirmación de pago, dirección de correo
						electrónico, número de teléfono.
					</li>
					<li>
						Información de cuenta, incluyendo su nombre de usuario,
						contraseña, preguntas de seguridad.
					</li>
					<li>
						Información de compras, incluyendo los artículos que ve,
						coloca en su carrito o agrega a su lista de deseos.
					</li>
					<li>
						Información de soporte al cliente, incluyendo la información
						que elige incluir en las comunicaciones con nosotros, por
						ejemplo, al enviar un mensaje a través de los Servicios.
					</li>
				</ul>
				<p>
					Algunas funciones de los Servicios pueden requerir que
					proporcione directamente cierta información sobre usted. Puede
					optar por no proporcionar esta información, pero hacerlo puede
					evitar que utilice o acceda a estas funciones.
				</p>
				<p className="mt-3 font-semibold uppercase">
					Información que recopilamos a través de las cookies
				</p>
				<p>
					También recopilamos automáticamente cierta información sobre su
					interacción con los Servicios ("Datos de uso"). Para hacer esto,
					podemos utilizar cookies, píxeles y tecnologías similares
					("Cookies"). Los Datos de uso pueden incluir información sobre
					cómo accede y utiliza nuestro Sitio y su cuenta, incluida
					información del dispositivo, información del navegador,
					información sobre su conexión de red, su dirección IP y otra
					información relacionada con su interacción con los Servicios.
				</p>
				<p className="mt-3 font-semibold uppercase">
					Información que obtenemos de terceros
				</p>
				<p>
					Finalmente, podemos obtener información sobre usted de terceros,
					incluidos proveedores y prestadores de servicios que pueden
					recopilar información en nuestro nombre, como:
				</p>
				<ul>
					<li>
						Empresas que brindan soporte a nuestro Sitio y Servicios.
					</li>
					<li>
						Nuestros procesadores de pagos, quienes recopilan información
						de pago (por ejemplo, información de cuenta bancaria, tarjeta
						de crédito o débito, dirección de facturación) para procesar
						su pago con el fin de cumplir con sus pedidos y proporcionarle
						los productos o servicios que ha solicitado, para cumplir con
						nuestro contrato con usted.
					</li>
				</ul>
				<p>
					Cualquier información que obtengamos de terceros será tratada de
					acuerdo con esta Política de privacidad. No somos responsables ni
					nos hacemos responsables de la precisión de la información
					proporcionada por terceros y no nos hacemos responsables de las
					políticas o prácticas de terceros. Para obtener más información,
					consulte la sección a continuación, Sitios web y enlaces de
					terceros.
				</p>
				<p className="mt-3 font-semibold uppercase">
					Cómo utilizamos su información personal
				</p>
				<p>
					<strong>Proporcionar productos y servicios.</strong>
					Utilizamos su información personal para brindarle los Servicios
					para cumplir con nuestro contrato con usted, incluido el
					procesamiento de sus pagos, la ejecución de sus pedidos, enviarle
					notificaciones relacionadas con su cuenta, compras, devoluciones,
					intercambios u otras transacciones, crear, mantener y gestionar
					su cuenta, organizar el envío, facilitar devoluciones e
					intercambios y permitirle publicar reseñas.
				</p>
				<p>
					<strong>Seguridad y prevención de fraudes.</strong>
					Utilizamos su información personal para detectar, investigar o
					tomar medidas con respecto a posibles actividades fraudulentas,
					ilegales o maliciosas. Si elige utilizar los Servicios y
					registrar una cuenta, usted es responsable de mantener seguros
					sus credenciales de cuenta. Recomendamos encarecidamente que no
					comparta su nombre de usuario, contraseña u otros detalles de
					acceso con otras personas. Si cree que su cuenta ha sido
					comprometida, contáctenos inmediatamente.
				</p>
				<p>
					<strong>Comunicarnos con usted.</strong> Utilizamos su
					información personal para proporcionarle soporte al cliente y
					mejorar nuestros Servicios. Esto está en nuestro interés legítimo
					para ser receptivos con usted, proporcionarle servicios efectivos
					y mantener nuestra relación comercial con usted.
				</p>
				<p className="mt-3 font-semibold uppercase">Cookies</p>
				<p>
					Como muchos sitios web, utilizamos Cookies en nuestro Sitio.
					Utilizamos Cookies para potenciar y mejorar nuestro Sitio y
					nuestros Servicios (incluido recordar sus acciones y
					preferencias). También podemos permitir que terceros y
					proveedores de servicios utilicen Cookies en nuestro Sitio para
					adaptar mejor los servicios, productos y publicidad en nuestro
					Sitio y otros sitios web.
				</p>
				La mayoría de los navegadores aceptan automáticamente las Cookies de
				forma predeterminada, pero puedes elegir configurar tu navegador
				para eliminar o rechazar las Cookies a través de los controles de tu
				navegador. Ten en cuenta que eliminar o bloquear las Cookies puede
				tener un impacto negativo en tu experiencia de usuario y puede hacer
				que algunos de los Servicios, incluidas ciertas características y
				funcionalidades generales, no funcionen correctamente o dejen de
				estar disponibles.
				<p className="mt-3 font-semibold uppercase">
					Cómo Divulgamos Información Personal
				</p>
				<p>
					En ciertas circunstancias, podemos divulgar tu información
					personal a terceros con fines legítimos sujetos a esta Política
					de Privacidad. Tales circunstancias pueden incluir:
				</p>
				<ul>
					<li>
						Con proveedores u otros terceros que prestan servicios en
						nuestro nombre (por ejemplo, gestión de IT, procesamiento de
						pagos, soporte al cliente, almacenamiento en la nube y
						cumplimiento de pedidos).
					</li>
					<li>
						Cuando dirijas, solicites u otorgues tu consentimiento para
						que divulguemos cierta información a terceros, como para
						enviarte productos o a través de tu uso de widgets de redes
						sociales o integraciones de inicio de sesión, con tu
						consentimiento.
					</li>
					<li>
						Con nuestras filiales u otros dentro de nuestro grupo
						corporativo, en nuestros intereses legítimos para dirigir un
						negocio exitoso.
					</li>
					<li>
						En relación con una transacción comercial, como una fusión o
						quiebra, para cumplir con las obligaciones legales aplicables
						(incluido responder a citaciones, órdenes de registro y
						solicitudes similares), hacer cumplir cualquier término de
						servicio aplicable y proteger o defender los Servicios,
						nuestros derechos y los derechos de nuestros usuarios u otros.
					</li>
				</ul>
				<p>
					En los últimos 12 meses, hemos divulgado las siguientes
					categorías de información personal e información personal
					sensible (indicada con *) sobre los usuarios con los fines
					establecidos en "Cómo recolectamos y usamos tu información
					personal" y "Cómo divulgamos información personal":
				</p>
				<p>Categoría Categorías de Destinatarios</p>
				<ul>
					<li>
						Identificadores como detalles básicos de contacto y cierta
						información de pedidos y cuentas
					</li>
					<li>
						Información comercial como información de pedidos, información
						de compras e información de soporte al cliente
					</li>
				</ul>
				<p>
					Proveedores y terceros que prestan servicios en nuestro nombre
					(como proveedores de servicios de Internet, procesadores de
					pagos, socios de cumplimiento, socios de soporte al cliente)
				</p>
				<p>
					No utilizamos ni divulgamos información personal sensible con el
					propósito de inferir características sobre ti.
				</p>
				<p>
					Los Servicios pueden permitirte publicar reseñas de productos y
					otro contenido generado por el usuario. Si optas por enviar
					contenido generado por el usuario a cualquier área pública de los
					Servicios, este contenido será público y accesible para
					cualquiera.
				</p>
				<p>
					No controlamos quién tendrá acceso a la información que elijas
					hacer disponible para otros, y no podemos garantizar que las
					partes que tengan acceso a dicha información respetarán tu
					privacidad o la mantendrán segura. No somos responsables de la
					privacidad o seguridad de cualquier información que hagas
					pública, o de la precisión, uso o mal uso de cualquier
					información que divulges o recibas de terceros.
				</p>
				<p className="mt-3 font-semibold uppercase">
					Sitios Web y Enlaces de Terceros
				</p>
				<p>
					Nuestro Sitio puede proporcionar enlaces a sitios web u otras
					plataformas en línea operadas por terceros. Si sigues enlaces a
					sitios no afiliados o controlados por nosotros, debes revisar sus
					políticas de privacidad y seguridad y otros términos y
					condiciones. No garantizamos y no somos responsables de la
					privacidad o seguridad de tales sitios, incluida la precisión,
					integridad o confiabilidad de la información encontrada en estos
					sitios. La información que proporcionas en áreas públicas o
					semipúblicas, incluida la información que compartes en
					plataformas de redes sociales de terceros, también puede ser
					visible para otros usuarios de los Servicios y/u usuarios de esas
					plataformas de terceros sin limitación en cuanto a su uso por
					nosotros o por un tercero. Nuestra inclusión de tales enlaces no
					implica, por sí misma, ningún respaldo del contenido en dichas
					plataformas o de sus propietarios u operadores, excepto según se
					divulgue en los Servicios.
				</p>
				<p>Datos de Niños</p>
				<p>
					Los servicios no están destinados a ser utilizados por niños, y
					no recopilamos intencionalmente ninguna información personal
					sobre niños. Si usted es el padre o tutor de un niño que nos ha
					proporcionado su información personal, puede contactarnos
					utilizando los datos de contacto que se indican a continuación
					para solicitar que sea eliminada.
				</p>
				<p>
					A partir de la Fecha Efectiva de esta Política de Privacidad, no
					tenemos conocimiento real de que "compartimos" o "vendemos"
					(según se definen esos términos en la ley aplicable) información
					personal de personas menores de 16 años.
				</p>
				<p className="mt-3 font-semibold uppercase">
					Seguridad y Retención de su Información
				</p>
				<p>
					Tenga en cuenta que ninguna medida de seguridad es perfecta o
					infranqueable, y no podemos garantizar una "seguridad perfecta".
					Además, cualquier información que nos envíe puede no ser segura
					durante su transmisión. Recomendamos que no utilice canales
					inseguros para comunicar información sensible o confidencial a
					nosotros.
				</p>
				<p>
					El tiempo que conservamos su información personal depende de
					diferentes factores, como si necesitamos la información para
					mantener su cuenta, proporcionar los servicios, cumplir con
					obligaciones legales, resolver disputas o hacer cumplir otros
					contratos y políticas aplicables.
				</p>
				<p className="mt-3 font-semibold uppercase">
					Sus Derechos y Opciones
				</p>
				<p>
					Dependiendo de dónde viva, es posible que tenga algunos o todos
					los derechos enumerados a continuación en relación con su
					información personal. Sin embargo, estos derechos no son
					absolutos, pueden aplicarse solo en ciertas circunstancias y, en
					ciertos casos, podemos rechazar su solicitud según lo permita la
					ley.
				</p>
				<ul>
					<li>
						<strong>Derecho de Acceso / Conocimiento.</strong> Puede tener
						derecho a solicitar acceso a la información personal que
						tenemos sobre usted, incluidos los detalles relacionados con
						las formas en que usamos y compartimos su información.
					</li>
					<li>
						<strong>Derecho a Borrar.</strong> Puede tener derecho a
						solicitar que eliminemos la información personal que
						mantenemos sobre usted.
					</li>
					<li>
						<strong>Derecho a Corregir.</strong> Puede tener derecho a
						solicitar que corrijamos información personal inexacta que
						mantenemos sobre usted.
					</li>
					<li>
						<strong>Derecho de Portabilidad.</strong> Puede tener derecho
						a recibir una copia de la información personal que tenemos
						sobre usted y solicitar que la transfiramos a un tercero, en
						ciertas circunstancias y con ciertas excepciones.
					</li>
				</ul>
				<p>
					Puede ejercer cualquiera de estos derechos donde se indique en
					nuestro sitio o poniéndose en contacto con nosotros utilizando
					los datos de contacto proporcionados a continuación.
				</p>
				<p>
					No discriminaremos en su contra por ejercer alguno de estos
					derechos. Es posible que necesitemos recopilar información de
					usted para verificar su identidad, como su dirección de correo
					electrónico o información de la cuenta, antes de proporcionar una
					respuesta sustantiva a la solicitud. De acuerdo con las leyes
					aplicables, puede designar un agente autorizado para hacer
					solicitudes en su nombre para ejercer sus derechos. Antes de
					aceptar tal solicitud de un agente, requeriremos que el agente
					proporcione pruebas de que usted los ha autorizado a actuar en su
					nombre, y es posible que necesitemos que verifique su identidad
					directamente con nosotros. Responderemos a su solicitud de manera
					oportuna según lo requerido por la ley aplicable.
				</p>
				<p className="mt-3 font-semibold uppercase">Quejas</p>
				<p>
					Si tiene quejas sobre cómo procesamos su información personal,
					contáctenos utilizando los detalles de contacto proporcionados a
					continuación. Si no está satisfecho con nuestra respuesta a su
					queja, dependiendo de dónde viva, puede tener derecho a apelar
					nuestra decisión poniéndose en contacto con nosotros utilizando
					los detalles de contacto indicados a continuación, o presentar su
					queja ante su autoridad local de protección de datos.
				</p>
				<p className="mt-3 font-semibold uppercase">
					Usuarios Internacionales
				</p>
				<p>
					Tenga en cuenta que podemos transferir, almacenar y procesar su
					información personal fuera del país en el que vive, incluidos los
					Estados Unidos. Su información personal también es procesada por
					personal y proveedores de servicios de terceros en estos países.
				</p>
				<p>
					Si transferimos su información personal fuera de Europa, nos
					basaremos en mecanismos de transferencia reconocidos como las
					Cláusulas Contractuales Estándar de la Comisión Europea, o
					cualquier contrato equivalente emitido por la autoridad
					competente relevante del Reino Unido, según corresponda, a menos
					que la transferencia de datos sea a un país que haya sido
					determinado como que proporciona un nivel adecuado de protección.
				</p>
				<p className="mt-3 font-semibold uppercase">Contacto</p>
				<p>
					Si tiene alguna pregunta sobre nuestras prácticas de privacidad o
					esta Política de Privacidad, o si desea ejercer alguno de los
					derechos disponibles para usted, llame al {contact.phone} o
					envíenos un correo electrónico a {contact.email} o contáctenos en{" "}
					{contact.address}, P.O. Box {contact.pobox}, {contact.emirate},{" "}
					{contact.country}.
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
