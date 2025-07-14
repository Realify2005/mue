const { Client } = require('@notionhq/client');

const notion = new Client({ auth: process.env.NOTION_API_TOKEN });

export async function fetchLinktreeLayout() {
    const databaseId = process.env.NOTION_LINKTREE_SECTION_DATABASE_ID;
    const response = await notion.query({

    });

    return response;
}

export async function fetchLinktreeData() {
    const databaseId = process.env.NOTION_LINKTREE_LINKS_DATABASE_ID;
    const response = await notion.query({

    });
}