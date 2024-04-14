import { appTheme } from './theme.js';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material';
import FoodCodeProvider, { useFoodCodeContext } from 'src/store/Context.jsx';

import axios from 'axios';
import Pages from 'src/pages';

function App() {
    axios.defaults.withCredentials = true;

    return (
        <ThemeProvider theme={appTheme}>
            <CssBaseline enableColorScheme />
            <FoodCodeProvider>
                <Pages />
            </FoodCodeProvider>
        </ThemeProvider>
    );
}

export default App;
