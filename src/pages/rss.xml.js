import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const activities = await getCollection('activities', ({ data }) => data.status === 'Publish');
  const sortedActivities = activities.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());

  return rss({
    title: 'Aktivitas Kegiatan Kejaksaan',
    description: 'Dokumentasi aktivitas dan kegiatan terbaru',
    site: context.site,
    items: sortedActivities.map((activity) => ({
      title: activity.data.title,
      pubDate: activity.data.date,
      description: activity.data.excerpt,
      link: `/kegiatan/${activity.slug}/`,
    })),
    customData: `<language>id</language>`,
  });
}
