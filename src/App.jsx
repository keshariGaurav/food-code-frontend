import { appTheme } from './theme.js';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import Page from 'src/pages/index.jsx';
import Login from 'src/pages/loginPage/index.jsx';
import CreateMenu from 'src/pages/createMenu/index.jsx';
import FoodCodeProvider, { useFoodCodeContext } from './store/Context.jsx';

function App() {
    return (
        <ThemeProvider theme={appTheme}>
            <CssBaseline enableColorScheme />
            <FoodCodeProvider>
                <Box sx={{ width: '100vw', minHeight: '100vh', bgcolor: 'white' }}>
                    <CreateMenu />
                </Box>
            </FoodCodeProvider>
        </ThemeProvider>
    );
}

export default App;
