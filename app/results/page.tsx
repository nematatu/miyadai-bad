import Link from "next/link";

const domain = 'results';

// ここでデータを取得
export default async function StaticPage() {
  const { contents } = await getList(domain);

  if (!contents || contents.length === 0) {
    return <h1>No contents</h1>;
  }

  return (
    <div>
      <ul>
        {contents.map((post: any) => {
          return (
            <li className="flex justify-center" key={post.id}>
              <Link href={`/${domain}/${post.id}`}>{post.title}</Link>
              <p className="ml-3">{post.publishedAt.split('T')[0]}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

// データを取得する関数
export const getList = async (domain: string) => {
  const endpoint = `https://miyadai-bad.microcms.io/api/v1/${domain}`;
  const response = await fetch(endpoint, {
    method: 'GET',
    headers: {
      'X-MICROCMS-API-KEY': process.env.MICROCMS_API_KEY || '',
      'Content-Type': 'application/json',
    },
    cache: 'no-store',
  });

  if (!response.ok) {
    const errorData = await response.text(); // エラー詳細を取得
    console.error(`Error fetching data: ${response.status} ${errorData}`);
    throw new Error(`Failed to fetch data: ${response.status}`);
  }

  const data = await response.json();
  return data;
};
