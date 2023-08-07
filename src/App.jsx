import { Box, Stack, ThemeProvider, createTheme } from '@mui/material';
import SideBar from './components/SideBar/SideBar';
import RightBar from './components/RightBar/RightBar';
import NewsFeed from './components/NewsFeed/NewsFeed';
import NavBar from './components/NavBar/NavBar';
import AddButton from './components/AddButton/AddButton';
import { useState } from 'react';


function App() {
  const [mode, setMode] = useState("light")

  const darkTheme = createTheme({
    palette: {
      mode: mode
    }
  })

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <NavBar />
        <Stack direction="row" spacing={10} justifyContent="space-between">
          <SideBar setMode={setMode} mode={mode} />
          <NewsFeed />
          <RightBar />
        </Stack>
        <AddButton />
      </Box>
    </ThemeProvider>
  )
}
export default App
