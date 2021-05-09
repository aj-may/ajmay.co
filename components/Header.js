import { Box, Heading } from 'theme-ui'
import { AiFillGithub as GitHub, AiOutlineTwitter as Twitter } from 'react-icons/ai'
import Link from 'components/Link'
import DarkModeButton from 'components/DarkModeButton'

export default function Header() {
  return <Box sx={{ margin: ['1rem 1rem 1.5rem', '3rem 3rem 4rem'] }}>
    <Heading as="h1" sx={{ fontSize: ['4rem', '6rem'], fontWeight: 100, display: 'inline-block', mr: '1rem' }}>
      AJ May
    </Heading>

    <DarkModeButton />

    <Link variant="icon" aria-label="GitHub" href="https://github.com/aj-may" target="_blank">
      <GitHub />
    </Link>

    <Link variant="icon" aria-label="Twitter" href="https://twitter.com/aj7may" target="_blank">
      <Twitter />
    </Link>
  </Box>;
}