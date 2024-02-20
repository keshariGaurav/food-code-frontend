import { blue, pink, grey } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";
import { Button } from "@mui/material";

export const appTheme = createTheme({
  palette: {
    primary: blue,
    secondary: pink,
    grey: {
      grey_100: grey[100],
      grey_200: grey[200],
      grey_300: grey[300],
      grey_400: grey[400],
      grey_500: grey[500],
      grey_600: grey[600],
      grey_700: grey[700],
      grey_800: grey[800],
    },
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'backButton' },
          style: {
            color: grey[700],
            '&:hover': {
             cursor:'pointer'
            },
          },
        },
      ],
    },
  },
});


