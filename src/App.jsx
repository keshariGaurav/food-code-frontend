import { Button, CssBaseline, ThemeProvider } from "@mui/material";
 
import { appTheme } from "./theme.js";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
 
function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline enableColorScheme />
      <Container>
        <Box sx={{ bgcolor: '#cfe8fc', height: '50vh',width:'50vw',display:'flex'}}>Hello Ayushi!</Box>
      </Container>
    </ThemeProvider>
  );
}
 
export default App;