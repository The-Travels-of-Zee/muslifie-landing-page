export const metadata = {
  metadataBase: new URL("https://muslifie.com/privacy-policy"),
  title: "Privacy Policy - Muslifie",
  description: "All-in-One travel app for All.",
  openGraph: {
    title: "Privacy Policy - Muslifie",
    description: "All-in-One travel app for All.",
    url: "./privacy-policy",
    siteName: "Muslifie",
    images: ["/favicon/icon-512x512.png"],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    title: "Privacy Policy - Muslifie",
    description: "All-in-One travel app for All.",
    card: "summary_large_image",
    images: ["/favicon/icon-512x512.png"],
  },
};

const PrivacyPolicyLayout = ({ children }) => {
  return <main>{children}</main>;
};

export default PrivacyPolicyLayout;
