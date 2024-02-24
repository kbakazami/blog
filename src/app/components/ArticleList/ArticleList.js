import Link from "next/link";

export default async function ArticleList(){

    const response = await fetch('http://localhost:3000/api/articles');
    const { data } = await response.json();

    return(
        <div className="flex flex-col gap-y-5">
            {data.posts.map((item, key) => (
                <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
                    <img
                        alt=""
                        src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                        className="h-56 w-full object-cover"
                    />

                    <div className="bg-white p-4 sm:p-6">
                        <time dateTime="2022-10-10" className="block text-xs text-gray-500"> 10th Oct 2022</time>

                        <a href="#">
                            <h3 className="mt-0.5 text-lg text-gray-900">{item.title}</h3>
                        </a>

                        <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                            {item.body}
                        </p>
                        <Link href={`/articles/${item.id}`}>
                            <button className="button-primary">
                                Voir
                            </button>
                        </Link>
                    </div>
                </article>
            ))}
        </div>
    )
}