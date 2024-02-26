import prisma from "@/app/lib/prisma";

export async function GET(request){
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    try {
        const article = await prisma.article.findUnique({
            where: {
                id: parseInt(id)
            },
            include: {
                comments: true
            }
        })

        return Response.json(article);
    }catch (e) {
        return Response.json({message: "L'article n'a pas été trouvé !"}, {status: 404})
    }

}

export async function POST(request){
    const body = await request.json();

    try {
        const article = await prisma.article.create({
            data: {
                title: body.title,
                author: body.author,
                content: body.content
            }
        });

        return Response.json(article);
    }catch (e) {
        Response.json({message: "Impossible de créer un article !"})
    }
}