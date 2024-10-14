import { createClient } from "microcms-js-sdk";
import type {
    MicroCMSQueries,
    MicroCMSImage,
    MicroCMSDate,
} from "microcms-js-sdk";

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

export const client = createClient({
    serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
    apiKey: process.env.MICROCMS_API_KEY,
});

export const getList = async (domain: string) => {
    console.log(process.env.MICROCMS_SERVICE_DOMAIN);
    console.log(process.env.MICROCMS_API_KEY);
    const endpoint = `https://${process.env.MICROCMS_SERVICE_DOMAIN}.microcms.io/api/v1/${domain}`;
    console.log(`Fetching from endpoint: ${endpoint}`);
    try {
        const response = await fetch(endpoint, {
            method: 'GET',
            headers: {
                'X-MICROCMS-API-KEY': process.env.MICROCMS_API_KEY || '',
                'Content-Type': 'application/json'
            },
            cache: 'no-store'
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Fetched data:', data);
        return data;
    } catch (error) {
        console.error('Error fetching list:', error);
        throw error;
    }
}

export const getAllLists = async () => {
    try {
        const columnsData = await getList('columns');
        const resultsData = await getList('results');
        const AllLists = [...columnsData.contents, ...resultsData.contents];
        AllLists.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
        console.log("All lists:", AllLists);
        return AllLists;
    } catch (error) {
        console.error('Error getting all lists:', error);
        throw error;
    }
}

export const getDetail = async (domain: string, contentId: string) => {
    const endpoint = `https://${process.env.MICROCMS_SERVICE_DOMAIN}.microcms.io/api/v1/${domain}/${contentId}`;
    console.log(`Fetching detail from endpoint: ${endpoint}`);
    try {
        const response = await fetch(endpoint, {
            method: 'GET',
            headers: {
                'X-MICROCMS-API-KEY': process.env.MICROCMS_API_KEY || '',
                'Content-Type': 'application/json'
            },
            cache: 'no-store'
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Fetched detail:', data);
        return data;
    } catch (error) {
        console.error('Error fetching detail:', error);
        throw error;
    }
};