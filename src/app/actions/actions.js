'use server';

import {redirect} from "next/navigation";
import {revalidateTag} from "next/cache";

export async function createArticle(formData){

    revalidateTag('article');

    const rawFormData = {
        author: formData.get('author'),
        title: formData.get('title'),
        content: formData.get('content'),
    }

    const res = fetch('http://localhost:3000/api/article', {
        method: "POST",
        body: JSON.stringify(rawFormData)
    })

    redirect('/articles');
}

export async function addComment(formData){

    revalidateTag('comments');

    const rawFormData = {
        author: formData.get('author'),
        content: formData.get('content'),
        articleId: parseInt(formData.get('articleId'))
    }

    const res = fetch('http://localhost:3000/api/comments', {
        method: "POST",
        body: JSON.stringify(rawFormData)
    })

}
