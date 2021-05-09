import { Box, Paragraph, Link } from 'theme-ui'
import { useQuery } from 'react-query'
import contentful from 'lib/contentful'
import Header from 'components/Header'

const ProjectLink = ({ name, slug }) => <Link
  key={slug}
  sx={{ pr: '4rem', display: 'inline-block', textDecoration: 'none', color: 'primary' }}
  href={`/${slug}`}>
    {name}
  </Link>;

export default function Home() {
  const { isLoading, isError, data } = useQuery('projects', async () => {
    const result = await contentful.getEntries({ 'content_type': 'project' });
    return result.items;
  });

  return <>
    <Header />
    <Box sx={{ mx: '6rem', my: '4rem' }}>
      
    </Box>
  </>;
}
