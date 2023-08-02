import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import { Typography } from '@mui/material';
import styled from '@emotion/styled';

function App() {
  //  APPLY THEME TO THE CUSTOM BUTTON
  const StyledButton = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.secondary.main, color: "#0d47a1", margin: 10, "&:hover": {
      backgroundColor: "skyblue"
    },
    "&:disabled": {
      background: "gray",
      color: "white"
    }
  }))

  return (
    <>
      {/* MATERIAL UI CUSTOM CSS */}
      <StyledButton>My Styled Button</StyledButton>

      {/* APPLY THE CUSTOM PRIMARY THEME COLOR */}
      <Button variant="contained" color='primary'>Hala Barcelona!</Button>

      <Button variant="outlined">Howdy</Button>
      <HomeIcon sx={{ fontSize: 100 }} color='secondary' />

      {/* APPLY THE CUSTOM SECONDARY THEME COLOR */}
      <Button variant="outlined" color='secondary' startIcon={<DeleteRoundedIcon />}>
        Delete
      </Button>
      <Button variant="contained" endIcon={<SendRoundedIcon />}>
        Send
      </Button>

      <Typography variant="h1" component="div">
        div under the h1 style
      </Typography>
    </>
  )
}
export default App
