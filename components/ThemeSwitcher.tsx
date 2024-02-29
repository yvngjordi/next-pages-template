import React from 'react';
import { ActionIcon, Group, useMantineColorScheme } from '@mantine/core';
import { IconMoon, IconSun } from '@tabler/icons-react';

export default function ThemeSwitcher() {
  const { colorScheme, setColorScheme } = useMantineColorScheme();
  const toggleColorScheme = (value: 'light' | 'dark') => () => setColorScheme(value);

  return (
    <Group style={{ justifyContent: 'center' }}>
        {colorScheme === 'light' ? (
          <ActionIcon
            variant="default"
            onClick={toggleColorScheme('dark')}
          >
            <IconMoon size={16} />
          </ActionIcon>
        ) : (
          <ActionIcon
            variant="default"
            onClick={toggleColorScheme('light')}
          >
            <IconSun size={16} />
          </ActionIcon>
        )}
    </Group>
  );
}
