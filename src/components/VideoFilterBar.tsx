import React from 'react';

interface VideoFilterBarProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  categoryCounts: Record<string, number>;
}

const VideoFilterBar: React.FC<VideoFilterBarProps> = ({
  selectedCategory,
  onCategoryChange,
  categoryCounts,
}) => {
  const categories = ['All', 'Platform Overview', 'Getting Started', 'Testimonial'];

  return (
    <div className="flex flex-wrap gap-3 justify-center mb-8">
      {categories.map((category) => {
        const isActive = selectedCategory === category;
        const count = categoryCounts[category] || 0;

        return (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`
              px-6 py-3 rounded-lg font-medium transition-all duration-200
              flex items-center gap-2 shadow-sm
              ${
                isActive
                  ? 'bg-tourhero-red text-white shadow-md transform scale-105'
                  : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200 hover:border-tourhero-red hover:text-tourhero-red'
              }
            `}
            aria-label={`Filter by ${category}`}
            aria-pressed={isActive}
          >
            <span>{category}</span>
            <span
              className={`
                px-2 py-0.5 rounded-full text-xs font-bold
                ${
                  isActive
                    ? 'bg-white/20 text-white'
                    : 'bg-slate-100 text-slate-600'
                }
              `}
            >
              {count}
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default VideoFilterBar;
