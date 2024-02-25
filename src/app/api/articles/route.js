import prisma from "@/app/lib/prisma";

export async function GET() {
    try {
        const articles = await prisma.article.findMany();
        return Response.json(articles)
    }catch (e) {
        return Response.json({message: "Les articles n'ont pas été trouvé"}, {status: 404})
    }
}