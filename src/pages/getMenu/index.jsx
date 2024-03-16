import { useState, useEffect } from 'react';
const GetMenuItem = () => {
    const [menuItems, setMenuItems] = useState([]);
    const [imageUrl, setImageUrl] = useState('');

    // useEffect(() => {
    //     fetchMenuItems();
    // }, []);
    // const convertBufferToBlob = (buffer, contentType) => {
    //     return new Blob([new Uint8Array(buffer.data)], { type: 'image/png' });
    // };
    // const fetchMenuItems = async () => {
    //     try {
    //         const response = await fetch('http://localhost:3100/api/v1/menus/65f414964289deaeeaa6a64b');
    //         const data = await response.json();
    //         console.log(data.data.menuItems);
    //         setMenuItems(data.data.menuItems);
    //         const imageBlob = data.data.menuItems.image ? convertBufferToBlob(data.data.menuItems.image) : null;
    //         const imageUrl = imageBlob ? URL.createObjectURL(imageBlob) : '';
    //         console.log(imageUrl);
    //         setImageUrl(imageUrl);
    //     } catch (error) {
    //         console.error('Failed to fetch menu items:', error);
    //     }
    // };
    return (
        <div>
            <div>
                <h3>List ALL Menu Item</h3>
            </div>
        </div>
    );
};

export default GetMenuItem;
