import createNextIntlPlugin from "next-intl/plugin";

const cspHeader = `
    default-src 'self';
    script-src 'self' 'unsafe-eval' 'unsafe-inline';
    style-src 'self' 'unsafe-inline';
    img-src 'self' blob: data:;
    font-src 'self' https://fonts.googleapis.com https://fonts.gstatic.com;
    frame-src 'self' https://www.google.com https://maps.googleapis.com;
    connect-src 'self' https://maps.googleapis.com;
    object-src 'none';
    frame-ancestors 'none';
    upgrade-insecure-requests;
`;
const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
   async headers() {
      return [
         {
            source: "/(.*)",
            headers: [
               {
                  key: "Content-Security-Policy",
                  value: cspHeader.replace(/\n/g, "")
               }
            ]
         }
      ];
   }
};

export default withNextIntl(nextConfig);
