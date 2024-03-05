import React, { useState, useEffect, ReactNode } from 'react';
import Block from './Block';

type ContentItem =
  | { type: 'markdown' | 'text', value: string }
  | { type: 'component', value: React.ComponentType };

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

    if (currentItem.type === 'markdown') {
      return <Block type="markdown" markdown={currentItem.value} />;
    } else if (currentItem.type === 'text') {
      return <div>{currentItem.value}</div>;
    } else if (currentItem.type === 'component') {
      const Component = currentItem.value;
      return <Component />;
    }

    return null;
  };


  return (
    <div style={{ position: 'sticky', top: '20vh', zIndex:1 }}>
      {renderContent()}
    </div>
  );
};

export default Sticky;
