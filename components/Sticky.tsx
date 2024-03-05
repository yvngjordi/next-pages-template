import React, { useState, useEffect, ReactNode } from 'react';
import Block from './Block';

type ContentType = 'markdown' | 'text' | 'component';

interface ContentItem {
  type: ContentType;
  value: string | ReactNode;
}

interface StickyProps {
  contentArray: ContentItem[];
  changeInterval: number
}

const Sticky: React.FC<StickyProps> = ({ contentArray, changeInterval }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScroll = () => {
    const newIndex = Math.min(Math.floor(window.scrollY / changeInterval), contentArray.length - 1);
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
        return <Block type="markdown" markdown={String(currentItem.value)} />;
      case 'text':
        return <div>{currentItem.value}</div>;
      case 'component':
        const Component = currentItem.value as () => JSX.Element;
        return <Component />;
      default:
        return null;
    }
  };

  return (
    <div style={{ position: 'sticky', top: '20vh', zIndex:1 }}>
      {renderContent()}
    </div>
  );
};

export default Sticky;
