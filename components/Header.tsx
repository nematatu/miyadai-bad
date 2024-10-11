import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Header() {
  return (
    <header className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          部活のHP
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/" className="hover:underline">ホーム</Link></li>
            <li><Link href="/about" className="hover:underline">部活について</Link></li>
            <li><Link href="/activities" className="hover:underline">活動内容</Link></li>
            <li><Link href="/members" className="hover:underline">メンバー</Link></li>
            <li><Button variant="secondary">お問い合わせ</Button></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}