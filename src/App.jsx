import { Button, CssBaseline, ThemeProvider } from '@mui/material';

import { appTheme } from './theme.js';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Page from '../src/pages/index.jsx';
import FoodCodeProvider, { useFoodCodeContext } from './store/Context.jsx';

function App() {
    return (
        <ThemeProvider theme={appTheme}>
            <CssBaseline enableColorScheme />
            <FoodCodeProvider>
                <Container sx={{ padding: '20px' }}>
                    <Box sx={{ height: '50vh', width: '90vw', display: 'flex' }}>
                        <Page/>
                    </Box>
                </Container>
            </FoodCodeProvider>
        </ThemeProvider>
    );
}

export default App;
