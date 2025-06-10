import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  metadataBase: new URL("https://muslifie.com/"),
  title: "Muslifie",
  description: "All-in-One travel app for All.",
  openGraph: {
    title: "Muslifie",
    description: "All-in-One travel app for All.",
    url: "./",
    siteName: "Muslifie",
    images: ["/favicon/icon-512x512.png"],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    title: "Muslifie",
    description: "All-in-One travel app for All.",
    card: "summary_large_image",
    images: ["/favicon/icon-512x512.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon/favicon.ico" type="image/svg+xml" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/favicon/apple-icon.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/favicon/icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/favicon/icon-512x512.png" />
        <link rel="manifest" href="/favicon/manifest.json" />
      </head>

      <body className={"font-notosans antialiased"}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
