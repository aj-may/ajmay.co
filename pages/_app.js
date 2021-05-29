import 'normalize.css'
import Head from 'next/head'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ThemeProvider } from 'theme-ui'
import theme from 'theme'

function MyApp({ Component, pageProps }) {
  const queryClient = new QueryClient();

  return <>
    <Head>
      <title>AJ May</title>
      <link rel="preconnect" href="https://fonts.gstatic.com" /> 
      <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&family=Raleway:ital,wght@0,100;1,300&family=Source+Code+Pro&display=swap" rel="stylesheet" />
    </Head>

    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </ThemeProvider>
  </>;
}

export default MyApp
