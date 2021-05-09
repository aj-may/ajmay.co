import { Link as ThemeLink } from 'theme-ui'
import Link from 'next/link'

export default function MyLink({ href, children, ...props }) {
  return <Link href={href} passHref>
    <ThemeLink {...props}>{children}</ThemeLink>
  </Link>;
}