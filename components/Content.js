import { Image } from 'theme-ui'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';

export default function Content({ field }) {
  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const { title, file: { url }, width, height } = node.data.target.fields;
        return <Image src={url} alt={title} width={width} height={height} />;
      }
    }
  };
  const content = documentToReactComponents(field, options);

  return <>{content}</>;
}