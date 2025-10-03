// app/layout.js
import "../../public/assets/css/font-awesome.min.css";
import "../../public/assets/css/themify-icons.css";
import "../../public/assets/css/animate.css";
import "../../public/assets/css/flaticon.css";
import "../../public/assets/css/custom.css";
import "../../public/assets/sass/style.scss";
import "../../public/assets/sass/style.css";
import Script from "next/script";

export const metadata = {
  metadataBase: new URL("https://sevakarmy.com"), // ✅ yeh add karna zaroori hai
  title: "Join SevakArmy: Be a Force for Positive Social Change",
  description:
    "Whether you're a student, retiree, or influencer, find projects that align with your passion and skills to create lasting social impact",
  keywords:
    "Verified NGOs, Social work, CSR activities, Community impact, Volunteering Certificate, NGO registration",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "Join SevakArmy: Be a Force for Positive Social Change",
    description:
      "Whether you're a student, retiree, or influencer, find projects that align with your passion and skills to create lasting social impact",
    url: "https://sevakarmy.com/",
    siteName: "SevakArmy",
    images: [
      {
        url: "/og-image.jpg", // ✅ ye image /public/ folder me rakho
        width: 1200,
        height: 630,
        alt: "SevakArmy Open Graph Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Join SevakArmy: Be a Force for Positive Social Change",
    description:
      "Whether you're a student, retiree, or influencer, find projects that align with your passion and skills to create lasting social impact",
    images: ["/og-image.jpg"],
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://sevakarmy.com/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
          crossOrigin="anonymous"
        />
        <Script id="gtm-script" strategy="afterInteractive">
          {`
  (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id=' + i + dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','GTM-58JTSZ6D');
`}
        </Script>
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-58JTSZ6D"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
