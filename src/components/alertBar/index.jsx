import Alert from '@mui/material/Alert';
const AlertBar = (props) => {
    const severity = props.type;
    const message = props.message;
    return <Alert severity={severity}>{message}</Alert>;
};
export default AlertBar;
