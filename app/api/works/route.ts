import { NextResponse ,NextRequest} from 'next/server';
import { getList } from '@/libs/microcms'; // SSGの際に使っていた記事取得のスクリプト

export async function GET(request: NextRequest) {
    const domain='results'
  const list = await getList(domain);

  return NextResponse.json(list);
}