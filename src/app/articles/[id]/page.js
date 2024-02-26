import Input from "@/app/components/Input/Input";
import Textarea from "@/app/components/Textarea/Textarea";
import {addComment} from "@/app/actions/actions";

export default async function Article({params}){

    const response = await fetch(`http://localhost:3000/api/article?id=${params.id}`, {
        next: {tags: ['comments']}
    })
    const data = await response.json();

    return(
        <main className="main-container">
            <h1 className="main-title">{data.title}</h1>
            <article className="my-5">
                <p>
                    {data.content}
                </p>
            </article>
            <div className="w-3/5 mx-auto">
                <div className="flex flex-col gap-y-3">
                    {data.comments.map((item, key) => {
                        const date = new Date(item.createdAt).toLocaleDateString();
                        return (
                            <div key={key} className="border-2 border-sky-900 rounded p-5">
                                <p>{item.content}</p>
                                <small>A été écrit le {date} par {item.author}</small>
                            </div>
                        )
                    })}
                </div>
                <form action={addComment} className="bg-sky-800 p-5 mt-5 rounded flex flex-col gap-y-3">
                    <Input title="Pseudo" placeholder="Votre pseudo" name="author" />
                    <input type="hidden" id="articleId" name="articleId" value={data.id}/>
                    <Textarea name="content" placeholder="Votre commentaire" title="Contenu" rows="6" />
                    <button className="button-secondary">Ajouter un commentaire</button>
                </form>
            </div>
        </main>
    )
}