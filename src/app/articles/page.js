import ArticleList from "@/app/components/ArticleList/ArticleList";

export default function Articles(){
    return(
        <main className="main-container">
            <h1 className="main-title">Liste des articles</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam assumenda at aut consectetur culpa cum cupiditate delectus eaque enim excepturi exercitationem expedita fugiat harum illo, libero magni minima molestias mollitia nihil nostrum odit officiis porro praesentium quam rerum sint tenetur. Consequuntur et id illum maiores maxime natus provident temporibus vel.
            </p>
            <ArticleList />
        </main>
    )
}