import React from 'react';

import { MantineProvider } from '@mantine/core';

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <MantineProvider
      theme={{
        fontFamily: 'Montserrat, sans-serif',
        colorScheme: 'light',
        colors: {
          primary: [
            '#2eb6cc',
            '#29a4b8',
            '#2592a3',
            '#207f8f',
            '#1c6d7a',
            '#175b66',
            '#124952',
            '#0e373d',
            '#092429',
            '#092429',
          ],
        },
        primaryColor: 'primary',
        primaryShade: 0,
        components: {
          Button: {
            defaultProps: {
              radius: 16,
              fw: 'normal',
              variant: 'filled',
            },
          },
        },
      }}
      withGlobalStyles
      withNormalizeCSS
    >
      {children}
    </MantineProvider>
  );
};

export default ThemeProvider;
