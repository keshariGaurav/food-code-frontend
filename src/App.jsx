import { Button, CssBaseline, ThemeProvider } from '@mui/material';

import { appTheme } from './theme.js';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Page from '../src/pages/index.jsx';
import Login from './pages/loginPage/index.jsx';

function App() {
    return (
        <ThemeProvider theme={appTheme}>
            <CssBaseline enableColorScheme />
            <Container sx={{ padding: '20px' }}>
                <Box sx={{ height: '50vh', width: '90vw', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    {/* <Page/> */}
                    <Login />
                </Box>
            </Container>
        </ThemeProvider>
    );
}

export default App;
