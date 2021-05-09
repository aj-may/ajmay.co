import { IconButton, useColorMode } from 'theme-ui'
import {
  MdBrightness3 as Moon,
  MdWbSunny as Sun,
} from 'react-icons/md'

export default function DarkModeButton() {
  const [mode, setMode] = useColorMode();
  const toggleMode = () => setMode(mode === 'light' ? 'dark' : 'light');

  return <IconButton aria-label="Toggle dark mode" onClick={toggleMode} sx={{ color: mode === 'light' ? 'inherit' : '#FFF176' }}>
    {mode === 'light' ? <Moon /> : <Sun />}
  </IconButton>;
}