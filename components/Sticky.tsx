import React, { useState, useEffect, useRef } from 'react';
import Block from './Block';

type ContentType = 'markdown' | 'text' | 'component';

type ContentItem =
  | { type: 'markdown' | 'text', value: string }
  | { type: 'component', value: React.ComponentType<any> };

interface StickyProps {
  contentArray: ContentItem[];
  changeInterval: number;
}

const Sticky: React.FC<StickyProps> = ({ contentArray, changeInterval }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hasEnteredView, setHasEnteredView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasEnteredView(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!hasEnteredView) return;

      const componentTop = ref.current?.getBoundingClientRect().top ?? 0;
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY + windowHeight - componentTop;
      const rawIndex = Math.floor(scrollY / changeInterval);
      const maxIndex = contentArray.length - 1;
      const newIndex = Math.max(0, Math.min(rawIndex, maxIndex));
      setCurrentIndex(newIndex);
    };

    if (hasEnteredView) {
      window.addEventListener('scroll', handleScroll);
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasEnteredView, changeInterval, contentArray.length]);


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
    <div ref={ref} style={{ position: 'sticky', top: '20vh', zIndex: 1 }}>
      {renderContent()}
    </div>
  );
};

export default Sticky;
