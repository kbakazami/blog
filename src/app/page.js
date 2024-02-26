'use client'
import {useEffect, useState} from "react";
import Link from "next/link";

export default function Home() {

    const [articles, setArticles] = useState({});
    const [article, setArticle] = useState();

    useEffect(() => {
        fetch("http://localhost:3000/api/articles")
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setArticles(data);
            })
    }, []);

    const getRandomInt = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min);
    }

    const handleArticle = () => {
        const index = getRandomInt(0, articles.length);
        const filteredArticle = articles[index];
        setArticle(filteredArticle);
    }

    return (
        <main className="main-container">
            <h1 className="main-title">Page d'accueil</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aspernatur autem commodi consequuntur cum
                dicta distinctio exercitationem fugiat hic labore libero, nulla numquam odit perferendis perspiciatis,
                quibusdam quos suscipit vitae. A dolorem dolorum eaque eos harum ipsum magni perferendis quod ratione
                sapiente! A esse hic possimus quo recusandae totam voluptatibus?
            </p>
            <button onClick={handleArticle} className="button-primary flex mx-auto my-5">
                Article aléatoire
            </button>
            {article &&
                <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
                    <img
                        alt=""
                        src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                        className="h-56 w-full object-cover"
                    />

                    <div className="bg-white p-4 sm:p-6">
                        <time dateTime="2022-10-10" className="block text-xs text-gray-500"> 10th Oct 2022</time>

                        <a href="#">
                            <h3 className="mt-0.5 text-lg text-gray-900">{article.title}</h3>
                        </a>

                        <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                            {article.content}
                        </p>
                        <Link href={`/articles/${article.id}`}>
                            <button className="button-primary">
                                Voir
                            </button>
                        </Link>
                    </div>
                </article>
            }
        </main>
    );
}
