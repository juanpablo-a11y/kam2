import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { useVideos } from '../hooks/useVideos';
import VideoFilterBar from './VideoFilterBar';

interface VideoLibraryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const VideoLibraryModal: React.FC<VideoLibraryModalProps> = ({ isOpen, onClose }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const { videos, loading, error, categoryCounts } = useVideos(selectedCategory);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.body.style.overflow = 'unset';
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="video-library-title"
    >
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />

      <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-7xl max-h-[90vh] overflow-hidden mx-4 transform transition-all duration-300 scale-100">
        <div className="sticky top-0 bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between z-10">
          <div>
            <h2 id="video-library-title" className="text-2xl md:text-3xl font-bold text-slate-900">
              Video Library
            </h2>
            <p className="text-slate-600 mt-1">
              Comprehensive video guides to help you understand and partner with TourHero
            </p>
          </div>
          <button
            onClick={onClose}
            className="flex-shrink-0 ml-4 p-2 rounded-lg hover:bg-slate-100 transition-colors duration-200"
            aria-label="Close video library"
          >
            <X className="w-6 h-6 text-slate-600" />
          </button>
        </div>

        <div className="overflow-y-auto max-h-[calc(90vh-100px)] px-6 py-8">
          <VideoFilterBar
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            categoryCounts={categoryCounts}
          />

          {loading ? (
            <div className="flex items-center justify-center py-12">
              <div className="text-slate-600">Loading videos...</div>
            </div>
          ) : error ? (
            <div className="flex items-center justify-center py-12">
              <div className="text-red-600">Error loading videos: {error}</div>
            </div>
          ) : videos.length === 0 ? (
            <div className="flex items-center justify-center py-12">
              <div className="text-slate-600">No videos found in this category.</div>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-8 animate-fade-in">
              {videos.map((video) => (
                <div key={video.id} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow duration-300">
                  <div className="relative pb-[56.25%] h-0 overflow-hidden">
                    <iframe
                      src={video.embed_url}
                      frameBorder="0"
                      allowFullScreen
                      className="absolute top-0 left-0 w-full h-full"
                      title={video.title}
                    ></iframe>
                  </div>

                  <div className="p-6">
                    <div className="mb-2">
                      <span className={`inline-block text-white text-xs px-2 py-1 rounded-full font-medium ${
                        video.category === 'Platform Overview' ? 'bg-tourhero-red' :
                        video.category === 'Getting Started' ? 'bg-tourhero-navy' :
                        'bg-tourhero-blue'
                      }`}>
                        {video.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">
                      {video.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {video.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoLibraryModal;
