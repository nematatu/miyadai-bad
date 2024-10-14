import { notFound } from "next/navigation";
import { getDetail, getList } from "@/libs/microcms";

const domain = 'columns';

export async function generateStaticParams() {
    const contents = await getList(domain);

    // パスの形式を修正
    const paths = contents.map((post: any) => {
        return {
            params: {
                postId: post.id,
            },
        };
    });

    return paths;
}

export default async function StaticDetailPage({
    params: { postId },
}: {
    params: { postId: string };
}) {
    let result;
    try {
        result = await getDetail(domain, postId);
    } catch (error) {
        console.error('Error fetching detail:', error);
        notFound(); // エラー発生時に404を返す
        return; // ここで終了
    }

    if (!result) {
        notFound(); // データがない場合も404を返す
        return;
    }

    return (
        <div>
            <h1 className="text-5xl font-bold flex justify-center m-6 pt-5">{result.title}</h1>
            <div
                className="prose text-gray-700 mx-auto"
                dangerouslySetInnerHTML={{ __html: result.content }}
            />
        </div>
    );
}
