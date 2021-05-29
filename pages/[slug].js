import { Box } from 'theme-ui'
import { getProjects, getProject } from 'services/contentful'
import Header from 'components/Header'
import Content from 'components/Content'

export default function Project({ project }) {
  return <>
    <Header subheader={project.name} />
    <Box sx={{ mx: '6rem', my: '4rem' }}>
      <Content field={project.content} />

      <pre>{JSON.stringify(project, null, 2)}</pre>
    </Box>
  </>;
}

export async function getStaticProps({ params: { slug } }) {
  const project = await getProject(slug);

  return {
    props: { project },
  }
}

export async function getStaticPaths() {
  const projects = await getProjects();
  const paths = projects.map(({ slug }) => ({ params: { slug } }));

  return { paths, fallback: false };
}
