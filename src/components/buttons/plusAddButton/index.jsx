import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
const PlusAddButton = (props) => {
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
                backgroundColor: 'green',
                borderRadius: '50%',
                width: 40,
                height: 40,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <AddIcon fontSize="inherit" />
        </IconButton>
    );
};
export default PlusAddButton;
