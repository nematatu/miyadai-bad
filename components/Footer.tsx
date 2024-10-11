import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">リンク</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:underline">ホーム</Link></li>
              <li><Link href="/about" className="hover:underline">部活について</Link></li>
              <li><Link href="/activities" className="hover:underline">活動内容</Link></li>
              <li><Link href="/members" className="hover:underline">メンバー</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">お問い合わせ</h3>
            <p>メール: info@bukatsu-hp.example.com</p>
            <p>電話: 03-1234-5678</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">フォローする</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary">Twitter</a>
              <a href="#" className="hover:text-primary">Instagram</a>
              <a href="#" className="hover:text-primary">Facebook</a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2023 部活のHP. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}