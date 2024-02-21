import "./globals.css";

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body className="min-h-screen">
        <nav className="text-white bg-sky-800 py-5">
            <div className="main-container flex justify-between">
                <div>
                    <h2 className="text-2xl">
                        <a href="/">
                            Blog
                        </a>
                    </h2>
                </div>
                <ul className="flex gap-3 items-center">
                    <li>
                        <a href="/articles">
                            Articles
                        </a>
                    </li>
                    <li>
                        <a href="/contact">
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
        {children}
        <footer className="text-white bg-sky-800 py-10 sticky top-[100vh]">
            <div className="main-container flex justify-between">
                <div>
                    <h2 className="uppercase text-4xl">Logo</h2>
                </div>
                <ul className="flex flex-col">
                    <li>
                        <a href="/articles">
                            Articles
                        </a>
                    </li>
                    <li>
                        <a href="/contact">
                            Contact
                        </a>
                    </li>
                </ul>
                <div className="text-center">
                    <h3>Réseaux sociaux</h3>
                    <div className="flex gap-3">
                        <a href="#">Facebook</a>
                        <a href="#">Instagram</a>
                        <a href="#">Twitter</a>
                    </div>
                </div>
            </div>
        </footer>
        </body>
        </html>
    );
}
