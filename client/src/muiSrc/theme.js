
import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// export const open_Sans = Open_Sans({
//   weight:['300', '400', '500', '600', '700', '800'],
//   subsets:["latin"],
//   display:'swap'
// });

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#4A93FE",
    },
    secondary: {
      main: '#4A93FE',
    },
    error: {
      main: red.A400,
    },
    success:{
      main: "#75A88A"
    }
  },
//   typography: {
//     fontFamily: open_Sans.style.fontFamily,
//   },
});

export default theme;
