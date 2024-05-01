import createMiddleware from "next-intl/middleware";
import { locales } from "@/components/locales";

export default createMiddleware({
	locales,
	defaultLocale: "en"
});

export const config = {
	matcher: ["/", `/(${locales.join("|")})/:path*`]
};
