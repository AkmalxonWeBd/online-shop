
import React, { useState } from 'react';

const AddBanner = ({ onAdd }) => {
    const [image, setImage] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await onAdd(image);
            setLoading(false);
        } catch (error) {
            console.error("Error uploading image:", error);
            setLoading(false);
        }
    };

    const handleImageUpload = (e) => {
        // Logic for handling image upload will go here
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="imageUpload">Image:</label>
                <input 
                    type="file" 
                    id="imageUpload" 
                    onChange={handleImageUpload}
                    accept="image/png, image/jpeg"
                />
                <button type="submit" disabled={loading}>
                    {loading ? 'Saving...' : 'Save'}
                </button>
            </form>
        </div>
    );
};

export default AddBanner;