export default async function Article({params}){

    const response = await fetch(`http://localhost:3000/api/article?id=${params.id}`)
    const data = await response.json();

    return(
        <main className="main-container">
            <h1 className="main-title">{data.title}</h1>
            <p className="mt-5">
                {data.content}
            </p>
        </main>
    )
}