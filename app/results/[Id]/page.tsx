import { notFound } from "next/navigation";
import parse from "html-react-parser";
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
    const result = await getDetail(domain,Id);

    // ページの生成された時間を取得

    if (!result) {
        notFound();
    }

    return (
        <div>
            <h1 className="text-5xl font-bold flex justify-center m-6 pt-5">{result.title}</h1>
            <div className="prose text-gray-700 mx-auto" dangerouslySetInnerHTML={{ __html: result.content }}
            />
        </div>
    );
}