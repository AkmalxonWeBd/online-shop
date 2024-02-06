import React, { useState } from 'react';

const UpdateBanner = ({ banner, onUpdate }) => {
    const [newImage, setNewImage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newImage) {
            onUpdate(banner.id, newImage);
            setNewImage('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>New Image:</label>
                <input
                    type="file"
                    onChange={(e) => setNewImage(e.target.files[0])}
                    accept="image/png, image/jpeg"
                />
            </div>
            <button type="submit">Update</button>
        </form>
    );
};

export default UpdateBanner;