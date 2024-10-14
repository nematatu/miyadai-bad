import Link from "next/link";
import { getList } from "@/libs/microcms";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { CalendarIcon, Trophy, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const revalidate = 10;
const domain = 'results';

export default async function StaticPage() {
  const contents = await getList(domain);

  if (!contents || contents.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <Card className="w-full max-w-md shadow-xl">
          <CardHeader className="bg-blue-600 text-white">
            <CardTitle className="text-center text-2xl font-bold">試合結果がありません</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <p className="text-center text-gray-600">現在、表示できる試合結果はありません。</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">試合結果</h1>
        </header>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {contents.map((post: any) => (
            <Card key={post.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="bg-gradient-to-r from-gray-700 to-gray-800 text-white p-4">
                <CardTitle className="text-xl font-semibold line-clamp-2">
                  <Link href={`/${domain}/${post.id}`} className="hover:underline">
                    {post.title}
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  <time dateTime={post.publishedAt}>
                    {new Date(post.publishedAt).toLocaleDateString('ja-JP', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </time>
                </div>
                {post.excerpt && (
                  <p className="text-gray-600 line-clamp-3">{post.excerpt}</p>
                )}
              </CardContent>
              <CardFooter className="bg-gray-50 p-4 flex justify-between items-center">
                <Badge variant="secondary" className="flex items-center">
                  <Trophy className="mr-1 h-4 w-4" />
                  結果を見る
                </Badge>
                <Link href={`/${domain}/${post.id}`} className="text-blue-600 hover:text-blue-800 flex items-center">
                  詳細
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}