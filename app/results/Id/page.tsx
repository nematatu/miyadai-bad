import { notFound } from "next/navigation";
import { getDetail, getList } from "@/libs/microcms";

const domain = 'results'
export async function generateStaticParams() {
    const { contents } = await getList(domain);

    const paths = contents.map((result: any) => {
        return {
            Id: result.id,
        };
    });

    return [...paths];
}

export default async function StaticDetailPage({
    params: { Id },
}: {
    params: { Id: string };
}) {
    let result;
    try {
        result = await getDetail(domain, Id);
    } catch (error) {
        console.error('Error fetching detail:', error);
        notFound();
        return;
    }

    if (!result) {
        notFound();
        return;
    }

    return (
        <div>
            <h1 className="text-5xl font-bold flex justify-center m-6 pt-5">{result.title}</h1>
            <div className="prose text-gray-700 mx-auto" dangerouslySetInnerHTML={{ __html: result.content }}
            />
        </div>
    );
}