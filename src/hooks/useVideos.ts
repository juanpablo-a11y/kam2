import { useState, useEffect } from 'react';
import { videos as staticVideos, Video } from '../data/videos';

interface UseVideosResult {
  videos: Video[];
  loading: boolean;
  error: string | null;
  categoryCounts: Record<string, number>;
}

export const useVideos = (selectedCategory?: string): UseVideosResult => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [categoryCounts, setCategoryCounts] = useState<Record<string, number>>({});

  useEffect(() => {
    const fetchVideos = () => {
      try {
        setLoading(true);
        setError(null);

        let filteredVideos = staticVideos;

        if (selectedCategory && selectedCategory !== 'All') {
          filteredVideos = staticVideos.filter(
            video => video.category === selectedCategory
          );
        }

        filteredVideos = [...filteredVideos].sort(
          (a, b) => a.order_index - b.order_index
        );

        setVideos(filteredVideos);

        const counts: Record<string, number> = { 'All': staticVideos.length };
        staticVideos.forEach((video) => {
          counts[video.category] = (counts[video.category] || 0) + 1;
        });
        setCategoryCounts(counts);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch videos');
        console.error('Error fetching videos:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, [selectedCategory]);

  return { videos, loading, error, categoryCounts };
};
