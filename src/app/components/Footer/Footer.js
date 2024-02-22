import Link from "next/link";

export default function Footer(){
    return (
        <footer className="text-white bg-sky-800 py-10 sticky top-[100vh]">
            <div className="main-container flex justify-between">
                <div>
                    <h2 className="uppercase text-4xl">Logo</h2>
                </div>
                <ul className="flex flex-col">
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
                <div className="text-center">
                    <h3>Réseaux sociaux</h3>
                    <div className="flex gap-3">
                        <Link href="#">Facebook</Link>
                        <Link href="#">Instagram</Link>
                        <Link href="#">Twitter</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}