import { extendTheme } from '@chakra-ui/react';
import '@fontsource/noto-sans/400.css';
import '@fontsource/inter/400.css';

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const customTheme = extendTheme({
  fonts: {
    body: 'Inter, system-ui, sans-serif',
    heading: 'Noto Sans, system-ui, sans-serif',
  },

  config,
});

export default customTheme;
