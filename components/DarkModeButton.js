import { IconButton, useColorMode } from 'theme-ui'
import {
  Brightness3 as Moon,
  WbSunny as Sun,
} from '@material-ui/icons'

export default function DarkModeButton() {
  const [mode, setMode] = useColorMode();
  const toggleMode = () => setMode(mode === 'light' ? 'dark' : 'light');

  return <IconButton aria-label="Toggle dark mode" onClick={toggleMode} sx={{ color: mode === 'light' ? 'inherit' : '#FFF176' }}>
    {mode === 'light' ? <Moon /> : <Sun />}
  </IconButton>;
}