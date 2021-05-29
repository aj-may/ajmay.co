import { createClient } from 'contentful'

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_TOKEN,
});

const parseProject = ({ metadata, sys, fields }) => ({
  id: sys.id,
  tags: metadata.tags,
  ...fields,
})

export const getProjects = async () => {
  const { items: projects } = await client.getEntries({
    'content_type': 'project',
  });

  return projects.map(parseProject);
};

export const getProject = async slug => {
  const {items: [project] } = await client.getEntries({
    'content_type': 'project',
    'fields.slug': slug,
  });

  return parseProject(project);
}
