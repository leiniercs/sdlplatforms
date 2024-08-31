import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { Poppins } from "next/font/google";
import { contact } from "@/components/common/contact";

type CustomPageProps = {
   params: { locale: string };
};

const titleFont = Poppins({ subsets: ["latin"], weight: "700" });

export default async function Terms({ params: { locale } }: CustomPageProps) {
   unstable_setRequestLocale(locale);
   const tTerms = await getTranslations("terms");
   const terms: { [key: string]: JSX.Element } = {
      en: (
         <>
            <p className="mt-3 font-semibold uppercase">OVERVIEW</p>
            <p>
               This website is property of, maintained and operated by{" "}
               {contact.company}, incorporated in {contact.emirate},{" "}
               {contact.country} with a Trade License #
               {contact.tradeLicenseNumber}. Throughout the site, the terms
               &apos;we&apos;, &apos;us&apos; and &apos;our&apos; refer to{" "}
               {contact.company}.{contact.company} offers this website,
               including all Information, Products and Services available from
               this site and all Services&apos; websites to you, the user,
               conditioned upon your acceptance of all terms, conditions,
               policies and notices stated here.
            </p>
            <p>
               By visiting our site and/or purchasing a digital product from any
               of our Services&apos; websites, through the Payment Page , you
               engage in our &apos;Service&apos; and agree to be bound by the
               following terms and conditions (&apos;Terms of Service&apos;,
               &apos;Terms&apos;), including those additional terms and
               conditions and policies referenced herein and/or available by
               hyperlink. These Terms of Service apply to all users of the site,
               including without limitation users who are browsers, vendors,
               customers, merchants, and/ or contributors of content.
            </p>
            <p>
               Please read these Terms of Service carefully before accessing or
               using our website. By accessing or using any part of the site,
               you agree to be bound by these Terms of Service. If you do not
               agree to all the terms and conditions of this agreement, then you
               may not access the website or use any Services. If these Terms of
               Service are considered an offer, acceptance is expressly limited
               to these Terms of Service.
            </p>
            <p>
               Any new Features, Products, Services which are added to the
               current website shall also be subject to the Terms of Service.
               You can review the most current version of the Terms of Service
               at any time on this page. We reserve the right to update, change
               or replace any part of these Terms of Service by posting updates
               and/or changes to our website. It is your responsibility to check
               this page periodically for changes. Your continued use of or
               access to the website following the posting of any changes
               constitutes acceptance of those changes.
            </p>
            <p>
               Our Website and the Services&apos; Websites are hosted on Hetzner
               Online. It provide us with the IT infrastructure to run the
               applications and websites that allows us to promote and sell our
               Services and Products to you.
            </p>
            <p className="mt-3 font-semibold uppercase">
               SECTION 1 - WEBSITES AND SERVICES TERMS
            </p>
            <p>
               By agreeing to these Terms of Service, you represent that you are
               at least the age of majority in your state or province of
               residence, or that you are the age of majority in your state or
               province of residence and you have given us your consent to allow
               any of your minor dependents to use this site.
            </p>
            <p>
               You may not use our Products nor Services for any illegal or
               unauthorized purpose nor may you, in the use of the Service,
               violate any laws in your jurisdiction (including but not limited
               to copyright laws).
            </p>
            <p>
               You must not transmit any worms or viruses or any code of a
               destructive nature.
            </p>
            <p>
               A breach or violation of any of the Terms will result in an
               immediate termination of your Services.
            </p>
            <p className="mt-3 font-semibold uppercase">
               SECTION 2 - GENERAL CONDITIONS
            </p>
            <p>
               We reserve the right to refuse any Products or Services to anyone
               for any reason at any time.
            </p>
            <p>
               You understand that your content (not including credit card
               information), may be transferred unencrypted and involve (a)
               transmissions over various networks; and (b) changes to conform
               and adapt to technical requirements of connecting networks or
               devices. Credit card information is always encrypted during
               transfer over networks.
            </p>
            <p>
               You agree not to reproduce, duplicate, copy, sell, resell or
               exploit any portion of the Services, use of the Services, or
               access to the Services or any contact on the website through
               which the Services is provided, without express written
               permission by us.
            </p>
            <p>
               The headings used in this agreement are included for convenience
               only and will not limit or otherwise affect these Terms.
            </p>
            <p className="mt-3 font-semibold uppercase">
               SECTION 3 - ACCURACY, COMPLETENESS AND TIMELINESS OF INFORMATION
            </p>
            <p>
               We are not responsible if information made available on this site
               or any of our Services&apos; Website are not accurate, complete
               or current. The material on this site is provided for general
               information only and should not be relied upon or used as the
               sole basis for making decisions without consulting primary, more
               accurate, more complete or more timely sources of information.
               Any reliance on the material on this site is at your own risk.
            </p>
            <p>
               This site may contain certain historical information. Historical
               information, necessarily, is not current and is provided for your
               reference only. We reserve the right to modify the contents of
               this site at any time, but we have no obligation to update any
               information on our site. You agree that it is your responsibility
               to monitor changes to our site.
            </p>
            <p className="mt-3 font-semibold uppercase">
               SECTION 4 - MODIFICATIONS TO THE SERVICE AND PRICES
            </p>
            <p>Prices for our products are subject to change without notice.</p>
            <p>
               We reserve the right at any time to modify or discontinue the
               Service (or any part or content thereof) without notice at any
               time.
            </p>
            <p>
               We shall not be liable to you or to any third-party for any
               modification, price change, suspension or discontinuance of the
               Products offered by our Services.
            </p>
            <p className="mt-3 font-semibold uppercase">
               SECTION 5 - PRODUCTS OR SERVICES
            </p>
            <p>
               Certain Products or Services may be available exclusively online
               through the websites. These products or Services may have limited
               quantities and are subject to return only according to our
               Refunds Policy:
               <a href="https://www.sdlplatforms.com/en/refunds">
                  https://www.sdlplatforms.com/en/refunds
               </a>
            </p>
            <p>
               We reserve the right, but are not obligated, to limit the sales
               of our Products or Services to any person, geographic region or
               jurisdiction. We may exercise this right on a case-by-case basis.
               We reserve the right to limit the quantities of any Products or
               Services that we offer. All descriptions of products or product
               pricing are subject to change at anytime without notice, at the
               sole discretion of us. We reserve the right to discontinue any
               product at any time. Any offer for any Products or Services made
               on this site is void where prohibited.
            </p>
            <p>
               We do not warrant that the quality of any Products, Services,
               information, or other material purchased or obtained by you will
               meet your expectations, or that any errors in the Services will
               be corrected.
            </p>
            <p className="mt-3 font-semibold uppercase">
               SECTION 6 - PRODUCT PURCHASING
            </p>
            <p>
               In order to purchase a Product from one or our Services, the
               Client must visit the Service&apos;s Website, explore the
               Products offered there, add the wanted Products to the cart and
               when the Client is ready to purchase them, the Client must review
               the cart to see the names, prices, currency, accepted cards and
               proceed to click the Checkout button.
            </p>
            <p>
               Once clicked the Checkout button, the Client will be redirected
               to the {contact.company} Payment Page:{" "}
               <a href="https://pay.sdlplatforms.com">
                  https://pay.sdlplatforms.com
               </a>
               ; in which the Client will be able to review once again the
               desired products&apos; names, quantities, prices, currencies,
               totals, discounts and the accepted cards in the Order Summary
               card.
            </p>
            <p>
               After the Client reviewed all the details in the Order Summary
               card, the Client must proceed to type the personal information
               (full name, address, state, country, phone number and email)
               required to request to our Payment Processors the Payment Form,
               in which the Client must type the payment information (bank card
               number, expiry date, CVV, card holder&apos;s and 3DS
               authentication) in order to proceed with the payment of the
               desired Products.
            </p>
            <p>
               After a successfull payment, the Client will receive the digital
               invoice of the purchase on the declared email within a period of
               time not exceeding 24 hours, which will include the next details:
            </p>
            <ul>
               <li>Details of the seller: The Company.</li>
               <li>Details of the buyer: The Client</li>
               <li>
                  The Order Summary with Products&apos; names, quantities,
                  prices, currencies, discounts and totals
               </li>
               <li>The Download Links of the purchased Products</li>
               <li>
                  Additional information with the contact email address of the
                  Company
               </li>
               <li>Information about how to proceed with a Refund request</li>
               <li>
                  Information about how to proceed to give a review to the
                  Company
               </li>
            </ul>
            <p className="mt-3 font-semibold uppercase">
               SECTION 7 - ACCURACY OF BILLING AND ACCOUNT INFORMATION
            </p>
            <p>
               We reserve the right to refuse any order you place with us. We
               may, in our sole discretion, limit or cancel quantities purchased
               per person, per household or per order. These restrictions may
               include orders placed by or under the same customer account, the
               same credit card, and/or orders that use the same billing
               information. In the event that we make a change to or cancel an
               order, we may attempt to notify you by contacting the email
               and/or billing address/phone number provided at the time the
               order was made. We reserve the right to limit or prohibit orders
               that, in our sole judgment, appear to be placed by dealers,
               resellers or distributors.
            </p>
            <p>
               You agree to provide current, complete and accurate purchase and
               account information for all purchases made at our store. You
               agree to promptly update your account and other information,
               including your email address and credit card numbers and
               expiration dates, so that we can complete your transactions and
               contact you as needed.
            </p>
            <p>
               For more details, please review our Refund Policy:
               <a href="https://www.sdlplatforms.com/en/refunds">
                  https://www.sdlplatforms.com/en/refunds
               </a>
            </p>
            <p className="mt-3 font-semibold uppercase">
               SECTION 8 - PAYMENT METHODS
            </p>
            <p>
               The Products and Services provided can be purchased online via
               our Payment Page (
               <a href="https://pay.sdlplatforms.com">
                  https://pay.sdlplatforms.com
               </a>
               ). The User need to introduce accurate payment information in
               order to execute a successful purchase through the supported
               payment methods.
            </p>
            <p>
               The Products and Services can be purchased by a valid
               debit/credit card from Visa, Mastercard or Dinners Club in one of
               the next currencies: AED, AUD, BHD, CAD, DKK, EGP, EUR, GBP, HKD,
               INR, JPY, JOD, KWD, LBP, LKR, MAD, MYR, NGN, OMR, PHP, PEN, PKR,
               QAR, SGD, SEK, SAR, THB, TZS, TRY, USD, UGX, XOF and ZAR.
            </p>
            <p>
               It is advisable that cardholders must retain copies of
               transaction records and adhere to merchant policies and rules.
            </p>
            <p className="mt-3 font-semibold uppercase">
               SECTION 9 - THIRD-PARTY LINKS
            </p>
            <p>
               Certain content, Products and Services available via our Service
               may include materials from third-parties.
            </p>
            <p>
               Third-party links on this site may direct you to third-party
               websites that are not affiliated with us. We are not responsible
               for examining or evaluating the content or accuracy and we do not
               warrant and will not have any liability or responsibility for any
               third-party materials or websites, or for any other materials,
               products, or Services of third-parties.
            </p>
            <p>
               We are not liable for any harm or damages related to the purchase
               or use of goods, Services, resources, content, or any other
               transactions made in connection with any third-party websites.
               Please review carefully the third-party&apos;s policies and
               practices and make sure you understand them before you engage in
               any transaction. Complaints, claims, concerns, or questions
               regarding third-party products should be directed to the
               third-party.
            </p>
            <p className="mt-3 font-semibold uppercase">
               SECTION 10 - PERSONAL INFORMATION
            </p>
            <p>
               Your submission of personal information through this website and
               any of our Services&apos; websites are governed by our Privacy
               Policy, which can be viewed here:
               <a href="https://www.sdlplatforms.com/en/privacy">
                  https://www.sdlplatforms.com/en/privacy
               </a>
            </p>
            <p className="mt-3 font-semibold uppercase">
               SECTION 11 - ERRORS, INACCURACIES AND OMISSIONS
            </p>
            <p>
               Occasionally there may be information on our site or in the
               Service that contains typographical errors, inaccuracies or
               omissions that may relate to product descriptions, pricing,
               promotions, offers and availability. We reserve the right to
               correct any errors, inaccuracies or omissions, and to change or
               update information or cancel orders if any information in the
               Service or on any related website is inaccurate at any time
               without prior notice (including after you have submitted your
               order).
            </p>
            <p>
               We undertake no obligation to update, amend or clarify
               information in the Service or on any related website, including
               without limitation, pricing information, except as required by
               law. No specified update or refresh date applied in the Service
               or on any related website, should be taken to indicate that all
               information in the Service or on any related website has been
               modified or updated.
            </p>
            <p className="mt-3 font-semibold uppercase">
               SECTION 12 - PROHIBITED USES
            </p>
            <p>
               In addition to other prohibitions as set forth in the Terms of
               Service, you are prohibited from using the site or its content:
               (a) for any unlawful purpose; (b) to solicit others to perform or
               participate in any unlawful acts; (c) to violate any
               international, federal, provincial or state regulations, rules,
               laws, or local ordinances; (d) to infringe upon or violate our
               intellectual property rights or the intellectual property rights
               of others; (e) to harass, abuse, insult, harm, defame, slander,
               disparage, intimidate, or discriminate based on gender, sexual
               orientation, religion, ethnicity, race, age, national origin, or
               disability; (f) to submit false or misleading information; (g) to
               upload or transmit viruses or any other type of malicious code
               that will or may be used in any way that will affect the
               functionality or operation of the Service or of any related
               website, other websites, or the Internet; (h) to collect or track
               the personal information of others; (i) to spam, phish, pharm,
               pretext, spider, crawl, or scrape; (j) for any obscene or immoral
               purpose; or (k) to interfere with or circumvent the security
               features of the Service or any related website, other websites,
               or the Internet, (l) if you are resident of an OFAC-santioned
               country, (m) if you are less than 18 years-old. We reserve the
               right to terminate your use of the Service or any related website
               for violating any of the prohibited uses.
            </p>
            <p className="mt-3 font-semibold uppercase">
               SECTION 13 - DISCLAIMER OF WARRANTIES; LIMITATION OF LIABILITY
            </p>
            <p>
               We do not guarantee, represent or warrant that your use of our
               Services will be uninterrupted, timely, secure or error-free.
            </p>
            <p>
               We do not warrant that the results that may be obtained from the
               use of our Services will be accurate or reliable.
            </p>
            <p>
               You agree that from time to time we may remove any of our
               Services for indefinite periods of time or cancel any of our
               Services at any time, without notice to you.
            </p>
            <p>
               You expressly agree that your use of, or inability to use, any of
               our Services is at your sole risk. Our Services and all Products
               delivered to you through the Services are (except as expressly
               stated by us) provided &apos;as is&apos; and &apos;as
               available&apos; for your use, without any representation,
               warranties or conditions of any kind, either express or implied,
               including all implied warranties or conditions of
               merchantability, merchantable quality, fitness for a particular
               purpose, durability, title, and non-infringement.
            </p>
            <p>
               In no case shall {contact.company}, our directors, officers,
               employees, affiliates, agents, contractors, interns, suppliers,
               Service providers or licensors be liable for any injury, loss,
               claim, or any direct, indirect, incidental, punitive, special, or
               consequential damages of any kind, including, without limitation
               lost profits, lost revenue, lost savings, loss of data,
               replacement costs, or any similar damages, whether based in
               contract, tort (including negligence), strict liability or
               otherwise, arising from your use of any of our Services or any
               Products, or for any other claim related in any way to your use
               of our Services or any Product, including, but not limited to,
               any errors or omissions in any content, or any loss or damage of
               any kind incurred as a result of the use of the Service or any
               content (or product) posted, transmitted, or otherwise made
               available via our Services, even if advised of their possibility.
               Because some states or jurisdictions do not allow the exclusion
               or the limitation of liability for consequential or incidental
               damages, in such states or jurisdictions, our liability shall be
               limited to the maximum extent permitted by law.
            </p>
            <p>
               Users are responsible for maintaining the confidentiality of
               their accounts.
            </p>
            <p className="mt-3 font-semibold uppercase">
               SECTION 14 - INDEMNIFICATION
            </p>
            <p>
               You agree to indemnify, defend and hold harmless
               {contact.company} and our subsidiaries, affiliates, partners,
               officers, directors, agents, contractors, licensors, Service
               providers, subcontractors, suppliers, interns and employees,
               harmless from any claim or demand, including reasonable
               attorneys’ fees, made by any third-party due to or arising out of
               your breach of these Terms of Service or the documents they
               incorporate by reference, or your violation of any law or the
               rights of a third-party.
            </p>
            <p className="mt-3 font-semibold uppercase">
               SECTION 15 - SEVERABILITY
            </p>
            <p>
               In the event that any provision of these Terms of Service is
               determined to be unlawful, void or unenforceable, such provision
               shall nonetheless be enforceable to the fullest extent permitted
               by applicable law, and the unenforceable portion shall be deemed
               to be severed from these Terms of Service, such determination
               shall not affect the validity and enforceability of any other
               remaining provisions.
            </p>
            <p className="mt-3 font-semibold uppercase">
               SECTION 16 - TERMINATION
            </p>
            <p>
               The obligations and liabilities of the parties incurred prior to
               the termination date shall survive the termination of this
               agreement for all purposes.
            </p>
            <p>
               These Terms of Service are effective unless and until terminated
               by either you or us. You may terminate these Terms of Service at
               any time by notifying us that you no longer wish to use our
               Services, or when you cease using our site.
            </p>
            <p>
               If in our sole judgment you fail, or we suspect that you have
               failed, to comply with any term or provision of these Terms of
               Service, we also may terminate this agreement at any time without
               notice and you will remain liable for all amounts due up to and
               including the date of termination; and/or accordingly may deny
               you access to our Services (or any part thereof).
            </p>
            <p className="mt-3 font-semibold uppercase">
               SECTION 17 - ENTIRE AGREEMENT
            </p>
            <p>
               The failure of us to exercise or enforce any right or provision
               of these Terms of Service shall not constitute a waiver of such
               right or provision.
            </p>
            <p>
               These Terms of Service and any policies or operating rules posted
               by us on this site or in respect to our Services constitutes the
               entire agreement and understanding between you and us and governs
               your use of the Service, superseding any prior or contemporaneous
               agreements, communications and proposals, whether oral or
               written, between you and us (including, but not limited to, any
               prior versions of the Terms of Service).
            </p>
            <p>
               Any ambiguities in the interpretation of these Terms of Service
               shall not be construed against the drafting party.
            </p>
            <p className="mt-3 font-semibold uppercase">
               SECTION 18 - GOVERNING LAW
            </p>
            <p>
               These Terms of Service and any separate agreements whereby we
               provide you Services are governed by and construed in accordance
               with the laws of {contact.country}.
            </p>
            <p>
               Any purchase, dispute or claim arising out of or in connection
               with this website and its Products and Services shall be governed
               and construed in accordance with the laws of {contact.country}.
            </p>
            <p className="mt-3 font-semibold uppercase">
               SECTION 19 - CHANGES TO TERMS OF SERVICE
            </p>
            <p>
               You can review the most current version of the Terms of Service
               at any time at this page.
            </p>
            <p>
               We reserve the right, at our sole discretion, to update, change
               or replace any part of these Terms of Service by posting updates
               and changes to our website. It is your responsibility to check
               our website periodically for changes. Your continued use of or
               access to our website or our Services following the posting of
               any changes to these Terms of Service constitutes acceptance of
               those changes.
            </p>
            <p className="mt-3 font-semibold uppercase">
               SECTION 20 - CONTACT INFORMATION
            </p>
            <p>Our contact information is posted below:</p>
            <p>
               {contact.company}
               <br />
               {contact.email}
               <br />
               {contact.address}
               <br />
               P.O. Box {contact.pobox}, {contact.emirate}, {contact.country}.
               <br />
               {contact.phone}
               <br />
            </p>
            <p>
               License Number: {contact.tradeLicenseNumber}
               <br />
               Tax Registration Number: {contact.taxRegistrationNumber}
            </p>
         </>
      ),
      es: (
         <>
            <p className="mt-3 font-semibold uppercase">DESCRIPCIÓN GENERAL</p>
            <p>
               Este sitio web es propiedad de, mantenido y operado por{" "}
               {contact.company}, incorporada en {contact.emirate},{" "}
               {contact.country} con Licencia de Comercialización #
               {contact.tradeLicenseNumber}. A lo largo del sitio, los términos
               &apos;nosotros&apos;, &apos;nos&apos; y &apos;nuestro&apos; se
               refieren a{contact.company}. {contact.company} ofrece este sitio
               web, incluyendo toda la Información, Productos y Servicios
               disponibles en este sitio y en todos los sitios web de Servicios
               a usted, el usuario, condicionado a su aceptación de todos los
               términos, condiciones, políticas y avisos declarados aquí.
            </p>
            <p>
               Al visitar nuestro sitio y/o comprar un producto digital de
               cualquiera de los sitios web de nuestros Servicios, a través de
               la Página de Pago, usted participa en nuestro
               &apos;Servicio&apos; y acepta quedar vinculado por los siguientes
               términos y condiciones (&apos;Términos de Servicio&apos;,
               &apos;Términos&apos;), incluidos aquellos términos y condiciones
               adicionales y políticas referenciados aquí y/o disponibles por
               hipervínculo. Estos Términos de Servicio se aplican a todos los
               usuarios del sitio, incluidos, sin limitación, los usuarios que
               son navegadores, vendedores, clientes, comerciantes y/o
               colaboradores de contenido.
            </p>
            <p>
               Por favor, lea estos Términos de Servicio cuidadosamente antes de
               acceder o usar nuestro sitio web. Al acceder o usar cualquier
               parte del sitio, usted acepta quedar vinculado por estos Términos
               de Servicio. Si no está de acuerdo con todos los términos y
               condiciones de este acuerdo, entonces no podrá acceder al sitio
               web ni utilizar ningún Servicio. Si estos Términos de Servicio se
               consideran una oferta, la aceptación se limita expresamente a
               estos Términos de Servicio.
            </p>
            <p>
               Cualquier nueva Característica, Producto, Servicio que se añada
               al sitio web actual también estará sujeto a los Términos de
               Servicio. Puede revisar la versión más actual de los Términos de
               Servicio en cualquier momento en esta página. Nos reservamos el
               derecho de actualizar, cambiar o reemplazar cualquier parte de
               estos Términos de Servicio publicando actualizaciones y/o cambios
               en nuestro sitio web. Es su responsabilidad revisar esta página
               periódicamente para ver los cambios. Su uso continuado o acceso
               al sitio web tras la publicación de cambios constituye la
               aceptación de esos cambios.
            </p>
            <p>
               Nuestro sitio web y los sitios web de Servicios están alojados en
               Hetzner Online. Nos proporciona la infraestructura de TI para
               ejecutar las aplicaciones y sitios web que nos permiten
               promocionar y vender nuestros Servicios y Productos a usted.
            </p>
            <p className="mt-3 font-semibold uppercase">
               SECCIÓN 1 - TÉRMINOS DE LOS SITIOS WEB Y SERVICIOS
            </p>
            <p>
               Al aceptar estos Términos de Servicio, usted declara que tiene al
               menos la mayoría de edad en su estado o provincia de residencia,
               o que tiene la mayoría de edad en su estado o provincia de
               residencia y nos ha dado su consentimiento para permitir que
               cualquiera de sus dependientes menores de edad use este sitio.
            </p>
            <p>
               No puede utilizar nuestros Productos ni Servicios para ningún
               propósito ilegal o no autorizado, ni violar cualquier ley en su
               jurisdicción (incluyendo pero no limitándose a las leyes de
               copyright) al utilizar el Servicio.
            </p>
            <p>
               No debe transmitir gusanos, virus u otro código de naturaleza
               destructiva.
            </p>
            <p>
               El incumplimiento o violación de cualquiera de los Términos
               resultará en la terminación inmediata de sus Servicios.
            </p>
            <p className="mt-3 font-semibold uppercase">
               SECCIÓN 2 - CONDICIONES GENERALES
            </p>
            <p>
               Nos reservamos el derecho de rechazar cualquier Producto o
               Servicio a cualquier persona por cualquier motivo en cualquier
               momento.
            </p>
            <p>
               Usted entiende que su contenido (sin incluir información de
               tarjeta de crédito), puede ser transferido sin cifrar e implicar
               (a) transmisiones a través de varias redes; y (b) cambios para
               cumplir y adaptarse a los requisitos técnicos de las redes o
               dispositivos de conexión. La información de la tarjeta de crédito
               siempre se cifra durante la transferencia a través de las redes.
            </p>
            <p>
               Usted acepta no reproducir, duplicar, copiar, vender, revender o
               explotar ninguna parte de los Servicios, uso de los Servicios, o
               acceso a los Servicios o cualquier contacto en el sitio web a
               través del cual se proporcionan los Servicios, sin permiso
               expreso por escrito de nuestra parte.
            </p>
            <p>
               Los encabezados utilizados en este acuerdo se incluyen solo por
               conveniencia y no limitarán ni afectarán de otra manera estos
               Términos.
            </p>
            <p className="mt-3 font-semibold uppercase">
               SECCIÓN 3 - EXACTITUD, INTEGRIDAD Y PUNTUALIDAD DE LA INFORMACIÓN
            </p>
            <p>
               No somos responsables si la información disponible en este sitio
               o en cualquiera de los Sitios Web de nuestros Servicios no es
               precisa, completa o actual. El material en este sitio se
               proporciona únicamente para información general y no debe
               confiarse o utilizarse como la única base para tomar decisiones
               sin consultar fuentes de información primarias, más precisas, más
               completas o más oportunas. Cualquier confianza en el material de
               este sitio es bajo su propio riesgo.
            </p>
            <p>
               Este sitio puede contener cierta información histórica. La
               información histórica, necesariamente, no es actual y se
               proporciona únicamente para su referencia. Nos reservamos el
               derecho de modificar el contenido de este sitio en cualquier
               momento, pero no tenemos la obligación de actualizar ninguna
               información en nuestro sitio. Usted acepta que es su
               responsabilidad monitorear los cambios en nuestro sitio.
            </p>
            <p className="mt-3 font-semibold uppercase">
               SECCIÓN 4 - MODIFICACIONES AL SERVICIO Y PRECIOS
            </p>
            <p>
               Los precios de nuestros productos están sujetos a cambios sin
               previo aviso.
            </p>
            <p>
               Nos reservamos el derecho en cualquier momento de modificar o
               descontinuar el Servicio (o cualquier parte o contenido del
               mismo) sin previo aviso en cualquier momento.
            </p>
            <p>
               No seremos responsables ante usted o ante cualquier tercero por
               cualquier modificación, cambio de precio, suspensión o
               interrupción de los Productos ofrecidos por nuestros Servicios.
            </p>
            <p className="mt-3 font-semibold uppercase">
               SECCIÓN 5 - PRODUCTOS O SERVICIOS
            </p>
            <p>
               Ciertos Productos o Servicios pueden estar disponibles
               exclusivamente en línea a través de los sitios web. Estos
               productos o servicios pueden tener cantidades limitadas y solo
               estar sujetos a devolución de acuerdo con nuestra Política de
               Reembolsos:
               <a href="https://www.sdlplatforms.com/es/refunds">
                  https://www.sdlplatforms.com/es/refunds
               </a>
            </p>
            <p>
               Nos reservamos el derecho, pero no estamos obligados, a limitar
               la venta de nuestros Productos o Servicios a cualquier persona,
               región geográfica o jurisdicción. Podemos ejercer este derecho
               caso por caso. Nos reservamos el derecho de limitar las
               cantidades de cualquier Producto o Servicio que ofrecemos. Todas
               las descripciones de productos o precios de productos están
               sujetos a cambios en cualquier momento sin previo aviso, a
               nuestra entera discreción. Nos reservamos el derecho de
               discontinuar cualquier producto en cualquier momento. Cualquier
               oferta de Productos o Servicios realizada en este sitio está
               anulada donde esté prohibida.
            </p>
            <p>
               No garantizamos que la calidad de cualquier Producto, Servicio,
               información u otro material adquirido u obtenido por usted cumpla
               sus expectativas, ni que se corrijan errores en los Servicios.
            </p>
            <p className="mt-3 font-semibold uppercase">
               SECCIÓN 6 - COMPRA DE PRODUCTOS
            </p>
            <p>
               Para comprar un Producto de uno de nuestros Servicios, el Cliente
               debe visitar el Sitio Web del Servicio, explorar los Productos
               que allí se ofrecen, agregar los Productos deseados al carrito y
               cuando el Cliente esté listo para comprarlos, debe revisar el
               carrito para ver los nombres, precios, moneda, tarjetas aceptadas
               y proceder a hacer clic en el botón Finalizar Compra.
            </p>
            <p>
               Una vez que haya hecho clic en el botón Finalizar Compra, el
               Cliente será redireccionado a la Página de Pago de{" "}
               {contact.company}:{" "}
               <a href="https://pay.sdlplatforms.com">
                  https://pay.sdlplatforms.com
               </a>
               ; en la cual el Cliente podrá revisar nuevamente los nombres,
               cantidades, precios, monedas, totales, descuentos y las tarjetas
               aceptadas de los productos deseados en la tarjeta Resumen de
               Pedido.
            </p>
            <p>
               Después de que el Cliente haya revisado todos los detalles en la
               tarjeta Resumen del Pedido, el Cliente deberá proceder a ingresar
               la información personal (nombre completo, dirección, estado,
               país, número de teléfono y correo electrónico) requerida para
               solicitar a nuestros Procesadores de Pago el Formulario de Pago,
               en el cual el Cliente deberá ingresar la información de pago
               (número de tarjeta bancaria, fecha de vencimiento, CVV,
               autenticación del titular de la tarjeta y 3DS) para proceder con
               el pago de los Productos deseados.
            </p>
            <p>
               Después de un pago exitoso, el Cliente recibirá la factura
               digital de la compra en el correo electrónico indicado en un
               lapso de tiempo no mayor a 24 horas, el cual incluirá los
               siguientes detalles:
            </p>
            <ul>
               <li>Datos del vendedor: La Compañía.</li>
               <li>Datos del comprador: El Cliente</li>
               <li>
                  El Resumen del Pedido con los Productos: Nombres, cantidades,
                  precios, monedas, descuentos y totales
               </li>
               <li>Los enlaces de descarga de los productos adquiridos</li>
               <li>
                  Información adicional con la dirección de correo electrónico
                  de contacto de la Empresa
               </li>
               <li>
                  Información sobre cómo proceder con una solicitud de Reembolso
               </li>
               <li>
                  Información sobre cómo proceder a dar opinión a la Empresa
               </li>
            </ul>
            <p className="mt-3 font-semibold uppercase">
               SECCIÓN 7 - PRECISIÓN DE LA FACTURACIÓN E INFORMACIÓN DE LA
               CUENTA
            </p>
            <p>
               Nos reservamos el derecho de rechazar cualquier pedido que
               realice con nosotros. Podemos, a nuestra entera discreción,
               limitar o cancelar cantidades compradas por persona, por hogar o
               por pedido. Estas restricciones pueden incluir pedidos realizados
               por o bajo la misma cuenta de cliente, la misma tarjeta de
               crédito y/o pedidos que utilicen la misma información de
               facturación. En caso de que hagamos un cambio o cancelemos un
               pedido, intentaremos notificarle contactándolo a través del
               correo electrónico y/o la dirección de facturación/número de
               teléfono proporcionados en el momento en que se realizó el
               pedido. Nos reservamos el derecho de limitar o prohibir pedidos
               que, a nuestra sola discreción, parezcan haber sido realizados
               por distribuidores, revendedores o distribuidores.
            </p>
            <p>
               Usted acepta proporcionar información de compra y cuenta actual,
               completa y precisa para todas las compras realizadas en nuestra
               tienda. Usted acepta actualizar rápidamente su cuenta y otra
               información, incluyendo su dirección de correo electrónico y
               números de tarjetas de crédito y fechas de vencimiento, para que
               podamos completar sus transacciones y contactarlo según sea
               necesario.
            </p>
            <p>
               Para más detalles, por favor revise nuestra Política de
               Reembolso:
               <a href="https://www.sdlplatforms.com/es/refunds">
                  https://www.sdlplatforms.com/es/refunds
               </a>
            </p>
            <p className="mt-3 font-semibold uppercase">
               SECCIÓN 8 - MÉTODOS DE PAGO
            </p>
            <p>
               Los Products y Servicios proveídos pueden ser comprados en línea
               vía nuestra Página de Pagos (
               <a href="https://pay.sdlplatforms.com">
                  https://pay.sdlplatforms.com
               </a>
               ). El Usuario necesita introducir información de pago precisa en
               aras de ejecutar una compra exitosa a través de los métodos de
               pagos soportados.
            </p>
            <p>
               Los Productos y Servicios pueden ser comprados con una tarjeta de
               débito/crédito válida de Visa, Mastercard o Dinners Club en una
               de las siguientes monedas: AED, AUD, BHD, CAD, DKK, EGP, EUR,
               GBP, HKD, INR, JPY, JOD, KWD, LBP, LKR, MAD, MYR, NGN, OMR, PHP,
               PEN, PKR, QAR, SGD, SEK, SAR, THB, TZS, TRY, USD, UGX, XOF and
               ZAR.
            </p>
            <p>
               Es recomendable que los titulares de tarjetas conserven copias de
               los registros de transacciones y cumplan con las políticas y
               normas del comerciante.
            </p>
            <p className="mt-3 font-semibold uppercase">
               SECCIÓN 9 - ENLACES DE TERCEROS
            </p>
            <p>
               Cierto contenido, productos y servicios disponibles a través de
               nuestro Servicio pueden incluir materiales de terceros.
            </p>
            <p>
               Los enlaces de terceros en este sitio pueden dirigirte a sitios
               web de terceros que no están afiliados con nosotros. No somos
               responsables de examinar o evaluar el contenido o la precisión y
               no garantizamos y no tendremos ninguna responsabilidad o
               responsabilidad por materiales o sitios web de terceros, o por
               cualquier otro material, producto o servicio de terceros.
            </p>
            <p>
               No somos responsables de ningún daño o perjuicio relacionado con
               la compra o el uso de bienes, servicios, recursos, contenido, o
               cualquier otra transacción realizada en conexión con cualquier
               sitio web de terceros. Por favor, revisa cuidadosamente las
               políticas y prácticas de terceros y asegúrate de entenderlas
               antes de participar en cualquier transacción. Cualquier queja,
               reclamo, inquietud o pregunta con respecto a productos de
               terceros debe dirigirse al tercero.
            </p>
            <p className="mt-3 font-semibold uppercase">
               SECCIÓN 10 - INFORMACIÓN PERSONAL
            </p>
            <p>
               Su envío de información personal a través de este sitio web y
               cualquiera de los sitios web de nuestros Servicios está regido
               por nuestra Política de Privacidad, la cual puede ser vista aquí:
               <a href="https://www.sdlplatforms.com/es/privacy">
                  https://www.sdlplatforms.com/es/privacy
               </a>
            </p>
            <p className="mt-3 font-semibold uppercase">
               SECCIÓN 11 - ERRORES, INEXACTITUDES Y OMISIONES
            </p>
            <p>
               Ocasionalmente puede haber información en nuestro sitio o en el
               Servicio que contenga errores tipográficos, inexactitudes u
               omisiones que puedan estar relacionadas con descripciones de
               productos, precios, promociones, ofertas y disponibilidad. Nos
               reservamos el derecho de corregir cualquier error, inexactitud u
               omisión, y de cambiar o actualizar la información o cancelar
               pedidos si alguna información en el Servicio o en cualquier sitio
               web relacionado es inexacta en cualquier momento sin previo aviso
               (incluyendo después de haber enviado su pedido).
            </p>
            <p>
               No tenemos ninguna obligación de actualizar, modificar o aclarar
               la información del Servicio o de cualquier sitio web relacionado,
               incluyendo sin limitación, información de precios, excepto cuando
               lo requiera la ley. Ninguna fecha específica de actualización o
               renovación aplicada en el Servicio o en cualquier sitio web
               relacionado, debe tomarse como indicativo de que toda la
               información en el Servicio o en cualquier sitio web relacionado
               ha sido modificada o actualizada.
            </p>
            <p className="mt-3 font-semibold uppercase">
               SECCIÓN 12 - USOS PROHIBIDOS
            </p>
            <p>
               Además de otras prohibiciones establecidas en los Términos de
               Servicio, se le prohíbe usar el sitio o su contenido: (a) con
               cualquier propósito ilegal; (b) para solicitar a otros que
               realicen o participen en actos ilícitos; (c) para violar
               regulaciones, normas, leyes o ordenanzas internacionales,
               federales, provinciales o estatales, o locales; (d) para
               infringir o violar nuestros derechos de propiedad intelectual o
               los derechos de propiedad intelectual de otros; (e) para acosar,
               abusar, insultar, perjudicar, difamar, calumniar, desacreditar,
               intimidar o discriminar basado en género, orientación sexual,
               religión, etnia, raza, edad, origen nacional o discapacidad; (f)
               para enviar información falsa o engañosa; (g) para cargar o
               transmitir virus u otro tipo de código malicioso que pueda ser
               utilizado de alguna manera que afecte la funcionalidad u
               operación del Servicio o de cualquier sitio web relacionado,
               otros sitios web, o Internet; (h) para recolectar o rastrear
               información personal de otros; (i) para hacer spam, phishing,
               pharming, pretexting, spidering, crawling, o scraping; (j) con
               cualquier propósito obsceno o inmoral; o (k) para interferir o
               evadir las características de seguridad del Servicio o de
               cualquier sitio web relacionado, otros sitios web, o Internet,
               (l) si eres residente de uno de los países sancionados por la
               OFAC, (m) si eres menor a 18 años de edad. Nos reservamos el
               derecho de terminar su uso del Servicio o de cualquier sitio web
               relacionado por violar cualquiera de los usos prohibidos.
            </p>
            <p className="mt-3 font-semibold uppercase">
               SECCIÓN 13 - RENUNCIA DE GARANTÍAS; LIMITACIÓN DE RESPONSABILIDAD
            </p>
            <p>
               No garantizamos, representamos ni aseguramos que su uso de
               nuestros Servicios será ininterrumpido, oportuno, seguro o libre
               de errores.
            </p>
            <p>
               No garantizamos que los resultados que pueden obtenerse del uso
               de nuestros Servicios serán precisos o confiables.
            </p>
            <p>
               Usted acuerda que de vez en cuando podemos eliminar cualquiera de
               nuestros Servicios por períodos indefinidos de tiempo o cancelar
               cualquiera de nuestros Servicios en cualquier momento, sin previo
               aviso.
            </p>
            <p>
               Usted expresamente acuerda que su uso, o incapacidad para usar,
               cualquiera de nuestros Servicios es bajo su propio riesgo.
               Nuestros Servicios y todos los Productos entregados a través de
               los Servicios son (excepto como expresamente indicado por
               nosotros) proporcionados &apos;tal cual&apos; y &apos;según estén
               disponibles&apos; para su uso, sin ninguna representación,
               garantías o condiciones de ningún tipo, ya sea expresa o
               implícita, incluyendo todas las garantías o condiciones
               implícitas de comercialidad, calidad comercial, aptitud para un
               propósito particular, durabilidad, título, y no violación.
            </p>
            <p>
               En ningún caso {contact.company}, nuestros directores,
               funcionarios, empleados, afiliados, agentes, contratistas,
               pasantes, proveedores, proveedores de servicios o licenciantes
               serán responsables por cualquier lesión, pérdida, reclamo, o
               cualquier daño directo, indirecto, incidental, punitivo, especial
               o consecuente de cualquier tipo, incluyendo, sin limitación,
               lucro cesante, pérdida de ingresos, ahorros perdidos, pérdida de
               datos, costos de reemplazo, o cualquier daño similar, ya sea
               basado en contrato, agravio (incluyendo negligencia),
               responsabilidad estricta u otra teoría legal, derivada de su uso
               de cualquiera de nuestros Servicios o cualquier Producto, o por
               cualquier otro reclamo relacionado de alguna manera con su uso de
               nuestros Servicios o algún Producto, incluyendo, pero no limitado
               a, cualquier error u omisión en cualquier contenido, o cualquier
               pérdida o daño de cualquier tipo incurrido como resultado del uso
               del Servicio o cualquier contenido (o producto) publicado,
               transmitido o puesto a disposición a través de nuestros
               Servicios, incluso si se les ha informado de su posibilidad.
               Debido a que algunos estados o jurisdicciones no permiten la
               exclusión o la limitación de la responsabilidad por daños
               consecuentes o incidentales, en dichos estados o jurisdicciones,
               nuestra responsabilidad se limitará en la medida máxima permitida
               por la ley.
            </p>
            <p>
               Los usuarios son responsables de mantener la confidencialidad de
               sus cuentas.
            </p>
            <p className="mt-3 font-semibold uppercase">
               SECCIÓN 14 - INDEMNIZACIÓN
            </p>
            <p>
               Usted acepta indemnizar, defender y eximir de responsabilidad a
               {contact.company} y nuestras subsidiarias, afiliadas, socios,
               directores, agentes, contratistas, licenciantes, proveedores de
               servicios, subcontratistas, proveedores, pasantes y empleados,
               libres de cualquier reclamo o demanda, incluidos honorarios
               razonables de abogados, hechos por cualquier tercero debido a o
               derivados de su incumplimiento de estos Términos de Servicio o
               los documentos que incorporan por referencia, o su violación de
               cualquier ley o los derechos de un tercero.
            </p>
            <p className="mt-3 font-semibold uppercase">
               SECCIÓN 15 - SEPARABILIDAD
            </p>
            <p>
               En el caso de que se determine que alguna disposición de estos
               Términos de Servicio sea ilegal, nula o inaplicable, dicha
               disposición seguirá siendo aplicable en la medida máxima
               permitida por la ley aplicable, y la parte inaplicable se
               considerará separada de estos Términos de Servicio, dicha
               determinación no afectará la validez y aplicabilidad de ninguna
               otra disposición restante.
            </p>
            <p className="mt-3 font-semibold uppercase">
               SECCIÓN 16 - TERMINACIÓN
            </p>
            <p>
               Las obligaciones y responsabilidades de las partes incurridas
               antes de la fecha de terminación sobrevivirán a la terminación de
               este acuerdo para todos los fines.
            </p>
            <p>
               Estos Términos de Servicio son efectivos a menos y hasta que sean
               terminados por usted o por nosotros. Usted puede terminar estos
               Términos de Servicio en cualquier momento notificándonos que ya
               no desea utilizar nuestros Servicios, o cuando deje de utilizar
               nuestro sitio.
            </p>
            <p>
               Si a nuestro criterio exclusivo usted no cumple, o sospechamos
               que no ha cumplido, con algún término o disposición de estos
               Términos de Servicio, también podemos terminar este acuerdo en
               cualquier momento sin previo aviso y usted seguirá siendo
               responsable de todas las cantidades adeudadas hasta e incluyendo
               la fecha de terminación; y/o en consecuencia, podemos negarle el
               acceso a nuestros Servicios (o parte de ellos).
            </p>
            <p className="mt-3 font-semibold uppercase">
               SECCIÓN 17 - ACUERDO COMPLETO
            </p>
            <p>
               El hecho de que no hagamos valer o ejercer cualquier derecho o
               disposición de estos Términos de Servicio no constituirá una
               renuncia a dicho derecho o disposición.
            </p>
            <p>
               Estos Términos de Servicio y cualquier política o reglas de
               operación publicadas por nosotros en este sitio o en relación con
               nuestros servicios constituyen el acuerdo completo y la
               comprensión entre usted y nosotros y rigen su uso del servicio,
               sustituyendo cualquier acuerdo previo o contemporáneo,
               comunicaciones y propuestas, ya sea oral o escrito, entre usted y
               nosotros (incluyendo, pero no limitado a, cualquier versión
               anterior de los Términos de Servicio).
            </p>
            <p>
               Cualquier ambigüedad en la interpretación de estos Términos de
               Servicio no se interpretará en contra de la parte redactora.
            </p>
            <p className="mt-3 font-semibold uppercase">
               SECCIÓN 18 - LEY APLICABLE
            </p>
            <p>
               Estos Términos de Servicio y cualquier acuerdo separado mediante
               el cual le proporcionamos Servicios estarán regidos por y se
               interpretarán de acuerdo con las leyes de {contact.country}.
            </p>
            <p>
               Cualquier compra, disputa o reclamación que surja de o en
               relación con este sitio web y sus Productos y Servicios se regirá
               e interpretará de conformidad con las leyes de {contact.country}.
            </p>
            <p className="mt-3 font-semibold uppercase">
               SECCIÓN 19 - CAMBIOS A LOS TÉRMINOS DE SERVICIO
            </p>
            <p>
               Puede revisar la versión más reciente de los Términos de Servicio
               en cualquier momento en esta página.
            </p>
            <p>
               Nos reservamos el derecho, a nuestra sola discreción, de
               actualizar, cambiar o reemplazar cualquier parte de estos
               Términos de Servicio mediante la publicación de actualizaciones y
               cambios en nuestro sitio web. Es su responsabilidad verificar
               nuestro sitio web periódicamente en busca de cambios. Su uso
               continuado o acceso a nuestro sitio web o nuestros Servicios
               después de la publicación de cualquier cambio en estos Términos
               de Servicio constituye la aceptación de dichos cambios.
            </p>
            <p className="mt-3 font-semibold uppercase">
               SECCIÓN 20 - INFORMACIÓN DE CONTACTO
            </p>
            <p>Nuestra información de contacto se encuentra a continuación:</p>
            <p>
               {contact.company}
               <br />
               {contact.email}
               <br />
               {contact.address}
               <br />
               P.O. Box {contact.pobox}, {contact.emirate}, {contact.country}.
               <br />
               {contact.phone}
               <br />
            </p>
            <p>
               Número de Licencia: {contact.tradeLicenseNumber}
               <br />
               Número de Registro de Tax: {contact.taxRegistrationNumber}
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
                  {tTerms("title")}
               </h1>
               {terms[locale]}
            </div>
         </section>
      </main>
   );
}
