import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useVideos } from '../hooks/useVideos';

const PlatformOverviewCarousel: React.FC = () => {
  const { videos } = useVideos('Platform Overview');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === videos.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? videos.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (!isAutoPlaying || videos.length <= 1) return;

    const interval = setInterval(() => {
      goToNext();
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, videos.length, currentIndex]);

  useEffect(() => {
    if (iframeRef.current && videos.length > 0) {
      iframeRef.current.src = videos[currentIndex].embed_url;
    }
  }, [currentIndex, videos]);

  if (videos.length === 0) {
    return null;
  }

  const currentVideo = videos[currentIndex];

  return (
    <div
      className="relative w-full max-w-4xl mx-auto"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-xl shadow-lg">
        <iframe
          ref={iframeRef}
          src={currentVideo.embed_url}
          frameBorder="0"
          allowFullScreen
          className="absolute top-0 left-0 w-full h-full"
          title={currentVideo.title}
        ></iframe>

        {videos.length > 1 && (
          <>
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110 z-10"
              aria-label="Previous video"
            >
              <ChevronLeft className="w-6 h-6 text-slate-800" />
            </button>

            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110 z-10"
              aria-label="Next video"
            >
              <ChevronRight className="w-6 h-6 text-slate-800" />
            </button>
          </>
        )}
      </div>

      {videos.length > 1 && (
        <div className="flex items-center justify-center gap-2 mt-6">
          {videos.map((video, index) => (
            <button
              key={video.id}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex
                  ? 'w-8 h-3 bg-tourhero-red'
                  : 'w-3 h-3 bg-slate-300 hover:bg-slate-400'
              }`}
              aria-label={`Go to video ${index + 1}`}
            />
          ))}
        </div>
      )}

      <div className="mt-4 text-center">
        <h3 className="text-xl font-bold text-slate-900 mb-2">
          {currentVideo.title}
        </h3>
        <p className="text-slate-600">
          {currentVideo.description}
        </p>
      </div>
    </div>
  );
};

export default PlatformOverviewCarousel;
