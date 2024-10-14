import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Box, Badge } from '@radix-ui/themes';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Carousel from '@/components/Carousel';
import Link from 'next/link';
import { getAllLists } from '@/libs/microcms';

export default async function Home() {
  const allLists = await getAllLists();

  return (
    <div className="container mx-auto px-4 py-8">
      {<Carousel />}
      <section className="mb-12">
      </section>

      <section className="mb-12">
        <h2 className="text-3xl  pb-4 border-b border-blue-500 text-center font-semibold m-8">
          <Link href="/news">最新情報</Link>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {allLists.map((list) => (
            <Link key={list.id} href={`/${list.domain}/${list.id}`} >
              <Card className="transition transform hover:shadow-lg hover:border-blue-500 hover:border-2 hover:scale-105" key={list.id}>
                <CardHeader>
                  <CardTitle className='border-b border-blue-500 mb-1 pb-2'>{list.title}</CardTitle>
                  <div className='flex justify-between'>
                    <CardDescription>{list.publishedAt.split('T')[0]}</CardDescription>
                    <Badge variant='solid' color="indigo">{list.domainJ}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  {/* <div className="prose text-gray-700 mx-auto" dangerouslySetInnerHTML={{ __html: list.content }}
            /> */}
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section >

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
    </div >
  );
}