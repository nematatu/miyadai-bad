import Link from 'next/link';
import { notoSerifJP } from '@/font/font'
import '@/app/styles/Header.css'
export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300">
      <div className='container mx-auto px-4 sm:px-20 py-6 divide-y divide-gray-400'>
        <div className='flex flex-col sm:flex-row justify-between sm:ml-8 mb-4 space-y-4 sm:space-y-0'>
          <div className='miyadai&contact flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-9'>
            <Link href="/" className={`${notoSerifJP.className} text-xl sm:text-2xl font-bold text-center sm:text-left`}>
              宮崎大学 <br />
              バドミントン部
            </Link>
            <div className='flex flex-col sm:flex-row items-center sm:items-end space-y-2 sm:space-y-0'>
              <span className="text-sm sm:text-base">お問い合わせ:</span>
              <Link rel="noopener noreferrer" target='_blank' className='ml-0 sm:ml-2 text-blue-500 text-sm sm:text-base break-all' href="https://www.instagram.com/miyazakidaibadominton/">
              https://www.instagram.com/miyazakidaibadominton/
              </Link>
            </div>
          </div>
          <div className="hidden  flex items-center sm:items-end justify-center sm:justify-start">
            <Link href="/">
              <svg width="25" height="25" viewBox="0 0 290 234" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M0.5 233.5C19.3 191.5 17.3333 171.333 14 166.5C5.66667 146.667 -5.1 96 18.5 52C26 70.5 35.3333 59.3333 37.5 53C39.7237 46.5 35.4 37.2 23 42C34.6667 16.3333 73.1 -24.1 133.5 19.5C157 43.6667 202 99.6 194 130C190.333 146.5 170.6 180.8 121 186C119.333 186.5 117.3 188.4 122.5 192C129 196.5 187.5 179.5 202.5 132C201 141 212.9 167.9 272.5 203.5C279.833 210 293.4 224.7 289 231.5L0.5 233.5ZM93.5 39.5C85.3333 30.3333 64.4 17.5 46 39.5C40.8 50.3 40.8333 70 41.5 78.5C39.9 92.5 56.8333 132 65.5 150C83.5 126 92.6667 100 95 90C101.4 65.6 96.6667 46.1667 93.5 39.5ZM129 39.5C124.667 38 115 40 116 52.5C116.16 54.4944 119.5 64.5 130.5 60.5C137.5 56.5 134.778 41.5 129 39.5Z" fill="white" />
                <path d="M54.5 42C64.9 32 79.8333 37.8333 86 42C89.3333 49.5 94.3 69.2 87.5 88C84.5 98.5 76.2 122.2 67 133C56.8333 114.833 40.1 71.2 54.5 42Z" fill="white" />
              </svg>
            </Link>
          </div>
        </div>
        <div className='flex flex-col sm:flex-row justify-between items-center sm:items-start space-y-4 sm:space-y-0'>
          <ul className='flex flex-wrap justify-center sm:justify-start gap-4 sm:gap-8 sm:pt-8'>
            <li><Link href="/" className="text-sm sm:text-md p-1 sm:p-2 hover-effect-footer">ホーム</Link></li>
            <li><Link href="/news" className="text-sm sm:text-md p-1 sm:p-2 hover-effect-footer">最新情報</Link></li>
            <li><Link href="/activities" className="text-sm sm:text-md p-1 sm:p-2 hover-effect-footer">活動内容</Link></li>
            <li><Link href="/results" className="text-sm sm:text-md p-1 sm:p-2 hover-effect-footer">大会の結果</Link></li>
            <li><Link href="/album" className="text-sm sm:text-md p-1 sm:p-2 hover-effect-footer">アルバム</Link></li>
          </ul>
          <div className={`text-center sm:text-right mt-4 sm:pt-9`}>
            <p className="text-xs sm:text-sm">&copy; 2024 University of Miyazaki Badminton Club. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}