import { getTracks } from '@/lib/data';
import { TrackDetailClient } from '@/components/player/TrackDetailClient';
import { notFound } from 'next/navigation';

export const revalidate = 3600;

export async function generateStaticParams() {
  const tracks = await getTracks();
  return tracks.map((track) => ({
    slug: track.slug,
  }));
}

export default async function TrackPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const tracks = await getTracks();
  const track = tracks.find((t) => t.slug === slug);

  if (!track) {
    notFound();
  }

  return <TrackDetailClient track={track} />;
}
