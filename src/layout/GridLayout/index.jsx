import React from 'react';
import PropTypes from 'prop-types';
import { Box, Stack, IconButton, Switch } from '@mui/material';
import FoodCodeProvider, { useFoodCodeContext } from 'src/store/Context';
import { useTheme } from '@mui/material/styles';

const GridLayout = (props) => {
    const theme = useTheme();
    const { pageState, dispatch } = useFoodCodeContext();
    const remainingHeight = `calc(100vh - ${pageState.navbarHeight}px)`;
    return (
        <Box width="100%" minHeight={remainingHeight} paddingX="64px" paddingY="28px" backgroundColor={theme.palette.grey['100']}>
            {props.children}
        </Box>
    );
};
GridLayout.propTypes = {
    pageState: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
};

export default GridLayout;
