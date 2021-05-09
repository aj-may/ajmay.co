import { Box, Paragraph } from 'theme-ui'
import { useQuery } from 'react-query'
import contentful from 'lib/contentful'
import Header from 'components/Header'
import Link from 'components/Link'


export default function Home() {
  const { isLoading, isError, data } = useQuery('projects', async () => {
    const result = await contentful.getEntries({ 'content_type': 'project' });
    return result.items;
  });

  return <>
    <Header />
    <Box sx={{ margin: ['1.5rem 1rem 1.5rem 4rem', '4rem 4rem 4rem 10rem'] }}>
      <Paragraph sx={{ lineHeight: ['2.2rem', '3rem'] }}>
        {isLoading && "Loading..."}
        {isError && "Unable to load Projects at this time.  Try again later."}
        {data && data.map(({ fields: { slug, name }}) =>
          <Link variant="project" href={`/${slug}`} key={slug}>{name}</Link>)}
      </Paragraph>
    </Box>
  </>;
}
