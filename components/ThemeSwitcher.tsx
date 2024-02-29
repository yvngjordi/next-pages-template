import React from 'react';
import { ActionIcon, Group, useMantineColorScheme } from '@mantine/core';
import { IconMoon, IconSun } from '@tabler/icons-react';

export function ThemeSwitcher() {
  const { colorScheme, setColorScheme } = useMantineColorScheme();
  const toggleColorScheme = (value: any) => () => setColorScheme(value);

  return (
    <Group position="center">
        {colorScheme === 'light' ? (
          <>
          <ActionIcon
            variant="default"
            onClick={toggleColorScheme('dark')}
          >
          <IconMoon size={16} />
          </ActionIcon>
          </>
        ) : (
          <>
          <ActionIcon
            variant="default"
            onClick={toggleColorScheme('light')}
          >
          <IconSun size={16} />
          </ActionIcon>
          </>
        )}
    </Group>
  );
}
