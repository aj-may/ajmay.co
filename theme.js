export default {
  fonts: {
    body: '"Open Sans", sans-serif',
    heading: '"Raleway", sans-serif',
    monospace: '"Source Code Pro", monospace',
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
    },
    a: {
      color: 'primary',
    },
  },
  breakpoints: ['60em'],
};