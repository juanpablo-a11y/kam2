import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useVideos } from '../hooks/useVideos';
import VideoFilterBar from './VideoFilterBar';

interface VideosSectionProps {
  onBackToHomepage?: () => void;
}

const VideosSection: React.FC<VideosSectionProps> = ({ onBackToHomepage }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const { videos, loading, error, categoryCounts } = useVideos(selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-tourhero-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {onBackToHomepage && (
            <div className="mb-8">
              <button
                onClick={onBackToHomepage}
                className="inline-flex items-center text-white hover:text-gray-200 transition-colors duration-200"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Homepage
              </button>
            </div>
          )}
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Video Library
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Comprehensive video guides to help you understand and partner with TourHero
            </p>
          </div>
        </div>
      </div>

      {/* Videos Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
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
              <div key={video.id} className="bg-white rounded-xl shadow-sm border border-border overflow-hidden hover:shadow-md transition-shadow duration-300">
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
                  <h3 className="text-xl font-bold text-text-primary mb-3">
                    {video.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {video.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default VideosSection;