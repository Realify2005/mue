const { Client } = require('@notionhq/client');

const notion = new Client({ auth: process.env.NOTION_API_TOKEN });

export async function fetchPhotos() {
    const databaseId = process.env.NOTION_GALLERY_DATABASE_ID;
    const response = await notion.databases.query({
        database_id: databaseId,
        "filter": {
           "property" : "Show",
            "checkbox": {
                "equals" : true
            }
        }
    });

    const indexedData = response.results.map(page => {
        return page.properties.Photos.files
    });

    const photos = []
    indexedData.forEach(photo_list => {
        photo_list.forEach(photo => photos.push(photo.file.url))
    })
    return photos;
}

