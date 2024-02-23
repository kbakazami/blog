import "./globals.css";
import Breadcrumbs from "@/app/components/Breadcrumbs/Breadcrumbs";
import Navbar from "@/app/components/Navbar/Navbar";
import Footer from "@/app/components/Footer/Footer";

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body className="min-h-screen">
            <Navbar />
            <Breadcrumbs />
                {children}
            <Footer />
        </body>
        </html>
    );
}
