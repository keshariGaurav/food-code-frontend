import { appTheme } from './theme.js';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import Page from 'src/pages/index.jsx';
import Login from 'src/pages/loginPage/index.jsx';
import FoodCodeProvider, { useFoodCodeContext } from './store/Context.jsx';

function App() {
    return (
        <ThemeProvider theme={appTheme}>
            <CssBaseline enableColorScheme />
            <FoodCodeProvider>
                <Container sx={{ padding: '20px' }}>
                    <Box sx={{ height: '50vh', width: '90vw', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Page />
                        <Login />
                    </Box>
                </Container>
            </FoodCodeProvider>
        </ThemeProvider>
    );
}

export default App;
