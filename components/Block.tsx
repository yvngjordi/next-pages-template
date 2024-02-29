import React, { ReactNode, useEffect, useState } from 'react';

const withDefaultProps = <P extends object>(WrappedComponent: React.ComponentType<P>, defaultProps: Partial<P> = {}) => {
  return (props: P) => <WrappedComponent {...defaultProps} {...props} />;
};

type OptionalProps<T extends object> = {
  [P in keyof T]?: T[P];
};

type BlockProps = OptionalProps<{
  type: string;
  [key: string]: any;
}>;

const Block: React.FC<BlockProps> = ({ type, ...props }) => {
  const [Component, setComponent] = useState<React.ComponentType<any> | null>(null);

  useEffect(() => {
    const loadComponent = async () => {
      let normalizedType = type.toLowerCase();
      try {
        const module = await import(`./${normalizedType}.tsx`);
        const WrappedComponent = withDefaultProps(module.default);
        setComponent(() => WrappedComponent);
      } catch (lowerCaseError) {
        console.error(`Component ${normalizedType} not found. Trying with first character uppercase.`, lowerCaseError);

        normalizedType = type.charAt(0).toUpperCase() + type.slice(1).toLowerCase();
        try {
          const module = await import(`./${normalizedType}.tsx`);
          const WrappedComponent = withDefaultProps(module.default);
          setComponent(() => WrappedComponent);
        } catch (upperCaseError) {
          console.error(`Component ${normalizedType} not found.`, upperCaseError);
          setComponent(null);
        }
      }
    };

    loadComponent();
  }, [type]);

  if (!Component) {
    return <div></div>;
  }

  return <Component {...props} />;
};

export default Block;
