import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PropTypes from 'prop-types';
const BackButton = (props) => {
    const handler = (e) => {
        if (props.callback) {
            callback(e);
        }
    };
    return (
        <Button variant="backButton" startIcon={<ArrowBackIcon />} onClick={handler}>
            BACK
        </Button>
    );
};
BackButton.propTypes = {
    callback: PropTypes.func.isRequired,
};
export default BackButton;
