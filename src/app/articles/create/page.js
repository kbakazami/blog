import Input from "@/app/components/Input/Input";
import Textarea from "@/app/components/Textarea/Textarea";
import {createArticle} from "@/app/actions/actions";

export default function CreateArticle(){
    return(
        <main className="main-container">
            <h1 className="main-title">Créer un article</h1>
            <form action={createArticle} className="bg-sky-800 w-3/5 p-10 rounded flex flex-col gap-y-3 mx-auto">
                <Input name="author" title="Auteur" placeholder="Votre pseudo" />
                <Input name="title" title="Titre" placeholder="Titre de l'article" />
                <Textarea name="content" title="Contenu" placeholder="Contenu de l'article" rows="8" />
                <button className="button-secondary mt-2">Créer</button>
            </form>
        </main>
    )
}