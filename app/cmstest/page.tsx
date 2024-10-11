import { client } from '@/libs/client';

export default async function Home() {
  // サーバーサイドでデータを取得
  const cmsData = await client.get({
    endpoint: 'blogs',
  });

  // 取得したデータをコンソールに出力（サーバーサイドコンソールで確認）
  console.log(cmsData);

  const contentHTML=cmsData.contents[0].content;
  return (
    <div>
        {cmsData.contents.map((item: any) => (
          <div key={item.key}>
            <h1>{item.title}</h1>
            <div dangerouslySetInnerHTML={{__html:contentHTML}}/>
          </div>
        ))}
    </div>
  );
}
