import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import { useTheme } from '@mui/material/styles';

const PlusAddOnButton = (props) => {
    const theme = useTheme();
    const callback = props.callback;
    const handleClick = () => {
        if (callback) {
            callback();
        }
    };
    return (
        <IconButton
            aria-label="add"
            size="large"
            onClick={handleClick}
            sx={{
                backgroundColor: `${theme.palette.primary.main}`,
                borderRadius: '50%',
                width: 40,
                height: 40,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                '&:hover': {
                    backgroundColor: `${theme.palette.primary.dark}`,
                },
            }}
        >
            <AddIcon fontSize="inherit" />
        </IconButton>
    );
};
export default PlusAddOnButton;
