import Link from "next/link";
import { getList } from "@/libs/microcms";
import { createClient } from "microcms-js-sdk";

const domain = 'results'
export default async function StaticPage() {
  const { contents } = await getList(domain);
  // ページの生成された時間を取得

  if (!contents || contents.length === 0) {
    return <h1>No contents</h1>;
  }

  return (
    <div>
      <ul>
        {contents.map((post:any) => {
          return (
            <li className="flex jusitify-center" key={post.id}>
              <Link href={`/${domain}/${post.id}`}>{post.title}</Link>
              <p className="ml-3">{post.publishedAt.split('T')[0]}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

// export default async function StaticPage() {    
//     return (
//         <div>
//             <h1>Static Page</h1>
//         </div>
//     )
// }