import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Carousel from '@/components/Carousel';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      {<Carousel/>}
      <section className="mb-12">
        <h1 className="text-4xl font-bold mb-4">宮崎大学 バドミントン部です。</h1>
        <p className="text-xl mb-6">ここでは、私たちの活動や成果を紹介しています。</p>
        <Button>活動予定を見る</Button>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">最新の活動</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <Card key={i}>
              <CardHeader>
                <CardTitle>活動報告 {i}</CardTitle>
                <CardDescription>2023年5月{i}日</CardDescription>
              </CardHeader>
              <CardContent>
                <p>先日の大会で素晴らしい成績を収めました！詳細はこちら...</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">部活の写真</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div key={i} className="relative aspect-square">
              <Image
                src={`https://source.unsplash.com/random/300x300?sports&sig=${i}`}
                alt={`部活の写真 ${i}`}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          ))}
        </div>
      </section> */}
    </div>
  );
}