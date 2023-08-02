import { createTheme } from '@mui/material/styles';
import { purple, yellow } from '@mui/material/colors';

const Theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: yellow[500],
    },
  },
});
export default Theme;

