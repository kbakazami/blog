export default async function Article({params}){

    const response = await fetch(`http://localhost:3000/api/article?id=${params.id}`)
    const { data } = await response.json();

    return(
        <main className="main-container">
            <h1 className="main-title">{data.title}</h1>
            {data.tags.map((item, key) => (
                <span key={key} className="whitespace-nowrap rounded-full bg-sky-100 px-2.5 py-0.5 text-sm text-sky-700">
                    {item}
                </span>
            ))}
            <p className="mt-5">
                {data.body}
            </p>
        </main>
    )
}