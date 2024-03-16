import { appTheme } from './theme.js';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Page from 'src/pages/index.jsx';
import Login from 'src/pages/loginPage/index.jsx';
import CreateMenu from 'src/pages/createMenu/index.jsx';
import FoodCodeProvider, { useFoodCodeContext } from './store/Context.jsx';
import GetMenuItem from './pages/getMenu/index.jsx';

function App() {
    return (
        <ThemeProvider theme={appTheme}>
            <CssBaseline enableColorScheme />
            <FoodCodeProvider>
                <BrowserRouter>
                    <Box sx={{ width: '100vw', minHeight: '100vh' }}>
                        <Routes>
                            <Route path="/" element={<GetMenuItem />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/create-menu" element={<CreateMenu />} />
                        </Routes>
                    </Box>
                </BrowserRouter>
            </FoodCodeProvider>
        </ThemeProvider>
    );
}

export default App;
