import AddPhotoAlternateTwoToneIcon from '@mui/icons-material/AddPhotoAlternateTwoTone';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import { useState } from 'react';

const UploadImage = (props) => {
    const [files, setFiles] = useState([]);

    const handleChange = (e) => {
        setFiles((prevFiles) => {
            return [...prevFiles, ...Array.from(e.target.files)];
        });
    };
    console.log(files);
    return (
        <>
            <Input accept="image/*" id="contained-button-file" multiple type="file" sx={{ display: 'none' }} onChange={handleChange} />
            <label htmlFor="contained-button-file">
                <Button
                    variant="outlined"
                    component="span"
                    startIcon={<AddPhotoAlternateTwoToneIcon />}
                    sx={{
                        color: 'gray',
                        borderColor: 'gray',
                        '&:hover': {
                            borderColor: 'black',
                        },
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '50px',
                        width: '50px',
                    }}
                />
            </label>
        </>
    );
};

export default UploadImage;
