import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
const BackButton = (props) => {
    return (
        <Button variant="backButton" startIcon={<ArrowBackIcon />}>
            BACK
        </Button>
    );
};
export default BackButton;
