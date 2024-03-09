import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import PropTypes from 'prop-types';
const NewAddOnButton = (props) => {
    const callback = props.callback;
    const handler = () => {
        if (props.callback) {
            callback();
        }
    };
    return (
        <Button variant="newAddon" startIcon={<AddIcon />} onClick={handler}>
            New Add-on
        </Button>
    );
};
NewAddOnButton.propTypes = {
    callback: PropTypes.func.isRequired,
};
export default NewAddOnButton;
