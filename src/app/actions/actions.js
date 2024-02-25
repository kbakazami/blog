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