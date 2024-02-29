import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

interface ScrollEffectWrapperProps {
  children: React.ReactNode;
  transitionFrom?: 'left' | 'right' | 'top' | 'bottom';
  duration?: number;
  delay?: number;
  startOpacityAt?: number;
  grayscale?: boolean;
  blur?: boolean;
  brightness?: boolean;
  sepia?: boolean;
  invert?: boolean;
  hueRotate?: boolean;
  contrast?: boolean;
}

const getTransformValue = (transitionFrom?: string) => {
  switch (transitionFrom) {
    case 'left':
      return 'translateX(-20px)';
    case 'right':
      return 'translateX(20px)';
    case 'top':
      return 'translateY(-20px)';
    case 'bottom':
      return 'translateY(20px)';
    default:
      return 'translateY(20px)';
  }
};

const ScrollEffectWrapper: React.FC<ScrollEffectWrapperProps> = ({
  children,
  transitionFrom = 'bottom',
  duration = 0.5,
  delay = 0,
  startOpacityAt = 0,
  grayscale = false,
  blur = false,
  brightness = false,
  sepia = false,
  invert = false,
  hueRotate = false,
  contrast = false,
}) => {
  const [hasEnteredView, setHasEnteredView] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasEnteredView) {
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
  }, [hasEnteredView]);

  return (
    <Wrapper
      inView={hasEnteredView}
      transitionFrom={transitionFrom}
      duration={duration}
      delay={delay}
      startOpacityAt={startOpacityAt}
      grayscale={grayscale}
      blur={blur}
      brightness={brightness}
      sepia={sepia}
      invert={invert}
      hueRotate={hueRotate}
      contrast={contrast}
      ref={ref}
    >
      {children}
    </Wrapper>
  );
};

export default ScrollEffectWrapper;

const Wrapper = styled.div<ScrollEffectWrapperProps & { inView: boolean }>`
  opacity: ${({ inView, startOpacityAt }) => (inView ? 1 : startOpacityAt)};
  transform: ${({ inView, transitionFrom }) => (inView ? 'translateX(0)' : getTransformValue(transitionFrom))};
  transition: opacity ${({ duration }) => duration}s ease-out ${({ delay }) => delay}s,
    transform ${({ duration }) => duration}s ease-out ${({ delay }) => delay}s,
    filter ${({ duration }) => duration}s ease-out ${({ delay }) => delay}s;
  filter: ${({ inView, grayscale, blur, brightness, sepia, invert, hueRotate, contrast }) => `
    grayscale(${inView ? 0 : grayscale ? 100 : 0}%)
    blur(${inView ? 0 : blur ? 5 : 0}px)
    brightness(${inView ? 100 : brightness ? 50 : 100}%)
    sepia(${inView ? 0 : sepia ? 100 : 0}%)
    invert(${inView ? 0 : invert ? 100 : 0}%)
    hue-rotate(${inView ? 0 : hueRotate ? 90 : 0}deg)
    contrast(${inView ? 100 : contrast ? 200 : 100}%)
  `};
`;
