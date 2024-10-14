import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Instagram } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8 min-h-screen flex items-center justify-center">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">お問い合わせ</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-center text-gray-600">
            お問い合わせは、Instagramのダイレクトメッセージにてお願いいたします。
          </p>
          <div className="flex justify-center">
            <Link href="https://www.instagram.com/miyazakidaibadominton" target="_blank" rel="noopener noreferrer">
              <Button className="bg-blue-600 hover:bg-blue-800 text-white">
                <Instagram className="mr-2 h-5 w-5" />
                Instagramでメッセージを送る
              </Button>
            </Link>
          </div>
          <p className="text-sm text-center text-gray-500 mt-4">
            InstagramのDMから、お気軽にお問い合わせください。
            できるだけ早くご返信いたします。
          </p>
        </CardContent>
      </Card>
    </div>
  )
}