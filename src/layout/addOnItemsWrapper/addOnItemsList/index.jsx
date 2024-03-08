import { List, Stack } from '@mui/material';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { useTheme } from '@mui/material/styles';

const AddOnItemsList = (props) => {
    const theme = useTheme();

    const data = props.data ?? [];
    const callback = props.callback;
    const handleDelete = (idx) => {
        if (callback) {
            callback(idx);
        }
    };
    return (
        <List sx={{ display: 'flex', flexWrap: 'wrap', overflow: 'auto', maxHeight: '300px' }}>
            {data.map((li, idx) => {
                return (
                    <ListItem
                        sx={{ backgroundColor: `${theme.palette.grey['200']}`, marginBottom: '5px', marginRight: '5px', width: '48%' }}
                        key={idx}
                        secondaryAction={
                            <IconButton
                                edge="end"
                                aria-label="delete"
                                onClick={() => {
                                    handleDelete(idx);
                                }}
                            >
                                <DeleteIcon />
                            </IconButton>
                        }
                    >
                        <ListItemText primary={li.sidekick} secondary={`Rs. ${li.price}`} />
                    </ListItem>
                );
            })}
        </List>
    );
};
export default AddOnItemsList;
