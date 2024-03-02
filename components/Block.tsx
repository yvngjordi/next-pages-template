import React, { ReactNode, useEffect, useState, ComponentType, CSSProperties } from 'react';

const withDefaultProps = <P extends object>(
  WrappedComponent: ComponentType<P>,
  defaultProps: Partial<P> = {},
  styleProps?: CSSProperties
) => {
  type ComponentPropsWithStyle = P & { style?: CSSProperties };

  return (props: ComponentPropsWithStyle) => {
    const mergedStyles = { ...styleProps, ...props.style };
    const finalProps = { ...defaultProps, ...props, style: mergedStyles };

    return <WrappedComponent {...finalProps} />;
  };
};

type OptionalProps<T extends object> = {
  [P in keyof T]?: T[P];
};

type BlockProps = OptionalProps<{
  type: string;
  style?: React.CSSProperties;
  [key: string]: any;
}>;

const Block: React.FC<BlockProps> = ({ type, style, ...props }) => {
  const [Component, setComponent] = useState<React.ComponentType<any> | null>(null);

  useEffect(() => {
    const loadComponent = async () => {
      if (type) {
        let normalizedType = type.toLowerCase();
        try {
          const module = await import(`./${normalizedType}.tsx`);
          const WrappedComponent = withDefaultProps(module.default, {}, style);
          setComponent(() => WrappedComponent);
        } catch (lowerCaseError) {
          console.error(`Component ${normalizedType} not found. Trying with first character uppercase.`, lowerCaseError);

          normalizedType = type.charAt(0).toUpperCase() + type.slice(1).toLowerCase();
          try {
            const module = await import(`./${normalizedType}.tsx`);
            const WrappedComponent = withDefaultProps(module.default, {}, style);
            setComponent(() => WrappedComponent);
          } catch (upperCaseError) {
            console.error(`Component ${normalizedType} not found.`, upperCaseError);
            setComponent(null);
          }
        }
      } else {
        console.error("Type is undefined.");
        setComponent(null);
      }
    };

    loadComponent();
  }, [type, style]);

  if (!Component) {
    return <div></div>;
  }

  return <Component {...props} />;
};

export default Block;
