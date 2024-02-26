import prisma from "@/app/lib/prisma";

export async function POST(request){

    const body = await request.json();

    try {
        const comment = await prisma.comment.create({
            data: {
                author: body.author,
                content: body.content,
                articleId: body.articleId
            }
        })

        return Response.json(comment);
    }catch (e) {
        return Response.json({message: "Impossible de crée un commentaire"})
    }
}