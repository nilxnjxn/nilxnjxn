import { getTracks } from '@/lib/data';
import { MusicClient } from '@/components/layout/MusicClient';

export const dynamic = 'force-static';
export const revalidate = 3600;

export default async function MusicPage() {
  const tracks = await getTracks();

  return <MusicClient tracks={tracks} />;
}
