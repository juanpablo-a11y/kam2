import React, { useState } from 'react';
import HomepageFaq from './HomepageFaq';
import FullFaqPage from './FullFaqPage';

type ViewType = 'homepage' | 'full';

interface FaqRouterProps {
  onShowVideos?: () => void;
}

const FaqRouter: React.FC<FaqRouterProps> = ({ onShowVideos }) => {
  const [currentView, setCurrentView] = useState<ViewType>('homepage');
  const showFullFaq = () => {
    setCurrentView('full');
  };

  const showHomepageFaq = () => {
    setCurrentView('homepage');
  };

  if (currentView === 'full') {
    return <FullFaqPage onBackToHomepage={showHomepageFaq} onShowVideos={onShowVideos} />;
  }

  return <HomepageFaq onViewAllFaqs={showFullFaq} onShowVideos={onShowVideos} />;
};

export default FaqRouter;