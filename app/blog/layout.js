import AppBanner from "@/components/AppBanner";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata = {
  metadataBase: new URL("https://muslifie.com/blogs"),
  title: "Blogs - Muslifie",
  description: "All-in-One travel app for All.",
  openGraph: {
    title: "Blogs - Muslifie",
    description: "All-in-One travel app for All.",
    url: "./blogs",
    siteName: "Muslifie",
    images: ["/favicon/icon-512x512.png"],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    title: "Blogs - Muslifie",
    description: "All-in-One travel app for All.",
    card: "summary_large_image",
    images: ["/favicon/icon-512x512.png"],
  },
};

const AllBlogsLayout = ({ children }) => {
  return (
    <main>
      <Navbar />
      {children}
      <AppBanner />
      <Footer />
    </main>
  );
};

export default AllBlogsLayout;
