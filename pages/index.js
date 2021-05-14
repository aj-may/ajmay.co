import { Box, Paragraph } from 'theme-ui'
import { useQuery } from 'react-query'
import { getProjects } from 'services/contentful'
import Header from 'components/Header'
import Link from 'components/Link'

export default function Home({ projects }) {
  const { isLoading, isError, data } = useQuery('projects', getProjects, {
    initialData: projects,
  });

  return <>
    <Header />
    <Box sx={{ margin: ['1.5rem 1rem 1.5rem 4rem', '4rem 4rem 4rem 10rem'] }}>
      <Paragraph sx={{ lineHeight: ['2.2rem', '3rem'] }}>
        {isLoading && "Loading..."}
        {isError && "Unable to load Projects at this time.  Try again later."}
        {data && data.map(({ slug, name }) =>
          <Link variant="project" href={`/${slug}`} key={slug}>{name}</Link>)}
      </Paragraph>
    </Box>
  </>;
}

export async function getStaticProps() {
  const projects = await getProjects();

  return {
    props: { projects },
  }
}
