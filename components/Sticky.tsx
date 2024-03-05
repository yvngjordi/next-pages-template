import React, { useState, useEffect } from 'react';
import Block from './Block';

// Simplified and consolidated ContentItem type definition
type ContentType = 'markdown' | 'text' | 'component';

type ContentItem =
  | { type: 'markdown' | 'text', value: string }
  | { type: 'component', value: React.ComponentType<any> }; // Note: <any> can be replaced with more specific props types if known

interface StickyProps {
  contentArray: ContentItem[];
  changeInterval: number;
}

const Sticky: React.FC<StickyProps> = ({ contentArray, changeInterval }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScroll = () => {
    const rawIndex = Math.floor(window.scrollY / changeInterval);
    const maxIndex = contentArray.length - 1;
    const newIndex = Math.max(0, Math.min(rawIndex, maxIndex));
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [changeInterval, contentArray.length]);

  const renderContent = () => {
    const currentItem = contentArray[currentIndex];
    switch (currentItem.type) {
      case 'markdown':
        return <Block type="markdown" markdown={currentItem.value} />;
      case 'text':
        return <div>{currentItem.value}</div>;
      case 'component':
        const Component = currentItem.value;
        return <Component />;
      default:
        return null;
    }
  };

  return (
    <div style={{ position: 'sticky', top: '20vh', zIndex: 1 }}>
      {renderContent()}
    </div>
  );
};

export default Sticky;
