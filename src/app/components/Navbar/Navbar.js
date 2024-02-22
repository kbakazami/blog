import Link from "next/link";

export default function Navbar(){
    return (
        <nav className="text-white bg-sky-800 py-5">
            <div className="main-container flex justify-between">
                <div>
                    <h2 className="text-2xl">
                        <Link href="/">
                            Blog
                        </Link>
                    </h2>
                </div>
                <ul className="flex gap-3 items-center">
                    <li>
                        <Link href="/articles">
                            Articles
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact">
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}