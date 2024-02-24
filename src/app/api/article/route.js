import {NextResponse} from "next/server";

export async function GET(request){
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    console.log(id);

    const res = await fetch(`https://dummyjson.com/posts/${id}`, {
        headers: {
            'Content-Type': 'application/json',
        }
    });

    const data = await res.json()

    return NextResponse.json({ data });
}