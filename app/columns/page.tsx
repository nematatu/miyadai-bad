import Link from "next/link";
import { getList } from "@/libs/microcms";
import { createClient } from "microcms-js-sdk";

export const revalidate=10;
const domain = 'columns'
export default async function StaticPage() {
  const contents  = await getList(domain);

  if (!contents || contents.length === 0) {
    return <h1>No contents</h1>;
  }

  return (
    <div>
      <ul>
        {contents.map((post:any) => {
          return (
            <li key={post.id}>
              <Link href={`/${domain}/${post.id}`}>{post.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}