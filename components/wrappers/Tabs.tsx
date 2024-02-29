import React from 'react';
import { Tabs, TabsProps } from '@mantine/core';

type TabItem = {
  label: string;
  value: string;
};

interface TabsWrapperProps extends Omit<TabsProps, 'children'> {
  tabs: TabItem[];
  children: React.ReactNode[];
}

const TabsWrapper: React.FC<TabsWrapperProps> = ({ tabs, children, ...tabsProps }) => {
  return (
    <Tabs {...tabsProps}>
      <Tabs.List>
        {tabs.map((tab) => (
          <Tabs.Tab key={tab.value} value={tab.value}>
            {tab.label}
          </Tabs.Tab>
        ))}
      </Tabs.List>
      {children.map((child, index) => (
        <Tabs.Panel key={tabs[index].value} value={tabs[index].value} pt="xs">
          {child}
        </Tabs.Panel>
      ))}
    </Tabs>
  );
};

export default TabsWrapper;
