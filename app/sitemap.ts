import { MetadataRoute } from 'next'
import { fetchMostRecentEventsNotionUpdate } from './components/api/fetchMostRecentEventsNotionUpdate'

const baseURL = 'https://' + process.env.DOMAIN_URL || 'localhost:3000'
const serverUpdatedAt = new Date() // Value updated on deployment

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

  // Fetch the most recent date of when a Notion page is updated
  const notionEventsUpdatedAt = new Date(
    (await fetchMostRecentEventsNotionUpdate()) || ''
  );

  return [
    {
      url: baseURL,
      lastModified: notionEventsUpdatedAt,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: baseURL + '/committee',
      lastModified: serverUpdatedAt,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: baseURL + '/sponsors',
      lastModified: serverUpdatedAt,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: baseURL + '/events',
      lastModified: notionEventsUpdatedAt,
      changeFrequency: 'daily',
      priority: 0.7,
    },
  ]
}
