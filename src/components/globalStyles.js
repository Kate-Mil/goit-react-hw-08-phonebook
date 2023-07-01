import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundImage: 'linear-gradient(to bottom, #EDE990, #2EAFEF)',
        margin: 0,
        fontFamily:
          '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
      },
      code: {
        fontFamily:
          'source-code-pro, Menlo, Monaco, Consolas, Courier New, monospace',
      },
      'p, ul': {
        marginTop: 0,
        marginBottom: 0,
      },
      picture: {
        display: 'block',
      },
      img: {
        display: 'block',
        width: '100%',
        height: 'auto',
      },
      a: {
        textDecoration: 'none',
        color: 'currentColor',
      },
      ul: {
        paddingLeft: 0,
        listStyle: 'none',
      },
      button: {
        padding: 0,
        fontFamily: 'inherit',
        backgroundColor: 'inherit',
        border: 'transparent',
        cursor: 'pointer',
      },
    },
  },
});
