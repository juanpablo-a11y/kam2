import { useState, useEffect } from 'react';
import { Video } from '../data/videos';
import { supabase } from '../lib/supabase';

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
    const fetchVideos = async () => {
      try {
        setLoading(true);
        setError(null);

        let query = supabase
          .from('videos')
          .select('*')
          .order('order_index', { ascending: true });

        if (selectedCategory && selectedCategory !== 'All') {
          query = query.eq('category', selectedCategory);
        }

        const { data, error: fetchError } = await query;

        if (fetchError) {
          throw fetchError;
        }

        const allVideosQuery = await supabase
          .from('videos')
          .select('category');

        const counts: Record<string, number> = { 'All': data?.length || 0 };

        if (allVideosQuery.data) {
          counts['All'] = allVideosQuery.data.length;
          allVideosQuery.data.forEach((video) => {
            counts[video.category] = (counts[video.category] || 0) + 1;
          });
        }

        setCategoryCounts(counts);
        setVideos(data || []);
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
