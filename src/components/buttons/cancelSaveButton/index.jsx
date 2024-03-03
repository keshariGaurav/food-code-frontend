import Button from '@mui/material/Button';

const ActionButton = (props) => {
    const name = props.buttonName;
    const color = props.buttonColor;
    const callback = props.callback;
    return (
        <Button
            variant="contained"
            sx={{
                backgroundColor: color,
                '&:hover': {
                    backgroundColor: color,
                },
            }}
            onClick={callback}
        >
            {name}
        </Button>
    );
};
export default ActionButton;
