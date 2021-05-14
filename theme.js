export default {
  fonts: {
    body: '"Open Sans", sans-serif',
    heading: '"Raleway", sans-serif',
    monospace: '"Source Code Pro", monospace',
  },
  fontSizes: ['1rem', '2rem', '3rem,', '4rem', '5rem', '6rem'],
  fontWeights: {
    body: 300,
    heading: 100,
    bold: 400,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#2E9889',
    modes: {
      dark: {
        text: '#fff',
        background: '#000',
      },
    },
  },
  links: {
    icon: {
      display: 'inline-flex',
      padding: '4px',
      color: 'text',
      '&:hover': {
        color: 'primary',
      },
    },
    project: {
      fontFamily: 'heading',
      fontSize: ['1.2rem', '2rem'],
      fontWeight: 300,
      fontStyle: 'italic',
      color: 'text',
      pr: ['1.2rem', '4rem'],
      display: 'inline-block',
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'underline',
        color: 'primary',
      },
    },
  },
  buttons: {
    icon: {
      cursor: 'pointer',
    },
  },
  styles: {
    root: {
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
    },
    a: {
      color: 'primary',
    },
    h1: {
      color: 'red',
    },
  },
  breakpoints: ['60em'],
};