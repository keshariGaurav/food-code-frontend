import Button from '@mui/material/Button';
import { Typography } from '@mui/material';

const ActionButton = (props) => {
    const name = props.buttonName;
    const variant = props.variant ?? 'save';
    const callback = props.callback;
    return (
        <Button variant={variant} onClick={callback}>
            <Typography variant="h3">{name}</Typography>
        </Button>
    );
};
export default ActionButton;
