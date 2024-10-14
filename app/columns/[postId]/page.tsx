import { notFound } from "next/navigation";
import parse from "html-react-parser";
import { getDetail, getList } from "@/libs/microcms";

const domain = 'columns'
export async function generateStaticParams() {
    const { contents } = await getList(domain);

    const paths = contents.map((post: any) => {
        return {
            postId: post.id,
        };
    });

    return [...paths];
}

export default async function StaticDetailPage({
    params: { postId },
}: {
    params: { postId: string };
}) {
    const post = await getDetail(domain,postId);

    // ページの生成された時間を取得
    if (!post) {
        notFound();
    }

    return (
        <div>
            <h1 className="text-5xl font-bold flex justify-center m-6 pt-5">{post.title}</h1>
            <div className="prose text-gray-700 mx-auto" dangerouslySetInnerHTML={{ __html: post.content }}
            />
        </div>
    );
}