import { get } from "http";
import { createClient } from "microcms-js-sdk";
import type {
    MicroCMSQueries,
    MicroCMSImage,
    MicroCMSDate,
} from "microcms-js-sdk";
// Removed incorrect import

//ブログの型定義
export type Blog = {
    id: string;
    title: string;
    content: string;
    eyecatch?: MicroCMSImage;
} & MicroCMSDate;

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
    throw new Error("MICROCMS_SERVICE_DOMAIN is required");
}

if (!process.env.MICROCMS_API_KEY) {
    throw new Error("MICROCMS_API_KEY is required");
}

// API取得用のクライアントを作成
export const client = createClient({
    serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
    apiKey: process.env.MICROCMS_API_KEY,
});

// ブログ一覧を取得
export const getList = async (domain: string) => {
    const endpoint = `https://miyadai-bad.microcms.io/api/v1/${domain}`;
    const response = await fetch(endpoint, {
        method: 'GET',
        headers: {
            'X-MICROCMS-API-KEY': process.env.MICROCMS_API_KEY || '',
            'Content-Type': 'application/json'
        },
        cache: 'no-store'
    }
    )
    const data = await response.json()
    return data
}

export const getAllLists = async () => {
    const columnsData = await getList('columns')

    const resultsData = await getList('results');
    const AllLists = [...columnsData.contents, ...resultsData.contents]
    AllLists.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())

    console.log("--------関数内--------")
    console.log(AllLists)
    console.log("--------関数内--------")

    return AllLists;
}

// ブログの詳細を取得
export const getDetail = async (
    domain: string,
    contentId: string,
) => {
    const endpoint = `https://miyadai-bad.microcms.io/api/v1/${domain}/${contentId}`;
    const response = await fetch(endpoint, {
        method: 'GET',
        headers: {
            'X-MICROCMS-API-KEY': process.env.MICROCMS_API_KEY || '',
            'Content-Type': 'application/json'
        },
        cache: 'no-store'
    }
    )
    const data = await response.json()
    console.log(data)
    return data
};