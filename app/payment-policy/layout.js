import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata = {
  metadataBase: new URL("https://muslifie.com/payment-policy"),
  title: "Payment Policy - Muslifie",
  description: "All-in-One travel app for All.",
  openGraph: {
    title: "Payment Policy - Muslifie",
    description: "All-in-One travel app for All.",
    url: "./payment-policy",
    siteName: "Muslifie",
    images: ["/favicon/icon-512x512.png"],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    title: "Payment Policy - Muslifie",
    description: "All-in-One travel app for All.",
    card: "summary_large_image",
    images: ["/favicon/icon-512x512.png"],
  },
};

const PaymentPolicyLayout = ({ children }) => {
  return (
    <main>
      <Navbar />
      {children}
      <Footer />
    </main>
  );
};

export default PaymentPolicyLayout;
