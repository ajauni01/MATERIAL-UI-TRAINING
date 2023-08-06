import { Box, Stack } from '@mui/material';
import SideBar from './components/SideBar/SideBar';
import RightBar from './components/RightBar/RightBar';
import NewsFeed from './components/NewsFeed/NewsFeed';
import NavBar from './components/NavBar/NavBar';

function App() {

  return (
    <Box>
      <NavBar />
      <Stack direction="row" spacing={10} justifyContent="space-between">
        <SideBar />
        <NewsFeed />
        <RightBar />
      </Stack>
    </Box>

  )
}
export default App
